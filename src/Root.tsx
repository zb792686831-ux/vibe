import {Composition} from 'remotion';
import {SetupTest} from './SetupTest';

export const RemotionRoot = () => (
  <Composition
    id="SetupTest"
    component={SetupTest}
    width={1920}
    height={1080}
    fps={60}
    durationInFrames={300}
    defaultProps={{title: 'VIDEO WORKSPACE'}}
  />
);
