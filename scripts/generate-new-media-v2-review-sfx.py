#!/usr/bin/env python3
"""Build the 10-second, no-voice style-review soundtrack (global 28–38s).

The four added material sounds are original, deterministic oscillator/noise
synthesis. No downloaded SFX, paid services, or voice models are used.

IMPORTANT: The temporary music bed is the uploaded reference film's *mixed*
audio excerpt. It may already contain that film's SFX. This is not an isolated
or independently obtained BGM master, and this is not the final film's mix.
The source MP4 is read only and is never copied or overwritten by this script.
"""

import argparse
from array import array
import hashlib
import json
import math
from pathlib import Path
import random
import re
import subprocess
import sys
import wave


ROOT = Path(__file__).resolve().parent.parent
DEST = ROOT / "public/audio/new-media-v2/style-review"
DEFAULT_REFERENCE = Path(
    "/workspace/attachments/f7520f7f-5c3d-45d5-8f5d-ae06a3b8092f/"
    "Iwanau-Vibe知识大赏_《运气的形状》本视...-20261022_092444.mp4"
)
RATE = 48_000
CHANNELS = 2
DURATION = 10.0
FRAMES = round(RATE * DURATION)
TAU = 2 * math.pi
SEED = 20261022


def smooth(value):
    x = min(1.0, max(0.0, value))
    return x * x * (3 - 2 * x)


def edge(t, duration, attack=0.006, release=0.04):
    return smooth(t / attack) * smooth((duration - 1 / RATE - t) / release)


def alpha(cutoff):
    return 1 - math.exp(-TAU * cutoff / RATE)


def blank(frames):
    return array("f", [0.0]) * (frames * CHANNELS)


def stereo_add(target, frame, value, pan=0.0):
    angle = (min(1.0, max(-1.0, pan)) + 1) * math.pi / 4
    target[2 * frame] += value * math.cos(angle)
    target[2 * frame + 1] += value * math.sin(angle)


def synthesize(name, duration, peak_dbfs):
    """Short, soft material gestures; deliberately no success-bell melody."""
    rng = random.Random(SEED + sum(map(ord, name)))
    count = round(duration * RATE)
    result = blank(count)
    low = high = 0.0

    if name == "dust-gather":
        # Flecks approach the centre, becoming slightly denser and less wide.
        for grain in range(17):
            position = (grain / 19) ** 0.85 * 0.88
            grain_length = rng.uniform(0.025, 0.055)
            start = round(position * RATE)
            pan_start = rng.choice([-1, 1]) * (0.85 - 0.58 * grain / 17)
            lo = hi = 0.0
            for j in range(round(grain_length * RATE)):
                i = start + j
                if i >= count:
                    break
                u = j / max(1, round(grain_length * RATE) - 1)
                noise = rng.uniform(-1, 1)
                hi += alpha(4800 - 1800 * grain / 17) * (noise - hi)
                lo += alpha(650) * (noise - lo)
                value = (hi - lo) * math.sin(math.pi * u) ** 2
                value *= 0.75 + 0.25 * grain / 17
                stereo_add(result, i, value, pan_start * (1 - smooth(u)))
    else:
        for i in range(count):
            t = i / RATE
            u = i / (count - 1)
            noise = rng.uniform(-1, 1)
            if name == "soft-heart":
                # Felt/membrane contact: one rounded body with a smaller echo.
                # The falling pitch avoids a musical notification-like tone.
                value = 0.0
                for offset, weight in [(0.0, 1.0), (0.115, 0.34)]:
                    x = t - offset
                    if x >= 0:
                        phase = TAU * (84 * x + 70 * 0.025 * (1 - math.exp(-x / 0.025)))
                        body = math.sin(phase) * math.exp(-x / 0.058)
                        body += 0.12 * math.sin(TAU * 267 * x) * math.exp(-x / 0.025)
                        value += weight * body * smooth(x / 0.006)
                low += alpha(1050) * (noise - low)
                value += 0.07 * low * math.exp(-t / 0.03)
                value *= edge(t, duration, 0.003, 0.08)
                pan = -0.035
            elif name == "paper-swipe":
                high += alpha(4700 - 1700 * u) * (noise - high)
                low += alpha(650) * (noise - low)
                # Irregular grain in the friction, not a large cinematic whoosh.
                friction = 0.78 + 0.13 * math.sin(TAU * 31 * t) + 0.09 * math.sin(TAU * 79 * t)
                value = (high - low) * friction * math.sin(math.pi * u) ** 1.4
                value *= edge(t, duration, 0.025, 0.08)
                pan = 0.13 - 0.26 * smooth(u)
            elif name == "airy-reverse":
                high += alpha(2100 + 1800 * u) * (noise - high)
                low += alpha(950) * (noise - low)
                # Noise-only inhale; no synthesizer pitch sweep or tonal ping.
                value = (high - low) * smooth(u) ** 1.3
                value *= edge(t, duration, 0.075, 0.035)
                pan = -0.12 + 0.16 * u
            else:
                raise ValueError(name)
            stereo_add(result, i, value, pan)

    # Global soft boundaries also protect the grain-based generator.
    for i in range(count):
        env = edge(i / RATE, duration, 0.003, 0.035)
        result[2 * i] *= env
        result[2 * i + 1] *= env
    assert all(math.isfinite(x) for x in result)
    measured = max(map(abs, result))
    assert measured > 0.00001
    gain = 10 ** (peak_dbfs / 20) / measured
    for i in range(len(result)):
        result[i] *= gain
    result[0] = result[1] = result[-1] = result[-2] = 0.0
    return result


