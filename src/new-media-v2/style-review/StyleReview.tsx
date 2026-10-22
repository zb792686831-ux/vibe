import {Audio} from '@remotion/media';
import {Sequence, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {MaterialStage, PhoneAndKitten, ReactionTrace, ReadingLine, ease, material} from './materials';

const Caption = ({children, duration, size = 76}: {children: React.ReactNode; duration: number; size?: number}) => {
  const frame = useCurrentFrame();
  return <ReadingLine size={size} style={{opacity: ease(frame, 0, 8), translate: `0px ${ease(frame, 0, 15, 5, 0)}px`}}>
    <span style={{opacity: frame > duration - 5 ? ease(frame, duration - 5, duration, 1, 0) : 1}}>{children}</span>
  </ReadingLine>;
};

export const TrialPicture = ({frame, fps}: {frame: number; fps: number}) => <MaterialStage frame={frame} fps={fps}>
  <PhoneAndKitten frame={frame} fps={fps} />
  <ReactionTrace frame={frame} fps={fps} />
</MaterialStage>;

export const NewMediaV2StyleTrial = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return <>
    <TrialPicture frame={frame} fps={fps} />
    <Sequence name="顺手，点亮一颗红心。" from={0} durationInFrames={3 * fps}>
      <Caption duration={3 * fps}>顺手，点亮一颗<span style={{color: material.red}}>红心</span>。</Caption>
    </Sequence>
    <Sequence name="然后，划走。" from={3 * fps} durationInFrames={fps}>
      <Caption duration={fps}>然后，划走。</Caption>
    </Sequence>
    <Sequence name="视频过去了。" from={4 * fps} durationInFrames={Math.round(1.6 * fps)}>
      <Caption duration={Math.round(1.6 * fps)}>视频过去了。</Caption>
    </Sequence>
    <Sequence name="你的反应，留下了。" from={Math.round(5.6 * fps)} durationInFrames={2 * fps}>
      <Caption duration={2 * fps}>你的<span style={{color: material.gold}}>反应</span>，留下了。</Caption>
    </Sequence>
    <Sequence name="刚才那几秒，去了哪里？" from={Math.round(7.6 * fps)} durationInFrames={Math.round(2.4 * fps)}>
      <Caption duration={10000} size={78}>刚才那几秒，去了哪里？</Caption>
    </Sequence>
    <Audio name="参考音轨试段与原创音效" src={staticFile('audio/new-media-v2/style-review/trial-mix.wav')}
      from={0} durationInFrames={10 * fps} volume={1} />
  </>;
};

export const NewMediaV2MaterialStudy = () => <>
  <TrialPicture frame={120} fps={60} />
  <ReadingLine>顺手，点亮一颗<span style={{color: material.red}}>红心</span>。</ReadingLine>
</>;

export const NewMediaV2DataRiverStudy = () => {
  const frame = 180;
  const fps = 60;
  const lines = Array.from({length: 9}, (_, i) => ({
    start: 245 + i * 49,
    end: 460 + Math.sin(i * 1.3) * 65,
  }));
  const curvePoint = (t: number, start: number, end: number) => {
    const u = 1 - t;
    return {x: u ** 3 * 120 + 3 * u * u * t * 620 + 3 * u * t * t * 900 + t ** 3 * 1610,
      y: u ** 3 * start + 3 * u * u * t * (start - 112) + 3 * u * t * t * (end + 105) + t ** 3 * end};
  };
  return <MaterialStage frame={frame} fps={fps}>
    <svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
      <defs>
        <radialGradient id="review-river-pearl"><stop offset="0%" stopColor="#f3ead6" /><stop offset="32%" stopColor="#d3bf8f" /><stop offset="100%" stopColor="#6d5732" /></radialGradient>
        <linearGradient id="review-river-line" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor={material.gold} stopOpacity={0} /><stop offset="35%" stopColor={material.gold} stopOpacity={0.38} /><stop offset="100%" stopColor={material.gold} stopOpacity={0.6} /></linearGradient>
      </defs>
      {lines.map((line, i) => <g key={i}>
        <path d={`M120 ${line.start} C620 ${line.start - 112}, 900 ${line.end + 105}, 1610 ${line.end}`}
          fill="none" stroke="url(#review-river-line)" strokeWidth={0.65} opacity={0.5} />
        {Array.from({length: 24}, (_, j) => {
          const t = ((j + (i % 3) * 0.31) / 24 + frame / fps * (0.022 + i * 0.0005)) % 1;
          const p = curvePoint(t, line.start, line.end);
          return <circle key={j} cx={p.x} cy={p.y} r={1.4 + (j * 7 + i * 3) % 4 * 0.7}
            fill="url(#review-river-pearl)" opacity={0.25 + t * 0.7} />;
        })}
      </g>)}
      <path d="M1230 300 C1243 344 1270 368 1260 409 C1250 459 1278 502 1282 531 C1285 562 1261 607 1245 631"
        fill="none" stroke={material.paper} strokeWidth={2} strokeOpacity={0.65} />
      <circle cx={1263} cy={459} r={161} fill="none" stroke={material.gold} strokeWidth={0.7} strokeOpacity={0.2} />
      <path d="M1093 458 H1433 M1263 288 V628" stroke={material.gold} strokeWidth={0.6} strokeOpacity={0.08} />
    </svg>
    <ReadingLine top={125} size={64}>当成千上万次停留汇在一起，</ReadingLine>
    <ReadingLine top={845} size={70}>零散的动作，慢慢显出<span style={{color: material.gold}}>轮廓</span>。</ReadingLine>
  </MaterialStage>;
};

export const NewMediaV2FeedbackStudy = () => <MaterialStage frame={180} fps={60}>
  <svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
    <defs><linearGradient id="review-feedback-line" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor={material.gold} stopOpacity={0.1} /><stop offset="52%" stopColor={material.gold} stopOpacity={0.45} /><stop offset="100%" stopColor={material.gold} stopOpacity={0.1} /></linearGradient></defs>
    <path d="M384 594 C293 308 580 181 1049 244 C1469 299 1651 560 1444 741 C1240 919 680 842 468 697"
      fill="none" stroke="url(#review-feedback-line)" strokeWidth={1.2} />
    <path d="M458 736 C186 538 482 267 926 261 C1368 255 1703 537 1472 758"
      fill="none" stroke={material.paper} strokeWidth={0.8} strokeOpacity={0.08} />
    <path d="M373 578 L383 599 L398 581" fill="none" stroke={material.gold} strokeWidth={1.2} strokeOpacity={0.45} />
    <path d="M1453 755 L1444 741 L1432 762" fill="none" stroke={material.gold} strokeWidth={1.2} strokeOpacity={0.45} />
    <circle cx={1062} cy={247} r={4.4} fill={material.gold} />
    <circle cx={1471} cy={715} r={3} fill={material.paper} fillOpacity={0.65} />
    <circle cx={594} cy={789} r={2.6} fill={material.gold} />
  </svg>
  <ReadingLine top={390} size={82} style={{letterSpacing: 5, fontWeight: 700}}><span style={{color: material.gold}}>内容</span>，影响着你的停留。</ReadingLine>
  <ReadingLine top={517} size={82} style={{letterSpacing: 5, fontWeight: 700}}>你的<span style={{color: material.gold}}>停留</span>，也在影响内容。</ReadingLine>
</MaterialStage>;
