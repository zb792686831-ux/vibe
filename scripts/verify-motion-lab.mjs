import assert from 'node:assert/strict';
import {execFileSync, spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {createReadStream, existsSync, readFileSync, rmSync, statSync, writeFileSync} from 'node:fs';
import {createServer} from 'node:http';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const cache = path.join(root, '.cache/motion-lab');
const stage = path.join(cache, 'hyperframes');
const videoFile = 'output/new-media-v2-motion-lab.mp4';
const reportFile = 'output/new-media-v2-motion-lab-validation.json';
const timelineFile = 'src/new-media-v2/motion-lab/hyperframes/timeline.json';
const expectedCopyHash = '9325dc02fb91a2bbc993e52b24372c2a17cb8eb9ff6b6d7673fce9e4b4d60773';
const absolute = (file) => path.isAbsolute(file) ? file : path.join(root, file);
const json = (file) => JSON.parse(readFileSync(absolute(file), 'utf8'));
const sha256 = (file) => createHash('sha256').update(readFileSync(absolute(file))).digest('hex');
const capture = (command, args) => execFileSync(command, args, {
  cwd: root, encoding: 'utf8', maxBuffer: 16 * 1024 * 1024, stdio: ['ignore', 'pipe', 'inherit'],
});
const probe = (file) => JSON.parse(capture('ffprobe', ['-v', 'error', '-show_streams', '-show_format', '-of', 'json', absolute(file)]));
const near = (actual, expected, tolerance, message) =>
  assert.ok(Number.isFinite(Number(actual)) && Math.abs(Number(actual) - expected) <= tolerance, message);
const rate = (value) => {const [a, b] = String(value).split('/').map(Number); return a / b;};
const decode = (file, maps) => capture('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-nostdin', '-xerror',
  '-threads', '2', '-i', absolute(file), ...maps.flatMap((map) => ['-map', map]),
  '-nostats', '-progress', 'pipe:1', '-f', 'null', '-']);

