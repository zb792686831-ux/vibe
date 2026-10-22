#!/usr/bin/env python3
"""Generate complete per-sentence Mandarin narration using local MeloTTS.

The model and Python environment live in ignored caches, never in Git.
"""
import argparse
import hashlib
import importlib.util
import json
import os
import sys
import time
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SPEEDS = {'hook': 1.00, 'relief': 0.94, 'ending': 0.94, 'tools': 1.03, 'start': 1.02}


def write_json(path, value):
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', encoding='utf8')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--storyboard', type=Path,
                        default=ROOT / 'production/new-media/storyboard.json')
    parser.add_argument('--model-dir', type=Path,
                        default=Path('/workspace/.cache/tts/models/vits-melo-tts-zh_en'))
    parser.add_argument('--engine-path', type=Path,
                        default=Path('/workspace/.cache/tts/venv/bin/python'))
    parser.add_argument('--output-dir', type=Path, default=ROOT / '.cache/new-media-tts')
    parser.add_argument('--threads', type=int, default=2)
    parser.add_argument('--overwrite', action='store_true')
    args = parser.parse_args()
    if importlib.util.find_spec('sherpa_onnx') is None:
        engine = args.engine_path.resolve()
        if not engine.is_file():
            parser.error('Install sherpa-onnx and soundfile in the supplied --engine-path environment')
        os.execv(str(args.engine_path), [str(args.engine_path), str(Path(__file__).resolve()), *sys.argv[1:]])

    import numpy as np
    import sherpa_onnx
    import soundfile as sf

    storyboard_path = args.storyboard.resolve()
    storyboard = json.loads(storyboard_path.read_text(encoding='utf8'))
    model = args.model_dir.resolve()
    output_dir = args.output_dir.resolve()
    clips_dir = output_dir / 'clips'
    clips_dir.mkdir(parents=True, exist_ok=True)
    jobs = []
    for scene in storyboard['scenes']:
        scene_id = scene['id']
        if not scene_id or Path(scene_id).name != scene_id:
            raise ValueError('Scene id must be a plain filename component')
        sentences = scene['sentences']
        if ''.join(sentences).strip() != scene['narration'].strip():
            raise ValueError(f'Sentences do not fully preserve narration for {scene_id}')
        for index, text in enumerate(sentences):
            if not text.strip():
                raise ValueError(f'Empty narration sentence in {scene_id}')
            jobs.append({
                'id': f'{scene_id}-{index + 1:02d}',
                'sceneId': scene_id,
                'sentenceIndex': index,
                'text': text,
                'speed': SPEEDS.get(scene_id, 1.0),
            })
    for job in jobs:
        if (clips_dir / f"{job['id']}.wav").exists() and not args.overwrite:
            raise FileExistsError('Narration output exists; use --overwrite explicitly to replace it')
    write_json(output_dir / 'batch-input.json', jobs)

    # Keep Jieba/model auxiliary resources resolvable without modifying source files.
    os.chdir(model)
    config = sherpa_onnx.OfflineTtsConfig(
        model=sherpa_onnx.OfflineTtsModelConfig(
            vits=sherpa_onnx.OfflineTtsVitsModelConfig(
                model=str(model / 'model.onnx'),
                lexicon=str(model / 'lexicon.txt'),
                tokens=str(model / 'tokens.txt'),
            ),
            provider='cpu', num_threads=args.threads,
        ),
        rule_fsts=','.join(str(model / name) for name in
                          ['date.fst', 'number.fst', 'new_heteronym.fst']),
        max_num_sentences=1,
    )
    if not config.validate():
        raise RuntimeError('Invalid MeloTTS model configuration')
    tts = sherpa_onnx.OfflineTts(config)
    manifest = {
        'complete': False,
        'sampleRate': None,
        'channels': 1,
        'format': 'PCM_16',
        'storyboardSha256': hashlib.sha256(storyboard_path.read_bytes()).hexdigest(),
        'engine': {'name': 'sherpa-onnx', 'version': sherpa_onnx.__version__, 'license': 'Apache-2.0'},
        'voice': {
            'name': 'MeloTTS Chinese/English generic female', 'speakerId': 0,
            'license': 'MIT (MyShell.ai 2024; included in model archive)',
            'source': 'https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/vits-melo-tts-zh_en.tar.bz2',
            'archiveSha256': 'e58351ed7149f290a54534538badd4077cdbe6fddc964b24d0bee870415d1514',
        },
        'clips': [],
    }
    manifest_path = output_dir / 'manifest.json'
    write_json(manifest_path, manifest)
    print(f'Synthesizing {len(jobs)} complete sentences from {len(storyboard["scenes"])} scenes', flush=True)
    for job in jobs:
        gen = sherpa_onnx.GenerationConfig()
        gen.sid = 0
        gen.speed = job['speed']
        gen.silence_scale = 0.2
        started = time.monotonic()
        generated = tts.generate(job['text'], gen)
        samples = np.asarray(generated.samples, dtype=np.float32)
        if not samples.size or float(np.sqrt(np.mean(samples ** 2))) < 0.0001:
            raise RuntimeError(f'Empty or silent output for {job["id"]}')
        if manifest['sampleRate'] is None:
            manifest['sampleRate'] = generated.sample_rate
        if generated.sample_rate != manifest['sampleRate']:
            raise RuntimeError('Mixed sample rates are not allowed')
        target = clips_dir / f"{job['id']}.wav"
        sf.write(target, samples, generated.sample_rate, subtype='PCM_16')
        row = {
            **job, 'path': str(target),
            'durationSeconds': len(samples) / generated.sample_rate,
            'samples': len(samples),
            'sampleRate': generated.sample_rate,
            'generationSeconds': round(time.monotonic() - started, 3),
            'sha256': hashlib.sha256(target.read_bytes()).hexdigest(),
        }
        manifest['clips'].append(row)
        write_json(manifest_path, manifest)
        print(f'{job["id"]}: {row["durationSeconds"]:.3f}s', flush=True)
    manifest['complete'] = True
    manifest['totalNarrationSeconds'] = sum(c['durationSeconds'] for c in manifest['clips'])
    write_json(manifest_path, manifest)
    print(f'Complete: {len(jobs)} clips, {manifest["totalNarrationSeconds"]:.3f}s raw narration', flush=True)


if __name__ == '__main__':
    main()
