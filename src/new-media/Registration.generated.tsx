import {Composition} from 'remotion';
import {NewMediaVideo} from './NewMediaVideo';
export const NewMediaRegistration = () => (
  <Composition id="NewMediaIntro" component={NewMediaVideo}
    width={1920} height={1080} fps={60} durationInFrames={10246}
    defaultProps={{draftWithoutBgm: true}} />
);
