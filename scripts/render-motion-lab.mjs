import assert from 'node:assert/strict';
import {spawn, execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {cpSync, createWriteStream, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const cache = path.join(root, '.cache/motion-lab');
const stage = path.join(cache, 'hyperframes');
const source = path.join(root, 'src/new-media-v2/motion-lab/hyperframes');
const mix = path.join(root, 'public/audio/new-media-v2/motion-lab/mix.wav');
const picture = path.join(cache, 'picture.mp4');
const final = path.join(root, 'output/new-media-v2-motion-lab.mp4');
const cli = path.join(root, 'node_modules/hyperframes/bin/hyperframes.mjs');
const tmp = path.join(root, '.cache/tmp');
const env = {...process.env, HYPERFRAMES_NO_TELEMETRY: '1', HYPERFRAMES_BROWSER_PATH: '/usr/bin/chromium', TMPDIR: tmp};
const hash = (file) => createHash('sha256').update(readFileSync(file)).digest('hex');
const walk = (dir) => readdirSync(dir, {withFileTypes: true}).flatMap((entry) =>
  entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
const probe = (file) => JSON.parse(execFileSync('ffprobe', [
  '-v', 'error', '-show_streams', '-show_format', '-of', 'json', file,
], {cwd: root, encoding: 'utf8'}));
const run = (command, args) => execFileSync(command, args, {cwd: root, env, stdio: 'inherit'});
const nativeArgs = ['render', stage, '--fps=60', '--workers=2', '--quality=looks', '--crf=18',
  '--resolution=landscape', '--no-best-effort', '--strict', '-o', picture];

async function loggedCli(args, name, live = false) {
  const logFile = path.join(cache, `${name}.log`);
  const log = createWriteStream(logFile);
  console.log(`HyperFrames ${args[0]}: ${path.relative(root, logFile)}`);
  return await new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [cli, ...args], {cwd: root, env, stdio: ['ignore', 'pipe', 'pipe']});
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (data) => {stdout += data; log.write(data); if (live) process.stdout.write(data);});
    child.stderr.on('data', (data) => {stderr += data; log.write(data); if (live) process.stderr.write(data);});
    child.on('error', (error) => {log.end(); reject(error);});
    child.on('close', (status) => {
      log.end();
      const result = {status, log: path.relative(root, logFile), stdout, stderr};
      if (status === 0) resolve(result);
      else reject(Object.assign(new Error(`HyperFrames ${args[0]} failed (${status}); see ${result.log}\n${stderr.slice(-2000)}\n${stdout.slice(-2000)}`), {status}));
    });
  });
}

function parseJsonOutput(result) {
  try {return JSON.parse(result.stdout);}
  catch {
    const start = result.stdout.indexOf('{');
    const end = result.stdout.lastIndexOf('}');
    if (start !== -1 && end > start) {
      try {return JSON.parse(result.stdout.slice(start, end + 1));} catch {}
    }
    return {unparsed: true, log: result.log};
  }
}

