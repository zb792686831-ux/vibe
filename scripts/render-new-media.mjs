import {execFileSync} from 'node:child_process';
import {existsSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {newMediaPictureKey} from './new-media-picture-key.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const data = JSON.parse(readFileSync(path.join(root, 'src/new-media/timeline.generated.json'), 'utf8'));
const cache = path.join(root, '.cache/new-media-edit');
const picture = path.join(cache, 'picture.mp4');
const fingerprint = path.join(cache, 'picture.sha256');
mkdirSync(cache, {recursive: true});
mkdirSync(path.join(root, 'output'), {recursive: true});
const run = (command, args) => execFileSync(command, args, {cwd: root, stdio: 'inherit'});
const digest = newMediaPictureKey(root, data);
const reusable = existsSync(picture) && existsSync(fingerprint)
  && readFileSync(fingerprint, 'utf8').trim() === digest;

try {
  if (!reusable) {
    // The cgroup grants four CPU cores: three browser tabs leave room for encoding.
    run(path.join(root, 'node_modules/.bin/remotion'), [
      'render', 'src/index.ts', 'NewMediaIntro', picture,
      '--muted', '--concurrency=3', '--x264-preset=fast',
      '--props={"draftWithoutBgm":false}',
    ]);
    writeFileSync(fingerprint, `${digest}\n`);
  } else {
    console.log('Reusing the previously validated picture render; mixing does not require rerendering frames.');
  }
  const final = data.bgmStatus === 'reference-music-present';
  const filename = final ? 'new-media-intro.mp4' : 'new-media-intro-preview.mp4';
  run('ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-nostdin', '-y',
    '-i', picture, '-i', path.join(root, 'public/audio/new-media/mix.mp3'),
    '-map', '0:v:0', '-map', '1:a:0', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '256k',
    '-t', String(data.durationSeconds), '-movflags', '+faststart',
    '-metadata', 'title=新媒体运营：让内容连接到人',
    path.join(root, 'output', filename),
  ]);
  console.log(`${final ? 'Video' : 'Preview (reference BGM still missing)'}: output/${filename}`);
} catch (error) {
  console.error('New media render failed:', error.message);
  process.exitCode = Number.isInteger(error.status) && error.status > 0 ? error.status : 1;
}
