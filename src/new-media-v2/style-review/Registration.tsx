import {Composition, Still} from 'remotion';
import {NewMediaV2DataRiverStudy, NewMediaV2FeedbackStudy, NewMediaV2MaterialStudy, NewMediaV2StyleTrial} from './StyleReview';

export const NewMediaV2StyleRegistration = () => <>
  <Still id="NewMediaV2MaterialStudy" component={NewMediaV2MaterialStudy} width={1920} height={1080} />
  <Still id="NewMediaV2DataRiverStudy" component={NewMediaV2DataRiverStudy} width={1920} height={1080} />
  <Still id="NewMediaV2FeedbackStudy" component={NewMediaV2FeedbackStudy} width={1920} height={1080} />
  <Composition id="NewMediaV2StyleTrial" component={NewMediaV2StyleTrial}
    width={1920} height={1080} fps={60} durationInFrames={600} />
</>;
