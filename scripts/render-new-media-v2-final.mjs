import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const cache = path.join(root, '.cache/new-media-v2-final');
const picture = path.join(cache, 'picture.mp4');
const fingerprint = path.join(cache, 'picture.sha256');
const mix = path.join(root, 'public/audio/new-media-v2/final/final-mix.wav');
const run = (cmd, args) => execFileSync(cmd, args, {cwd: root, stdio: 'inherit'});
const walk = (dir) => readdirSync(path.join(root, dir), {withFileTypes: true})
  .flatMap(entry => entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
const files = [
  ...walk('src/new-media-v2/final'), ...walk('public/fonts/new-media-v2'),
  'public/images/new-media-v2/kitten-study.png', 'public/images/new-media-v2/r2/heart-sculpture.png',
  'remotion.config.ts', 'package-lock.json',
].sort();
const hash = createHash('sha256').update('NewMediaV2Final;1080p60;7800frames;h264;crf18;jpeg90;DOM-Img;v1');
for (const file of files) hash.update(file).update(readFileSync(path.join(root, file)));
const digest = hash.digest('hex');

try {
  if (!existsSync(mix)) throw new Error('Full mix missing. Run npm run video:prepare with the retained user BGM available.');
  mkdirSync(cache, {recursive: true});
  mkdirSync(path.join(root, 'output'), {recursive: true});
  const reusable = !process.argv.includes('--force') && existsSync(picture) && existsSync(fingerprint)
    && readFileSync(fingerprint, 'utf8').trim() === digest;
  if (!reusable) {
    rmSync(fingerprint, {force: true});
    run(path.join(root, 'node_modules/.bin/remotion'), [
      'render', 'src/index.ts', 'NewMediaV2Final', picture, '--muted', '--concurrency=3',
      '--image-format=jpeg', '--jpeg-quality=90', '--x264-preset=fast',
    ]);
    const info = JSON.parse(execFileSync('ffprobe', ['-v', 'error', '-show_streams', '-of', 'json', picture], {encoding: 'utf8'}));
    const v = info.streams.find(s => s.codec_type === 'video');
    if (!v || Number(v.nb_frames) !== 7800 || Number(v.duration) !== 130) throw new Error('Incomplete picture export; it will not be cached.');
    writeFileSync(fingerprint, `${digest}\n`);
  } else {
    console.log('Reusing the current 7800-frame picture; audio changes do not require rendering frames again.');
  }
  run('ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-nostdin', '-y', '-i', picture, '-i', mix,
    '-map', '0:v:0', '-map', '1:a:0', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '256k',
    '-ar', '48000', '-ac', '2', '-t', '130', '-movflags', '+faststart',
    '-metadata', 'title=一颗红心，去了哪里？｜新媒体运营',
    path.join(root, 'output/new-media-v2-final.mp4'),
  ]);
  for (const [name, second] of [['cover', 29], ['signals', 61], ['loop', 115]]) {
    run('ffmpeg', [
      '-hide_banner', '-loglevel', 'error', '-nostdin', '-threads', '2', '-ss', String(second),
      '-i', path.join(root, 'output/new-media-v2-final.mp4'), '-filter_threads', '1', '-vf',
      'select=eq(n\\,0),scale=in_color_matrix=bt709:out_color_matrix=bt601:in_range=tv:out_range=pc,format=yuvj444p',
      '-fps_mode', 'passthrough', '-frames:v', '1', '-q:v', '1', '-y',
      path.join(root, `output/new-media-v2-final-${name}.jpg`),
    ]);
  }
  console.log('Full film: output/new-media-v2-final.mp4; real exported-frame JPEGs: 29s, 61s, 115s.');
} catch (error) {
  console.error('New media v2 full render failed:', error.message);
  process.exitCode = Number.isInteger(error.status) && error.status > 0 ? error.status : 1;
}