try {
  mkdirSync(cache, {recursive: true});
  mkdirSync(tmp, {recursive: true});
  mkdirSync(path.dirname(final), {recursive: true});
  // Never silently reconstruct, summarize or repair an input at render time.
  // This checks the complete, lossless script package before staging or capture.
  run(process.execPath, ['scripts/prepare-motion-lab-input.mjs', '--check']);
  assert.equal(JSON.parse(readFileSync(path.join(root, 'node_modules/hyperframes/package.json'), 'utf8')).version, '0.8.185');
  for (const file of ['index.html', 'scene.js', 'style.css', 'timeline.json']) {
    assert.ok(existsSync(path.join(source, file)), `Missing HyperFrames source: ${file}`);
  }
  assert.ok(existsSync(mix), 'Missing motion-lab mix.wav; prepare audio before staging');
  for (let frame = 0; frame < 120; frame++) {
    assert.ok(existsSync(path.join(root, `public/images/new-media-v2/motion-lab/morph/frame-${String(frame).padStart(3, '0')}.png`)),
      `Missing authored 3D morph frame ${frame}; wait for Blender assets`);
  }

  // This is a generated staging directory. Source files and user assets stay untouched.
  rmSync(stage, {recursive: true, force: true});
  cpSync(source, stage, {recursive: true});
  mkdirSync(path.join(stage, 'assets'), {recursive: true});
  cpSync(path.join(root, 'public/images/new-media-v2/motion-lab'), path.join(stage, 'assets/images'), {recursive: true});
  cpSync(path.join(root, 'public/fonts/new-media-v2/style-review'), path.join(stage, 'assets/fonts'), {recursive: true});
  cpSync(path.join(root, 'node_modules/gsap/dist/gsap.min.js'), path.join(stage, 'assets/gsap.min.js'));
  cpSync(mix, path.join(stage, 'assets/mix.wav'));
  // HyperFrames static lint inspects inline authoring code. Inline the real
  // source, rather than adding a second or empty timeline registration.
  const stagedHtml = readFileSync(path.join(stage, 'index.html'), 'utf8')
    .replace('<script src="scene.js"></script>', () => `<script>\n${readFileSync(path.join(source, 'scene.js'), 'utf8')}\n</script>`)
    .replace('<link rel="stylesheet" href="style.css" />', () => `<style>\n${readFileSync(path.join(source, 'style.css'), 'utf8')}\n</style>`);
  writeFileSync(path.join(stage, 'index.html'), stagedHtml);
  const sourceFiles = walk(source).sort().map((file) => ({file: path.relative(source, file), sha256: hash(file)}));
  const stagedFiles = walk(stage).sort().map((file) => ({file: path.relative(stage, file), sha256: hash(file)}));
  const digest = createHash('sha256').update(JSON.stringify({
    tool: 'hyperframes@0.8.185', fps: 60, workers: 2, quality: 'looks', crf: 18,
    resolution: 'landscape', browser: '/usr/bin/chromium', files: stagedFiles,
  })).digest('hex');
  writeFileSync(path.join(cache, 'stage-manifest.json'), `${JSON.stringify({
    preparedAt: new Date().toISOString(), fingerprint: digest, source: path.relative(root, source),
    stage: path.relative(root, stage), sourceFiles, files: stagedFiles,
  }, null, 2)}\n`);

  const lint = await loggedCli(['lint', stage, '--json'], 'lint');
  const check = await loggedCli(['check', stage, '--json', '--at=0,2,5,9,11.5,14.5,16.1,16.6,17.25,17.5,18.9,19.983333', '--no-browser-gpu'], 'check');
  const gates = {checkedAt: new Date().toISOString(), fingerprint: digest,
    lint: {exitCode: lint.status, log: lint.log, result: parseJsonOutput(lint)},
    check: {exitCode: check.status, log: check.log, result: parseJsonOutput(check)},
    warningsPolicy: 'Warnings are retained; lint/runtime errors must fail.'};
  writeFileSync(path.join(cache, 'gates.json'), `${JSON.stringify(gates, null, 2)}\n`);
  if (process.argv.includes('--prepare-only')) {
    console.log('Prepared isolated HyperFrames staging and completed lint/check; no video render requested.');
  } else {
    rmSync(path.join(root, 'output/new-media-v2-motion-lab-validation.json'), {force: true});
    const fingerprintFile = path.join(cache, 'picture.sha256');
    const pictureHashFile = path.join(cache, 'picture.content.sha256');
    const reusable = !process.argv.includes('--force') && existsSync(picture) && existsSync(fingerprintFile)
      && existsSync(pictureHashFile) && readFileSync(fingerprintFile, 'utf8').trim() === digest
      && readFileSync(pictureHashFile, 'utf8').trim() === hash(picture);
    if (!reusable) {
      rmSync(fingerprintFile, {force: true});
      await loggedCli(nativeArgs, 'native-render', true);
      const video = probe(picture).streams.find((stream) => stream.codec_type === 'video');
      assert.equal(Number(video?.nb_frames), 1200, 'Native render must contain all 1200 frames');
      assert.equal(Number(video?.duration), 20, 'Native render must last 20 seconds');
      writeFileSync(fingerprintFile, `${digest}\n`);
      writeFileSync(pictureHashFile, `${hash(picture)}\n`);
    } else console.log('Reusing unchanged native HyperFrames 1200-frame picture cache.');

    // The picture is a real HyperFrames render. Remux the retained authored mix
    // explicitly so audio provenance never depends on implicit CLI behavior.
    run('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-nostdin', '-y',
      '-i', picture, '-i', mix, '-map', '0:v:0', '-map', '1:a:0', '-c:v', 'copy',
      '-c:a', 'aac', '-b:a', '256k', '-ar', '48000', '-ac', '2', '-t', '20',
      '-movflags', '+faststart', '-metadata', 'title=新媒体运营｜20秒动态方法样片', final]);
    const images = [['object', 2], ['bridge', 9], ['causality', 18.9]].map(([name, second]) => {
      const file = path.join(root, `output/new-media-v2-motion-lab-${name}.jpg`);
      run('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-nostdin', '-threads', '2',
        '-ss', String(second), '-i', final, '-filter_threads', '1', '-vf',
        'select=eq(n\\,0),scale=in_color_matrix=bt709:out_color_matrix=bt601:in_range=tv:out_range=pc,format=yuvj444p',
        '-fps_mode', 'passthrough', '-frames:v', '1', '-q:v', '1', '-y', file]);
      return {file: path.relative(root, file), second, frame: Math.round(second * 60), sha256: hash(file)};
    });
    const manifest = {renderedAt: new Date().toISOString(), renderer: 'hyperframes', version: '0.8.185',
      fingerprint: digest, cacheReused: reusable, nativeCommand: [process.execPath, cli, ...nativeArgs],
      nativePicture: {file: path.relative(root, picture), sha256: hash(picture)},
      sourceMix: {file: path.relative(root, mix), sha256: hash(mix)},
      output: {file: path.relative(root, final), sha256: hash(final)}, images,
      nativeWarningsLog: '.cache/motion-lab/native-render.log', gates: '.cache/motion-lab/gates.json'};
    writeFileSync(path.join(cache, 'render-manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
    console.log('Rendered real HyperFrames 20-second film and extracted actual MP4 JPEGs at 2s, 9s and 18.9s.');
  }
} catch (error) {
  console.error('Motion-lab render failed:', error.message);
  process.exitCode = Number.isInteger(error.status) && error.status > 0 ? error.status : 1;
}
