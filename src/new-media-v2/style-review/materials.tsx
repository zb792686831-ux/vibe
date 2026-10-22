import type {CSSProperties, ReactNode} from 'react';
import {useId} from 'react';
import {loadFont} from '@remotion/fonts';
import {AbsoluteFill, CanvasImage, Easing, interpolate, staticFile} from 'remotion';

export const material = {
  ink: '#08090b',
  warm: '#382819',
  paper: '#e8e2d3',
  gold: '#c6aa70',
  muted: '#8d826e',
  red: '#b64d3b',
  font: 'NewMedia Review Serif, Noto Serif CJK SC, serif',
};

void Promise.all([
  loadFont({family: 'NewMedia Review Serif', url: staticFile('fonts/new-media-v2/style-review/NotoSerifCJKSC-Regular.subset.woff'), weight: '400', format: 'woff'}),
  loadFont({family: 'NewMedia Review Serif', url: staticFile('fonts/new-media-v2/style-review/NotoSerifCJKSC-Bold.subset.woff'), weight: '700', format: 'woff'}),
]);

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
export const ease = (frame: number, from: number, to: number, start = 0, end = 1) =>
  interpolate(frame, [from, to], [start, end], {...clamp, easing: Easing.bezier(0.22, 0.7, 0.2, 1)});

export const MaterialStage = ({frame, fps, children}: {frame: number; fps: number; children: ReactNode}) => {
  const id = useId().replace(/:/g, '');
  return <AbsoluteFill style={{backgroundColor: material.ink, color: material.paper, fontFamily: material.font, overflow: 'hidden'}}>
    <AbsoluteFill style={{background: 'radial-gradient(ellipse at 48% 37%, #46311b38 0%, #201a1218 33%, transparent 62%), linear-gradient(115deg, #13110c 0%, #080a0e 62%, #09090b 100%)'}} />
    <svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
      <defs>
        <filter id={`${id}-grain`} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves={2} seed={31} stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>
      <rect width={1920} height={1080} opacity={0.065} filter={`url(#${id}-grain)`} style={{mixBlendMode: 'soft-light'}} />
      {Array.from({length: 44}, (_, i) => {
        const x = (i * 431 + 137) % 1920;
        const y = (((i * 217 + 73) % 1080) - frame / fps * (0.9 + i % 4) + 1080) % 1080;
        return <circle key={i} cx={x} cy={y} r={0.65 + (i % 5) * 0.32}
          fill={i % 3 ? material.paper : material.gold} opacity={0.08 + (i % 6) * 0.025} />;
      })}
    </svg>
    {children}
    <AbsoluteFill style={{pointerEvents: 'none', background: 'radial-gradient(ellipse at 50% 44%, transparent 31%, #00000016 63%, #00000082 100%)'}} />
  </AbsoluteFill>;
};

export const ReadingLine = ({children, top = 846, size = 76, style = {}}: {
  children: ReactNode; top?: number; size?: number; style?: CSSProperties;
}) => <div style={{position: 'absolute', left: 120, right: 120, top, textAlign: 'center',
  fontSize: size, lineHeight: 1.55, fontWeight: 400, letterSpacing: 3.8,
  color: material.paper, fontFamily: material.font, textShadow: '0px 2px 10px #00000050', ...style}}>{children}</div>;

export const HeartShape = ({filled = true}: {filled?: boolean}) => <svg width="100%" height="100%" viewBox="0 0 120 120">
  <defs>
    <linearGradient id="review-heart-ink" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#d4775d" />
      <stop offset="45%" stopColor={material.red} />
      <stop offset="100%" stopColor="#6b2f29" />
    </linearGradient>
  </defs>
  <path d="M60 99C49 90 15 65 15 42C15 17 45 11 60 31C75 11 105 17 105 42C105 65 71 90 60 99Z"
    fill={filled ? 'url(#review-heart-ink)' : '#0f1111'} stroke={filled ? '#cb785f' : '#b3a17b'} strokeWidth={filled ? 1.1 : 2.1} />
  {filled && <path d="M28 40C31 26 43 25 48 30" fill="none" stroke="#f2c6a8" strokeOpacity={0.36} strokeWidth={3} strokeLinecap="round" />}
</svg>;

