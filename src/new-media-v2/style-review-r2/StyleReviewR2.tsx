import type {CSSProperties, ReactNode} from 'react';
import {loadFont} from '@remotion/fonts';
import {Audio} from '@remotion/media';
import {AbsoluteFill, CanvasImage, Easing, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

const colors = {paper: '#eee8db', ink: '#17383d', mint: '#b8d6bf', coral: '#ce573e', cream: '#f3ead7', gold: '#d7b679'};
const serif = 'NewMedia Review Serif, serif';
const sans = 'NewMedia R2 Sans, sans-serif';
void Promise.all([
  loadFont({family: 'NewMedia Review Serif', url: staticFile('fonts/new-media-v2/style-review/NotoSerifCJKSC-Regular.subset.woff'), weight: '400', format: 'woff'}),
  loadFont({family: 'NewMedia Review Serif', url: staticFile('fonts/new-media-v2/style-review/NotoSerifCJKSC-Bold.subset.woff'), weight: '700', format: 'woff'}),
  loadFont({family: 'NewMedia R2 Sans', url: staticFile('fonts/new-media-v2/style-review-r2/NotoSansCJKSC-Bold.subset.woff'), weight: '700', format: 'woff'}),
]);

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const out = Easing.bezier(0.19, 0.82, 0.23, 1);
const inOut = Easing.bezier(0.68, 0, 0.24, 1);
const prog = (t: number, from: number, to: number, easing = out) => interpolate(t, [from, to], [0, 1], {...clamp, easing});
type Point = readonly [number, number];
const bezier = (t: number, a: Point, b: Point, c: Point, d: Point): Point => {
  const u = 1 - t;
  return [u ** 3 * a[0] + 3 * u ** 2 * t * b[0] + 3 * u * t ** 2 * c[0] + t ** 3 * d[0],
    u ** 3 * a[1] + 3 * u ** 2 * t * b[1] + 3 * u * t ** 2 * c[1] + t ** 3 * d[1]];
};

const Label = ({children, style}: {children: ReactNode; style?: CSSProperties}) => <div style={{fontFamily: sans, fontWeight: 700, fontSize: 31, letterSpacing: 3, ...style}}>{children}</div>;
const CurveWord = ({children, t, start, x, y, size, color, weight = 400, family = serif, delay = 0, glow = 0}: {
  children: ReactNode; t: number; start: number; x: number; y: number; size: number; color: string;
  weight?: number; family?: string; delay?: number; glow?: number;
}) => {
  const p = prog(t, start + delay, start + delay + 0.48);
  const [dx, dy] = bezier(p, [100, 100], [-30, 64], [-18, -7], [0, 0]);
  return <div style={{position: 'absolute', left: x, top: y, fontFamily: family, fontSize: size,
    fontWeight: weight, lineHeight: 1.24, letterSpacing: 1, color, whiteSpace: 'nowrap', opacity: prog(t, start + delay, start + delay + 0.16),
    translate: `${dx}px ${dy}px`, rotate: `${(1 - p) * 3}deg`,
    textShadow: glow > 0 ? `0 0 ${16 + glow * 20}px #e8ca9366, 0 0 ${40 + glow * 40}px #e8ca9333` : undefined}}>{children}</div>;
};

const Star = ({x, y, size, opacity = 1, color = colors.cream, rotate = 0}: {x: number; y: number; size: number; opacity?: number; color?: string; rotate?: number}) => <svg
  width={size} height={size} viewBox="0 0 100 100" style={{position: 'absolute', left: x - size / 2, top: y - size / 2, opacity, rotate: `${rotate}deg`}}>
  <path d="M50 0 C54 37 63 46 100 50 C63 54 54 63 50 100 C46 63 37 54 0 50 C37 46 46 37 50 0Z" fill={color} />
</svg>;

const ReplayBadge = ({t, style}: {t: number; style?: CSSProperties}) => <div style={{position: 'absolute', width: 198, height: 106, borderRadius: 19,
  background: colors.ink, color: colors.cream, border: '5px solid #eee8db', boxShadow: '0 10px 20px #162f322b',
  display: 'flex', alignItems: 'center', gap: 17, paddingLeft: 24, rotate: '8deg', scale: prog(t, 0.22, 0.7, Easing.spring({damping: 17})), ...style}}>
  <svg width={43} height={43} viewBox="0 0 50 50"><path d="M12 18 A18 18 0 1 1 8 33 M12 5 L12 19 L26 19" fill="none" stroke={colors.cream} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" /></svg>
  <Label>重看</Label>
</div>;

const PauseBadge = ({t, style, dark = false}: {t: number; style?: CSSProperties; dark?: boolean}) => <div style={{position: 'absolute', width: 242, height: 90,
  borderRadius: 50, border: `5px solid ${dark ? colors.mint : colors.ink}`, background: dark ? colors.ink : colors.mint,
  color: dark ? colors.cream : colors.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18,
  boxShadow: '0 10px 20px #112f3225', rotate: '-8deg', scale: 0.94 + 0.06 * prog(t, 0.13, 0.55), ...style}}>
  <span style={{width: 23, height: 31, borderLeft: '8px solid', borderRight: '8px solid'}} />
  <Label>停留</Label><span style={{fontFamily: sans, fontSize: 31, fontWeight: 700}}>05s</span>
</div>;

const CatPhoto = ({t}: {t: number}) => {
  const enter = prog(t, 0, 0.6);
  const exit = prog(t, 3.18, 3.9, inOut);
  const [dx, dy] = bezier(enter, [-160, 190], [-90, -20], [15, -16], [0, 0]);
  const [ex, ey] = bezier(exit, [0, 0], [150, -110], [-110, -550], [85, -1150]);
  return <div style={{position: 'absolute', left: 180, top: 150, width: 650, height: 745,
    opacity: enter * (1 - prog(t, 3.65, 3.9)), translate: `${dx + ex}px ${dy + ey}px`, rotate: `${-7 + (1 - enter) * -8 + exit * 14}deg`}}>
    <div style={{position: 'absolute', inset: '10px -36px -8px 32px', border: '5px solid #a7b9a2', background: '#d6dbcb', rotate: '11deg', boxShadow: '10px 24px 35px #29443b27'}} />
    <div style={{position: 'absolute', inset: '8px 18px -22px -17px', background: '#16373b', rotate: '-2deg', borderRadius: 9, boxShadow: '6px 10px 16px #12282520'}}>
      {[0, 1, 2, 3, 4, 5, 6, 7].map(i => <div key={i} style={{position: 'absolute', left: 7, top: 40 + i * 90, width: 17, height: 35, borderRadius: 4, background: colors.paper}} />)}
    </div>
    <div style={{position: 'absolute', inset: 0, background: '#faf5e9', borderRadius: 5, padding: '27px 27px 89px', boxShadow: '4px 15px 28px #2d3c3429'}}>
      <div style={{height: '100%', position: 'relative', overflow: 'hidden', background: 'radial-gradient(ellipse at 52% 35%, #e5c995, #cdbd96 55%, #99ad97 100%)'}}>
        <div style={{position: 'absolute', width: 480, height: 480, borderRadius: '50%', top: 42, left: 60, background: '#f5ead5', opacity: 0.43}} />
        <CanvasImage src={staticFile('images/new-media-v2/kitten-study.png')} style={{position: 'absolute', width: 583, height: 649, objectFit: 'contain', left: 1, bottom: -42,
          translate: `0 ${Math.sin(t * 1.7) * 1.4}px`, filter: 'drop-shadow(12px 16px 12px #65583438)'}} />
      </div>
      <div style={{position: 'absolute', left: 38, bottom: 27, width: 93, height: 9, borderRadius: 8, background: colors.ink}} />
      <div style={{position: 'absolute', left: 145, right: 34, bottom: 27, height: 9, borderRadius: 8, background: '#cecabc'}} />
    </div>
    <div style={{position: 'absolute', width: 219, height: 62, left: 205, top: -27, rotate: '3deg', background: 'repeating-linear-gradient(90deg,#d9b883ba 0 3px,#dbbf91ba 3px 7px)',
      clipPath: 'polygon(3% 0,98% 2%,96% 12%,100% 23%,97% 39%,99% 65%,96% 82%,99% 99%,1% 96%,3% 75%,0 57%,3% 32%,0 15%)', boxShadow: '0 3px 4px #513c1720'}} />
    <ReplayBadge t={t} style={{left: 456, top: 83}} />
    <PauseBadge t={t} style={{left: -76, top: 559}} />
  </div>;
};

const Backdrop = ({t}: {t: number}) => {
  const change = prog(t, 3, 3.32, inOut);
  const edge = 2480 - change * 3300;
  return <>
    <AbsoluteFill style={{background: colors.paper}} />
    <AbsoluteFill style={{background: 'radial-gradient(ellipse at 7% 95%, #bacab557, transparent 48%), radial-gradient(ellipse at 90% 6%, #d6bd9e50, transparent 56%)'}} />
    <svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
      <defs>
        <pattern id="r2-paper-dots" width={24} height={24} patternUnits="userSpaceOnUse"><circle cx={4} cy={4} r={1.4} fill="#776b55" opacity={0.14} /></pattern>
        <pattern id="r2-ink-dots" width={32} height={32} patternUnits="userSpaceOnUse" patternTransform={`translate(${t * -1.1},${t * 0.4})`}><circle cx={4} cy={4} r={2.1} fill="#d5e2cd" opacity={0.25} /></pattern>
        <linearGradient id="r2-ink-field" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#12353e" /><stop offset="0.65" stopColor="#184341" /><stop offset="1" stopColor="#153439" /></linearGradient>
        <clipPath id="r2-wipe"><path d={`M${edge} -200 C${edge - 700} 270,${edge + 480} 740,${edge - 330} 1300 L3000 1400 L3000 -200Z`} /></clipPath>
      </defs>
      <circle cx={-35} cy={220} r={570} fill="#b9c9b8" opacity={0.3} />
      <circle cx={1720} cy={1010} r={345} fill="none" stroke="#c3b69b" strokeWidth={9} opacity={0.32} />
      <rect width={1920} height={1080} fill="url(#r2-paper-dots)" />
      <g clipPath="url(#r2-wipe)">
        <rect width={1920} height={1080} fill="url(#r2-ink-field)" />
        <rect width={1920} height={1080} fill="url(#r2-ink-dots)" />
        <circle cx={1890} cy={1040} r={660} fill="none" stroke="#b8d6bf" strokeWidth={76} opacity={0.055} />
        <path d="M-230 1110 C50 530 450 160 910 -120" fill="none" stroke="#cbd7bc" strokeWidth={160} opacity={0.035} />
      </g>
    </svg>
  </>;
};

const CurveField = ({t}: {t: number}) => {
  const dark = prog(t, 3.1, 3.8);
  const final = prog(t, 7.6, 8.3);
  return <svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
    <defs>
      <linearGradient id="r2-ribbon" x1="0" x2="1"><stop stopColor={colors.mint} /><stop offset="0.55" stopColor={colors.gold} /><stop offset="1" stopColor="#e7c296" /></linearGradient>
    </defs>
    <g opacity={1 - dark}>
      <path d="M-100 910 C190 1020 490 1080 875 922 C1090 834 1040 769 1360 811" fill="none" stroke={colors.ink} strokeWidth={10} strokeLinecap="round"
        pathLength={1} strokeDasharray={1} strokeDashoffset={1 - prog(t, 0.2, 1)} />
      <path d="M1337 787 L1377 814 L1337 833" fill="none" stroke={colors.ink} strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M918 150 C875 119 840 114 800 134" fill="none" stroke={colors.coral} strokeWidth={8} strokeLinecap="round" />
    </g>
    <g opacity={dark * (1 - final)}>
      <path d="M-90 853 C144 1020 600 919 671 718 C773 426 356 192 339 425 C319 678 1041 1064 1880 788" fill="none" stroke="#061e25" strokeOpacity={0.45} strokeWidth={30} />
      <path d="M-90 845 C144 1012 600 911 671 710 C773 418 356 184 339 417 C319 670 1041 1056 1880 780" fill="none" stroke="url(#r2-ribbon)" strokeWidth={11} strokeLinecap="round"
        pathLength={1} strokeDasharray={1} strokeDashoffset={1 - prog(t, 3.2, 5.18)} />
      <path d="M1827 757 L1880 780 L1840 819" fill="none" stroke={colors.gold} strokeWidth={11} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M115 312 C190 217 268 190 373 213" fill="none" stroke={colors.mint} strokeWidth={7} strokeDasharray="15 22" opacity={0.45} />
      {[0, 1, 2].map(i => <circle key={i} cx={777 + i * 59} cy={825 + i * 9} r={9 - i * 1.7} fill={colors.cream} opacity={0.8 - i * 0.2} />)}
    </g>
    <g opacity={final}>
      <path d="M1004 854 C1112 953 1636 1027 1757 671 C1868 343 1389 236 1290 473 C1181 733 1725 813 1761 447" fill="none" stroke="#061e25" strokeWidth={31} opacity={0.5} />
      <path d="M1000 846 C1108 945 1632 1019 1753 663 C1864 335 1385 228 1286 465 C1177 725 1721 805 1757 439" fill="none" stroke="url(#r2-ribbon)" strokeWidth={12} strokeLinecap="round"
        pathLength={1} strokeDasharray={1} strokeDashoffset={1 - prog(t, 7.6, 8.7)} />
      <path d="M1721 472 L1757 434 L1781 481" fill="none" stroke={colors.gold} strokeWidth={12} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={1295} cy={443} r={17} fill={colors.coral} stroke={colors.cream} strokeWidth={7} />
    </g>
  </svg>;
};

const Heart = ({t}: {t: number}) => {
  const initial = prog(t, 0.15, 0.65);
  const travel = prog(t, 3.2, 4.3, inOut);
  const gather = prog(t, 5.72, 6.68, inOut);
  const close = prog(t, 7.6, 8.3, inOut);
  const start = bezier(initial, [1790, 170], [1860, 430], [1520, 590], [1570, 815]);
  const moving = bezier(travel, [1570, 815], [1700, 280], [610, 140], [497, 523]);
  const x = start[0] + (moving[0] - 1570) + gather * 8 + close * 970;
  const y = start[1] + (moving[1] - 815) + gather * -8 + close * 45;
  const size = 278 + travel * 110 - gather * 82 - close * 97;
  const pulse = interpolate(t, [0.65, 0.8, 1.0], [1, 1.105, 1], clamp);
  const flash = Math.max(0, 1 - Math.abs(t - 0.72) / 0.23);
  const retain = Math.max(0, 1 - Math.abs(t - 5.94) / 0.35);
  return <>
    <div style={{position: 'absolute', left: x - size * 0.65, top: y - size * 0.65, width: size * 1.3, height: size * 1.3,
      borderRadius: '50%', background: 'radial-gradient(circle, #f8bd758c 0%, #d36d3040 32%, transparent 67%)',
      opacity: flash * 0.85 + retain * 0.7, scale: 1 + flash * 0.8}} />
    <CanvasImage src={staticFile('images/new-media-v2/r2/heart-sculpture.png')} style={{position: 'absolute', left: x - size / 2, top: y - size / 2,
      width: size, height: size, objectFit: 'contain', opacity: initial, scale: pulse,
      rotate: `${-14 + initial * 7 + travel * 14 - close * 14}deg`, filter: 'drop-shadow(12px 22px 14px #06252a35)'}} />
    <Star x={x + size * 0.35} y={y - size * 0.32} size={68} opacity={flash + retain} rotate={t * 18} />
    <Star x={x - size * 0.4} y={y + size * 0.17} size={28} opacity={flash * 0.7 + retain * 0.8} />
  </>;
};

const RetainedDecor = ({t}: {t: number}) => {
  const appear = prog(t, 4.1, 4.7);
  const last = prog(t, 7.6, 8.25, inOut);
  return <div style={{opacity: appear}}>
    <PauseBadge t={t} dark style={{left: 254 + last * 1022, top: 213 - last * 32, rotate: `${-8 + last * 15}deg`, scale: 0.92}} />
    <div style={{position: 'absolute', left: 195 + last * 1257, top: 713 + last * 18, width: 189, height: 211,
      background: colors.paper, padding: 9, rotate: `${-12 + last * 20}deg`, boxShadow: '10px 18px 20px #041e2545', borderRadius: 3}}>
      <div style={{position: 'absolute', inset: '9px 9px 33px', background: '#a9b9a0', overflow: 'hidden'}}>
        <CanvasImage src={staticFile('images/new-media-v2/kitten-study.png')} style={{position: 'absolute', width: 178, height: 212, objectFit: 'contain', left: -2, top: -19}} />
      </div>
      <div style={{position: 'absolute', left: 12, bottom: 12, width: 60, height: 6, background: colors.ink, borderRadius: 4}} />
      <div style={{position: 'absolute', left: 66, top: -15, width: 85, height: 30, rotate: '3deg', background: '#d6ba8dc4'}} />
    </div>
  </div>;
};

const TextScenes = ({t}: {t: number}) => <>
  {t < 3 && <div style={{opacity: 1 - prog(t, 2.87, 3)}}>
    <CurveWord t={t} start={0} x={1002} y={224} size={91} color={colors.ink}>顺手，</CurveWord>
    <CurveWord t={t} start={0} delay={0.09} x={994} y={360} size={115} color={colors.ink}>点亮一颗</CurveWord>
    <CurveWord t={t} start={0} delay={0.2} x={976} y={514} size={176} family={sans} weight={700} color={colors.coral}>红心。</CurveWord>
  </div>}
  {t >= 3 && t < 4 && <>
    <CurveWord t={t} start={3} x={1010} y={280} size={88} color={colors.cream}>然后，</CurveWord>
    <CurveWord t={t} start={3} delay={0.06} x={980} y={410} size={166} family={sans} weight={700} color={colors.cream}>划走。</CurveWord>
  </>}
  {t >= 4 && t < 5.6 && <>
    <CurveWord t={t} start={4} x={945} y={280} size={128} color={colors.cream}>视频</CurveWord>
    <CurveWord t={t} start={4} delay={0.06} x={942} y={448} size={137} family={sans} weight={700} color={colors.cream}>过去了。</CurveWord>
  </>}
  {t >= 5.6 && t < 7.6 && <>
    <CurveWord t={t} start={5.6} x={924} y={208} size={84} color={colors.cream}>你的</CurveWord>
    <CurveWord t={t} start={5.6} delay={0.06} x={908} y={329} size={156} family={sans} weight={700} color={colors.gold}
      glow={Math.max(0, 1 - Math.abs(t - 5.99) / 0.27)}>反应，</CurveWord>
    <CurveWord t={t} start={5.6} delay={0.16} x={928} y={544} size={113} color={colors.cream}>留下了。</CurveWord>
  </>}
  {t >= 7.6 && <>
    <div style={{position: 'absolute', left: 140, top: 244, width: 890, height: 452, opacity: prog(t, 7.6, 8.05),
      translate: `${(1 - prog(t, 7.6, 8.3)) * -75}px ${(1 - prog(t, 7.6, 8.3)) * 60}px`, rotate: `${-2 + (1 - prog(t, 7.6, 8.3)) * 5}deg`}}>
      <div style={{position: 'absolute', inset: '-20px 10px 12px -16px', background: '#acc3ad', rotate: '-2deg', opacity: 0.42}} />
      <div style={{position: 'absolute', inset: 0, background: colors.paper, boxShadow: '12px 22px 20px #041e2533',
        clipPath: 'polygon(0 0,100% 1%,99.5% 10%,100% 24%,99.6% 44%,100% 61%,99.5% 80%,100% 100%,0 99%,0.5% 81%,0 64%,0.5% 45%,0 24%)'}} />
      <CurveWord t={t} start={7.6} delay={0.02} x={45} y={60} size={83} color={colors.ink}>刚才那几秒，</CurveWord>
      <CurveWord t={t} start={7.6} delay={0.14} x={38} y={218} size={141} family={sans} weight={700} color={colors.ink}>去了哪里？</CurveWord>
    </div>
    <svg width={1920} height={1080} style={{position: 'absolute', inset: 0, opacity: prog(t, 8.06, 8.5)}}>
      <path d="M216 766 C442 818 748 809 915 771" fill="none" stroke={colors.coral} strokeWidth={12} strokeLinecap="round" />
      <path d="M883 748 L919 770 L891 799" fill="none" stroke={colors.coral} strokeWidth={11} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </>}
</>;

/** All three review stills call this exact trial picture, with the same timing and layers. */
export const R2Picture = ({frame, fps}: {frame: number; fps: number}) => {
  const t = frame / fps;
  return <AbsoluteFill style={{overflow: 'hidden', fontFamily: serif, color: colors.ink}}>
    <Backdrop t={t} />
    <CurveField t={t} />
    <CatPhoto t={t} />
    <RetainedDecor t={t} />
    <TextScenes t={t} />
    <Heart t={t} />
  </AbsoluteFill>;
};

export const NewMediaV2StyleTrialR2 = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return <>
    <R2Picture frame={frame} fps={fps} />
    <Audio name="用户BGM与原创音效（保持不变）" src={staticFile('audio/new-media-v2/style-review/trial-mix.wav')} from={0} durationInFrames={10 * fps} volume={1} />
  </>;
};
export const NewMediaV2R2CollageFrame = () => <R2Picture frame={90} fps={60} />;
export const NewMediaV2R2SignalFrame = () => <R2Picture frame={402} fps={60} />;
export const NewMediaV2R2QuestionFrame = () => <R2Picture frame={540} fps={60} />;
