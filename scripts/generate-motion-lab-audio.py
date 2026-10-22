#!/usr/bin/env python3
"""Create the 20-second motion-lab's original material-SFX and user-BGM mix.

The music excerpt is the user's approved track at 28.048–48.048s, at the same
fixed -7.7dB gain as the full film, with only 60ms edge fades. Added sounds are
deterministic local synthesis, not downloaded samples. No voice is generated.
All WAVs remain ignored; only the generator and provenance manifest are source
deliverables. Source media, package declarations and Git are not modified.
"""

from array import array
import hashlib
import importlib.util
import json
import math
from pathlib import Path
import random
import subprocess
import sys
import wave


ROOT = Path(__file__).resolve().parent.parent
DEST = ROOT / "public/audio/new-media-v2/motion-lab"
MANIFEST = ROOT / "production/new-media-v2/motion-lab/audio-manifest.json"
INFO = ROOT / "production/new-media-v2/music-reference.json"
HELPERS = ROOT / "scripts/generate-new-media-v2-review-sfx.py"
RATE, CHANNELS, DURATION = 48_000, 2, 20.0
FRAMES = round(RATE * DURATION)
SEED = 2026102203
MUSIC_GAIN_DB = -7.7
EDGE_FADE = 0.06
MAX_SAMPLE_PEAK = 10 ** (-6.02 / 20)
TAU = math.pi * 2


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def helper_module():
    spec = importlib.util.spec_from_file_location("motion_lab_material_helpers", HELPERS)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def material_sound(name, duration, peak_dbfs, h):
    rng = random.Random(SEED + sum(map(ord, name)))
    length = round(duration * RATE)
    result = h.blank(length)
    if name in ("bead-gather", "bead-travel"):
        positions = [0.02, 0.18, 0.32, 0.44, 0.55, 0.65, 0.73, 0.80, 0.86, 0.92]
        for index, position in enumerate(positions):
            start = round(position * (duration - 0.10) * RATE)
            grain_duration = rng.uniform(0.035, 0.067)
            count = round(grain_duration * RATE)
            lo = hi = 0.0
            side = rng.choice([-1, 1])
            for j in range(count):
                if start + j >= length:
                    break
                u = j / max(1, count - 1)
                noise = rng.uniform(-1, 1)
                hi += h.alpha(3400 - 1000 * position) * (noise - hi)
                lo += h.alpha(650) * (noise - lo)
                envelope = math.sin(math.pi * u) ** 2
                body = 0.055 * math.sin(TAU * (360 + 83 * index) * j / RATE)
                value = ((hi - lo) + body) * envelope
                if name == "bead-gather":
                    pan = side * 0.58 * (1 - position) * (1 - h.smooth(u))
                else:
                    pan = 0.23 - 0.42 * position
                h.stereo_add(result, start + j, value, pan)
    else:
        lo = hi = 0.0
        for i in range(length):
            t = i / RATE
            u = i / (length - 1)
            noise = rng.uniform(-1, 1)
            if name in ("ceramic-heart", "pause-contact", "like-contact", "record-arrival"):
                body_hz, ceramic_hz, ceramic_level = {
                    "ceramic-heart": (285, 1470, 0.16),
                    "pause-contact": (162, 780, 0.025),
                    "like-contact": (270, 1370, 0.10),
                    "record-arrival": (184, 910, 0.045),
                }[name]
                phase = TAU * (body_hz * t + 48 * 0.018 * (1 - math.exp(-t / 0.018)))
                value = 0.7 * math.sin(phase) * math.exp(-t / 0.045)
                # An inharmonic, brief ceramic texture, not an ascending melody
                # or a sustained notification/success bell.
                value += ceramic_level * math.sin(TAU * ceramic_hz * t) * math.exp(-t / 0.040)
                value += ceramic_level * 0.35 * math.sin(TAU * ceramic_hz * 1.573 * t) * math.exp(-t / 0.023)
                lo += h.alpha(2000) * (noise - lo)
                value += 0.07 * lo * math.exp(-t / 0.018)
                value *= h.edge(t, duration, 0.0035, 0.055)
                pan = -0.025 if name == "ceramic-heart" else 0.0
            else:
                cutoff = 2600 + 1300 * math.sin(math.pi * u) ** 2
                hi += h.alpha(cutoff) * (noise - hi)
                lo += h.alpha(720) * (noise - lo)
                friction = 0.9 + 0.07 * math.sin(TAU * 29 * t) + 0.03 * math.sin(TAU * 71 * t)
                value = (hi - lo) * friction * math.sin(math.pi * u) ** 1.5
                value *= h.edge(t, duration, 0.025, 0.055)
                if name == "paper-air-arc":
                    pan = -0.22 + 0.44 * h.smooth(u)
                elif name == "branch-air":
                    pan = 0.30 * math.sin(TAU * u)
                    value *= 0.65 + 0.35 * math.sin(math.pi * u) ** 2
                elif name == "replay-brush":
                    pan = 0.10 - 0.20 * u
                else:
                    raise ValueError(f"Unknown material sound: {name}")
            h.stereo_add(result, i, value, pan)

    for i in range(length):
        envelope = h.edge(i / RATE, duration, 0.003, 0.025)
        result[2 * i] *= envelope
        result[2 * i + 1] *= envelope
    peak = max(map(abs, result))
    assert peak > 0 and all(math.isfinite(x) for x in result)
    gain = 10 ** (peak_dbfs / 20) / peak
    for i in range(len(result)):
        result[i] *= gain
    result[0] = result[1] = result[-1] = result[-2] = 0.0
    return result


