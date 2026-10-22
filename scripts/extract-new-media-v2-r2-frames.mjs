import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const cwd = fileURLToPath(new URL('../', import.meta.url));
for (const [name, frame] of [['collage', 90], ['signal', 402], ['question', 540]]) {
  execFileSync('ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-threads', '2',
    '-i', 'output/new-media-v2-style-r2-trial.mp4', '-filter_threads', '1', '-vf',
    `select=eq(n\\,${frame}),scale=in_color_matrix=bt709:out_color_matrix=bt601:in_range=tv:out_range=pc,format=yuvj444p`,
    '-fps_mode', 'passthrough', '-frames:v', '1', '-q:v', '1', '-y',
    `output/new-media-v2-style-r2-${name}.jpg`,
  ], {cwd, stdio: 'inherit'});
  console.log(`Extracted ${name}: trial frame ${frame}, JPEG with explicit color-matrix conversion.`);
}
