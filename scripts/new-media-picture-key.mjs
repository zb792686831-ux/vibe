import {createHash} from 'node:crypto';
import {readFileSync, readdirSync} from 'node:fs';
import path from 'node:path';

export const pictureSourceFiles = ['NewMediaVideo.tsx', 'SceneVisuals.tsx'];

// Preserve the original cache-key byte order exactly; filenames are not hashed.
export const newMediaPictureKey = (root, data, {
  sourceDirectory = path.join(root, 'src/new-media'),
} = {}) => {
  const key = createHash('sha256');
  for (const name of pictureSourceFiles) key.update(readFileSync(path.join(sourceDirectory, name)));
  key.update(JSON.stringify({fps: data.fps, durationInFrames: data.durationInFrames, scenes: data.scenes}));
  for (const name of readdirSync(path.join(root, 'public/fonts/new-media')).sort()) {
    key.update(readFileSync(path.join(root, 'public/fonts/new-media', name)));
  }
  return key.digest('hex');
};