async function runtimeCausality(timeline) {
  const require = createRequire(path.join(root, 'node_modules/hyperframes/package.json'));
  const puppeteer = require('puppeteer-core');
  const mime = {'.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
    '.json': 'application/json', '.png': 'image/png', '.woff': 'font/woff', '.wav': 'audio/wav'};
  const server = createServer((request, response) => {
    try {
      const relative = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
      const filename = path.resolve(stage, `.${relative === '/' ? '/index.html' : relative}`);
      if (!filename.startsWith(stage + path.sep) || !existsSync(filename) || !statSync(filename).isFile()) {
        response.writeHead(404).end(); return;
      }
      const size = statSync(filename).size;
      const headers = {'content-type': mime[path.extname(filename)] ?? 'application/octet-stream',
        'accept-ranges': 'bytes'};
      const range = request.headers.range;
      let start = 0;
      let end = size - 1;
      if (range) {
        const match = /^bytes=(\d+)-(\d*)$/.exec(range);
        if (!match) {response.writeHead(416, {'content-range': `bytes */${size}`}).end(); return;}
        start = Number(match[1]);
        end = match[2] === '' ? size - 1 : Math.min(Number(match[2]), size - 1);
        if (start > end || start >= size) {response.writeHead(416, {'content-range': `bytes */${size}`}).end(); return;}
        headers['content-range'] = `bytes ${start}-${end}/${size}`;
      }
      headers['content-length'] = end - start + 1;
      response.writeHead(range ? 206 : 200, headers);
      const stream = createReadStream(filename, {start, end});
      response.on('close', () => stream.destroy());
      stream.pipe(response);
    } catch {response.writeHead(400).end();}
  });
  await new Promise((resolve, reject) => {server.once('error', reject); server.listen(0, '127.0.0.1', resolve);});
  let browser;
  try {
    browser = await puppeteer.launch({executablePath: '/usr/bin/chromium', headless: true,
      args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-background-networking'],
      env: {...process.env, TMPDIR: path.join(root, '.cache/tmp')}});
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height: 1080, deviceScaleFactor: 1});
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(`http://127.0.0.1:${server.address().port}`, {waitUntil: 'domcontentloaded', timeout: 45000});
    await page.waitForFunction(() => typeof window.__motionLabState === 'function', {timeout: 45000});
    await page.waitForFunction(() => window.__timelines?.main?.duration() === 20, {timeout: 45000});
    const authoredCaptions = await page.evaluate(() => [...document.querySelectorAll('.caption')].map((element) => ({
      unit: Number(element.id.replace('caption-', '')),
      text: element.textContent.trim(),
      start: Number(element.dataset.start),
      duration: Number(element.dataset.duration),
    })));
    assert.equal(authoredCaptions.length, timeline.captions.length);
    for (const [index, caption] of authoredCaptions.entries()) {
      const expected = timeline.captions[index];
      assert.equal(caption.unit, expected.unit);
      assert.equal(caption.text, expected.text, 'Actual HTML captions must preserve the approved words');
      near(caption.start, expected.start, 0.000001, 'HTML caption start differs from the approved segment');
      near(caption.duration, expected.end - expected.start, 0.000001, 'HTML caption duration differs from the approved segment');
    }
    const times = [...new Set([0, 2, 9, 11, ...timeline.inputs.flatMap((input) =>
      [input.launch - 1 / 60, input.arrival - 1 / 60, input.arrival + 1 / 60, input.recordAt + 1 / 60]),
    timeline.outputStart - 1 / 60, timeline.outputStart + 1 / 60, 18.9, 1199 / 60])].sort((a, b) => a - b);
    const samples = [];
    for (const time of times) {
      samples.push(await page.evaluate(async (t, ids) => {
        const waiting = [];
        window.dispatchEvent(new CustomEvent('hf-seek', {detail: {time: t, waitUntil: (promise) => waiting.push(promise)}}));
        await Promise.all(waiting);
        await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        const record = document.getElementById(ids.record);
        const outputs = document.getElementById(ids.output);
        return {time: t, documentTime: Number(document.documentElement.dataset.time),
          state: window.__motionLabState(t),
          record: record ? {id: record.id, active: record.dataset.active, progress: record.dataset.progress,
            count: Number(record.dataset.count), opacity: getComputedStyle(record).opacity} : null,
          outputs: outputs ? {id: outputs.id, active: outputs.dataset.active, progress: outputs.dataset.progress,
            opacity: getComputedStyle(outputs).opacity} : null};
      }, time, timeline.runtimeDom));
    }
    assert.deepEqual(errors, [], 'The actual authoring page must not throw JavaScript errors');
    for (const sample of samples) {
      near(sample.documentTime, sample.time, 0.0001, 'hf-seek must update the actual DOM time');
      assert.ok(sample.record, 'Runtime record node must expose data-active');
      assert.ok(sample.outputs, 'Runtime outputs must expose data-progress');
      const expectedActive = sample.time >= timeline.recordActivation;
      assert.equal(['true', '1'].includes(sample.record.active), expectedActive,
        `Record node lit before input arrival or failed to light at ${sample.time}s`);
      assert.equal(sample.state.recordActive, expectedActive);
      const expectedCount = timeline.inputs.filter((input) => sample.time >= input.recordAt).length;
      assert.equal(sample.record.count, expectedCount, 'Actual record count must follow each input arrival');
      assert.equal(sample.state.recordCount, expectedCount);
      assert.equal(sample.state.inputs.length, timeline.inputs.length);
      for (const [index, actual] of sample.state.inputs.entries()) {
        const authored = timeline.inputs[index];
        assert.equal(actual.id, authored.id);
        assert.equal(actual.arrived, sample.time >= authored.arrival, 'Pulse arrival state does not match its actual path timing');
        assert.equal(actual.recorded, sample.time >= authored.recordAt, 'Input must be recorded after arrival');
        if (sample.time < authored.launch) assert.equal(actual.progress, 0);
        if (sample.time >= authored.arrival) assert.equal(actual.progress, 1);
      }
      const outputProgress = Number(sample.outputs.progress);
      assert.ok(Number.isFinite(outputProgress), 'Runtime output progress must be numeric');
      near(outputProgress, sample.state.outputProgress, 0.000001, 'Visible output path must follow deterministic output state');
      if (sample.time < timeline.outputStart) assert.equal(outputProgress, 0, 'Outputs grew before the final input arrival');
      if (sample.time > timeline.outputStart + 0.5) assert.ok(outputProgress > 0, 'Outputs did not grow after the authored start');
    }
    return {passed: true, method: 'Real Chromium page; hf-seek before and after each arrival; DOM record/output states inspected', samples};
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