def main():
    h = helper_module()
    info = json.loads(INFO.read_text())
    active = info["activeSource"]
    upload = Path(active["localPath"])
    cache = ROOT / info["retainedDecodedAudio"]["localPath"]
    source = upload if upload.exists() else cache
    source_hash = digest(source)
    assert source_hash in {active["sha256"], info["retainedDecodedAudio"]["sha256"]}
    source_metadata = json.loads(subprocess.check_output([
        "ffprobe", "-v", "error", "-select_streams", "a:0", "-show_entries",
        "stream=codec_name,sample_rate,channels,duration", "-of", "json", str(source),
    ]))["streams"][0]
    offset = float(active["referenceAlignmentSeconds"])
    assert abs(offset - 0.048) < 1e-9
    source_start = 28.0 + offset
    raw = subprocess.check_output([
        "ffmpeg", "-hide_banner", "-loglevel", "error", "-nostdin", "-xerror",
        "-ss", str(source_start), "-i", str(source), "-t", str(DURATION),
        "-map", "0:a:0", "-vn", "-ar", str(RATE), "-ac", str(CHANNELS),
        "-f", "f32le", "pipe:1",
    ])
    music = array("f")
    music.frombytes(raw)
    if sys.byteorder != "little":
        music.byteswap()
    assert len(music) == FRAMES * CHANNELS
    music_gain = 10 ** (MUSIC_GAIN_DB / 20)
    for frame in range(FRAMES):
        gain = music_gain * h.edge(frame / RATE, DURATION, EDGE_FADE, EDGE_FADE)
        music[2 * frame] *= gain
        music[2 * frame + 1] *= gain
    assert max(map(abs, music)) <= MAX_SAMPLE_PEAK, "Fixed BGM itself exceeds the requested peak ceiling"

    DEST.mkdir(parents=True, exist_ok=True)
    (DEST / "sfx").mkdir(exist_ok=True)
    # Local-only rule: never accidentally publish this music-bearing directory.
    (DEST / ".gitignore").write_text("# Generated local-only motion-lab audio, including music-bearing mixes.\n*\n")
    plan = [
        ("ceramic-heart", 0.65, 0.26, -24.0, "One light ceramic contact as the heart lands"),
        ("paper-air-arc", 3.15, 2.05, -28.0, "Soft paper/air arc while the cat display leaves"),
        ("bead-gather", 6.10, 2.00, -28.0, "Fine particles converge as the heart becomes a bead"),
        ("pause-contact", 11.25, 0.18, -27.0, "A small pause trigger, not a per-character accent"),
        ("replay-brush", 12.20, 0.27, -30.0, "A small replay brush"),
        ("like-contact", 13.10, 0.23, -27.0, "A small like trigger related to the opening heart"),
        ("bead-travel", 14.20, 3.10, -30.0, "Sparse rolling grains as the bead enters the record band"),
        ("record-arrival", 17.30, 0.30, -25.0, "Warm tactile arrival, without a success cue"),
        ("branch-air", 17.80, 1.30, -32.0, "A small amount of air in the branching outflow"),
    ]
    quiet_windows = [
        {"fromSeconds": 8.3, "toSeconds": 11.0, "reason": "Question segment: strictly no added SFX"},
        {"fromSeconds": 19.1, "toSeconds": 20.0, "reason": "Stable final hold: strictly no added SFX"},
    ]
    sfx = h.blank(FRAMES)
    events = []
    for name, start, duration, peak_dbfs, purpose in plan:
        sound = material_sound(name, duration, peak_dbfs, h)
        end = start + len(sound) / RATE / CHANNELS
        for window in quiet_windows:
            assert end <= window["fromSeconds"] + 1e-9 or start >= window["toSeconds"] - 1e-9
        path = DEST / "sfx" / f"{name}.wav"
        h.write_pcm(path, sound)
        at = round(start * RATE) * CHANNELS
        for index, sample in enumerate(sound):
            sfx[at + index] += sample
        events.append({
            "name": name,
            "sourceType": "original-deterministic-programmatic-material-synthesis",
            "sourceFile": str(path.relative_to(ROOT)),
            "sourceFileSha256": digest(path),
            "startSeconds": start,
            "endSeconds": round(end, 5),
            "durationSeconds": duration,
            "requestedPeakDbFS": peak_dbfs,
            "purpose": purpose,
        })

    # Preserve the required fixed music gain. If addition risks the ceiling,
    # lower only the added SFX by one constant factor; do not limit or duck BGM.
    sfx_gain = 1.0
    for bed, effect in zip(music, sfx):
        if effect > 0:
            sfx_gain = min(sfx_gain, (MAX_SAMPLE_PEAK - bed) / effect)
        elif effect < 0:
            sfx_gain = min(sfx_gain, (-MAX_SAMPLE_PEAK - bed) / effect)
    assert 0 < sfx_gain <= 1
    if sfx_gain < 1:
        sfx_gain *= 0.999
    for i in range(len(sfx)):
        sfx[i] *= sfx_gain
    mix = array("f", (bed + effect for bed, effect in zip(music, sfx)))
    mix_path, sfx_path = DEST / "mix.wav", DEST / "sfx-only.wav"
    h.write_pcm(mix_path, mix)
    h.write_pcm(sfx_path, sfx)
    measurements = {str(path.relative_to(ROOT)): h.measure(path) for path in (mix_path, sfx_path)}
    for stats in measurements.values():
        assert stats["frames"] == FRAMES and stats["samplePeakDbFS"] <= -6.0
    with wave.open(str(sfx_path), "rb") as audio:
        for window in quiet_windows:
            audio.setpos(round(window["fromSeconds"] * RATE))
            pcm = audio.readframes(round((window["toSeconds"] - window["fromSeconds"]) * RATE))
            assert not any(pcm), "Added SFX entered a required quiet window"
            window["actualPcmAllZero"] = True

    manifest = {
        "schema": "motion-lab-audio-v1",
        "status": "generated-and-verified",
        "durationSeconds": DURATION,
        "sampleRate": RATE,
        "channels": CHANNELS,
        "addedVoiceover": False,
        "sourcePurityOrVocalContentAssessed": False,
        "musicBed": {
            "sourceType": "user-supplied-bgm-file" if source_hash == active["sha256"] else "user-supplied-bgm-decoded-cache",
            "sourceFile": str(source),
            "sourceFileSha256": source_hash,
            "originalUserUploadSha256": active["sha256"],
            "sourceAudioMetadata": source_metadata,
            "sourceChannels": int(source_metadata["channels"]),
            "outputChannels": CHANNELS,
            "referenceSceneSeconds": [28.0, 48.0],
            "referenceToMusicOffsetSeconds": offset,
            "sourceExcerptSeconds": [source_start, source_start + DURATION],
            "gainDb": MUSIC_GAIN_DB,
            "fadeInSeconds": EDGE_FADE,
            "fadeOutSeconds": EDGE_FADE,
            "looping": False,
            "tempoChanged": False,
            "eqOrCompressionApplied": False,
            "localDuckingApplied": False,
            "measurementAfterFixedGainAndFades": h.measure_float_audio(music),
        },
        "originalSfx": {
            "seed": SEED,
            "downloadedSamplesUsed": False,
            "eventCount": len(events),
            "events": events,
            "sfxMasterGainLinear": sfx_gain,
            "sfxMasterGainDb": round(20 * math.log10(sfx_gain), 5),
            "peakManagement": "Only added SFX may be attenuated statically; BGM fixed gain is preserved",
            "quietWindows": quiet_windows,
        },
        "generator": {
            "file": str(Path(__file__).resolve().relative_to(ROOT)),
            "sha256": digest(Path(__file__)),
            "measurementHelper": str(HELPERS.relative_to(ROOT)),
            "measurementHelperSha256": digest(HELPERS),
            "dependencies": "Python standard library and system FFmpeg/ffprobe; no paid services",
        },
        "outputs": measurements,
        "standaloneMusicPublished": False,
        "generatedAudioDirectoryGitIgnored": True,
    }
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({"manifest": str(MANIFEST), "sfxMasterGainDb": manifest["originalSfx"]["sfxMasterGainDb"], "outputs": measurements, "quietWindows": quiet_windows}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
