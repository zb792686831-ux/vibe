import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {constants, copyFileSync, existsSync, mkdirSync, readFileSync, renameSync, writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {newMediaPictureKey, pictureSourceFiles} from './new-media-picture-key.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const cache = path.join(root, '.cache/new-media-edit');
const picture = path.join(cache, 'picture.mp4');
const fingerprint = path.join(cache, 'picture.sha256');
const baseline = path.join(cache, 'before-polish');
const sourceDirectory = path.join(root, 'src/new-media');
const timelinePath = path.join(sourceDirectory, 'timeline.generated.json');
const EXPECTED_FRAMES = 10246;
const run = (command, args) => execFileSync(command, args, {cwd: root, stdio: 'inherit'});
const capture = (command, args) => execFileSync(command, args, {cwd: root, encoding: 'utf8', maxBuffer: 4 * 1024 * 1024});
const sha = (file) => createHash('sha256').update(readFileSync(file)).digest('hex');
const rate = (value) => {
  const [n, d] = value.split('/').map(Number);
  return n / d;
};
const probe = (file) => {
  const metadata = JSON.parse(capture('ffprobe', ['-v', 'error', '-count_frames', '-show_streams', '-of', 'json', file]));
  const video = metadata.streams.find((stream) => stream.codec_type === 'video');
  assert.ok(video, `Missing video in ${path.basename(file)}`);
  assert.equal(metadata.streams.length, 1, 'The picture render must contain video only');
  assert.equal(video.width, 1920);
  assert.equal(video.height, 1080);
  assert.equal(video.codec_name, 'h264');
  assert.equal(video.pix_fmt, 'yuv420p');
  assert.equal(video.color_space, 'bt709');
  assert.equal(video.color_range, 'tv');
  assert.equal(rate(video.r_frame_rate), 60);
  assert.equal(rate(video.avg_frame_rate), 60);
  return {...video, countedFrames: Number(video.nb_read_frames)};
};

let changedPicture = false;
let changedFingerprint = false;
let previousFingerprint;
let oldBackup;
let fingerprintBackup;
let runDirectory;
let record;

try {
  const args = process.argv.slice(2);
  assert.ok(args.every((arg) => arg.startsWith('--scenes=') || arg === '--confirm-unchanged-elsewhere=true'),
    'Only --scenes=... and --confirm-unchanged-elsewhere=true are supported');
  assert.equal(args.filter((arg) => arg.startsWith('--scenes=')).length, 1,
    'Provide one --scenes=treadmill,six-loop argument');
  assert.ok(args.includes('--confirm-unchanged-elsewhere=true'),
    'This replaces specified scenes only. Confirm all other scenes are unchanged with --confirm-unchanged-elsewhere=true; otherwise do a full render.');
  const ids = args.find((arg) => arg.startsWith('--scenes=')).slice('--scenes='.length).split(',');
  assert.deepEqual([...ids].sort(), ['six-loop', 'treadmill'],
    'This audited repair supports exactly treadmill and six-loop; arbitrary source changes require a full render.');
  assert.ok(existsSync(picture) && existsSync(fingerprint),
    'Wait for the complete picture.mp4 and its picture.sha256 before patching.');
  const data = JSON.parse(readFileSync(timelinePath, 'utf8'));
  assert.equal(data.durationInFrames, EXPECTED_FRAMES);
  assert.equal(data.fps, 60);
  assert.equal(data.width, 1920);
  assert.equal(data.height, 1080);
  let end = 0;
  for (const scene of data.scenes) {
    assert.equal(scene.from, end, 'The scene timeline must be contiguous');
    assert.ok(Number.isInteger(scene.durationInFrames) && scene.durationInFrames > 0);
    end += scene.durationInFrames;
  }
  assert.equal(end, EXPECTED_FRAMES);
  const scenes = data.scenes.filter((scene) => ids.includes(scene.id)).sort((a, b) => a.from - b.from);
  assert.equal(scenes.length, ids.length);
  previousFingerprint = readFileSync(fingerprint, 'utf8');
  const oldKey = previousFingerprint.trim();
  assert.match(oldKey, /^[a-f0-9]{64}$/);
  assert.equal(newMediaPictureKey(root, data, {sourceDirectory: baseline}), oldKey,
    'The saved pre-polish sources, current timeline and fonts must match the old picture key. Unknown changes cannot be adopted.');

  const allowedReplacements = {
    'NewMediaVideo.tsx': ["scene.id === 'iterate' || scene.id === 'review'", "['iterate', 'review', 'treadmill'].includes(scene.id)"],
    'SceneVisuals.tsx': ["['定位', '选题', '内容', '分发', '互动', '复盘']", "['定位', '选题', '表达', '分发', '互动', '复盘']"],
  };
  const sourceAudit = [];
  for (const name of pictureSourceFiles) {
    const beforePath = path.join(baseline, name);
    const currentPath = path.join(sourceDirectory, name);
    const before = readFileSync(beforePath, 'utf8');
    const [oldText, newText] = allowedReplacements[name];
    assert.equal(before.split(oldText).length - 1, 1, `Expected one baseline edit anchor in ${name}`);
    assert.equal(readFileSync(currentPath, 'utf8'), before.replace(oldText, newText),
      `Unexpected source changes in ${name}; inspect all affected scenes and do a full render.`);
    sourceAudit.push({file: name, beforeSha256: sha(beforePath), afterSha256: sha(currentPath)});
  }
  const newKey = newMediaPictureKey(root, data);
  assert.notEqual(newKey, oldKey, 'No picture change needs repair');
  const original = probe(picture);
  assert.equal(original.countedFrames, EXPECTED_FRAMES, 'The old picture must decode to exactly 10246 frames');
  const originalPictureSha = sha(picture);
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  runDirectory = path.join(cache, `scene-patch-${timestamp}`);
  mkdirSync(runDirectory, {recursive: false});
  record = {status: 'preparing', operatorConfirmedUnchangedElsewhere: true,
    repair: 'treadmill font fit and six-loop expression label',
    scenes: scenes.map(({id, from, durationInFrames}) => ({id, from, durationInFrames})),
    oldKey, newKey, originalPictureSha256: originalPictureSha, sources: sourceAudit,
    totalFrames: EXPECTED_FRAMES, fps: 60, startedAt: new Date().toISOString()};
  const recordPath = path.join(runDirectory, 'repair-record.json');
  writeFileSync(recordPath, `${JSON.stringify(record, null, 2)}\n`);

  const pieces = [];
  let cursor = 0;
  for (const scene of scenes) {
    if (scene.from > cursor) pieces.push({input: 0, start: cursor, end: scene.from});
    const segment = path.join(runDirectory, `${scene.id}.mp4`);
    console.log(`Rendering only ${scene.id}: frames ${scene.from}–${scene.from + scene.durationInFrames - 1}`);
    run(path.join(root, 'node_modules/.bin/remotion'), [
      'render', 'src/index.ts', 'NewMediaIntro', segment,
      `--frames=${scene.from}-${scene.from + scene.durationInFrames - 1}`,
      '--muted', '--concurrency=3', '--x264-preset=fast', '--props={"draftWithoutBgm":false}',
    ]);
    const segmentProbe = probe(segment);
    assert.equal(segmentProbe.countedFrames, scene.durationInFrames, `Wrong patch length for ${scene.id}`);
    pieces.push({input: pieces.filter((piece) => piece.file).length + 1, start: 0, end: scene.durationInFrames, file: segment});
    cursor = scene.from + scene.durationInFrames;
  }
  if (cursor < EXPECTED_FRAMES) pieces.push({input: 0, start: cursor, end: EXPECTED_FRAMES});
  const replacement = path.join(runDirectory, 'picture.repaired.mp4');
  const oldPieces = pieces.filter((piece) => piece.input === 0);
  const labels = oldPieces.map((_, i) => `old${i}`);
  const filters = [`[0:v]split=${labels.length}${labels.map((label) => `[${label}]`).join('')}`];
  let oldIndex = 0;
  pieces.forEach((piece, i) => {
    const input = piece.input === 0 ? labels[oldIndex++] : `${piece.input}:v`;
    filters.push(`[${input}]trim=start_frame=${piece.start}:end_frame=${piece.end},setpts=PTS-STARTPTS[v${i}]`);
  });
  filters.push(`${pieces.map((_, i) => `[v${i}]`).join('')}concat=n=${pieces.length}:v=1:a=0[v]`);
  run('ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-nostdin', '-y', '-i', picture,
    ...pieces.filter((piece) => piece.file).flatMap((piece) => ['-i', piece.file]),
    '-filter_complex_threads', '1', '-filter_complex', filters.join(';'), '-map', '[v]', '-an',
    '-c:v', 'libx264', '-crf', '18', '-preset', 'fast', '-threads', '3',
    '-r', '60', '-fps_mode', 'cfr', '-pix_fmt', 'yuv420p',
    '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709', '-color_range', 'tv',
    '-movflags', '+faststart', replacement,
  ]);
  const repaired = probe(replacement);
  assert.equal(repaired.countedFrames, EXPECTED_FRAMES);
  assert.equal(Number(repaired.nb_frames), EXPECTED_FRAMES);
  assert.ok(Math.abs(Number(repaired.duration) - EXPECTED_FRAMES / 60) < 0.025);
  run('ffmpeg', ['-v', 'error', '-nostdin', '-xerror', '-threads', '2', '-i', replacement,
    '-map', '0:v:0', '-f', 'null', '-']);
  assert.equal(newMediaPictureKey(root, JSON.parse(readFileSync(timelinePath, 'utf8'))), newKey,
    'Picture sources changed while patching; refusing to adopt the result');
  assert.equal(readFileSync(fingerprint, 'utf8'), previousFingerprint, 'Another process changed the picture key');
  assert.equal(sha(picture), originalPictureSha, 'Another process changed the picture');

  // Keep recoverable copies before changing either cache file. The old key is
  // retained until the fully validated replacement and audit are in place.
  oldBackup = path.join(runDirectory, 'picture.before.mp4');
  fingerprintBackup = path.join(runDirectory, 'picture.before.sha256');
  copyFileSync(picture, oldBackup, constants.COPYFILE_EXCL);
  copyFileSync(fingerprint, fingerprintBackup, constants.COPYFILE_EXCL);
  assert.equal(sha(oldBackup), originalPictureSha);
  record = {...record, status: 'validated', repairedPictureSha256: sha(replacement),
    fullDecode: 'passed', completedAt: new Date().toISOString()};
  renameSync(replacement, picture);
  changedPicture = true;
  writeFileSync(recordPath, `${JSON.stringify(record, null, 2)}\n`);
  const nextKeyFile = path.join(runDirectory, 'picture.next.sha256');
  writeFileSync(nextKeyFile, `${newKey}\n`);
  renameSync(nextKeyFile, fingerprint);
  changedFingerprint = true;
  console.log(`Patched ${ids.join(', ')}; ${EXPECTED_FRAMES} frames fully decoded. Audit: ${path.relative(root, recordPath)}`);
} catch (error) {
  try {
    if (changedPicture && oldBackup) {
      const restore = path.join(runDirectory, 'picture.restore.mp4');
      copyFileSync(oldBackup, restore);
      renameSync(restore, picture);
    }
    if (changedFingerprint && previousFingerprint !== undefined) {
      const restoreKey = path.join(runDirectory, 'picture.restore.sha256');
      writeFileSync(restoreKey, previousFingerprint);
      renameSync(restoreKey, fingerprint);
    }
    if (runDirectory && record) writeFileSync(path.join(runDirectory, 'repair-record.json'),
      `${JSON.stringify({...record, status: 'failed-old-cache-retained', error: error.message}, null, 2)}\n`);
  } catch (rollbackError) {
    console.error('Rollback needs attention; preserved backups:', oldBackup, fingerprintBackup, rollbackError.message);
  }
  console.error('Scene patch failed:', error.message);
  process.exitCode = Number.isInteger(error.status) && error.status > 0 ? error.status : 1;
}
