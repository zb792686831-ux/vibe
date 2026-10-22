#!/usr/bin/env node
// Lossless input handoff. This validates the declared machine-readable contract;
// it does not pretend to infer every unstated parameter in natural-language prose.
import {createHash} from 'node:crypto';
import {readFileSync, writeFileSync, statSync, mkdirSync, mkdtempSync, rmSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {isDeepStrictEqual} from 'node:util';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
const SELF = fileURLToPath(import.meta.url);
const PACKAGE = 'production/new-media-v2/motion-lab/codegen-input.json';
const BROWSER = 'src/new-media-v2/motion-lab/hyperframes/input.js';
const REPORT = 'production/new-media-v2/motion-lab/strict-input-report.json';
const FORMAT = 'motion-lab-lossless-codegen-input-v1';
const COPY_SHA = '9325dc02fb91a2bbc993e52b24372c2a17cb8eb9ff6b6d7673fce9e4b4d60773';
const SOURCE_PATHS = {
  storyboard: 'production/new-media-v2/storyboard-proposal.json',
  script: 'production/new-media-v2/script.md',
  approvedCopy: 'production/new-media-v2/copy-draft-r2.md',
  finalProduction: 'production/new-media-v2/final-production.md',
  sampleSpec: 'production/new-media-v2/motion-lab/SPEC.md',
  referenceMotionSpec: 'production/new-media-v2/motion-lab/reference-motion-spec.md',
  timeline: 'src/new-media-v2/motion-lab/hyperframes/timeline.json',
  assetsManifest: 'production/new-media-v2/motion-lab/assets-manifest.json',
  audioManifest: 'production/new-media-v2/motion-lab/audio-manifest.json',
  refinements: 'production/new-media-v2/motion-lab/refinements.json',
};
const DIRECTIVES = [
  ['earlierStyleRevision', 'nonono，剪的太low了，背景不要一直纯黑，可以有一些地方设置为浅色波点深色背景，文字或者别的什么动画要有曲线，该加的光效也要有，还有就是你的排版也很空，可以加一点别的素材或者贴纸装饰一下画面，但是不要突兀，有些文字效果可以带点光效，但不是所有，线条也不要细的，你再重新生成一个样稿我看一下'],
  ['latestFullFilmStyle', '动画节奏还是有点快，排版还是按照原来那样吧，背景只要深色背景，但是要纯黑与波点交替，动效背景，这次你直接生成成片'],
  ['installationAuthorization', '可以，你试一下，该装的装'],
  ['hyperframesRequirement', '再补充一个工具：HyperFrames，这次的样片要结合这个工具去生成'],
  ['continuation', '继续'],
  ['strictLosslessRule', '对了，你在生成视频的时候，禁止对输入的分镜脚本做任何摘要、精简、改写，必须将所有细节参数完整传递给代码生成步骤，缺失参数直接报错，不得用默认值替代'],
];

const S = {type: 'string', minLength: 1, pattern: '\\S'};
const N = {type: 'number'};
const NN = {type: 'number', minimum: 0};
const P = {type: 'number', exclusiveMinimum: 0};
const I = {type: 'integer', minimum: 0};
const PI = {type: 'integer', minimum: 1};
const B = {type: 'boolean'};
const SHA = {type: 'string', pattern: '^[a-f0-9]{64}$'};
const O = {type: 'object', minProperties: 1};
const arr = (items, min, max) => ({type: 'array', items, minItems: min, ...(max === undefined ? {} : {maxItems: max})});
const obj = properties => ({type: 'object', properties, required: Object.keys(properties), additionalProperties: true});
const pair = rule => arr(rule, 2, 2);
const shotSchema = obj({id: S, start: NN, end: P, from: I, durationInFrames: PI,
  copy: arr(PI, 1), visual: S, sound: S, screenText: arr(S, 1), textTreatment: S});
const filmSchema = obj({title: S, fps: PI, width: PI, height: PI, durationInFrames: PI,
  durationSeconds: P, voiceover: {const: false}, approvedCopyUnits: arr(S, 40, 40), shots: arr(shotSchema, 16, 16)});
const captionSchema = obj({unit: PI, start: NN, end: P, text: S});
const inputSchema = obj({id: S, launch: NN, arrival: P, recordAt: NN});
const timelineSchema = obj({durationSeconds: P, fps: PI, width: PI, height: PI,
  globalRange: pair(NN), voiceover: {const: false}, captions: arr(captionSchema, 8, 8),
  inputs: arr(inputSchema, 3, 3), recordActivation: NN, outputStart: NN, outputSettled: NN,
  runtimeDom: obj({record: S, output: S}), musicGlobalOffsetSeconds: N, renderer: S});
const imageSchema = obj({path: S, sha256: SHA, size: pair(PI), blendCache: S, renderSeconds: P});
const assetsSchema = obj({assets: obj({hero: imageSchema, edge: imageSchema, heart: imageSchema,
  bead: imageSchema, morph: obj({pathPattern: S, size: pair(PI), frames: PI, fps: PI,
    durationSeconds: P, samples: PI, denoise: B, renderSeconds: P, method: S, material: S,
    blendCache: S, frameHashes: arr(obj({frame: I, sha256: SHA}), 1)})}),
  generator: S, generatorSha256: SHA, blenderVersion: S, blenderPythonVersion: S,
  renderEngine: S, threads: PI, samples: PI, seed: I, denoise: B, transparentFilm: B,
  output: S, denoiseUnavailableReason: S, colorManagement: S, lighting: S,
  catSource: obj({path: S, sha256: SHA}), notes: S});
const audioEventSchema = obj({name: S, sourceType: S, sourceFile: S, sourceFileSha256: SHA,
  startSeconds: NN, endSeconds: P, durationSeconds: P, requestedPeakDbFS: N, purpose: S});
const quietSchema = obj({fromSeconds: NN, toSeconds: P, reason: S, actualPcmAllZero: {const: true}});
const audioSchema = obj({schema: S, status: S, durationSeconds: P, sampleRate: PI, channels: PI,
  addedVoiceover: {const: false}, sourcePurityOrVocalContentAssessed: B,
  musicBed: obj({sourceType: S, sourceFile: S, sourceFileSha256: SHA, originalUserUploadSha256: SHA,
    sourceAudioMetadata: obj({codec_name: S, sample_rate: S, channels: PI, duration: S}),
    sourceChannels: PI, outputChannels: PI, referenceSceneSeconds: pair(NN),
    referenceToMusicOffsetSeconds: N, sourceExcerptSeconds: pair(NN), gainDb: N,
    fadeInSeconds: NN, fadeOutSeconds: NN, looping: {const: false}, tempoChanged: {const: false},
    eqOrCompressionApplied: B, localDuckingApplied: B,
    measurementAfterFixedGainAndFades: obj({integratedLoudnessLUFS: N, truePeakDbTP: N})}),
  originalSfx: obj({seed: I, downloadedSamplesUsed: {const: false}, eventCount: PI,
    events: arr(audioEventSchema, 1), sfxMasterGainLinear: NN, sfxMasterGainDb: N,
    peakManagement: S, quietWindows: arr(quietSchema, 1)}),
  generator: obj({file: S, sha256: SHA, measurementHelper: S, measurementHelperSha256: SHA, dependencies: S}),
  outputs: O, standaloneMusicPublished: B, generatedAudioDirectoryGitIgnored: B});
const refinementSchemas = {
  'single-board-projection': obj({id: S, reason: S, method: S, heroOpacity: NN, edgeOpacity: NN,
    perspectivePx: P, rotationYDegreesAtExit: N, rotationZDegrees: S, localRangeSeconds: pair(NN), exitDistancePx: pair(N)}),
  'retained-stay-orbit': obj({id: S, reason: S, centerPx: pair(N), radiusPx: P, startDegrees: N,
    sweepDegrees: N, strokePx: P, strokeColor: S, maxOpacity: NN, revealSeconds: pair(NN),
    retireSeconds: pair(NN), questionCameraScaleFromTo: pair(P), questionCameraMoveSeconds: pair(NN), questionCameraReturnSeconds: pair(NN)}),
  'existing-aggregate-depth': obj({id: S, reason: S, geometry: S, revealSeconds: pair(NN),
    beads: arr(obj({id: S, rail: {enum: ['top', 'bottom']}, arcFraction: NN, radiusPx: P, opacity: NN}), 24, 24),
    depthStrokeWidthPx: P, edgeStrokeWidthPx: P, primaryRailStrokeWidthPx: P,
    fixedBranchPaths: arr(S, 4, 4), branchStrokePx: P, branchOpacity: NN, outputBranchRevealAfterSeconds: NN}),
  'source-legibility': obj({id: S, sourceLabelExitSeconds: pair(NN), replayArrowPath: S, arcRevealBeforeSemanticActivation: {const: false}}),
};
const refinementsSchema = obj({status: S, userApprovalOfEachNumericValue: {const: false},
  originalStoryboardMutated: {const: false}, reviewEvidence: arr(S, 1), refinements: arr(obj({id: S}), 4, 4)});
const sourceRecordSchema = obj({path: S, mediaType: S, byteLength: PI, sha256: SHA, text: S, bytesBase64: S});
const inventorySchema = arr(obj({sourceJsonPath: S, logicalPath: S, byteLength: PI, sha256: SHA}), 1);
const provenanceSchema = arr(obj({sourceJsonPath: S, logicalPath: S, requiredForRuntime: {const: false}, presentAtPackaging: B}), 1);
const FONT_FILES = [
  'public/fonts/new-media-v2/style-review/NotoSerifCJKSC-Regular.subset.woff',
  'public/fonts/new-media-v2/style-review/NotoSerifCJKSC-Bold.subset.woff',
];
const schema = obj({format: {const: FORMAT}, requiredFieldContract: O,
  userDirectives: arr(obj({id: S, text: S, textBase64: S, sha256: SHA}), DIRECTIVES.length, DIRECTIVES.length),
  sources: obj(Object.fromEntries(Object.keys(SOURCE_PATHS).map(key => [key, sourceRecordSchema]))),
  film: filmSchema, sample: obj({timeline: timelineSchema, assets: assetsSchema, audio: audioSchema,
    refinements: refinementsSchema, events: obj({inputs: arr(inputSchema, 3, 3), recordActivation: NN,
      outputStart: NN, outputSettled: NN, originalSfx: arr(audioEventSchema, 1), quietWindows: arr(quietSchema, 1)})}),
  integrity: obj({approvedCopyAlgorithm: S, approvedCopySha256: SHA, sourceDocumentCount: PI}),
  assetInventory: inventorySchema, provenanceInventory: provenanceSchema});
const CONTRACT = {
  schemaDialect: 'JSON Schema 2020-12 structural subset; supported keywords are enforced by this validator',
  validationSchema: schema,
  refinementSchemasById: refinementSchemas,
  sourceDocumentKeys: Object.keys(SOURCE_PATHS),
  runtimeMaterialRequirements: {fontFiles: FONT_FILES,
    required: 'Declared PNG frames/images, exact uploaded source music, generated audio mix and SFX files, and the actual two local browser fonts.',
    provenanceOnly: 'Blender editable caches, generator programs, source illustration and cached review evidence are recorded as provenance, not mandatory browser-loadable material. Their presence snapshot is not a fresh-clone runtime prerequisite.'},
  semantics: [
    'Missing fields, null, blank strings, empty arrays/objects in source JSON are errors; numeric zero and boolean false remain valid when allowed by their field rule.',
    'All 16 shots and every original field must match the complete storyboard JSON; 40 exact copy units use a fixed SHA-256 of UTF-8 newline-joined text.',
    'Sources retain exact original bytes (base64), complete decoded UTF-8 text, byte count and SHA-256. No source document is shortened or normalized.',
    'Eight sample captions, three inputs, named numeric events, complete manifests, refinements, user directives and every explicitly required runtime material are mandatory. Provenance cache absence never supplies a replacement asset or default parameter.',
    'This contract checks the explicitly declared fields and byte-level preservation. It does not claim semantic detection of every unspecified parameter in unrestricted natural-language prose.',
    'Author-authored SPEC/refinement numeric values are retained verbatim; they are not represented as individually approved user parameters.',
  ],
};

class InputError extends Error {
  constructor(jsonPath, message) { super(`${jsonPath}: ${message}`); this.jsonPath = jsonPath; }
}
const fail = (p, m) => { throw new InputError(p, m); };
const at = (p, k) => /^[A-Za-z_$][\w$]*$/.test(k) ? `${p}.${k}` : `${p}[${JSON.stringify(k)}]`;
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const fullPath = value => path.isAbsolute(value) ? value : path.join(ROOT, value);
const assert = (condition, p, message) => { if (!condition) fail(p, message); };
const near = (a, b) => Math.abs(a - b) < 1e-8;

function validateRule(value, rule, p) {
  assert(value !== null && value !== undefined, p, 'null/undefined is not an input value');
  if (Object.hasOwn(rule, 'const')) assert(isDeepStrictEqual(value, rule.const), p, `must equal ${JSON.stringify(rule.const)}`);
  if (rule.enum) assert(rule.enum.includes(value), p, `must be one of ${JSON.stringify(rule.enum)}`);
  if (rule.type === 'string') {
    assert(typeof value === 'string', p, 'must be a string');
    if (rule.minLength !== undefined) assert(value.length >= rule.minLength, p, 'must be nonempty');
    if (rule.pattern) assert(new RegExp(rule.pattern).test(value), p, 'does not match required string pattern');
  } else if (rule.type === 'number' || rule.type === 'integer') {
    assert(typeof value === 'number' && Number.isFinite(value), p, 'must be a finite number');
    if (rule.type === 'integer') assert(Number.isInteger(value), p, 'must be an integer');
    if (rule.minimum !== undefined) assert(value >= rule.minimum, p, `must be >= ${rule.minimum}`);
    if (rule.exclusiveMinimum !== undefined) assert(value > rule.exclusiveMinimum, p, `must be > ${rule.exclusiveMinimum}`);
  } else if (rule.type === 'boolean') assert(typeof value === 'boolean', p, 'must be a boolean');
  else if (rule.type === 'array') {
    assert(Array.isArray(value), p, 'must be an array');
    if (rule.minItems !== undefined) assert(value.length >= rule.minItems, p, `needs at least ${rule.minItems} items`);
    if (rule.maxItems !== undefined) assert(value.length <= rule.maxItems, p, `needs at most ${rule.maxItems} items`);
    value.forEach((item, i) => validateRule(item, rule.items, `${p}[${i}]`));
  } else if (rule.type === 'object') {
    assert(typeof value === 'object' && !Array.isArray(value), p, 'must be an object');
    if (rule.minProperties !== undefined) assert(Object.keys(value).length >= rule.minProperties, p, 'must be a nonempty object');
    for (const name of rule.required ?? []) assert(Object.hasOwn(value, name), at(p, name), 'required field missing; no default is substituted');
    for (const [name, child] of Object.entries(rule.properties ?? {})) if (Object.hasOwn(value, name)) validateRule(value[name], child, at(p, name));
  }
}

function noEmpty(value, p) {
  assert(value !== null && value !== undefined, p, 'null/undefined forbidden');
  if (typeof value === 'string') assert(value.trim().length > 0, p, 'blank string forbidden');
  else if (Array.isArray(value)) {
    assert(value.length > 0, p, 'empty array forbidden');
    value.forEach((item, i) => noEmpty(item, `${p}[${i}]`));
  } else if (typeof value === 'object') {
    assert(Object.keys(value).length > 0, p, 'empty object forbidden');
    for (const [key, child] of Object.entries(value)) noEmpty(child, at(p, key));
  } else if (typeof value === 'number') assert(Number.isFinite(value), p, 'non-finite number forbidden');
}

function equalWhole(value, original, p) {
  if (isDeepStrictEqual(value, original)) return;
  if (Array.isArray(original) && Array.isArray(value)) {
    assert(value.length === original.length, p, 'full array length differs from original source');
    original.forEach((item, i) => equalWhole(value[i], item, `${p}[${i}]`));
  } else if (original && typeof original === 'object' && value && typeof value === 'object') {
    for (const key of Object.keys(original)) {
      assert(Object.hasOwn(value, key), at(p, key), 'original field was omitted');
      equalWhole(value[key], original[key], at(p, key));
    }
    for (const key of Object.keys(value)) assert(Object.hasOwn(original, key), at(p, key), 'field is not present in the original source');
  } else fail(p, 'value differs from complete original input');
}

function readRequired(logical, p) {
  const filename = fullPath(logical);
  let bytes;
  try { assert(statSync(filename).isFile(), p, `not a regular file: ${logical}`); bytes = readFileSync(filename); }
  catch (error) { if (error instanceof InputError) throw error; fail(p, `required local file missing/unreadable: ${logical}`); }
  assert(bytes.length > 0, p, `required local file is empty: ${logical}`);
  return bytes;
}
function readSource(logical, p) {
  const bytes = readRequired(logical, `${p}.path`);
  let text;
  try { text = new TextDecoder('utf-8', {fatal: true}).decode(bytes); }
  catch { fail(`${p}.text`, 'source is not valid UTF-8'); }
  assert(Buffer.from(text, 'utf8').equals(bytes), `${p}.text`, 'UTF-8 must round-trip every original byte');
  const record = {path: logical, mediaType: logical.endsWith('.json') ? 'application/json' : 'text/markdown',
    byteLength: bytes.length, sha256: sha(bytes), text, bytesBase64: bytes.toString('base64')};
  if (logical.endsWith('.json')) {
    try { record.parsed = JSON.parse(text); } catch (error) { fail(`${p}.parsed`, `invalid source JSON: ${error.message}`); }
    noEmpty(record.parsed, `${p}.parsed`);
  }
  return record;
}
function freshSources() {
  return Object.fromEntries(Object.entries(SOURCE_PATHS).map(([key, logical]) => [key, readSource(logical, `$.sources.${key}`)]));
}
function userDirectives() {
  return DIRECTIVES.map(([id, text]) => ({id, text, textBase64: Buffer.from(text).toString('base64'), sha256: sha(Buffer.from(text))}));
}

function inventoryFor(assets, audio, refinements) {
  const inventory = [];
  const add = (logicalPath, sourceJsonPath, expected) => {
    validateRule(logicalPath, S, sourceJsonPath);
    const bytes = readRequired(logicalPath, sourceJsonPath);
    const digest = sha(bytes);
    if (expected !== undefined) {
      validateRule(expected, SHA, `${sourceJsonPath}#sha256`);
      assert(digest === expected, sourceJsonPath, `referenced file SHA-256 mismatch: ${logicalPath}`);
    }
    inventory.push({sourceJsonPath, logicalPath, byteLength: bytes.length, sha256: digest});
  };
  for (const [id, asset] of Object.entries(assets.assets)) {
    const p = `$.sample.assets.assets.${id}`;
    if (id === 'morph') {
      assert(asset.frameHashes.length === asset.frames, `${p}.frameHashes`, 'every morph frame requires a hash');
      assert(asset.pathPattern.includes('%03d'), `${p}.pathPattern`, 'must explicitly contain the authored %03d frame placeholder');
      asset.frameHashes.forEach((frame, i) => {
        assert(frame.frame === i, `${p}.frameHashes[${i}].frame`, 'frame hashes must cover every frame exactly in sequence');
        add(asset.pathPattern.replace('%03d', String(frame.frame).padStart(3, '0')), `${p}.frameHashes[${i}]`, frame.sha256);
      });
      assert(near(asset.frames / asset.fps, asset.durationSeconds), `${p}.durationSeconds`, 'morph frame count/fps must equal authored duration');
    } else add(asset.path, `${p}.path`, asset.sha256);
  }
  FONT_FILES.forEach((logical, i) => add(logical, `$.requiredFieldContract.runtimeMaterialRequirements.fontFiles[${i}]`));
  add(audio.musicBed.sourceFile, '$.sample.audio.musicBed.sourceFile', audio.musicBed.sourceFileSha256);
  audio.originalSfx.events.forEach((event, i) => add(event.sourceFile, `$.sample.audio.originalSfx.events[${i}].sourceFile`, event.sourceFileSha256));
  for (const [logical, output] of Object.entries(audio.outputs)) {
    validateRule(output, obj({codec_name: S, sample_rate: S, channels: PI, duration: S, frames: PI,
      samplePeakDbFS: N, integratedLoudnessLUFS: N, truePeakDbTP: N, firstAndLastStereoFrameZero: B,
      fullDecode: S, sha256: SHA}), at('$.sample.audio.outputs', logical));
    add(logical, at('$.sample.audio.outputs', logical), output.sha256);
  }
  return inventory;
}

function provenancePaths(assets, audio, refinements) {
  return [
    ...Object.entries(assets.assets).map(([id, asset]) => ({sourceJsonPath: `$.sample.assets.assets.${id}.blendCache`, logicalPath: asset.blendCache})),
    {sourceJsonPath: '$.sample.assets.generator', logicalPath: assets.generator},
    {sourceJsonPath: '$.sample.assets.catSource.path', logicalPath: assets.catSource.path},
    {sourceJsonPath: '$.sample.audio.generator.file', logicalPath: audio.generator.file},
    {sourceJsonPath: '$.sample.audio.generator.measurementHelper', logicalPath: audio.generator.measurementHelper},
    ...refinements.reviewEvidence.map((logicalPath, i) => ({sourceJsonPath: `$.sample.refinements.reviewEvidence[${i}]`, logicalPath})),
  ];
}
function provenanceFor(assets, audio, refinements) {
  return provenancePaths(assets, audio, refinements).map(entry => {
    const record = {...entry, requiredForRuntime: false, presentAtPackaging: false};
    try {
      const stat = statSync(fullPath(entry.logicalPath));
      if (stat.isFile()) {
        const bytes = readFileSync(fullPath(entry.logicalPath));
        record.presentAtPackaging = true; record.byteLength = bytes.length; record.sha256 = sha(bytes);
      }
    } catch (error) { if (!['ENOENT', 'ENOTDIR'].includes(error.code)) fail(entry.sourceJsonPath, `cannot inspect provenance presence: ${error.message}`); }
    return record;
  });
}

function validateSemantics(bundle) {
  const film = bundle.film, timeline = bundle.sample.timeline, audio = bundle.sample.audio;
  for (const [key, expected] of Object.entries({fps: 60, width: 1920, height: 1080, durationSeconds: 130, durationInFrames: 7800})) assert(film[key] === expected, `$.film.${key}`, 'must retain the approved full-film parameter');
  assert(sha(Buffer.from(film.approvedCopyUnits.join('\n'))) === COPY_SHA, '$.film.approvedCopyUnits', '40 approved copy units differ from their fixed SHA-256');
  const mdCopy = [...bundle.sources.approvedCopy.text.matchAll(/^(\d{2})\. (.+)$/gm)];
  assert(mdCopy.length === 40, '$.sources.approvedCopy.text', 'must retain all 40 numbered copy units');
  mdCopy.forEach((match, i) => {
    assert(Number(match[1]) === i + 1, '$.sources.approvedCopy.text', 'copy numbering must remain 01–40');
    equalWhole(match[2], film.approvedCopyUnits[i], `$.film.approvedCopyUnits[${i}]`);
  });
  equalWhole([...bundle.sources.script.text.matchAll(/^> (.+)$/gm)].map(m => m[1]), film.approvedCopyUnits, '$.sources.script.text');
  let cursor = 0; const covered = []; const ids = new Set();
  film.shots.forEach((shot, i) => {
    const p = `$.film.shots[${i}]`;
    assert(!ids.has(shot.id), `${p}.id`, 'shot ids must be unique'); ids.add(shot.id);
    assert(shot.end > shot.start, `${p}.end`, 'must be later than start');
    assert(shot.from === cursor, `${p}.from`, 'shot frame ranges must be contiguous');
    assert(near(shot.start * film.fps, shot.from), `${p}.start`, 'start seconds disagree with frame start');
    assert(near((shot.end - shot.start) * film.fps, shot.durationInFrames), `${p}.durationInFrames`, 'seconds/frame duration mismatch');
    assert(shot.copy.length === shot.screenText.length, `${p}.screenText`, 'all copy references need their unchanged text');
    shot.copy.forEach((n, j) => { assert(n <= 40, `${p}.copy[${j}]`, 'copy reference out of range'); equalWhole(shot.screenText[j], film.approvedCopyUnits[n - 1], `${p}.screenText[${j}]`); });
    covered.push(...shot.copy); cursor += shot.durationInFrames;
  });
  equalWhole(covered, Array.from({length: 40}, (_, i) => i + 1), '$.film.shots');
  assert(cursor === film.durationInFrames, '$.film.durationInFrames', '16 shots do not cover the full frame range');
  for (const [key, expected] of Object.entries({fps: 60, width: 1920, height: 1080, durationSeconds: 20})) assert(timeline[key] === expected, `$.sample.timeline.${key}`, 'must retain the declared sample parameter');
  equalWhole(timeline.globalRange, [28, 48], '$.sample.timeline.globalRange');
  let end = 0;
  timeline.captions.forEach((caption, i) => {
    const p = `$.sample.timeline.captions[${i}]`;
    assert(caption.unit === i + 10, `${p}.unit`, 'sample must include all eight approved units 10–17 in order');
    equalWhole(caption.text, film.approvedCopyUnits[caption.unit - 1], `${p}.text`);
    assert(near(caption.start, end), `${p}.start`, 'sample captions must be contiguous');
    assert(caption.end > caption.start && caption.end <= timeline.durationSeconds, `${p}.end`, 'caption timing outside sample');
    end = caption.end;
  });
  assert(near(end, timeline.durationSeconds), '$.sample.timeline.captions', 'captions must cover the complete sample');
  equalWhole(timeline.inputs.map(input => input.id), ['pause', 'replay', 'like'], '$.sample.timeline.inputs');
  timeline.inputs.forEach((input, i) => {
    const p = `$.sample.timeline.inputs[${i}]`;
    assert(input.launch < input.arrival && input.arrival <= timeline.durationSeconds, `${p}.arrival`, 'input must launch before it arrives within the sample');
    assert(near(input.recordAt, input.arrival), `${p}.recordAt`, 'recording must follow the actual input arrival');
  });
  assert(near(timeline.recordActivation, Math.min(...timeline.inputs.map(i => i.recordAt))), '$.sample.timeline.recordActivation', 'record activates at the first actual arrival');
  assert(timeline.outputStart >= Math.max(...timeline.inputs.map(i => i.recordAt)), '$.sample.timeline.outputStart', 'output cannot precede completed inputs');
  assert(timeline.outputSettled > timeline.outputStart && timeline.outputSettled <= timeline.durationSeconds, '$.sample.timeline.outputSettled', 'output must settle after it starts and before sample end');
  assert(audio.originalSfx.eventCount === audio.originalSfx.events.length, '$.sample.audio.originalSfx.eventCount', 'all authored SFX events are required');
  assert(near(audio.durationSeconds, timeline.durationSeconds), '$.sample.audio.durationSeconds', 'audio/sample duration mismatch');
  assert(near(audio.musicBed.referenceToMusicOffsetSeconds, timeline.musicGlobalOffsetSeconds), '$.sample.timeline.musicGlobalOffsetSeconds', 'music offset differs from the audio source manifest');
  audio.musicBed.referenceSceneSeconds.forEach((t, i) => assert(near(t, timeline.globalRange[i]), `$.sample.audio.musicBed.referenceSceneSeconds[${i}]`, 'BGM range differs from sample'));
  audio.musicBed.sourceExcerptSeconds.forEach((t, i) => assert(near(t, timeline.globalRange[i] + timeline.musicGlobalOffsetSeconds), `$.sample.audio.musicBed.sourceExcerptSeconds[${i}]`, 'BGM excerpt/offset mismatch'));
  const names = new Set();
  audio.originalSfx.events.forEach((event, i) => {
    const p = `$.sample.audio.originalSfx.events[${i}]`;
    assert(!names.has(event.name), `${p}.name`, 'duplicate SFX event'); names.add(event.name);
    assert(event.endSeconds > event.startSeconds && event.endSeconds <= audio.durationSeconds, `${p}.endSeconds`, 'event outside sample');
    assert(near(event.endSeconds - event.startSeconds, event.durationSeconds), `${p}.durationSeconds`, 'SFX interval and duration differ');
  });
  audio.originalSfx.quietWindows.forEach((quiet, i) => {
    assert(quiet.toSeconds > quiet.fromSeconds && quiet.toSeconds <= audio.durationSeconds, `$.sample.audio.originalSfx.quietWindows[${i}]`, 'invalid quiet window');
    audio.originalSfx.events.forEach((event, j) => assert(event.endSeconds <= quiet.fromSeconds || event.startSeconds >= quiet.toSeconds,
      `$.sample.audio.originalSfx.events[${j}]`, `SFX overlaps half-open quiet window ${i}`));
  });
  const refinements = bundle.sample.refinements.refinements;
  equalWhole(refinements.map(r => r.id), Object.keys(refinementSchemas), '$.sample.refinements.refinements');
  refinements.forEach((r, i) => validateRule(r, refinementSchemas[r.id], `$.sample.refinements.refinements[${i}]`));
  const beads = refinements.find(r => r.id === 'existing-aggregate-depth').beads;
  assert(new Set(beads.map(b => b.id)).size === 24, '$.sample.refinements.refinements[2].beads', 'all 24 authored population bead ids must remain unique');
  beads.forEach((b, i) => assert(b.arcFraction <= 1 && b.opacity <= 1, `$.sample.refinements.refinements[2].beads[${i}]`, 'arc fraction/opacity out of range'));
  equalWhole(bundle.sample.events, eventsFor(timeline, audio), '$.sample.events');
}
function eventsFor(timeline, audio) {
  return {inputs: timeline.inputs, recordActivation: timeline.recordActivation, outputStart: timeline.outputStart,
    outputSettled: timeline.outputSettled, originalSfx: audio.originalSfx.events, quietWindows: audio.originalSfx.quietWindows};
}

function validateBundle(bundle, checkBrowser) {
  validateRule(bundle, schema, '$');
  equalWhole(bundle.requiredFieldContract, CONTRACT, '$.requiredFieldContract');
  equalWhole(bundle.userDirectives, userDirectives(), '$.userDirectives');
  equalWhole(Object.keys(bundle.sources), Object.keys(SOURCE_PATHS), '$.sources');
  const current = freshSources();
  for (const key of Object.keys(SOURCE_PATHS)) equalWhole(bundle.sources[key], current[key], `$.sources.${key}`);
  equalWhole(bundle.film, current.storyboard.parsed, '$.film');
  for (const [key, source] of [['timeline', 'timeline'], ['assets', 'assetsManifest'], ['audio', 'audioManifest'], ['refinements', 'refinements']]) equalWhole(bundle.sample[key], current[source].parsed, `$.sample.${key}`);
  noEmpty(bundle.film, '$.film'); noEmpty(bundle.sample, '$.sample');
  validateSemantics(bundle);
  bundle.assetInventory.forEach((entry, i) => {
    const p = `$.assetInventory[${i}]`;
    const bytes = readRequired(entry.logicalPath, `${p}.logicalPath`);
    assert(bytes.length === entry.byteLength, `${p}.byteLength`, 'referenced file changed size');
    assert(sha(bytes) === entry.sha256, `${p}.sha256`, 'referenced file SHA-256 changed');
  });
  equalWhole(bundle.assetInventory, inventoryFor(bundle.sample.assets, bundle.sample.audio, bundle.sample.refinements), '$.assetInventory');
  equalWhole(bundle.provenanceInventory.map(({sourceJsonPath, logicalPath}) => ({sourceJsonPath, logicalPath})),
    provenancePaths(bundle.sample.assets, bundle.sample.audio, bundle.sample.refinements), '$.provenanceInventory');
  bundle.provenanceInventory.forEach((entry, i) => {
    if (entry.presentAtPackaging) {
      validateRule(entry.byteLength, PI, `$.provenanceInventory[${i}].byteLength`);
      validateRule(entry.sha256, SHA, `$.provenanceInventory[${i}].sha256`);
    }
  });
  equalWhole(bundle.integrity, {approvedCopyAlgorithm: 'SHA-256 of UTF-8 approvedCopyUnits.join("\\n"), no trailing newline', approvedCopySha256: COPY_SHA, sourceDocumentCount: Object.keys(SOURCE_PATHS).length}, '$.integrity');
  if (checkBrowser) {
    const actual = readRequired(BROWSER, '$.browserInput');
    assert(actual.equals(Buffer.from(browserCode(bundle))), '$.browserInput', 'input.js must assign the entire exact codegen package to window.MotionLabInput');
  }
  return {sourceDocuments: Object.keys(SOURCE_PATHS).length, fullShots: bundle.film.shots.length,
    approvedCopyUnits: bundle.film.approvedCopyUnits.length, sampleCaptions: bundle.sample.timeline.captions.length,
    sampleInputs: bundle.sample.timeline.inputs.length, originalSfxEvents: bundle.sample.audio.originalSfx.events.length,
    populationBeads: bundle.sample.refinements.refinements[2].beads.length, referencedFiles: bundle.assetInventory.length};
}

const serialize = bundle => `${JSON.stringify(bundle, null, 2)}\n`;
const browserCode = bundle => `/* Complete lossless code-generation input. Do not replace with a summary. */\nwindow.MotionLabInput = ${JSON.stringify(bundle, null, 2).replaceAll('<', '\\u003c').replaceAll('\u2028', '\\u2028').replaceAll('\u2029', '\\u2029')};\n`;
function writeRequired(logical, value) { mkdirSync(path.dirname(fullPath(logical)), {recursive: true}); writeFileSync(fullPath(logical), value); }
function readPackage(logical) {
  const bytes = readRequired(logical, '$.inputPackage');
  try { return JSON.parse(bytes.toString('utf8')); } catch (error) { fail('$.inputPackage', `invalid JSON: ${error.message}`); }
}
function positiveReport(bundle, counts, negativeTests) {
  const report = {status: 'passed', checkedAt: new Date().toISOString(), inputPackage: PACKAGE,
    inputSha256: sha(Buffer.from(serialize(bundle))), browserInput: BROWSER,
    validationScope: CONTRACT.semantics, counts, sourceHashes: Object.fromEntries(Object.entries(bundle.sources).map(([key, record]) => [key, {path: record.path, sha256: record.sha256, byteLength: record.byteLength}])),
    approvedCopySha256: COPY_SHA, noDefaultsSubstituted: true, originalSourcesModified: false,
    requiredFieldContract: CONTRACT};
  if (negativeTests !== undefined) report.negativeTests = negativeTests;
  return report;
}

function negativeTestsFor(bundle) {
  const directory = mkdtempSync(path.join(tmpdir(), 'motion-lab-strict-'));
  const cases = [
    ['missing-shot-visual', b => { delete b.film.shots[0].visual; }, '$.film.shots[0].visual'],
    ['null-duration', b => { b.film.shots[2].durationInFrames = null; }, '$.film.shots[2].durationInFrames'],
    ['blank-text-treatment', b => { b.film.shots[1].textTreatment = ' '; }, '$.film.shots[1].textTreatment'],
    ['missing-input-arrival', b => { delete b.sample.timeline.inputs[1].arrival; }, '$.sample.timeline.inputs[1].arrival'],
    ['missing-complete-source-text', b => { delete b.sources.script.text; }, '$.sources.script.text'],
    ['missing-asset-file', b => { b.assetInventory[0].logicalPath = path.join(directory, 'does-not-exist.png'); }, '$.assetInventory[0].logicalPath'],
    ['edited-caption', b => { b.sample.timeline.captions[0].text += '改'; }, '$.sample.timeline.captions[0].text'],
    ['missing-refinement-parameter', b => { delete b.sample.refinements.refinements[2].beads[0].radiusPx; }, '$.sample.refinements.refinements[2].beads[0].radiusPx'],
  ];
  try {
    return cases.map(([name, mutate, expectedPath]) => {
      const changed = structuredClone(bundle); mutate(changed);
      const filename = path.join(directory, `${name}.json`); writeFileSync(filename, serialize(changed));
      const command = [SELF, '--check', '--input', filename];
      const result = spawnSync(process.execPath, command, {cwd: ROOT, encoding: 'utf8', maxBuffer: 1024 * 1024});
      assert(result.status !== null && result.status !== 0, '$.negativeTests', `${name} must actually exit nonzero`);
      let response; try { response = JSON.parse(result.stderr); } catch { fail('$.negativeTests', `${name} did not return structured diagnostics`); }
      assert(response.error.jsonPath === expectedPath, '$.negativeTests', `${name}: expected ${expectedPath}, got ${response.error.jsonPath}`);
      return {name, command: [process.execPath, ...command], exitCode: result.status, expectedPath,
        actualPath: response.error.jsonPath, diagnostic: response.error.message, passed: true};
    });
  } finally { rmSync(directory, {recursive: true, force: true}); }
}

let custom = false;
try {
  const args = process.argv.slice(2); let check = false, selfTest = false, inputPath = PACKAGE;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--check') check = true;
    else if (args[i] === '--self-test') { check = true; selfTest = true; }
    else if (args[i] === '--input') { assert(i + 1 < args.length && !args[i + 1].startsWith('--'), '$.cli.input', '--input needs an explicit package path'); inputPath = args[++i]; custom = true; check = true; }
    else fail('$.cli', `unknown argument: ${args[i]}`);
  }
  assert(!(custom && selfTest), '$.cli', '--self-test validates the canonical package; do not combine it with --input');
  let bundle;
  if (check) bundle = readPackage(inputPath);
  else {
    const sources = freshSources();
    // Validate before deriving inventories/events, so malformed source structures
    // fail at their exact JSON path rather than through a later JS TypeError.
    for (const [key, rule] of [['storyboard', filmSchema], ['timeline', timelineSchema],
      ['assetsManifest', assetsSchema], ['audioManifest', audioSchema], ['refinements', refinementsSchema]]) {
      validateRule(sources[key].parsed, rule, `$.sources.${key}.parsed`);
    }
    bundle = {format: FORMAT, requiredFieldContract: CONTRACT, userDirectives: userDirectives(), sources,
      film: sources.storyboard.parsed,
      sample: {timeline: sources.timeline.parsed, assets: sources.assetsManifest.parsed,
        audio: sources.audioManifest.parsed, refinements: sources.refinements.parsed,
        events: eventsFor(sources.timeline.parsed, sources.audioManifest.parsed)},
      integrity: {approvedCopyAlgorithm: 'SHA-256 of UTF-8 approvedCopyUnits.join("\\n"), no trailing newline', approvedCopySha256: COPY_SHA, sourceDocumentCount: Object.keys(SOURCE_PATHS).length},
      assetInventory: inventoryFor(sources.assetsManifest.parsed, sources.audioManifest.parsed, sources.refinements.parsed),
      provenanceInventory: provenanceFor(sources.assetsManifest.parsed, sources.audioManifest.parsed, sources.refinements.parsed)};
    validateBundle(bundle, false);
    writeRequired(PACKAGE, serialize(bundle)); writeRequired(BROWSER, browserCode(bundle));
    bundle = readPackage(PACKAGE);
  }
  const counts = validateBundle(bundle, !custom);
  const negativeTests = selfTest ? negativeTestsFor(bundle) : undefined;
  if (!custom) writeRequired(REPORT, `${JSON.stringify(positiveReport(bundle, counts, negativeTests), null, 2)}\n`);
  process.stdout.write(`${JSON.stringify({status: 'passed', inputPackage: inputPath, counts, ...(negativeTests === undefined ? {} : {negativeTests: negativeTests.length})})}\n`);
} catch (error) {
  const diagnostic = {status: 'failed', error: {jsonPath: error instanceof InputError ? error.jsonPath : '$', message: error.message}};
  if (!custom) { try { writeRequired(REPORT, `${JSON.stringify({...diagnostic, checkedAt: new Date().toISOString()}, null, 2)}\n`); } catch {} }
  process.stderr.write(`${JSON.stringify(diagnostic)}\n`); process.exitCode = 1;
}
