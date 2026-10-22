import assert from 'node:assert/strict';
import {execFileSync, spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {existsSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const videoFile = 'output/new-media-v2-final.mp4';
const reportFile = 'output/new-media-v2-final-validation.json';
const manifestFile = 'production/new-media-v2/final-audio-manifest.json';
const mixFile = 'public/audio/new-media-v2/final/final-mix.wav';
const timelineFile = 'src/new-media-v2/final/timeline.json';
const expectedCopySha256 = '9325dc02fb91a2bbc993e52b24372c2a17cb8eb9ff6b6d7673fce9e4b4d60773';
const expectedMusicSha256 = 'd275bb7a26d1755e6b193d97056343498051e37dc685c233d3c7ea241912dc59';
const imageFiles = ['cover', 'signals', 'loop'].map((name) => `output/new-media-v2-final-${name}.jpg`);
const sampledFrames = [0, 1800, 4200, 7799];
const absolute = (file) => path.isAbsolute(file) ? file : path.join(root, file);
const json = (file) => JSON.parse(readFileSync(absolute(file), 'utf8'));
const sha256 = (file) => createHash('sha256').update(readFileSync(absolute(file))).digest('hex');
const textHash = (units) => createHash('sha256').update(units.join('\n')).digest('hex');
const capture = (command, args) => execFileSync(command, args, {
  cwd: root, encoding: 'utf8', maxBuffer: 8 * 1024 * 1024,
  stdio: ['ignore', 'pipe', 'inherit'],
});
const probe = (file) => JSON.parse(capture('ffprobe', [
  '-v', 'error', '-show_streams', '-show_format', '-of', 'json', absolute(file),
]));
const near = (actual, expected, tolerance, message) => {
  assert.ok(Number.isFinite(Number(actual)) && Math.abs(Number(actual) - expected) <= tolerance, message);
};
const rate = (value) => {
  const [numerator, denominator] = String(value).split('/').map(Number);
  return numerator / denominator;
};
const decode = (file, maps) => capture('ffmpeg', [
  '-hide_banner', '-loglevel', 'error', '-nostdin', '-xerror', '-threads', '2',
  '-i', absolute(file), ...maps.flatMap((map) => ['-map', map]),
  '-nostats', '-progress', 'pipe:1', '-f', 'null', '-',
]);

try {
  // A failed run must not leave a previous passing report behind.
  rmSync(absolute(reportFile), {force: true});
  const frameArgument = process.argv.slice(2).find((arg) => arg.startsWith('--keyframe-frames='));
  const keyframeFrames = frameArgument
    ? frameArgument.slice('--keyframe-frames='.length).split(',').map(Number)
    : [1740, 3660, 6900];
  assert.equal(keyframeFrames.length, 3, 'Provide one source frame for each JPEG: cover, signals, loop');
  assert.ok(keyframeFrames.every((frame) => Number.isInteger(frame) && frame >= 0 && frame < 7800),
    'JPEG source frames must be integers within the 7800-frame film');

  const state = json('production/new-media-v2/approval-state.json');
  assert.equal(state.gates.copy.approved, true, 'Screen copy approval is required');
  assert.equal(state.gates.script.approved, true, 'Script approval is required');
  assert.equal(state.gates.assetsAndStyle.status, 'user-instructed-production-with-revisions',
    'The user authorized full production with revisions; do not claim the old R2 candidate was approved unchanged');
  assert.equal(state.gates.assetsAndStyle.approved, true, 'Explicit production authorization must be recorded');
  assert.equal(state.fullEditStarted, true, 'The current task is the full film');
  assert.equal(state.voiceover, false, 'The approved production intent contains no new voiceover');

  const approvedText = readFileSync(absolute('production/new-media-v2/copy-draft-r2.md'), 'utf8');
  const approvedUnits = [...approvedText.matchAll(/^(\d{2})\. (.+)$/gm)].map((match) => match[2]);
  assert.equal(approvedUnits.length, 40, 'The approved copy must contain all forty units');
  const copySha256 = textHash(approvedUnits);
  assert.equal(copySha256, expectedCopySha256, 'Approved screen copy has changed');
  assert.equal(state.gates.copy.approvedTextSha256, copySha256);
  const storyboard = json('production/new-media-v2/storyboard-proposal.json');
  assert.deepEqual(storyboard.approvedCopyUnits, approvedUnits);
  assert.deepEqual(storyboard.literalPause, {from: 1080, durationInFrames: 300});
  assert.deepEqual(storyboard.finalStableHold, {from: 7728, durationInFrames: 72});

  const timeline = json(timelineFile);
  assert.equal(timeline.durationSeconds, 130);
  assert.equal(timeline.durationInFrames, 7800);
  assert.equal(timeline.fps, 60);
  assert.equal(timeline.captions.length, 40);
  assert.deepEqual(timeline.captions.map((caption) => caption.unit), Array.from({length: 40}, (_, i) => i + 1));
  assert.deepEqual(timeline.captions.map((caption) => caption.text), approvedUnits,
    'Actual authoring captions must preserve all forty approved units exactly once and in order');
  let end = 0;
  for (const caption of timeline.captions) {
    near(caption.start, end, 0.000001, `Caption ${caption.unit}: unexpected gap or overlap`);
    assert.ok(Number.isFinite(caption.end) && caption.end > caption.start, `Caption ${caption.unit}: invalid duration`);
    end = caption.end;
  }
  near(end, 130, 0.000001, 'Captions must reach the complete ending');
  assert.ok(timeline.captions[6].start <= 18 && timeline.captions[6].end >= 23,
    'Keep the five-second pause under the approved stopped-viewer caption');
  assert.ok(timeline.captions[7].start >= 23, 'Reveal the five-second caption only after the literal pause');
  assert.ok(timeline.captions.at(-1).start <= 128.8 && timeline.captions.at(-1).end === 130,
    'Keep the final caption present throughout the ending hold');

  const manifest = json(manifestFile);
  const musicReference = json('production/new-media-v2/music-reference.json');
  const bed = manifest.musicBed;
  const activeMusic = musicReference.activeSource;
  assert.equal(manifest.noVoiceover, true, 'The audio manifest must declare no newly generated voiceover');
  assert.equal(manifest.durationSeconds, 130);
  assert.equal(manifest.sampleRate, 48000);
  assert.equal(manifest.channels, 2);
  assert.equal(bed.sourceType, 'user-supplied-bgm-file');
  assert.equal(bed.sourceFileSha256, expectedMusicSha256, 'Use the actual user-supplied BGM');
  assert.notEqual(bed.sourceFileSha256, state.referenceSha256, 'Do not confuse the visual reference with the music source');
  assert.deepEqual(bed.sourceExcerptSeconds, [0.048, 130.048]);
  assert.equal(bed.sourceChannels, 1);
  assert.equal(bed.outputChannels, 2);
  assert.equal(bed.sourceIsReferenceFilmMix, false);
  assert.equal(bed.musicSourceAvailable, true);
  assert.equal(bed.networkMusicSourceRequired, false);
  assert.equal(bed.purityOrVocalContentAssessed, false);
  assert.equal(bed.individualStemsAvailable, false);
  near(bed.referenceSync.verifiedUserBgmOffsetSeconds, 0.048, 0.000001, 'Unexpected music alignment offset');
  assert.equal(activeMusic.type, 'user-upload');
  assert.equal(activeMusic.fileName, 'bgm.mp4');
  assert.equal(activeMusic.sha256, expectedMusicSha256);
  assert.equal(activeMusic.acquired, true);
  assert.equal(state.backgroundMusic.activeSource, 'user-upload');
  assert.equal(state.backgroundMusic.sourceFileSha256, expectedMusicSha256);
  assert.equal(state.backgroundMusic.independentAudioAcquired, true);
  const originalMusicAvailableLocally = existsSync(absolute(bed.sourceFile));
  if (originalMusicAvailableLocally) {
    assert.equal(sha256(bed.sourceFile), expectedMusicSha256, 'Actual uploaded music does not match its recorded identity');
  }
  const mixMeasurement = manifest.outputs[mixFile];
  assert.ok(mixMeasurement && /^[a-f0-9]{64}$/.test(mixMeasurement.sha256), 'Final mix provenance is required');
  const sourceMixAvailableLocally = existsSync(absolute(mixFile));
  if (sourceMixAvailableLocally) {
    assert.equal(sha256(mixFile), mixMeasurement.sha256, 'Actual final mix must match its provenance manifest');
  }

  const info = probe(videoFile);
  const videos = info.streams.filter((stream) => stream.codec_type === 'video');
  const audios = info.streams.filter((stream) => stream.codec_type === 'audio');
  assert.equal(videos.length, 1, 'Expected one video stream');
  assert.equal(audios.length, 1, 'Expected one mixed stereo audio stream');
  const [video] = videos;
  const [audio] = audios;
  assert.equal(video.codec_name, 'h264');
  assert.equal(video.pix_fmt, 'yuv420p');
  assert.equal(video.color_space, 'bt709');
  assert.equal(video.width, 1920);
  assert.equal(video.height, 1080);
  assert.equal(rate(video.r_frame_rate), 60);
  assert.equal(rate(video.avg_frame_rate), 60);
  assert.equal(Number(video.nb_frames), 7800);
  near(video.duration, 130, 0.02, 'Video must last 130 seconds');
  near(info.format.duration, 130, 0.06, 'Container must last 130 seconds');
  assert.equal(audio.codec_name, 'aac');
  assert.equal(Number(audio.sample_rate), 48000);
  assert.equal(audio.channels, 2);
  assert.equal(audio.channel_layout, 'stereo');
  near(audio.duration, 130, 0.06, 'Audio must cover the complete film');

  const progress = decode(videoFile, ['0:v:0', '0:a:0']);
  assert.ok(progress.includes('progress=end'), 'Complete audio/video decoding must finish');
  const decodedFrames = [...progress.matchAll(/^frame=(\d+)$/gm)].map((match) => Number(match[1])).at(-1);
  assert.equal(decodedFrames, 7800, 'The full decode must actually produce all 7800 frames');
  const frameChecksums = capture('ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-nostdin', '-xerror', '-threads', '2',
    '-i', absolute(videoFile), '-map', '0:v:0', '-an',
    '-vf', `select=${sampledFrames.map((frame) => `eq(n\\,${frame})`).join('+')}`,
    '-fps_mode', 'passthrough', '-threads:v', '1', '-f', 'framemd5', '-',
  ]).split('\n').filter((line) => line.trim() && !line.startsWith('#'))
    .map((line) => line.split(',').at(-1).trim());
  assert.equal(frameChecksums.length, sampledFrames.length);
  assert.equal(new Set(frameChecksums).size, sampledFrames.length, 'Sampled pictures must differ over the film');

  const images = imageFiles.map((file, index) => {
    const bytes = readFileSync(absolute(file));
    assert.ok(bytes.length > 4 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff,
      `${file}: JPEG start marker missing`);
    assert.ok(bytes.at(-2) === 0xff && bytes.at(-1) === 0xd9, `${file}: JPEG end marker missing`);
    const image = probe(file).streams.find((stream) => stream.codec_type === 'video');
    assert.ok(image, `${file}: image stream missing`);
    assert.equal(image.codec_name, 'mjpeg');
    assert.equal(image.width, 1920);
    assert.equal(image.height, 1080);
    assert.ok(decode(file, ['0:v:0']).includes('progress=end'), `${file}: image decoding did not finish`);
    const frame = keyframeFrames[index];
    // Seek to a whole second, then select the exact remaining frame to avoid
    // decoding the entire film three extra times or rounding fractional seeks.
    const seekSecond = Math.floor(frame / 60);
    const withinSecond = frame - seekSecond * 60;
    const comparison = spawnSync('ffmpeg', [
      '-hide_banner', '-nostdin', '-threads', '2', '-ss', String(seekSecond),
      '-i', absolute(videoFile), '-i', absolute(file),
      '-filter_complex_threads', '1', '-filter_complex',
      `[0:v]select=eq(n\\,${withinSecond}),setpts=PTS-STARTPTS,format=gbrp[film];[1:v]format=gbrp[image];[film][image]ssim=shortest=1[out]`,
      '-map', '[out]', '-frames:v', '1', '-an', '-f', 'null', '-',
    ], {cwd: root, encoding: 'utf8', maxBuffer: 1024 * 1024});
    assert.equal(comparison.status, 0, `${file}: could not compare against video frame ${frame}`);
    const ssim = Number([...comparison.stderr.matchAll(/All:([\d.]+)/g)].at(-1)?.[1]);
    assert.ok(Number.isFinite(ssim) && ssim > 0.98, `${file}: unexpected exported-frame mismatch, SSIM ${ssim}`);
    return {file, format: 'JPEG', width: image.width, height: image.height, bytes: bytes.length,
      sha256: sha256(file), fullDecode: 'passed', videoFrame: frame, videoTimeSeconds: frame / 60, ssim};
  });

  const levels = spawnSync('ffmpeg', [
    '-hide_banner', '-nostdin', '-i', absolute(videoFile), '-map', '0:a:0', '-vn',
    '-af', 'volumedetect', '-f', 'null', '-',
  ], {cwd: root, encoding: 'utf8', maxBuffer: 1024 * 1024});
  assert.equal(levels.status, 0, 'Audio level analysis failed');
  const samplePeakDbFS = Number(levels.stderr.match(/max_volume: ([\d.-]+) dB/)?.[1]);
  const meanVolumeDb = Number(levels.stderr.match(/mean_volume: ([\d.-]+) dB/)?.[1]);
  assert.ok(Number.isFinite(samplePeakDbFS) && samplePeakDbFS < -0.1, 'The mixed audio must retain sample-peak headroom');
  assert.ok(Number.isFinite(meanVolumeDb) && meanVolumeDb > -40, 'The mixed audio must be audible');

  const report = {
    passed: true,
    status: 'full-film-technical-validation-passed',
    isFinalFilm: true,
    finalFilmAcceptanceByUserAssessed: false,
    checkedAt: new Date().toISOString(),
    approvals: {
      copy: true, script: true, assetsAndStyle: state.gates.assetsAndStyle.status, fullEditStarted: true,
      basis: state.gates.assetsAndStyle.approvalBasis ?? state.gates.assetsAndStyle.userConfirmation,
      note: 'The user authorized full production with specified revisions; this does not mean the previous R2 candidate was accepted unchanged.',
    },
    copy: {units: 40, approvedSha256: copySha256, actualAuthoringTimeline: timelineFile,
      timelineSha256: sha256(timelineFile), orderedCoverage: 'passed', literalPauseSeconds: [18, 23],
      finalStableHoldSeconds: [128.8, 130]},
    images,
    visualCheckScope: 'JPEG decoding and SSIM verify correspondence with exported frames. Frame hashes verify sampled changes. These do not establish subjective readability, design quality or human visual review.',
    video: {
      file: videoFile, sha256: sha256(videoFile), durationSeconds: Number(video.duration),
      frames: Number(video.nb_frames), decodedFrames, width: video.width, height: video.height,
      fps: 60, codec: video.codec_name, pixelFormat: video.pix_fmt, colorSpace: video.color_space,
      fullAudioVideoDecode: 'passed', sampledFrames, frameChecksums,
    },
    audio: {
      codec: audio.codec_name, sampleRate: Number(audio.sample_rate), channels: audio.channels,
      durationSeconds: Number(audio.duration), samplePeakDbFS, meanVolumeDb,
      sourceManifest: manifestFile, sourceManifestSha256: sha256(manifestFile),
      sourceMixFile: mixFile, sourceMixSha256: mixMeasurement.sha256,
      sourceMixHashRechecked: sourceMixAvailableLocally,
      musicSource: {type: 'user-supplied-bgm-file', fileName: activeMusic.fileName,
        sha256: bed.sourceFileSha256, acquired: true, sourceExcerptSeconds: bed.sourceExcerptSeconds,
        referenceAlignmentSeconds: bed.referenceSync.verifiedUserBgmOffsetSeconds,
        originalUploadHashRechecked: originalMusicAvailableLocally, networkSourceRequired: false},
      productionIntent: {addNewVoiceover: false, basis: 'Declared production intent and the audio manifest.'},
      humanListeningPerformedByThisVerifier: false,
      absenceOfAllSpeechVerified: false,
      purityOrVocalContentAssessed: false,
      individualStemsAvailable: false,
      warning: 'The user supplied bgm.mp4; the film mixes its aligned excerpt with original added SFX. Technical checks do not establish vocal absence or clean isolated stems.',
    },
  };
  writeFileSync(absolute(reportFile), `${JSON.stringify(report, null, 2)}\n`);
  console.log('PASS: complete 130-second, 7800-frame 1080p60 H.264/AAC stereo film; all audio/video decoded.');
  console.log('PASS: forty unchanged approved copy units, three matching JPEGs, changing sampled frames and audio headroom.');
  console.log(`Report: ${reportFile}`);
} catch (error) {
  console.error('New media v2 final verification failed:', error.message);
  process.exitCode = Number.isInteger(error.status) && error.status > 0 ? error.status : 1;
}
