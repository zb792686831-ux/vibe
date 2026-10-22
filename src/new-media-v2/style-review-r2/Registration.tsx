import {Composition, Folder, Still} from 'remotion';
import {NewMediaV2R2CollageFrame, NewMediaV2R2QuestionFrame, NewMediaV2R2SignalFrame, NewMediaV2StyleTrialR2} from './StyleReviewR2';

export const NewMediaV2StyleR2Registration = () => <Folder name="NewMedia-V2-Style-R2">
  <Composition id="NewMediaV2StyleTrialR2" component={NewMediaV2StyleTrialR2} width={1920} height={1080} fps={60} durationInFrames={600} />
  <Still id="NewMediaV2R2CollageFrame" component={NewMediaV2R2CollageFrame} width={1920} height={1080} />
  <Still id="NewMediaV2R2SignalFrame" component={NewMediaV2R2SignalFrame} width={1920} height={1080} />
  <Still id="NewMediaV2R2QuestionFrame" component={NewMediaV2R2QuestionFrame} width={1920} height={1080} />
</Folder>;
