import assert from 'node:assert/strict';
import {execFileSync, spawnSync} from 'node:child_process';
import {readFileSync, rmSync, writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const timeline = JSON.parse(readFileSync(path.join(root, 'src/new-media/timeline.generated.json'), 'utf8'));
const voice = JSON.parse(readFileSync(path.join(root, 'production/new-media/voice-validation.json'), 'utf8'));
const final = timeline.bgmStatus === 'reference-music-present';
const filename = final ? 'new-media-intro.mp4' : 'new-media-intro-preview.mp4';
const videoPath = path.join(root, 'output', filename);
const reportPath = path.join(root, 'output/new-media-validation.json');
const capture = (command, args) => execFileSync(command, args, {cwd: root, encoding: 'utf8', maxBuffer: 4 * 1024 * 1024});

try {
  rmSync(reportPath, {force: true});
  assert.equal(voice.passed, true, 'Spoken content review must pass');
  assert.equal(voice.reviewedSentences, 49, 'All spoken sentences must have been reviewed');
  const probe = JSON.parse(capture('ffprobe', ['-v', 'error', '-show_streams', '-show_format', '-of', 'json', videoPath]));
  const video = probe.streams.find((item) => item.codec_type === 'video');
  const audio = probe.streams.find((item) => item.codec_type === 'audio');
  assert.ok(video && audio, 'Both narration and picture must be present');
  assert.equal(video.width, 1920);
  assert.equal(video.height, 1080);
  assert.equal(video.codec_name, 'h264');
  assert.equal(video.pix_fmt, 'yuv420p');
  assert.equal(video.color_space, 'bt709');
  assert.equal(video.r_frame_rate, '60/1');
  assert.equal(Number(video.nb_frames), timeline.durationInFrames);
  assert.ok(Number(probe.format.duration) < 180, 'The complete video must stay under three minutes');
  assert.ok(Math.abs(Number(video.duration) - timeline.durationSeconds) < 0.03);
  assert.ok(Math.abs(Number(audio.duration) - timeline.durationSeconds) < 0.07, 'Audio must reach the complete ending');
  assert.equal(audio.codec_name, 'aac');
  assert.equal(Number(audio.sample_rate), 48000);
  assert.equal(timeline.scenes.length, 17);
  const voices = timeline.scenes.reduce((sum, scene) => sum + scene.sentenceCues.length, 0);
  assert.equal(voices, 49, 'All authored narration sentences must be included');
  const last = timeline.scenes.at(-1);
  assert.equal(last.from + last.durationInFrames, timeline.durationInFrames);
  assert.ok(last.durationInFrames - last.sentenceCues.at(-1).from - last.sentenceCues.at(-1).durationInFrames >= 60, 'Keep at least a second after the final spoken line');
  execFileSync('ffmpeg', ['-v', 'error', '-nostdin', '-xerror', '-threads', '2', '-i', videoPath,
    '-map', '0:v:0', '-map', '0:a:0', '-f', 'null', '-'], {cwd: root, stdio: 'inherit'});
  const levels = spawnSync('ffmpeg', ['-hide_banner', '-nostdin', '-i', videoPath, '-vn',
    '-af', 'volumedetect', '-f', 'null', '-'], {cwd: root, encoding: 'utf8', maxBuffer: 1024 * 1024});
  assert.equal(levels.status, 0, 'Audio level analysis failed');
  const peakDb = Number(levels.stderr.match(/max_volume: ([\d.-]+) dB/)?.[1]);
  const meanDb = Number(levels.stderr.match(/mean_volume: ([\d.-]+) dB/)?.[1]);
  assert.ok(Number.isFinite(peakDb) && peakDb < -0.1, 'Audio peak must have headroom');
  assert.ok(Number.isFinite(meanDb) && meanDb > -40, 'Narration must be audible');
  const report = {passed: true, deliveryStatus: final ? 'final-with-reference-bgm' : 'preview-missing-reference-bgm',
    file: `output/${filename}`, durationSeconds: Number(video.duration), frames: Number(video.nb_frames),
    width: video.width, height: video.height, fps: 60, videoCodec: video.codec_name,
    pixelFormat: video.pix_fmt, colorSpace: video.color_space, audioCodec: audio.codec_name,
    sampleRate: Number(audio.sample_rate), scenes: 17, narrationSentences: voices,
    narrationValidation: voice, fullAudioVideoDecode: 'passed', audioLevels: {peakDb, meanDb},
    bgm: timeline.bgmStatus, checkedAt: new Date().toISOString()};
  writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(`PASS: ${report.durationSeconds}s, 17 scenes, 49 spoken sentences, 1080p/60fps, H.264/AAC, full decode.`);
  console.log(`Delivery status: ${report.deliveryStatus}`);
} catch (error) {
  console.error('New media validation failed:', error.message);
  process.exitCode = Number.isInteger(error.status) && error.status > 0 ? error.status : 1;
}
