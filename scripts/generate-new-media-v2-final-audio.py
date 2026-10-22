#!/usr/bin/env python3
"""Build the approved 130-second film's music/original-SFX mix, with no new voice.

The user's BGM is used once, continuously from 0.048 to 130.048 seconds. Only a
constant measured gain and 0.5/0.8-second edge fades affect the music. There is
no new melody, EQ, looping, tempo change, synthetic speech or downloaded SFX.
The four project-original material sounds are reused sparsely; quiet sections
remain music-only. Source media and approval/script documents are read-only.
"""

import argparse
from array import array
import hashlib
import importlib.util
import json
import math
from pathlib import Path
import subprocess
import sys
import wave


ROOT = Path(__file__).resolve().parent.parent
RATE = 48_000
CHANNELS = 2
DEST = ROOT / "public/audio/new-media-v2/final"
MANIFEST = ROOT / "production/new-media-v2/final-audio-manifest.json"
SOURCE_INFO = ROOT / "production/new-media-v2/music-reference.json"
STORYBOARD = ROOT / "production/new-media-v2/storyboard-proposal.json"
SFX_BASE = ROOT / "public/audio/new-media-v2/style-review/sfx"
HELPER_PATH = ROOT / "scripts/generate-new-media-v2-review-sfx.py"


