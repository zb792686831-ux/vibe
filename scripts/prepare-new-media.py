#!/usr/bin/env python3
"""Build the edit from measured speech, never from estimated voice durations."""
import array
import hashlib
import json
import math
import shutil
import subprocess
import sys
import wave
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WORK = ROOT / '.cache/new-media-edit'
PUBLIC = ROOT / 'public/audio/new-media'
FPS = 60


def run(args):
    subprocess.run([str(x) for x in args], cwd=ROOT, check=True)


def write_wave(path, samples, rate, channels=1):
    with wave.open(str(path), 'wb') as output:
        output.setparams((channels, 2, rate, 0, 'NONE', 'not compressed'))
        output.writeframes(samples.tobytes())


def subtitle_parts(text, maximum=24):
    parts, current = [], ''
    for character in text:
        current += character
        if character in '，。！？；：' or len(current) >= maximum:
            if current.strip():
                parts.append(current)
            current = ''
    if current:
        parts.append(current)
    # Join fragments into readable short pages, without karaoke timing claims.
    pages = []
    for part in parts:
        if pages and len(pages[-1] + part) <= maximum:
            pages[-1] += part
        else:
            pages.append(part)
    return pages


def main():
    WORK.mkdir(parents=True, exist_ok=True)
    PUBLIC.mkdir(parents=True, exist_ok=True)
    source = json.loads((ROOT / 'production/new-media/storyboard.json').read_text())
    manifest = json.loads((ROOT / '.cache/new-media-tts/manifest.json').read_text())
    if not manifest.get('complete'):
        raise RuntimeError('Speech generation is incomplete; preserve all spoken sentences.')
    clips = {(item['sceneId'], item['sentenceIndex']): item for item in manifest['clips']}
    rate = manifest['sampleRate']
    speech = array.array('h')
    cursor = 0
    scenes, events = [], []

    def silence_until(frame):
        expected = round(frame * rate / FPS)
        if expected < len(speech):
            raise RuntimeError('Overlapping narration: refusing to truncate speech')
        speech.extend(array.array('h', [0]) * (expected - len(speech)))

    for index, original in enumerate(source['scenes']):
        scene = dict(original)
        scene['index'] = index
        scene['from'] = cursor
        scene['captions'] = []
        scene['sentenceCues'] = []
        leading = 0.14 if index == 0 else (0.44 if scene['id'] in ['relief', 'ending'] else 0.30)
        local = round(leading * FPS)
        for number, text in enumerate(scene['sentences']):
            clip = clips[(scene['id'], number)]
            if clip['text'] != text:
                raise RuntimeError(f'Outdated speech text: {scene["id"]}, sentence {number}')
            path = Path(clip['path'])
            if not path.is_absolute():
                path = ROOT / path
            with wave.open(str(path), 'rb') as audio:
                assert audio.getnchannels() == 1 and audio.getsampwidth() == 2
                assert audio.getframerate() == rate
                samples = array.array('h', audio.readframes(audio.getnframes()))
            count = math.ceil(len(samples) / rate * FPS)
            silence_until(cursor + local)
            speech.extend(samples)
            scene['sentenceCues'].append({'text': text, 'from': local, 'durationInFrames': count})
            pages = subtitle_parts(text)
            total = sum(len(page) for page in pages)
            start, used = local, 0
            for page in pages:
                end = local + round(count * (used + len(page)) / total)
                scene['captions'].append({'text': page, 'from': start, 'to': end})
                used += len(page)
                start = end
            pause = 0.26 if scene['id'] in ['relief', 'ending'] else 0.16
            local += count + round(pause * FPS)
        trailing = 1.35 if scene['id'] == 'ending' else (0.80 if scene['id'] == 'relief' else 0.42)
        scene['durationInFrames'] = local + round(trailing * FPS)
        scene['durationSeconds'] = scene['durationInFrames'] / FPS
        # Cues snap to actual sentence/visual entrances; estimates never control speech.
        scene['visualCues'] = [cue['from'] for cue in scene['sentenceCues']]
        # These timings are paired with the vector animation entrances in SceneVisuals.
        # They replace the script's estimates, and never add a click to every word.
        cues = {
            'hook': [(0.13, 'click', .23), (.26, 'click', .2), (.39, 'click', .18), (2.05, 'impact', .32)],
            'treadmill': [(.12, 'whoosh', .17), (2.1, 'riser', .13)],
            'definition': [(.4, 'whoosh', .15), (3.6, 'chime', .18)],
            'six-loop': [(0.3 + n * .2, 'step', .13) for n in range(6)],
            'coffee-audience': [(.15, 'step', .22), (.55, 'whoosh', .12)],
            'positioning': [(.3 + n * .15, 'click', .13) for n in range(4)],
            'topic': [(.12, 'whoosh', .14), (2.3, 'chime', .16)],
            'content': [(cue['from'] / FPS, 'step', .18) for cue in scene['sentenceCues'][:3]],
            'proof': [(0.05 + n * .7, 'click', .16) for n in range(3)] + [(3.3, 'chime', .2)],
            'distribution': [(.35 + n * .18, 'whoosh', .08) for n in range(4)],
            'interaction': [(.55, 'step', .16), (2.3, 'chime', .11)],
            'review': [(1.7, 'step', .14), (2.9, 'click', .21)],
            'relief': [(.8, 'riser', .07)],
            'tools': [(1.7, 'whoosh', .14), (3.4, 'step', .16)],
            'start': [(.15 + n * .4, 'impact', .18) for n in range(3)],
            'iterate': [(.3 + n * .2, 'step', .12) for n in range(4)],
            'ending': [(scene['sentenceCues'][-1]['from'] / FPS, 'chime', .14)],
        }[scene['id']]
        scene['renderSfx'] = [{'from': round(t * FPS), 'type': kind, 'gain': gain} for t, kind, gain in cues]
        events.extend({'frame': cursor + round(t * FPS), 'type': kind, 'gain': gain} for t, kind, gain in cues)
        cursor += scene['durationInFrames']
        silence_until(cursor)
        scenes.append(scene)

    duration = cursor / FPS
    if duration >= 180:
        raise RuntimeError(f'Edit is {duration:.2f}s; revise narration before rendering, never cut the ending.')
    voice_file = WORK / 'narration.wav'
    write_wave(voice_file, speech, rate)

    effect_rate = 48000
    effect_samples = array.array('f', [0.0]) * (round(duration * effect_rate) * 2)
    for event in events:
        with wave.open(str(PUBLIC / 'sfx' / (event['type'] + '.wav')), 'rb') as audio:
            assert audio.getframerate() == effect_rate and audio.getnchannels() == 2
            sound = array.array('h', audio.readframes(audio.getnframes()))
        offset = round(event['frame'] / FPS * effect_rate) * 2
        for i, value in enumerate(sound):
            if offset + i < len(effect_samples):
                effect_samples[offset + i] += value * event['gain']
    pcm = array.array('h', (round(max(-30000, min(30000, x))) for x in effect_samples))
    effect_file = WORK / 'sfx.wav'
    write_wave(effect_file, pcm, effect_rate, 2)

    # One consistent narrator. Sound effects remain quiet and speech stays foregrounded.
    run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-nostdin', '-y', '-i', voice_file,
         '-af', 'loudnorm=I=-18:TP=-2:LRA=8,aresample=48000', '-c:a', 'libmp3lame', '-b:a', '192k',
         PUBLIC / 'narration.mp3'])
    bgm = PUBLIC / 'reference-bgm.wav'
    music_record = ROOT / 'production/new-media/bgm-source.json'
    music_verified = False
    if bgm.exists() or music_record.exists():
        if not (bgm.exists() and music_record.exists()):
            raise RuntimeError('Provide both the actual reference BGM and its source record.')
        provenance = json.loads(music_record.read_text())
        if not all(isinstance(provenance.get(key), str) and provenance[key].strip()
                   for key in ['title', 'source', 'sha256']):
            raise RuntimeError('BGM source record requires a real title, source and SHA-256.')
        if provenance.get('confirmedSameTrack') is not True or provenance.get('containsNarration') is not False:
            raise RuntimeError('Confirm the original track identity and a music-only source; do not use reference narration as BGM.')
        if hashlib.sha256(bgm.read_bytes()).hexdigest() != provenance['sha256']:
            raise RuntimeError('Reference BGM does not match the recorded SHA-256.')
        music_verified = True
    # The source identity must be recorded deliberately. Never substitute a different BGM.
    inputs = ['ffmpeg', '-hide_banner', '-loglevel', 'error', '-nostdin', '-y',
              '-i', PUBLIC / 'narration.mp3', '-i', effect_file]
    mixing = '[0:a][1:a]amix=inputs=2:duration=first:normalize=0'
    if music_verified:
        inputs += ['-stream_loop', '-1', '-i', bgm]
        mixing = ('[2:a]volume=0.08[bg];'
                  '[0:a][1:a][bg]amix=inputs=3:duration=first:normalize=0')
    mixing += f',loudnorm=I=-16:TP=-1.5:LRA=9,aresample=48000,atrim=0:{duration}[out]'
    run(inputs + ['-filter_complex', mixing, '-map', '[out]', '-c:a', 'libmp3lame', '-b:a', '256k',
                  PUBLIC / 'mix.mp3'])
    data = {'title': source['title'], 'fps': FPS, 'width': 1920, 'height': 1080,
            'durationInFrames': cursor, 'durationSeconds': duration,
            'bgmStatus': 'reference-music-present' if music_verified else 'missing-reference-bgm',
            'scenes': scenes, 'soundEvents': events}
    target = ROOT / 'src/new-media/timeline.generated.json'
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
    (ROOT / 'production/new-media/timeline.json').write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
    # Source-editable scene nodes and literal composition metadata are generated explicitly.
    registration = f'''import {{Composition}} from 'remotion';
import {{NewMediaVideo}} from './NewMediaVideo';
export const NewMediaRegistration = () => (
  <Composition id="NewMediaIntro" component={{NewMediaVideo}}
    width={{1920}} height={{1080}} fps={{60}} durationInFrames={{{cursor}}}
    defaultProps={{{{draftWithoutBgm: {str(not music_verified).lower()}}}}} />
);
'''
    (ROOT / 'src/new-media/Registration.generated.tsx').write_text(registration)
    print(json.dumps({'scenes': len(scenes), 'sentences': len(clips), 'frames': cursor,
                      'durationSeconds': duration, 'bgmStatus': data['bgmStatus']}, ensure_ascii=False))


if __name__ == '__main__':
    main()
