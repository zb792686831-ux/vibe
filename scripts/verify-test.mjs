import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {rmSync, writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const videoPath = path.join(root, 'output/test-5s.mp4');
const reportPath = path.join(root, 'output/validation.json');
const capture = (command, args) => execFileSync(command, args, {
  cwd: root,
  encoding: 'utf8',
  maxBuffer: 1024 * 1024,
  stdio: ['ignore', 'pipe', 'inherit'],
});

try {
  // A failed rerun must never leave an earlier passing report behind.
  rmSync(reportPath, {force: true});
  const metadata = JSON.parse(capture('ffprobe', [
    '-v', 'error', '-show_streams', '-show_format', '-of', 'json', videoPath,
  ]));
  const video = metadata.streams.find((stream) => stream.codec_type === 'video');
  const audio = metadata.streams.find((stream) => stream.codec_type === 'audio');
  assert.ok(video, 'Missing video stream');
  assert.ok(audio, 'Missing test audio stream');
  assert.equal(video.codec_name, 'h264', 'Video must use H.264');
  assert.equal(video.pix_fmt, 'yuv420p', 'Video must use yuv420p');
  assert.equal(video.color_space, 'bt709', 'Video must use BT.709');
  assert.equal(video.color_range, 'tv', 'Video must use limited color range');
  assert.equal(video.width, 1920, 'Unexpected width');
  assert.equal(video.height, 1080, 'Unexpected height');
  assert.equal(video.width / video.height, 16 / 9, 'Unexpected aspect ratio');
  for (const rate of [video.r_frame_rate, video.avg_frame_rate]) {
    const [numerator, denominator] = rate.split('/').map(Number);
    assert.equal(numerator / denominator, 60, 'Unexpected frame rate');
  }
  assert.equal(Number(video.nb_frames), 300, 'Expected exactly 300 video frames');
  assert.ok(Math.abs(Number(video.duration) - 5) < 0.02, 'Video must last five seconds');
  assert.ok(Math.abs(Number(metadata.format.duration) - 5) < 0.03, 'Container must last five seconds');
  assert.equal(audio.codec_name, 'aac', 'Test audio must use AAC');
  assert.equal(Number(audio.sample_rate), 48000, 'Unexpected audio sample rate');
  assert.ok(Math.abs(Number(audio.duration) - 5) < 0.03, 'Audio must last five seconds');

  // Decode both complete streams. Corrupt media must make the command fail.
  execFileSync('ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-nostdin', '-xerror',
    '-threads', '2', '-i', videoPath,
    '-map', '0:v:0', '-map', '0:a:0', '-f', 'null', '-',
  ], {cwd: root, stdio: 'inherit'});

  const frameChecksums = capture('ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-nostdin', '-xerror',
    '-threads', '2', '-i', videoPath, '-map', '0:v:0', '-an',
    '-vf', 'select=eq(n\\,0)+eq(n\\,150)+eq(n\\,299)',
    '-fps_mode', 'passthrough', '-threads:v', '1', '-f', 'framemd5', '-',
  ]).split('\n').filter((line) => line.trim() && !line.startsWith('#'))
    .map((line) => line.split(',').at(-1).trim());
  assert.equal(frameChecksums.length, 3, 'Three sampled frames must decode');
  assert.equal(new Set(frameChecksums).size, 3, 'Test animation must change between sampled frames');

  const report = {
    passed: true,
    checkedAt: new Date().toISOString(),
    file: 'output/test-5s.mp4',
    video: {
      codec: video.codec_name,
      pixelFormat: video.pix_fmt,
      colorSpace: video.color_space,
      colorRange: video.color_range,
      width: video.width,
      height: video.height,
      fps: 60,
      frames: Number(video.nb_frames),
      durationSeconds: Number(video.duration),
    },
    audio: {
      codec: audio.codec_name,
      sampleRate: Number(audio.sample_rate),
      durationSeconds: Number(audio.duration),
    },
    fullDecode: 'passed',
    sampledFrames: [0, 150, 299],
    frameChecksums,
    ffmpeg: capture('ffmpeg', ['-version']).split('\n')[0],
    ffprobe: capture('ffprobe', ['-version']).split('\n')[0],
  };
  writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log('PASS: 1920×1080, 16:9, 60 fps, 300 frames, 5 seconds, H.264 + AAC.');
  console.log('PASS: complete audio/video decode and three distinct animation frames.');
  console.log(`Validation report: ${reportPath}`);
} catch (error) {
  console.error('Video validation failed:', error.message);
  process.exitCode = Number.isInteger(error.status) && error.status > 0 ? error.status : 1;
}