def write_pcm(path, samples):
    assert len(samples) % CHANNELS == 0
    assert all(math.isfinite(x) for x in samples)
    assert max(map(abs, samples)) < 0.9, "Mix needs more headroom; refusing to clip"
    pcm = array("h", (round(x * 32767) for x in samples))
    pcm[0] = pcm[1] = pcm[-1] = pcm[-2] = 0
    if sys.byteorder != "little":
        pcm.byteswap()
    with wave.open(str(path), "wb") as handle:
        handle.setnchannels(CHANNELS)
        handle.setsampwidth(2)
        handle.setframerate(RATE)
        handle.writeframes(pcm.tobytes())


def load_reference(source, gain_db):
    decoded = subprocess.check_output([
        "ffmpeg", "-hide_banner", "-loglevel", "error", "-nostdin", "-xerror",
        "-ss", "28", "-i", str(source), "-t", "10", "-map", "0:a:0", "-vn",
        "-ac", "2", "-ar", str(RATE), "-f", "f32le", "pipe:1",
    ])
    result = array("f")
    result.frombytes(decoded)
    if sys.byteorder != "little":
        result.byteswap()
    assert len(result) == FRAMES * CHANNELS, "Reference excerpt must decode to exactly ten seconds"
    gain = 10 ** (gain_db / 20)
    for i in range(FRAMES):
        env = edge(i / RATE, DURATION, 0.02, 0.08)
        result[2 * i] *= gain * env
        result[2 * i + 1] *= gain * env
    return result