def sha256(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def load_helpers():
    spec = importlib.util.spec_from_file_location("new_media_v2_material_sound_helpers", HELPER_PATH)
    helpers = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(helpers)
    return helpers


def source_metadata(path):
    return json.loads(subprocess.check_output([
        "ffprobe", "-v", "error", "-select_streams", "a:0", "-show_entries",
        "stream=codec_name,sample_rate,channels,duration", "-of", "json", str(path),
    ]))["streams"][0]


def decode_music(path, start, duration, fade_in, fade_out, helpers):
    raw = subprocess.check_output([
        "ffmpeg", "-hide_banner", "-loglevel", "error", "-nostdin", "-xerror",
        "-ss", str(start), "-i", str(path), "-t", str(duration), "-map", "0:a:0",
        "-vn", "-ac", str(CHANNELS), "-ar", str(RATE), "-f", "f32le", "pipe:1",
    ])
    samples = array("f")
    samples.frombytes(raw)
    if sys.byteorder != "little":
        samples.byteswap()
    frames = round(duration * RATE)
    assert len(samples) == frames * CHANNELS, "BGM does not cover the exact film duration"
    for frame in range(frames):
        t = frame / RATE
        envelope = helpers.edge(t, duration, fade_in, fade_out)
        samples[2 * frame] *= envelope
        samples[2 * frame + 1] *= envelope
    return samples


def load_sfx(path, duration_ratio, gain_db):
    with wave.open(str(path), "rb") as handle:
        assert (handle.getframerate(), handle.getnchannels(), handle.getsampwidth()) == (RATE, CHANNELS, 2)
        old_frames = handle.getnframes()
        pcm = array("h")
        pcm.frombytes(handle.readframes(old_frames))
    if sys.byteorder != "little":
        pcm.byteswap()
    count = round(old_frames * duration_ratio)
    result = array("f", [0.0]) * (count * CHANNELS)
    gain = 10 ** (gain_db / 20)
    # Resampling a material/noise sound lengthens and lowers it gently. This is
    # explicitly a duration/pitch variation, not claimed pitch-preserving TSM.
    for i in range(count):
        source_position = i * (old_frames - 1) / max(1, count - 1)
        left = int(source_position)
        right = min(left + 1, old_frames - 1)
        fraction = source_position - left
        for channel in range(CHANNELS):
            value = (pcm[2 * left + channel] * (1 - fraction) + pcm[2 * right + channel] * fraction) / 32768
            result[2 * i + channel] = value * gain
    result[0] = result[1] = result[-1] = result[-2] = 0.0
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--music-input", type=Path, help="Defaults to the verified user upload, then its retained decoded cache")
    parser.add_argument("--target-music-lufs", type=float, default=-18.0)
    args = parser.parse_args()
    if not math.isfinite(args.target_music_lufs) or not -30 <= args.target_music_lufs <= -10:
        parser.error("Choose a finite target music loudness between -30 and -10 LUFS")

    helpers = load_helpers()
    source_info = json.loads(SOURCE_INFO.read_text())
    storyboard = json.loads(STORYBOARD.read_text())
    duration = float(storyboard["durationSeconds"])
    fps = int(storyboard["fps"])
    assert duration == 130 and fps == 60 and storyboard["durationInFrames"] == 7800
    assert storyboard["voiceover"] is False
    frames = round(duration * RATE)
    active = source_info["activeSource"]
    upload = Path(active["localPath"])
    retained = ROOT / source_info["retainedDecodedAudio"]["localPath"]
    source = (args.music_input or (upload if upload.exists() else retained)).resolve(strict=True)
    actual_hash = sha256(source)
    allowed_hashes = {active["sha256"], source_info["retainedDecodedAudio"]["sha256"]}
    assert actual_hash in allowed_hashes, "Music input is not the approved user upload or its verified decoded backup"
    input_is_upload = actual_hash == active["sha256"]
    source_start = float(active["referenceAlignmentSeconds"])
    assert abs(source_start - 0.048) < 1e-9
    shots = {shot["id"]: shot for shot in storyboard["shots"]}

    # (shot, local seconds, original asset, gain dB, duration ratio, purpose).
    # Twenty-two restrained cues over 130 seconds; most of the film has only
    # the original music. The literal five-second pause is deliberately clear.
    plan = [
        ("hook", 1.15, "paper-swipe", -6.0, 1.30, "Phone content passes with a soft paper texture"),
        ("hook", 5.60, "soft-heart", -4.0, 1.10, "A rounded stop, without a dramatic hit"),
        ("cat-interrupts", 3.60, "paper-swipe", -10.0, 1.45, "Phone lowers as the cat interrupts"),
        ("five-second-pause", 0.75, "soft-heart", -8.0, 1.10, "Cat tilt; tail ends before the true five-second pause"),
        ("rewatch-heart", 0.35, "airy-reverse", -4.0, 1.25, "A quiet inhale for the replay"),
        ("rewatch-heart", 3.65, "soft-heart", 0.0, 1.00, "The single red-heart contact"),
        ("swipe-leaves-trace", 0.20, "paper-swipe", -2.0, 1.35, "A slower upward swipe"),
        ("swipe-leaves-trace", 3.65, "dust-gather", -2.0, 1.10, "The reaction remains as fine traces"),
        ("actions-become-signals", 5.00, "dust-gather", 0.0, 1.15, "Multiple reactions join the existing signal field"),
        ("aggregate-feedback", 1.00, "dust-gather", -5.0, 1.25, "Aggregate feedback, without a success signal"),
        ("river-takes-shape", 3.00, "dust-gather", -9.0, 1.35, "A broad, very quiet convergence"),
        ("where-viewers-stay", 1.60, "soft-heart", -7.0, 1.10, "First observation point"),
        ("where-viewers-stay", 4.60, "soft-heart", -11.0, 1.15, "Second observation point, lighter than the first"),
        ("observe-repetition", 1.20, "paper-swipe", -11.0, 1.45, "A fine paper movement through the observations"),
        ("hypotheses-not-answers", 3.60, "soft-heart", -12.0, 1.20, "One restrained question cue; no answer reveal"),
        ("change-next-content", 3.10, "paper-swipe", -4.0, 1.15, "The opening frame is replaced"),
        ("change-next-content", 7.10, "paper-swipe", -6.0, 1.80, "A longer paper gesture for the longer moment"),
        ("wait-for-response", 0.55, "airy-reverse", -8.0, 1.40, "Send, then let the music carry the wait"),
        ("mutual-influence", 1.20, "soft-heart", -8.0, 1.15, "Content reaches the viewer"),
        ("mutual-influence", 4.80, "soft-heart", -10.0, 1.15, "Feedback answers gently"),
        ("mutual-influence", 6.60, "dust-gather", -7.0, 1.00, "The existing paths close into a loop"),
        ("ending", 3.00, "soft-heart", -8.0, 1.30, "A soft final settling; no SFX in the final stable hold"),
    ]
    silent_windows = [
        {"fromSeconds": 18.0, "toSeconds": 23.0, "reason": "Literal five-second visual pause; music only"},
        {"fromSeconds": 128.8, "toSeconds": 130.0, "reason": "Final stable hold; music fading only"},
    ]
    DEST.mkdir(parents=True, exist_ok=True)
    sfx_only = array("f", [0.0]) * (frames * CHANNELS)
    events = []
    for index, (shot_id, local, name, gain_db, ratio, purpose) in enumerate(plan, 1):
        start = float(shots[shot_id]["start"]) + local
        source_path = SFX_BASE / f"{name}.wav"
        sound = load_sfx(source_path, ratio, gain_db)
        event_duration = len(sound) / CHANNELS / RATE
        end = start + event_duration
        assert end <= float(shots[shot_id]["end"]), f"SFX tail crosses its shot: {shot_id}"
        for window in silent_windows:
            assert end <= window["fromSeconds"] or start >= window["toSeconds"], "SFX intrudes on an intentional music-only hold"
        offset = round(start * RATE) * CHANNELS
        assert 0 <= offset and offset + len(sound) <= len(sfx_only)
        for j, sample in enumerate(sound):
            sfx_only[offset + j] += sample
        events.append({
            "id": f"sfx-{index:02}",
            "shotId": shot_id,
            "sourceType": "project-original-deterministic-material-synthesis",
            "sourceFile": str(source_path.relative_to(ROOT)),
            "sourceFileSha256": sha256(source_path),
            "startSeconds": round(start, 5),
            "startFrame60fps": round(start * fps),
            "durationSeconds": round(event_duration, 5),
            "gainDb": gain_db,
            "resampledDurationRatio": ratio,
            "variationNote": "Linear resampling changes duration and pitch together; not pitch-preserving time stretching",
            "purpose": purpose,
        })

    fade_in, fade_out = 0.5, 0.8
    music = decode_music(source, source_start, duration, fade_in, fade_out, helpers)
    input_measurement = helpers.measure_float_audio(music)
    requested_gain = args.target_music_lufs - input_measurement["integratedLoudnessLUFS"]
    gain_db = min(requested_gain, -4.0 - input_measurement["truePeakDbTP"])
    gain = 10 ** (gain_db / 20)
    for i in range(len(music)):
        music[i] *= gain
    music_measurement = helpers.measure_float_audio(music)
    final_mix = array("f", (bed + effect for bed, effect in zip(music, sfx_only)))
    mix_path = DEST / "final-mix.wav"
    sfx_path = DEST / "final-sfx-only.wav"
    helpers.write_pcm(mix_path, final_mix)
    helpers.write_pcm(sfx_path, sfx_only)
    mix_stats = helpers.measure(mix_path)
    sfx_stats = helpers.measure(sfx_path)
    assert mix_stats["frames"] == sfx_stats["frames"] == frames
    assert mix_stats["truePeakDbTP"] < -1.5
    assert abs(mix_stats["integratedLoudnessLUFS"] - args.target_music_lufs) <= 2.0

    manifest = {
        "schema": "full-final-audio-v1",
        "status": "generated-and-verified",
        "durationSeconds": duration,
        "durationInFrames": storyboard["durationInFrames"],
        "fps": fps,
        "sampleRate": RATE,
        "channels": CHANNELS,
        "noVoiceover": True,
        "voiceoverClaimScope": "No newly generated or added voiceover; source content purity is not assessed",
        "storyboardFile": str(STORYBOARD.relative_to(ROOT)),
        "storyboardFileSha256": sha256(STORYBOARD),
        "musicReferenceFile": str(SOURCE_INFO.relative_to(ROOT)),
        "musicReferenceFileSha256": sha256(SOURCE_INFO),
        "musicBed": {
            "sourceType": "user-supplied-bgm-file" if input_is_upload else "user-supplied-bgm-decoded-cache",
            "sourceFile": str(source),
            "sourceFileSha256": actual_hash,
            "originalUserUploadSha256": active["sha256"],
            "sourceAudioMetadata": source_metadata(source),
            "sourceChannels": int(source_metadata(source)["channels"]),
            "outputChannels": CHANNELS,
            "sourceExcerptSeconds": [source_start, source_start + duration],
            "referenceSync": {
                "referenceSceneSeconds": [0.0, duration],
                "verifiedUserBgmOffsetSeconds": source_start,
                "selectedExcerptMatchesVerifiedAlignment": True,
                "reportedCorrelation": active["alignmentFullWaveformCorrelation"],
                "reportedDriftObserved": False,
            },
            "sourceExcerptMeasurementAfterResamplingAndFades": input_measurement,
            "targetMusicLoudnessLUFS": args.target_music_lufs,
            "requestedGainDb": round(requested_gain, 4),
            "gainDb": round(gain_db, 4),
            "peakHeadroomLimitedGain": gain_db < requested_gain,
            "musicOnlyMeasurementAfterGain": music_measurement,
            "fadeInSeconds": fade_in,
            "fadeOutSeconds": fade_out,
            "processing": "Constant measured gain and soft edge fades only; no looping, EQ, tempo edits or local ducking",
            "sourceIsReferenceFilmMix": False,
            "musicSourceAvailable": True,
            "networkMusicSourceRequired": False,
            "purityOrVocalContentAssessed": False,
            "individualStemsAvailable": False,
        },
        "originalSfx": {
            "sourceDirectory": str(SFX_BASE.relative_to(ROOT)),
            "baseGenerator": str(HELPER_PATH.relative_to(ROOT)),
            "baseGeneratorSha256": sha256(HELPER_PATH),
            "downloadedSamplesUsed": False,
            "eventCount": len(events),
            "totalEventWindowSeconds": round(sum(event["durationSeconds"] for event in events), 5),
            "events": events,
            "musicOnlyHolds": silent_windows,
        },
        "generator": {
            "file": str(Path(__file__).resolve().relative_to(ROOT)),
            "sha256": sha256(Path(__file__)),
            "dependencies": "Python standard library, project material-sound helper and system FFmpeg/ffprobe",
            "ffmpeg": subprocess.check_output(["ffmpeg", "-version"], text=True).splitlines()[0],
        },
        "outputs": {
            str(mix_path.relative_to(ROOT)): mix_stats,
            str(sfx_path.relative_to(ROOT)): sfx_stats,
        },
    }
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({"manifest": str(MANIFEST), "musicGainDb": gain_db, "outputs": manifest["outputs"]}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
