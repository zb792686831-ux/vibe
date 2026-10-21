import {existsSync} from 'node:fs';
import {Config} from '@remotion/cli/config';

// Reuse the verified system browser. An explicit override also works on other hosts.
const browser = process.env.REMOTION_BROWSER_EXECUTABLE ?? '/usr/bin/chromium';
if (existsSync(browser)) {
  Config.setBrowserExecutable(browser);
}

Config.setCodec('h264');
Config.setPixelFormat('yuv420p');
Config.setColorSpace('bt709');
Config.setCrf(18);
Config.setConcurrency(2);
Config.setOverwriteOutput(true);
