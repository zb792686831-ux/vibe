import type {ReactNode} from 'react';
import {loadFont} from '@remotion/fonts';
import {Audio} from '@remotion/media';
import {AbsoluteFill, Easing, Img, interpolate, Sequence, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import timeline from './timeline.json';
import {FinalDiagram} from './Diagrams';

const C = {ivory: '#ebe4d5', gold: '#d6b77a', muted: '#9a997f', mint: '#abc8b8', red: '#c35e48'};
const serif = 'NewMedia Final Serif, serif';
const sans = 'NewMedia Final Sans, sans-serif';
void Promise.all([
  loadFont({family: 'NewMedia Final Serif', url: staticFile('fonts/new-media-v2/style-review/NotoSerifCJKSC-Regular.subset.woff'), weight: '400', format: 'woff'}),
  loadFont({family: 'NewMedia Final Serif', url: staticFile('fonts/new-media-v2/style-review/NotoSerifCJKSC-Bold.subset.woff'), weight: '700', format: 'woff'}),
  loadFont({family: 'NewMedia Final Sans', url: staticFile('fonts/new-media-v2/style-review-r2/NotoSansCJKSC-Bold.subset.woff'), weight: '700', format: 'woff'}),
]);
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const smooth = Easing.bezier(0.4, 0, 0.2, 1);
const e = (t: number, a: number, b: number, from = 0, to = 1) => interpolate(t, [a, b], [from, to], {...clamp, easing: smooth});
const windowOpacity = (t: number, a: number, b: number, fade = 0.8) => e(t, a, a + fade) * (1 - e(t, b - 0.5, b));
type P = [number, number];
const point = (v: number, a: P, b: P, c: P, d: P): P => {
  const u = 1 - v;
  return [u ** 3 * a[0] + 3 * u ** 2 * v * b[0] + 3 * u * v ** 2 * c[0] + v ** 3 * d[0],
    u ** 3 * a[1] + 3 * u ** 2 * v * b[1] + 3 * u * v ** 2 * c[1] + v ** 3 * d[1]];
};

/** Only the patterned sections have a moving field; black sections remain #000. */
const Background = ({t}: {t: number}) => {
  const strength = timeline.backgroundAlternation.filter(x => x.pattern)
    .reduce((sum, x) => sum + e(t, x.start, x.start + 1.2) * (1 - e(t, x.end - 1.2, x.end)), 0);
  return <>
    <AbsoluteFill style={{backgroundColor: '#000000'}} />
    {strength > 0 && <AbsoluteFill style={{opacity: strength, overflow: 'hidden', background: '#09151b'}}>
      <div style={{position: 'absolute', inset: -56, backgroundImage: 'radial-gradient(circle at 3px 3px, #dcd9c044 1.6px, transparent 2.1px)', backgroundSize: '30px 30px',
        translate: `${Math.sin(t * 0.08) * 12}px ${Math.cos(t * 0.055) * 9}px`, opacity: 0.73 + Math.sin(t * 0.19) * 0.055}} />
      <div style={{position: 'absolute', width: 1450, height: 1450, border: '50px solid #a1b5a7', borderRadius: '50%', left: 1360,
        top: -330 + Math.sin(t * 0.07) * 28, rotate: '-24deg', opacity: 0.035}} />
      <AbsoluteFill style={{background: 'radial-gradient(ellipse at 50% 38%, transparent 20%, #00000057 100%)'}} />
    </AbsoluteFill>}
  </>;
};

const Highlight = ({text}: {text: string}) => {
  const word = ['新媒体运营', '汇总后的反馈', '反复出现', '停下', '红心', '反应', '信号', '轮廓', '线索', '验证', '开头', '留长', '真实', '停留', '留下'].find(w => text.includes(w));
  if (!word) return <>{text}</>;
  const at = text.indexOf(word);
  return <>{text.slice(0, at)}<span style={{color: word === '红心' ? C.red : C.gold}}>{word}</span>{text.slice(at + word.length)}</>;
};

const Caption = ({text, unit, duration}: {text: string; unit: number; duration: number}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  const ending = unit === 40;
  const fade = e(t, 0, 0.55) * (ending || unit === 34 ? 1 : 1 - e(t, duration - 0.12, duration));
  return <div style={{position: 'absolute', left: 120, right: 120,
    top: ending ? 434 : unit === 34 ? 364 : unit === 35 ? 500 : 846,
    fontFamily: serif, fontSize: ending ? 106 : unit === 34 || unit === 35 ? 80 : 84,
    lineHeight: 1.5, letterSpacing: 3, fontWeight: ending ? 700 : 400, textAlign: 'center', whiteSpace: 'nowrap', color: C.ivory,
    opacity: fade, translate: `0px ${e(t, 0, 0.75, 10, 0)}px`, textShadow: '0 3px 12px #000000c0'}}>
    <Highlight text={text} />
  </div>;
};

const Replay = ({t}: {t: number}) => <svg width={138} height={138} viewBox="0 0 140 140" style={{position: 'absolute', left: 1166, top: 255,
  opacity: windowOpacity(t, 25.1, 28.1, 0.7), rotate: `${e(t, 25.35, 27.4, -55, 48)}deg`}}>
  <path d="M36 33 A49 49 0 1 1 24 78 M36 13 L36 35 L58 35" fill="none" stroke={C.gold} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
</svg>;

const Cat = ({t, ghost = false}: {t: number; ghost?: boolean}) => {
  const tilt = e(t, 16, 17.8, 0, -3.4) + e(t, 25.35, 26.3, 0, 3.4) - e(t, 26.3, 27.5, 0, 3.4);
  return <Img src={staticFile('images/new-media-v2/kitten-study.png')} style={{position: 'absolute', width: 512, height: 574, objectFit: 'contain', left: -54, top: 55,
    opacity: ghost ? 0.12 : 1, translate: `${ghost ? -18 : 0}px ${Math.sin(t * 0.8) * 1.0}px`, rotate: `${tilt}deg`, transformOrigin: '52% 75%'}} />;
};

const PhoneScene = ({t}: {t: number}) => {
  const enter = e(t, 0, 1.6);
  const dip = e(t, 9, 11, 0, 85) - e(t, 12.5, 14.4, 0, 85);
  const screenSwipe = e(t, 31.2, 33.2, 0, -820);
  const vanish = 1 - e(t, 33.1, 34.5);
  const catReveal = e(t, 12.5, 14.2);
  const scroll = e(t, 0, 4.5, 0, -110) + e(t, 4.5, 5.6, 0, -18);
  const gather = e(t, 34.1, 37.0);
  const [hx, hy] = point(gather, [1110, 462], [1160, 284], [866, 335], [960, 427]);
  const heartEntry = e(t, 27.25, 28.65);
  const [hx0, hy0] = point(heartEntry, [1218, 198], [1255, 315], [1090, 342], [1110, 462]);
  const pulse = Math.max(0, 1 - Math.abs(t - 28.77) / 0.32);
  const reaction = Math.max(0, 1 - Math.abs(t - 34.78) / 0.4);
  const hsize = (106 - gather * 94) * (1 + pulse * 0.045);
  return <>
    <svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
      <circle cx={960} cy={430} r={335} fill="none" stroke={C.gold} strokeWidth={6} strokeOpacity={0.65}
        pathLength={1} strokeDasharray={1} strokeDashoffset={1 - e(t, 18, 23)}
        style={{opacity: e(t, 17.8, 18) * (1 - e(t, 23, 24.2)), rotate: '-90deg', transformOrigin: '960px 430px'}} />
    </svg>
    <div style={{position: 'absolute', left: 750, top: 119, width: 420, height: 658,
      opacity: enter * vanish, translate: `0 ${e(t, 0, 1.6, 35, 0) + dip + e(t, 33.1, 34.5, 0, -45)}px`,
      rotate: `${e(t, 0, 5.6, -1.5, 0)}deg`}}>
      <div style={{position: 'absolute', inset: 0, borderRadius: 51, background: 'linear-gradient(115deg, #d1c3a6, #817c6c 14%, #232521 35%, #a5a08c 72%, #5e6258)',
        boxShadow: 'inset 2px 2px 2px #e3dab9aa, inset -2px -2px 2px #151818, 12px 22px 35px #00000080'}} />
      <div style={{position: 'absolute', inset: 8, borderRadius: 44, overflow: 'hidden', background: '#0b1010', border: '2px solid #d0c4a326'}}>
        <div style={{position: 'absolute', inset: 0, translate: `0 ${screenSwipe}px`}}>
          <div style={{position: 'absolute', inset: 0, opacity: 1 - catReveal, translate: `0 ${scroll}px`}}>
            {[0, 1, 2].map(i => <div key={i} style={{position: 'absolute', left: 26, right: 26, top: 72 + i * 247, height: 205, overflow: 'hidden', borderRadius: 13,
              background: i % 2 ? 'linear-gradient(145deg,#455951,#172726)' : 'linear-gradient(145deg,#786b49,#1a241f)'}}>
              <div style={{position: 'absolute', width: 140, height: 140, borderRadius: '50%', background: '#d6c39845', left: 98, top: 23}} />
              <svg width={350} height={205}><path d="M0 170 C80 240 170 20 350 125" fill="none" stroke="#d9d0af" strokeWidth={8} opacity={0.45} /></svg>
              <div style={{position: 'absolute', left: 18, right: 90, bottom: 18, height: 8, background: '#f0e8cc65', borderRadius: 5}} />
            </div>)}
          </div>
          <div style={{position: 'absolute', inset: 0, opacity: catReveal, background: 'radial-gradient(ellipse at 50% 47%, #67533768, transparent 75%)', translate: `0 ${e(t, 12.5, 14.2, 180, 0)}px`}}>
            {t >= 25.35 && t < 27.5 && <div style={{opacity: Math.sin(e(t, 25.35, 27.5) * Math.PI)}}><Cat t={t - 0.3} ghost /></div>}
            <Cat t={t} />
          </div>
        </div>
        <div style={{position: 'absolute', left: 165, top: 14, width: 70, height: 12, borderRadius: 12, background: '#030505'}} />
        <div style={{position: 'absolute', left: 155, bottom: 12, width: 90, height: 5, borderRadius: 5, background: '#b8bfa250'}} />
      </div>
    </div>
    <Replay t={t} />
    {t >= 27.25 && <>
      <div style={{position: 'absolute', left: hx - 125, top: hy - 125, width: 250, height: 250,
        background: 'radial-gradient(circle,#e7a56a50,transparent 64%)', opacity: pulse * 0.6 + reaction * 0.45}} />
      <Img src={staticFile('images/new-media-v2/r2/heart-sculpture.png')} style={{position: 'absolute',
        left: (gather ? hx : hx0) - hsize / 2, top: (gather ? hy : hy0) - hsize / 2, width: hsize, height: hsize,
        objectFit: 'contain', opacity: heartEntry * (1 - gather), rotate: `${e(t, 27.25, 28.65, -18, -5)}deg`}} />
      <svg width={1920} height={1080} style={{position: 'absolute', inset: 0, opacity: gather}}>
        <circle cx={hx} cy={hy} r={8} fill={C.red} stroke={C.ivory} strokeWidth={2} />
        <circle cx={hx} cy={hy} r={34 + gather * 20} fill="none" stroke={C.gold} strokeWidth={6} strokeOpacity={0.2} />
        <path d="M968 427 C1090 424 1125 309 1286 301 C1378 296 1425 354 1478 378" fill="none" stroke={C.gold} strokeWidth={7} strokeLinecap="round"
          pathLength={1} strokeDasharray={1} strokeDashoffset={1 - e(t, 36.3, 39)} opacity={e(t, 36.3, 37.3)} />
      </svg>
    </>}
  </>;
};

const Observer = ({t, left = 274, top = 430, scale = 1}: {t: number; left?: number; top?: number; scale?: number}) => <svg width={188} height={290} viewBox="0 0 188 290"
  style={{position: 'absolute', left, top, opacity: 0.55 * e(t, 0, 1.4), scale}}>
  <circle cx={93} cy={52} r={37} fill="#b9b6a2" />
  <path d="M30 268 L38 142 C46 97 144 95 153 142 L162 268Z" fill="#6e8278" />
  <path d="M49 148 L93 211 L134 148" fill="none" stroke="#d6d1b8" strokeWidth={7} opacity={0.35} />
</svg>;

const VerifyContent = ({t}: {t: number}) => {
  const local = t - 78;
  const backToCat = e(t, 78, 79.6);
  return <div style={{opacity: windowOpacity(t, 78, 90, 1)}}>
    <div style={{position: 'absolute', left: 688, top: 143, width: 544, height: 575, opacity: backToCat,
      rotate: `${e(t, 78, 81, -2, 1.5)}deg`}}>
      <Img src={staticFile('images/new-media-v2/kitten-study.png')} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
    </div>
    <svg width={1920} height={1080} style={{position: 'absolute', inset: 0, opacity: 1 - e(t, 85, 88)}}>
      <path d="M400 540 C610 250 744 640 960 470 C1220 270 1320 490 1530 348" fill="none" stroke={C.gold} strokeWidth={6} opacity={0.2} />
      <circle cx={960} cy={440} r={286} fill="none" stroke={C.gold} strokeWidth={6} strokeDasharray="12 23" opacity={0.25} />
      {Array.from({length: 12}, (_, i) => <rect key={i} x={660 + i * 51} y={749 - Math.sin(i * 0.7 + local * 0.7) * 15} width={13} height={18 + Math.sin(i * 0.7 + local * 0.7) * 9} rx={6} fill={C.ivory} opacity={windowOpacity(t, 81, 84.2, 0.8) * 0.6} />)}
    </svg>
  </div>;
};

const ReturnToCat = ({t}: {t: number}) => {
  const exit = e(t, 127.2, 128.4);
  const widen = e(t, 118.5, 123.9);
  return <div style={{opacity: windowOpacity(t, 116, 130, 1) * (1 - exit)}}>
    <Img src={staticFile('images/new-media-v2/kitten-study.png')} style={{position: 'absolute', left: 692 + widen * 80, top: 145 + widen * 45,
      width: 535 - widen * 160, height: 575 - widen * 150, objectFit: 'contain'}} />
    <svg width={1920} height={1080} style={{position: 'absolute', inset: 0, opacity: widen * (1 - e(t, 124, 126.4))}}>
      <path d="M340 567 C630 205 1264 170 1585 563 C1348 749 591 725 340 567Z" fill="none" stroke={C.gold} strokeWidth={7} opacity={0.2} />
      {Array.from({length: 24}, (_, i) => {
        const a = i / 24 * Math.PI * 2 + t * 0.012;
        return <circle key={i} cx={960 + Math.cos(a) * (510 + i % 3 * 70)} cy={428 + Math.sin(a) * (200 + i % 3 * 35)} r={i % 3 === 0 ? 7 : 4} fill={i % 3 ? C.ivory : C.gold} opacity={0.3 + i % 4 * 0.12} />;
      })}
    </svg>
    <div style={{opacity: widen * 0.5}}><Observer t={t - 118.5} left={1425} top={450} scale={0.7} /></div>
  </div>;
};

const VisualGroup = ({children, duration, soften = 0.8}: {children: ReactNode; duration: number; soften?: number}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const local = frame / fps;
  return <AbsoluteFill style={{opacity: e(local, 0, soften) * (1 - e(local, duration - 0.45, duration))}}>{children}</AbsoluteFill>;
};

/** 130-second finished film. A DOM-image path avoids the earlier CanvasImage GPU stalls. */
export const NewMediaV2Final = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  return <AbsoluteFill style={{overflow: 'hidden', backgroundColor: '#000', color: C.ivory, fontFamily: serif}}>
    <Background t={t} />
    {t < 39 && <div style={{opacity: 1 - e(t, 38.5, 39)}}><PhoneScene t={t} /></div>}
    <Sequence name="行为变成信号" from={39 * fps} durationInFrames={9 * fps}>
      <VisualGroup duration={9}><FinalDiagram mode="signals" t={t} local={t - 39} /></VisualGroup>
    </Sequence>
    <Sequence name="汇总反馈" from={48 * fps} durationInFrames={8 * fps}>
      <VisualGroup duration={8}><FinalDiagram mode="aggregate" t={t} local={t - 48} /></VisualGroup>
    </Sequence>
    <Sequence name="数据河流" from={56 * fps} durationInFrames={8 * fps}>
      <VisualGroup duration={8}><FinalDiagram mode="river" t={t} local={t - 56} /></VisualGroup>
    </Sequence>
    <Sequence name="哪里留下哪里离开" from={64 * fps} durationInFrames={7 * fps}>
      <VisualGroup duration={7}><FinalDiagram mode="questions" t={t} local={t - 64} /></VisualGroup>
    </Sequence>
    <Sequence name="寻找反复变化" from={71 * fps} durationInFrames={7 * fps}>
      <VisualGroup duration={7}><FinalDiagram mode="search" t={t} local={t - 71} /><Observer t={t - 71} /></VisualGroup>
    </Sequence>
    <VerifyContent t={t} />
    <Sequence name="换开头并留长瞬间" from={90 * fps} durationInFrames={11 * fps}>
      <VisualGroup duration={11}><FinalDiagram mode="film" t={t} local={t - 90} /></VisualGroup>
    </Sequence>
    <Sequence name="等待真实回应" from={101 * fps} durationInFrames={7 * fps}>
      <VisualGroup duration={7}><FinalDiagram mode="respond" t={t} local={t - 101} /></VisualGroup>
    </Sequence>
    <Sequence name="内容与停留闭环" from={108 * fps} durationInFrames={8 * fps}>
      <VisualGroup duration={8}><div style={{opacity: 0.38}}><FinalDiagram mode="loop" t={t} local={t - 108} /></div></VisualGroup>
    </Sequence>
    <ReturnToCat t={t} />
    {t >= 112 && t < 116 && <div style={{position: 'absolute', top: 364, left: 120, right: 120, textAlign: 'center', fontSize: 80, lineHeight: 1.5,
      color: C.ivory, letterSpacing: 3, textShadow: '0 3px 12px #000', opacity: 1 - e(t, 115.7, 116)}}>内容，影响着你的<span style={{color: C.gold}}>停留</span>。</div>}
    {timeline.captions.map(c => <Sequence key={c.unit} name={`${c.unit} ${c.text}`} from={Math.round(c.start * fps)} durationInFrames={Math.round((c.end - c.start) * fps)}>
      <Caption text={c.text} unit={c.unit} duration={c.end - c.start} />
    </Sequence>)}
    {t >= 127.2 && <div style={{position: 'absolute', top: 302, left: 952, width: 16, height: 16, borderRadius: '50%', background: C.gold,
      boxShadow: '0 0 25px #d6b77a50', opacity: e(t, 127.2, 128.5)}} />}
    <Audio name="上传BGM与原创音效全长混音" src={staticFile('audio/new-media-v2/final/final-mix.wav')} from={0} durationInFrames={130 * fps} volume={1} />
  </AbsoluteFill>;
};