def measure(path):
    """Read actual encoded PCM and perform a complete FFmpeg loudness decode."""
    metadata = json.loads(subprocess.check_output([
        "ffprobe", "-v", "error", "-show_entries",
        "stream=codec_name,sample_rate,channels,duration", "-of", "json", str(path),
    ]))["streams"][0]
    run = subprocess.run([
        "ffmpeg", "-hide_banner", "-nostdin", "-xerror", "-i", str(path),
        "-af", "ebur128=peak=true", "-f", "null", "-",
    ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE, text=True)
    summary = run.stderr.rsplit("Summary:", 1)[-1]
    integrated = float(re.search(r"I:\s+([-\d.]+) LUFS", summary).group(1))
    true_peak = float(re.search(r"Peak:\s+([-\d.]+) dBFS", summary).group(1))
    with wave.open(str(path), "rb") as handle:
        frames = handle.getnframes()
        pcm = array("h")
        pcm.frombytes(handle.readframes(frames))
    if sys.byteorder != "little":
        pcm.byteswap()
    sample_peak = max(map(abs, pcm)) / 32768
    assert sample_peak > 0 and sample_peak < 0.9
    assert pcm[0] == pcm[1] == pcm[-1] == pcm[-2] == 0
    return {
        **metadata,
        "frames": frames,
        "samplePeakDbFS": round(20 * math.log10(sample_peak), 4),
        "integratedLoudnessLUFS": integrated,
        "truePeakDbTP": true_peak,
        "firstAndLastStereoFrameZero": True,
        "fullDecode": "passed",
        "sha256": hashlib.sha256(path.read_bytes()).hexdigest(),
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--reference", type=Path, default=DEFAULT_REFERENCE)
    parser.add_argument("--music-gain-db", type=float, default=-10.0)
    args = parser.parse_args()
    source = args.reference.resolve(strict=True)
    DEST.mkdir(parents=True, exist_ok=True)
    (DEST / "sfx").mkdir(exist_ok=True)

    definitions = [
        ("airy-reverse", 0.50, -26.0, 0.15, "Subtle breath leading into the heart contact"),
        ("soft-heart", 0.34, -20.0, 0.65, "Rounded felt contact at the red-heart landing"),
        ("paper-swipe", 0.42, -22.0, 3.20, "Quiet paper friction aligned to the upward swipe"),
        ("dust-gather", 1.02, -24.0, 5.72, "Fine particles converging as the reaction remains"),
    ]
    sfx_only = blank(FRAMES)
    events = []
    for name, duration, peak_dbfs, start, intention in definitions:
        sound = synthesize(name, duration, peak_dbfs)
        path = DEST / "sfx" / f"{name}.wav"
        write_pcm(path, sound)
        offset = round(start * RATE) * CHANNELS
        assert offset + len(sound) <= len(sfx_only)
        for index, sample in enumerate(sound):
            sfx_only[offset + index] += sample
        events.append({
            "name": name,
            "source": "Original deterministic synthesis; no downloaded samples",
            "file": str(path.relative_to(ROOT)),
            "startSeconds": start,
            "startFrame60fps": round(start * 60),
            "durationSeconds": duration,
            "intention": intention,
            "measurement": measure(path),
        })

    reference = load_reference(source, args.music_gain_db)
    final_mix = array("f", (bed + effect for bed, effect in zip(reference, sfx_only)))
    sfx_path = DEST / "trial-sfx-only.wav"
    mix_path = DEST / "trial-mix.wav"
    write_pcm(sfx_path, sfx_only)
    write_pcm(mix_path, final_mix)
    sfx_stats = measure(sfx_path)
    mix_stats = measure(mix_path)
    assert sfx_stats["frames"] == mix_stats["frames"] == FRAMES
    assert mix_stats["truePeakDbTP"] < -1.0

    manifest = {
        "status": "Style review only: temporary mixed reference bed, not the final film",
        "noVoiceover": True,
        "durationSeconds": DURATION,
        "sampleRate": RATE,
        "channels": CHANNELS,
        "referenceBed": {
            "sourceFile": str(source),
            "sourceFileSha256": hashlib.sha256(source.read_bytes()).hexdigest(),
            "sourceExcerptSeconds": [28, 38],
            "gainDb": args.music_gain_db,
            "fadeInSeconds": 0.02,
            "fadeOutSeconds": 0.08,
            "isIndependentBgm": False,
            "mayContainReferenceFilmSoundEffects": True,
            "requestedIndependentMusicUrl": "https://music.163.com/song?id=3451028893",
            "independentMusicStatus": "Not acquired by this generator; do not describe this mixed excerpt as pure BGM",
        },
        "generator": {
            "file": str(Path(__file__).resolve().relative_to(ROOT)),
            "sha256": hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),
            "seed": SEED,
            "dependencies": "Python standard library and system ffmpeg/ffprobe",
            "ffmpeg": subprocess.check_output(["ffmpeg", "-version"], text=True).splitlines()[0],
        },
        "events": events,
        "quietTail": {"fromSeconds": 7.6, "toSeconds": 10, "addedSfx": False},
        "outputs": {
            str(mix_path.relative_to(ROOT)): mix_stats,
            str(sfx_path.relative_to(ROOT)): sfx_stats,
        },
    }
    manifest_path = DEST / "audio-manifest.json"
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({"manifest": str(manifest_path), "outputs": manifest["outputs"]}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
