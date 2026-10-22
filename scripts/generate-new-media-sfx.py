#!/usr/bin/env python3
"""Create original, deterministic interface/motion sound effects for this film.

Only Python's standard library is used. These short sounds are synthesized from
oscillators and filtered seeded noise; they contain no sampled recordings,
borrowed sound effects, speech, or background music. Re-running the script only
replaces the six named generated WAVs below. Timeline placement and final mix
levels are intentionally left to the edit.
"""

from array import array
import json
import math
from pathlib import Path
import random
import sys
import wave


RATE = 48_000
ROOT = Path(__file__).resolve().parent.parent
DESTINATION = ROOT / "public" / "audio" / "new-media" / "sfx"
TAU = 2 * math.pi


def smoothstep(value):
    value = min(1.0, max(0.0, value))
    return value * value * (3 - 2 * value)


def edge_envelope(t, duration, attack, release):
    """Smooth both boundaries, including exact zero at the last sample."""
    return smoothstep(t / attack) * smoothstep((duration - t) / release)


def lowpass_alpha(cutoff):
    return 1 - math.exp(-TAU * cutoff / RATE)


def synthesize(kind, duration):
    rng = random.Random(20261021 + sum(ord(char) for char in kind))
    length = round(duration * RATE)
    samples = []
    phase = 0.0
    low = 0.0
    high = 0.0
    for index in range(length):
        t = index / RATE
        u = index / (length - 1)
        # The noise is reproducible and generated locally, not sampled audio.
        noise = rng.uniform(-1.0, 1.0)

        if kind == "click":
            high += lowpass_alpha(6200) * (noise - high)
            low += lowpass_alpha(1000) * (noise - low)
            body = 0.6 * math.sin(TAU * 1710 * t) * math.exp(-125 * t)
            body += 0.28 * math.sin(TAU * 670 * t) * math.exp(-95 * t)
            body += 0.5 * (high - low) * math.exp(-150 * t)
            value = body * edge_envelope(t, duration - 1 / RATE, 0.001, 0.013)
            pan = -0.08

        elif kind == "whoosh":
            cutoff = 1000 + 4100 * math.sin(math.pi * u) ** 2
            high += lowpass_alpha(cutoff) * (noise - high)
            low += lowpass_alpha(400) * (noise - low)
            airy = high - low
            amplitude = math.exp(-((u - 0.51) / 0.22) ** 2)
            phase += TAU * (240 - 145 * u) / RATE
            value = (airy + 0.055 * math.sin(phase)) * amplitude
            value *= edge_envelope(t, duration - 1 / RATE, 0.045, 0.09)
            pan = -0.45 + 0.9 * smoothstep(u)

        elif kind == "impact":
            phase += TAU * (47 + 110 * math.exp(-24 * t)) / RATE
            low += lowpass_alpha(900) * (noise - low)
            body = 0.86 * math.sin(phase) * math.exp(-12 * t)
            body += 0.11 * math.sin(2.07 * phase) * math.exp(-21 * t)
            body += 0.12 * low * math.exp(-32 * t)
            value = body * edge_envelope(t, duration - 1 / RATE, 0.003, 0.14)
            pan = 0.0

        elif kind == "chime":
            body = 0.64 * math.sin(TAU * 660 * t) * math.exp(-4.8 * t)
            body += 0.23 * math.sin(TAU * 990 * t) * math.exp(-6.1 * t)
            body += 0.12 * math.sin(TAU * 1320 * t) * math.exp(-7.5 * t)
            value = body * edge_envelope(t, duration - 1 / RATE, 0.007, 0.23)
            pan = 0.12 * math.sin(TAU * 0.8 * t)

        elif kind == "step":
            low += lowpass_alpha(2400) * (noise - low)
            phase += TAU * (310 - 100 * u) / RATE
            body = 0.58 * math.sin(phase) * math.exp(-38 * t)
            body += 0.26 * math.sin(TAU * 760 * t) * math.exp(-65 * t)
            body += 0.35 * low * math.exp(-55 * t)
            value = body * edge_envelope(t, duration - 1 / RATE, 0.0015, 0.045)
            pan = 0.08

        elif kind == "riser":
            high += lowpass_alpha(800 + 4300 * u * u) * (noise - high)
            low += lowpass_alpha(280) * (noise - low)
            phase += TAU * (180 + 630 * u * u) / RATE
            reverse_shape = math.sin(math.pi * u / 2) ** 2
            value = ((high - low) * 0.9 + math.sin(phase) * 0.11) * reverse_shape
            value *= edge_envelope(t, duration - 1 / RATE, 0.08, 0.045)
            pan = 0.25 * math.sin(math.pi * u)

        else:
            raise ValueError(f"Unknown generated sound: {kind}")

        angle = (pan + 1) * math.pi / 4
        samples.append((value * math.cos(angle), value * math.sin(angle)))

    assert all(math.isfinite(v) for pair in samples for v in pair)
    return samples


def write_wav(kind, duration, target_peak):
    samples = synthesize(kind, duration)
    measured_peak = max(abs(value) for pair in samples for value in pair)
    assert measured_peak > 0.0001, f"Unexpected silence: {kind}"
    gain = target_peak / measured_peak
    pcm = array("h")
    for pair in samples:
        pcm.extend(round(value * gain * 32767) for value in pair)
    # Force zero endpoints even if floating-point rounding changes an envelope.
    pcm[0] = pcm[1] = pcm[-1] = pcm[-2] = 0
    peak = max(abs(sample) for sample in pcm) / 32767
    assert 0 < peak < 0.65, f"Unexpected peak: {kind}"
    if sys.byteorder != "little":
        pcm.byteswap()
    output = DESTINATION / f"{kind}.wav"
    with wave.open(str(output), "wb") as handle:
        handle.setnchannels(2)
        handle.setsampwidth(2)
        handle.setframerate(RATE)
        handle.writeframes(pcm.tobytes())
    return {
        "file": str(output.relative_to(ROOT)),
        "durationSeconds": duration,
        "sampleRate": RATE,
        "channels": 2,
        "peak": round(peak, 5),
    }


def main():
    DESTINATION.mkdir(parents=True, exist_ok=True)
    sounds = [
        ("click", 0.065, 0.42),
        ("whoosh", 0.56, 0.38),
        ("impact", 0.44, 0.55),
        ("chime", 0.8, 0.38),
        ("step", 0.15, 0.36),
        ("riser", 0.62, 0.40),
    ]
    results = [write_wav(*sound) for sound in sounds]
    print(json.dumps({"originalSynthesis": True, "sounds": results}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
