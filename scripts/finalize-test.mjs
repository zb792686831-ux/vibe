import {execFileSync} from 'node:child_process';
import {accessSync, mkdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const input = path.join(root, 'output/remotion-test.mp4');
const output = path.join(root, 'output/test-5s.mp4');

try {
  accessSync(input);
  mkdirSync(path.dirname(output), {recursive: true});
  execFileSync('ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-nostdin', '-y',
    '-i', input,
    '-f', 'lavfi', '-i', 'sine=frequency=440:sample_rate=48000:duration=5',
    '-map', '0:v:0', '-map', '1:a:0',
    '-c:v', 'copy',
    '-af', 'volume=0.18,afade=t=in:st=0:d=0.12,afade=t=out:st=4.7:d=0.3',
    '-c:a', 'aac', '-b:a', '128k',
    '-t', '5', '-movflags', '+faststart', output,
  ], {cwd: root, stdio: 'inherit'});
  console.log(`FFmpeg test video: ${output}`);
} catch (error) {
  console.error('FFmpeg test finalization failed:', error.message);
  process.exitCode = Number.isInteger(error.status) && error.status > 0 ? error.status : 1;
}