export const PhoneAndKitten = ({frame, fps}: {frame: number; fps: number}) => {
  const swipe = ease(frame, 3.14 * fps, 3.86 * fps, 0, -850);
  const opacity = ease(frame, 4.1 * fps, 5.5 * fps, 1, 0);
  const bodyShift = ease(frame, 4.1 * fps, 5.5 * fps, 0, -40);
  return <div style={{position: 'absolute', left: 765, top: 104, width: 390, height: 688,
    opacity, translate: `0px ${bodyShift}px`}}>
    <div style={{position: 'absolute', bottom: -20, left: -35, width: 460, height: 46, borderRadius: '50%',
      background: 'radial-gradient(ellipse, #000000d0 0%, #00000000 69%)'}} />
    <div style={{position: 'absolute', inset: 0, borderRadius: 52,
      background: 'linear-gradient(126deg, #d0c5ac 0%, #948775 9%, #433d32 20%, #6a6253 47%, #b0a18a 76%, #4a4337 100%)',
      boxShadow: 'inset 1px 1px 1px #f0dfb888, inset -1px -2px 1px #060605, 9px 17px 34px #00000075'}} />
    <div style={{position: 'absolute', inset: 3, borderRadius: 49, border: '1px solid #e7d7ad4d'}} />
    <div style={{position: 'absolute', inset: 10, borderRadius: 43, backgroundColor: '#0c0b09', overflow: 'hidden'}}>
      <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 45% 42%, #4939298c, #18150f5c 57%, #0b0c0c 100%)'}} />
      <div style={{position: 'absolute', inset: 0, translate: `0px ${swipe}px`}}>
        <div style={{position: 'absolute', left: 22, right: 22, bottom: 74, height: 27, borderRadius: '50%',
          background: 'radial-gradient(ellipse, #0000009c, transparent 70%)'}} />
        <CanvasImage src={staticFile('images/new-media-v2/kitten-study.png')}
          style={{position: 'absolute', left: -52, top: 77, width: 471, height: 510, objectFit: 'contain',
            translate: `0px ${Math.sin(frame / fps * 1.12) * 1.1}px`, filter: 'drop-shadow(0px 8px 9px #00000075)'}} />
        <div style={{position: 'absolute', left: 33, right: 33, bottom: 62, height: 1, background: 'linear-gradient(90deg, transparent, #c2a56c40, transparent)'}} />
      </div>
      <div style={{position: 'absolute', left: '50%', top: 17, width: 78, height: 12, borderRadius: 8,
        translate: '-50% 0px', backgroundColor: '#020303', boxShadow: '0px 1px 1px #c2ab7724'}} />
      <div style={{position: 'absolute', inset: 0, borderRadius: 43, border: '1px solid #ddd3b21a',
        background: 'linear-gradient(111deg, #f1e8d708 0%, transparent 19%, transparent 80%, #ffffff03)'}} />
    </div>
    <div style={{position: 'absolute', left: -3, top: 153, width: 4, height: 55, borderRadius: 2, backgroundColor: '#887c65'}} />
  </div>;
};

export const ReactionTrace = ({frame, fps}: {frame: number; fps: number}) => {
  const filled = frame >= 0.65 * fps;
  const pulse = interpolate(frame, [0.65 * fps, 0.84 * fps, 1.1 * fps], [1, 1.075, 1], clamp);
  const gathering = ease(frame, 5.6 * fps, 7.12 * fps);
  const heartSize = interpolate(gathering, [0, 1], [70, 13]);
  const x = interpolate(gathering, [0, 1], [1091, 960]);
  const y = interpolate(gathering, [0, 1], [445, 430]);
  const line = ease(frame, 7.6 * fps, 9.8 * fps);
  return <>
    <div style={{position: 'absolute', left: x - heartSize / 2, top: y - heartSize / 2,
      width: heartSize, height: heartSize, scale: pulse, opacity: 1 - gathering}}>
      <HeartShape filled={filled} />
    </div>
    <svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
      <defs><radialGradient id="review-trace-pearl"><stop offset="0%" stopColor="#f6dbc0" /><stop offset="52%" stopColor={material.red} /><stop offset="100%" stopColor="#753a2f" /></radialGradient></defs>
      <circle cx={x} cy={y} r={6} fill="url(#review-trace-pearl)" opacity={gathering} />
      <circle cx={960} cy={430} r={34 + gathering * 21} fill="none" stroke={material.gold} strokeWidth={0.8} opacity={gathering * 0.14} />
      <path d="M967 430 C1074 428 1120 379 1210 343 C1281 315 1321 320 1390 295"
        fill="none" stroke={material.gold} strokeWidth={1.1} strokeOpacity={0.45}
        pathLength={1} strokeDasharray={1} strokeDashoffset={1 - line} />
      {[0, 1, 2].map((i) => <circle key={i} cx={962 + i * 9} cy={431 - i * 2}
        r={1.4} fill={material.gold} opacity={gathering * 0.4} />)}
    </svg>
  </>;
};
