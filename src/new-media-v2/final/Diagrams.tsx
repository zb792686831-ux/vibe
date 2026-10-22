import {useId} from 'react';
import type {CSSProperties, ReactNode} from 'react';
import {Easing, Img, interpolate, staticFile} from 'remotion';

export type FinalDiagramProps = {
  mode: 'signals' | 'aggregate' | 'river' | 'questions' | 'search' | 'film' | 'respond' | 'loop';
  t: number;
  local: number;
};

const GOLD = '#d0b77d';
const PAPER = '#ebe4d5';
const MINT = '#b8d7c8';
const RED = '#ba5745';
const SERIF = 'NewMedia Final Serif, serif';
const SANS = 'NewMedia Final Sans, sans-serif';
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const soft = Easing.bezier(0.2, 0.72, 0.22, 1);
const progress = (time: number, from: number, to: number) =>
  interpolate(time, [from, to], [0, 1], {...clamp, easing: soft});
type Point = {x: number; y: number};
const cubicBezier = (p: number, a: Point, b: Point, c: Point, d: Point): Point => {
  const u = 1 - p;
  return {x: u ** 3 * a.x + 3 * u * u * p * b.x + 3 * u * p * p * c.x + p ** 3 * d.x,
    y: u ** 3 * a.y + 3 * u * u * p * b.y + 3 * u * p * p * c.y + p ** 3 * d.y};
};
const pathDraw = (d: string, p: number, color = GOLD, width = 7, opacity = 1) =>
  <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round"
    strokeOpacity={opacity} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} />;
const word = (x: number, y: number, text: string, color = PAPER, size = 38) =>
  <text x={x} y={y} textAnchor="middle" fill={color} fontFamily={SERIF} fontSize={size} fontWeight={400}>{text}</text>;

const CatFrame = ({left, top, width, height, close = false, style = {}}: {
  left: number; top: number; width: number; height: number; close?: boolean; style?: CSSProperties;
}) => <div style={{position: 'absolute', left, top, width, height, padding: 10, boxSizing: 'border-box',
  background: 'linear-gradient(132deg, #e3d7b8, #a48e64 45%, #ded3b5)',
  borderRadius: 9, boxShadow: '0px 12px 22px #00000050', ...style}}>
  <div style={{position: 'absolute', inset: 9, overflow: 'hidden', borderRadius: 3,
    background: 'radial-gradient(ellipse at 48% 38%, #4c4939, #252a25 73%)'}}>
    <Img src={staticFile('images/new-media-v2/kitten-study.png')} style={{position: 'absolute',
      inset: close ? '-30% -25% auto' : '4% 0 auto', width: close ? '150%' : '100%',
      height: close ? '150%' : '96%', objectFit: 'contain'}} />
  </div>
</div>;

