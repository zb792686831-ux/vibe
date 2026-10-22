import assert from 'node:assert/strict';
import {execFileSync, spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {readFileSync, rmSync, writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const reportFile = 'output/new-media-v2-style-review.json';
const videoFile = 'output/new-media-v2-style-trial.mp4';
const imageFiles = ['cat', 'river', 'loop'].map((name) => `output/new-media-v2-style-${name}.jpg`);
const manifestFile = 'public/audio/new-media-v2/style-review/audio-manifest.json';
const expectedMusicUrl = 'https://music.163.com/song?id=3451028893';
const absolute = (file) => path.join(root, file);
const json = (file) => JSON.parse(readFileSync(absolute(file), 'utf8'));
const sha256 = (file) => createHash('sha256').update(readFileSync(absolute(file))).digest('hex');
const capture = (command, args) => execFileSync(command, args, {
  cwd: root, encoding: 'utf8', maxBuffer: 4 * 1024 * 1024,
  stdio: ['ignore', 'pipe', 'inherit'],
});
const probe = (file) => JSON.parse(capture('ffprobe', [
  '-v', 'error', '-show_streams', '-show_format', '-of', 'json', absolute(file),
]));
const decode = (file, maps) => capture('ffmpeg', [
  '-hide_banner', '-loglevel', 'error', '-nostdin', '-xerror', '-threads', '2',
  '-i', absolute(file), ...maps.flatMap((map) => ['-map', map]),
  '-nostats', '-progress', 'pipe:1', '-f', 'null', '-',
]);
const rate = (value) => {
  const [numerator, denominator] = String(value).split('/').map(Number);
  return numerator / denominator;
};
const near = (actual, expected, tolerance, message) => {
  assert.ok(Number.isFinite(Number(actual)) && Math.abs(Number(actual) - expected) <= tolerance, message);
};

try {
  // Never leave an older passing report after any failed verification attempt.
  rmSync(absolute(reportFile), {force: true});
  const state = json('production/new-media-v2/approval-state.json');
  assert.equal(state.gates.copy.approved, true, 'Screen copy approval is required');
  assert.equal(state.gates.script.approved, true, 'Script approval is required');
  assert.equal(state.gates.assetsAndStyle.approved, false, 'This artifact is still awaiting style approval');
  assert.equal(state.fullEditStarted, false, 'This is a style trial, not the full edit');
  assert.equal(state.voiceover, false, 'The approved production intent has no new voiceover');

  const manifest = json(manifestFile);
  const musicReference = json('production/new-media-v2/music-reference.json');
  const bed = manifest.referenceBed;
  assert.equal(manifest.noVoiceover, true, 'The audio manifest must declare no newly added voiceover');
  assert.equal(manifest.durationSeconds, 10);
  assert.equal(manifest.sampleRate, 48000);
  assert.equal(manifest.channels, 2);
  assert.deepEqual(bed.sourceExcerptSeconds, [28, 38], 'Use the disclosed reference-film excerpt');
  assert.equal(bed.sourceFileSha256, state.referenceSha256, 'Reference source identity must match');
  assert.equal(bed.isIndependentBgm, false, 'The temporary reference bed is not isolated music');
  assert.equal(bed.mayContainReferenceFilmSoundEffects, true);
  assert.equal(bed.requestedIndependentMusicUrl, expectedMusicUrl);
  assert.equal(musicReference.canonicalUrl, expectedMusicUrl);
  assert.equal(musicReference.independentAudioAcquired, false, 'Independent music has not been acquired');
  assert.equal(state.backgroundMusic.independentAudioAcquired, false);

  const sourceMixFile = 'public/audio/new-media-v2/style-review/trial-mix.wav';
  const sourceMixSha256 = sha256(sourceMixFile);
  assert.equal(sourceMixSha256, manifest.outputs[sourceMixFile].sha256, 'The retained mix must match its provenance manifest');

  const images = imageFiles.map((file) => {
    const bytes = readFileSync(absolute(file));
    assert.ok(bytes.length > 4 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff,
      `${file}: JPEG start marker missing`);
    assert.ok(bytes.at(-2) === 0xff && bytes.at(-1) === 0xd9, `${file}: JPEG end marker missing`);
    const info = probe(file);
    const image = info.streams.find((stream) => stream.codec_type === 'video');
    assert.ok(image, `${file}: image stream missing`);
    assert.equal(image.codec_name, 'mjpeg', `${file}: expected real JPEG data`);
    assert.equal(image.width, 1920, `${file}: unexpected width`);
    assert.equal(image.height, 1080, `${file}: unexpected height`);
    const progress = decode(file, ['0:v:0']);
    assert.ok(progress.includes('progress=end'), `${file}: full image decode did not finish`);
    return {file, format: 'JPEG', width: image.width, height: image.height,
      bytes: bytes.length, sha256: sha256(file), fullDecode: 'passed'};
  });

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
  assert.equal(Number(video.nb_frames), 600, 'Expected all 600 trial frames');
  near(video.duration, 10, 0.02, 'Video must last ten seconds');
  near(info.format.duration, 10, 0.06, 'Container must last ten seconds');
  assert.equal(audio.codec_name, 'aac');
  assert.equal(Number(audio.sample_rate), 48000);
  assert.equal(audio.channels, 2);
  assert.equal(audio.channel_layout, 'stereo');
  near(audio.duration, 10, 0.06, 'Stereo audio must cover the complete trial');

  const progress = decode(videoFile, ['0:v:0', '0:a:0']);
  assert.ok(progress.includes('progress=end'), 'Full audio/video decode must finish');
  const decodedFrames = [...progress.matchAll(/^frame=(\d+)$/gm)].map((match) => Number(match[1])).at(-1);
  assert.equal(decodedFrames, 600, 'Full decode must actually produce 600 frames');
  const frameChecksums = capture('ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-nostdin', '-xerror', '-threads', '2',
    '-i', absolute(videoFile), '-map', '0:v:0', '-an',
    '-vf', 'select=eq(n\\,0)+eq(n\\,180)+eq(n\\,599)',
    '-fps_mode', 'passthrough', '-threads:v', '1', '-f', 'framemd5', '-',
  ]).split('\n').filter((line) => line.trim() && !line.startsWith('#'))
    .map((line) => line.split(',').at(-1).trim());
  assert.equal(frameChecksums.length, 3, 'All three selected frames must decode');
  assert.equal(new Set(frameChecksums).size, 3, 'Trial frames must change over time');

  const levels = spawnSync('ffmpeg', [
    '-hide_banner', '-nostdin', '-i', absolute(videoFile), '-map', '0:a:0', '-vn',
    '-af', 'volumedetect', '-f', 'null', '-',
  ], {cwd: root, encoding: 'utf8', maxBuffer: 1024 * 1024});
  assert.equal(levels.status, 0, 'Audio level analysis failed');
  const samplePeakDbFS = Number(levels.stderr.match(/max_volume: ([\d.-]+) dB/)?.[1]);
  const meanVolumeDb = Number(levels.stderr.match(/mean_volume: ([\d.-]+) dB/)?.[1]);
  assert.ok(Number.isFinite(samplePeakDbFS) && samplePeakDbFS < -0.1, 'Audio must retain sample-peak headroom');
  assert.ok(Number.isFinite(meanVolumeDb) && meanVolumeDb > -40, 'Trial audio must be non-silent');

  const report = {
    passed: true,
    status: 'style-review-awaiting-user-approval',
    isFinalFilm: false,
    checkedAt: new Date().toISOString(),
    approvals: {copy: true, script: true, assetsAndStyle: false, fullEditStarted: false},
    images,
    video: {
      file: videoFile, sha256: sha256(videoFile), durationSeconds: Number(video.duration),
      frames: Number(video.nb_frames), decodedFrames, width: video.width, height: video.height,
      fps: 60, codec: video.codec_name, pixelFormat: video.pix_fmt, colorSpace: video.color_space,
      fullAudioVideoDecode: 'passed', sampledFrames: [0, 180, 599], frameChecksums,
    },
    audio: {
      codec: audio.codec_name, sampleRate: Number(audio.sample_rate), channels: audio.channels,
      durationSeconds: Number(audio.duration), samplePeakDbFS, meanVolumeDb,
      sourceManifest: manifestFile, sourceManifestSha256: sha256(manifestFile),
      sourceMixFile, sourceMixSha256,
      referenceSourceSha256: bed.sourceFileSha256,
      referenceExcerptSeconds: bed.sourceExcerptSeconds,
      bedType: 'mixed-reference-film-excerpt',
      isIndependentBgm: false, mayContainReferenceFilmSoundEffects: true,
      independentMusic: {
        requestedUrl: expectedMusicUrl, acquired: false,
        observedAccessStatus: state.backgroundMusic.publicAccessStatus,
        observedPublicCheckResult: musicReference.publicCheckResult,
        additionalPublicSources: musicReference.alternativeSources ?? [],
        limitation: 'The production record reports proxy CONNECT 403 before reaching the service; independent music is still unavailable. This verifier makes no network request.',
      },
      productionIntent: {
        addNewVoiceover: false,
        basis: 'Declared production intent and the audio manifest, not speech detection or human listening.',
      },
      humanListeningPerformedByThisVerifier: false,
      absenceOfAllSpeechVerified: false,
      warning: 'The bed is the uploaded reference film\'s mixed stereo track from 28–38 seconds. It is not a clean independent BGM stem. Technical checks do not prove absence of original speech or sound effects.',
    },
  };
  writeFileSync(absolute(reportFile), `${JSON.stringify(report, null, 2)}\n`);
  console.log('PASS: three full-HD JPEGs and a ten-second, 600-frame 1080p/60fps H.264/AAC stereo style trial.');
  console.log('PASS: complete media decode, three distinct animation frames, audible audio with sample-peak headroom.');
  console.log(`Status: ${report.status}; independent BGM remains unavailable; user style approval is still required.`);
  console.log(`Report: ${reportFile}`);
} catch (error) {
  console.error('New media v2 style verification failed:', error.message);
  process.exitCode = Number.isInteger(error.status) && error.status > 0 ? error.status : 1;
}
