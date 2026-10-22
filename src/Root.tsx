import {Composition} from 'remotion';
import {SetupTest} from './SetupTest';
import {NewMediaRegistration} from './new-media/Registration.generated';
import {NewMediaV2StyleRegistration} from './new-media-v2/style-review/Registration';

export const RemotionRoot = () => (
  <>
  <Composition
    id="SetupTest"
    component={SetupTest}
    width={1920}
    height={1080}
    fps={60}
    durationInFrames={300}
    defaultProps={{title: 'VIDEO WORKSPACE'}}
  />
  <NewMediaRegistration />
  <NewMediaV2StyleRegistration />
  </>
);