try {
  rmSync(absolute(reportFile), {force: true});
  capture(process.execPath, ['scripts/prepare-motion-lab-input.mjs', '--check']);
  const completeInput = json('production/new-media-v2/motion-lab/codegen-input.json');
  assert.equal(completeInput.film.shots.length, 16, 'Keep every shot and field in code-generation input');
  assert.equal(completeInput.film.approvedCopyUnits.length, 40);
  const state = json('production/new-media-v2/approval-state.json');
  assert.equal(state.gates.copy.approved, true);
  assert.equal(state.gates.script.approved, true);
  assert.equal(state.voiceover, false);
  const approved = [...readFileSync(absolute('production/new-media-v2/copy-draft-r2.md'), 'utf8')
    .matchAll(/^(\d{2})\. (.+)$/gm)].map((match) => match[2]);
  assert.equal(approved.length, 40);
  const copyHash = createHash('sha256').update(approved.join('\n')).digest('hex');
  assert.equal(copyHash, expectedCopyHash, 'Do not change any approved copy');
  assert.equal(state.gates.copy.approvedTextSha256, copyHash);
  const timeline = json(timelineFile);
  assert.equal(timeline.durationSeconds, 20);
  assert.equal(timeline.fps, 60);
  assert.deepEqual(timeline.globalRange, [28, 48]);
  const fullTimeline = json('src/new-media-v2/final/timeline.json');
  const expectedCaptions = fullTimeline.captions.filter((caption) => caption.start >= 28 && caption.start < 48)
    .map((caption) => ({...caption, start: caption.start - 28, end: caption.end - 28}));
  assert.equal(timeline.captions.length, 8);
  for (const [index, caption] of timeline.captions.entries()) {
    const expected = expectedCaptions[index];
    assert.equal(caption.unit, expected.unit);
    assert.equal(caption.text, expected.text);
    near(caption.start, expected.start, 0.0001, 'Keep the approved subtitle segment start');
    near(caption.end, expected.end, 0.0001, 'Keep the approved subtitle segment end');
  }
  assert.equal(timeline.inputs.length, 3, 'The causal diagram must have three behavior inputs');
  for (const input of timeline.inputs) {
    assert.ok(Number.isFinite(input.launch) && input.arrival > input.launch, 'Each pulse must travel before arrival');
    assert.ok(input.recordAt >= input.arrival, 'No record event may precede its corresponding input arrival');
    assert.ok(timeline.outputStart > input.recordAt, 'Outputs may start only after every input has been recorded');
  }
  near(timeline.recordActivation, Math.min(...timeline.inputs.map((input) => input.recordAt)),
    0.0001, 'The record node must activate at the first actual record event');

  const renderManifest = json('.cache/motion-lab/render-manifest.json');
  const stageManifest = json('.cache/motion-lab/stage-manifest.json');
  const gates = json('.cache/motion-lab/gates.json');
  assert.equal(renderManifest.renderer, 'hyperframes');
  assert.equal(renderManifest.version, '0.8.185');
  assert.equal(renderManifest.fingerprint, stageManifest.fingerprint);
  assert.equal(gates.fingerprint, renderManifest.fingerprint);
  assert.equal(gates.lint.exitCode, 0);
  assert.equal(gates.check.exitCode, 0);
  assert.equal(sha256(videoFile), renderManifest.output.sha256, 'Actual MP4 must match the latest native render');
  assert.equal(sha256(renderManifest.nativePicture.file), renderManifest.nativePicture.sha256,
    'Native picture cache must match the real render provenance');
  assert.equal(sha256(renderManifest.sourceMix.file), renderManifest.sourceMix.sha256);
  for (const file of stageManifest.files) {
    assert.equal(sha256(path.join(stage, file.file)), file.sha256,
      `Staged asset changed after rendering: ${file.file}`);
  }
  for (const file of stageManifest.sourceFiles) {
    assert.equal(sha256(`src/new-media-v2/motion-lab/hyperframes/${file.file}`), file.sha256,
      'The native render must use the current authoring files');
    if (file.file !== 'index.html') assert.equal(sha256(path.join(stage, file.file)), file.sha256);
  }
  const sourceDir = absolute('src/new-media-v2/motion-lab/hyperframes');
  const expectedStagedHtml = readFileSync(path.join(sourceDir, 'index.html'), 'utf8')
    .replace('<script src="scene.js"></script>', () => `<script>\n${readFileSync(path.join(sourceDir, 'scene.js'), 'utf8')}\n</script>`)
    .replace('<link rel="stylesheet" href="style.css" />', () => `<style>\n${readFileSync(path.join(sourceDir, 'style.css'), 'utf8')}\n</style>`);
  assert.equal(readFileSync(path.join(stage, 'index.html'), 'utf8'), expectedStagedHtml,
    'The lintable staging HTML must inline the real, unchanged authoring sources');

  const audioManifestFile = 'production/new-media-v2/motion-lab/audio-manifest.json';
  const audioManifest = json(audioManifestFile);
  const musicHash = 'd275bb7a26d1755e6b193d97056343498051e37dc685c233d3c7ea241912dc59';
  assert.equal(audioManifest.addedVoiceover, false);
  assert.equal(audioManifest.durationSeconds, 20);
  assert.equal(audioManifest.musicBed.sourceType, 'user-supplied-bgm-file');
  assert.equal(audioManifest.musicBed.sourceFileSha256, musicHash);
  assert.deepEqual(audioManifest.musicBed.sourceExcerptSeconds, [28.048, 48.048]);
  assert.equal(audioManifest.musicBed.tempoChanged, false);
  assert.equal(audioManifest.musicBed.looping, false);
  assert.equal(audioManifest.outputs[renderManifest.sourceMix.file].sha256, renderManifest.sourceMix.sha256);
  const originalMusicHashRechecked = existsSync(absolute(audioManifest.musicBed.sourceFile));
  if (originalMusicHashRechecked) assert.equal(sha256(audioManifest.musicBed.sourceFile), musicHash);
  const sfxFile = 'public/audio/new-media-v2/motion-lab/sfx-only.wav';
  assert.equal(sha256(sfxFile), audioManifest.outputs[sfxFile].sha256);
  const quietWindows = audioManifest.originalSfx.quietWindows.map((window) => {
    const pcm = execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-nostdin',
      '-ss', String(window.fromSeconds), '-i', absolute(sfxFile),
      '-t', String(window.toSeconds - window.fromSeconds), '-map', '0:a:0',
      '-c:a', 'pcm_s16le', '-f', 's16le', '-'], {cwd: root, maxBuffer: 8 * 1024 * 1024});
    assert.ok(pcm.length > 0 && pcm.every((byte) => byte === 0), 'Authored quiet windows must contain no added SFX');
    return {fromSeconds: window.fromSeconds, toSeconds: window.toSeconds, sourcePcmAllZero: true};
  });

  const info = probe(videoFile);
  const videos = info.streams.filter((stream) => stream.codec_type === 'video');
  const audios = info.streams.filter((stream) => stream.codec_type === 'audio');
  assert.equal(videos.length, 1);
  assert.equal(audios.length, 1);
  const [video] = videos;
  const [audio] = audios;
  assert.equal(video.codec_name, 'h264');
  assert.equal(video.pix_fmt, 'yuv420p');
  assert.equal(video.color_space, 'bt709');
  assert.equal(video.width, 1920);
  assert.equal(video.height, 1080);
  assert.equal(rate(video.r_frame_rate), 60);
  assert.equal(rate(video.avg_frame_rate), 60);
  assert.equal(Number(video.nb_frames), 1200);
  near(video.duration, 20, 0.02, 'Video must last 20 seconds');
  near(info.format.duration, 20, 0.06, 'Container must last 20 seconds');
  assert.equal(audio.codec_name, 'aac');
  assert.equal(Number(audio.sample_rate), 48000);
  assert.equal(audio.channels, 2);
  near(audio.duration, 20, 0.06, 'Stereo audio must cover the sample');
  const progress = decode(videoFile, ['0:v:0', '0:a:0']);
  assert.ok(progress.includes('progress=end'));
  const decodedFrames = Number([...progress.matchAll(/^frame=(\d+)$/gm)].at(-1)?.[1]);
  assert.equal(decodedFrames, 1200, 'The complete decode must actually produce all 1200 frames');

  const images = renderManifest.images.map((image) => {
    const bytes = readFileSync(absolute(image.file));
    assert.ok(bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff, 'JPEG SOI marker missing');
    assert.ok(bytes.at(-2) === 0xff && bytes.at(-1) === 0xd9, 'JPEG EOI marker missing');
    assert.equal(sha256(image.file), image.sha256);
    const metadata = probe(image.file).streams.find((stream) => stream.codec_type === 'video');
    assert.equal(metadata.codec_name, 'mjpeg');
    assert.equal(metadata.width, 1920);
    assert.equal(metadata.height, 1080);
    assert.ok(decode(image.file, ['0:v:0']).includes('progress=end'));
    const seek = Math.floor(image.frame / 60);
    const remaining = image.frame - seek * 60;
    const comparison = spawnSync('ffmpeg', ['-hide_banner', '-nostdin', '-threads', '2', '-ss', String(seek),
      '-i', absolute(videoFile), '-i', absolute(image.file), '-filter_complex_threads', '1', '-filter_complex',
      `[0:v]select=eq(n\\,${remaining}),setpts=PTS-STARTPTS,format=gbrp[film];[1:v]format=gbrp[image];[film][image]ssim=shortest=1[out]`,
      '-map', '[out]', '-frames:v', '1', '-an', '-f', 'null', '-'],
    {cwd: root, encoding: 'utf8', maxBuffer: 1024 * 1024});
    assert.equal(comparison.status, 0, 'Could not compare actual MP4 frame and JPEG');
    const ssim = Number([...comparison.stderr.matchAll(/All:([\d.]+)/g)].at(-1)?.[1]);
    assert.ok(Number.isFinite(ssim) && ssim > 0.98, `JPEG mismatch: ${image.file}, SSIM=${ssim}`);
    return {...image, width: metadata.width, height: metadata.height, bytes: bytes.length, ssim,
      encoding: 'JPEG', colorConversion: 'BT.709 TV-range video → BT.601 full-range JPEG',
      mimeDelivery: 'not-applicable-local-artifact; no HTTP image MIME claim', fullDecode: 'passed'};
  });
  assert.deepEqual(images.map((image) => image.frame), [120, 540, 1134]);

  const levels = spawnSync('ffmpeg', ['-hide_banner', '-nostdin', '-i', absolute(videoFile), '-map', '0:a:0', '-vn',
    '-af', 'volumedetect,silencedetect=noise=-50dB:d=0.5', '-f', 'null', '-'],
  {cwd: root, encoding: 'utf8', maxBuffer: 1024 * 1024});
  assert.equal(levels.status, 0, 'Audio analysis failed');
  const peakDbFS = Number(levels.stderr.match(/max_volume: ([\d.-]+) dB/)?.[1]);
  const meanDbFS = Number(levels.stderr.match(/mean_volume: ([\d.-]+) dB/)?.[1]);
  assert.ok(Number.isFinite(peakDbFS) && peakDbFS < -0.1, 'Preserve audio peak headroom');
  assert.ok(Number.isFinite(meanDbFS) && meanDbFS > -40, 'Audio must be audible');
  const silenceIntervals = [...levels.stderr.matchAll(/silence_start: ([\d.]+)|silence_end: ([\d.]+) \| silence_duration: ([\d.]+)/g)]
    .map((match) => match[1] !== undefined ? {start: Number(match[1])} : {end: Number(match[2]), duration: Number(match[3])});
  assert.ok(!silenceIntervals.some((interval) => interval.duration >= 1), 'Unexpected long silence in the 20-second music sample');
  const runtime = await runtimeCausality(timeline);
  const report = {passed: true, status: 'representative-20-second-motion-lab-technical-validation-passed',
    checkedAt: new Date().toISOString(), isFinalFilm: false, fullFilmReplaced: false, userAcceptanceAssessed: false,
    renderer: {name: 'HyperFrames', version: '0.8.185', native: true, manifest: '.cache/motion-lab/render-manifest.json',
      fingerprint: renderManifest.fingerprint, nativeCommand: renderManifest.nativeCommand},
    completeScriptInput: {file: 'production/new-media-v2/motion-lab/codegen-input.json',
      sha256: sha256('production/new-media-v2/motion-lab/codegen-input.json'),
      allShotsRetained: completeInput.film.shots.length, allCopyUnitsRetained: completeInput.film.approvedCopyUnits.length,
      losslessSourceKeys: Object.keys(completeInput.sources), missingRequiredParametersAreErrors: true,
      originalStoryboardRewritten: false, check: 'scripts/prepare-motion-lab-input.mjs --check'},
    copy: {approved40UnitSha256: copyHash, unchangedSampleUnits: timeline.captions.map((caption) => caption.unit),
      globalRange: timeline.globalRange, authoringTimeline: timelineFile, authoringTimelineSha256: sha256(timelineFile)},
    causality: {inputs: timeline.inputs, recordActivation: timeline.recordActivation, outputStart: timeline.outputStart,
      authoredEventOrder: 'passed', actualRuntime: runtime},
    gates: {lint: gates.lint, check: gates.check, nativeRenderWarningsLog: renderManifest.nativeWarningsLog},
    video: {file: videoFile, sha256: sha256(videoFile), frames: Number(video.nb_frames), decodedFrames,
      durationSeconds: Number(video.duration), width: video.width, height: video.height, fps: 60,
      codec: video.codec_name, pixelFormat: video.pix_fmt, colorSpace: video.color_space, fullAudioVideoDecode: 'passed'},
    audio: {codec: audio.codec_name, sampleRate: Number(audio.sample_rate), channels: audio.channels,
      durationSeconds: Number(audio.duration), meanDbFS, peakDbFS, silenceIntervals,
      sourceMix: renderManifest.sourceMix, sourceManifest: audioManifestFile, sourceManifestSha256: sha256(audioManifestFile),
      userMusic: {sha256: musicHash, excerptSeconds: [28.048, 48.048], originalMusicHashRechecked,
        tempoChanged: false, looping: false}, quietWindows, newVoiceover: false, humanListeningPerformedByVerifier: false,
      absenceOfAllSpeechVerified: false}, images,
    limitations: ['Native runtime and decoded-frame checks do not establish subjective motion quality or user approval.',
      'JPEG files were decoded and compared against actual MP4 frames; no remote image delivery was assessed.']};
  writeFileSync(absolute(reportFile), `${JSON.stringify(report, null, 2)}\n`);
  console.log('PASS: native HyperFrames 20s / 1200-frame 1080p60 H.264/AAC sample, complete AV decode, causal DOM states and actual MP4 JPEG correspondence.');
  console.log(`Report: ${reportFile}`);
} catch (error) {
  console.error('Motion-lab verification failed:', error.message);
  process.exitCode = Number.isInteger(error.status) && error.status > 0 ? error.status : 1;
}