/** All coordinates reserve y>=800 for the main sequence's reading area. */
export const FinalDiagram = ({mode, t, local}: FinalDiagramProps) => {
  const id = `final-${mode}-${useId().replace(/:/g, '')}`;
  const enter = progress(local, 0, 1.35);
  const pearl = `url(#${id}-pearl)`;
  const label = (x: number, y: number, text: string, color = PAPER) => word(x, y, text, color);
  let art: ReactNode;
  let objects: ReactNode = null;

  const river = (alpha = 1, highlight = true) => <g opacity={alpha}>
    {Array.from({length: 7}, (_, i) => {
      const offset = (i - 3) * 27;
      const a = {x: 220, y: 510 + offset};
      const b = {x: 600, y: 310 + offset};
      const c = {x: 1020, y: 660 + offset};
      const d = {x: 1690, y: 340 + offset * 0.4};
      return <g key={i}>
        {pathDraw(`M${a.x} ${a.y} C${b.x} ${b.y} ${c.x} ${c.y} ${d.x} ${d.y}`,
          progress(local, 0.1 + i * 0.1, 1.6 + i * 0.1), i === 3 ? GOLD : PAPER, i === 3 ? 8 : 4,
          i === 3 ? 0.76 : 0.12)}
        {Array.from({length: 14}, (_, j) => {
          const phase = (j / 14 + t * 0.013 + i * 0.027) % 1;
          const p = cubicBezier(phase, a, b, c, d);
          const fade = Math.sin(phase * Math.PI);
          return <circle key={j} cx={p.x} cy={p.y} r={2.8 + (j + i * 2) % 4 * 0.65}
            fill={pearl} opacity={fade * (i === 3 ? 0.9 : 0.48)} />;
        })}
      </g>;
    })}
    {highlight && pathDraw('M260 570 C560 472 700 566 904 462 C1116 352 1306 315 1656 372',
      progress(local, 2.4, 5.4), MINT, 8, 0.82)}
  </g>;

  if (mode === 'signals') {
    const origins = [{x: 410, y: 244}, {x: 410, y: 430}, {x: 410, y: 616}];
    art = <>
      {origins.map((origin, i) => {
        const a = {x: origin.x + 100, y: origin.y};
        const b = {x: 760, y: origin.y - 35};
        const c = {x: 842, y: 430};
        const d = {x: 1040, y: 430};
        return <g key={i} opacity={progress(local, i * 0.16, 1.2 + i * 0.16)}>
          {pathDraw(`M${a.x} ${a.y} C${b.x} ${b.y} ${c.x} ${c.y} ${d.x} ${d.y}`,
            progress(local, 1.1 + i * 0.2, 3.2 + i * 0.2), i === 2 ? RED : GOLD, 7, 0.7)}
          {Array.from({length: 5}, (_, j) => {
            const phase = (j / 5 + t * 0.025 + i * 0.11) % 1;
            const p = cubicBezier(phase, a, b, c, d);
            return <circle key={j} cx={p.x} cy={p.y} r={5} fill={i === 2 ? RED : pearl}
              opacity={Math.sin(phase * Math.PI) * progress(local, 1.5, 2.9)} />;
          })}
          {i === 0 && <g stroke={PAPER} strokeWidth={6} fill="none" strokeLinecap="round">
            <circle cx={origin.x} cy={origin.y} r={43} />
            <path d={`M${origin.x - 12} ${origin.y - 58} H${origin.x + 12} M${origin.x} ${origin.y - 26} V${origin.y} L${origin.x + 19} ${origin.y + 11}`} />
          </g>}
          {i === 1 && <g fill="none" stroke={PAPER} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round">
            <path d={`M${origin.x + 37} ${origin.y + 14} A42 42 0 1 1 ${origin.x + 27} ${origin.y - 32}`} />
            <path d={`M${origin.x + 4} ${origin.y - 33} L${origin.x + 29} ${origin.y - 30} L${origin.x + 28} ${origin.y - 55}`} />
          </g>}
          {label(origin.x - 160, origin.y + 13, ['停留', '重看', '点赞'][i])}
        </g>;
      })}
      {Array.from({length: 3}, (_, i) => {
        const end = {x: 1490 + i % 2 * 70, y: 225 + i * 205};
        return <g key={i}>
          {pathDraw(`M1040 430 C1200 430 1280 ${end.y} ${end.x} ${end.y}`,
            progress(local, 2.3 + i * 0.25, 4.2 + i * 0.25), i === 1 ? MINT : GOLD, 7, 0.65)}
          <circle cx={end.x} cy={end.y} r={14} fill={pearl} opacity={progress(local, 3.9, 5.2)} />
        </g>;
      })}
      <circle cx={1040} cy={430} r={26} fill={pearl} opacity={progress(local, 1.5, 2.7)} />
      <circle cx={1040} cy={430} r={53} fill={`url(#${id}-light)`}
        opacity={Math.max(0, 1 - Math.abs(local - 4.4) / 0.65) * 0.5} />
      {Array.from({length: 16}, (_, i) => <circle key={i}
        cx={1410 + Math.cos(i * 2.4) * (55 + i % 4 * 14)}
        cy={430 + Math.sin(i * 2.4) * (55 + i % 4 * 14)} r={3 + i % 3}
        fill={PAPER} opacity={0.15 + i % 4 * 0.09} />)}
    </>;
    objects = <Img src={staticFile('images/new-media-v2/r2/heart-sculpture.png')}
      style={{position: 'absolute', left: 365, top: 577, width: 90, height: 78, objectFit: 'contain', opacity: enter}} />;
  } else if (mode === 'aggregate') {
    const merge = progress(local, 1.2, 4.6);
    const bars = [{y: 275, width: 420, text: '5秒'}, {y: 440, width: 205, text: '2秒'}, {y: 605, width: 655, text: '看到最后'}];
    art = <>
      <path d="M790 154 Q825 430 790 698" fill="none" stroke={PAPER} strokeWidth={8} strokeOpacity={0.12} />
      {bars.map((bar, i) => <g key={bar.text} opacity={progress(local, 1.2 + i * 0.23, 2.8 + i * 0.23)}>
        {pathDraw(`M878 ${bar.y} H${878 + bar.width}`, progress(local, 2.1 + i * 0.2, 4.8 + i * 0.2), i === 1 ? MINT : GOLD, 8, 0.78)}
        {label(1650, bar.y + 14, bar.text, i === 1 ? MINT : PAPER)}
      </g>)}
      {Array.from({length: 63}, (_, i) => {
        const bar = bars[i % 3];
        const a = {x: 340 + (i * 89) % 340, y: 190 + (i * 67) % 470};
        const d = {x: 880 + ((i * 37) % 100) / 100 * bar.width, y: bar.y};
        const p = cubicBezier(merge, a, {x: 755, y: a.y - 65}, {x: 790, y: bar.y + 50}, d);
        return <circle key={i} cx={p.x} cy={p.y} r={3.2 + i % 3 * 0.9}
          fill={i % 3 === 1 ? MINT : pearl} opacity={0.34 + i % 4 * 0.15} />;
      })}
    </>;
  } else if (mode === 'river') {
    art = river();
  } else if (mode === 'questions') {
    const move = progress(local, 3.3, 4.9);
    const center = cubicBezier(move, {x: 835, y: 472}, {x: 985, y: 254}, {x: 1245, y: 300}, {x: 1365, y: 386});
    art = <>
      {river(0.65)}
      <circle cx={center.x} cy={center.y} r={84} fill="none" stroke={move < 0.5 ? GOLD : MINT} strokeWidth={7} opacity={progress(local, 0.65, 1.95) * 0.9} />
      <circle cx={center.x} cy={center.y} r={11} fill={move < 0.5 ? GOLD : MINT} opacity={progress(local, 0.9, 2.2)} />
    </>;
  } else if (mode === 'search') {
    const travel = progress(local, 1.25, 5.5);
    const lens = cubicBezier(travel, {x: 642, y: 430}, {x: 785, y: 284}, {x: 1070, y: 572}, {x: 1310, y: 430});
    art = <>
      {river(0.25, false)}
      {[0, 1, 2].map((i) => <g key={i} opacity={progress(local, 0.2 + i * 0.25, 1.7 + i * 0.25)}>
        {pathDraw(`M${526 + i * 315} 464 C${556 + i * 315} 450 ${565 + i * 315} 364 ${610 + i * 315} 375 C${656 + i * 315} 385 ${642 + i * 315} 445 ${703 + i * 315} 429`, 1,
          i === 1 ? MINT : GOLD, 8, 0.85)}
        <circle cx={610 + i * 315} cy={375} r={7} fill={pearl} />
      </g>)}
      <circle cx={lens.x} cy={lens.y} r={109} fill={`url(#${id}-light)`} fillOpacity={0.12}
        stroke={PAPER} strokeWidth={7} strokeOpacity={0.75} />
      <path d={`M${lens.x + 78} ${lens.y + 77} L${lens.x + 136} ${lens.y + 136}`}
        stroke={PAPER} strokeWidth={13} strokeLinecap="round" strokeOpacity={0.75} />
    </>;
  } else if (mode === 'film') {
    const change = progress(local, 2.1, 3.55);
    const stretch = progress(local, 6.0, 8.3);
    const replace = cubicBezier(change, {x: 270, y: 242}, {x: 240, y: 105}, {x: 390, y: 145}, {x: 280, y: 242});
    const outerWidth = 1280 + stretch * 180;
    art = <>
      {pathDraw('M305 715 H1610', progress(local, 0.4, 2), GOLD, 6, 0.4)}
      <path d={`M${520 + stretch * 490} 697 V732`} stroke={MINT} strokeWidth={7} strokeLinecap="round" />
    </>;
    objects = <>
      <div style={{position: 'absolute', left: 230, top: 190, width: outerWidth, height: 482,
        borderRadius: 10, background: 'linear-gradient(180deg, #34342b, #161b18 14%, #111713 83%, #38372b)',
        border: '5px solid #c9ae7370', boxSizing: 'border-box', boxShadow: '0px 14px 25px #00000055'}}>
        {Array.from({length: 19}, (_, i) => <div key={i}>
          <div style={{position: 'absolute', left: 26 + i * (outerWidth - 75) / 18, top: 14,
            width: 20, height: 17, borderRadius: 3, backgroundColor: '#d6ccb0'}} />
          <div style={{position: 'absolute', left: 26 + i * (outerWidth - 75) / 18, bottom: 14,
            width: 20, height: 17, borderRadius: 3, backgroundColor: '#d6ccb0'}} />
        </div>)}
      </div>
      <CatFrame left={270} top={242} width={340} height={378} style={{opacity: 1 - change}} />
      <CatFrame left={replace.x} top={replace.y} width={340} height={378} close
        style={{opacity: change, rotate: `${(1 - change) * -5}deg`}} />
      <CatFrame left={650} top={242} width={340} height={378} />
      <CatFrame left={1030} top={242} width={340 + stretch * 180} height={378} close />
    </>;
  } else if (mode === 'respond' || mode === 'loop') {
    const closed = mode === 'loop';
    const outbound = progress(local, 0.75, closed ? 2.5 : 2.75);
    const returning = progress(local, closed ? 2.9 : 3.15, closed ? 5.25 : 5.7);
    const a = {x: 750, y: 369};
    const b = {x: 875, y: 140};
    const c = {x: 1300, y: 150};
    const d = {x: 1435, y: 380};
    const backA = {x: 1435, y: 473};
    const backB = {x: 1334, y: 705};
    const backC = {x: 920, y: 695};
    const backD = {x: 750, y: 485};
    art = <>
      {pathDraw('M750 369 C875 140 1300 150 1435 380', outbound, GOLD, 8, 0.85)}
      {pathDraw('M1435 473 C1334 705 920 695 750 485', returning, MINT, 8, 0.85)}
      <path d="M1410 365 L1437 385 L1444 353" fill="none" stroke={GOLD} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" opacity={outbound} />
      <path d="M752 511 L745 481 L777 483" fill="none" stroke={MINT} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" opacity={returning} />
      {Array.from({length: closed ? 13 : 8}, (_, i) => {
        const phase = (i / (closed ? 13 : 8) + t * 0.026) % 1;
        const p = cubicBezier(phase, a, b, c, d);
        return <circle key={`out-${i}`} cx={p.x} cy={p.y} r={4 + i % 3} fill={pearl}
          opacity={outbound * Math.sin(phase * Math.PI) * 0.85} />;
      })}
      {Array.from({length: closed ? 13 : 11}, (_, i) => {
        const phase = (i / (closed ? 13 : 11) + t * 0.024) % 1;
        const p = cubicBezier(phase, backA, backB, backC, backD);
        return <circle key={`back-${i}`} cx={p.x} cy={p.y} r={4 + i % 3} fill={MINT}
          opacity={returning * Math.sin(phase * Math.PI) * 0.8 * progress(local, 3.3 + i * 0.06, 4.7 + i * 0.06)} />;
      })}
      {Array.from({length: 17}, (_, i) => {
        const angle = i * 2.4;
        const radius = 21 + i % 5 * 16;
        return <circle key={i} cx={1447 + Math.cos(angle) * radius} cy={425 + Math.sin(angle) * radius}
          r={4 + i % 3} fill={i % 3 ? pearl : MINT} opacity={progress(local, 2.0 + i * 0.03, 3.3 + i * 0.03) * 0.65} />;
      })}
      {!closed && label(610, 664, '内容')}
      {!closed && label(1440, 606, '反馈')}
      {closed && pathDraw('M750 485 C694 472 691 405 750 369 M1435 380 C1487 402 1487 450 1435 473',
        progress(local, 5.25, 6.6), GOLD, 7, 0.72)}
      {closed && <circle cx={753} cy={483} r={42} fill={`url(#${id}-light)`}
        opacity={Math.max(0, 1 - Math.abs(local - 5.3) / 0.7) * 0.45} />}
    </>;
    objects = closed ? null : <CatFrame left={460} top={270} width={300} height={322} />;
  }

  return <div style={{position: 'absolute', inset: 0, pointerEvents: 'none', opacity: enter,
    translate: `0px ${interpolate(enter, [0, 1], [20, 0])}px`}}>
    <svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
      <defs>
        <radialGradient id={`${id}-pearl`} cx="32%" cy="28%"><stop offset="0%" stopColor="#fff4db" /><stop offset="40%" stopColor={GOLD} /><stop offset="100%" stopColor="#806e44" /></radialGradient>
        <radialGradient id={`${id}-light`}><stop offset="0%" stopColor="#e8ca8b" stopOpacity={0.8} /><stop offset="40%" stopColor="#d2b36d" stopOpacity={0.22} /><stop offset="100%" stopColor="#d2b36d" stopOpacity={0} /></radialGradient>
      </defs>
      {mode === 'loop' ? <g transform="translate(-352 -50) scale(1.2)">{art}</g> : art}
      {mode === 'signals' && <text x={410} y={279} textAnchor="middle" fontFamily={SANS} fontSize={20} fill={PAPER}>05s</text>}
    </svg>
    {objects}
  </div>;
};
