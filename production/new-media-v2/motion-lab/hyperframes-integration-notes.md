# HyperFrames integration — actual local pipeline

Official CLI: `hyperframes@0.8.185`, Apache-2.0, https://github.com/heygen-com/hyperframes (packages/cli). Installed from npm and pinned in package-lock.json. Official bundled authoring and CLI skills were copied to `.agents/skills/hyperframes/` and `.agents/skills/hyperframes-cli/`; source is the exact pinned npm package, not a separately moving Git branch.

The new sample is native HyperFrames HTML, not a Remotion render relabeled as HyperFrames. Root composition declares 20 seconds, 1920×1080, 60fps. A paused GSAP 3.14.2 timeline is registered only after font/image readiness; `hf-seek` drives deterministic SVG geometry and the actual Blender morph frame. No wall-clock timers, runtime network assets, random particles or infinite loops. Explicit local audio element `#mix` uses the generated 20-second mix.

Blender 4.3.2 / Cycles CPU provides transparent physical image-board plates and a closed 4994-vertex heart/bead shape-key mesh. 120 RGBA morph frames at 384×384 are authored at 60fps. The unchanged kitten illustration is placed inside the physical image board. No PNG crossfade pretends to be a geometry morph. A hero/edge plate crossfade is explicitly a 2-angle approximation, not a full turntable animation.

`@remotion/paths@4.0.537` bakes equal-arc-length samples in `scripts/generate-motion-lab-geometry.mjs`; HyperFrames composites and renders the pixels. FFmpeg retains the uploaded BGM excerpt 28.048–48.048 seconds, mixes original deterministic SFX, encodes AAC, and extracts previews from the actual MP4. Existing complete Remotion film is retained.

System Chromium `/usr/bin/chromium` is selected using `HYPERFRAMES_BROWSER_PATH`; local CPU screenshot capture is expected here, not GPU. `HYPERFRAMES_NO_TELEMETRY=1` disables optional anonymous telemetry. Doctor passed required Node/FFmpeg/Chromium checks; optional whisper, TTS and generative music are not needed for this no-voiceover, user-BGM film.

The static HyperFrames linter does not inspect the external scene.js timeline. The renderer stages that exact source inline into index.html for lint/runtime audit and render, rather than adding an empty fake timeline. Local CSS and bundled fonts are also available in staging. Staging and original full music stay ignored. No cloud publishing, HeyGen sign-in, paid API or account reset is involved.

Commands: `npm run motion:geometry`; `npm run motion:audio`; `npm run motion:prepare`; `npm run motion:render`; `npm run motion:verify`. `motion:build` chains the whole sample. Runtime checks, decoded media checks and human aesthetic acceptance are separate; the sample is not an approved full-film replacement.
