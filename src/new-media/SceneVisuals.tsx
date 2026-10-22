import {useId} from 'react';
import {Easing, interpolate} from 'remotion';

export type SceneVisualsProps = {
  kind: string;
  frame: number;
  fps: number;
  durationInFrames: number;
  dark: boolean;
  accent?: string;
  cueFrames?: number[];
};

const INK = '#111119';
const PAPER = '#f5f0e8';
const CORAL = '#ff5d43';
const AQUA = '#70d6ce';
const smooth = Easing.bezier(0.16, 1, 0.3, 1);
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

/** Original, deterministic diagram art. The enclosing scene owns its clock and sound. */
export const SceneVisuals = ({
  kind,
  frame,
  fps,
  durationInFrames,
  dark,
  accent = CORAL,
  cueFrames = [],
}: SceneVisualsProps) => {
  const uid = useId().replace(/:/g, '');
  const foreground = dark ? PAPER : INK;
  const surface = dark ? '#20202b' : '#e9e2d7';
  const quiet = dark ? '#686877' : '#aaa398';
  const second = accent === AQUA ? CORAL : AQUA;
  const mode = ({definition: 'bridge', audience: 'compass', comment: 'conversation',
    plan: 'action', iterate: 'loop'} as Record<string, string>)[kind] ?? kind;
  const seconds = frame / fps;
  const enter = (delay = 0, length = 0.9) => interpolate(
    frame,
    [delay * fps, (delay + length) * fps],
    [0, 1],
    {...clamp, easing: smooth},
  );
  const phase = interpolate(frame, [0, Math.max(1, durationInFrames - 1)], [0, 1], clamp);
  const breathe = Math.sin(seconds * 1.25) * 4;
  const orbitPoint = (angle: number, rx: number, ry: number, cx = 450, cy = 320) => ({
    x: cx + Math.cos(angle) * rx,
    y: cy + Math.sin(angle) * ry,
  });
  const label = (x: number, y: number, text: string, color = foreground, size = 27) => (
    <text x={x} y={y} textAnchor="middle" fill={color} fontSize={size} fontWeight={650}>
      {text}
    </text>
  );
  const dot = (x: number, y: number, radius = 9, color = accent) => (
    <circle cx={x} cy={y} r={radius} fill={color} />
  );
  const dash = (d: string, progress: number, color = foreground, width = 3) => (
    <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round"
      pathLength={1} strokeDasharray={1} strokeDashoffset={1 - progress} />
  );

  let artwork;

  if (mode === 'hook') {
    const focus = enter(1.25, 1.1);
    const notices = [
      {x: 140, y: 102, w: 286, text: '今天还没更新', n: '01', angle: -7},
      {x: 510, y: 130, w: 245, text: '这个热点要追', n: '02', angle: 8},
      {x: 82, y: 306, w: 272, text: '流量怎么又跌了', n: '03', angle: -4},
      {x: 550, y: 340, w: 266, text: '再多发一条？', n: '04', angle: 6},
    ];
    artwork = <>
      <circle cx={450} cy={316} r={222} fill="none" stroke={quiet} strokeOpacity={0.18} />
      {notices.map((notice, i) => {
        const reveal = enter(i * 0.13, 0.45);
        const x = interpolate(focus, [0, 1], [notice.x, 410 - notice.w / 2]);
        const y = interpolate(focus, [0, 1], [notice.y, 290]);
        return <g key={notice.n} opacity={reveal * (1 - focus * 0.88)}
          transform={`translate(${x} ${y + (1 - reveal) * 44}) rotate(${notice.angle * (1 - focus)})`}>
          <rect width={notice.w} height={94} rx={19} fill={surface} stroke={quiet} strokeOpacity={0.38} />
          <circle cx={28} cy={31} r={7} fill={i % 2 ? second : accent} />
          <text x={46} y={39} fill={foreground} fontSize={23} fontWeight={650}>{notice.text}</text>
          <path d={`M28 65 H${notice.w - 34}`} stroke={quiet} strokeOpacity={0.4} strokeWidth={5} strokeLinecap="round" />
        </g>;
      })}
      <g opacity={enter(1.2)}>
        <circle cx={450} cy={320} r={74 + breathe} fill={accent} />
        <path d="M438 282 L470 312 L438 350" fill="none" stroke={PAPER} strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {label(450, 490, '忙碌 ≠ 有效', foreground, 36)}
      <path d="M347 514 H553" stroke={accent} strokeWidth={5} strokeLinecap="round"
        pathLength={1} strokeDasharray={1} strokeDashoffset={1 - enter(1.5)} />
    </>;
  } else if (mode === 'tension') {
    const stop = enter(2.1, 1.1);
    const runningTime = seconds < 2.1 ? seconds : 2.1 + (1 - Math.exp(-(seconds - 2.1) * 2.5)) / 2.5;
    const stride = Math.sin(runningTime * 15) * 34 * (1 - stop);
    artwork = <>
      <rect x={175} y={407} width={569} height={88} rx={44} fill={surface} stroke={quiet} strokeWidth={2} />
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const x = 195 + ((i * 104 + runningTime * 160) % 510);
        return <rect key={i} x={x} y={422} width={63} height={57} rx={9}
          fill={foreground} fillOpacity={0.08} stroke={quiet} strokeWidth={1} />;
      })}
      <g opacity={enter()}>
        <circle cx={454} cy={183} r={30} fill={foreground} />
        <path d="M454 224 L445 313" stroke={foreground} strokeWidth={18} strokeLinecap="round" />
        <path d={`M450 244 L${405 + stride} 281 L${384 + stride} 255 M450 247 L${490 - stride} 279 L${515 - stride} 250`}
          fill="none" stroke={foreground} strokeWidth={13} strokeLinecap="round" strokeLinejoin="round" />
        <path d={`M445 309 L${411 - stride} 355 L${379 - stride} 396 M447 310 L${485 + stride} 355 L${523 + stride} 396`}
          fill="none" stroke={foreground} strokeWidth={15} strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <path d="M264 268 H341 M240 306 H331 M273 345 H335" stroke={accent} strokeWidth={4} strokeLinecap="round"
        opacity={0.65 * (1 - stop)} />
      <g opacity={stop}>
        <circle cx={626} cy={209} r={57} fill={accent} />
        <text x={626} y={229} textAnchor="middle" fill={PAPER} fontSize={56} fontWeight={700}>?</text>
      </g>
      {label(450, 577, '速度很快，方向在哪里？', foreground, 29)}
    </>;
  } else if (mode === 'relief') {
    const settle = enter(0.8, 2);
    artwork = <>
      <g opacity={1 - settle} transform={`translate(0 ${settle * 65})`}>
        <rect x={271} y={103} width={358} height={128} rx={16} fill={surface} stroke={quiet} strokeWidth={2} />
        <text x={450} y={183} textAnchor="middle" fill={quiet} fontSize={36} fontWeight={650}>播放量 ≠ 你</text>
      </g>
      <g opacity={enter()}>
        <circle cx={450} cy={288} r={45} fill={foreground} />
        <path d="M365 466 Q365 355 450 355 Q535 355 535 466" fill={surface} stroke={foreground} strokeWidth={3} />
        <path d="M386 427 Q451 463 517 427" fill="none" stroke={foreground} strokeWidth={9} strokeLinecap="round" />
      </g>
      <g opacity={settle}>
        <circle cx={450} cy={432} r={30} fill={accent} fillOpacity={0.16} stroke={accent} strokeWidth={2} />
        <path d="M437 442 L450 414 L463 442 L450 436Z" fill={accent} />
      </g>
      <circle cx={690} cy={236} r={9} fill={second} opacity={settle * 0.6} />
      <circle cx={238} cy={393} r={6} fill={accent} opacity={settle * 0.4} />
      {label(450, 584, '把反馈，变成方向', foreground, 29)}
    </>;
  } else if (mode === 'bridge') {
    const travel = enter(1.2, 2.4);
    const movingX = 180 + travel * 540;
    const movingY = 355 - Math.sin(travel * Math.PI) * 166;
    artwork = <>
      <ellipse cx={450} cy={510} rx={300} ry={18} fill={foreground} opacity={0.035} />
      <path d="M180 355 Q450 22 720 355" stroke={quiet} strokeOpacity={0.24} strokeWidth={2} fill="none" />
      {dash('M180 355 Q450 22 720 355', enter(0.4, 1.6), accent, 6)}
      <path d="M180 355 H720" stroke={quiet} strokeOpacity={0.25} strokeDasharray="4 13" />
      <g opacity={enter()}>
        <circle cx={180} cy={355} r={64} fill={surface} stroke={foreground} strokeWidth={2} />
        <circle cx={180} cy={340} r={17} fill={foreground} />
        <path d="M149 385 Q180 347 211 385" fill="none" stroke={foreground} strokeWidth={7} strokeLinecap="round" />
      </g>
      <g opacity={enter(0.3)}>
        <circle cx={720} cy={355} r={64} fill={surface} stroke={foreground} strokeWidth={2} />
        <path d="M693 358 L712 377 L750 335" fill="none" stroke={foreground} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <circle cx={movingX} cy={movingY} r={26} fill={accent} />
      <circle cx={movingX} cy={movingY} r={41} fill={accent} fillOpacity={0.11} />
      {label(180, 465, '对的人')}
      {label(720, 465, '有用的价值')}
      {label(450, 121, '内容，是连接', accent, 33)}
    </>;
  } else if (mode === 'compass') {
    const radius = 179;
    const angle = interpolate(enter(0.15, 1.3), [0, 1], [-2.2, -0.73]) + Math.sin(seconds * 0.45) * 0.025;
    artwork = <>
      {[78, 140, 202].map((r, i) => <circle key={r} cx={450} cy={315} r={r}
        fill={i === 0 ? accent : 'none'} fillOpacity={i === 0 ? 0.1 : 1}
        stroke={i === 1 ? accent : quiet} strokeWidth={i === 1 ? 2 : 1}
        strokeOpacity={i === 1 ? 0.6 : 0.35} opacity={enter(i * 0.1)} />)}
      {[0, 1, 2, 3].map((i) => {
        const p = orbitPoint(i * Math.PI / 2 - Math.PI / 2, 246, 246, 450, 315);
        return <g key={i} opacity={enter(0.3 + i * 0.15)}>
          <circle cx={p.x} cy={p.y} r={34} fill={surface} />
          {label(p.x, p.y + 9, ['人群', '问题', '表达', '价值'][i], foreground, 22)}
        </g>;
      })}
      <g transform={`translate(450 315) rotate(${angle * 180 / Math.PI})`}>
        <path d={`M-35 -20 L${radius} 0 L-35 20 L-8 0 Z`} fill={accent} />
        <path d="M-35 -20 L-111 0 L-35 20 L-8 0 Z" fill={foreground} opacity={0.65} />
      </g>
      <circle cx={450} cy={315} r={13} fill={foreground} />
      <circle cx={450} cy={315} r={5} fill={dark ? INK : PAPER} />
    </>;
  } else if (mode === 'question') {
    const resolve = enter(1.3, 1);
    artwork = <>
      <g opacity={0.28}>
        <text x={110} y={145} fill={quiet} fontSize={34}>怎么选？</text>
        <text x={630} y={126} fill={quiet} fontSize={26}>为什么？</text>
        <text x={90} y={454} fill={quiet} fontSize={28}>有什么用？</text>
        <text x={636} y={470} fill={quiet} fontSize={35}>适合我吗？</text>
      </g>
      <g opacity={enter()} transform={`translate(${(1 - enter()) * 70} ${breathe})`}>
        <circle cx={425} cy={289} r={156} fill={surface} fillOpacity={0.7}
          stroke={foreground} strokeWidth={14} />
        <path d="M539 405 L652 519" stroke={foreground} strokeWidth={29} strokeLinecap="round" />
        <circle cx={425} cy={289} r={125} fill={accent} fillOpacity={0.09} />
        <text x={425} y={343} textAnchor="middle" fill={accent} fontSize={160} fontWeight={700}
          opacity={1 - resolve}>?</text>
        <g opacity={resolve}>
          <path d="M425 198 C350 198 352 278 386 306 Q403 321 401 345 H449 Q447 320 463 306 C499 275 500 198 425 198 Z"
            fill={accent} />
          <path d="M402 362 H449 M410 377 H441" stroke={foreground} strokeWidth={8} strokeLinecap="round" />
          {[0, 1, 2, 3, 4].map((i) => {
            const a = -Math.PI + i * Math.PI / 4;
            return <path key={i}
              d={`M${425 + Math.cos(a) * 111} ${259 + Math.sin(a) * 111} L${425 + Math.cos(a) * 130} ${259 + Math.sin(a) * 130}`}
              stroke={accent} strokeWidth={5} strokeLinecap="round" />;
          })}
        </g>
      </g>
      {label(405, 580, '好选题，从真问题开始', foreground, 28)}
    </>;
  } else if (mode === 'coffee') {
    artwork = <>
      <ellipse cx={450} cy={435} rx={210} ry={26} fill={foreground} opacity={0.07} />
      <g transform={`translate(0 ${breathe})`}>
        <path d="M347 217 H539 L519 399 Q450 440 369 399 Z" fill={surface} stroke={foreground} strokeWidth={4} />
        <path d="M540 243 C639 222 643 357 528 348" fill="none" stroke={foreground} strokeWidth={15} />
        <ellipse cx={442} cy={217} rx={96} ry={25} fill={dark ? '#765142' : '#b88865'} stroke={foreground} strokeWidth={4} />
        <path d="M408 292 C421 273 445 278 447 296 C451 274 480 278 486 295 C491 312 466 333 447 349 C428 332 399 312 408 292Z" fill={accent} opacity={enter(0.6)} />
        {[0, 1, 2].map((i) => <path key={i}
          d={`M${408 + i * 36} 172 C${381 + i * 36} 146 ${440 + i * 36} 122 ${412 + i * 36} 83`}
          fill="none" stroke={foreground} strokeOpacity={0.28} strokeWidth={4} strokeLinecap="round"
          style={{translate: `0px ${Math.sin(seconds * 1.5 + i) * 8}px`}} />)}
      </g>
      {['赶时间', '想坐坐'].map((word, i) => {
        const x = 274 + i * 352;
        return <g key={word} opacity={enter(0.25 + i * 0.3)}>
          <circle cx={x} cy={540} r={27} fill={i === 1 ? accent : surface} />
          {label(x, 549, `0${i + 1}`, i === 1 ? PAPER : foreground, 20)}
          {label(x, 602, word, foreground, 26)}
          {i < 1 && <path d={`M${x + 45} 540 H${x + 306}`} stroke={quiet} strokeWidth={2} />}
        </g>;
      })}
      <path d="M120 270 Q153 218 201 260" fill="none" stroke={accent} strokeWidth={3} strokeLinecap="round" opacity={enter(0.5)} />
      <path d="M690 355 Q723 303 771 345" fill="none" stroke={second} strokeWidth={3} strokeLinecap="round" opacity={enter(0.8)} />
    </>;
  } else if (mode === 'story') {
    const active = frame >= (cueFrames[2] ?? 5.6 * fps) ? 2
      : frame >= (cueFrames[1] ?? 2.8 * fps) ? 1 : 0;
    const words = ['理由', '证据', '下一步'];
    artwork = <>
      <path d="M153 345 Q450 225 747 345" fill="none" stroke={quiet} strokeOpacity={0.35} strokeWidth={2} />
      {words.map((word, i) => {
        const x = 156 + i * 242;
        const reveal = enter(0.16 + i * 0.38);
        const isActive = active === i;
        return <g key={word} opacity={reveal} transform={`translate(0 ${(1 - reveal) * 60})`}>
          <rect x={x - 54} y={181 + (isActive ? -12 : 0)} width={210} height={303} rx={19}
            fill={isActive ? accent : surface} stroke={isActive ? accent : quiet} strokeOpacity={0.4} />
          <text x={x - 26} y={229 + (isActive ? -12 : 0)} fill={isActive ? PAPER : quiet} fontSize={21}>0{i + 1}</text>
          <text x={x + 51} y={326 + (isActive ? -12 : 0)} textAnchor="middle"
            fill={isActive ? PAPER : foreground} fontSize={34} fontWeight={700}>{word}</text>
          <path d={`M${x - 13} ${388 + (isActive ? -12 : 0)} H${x + 115} M${x - 13} ${413 + (isActive ? -12 : 0)} H${x + 77}`}
            stroke={isActive ? PAPER : quiet} strokeWidth={5} strokeLinecap="round" strokeOpacity={0.4} />
        </g>;
      })}
      {label(450, 576, '让人愿意继续看下去', foreground, 28)}
    </>;
  } else if (mode === 'evidence') {
    const resolve = enter(2.4, 0.9);
    const points = [{x: 210, y: 300, word: '计时'}, {x: 450, y: 300, word: '取餐路线'}, {x: 690, y: 300, word: '预约入口'}];
    artwork = <>
      {points.map((point, i) => <g key={point.word} opacity={enter(i * 0.7) * (1 - resolve * 0.65)}
        transform={`translate(${(450 - point.x) * resolve * 0.4} ${breathe * (i - 1)})`}>
        <circle cx={point.x} cy={point.y} r={83} fill={surface} />
        {i === 0 && <g fill="none" stroke={foreground} strokeWidth={5} strokeLinecap="round">
          <circle cx={point.x} cy={point.y} r={40} />
          <path d={`M${point.x} ${point.y - 24} V${point.y} L${point.x + 16} ${point.y + 12} M${point.x - 12} ${point.y - 52} H${point.x + 12}`} />
        </g>}
        {i === 1 && <g fill="none" stroke={foreground} strokeWidth={5} strokeLinecap="round">
          <path d={`M${point.x - 39} ${point.y + 26} V${point.y - 23} H${point.x + 32} V${point.y + 19}`} />
          <path d={`M${point.x + 19} ${point.y + 6} L${point.x + 32} ${point.y + 23} L${point.x + 45} ${point.y + 6}`} />
          <circle cx={point.x - 39} cy={point.y + 34} r={7} fill={accent} stroke="none" />
        </g>}
        {i === 2 && <g>
          <rect x={point.x - 47} y={point.y - 22} width={94} height={44} rx={12} fill={accent} />
          <path d={`M${point.x - 11} ${point.y} H${point.x + 17} M${point.x + 7} ${point.y - 9} L${point.x + 18} ${point.y} L${point.x + 7} ${point.y + 9}`}
            fill="none" stroke={PAPER} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
        </g>}
        {label(point.x, 449, point.word, foreground, 26)}
      </g>)}
      <g opacity={resolve}>
        <circle cx={450} cy={300} r={93} fill={accent} />
        <path d="M408 298 L441 330 L499 271" fill="none" stroke={PAPER} strokeWidth={11} strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {label(450, 560, '把“好”变成看得见的理由', foreground, 29)}
    </>;
  } else if (mode === 'metrics') {
    const reveal = enter(0.2, 1.6);
    const isolate = enter(2.1, 0.8);
    artwork = <>
      <path d="M133 426 H777 M148 426 V135" stroke={quiet} strokeWidth={2} />
      {[0, 1, 2].map((i) => <path key={i} d={`M148 ${196 + i * 76} H777`} stroke={quiet} strokeOpacity={0.13} />)}
      {dash('M154 226 L244 190 L335 263 L432 313 L524 285 L618 351 L752 319', reveal, foreground, 5)}
      <circle cx={432} cy={313} r={48 + breathe} fill={accent} fillOpacity={0.1} stroke={accent}
        strokeWidth={2} opacity={enter(1.7)} />
      <circle cx={432} cy={313} r={8} fill={accent} opacity={enter(1.7)} />
      <path d="M432 369 V464" stroke={accent} strokeWidth={2} strokeDasharray="4 8" opacity={enter(2)} />
      <g opacity={enter(2.15)}>
        <rect x={255} y={489} width={151} height={69} rx={34} fill={surface} />
        <circle cx={292 + isolate * 70} cy={523} r={25} fill={accent} />
        <text x={323} y={595} textAnchor="middle" fill={foreground} fontSize={23}>标题</text>
        <rect x={501} y={489} width={151} height={69} rx={34} fill={surface} opacity={1 - isolate * 0.6} />
        <circle cx={538} cy={523} r={25} fill={quiet} opacity={1 - isolate * 0.6} />
        <text x={576} y={595} textAnchor="middle" fill={quiet} fontSize={23}>封面</text>
      </g>
      <text x={750} y={153} textAnchor="end" fill={quiet} fontSize={21}>示意 · 非真实数据</text>
    </>;
  } else if (mode === 'tools') {
    const untangle = enter(1.7, 1.7);
    artwork = <>
      <path d="M167 411 C299 113 604 167 448 364 C365 464 241 228 457 211 C661 195 623 443 734 360"
        fill="none" stroke={quiet} strokeOpacity={0.35 * (1 - untangle)} strokeWidth={4} strokeLinecap="round" />
      {dash('M162 410 L720 204', untangle, accent, 5)}
      <path d="M687 190 L730 200 L706 235" fill="none" stroke={accent} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={untangle} />
      <g transform={`translate(${278 + untangle * 211} ${365 - untangle * 78}) rotate(${seconds * 35})`}>
        <circle r={70} fill={surface} stroke={foreground} strokeWidth={4} />
        {[0, 1, 2, 3, 4, 5].map((i) => <path key={i}
          d={`M${Math.cos(i * Math.PI / 3) * 25} ${Math.sin(i * Math.PI / 3) * 25} L${Math.cos(i * Math.PI / 3) * 67} ${Math.sin(i * Math.PI / 3) * 67}`}
          stroke={foreground} strokeWidth={3} />)}
        <circle r={16} fill={accent} />
      </g>
      <g opacity={enter(0.4)} transform={`translate(608 ${106 + breathe}) rotate(20)`}>
        <path d="M0 0 L55 0 L38 23 L38 66 L17 66 L17 23Z" fill={second} />
      </g>
      <g opacity={enter(0.7)} transform="translate(155 157) rotate(-20)">
        <rect width={63} height={77} rx={9} fill={surface} stroke={foreground} strokeWidth={2} />
        <path d="M15 20 H47 M15 36 H42 M15 52 H33" stroke={foreground} strokeWidth={4} strokeLinecap="round" />
      </g>
      {label(450, 575, '工具放大能力，也放大偏差', foreground, 27)}
    </>;
  } else if (mode === 'distribution') {
    const nodes = [
      {x: 205, y: 130, title: '短视频', shape: 'play'},
      {x: 722, y: 168, title: '图文', shape: 'page'},
      {x: 183, y: 483, title: '直播', shape: 'live'},
      {x: 704, y: 492, title: '社群', shape: 'chat'},
    ];
    artwork = <>
      {nodes.map((node, i) => {
        const progress = enter(0.35 + i * 0.18, 1.2);
        const traveling = (seconds * 0.24 + i * 0.22) % 1;
        const x = 450 + (node.x - 450) * traveling;
        const y = 310 + (node.y - 310) * traveling;
        return <g key={node.title}>
          {dash(`M450 310 Q${(node.x + 450) / 2} ${node.y} ${node.x} ${node.y}`, progress, quiet, 2)}
          <circle cx={x} cy={y} r={6} fill={i % 2 ? second : accent} opacity={progress * 0.7} />
          <g opacity={enter(0.55 + i * 0.18)}>
            <rect x={node.x - 63} y={node.y - 59} width={126} height={118} rx={24} fill={surface} />
            {node.shape === 'play' && <g fill="none" stroke={foreground} strokeWidth={4}>
              <rect x={node.x - 25} y={node.y - 33} width={50} height={66} rx={9} />
              <path d={`M${node.x - 8} ${node.y - 15} L${node.x + 15} ${node.y} L${node.x - 8} ${node.y + 15}Z`} fill={foreground} stroke="none" />
            </g>}
            {node.shape === 'page' && <g fill="none" stroke={foreground} strokeWidth={4} strokeLinecap="round">
              <rect x={node.x - 27} y={node.y - 34} width={54} height={68} rx={5} />
              <path d={`M${node.x - 16} ${node.y + 13} H${node.x + 16} M${node.x - 16} ${node.y + 23} H${node.x + 5}`} />
              <path d={`M${node.x - 16} ${node.y + 1} L${node.x - 3} ${node.y - 14} L${node.x + 6} ${node.y - 5} L${node.x + 16} ${node.y - 18}`} />
            </g>}
            {node.shape === 'live' && <g fill="none" stroke={foreground} strokeWidth={4} strokeLinecap="round">
              <circle cx={node.x} cy={node.y} r={7} fill={accent} stroke="none" />
              <path d={`M${node.x - 15} ${node.y - 17} Q${node.x - 32} ${node.y} ${node.x - 15} ${node.y + 17} M${node.x + 15} ${node.y - 17} Q${node.x + 32} ${node.y} ${node.x + 15} ${node.y + 17}`} />
              <path d={`M${node.x - 27} ${node.y - 28} Q${node.x - 54} ${node.y} ${node.x - 27} ${node.y + 28} M${node.x + 27} ${node.y - 28} Q${node.x + 54} ${node.y} ${node.x + 27} ${node.y + 28}`} />
            </g>}
            {node.shape === 'chat' && <g fill="none" stroke={foreground} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round">
              <path d={`M${node.x - 31} ${node.y - 25} H${node.x + 31} V${node.y + 18} H${node.x - 2} L${node.x - 20} ${node.y + 34} V${node.y + 18} H${node.x - 31}Z`} />
              {[-14, 0, 14].map((dx) => <circle key={dx} cx={node.x + dx} cy={node.y - 3} r={3} fill={foreground} stroke="none" />)}
            </g>}
            {label(node.x, node.y + 102, node.title, foreground, 26)}
          </g>
        </g>;
      })}
      <circle cx={450} cy={310} r={92} fill={accent} fillOpacity={0.08} stroke={accent} strokeWidth={1} />
      <circle cx={450} cy={310} r={61} fill={accent} />
      <path d="M431 280 L476 310 L431 340 Z" fill={PAPER} />
    </>;
  } else if (mode === 'conversation') {
    const connect = enter(0.8, 1.5);
    artwork = <>
      <g opacity={enter()} transform={`translate(${(1 - enter()) * -50} ${breathe})`}>
        <path d="M126 133 H440 Q462 133 462 155 V287 Q462 309 440 309 H222 L166 354 V309 H126 Q104 309 104 287 V155 Q104 133 126 133Z" fill={surface} stroke={quiet} strokeWidth={2} />
        {label(283, 206, '你在担心什么？', foreground, 27)}
        <path d="M183 246 H383" stroke={quiet} strokeWidth={6} strokeLinecap="round" strokeOpacity={0.5} />
      </g>
      <g opacity={enter(0.55)} transform={`translate(${(1 - enter(0.55)) * 50} ${-breathe})`}>
        <path d="M464 313 H778 Q800 313 800 335 V467 Q800 489 778 489 H736 V534 L680 489 H464 Q442 489 442 467 V335 Q442 313 464 313Z" fill={accent} />
        {label(621, 387, '我听到了。', PAPER, 31)}
        <path d="M524 427 H718" stroke={PAPER} strokeWidth={6} strokeLinecap="round" strokeOpacity={0.6} />
      </g>
      {dash('M205 405 C205 554 346 556 362 447', connect, second, 4)}
      <path d="M350 457 L363 437 L375 458" fill="none" stroke={second} strokeWidth={4} strokeLinecap="round" opacity={connect} />
      {dot(205, 405, 10, second)}
      {[0, 1, 2].map((i) => <circle key={i} cx={522 + i * 37} cy={193}
        r={7 + Math.max(0, Math.sin(seconds * 2.6 - i * 0.7)) * 4}
        fill={foreground} opacity={enter(1.2 + i * 0.1) * 0.5} />)}
    </>;
  } else if (mode === 'loop') {
    const cycle = seconds * 0.3 - Math.PI / 2;
    const point = orbitPoint(cycle, 220, 220, 450, 309);
    artwork = <>
      <circle cx={450} cy={309} r={220} fill="none" stroke={quiet} strokeOpacity={0.25} strokeWidth={2} />
      {dash('M450 89 A220 220 0 1 1 259 419', enter(0.2, 1.6), accent, 5)}
      <path d="M252 398 L255 428 L283 418" fill="none" stroke={accent} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={enter(1.1)} />
      {(kind === 'iterate' ? ['尝试', '发布', '反馈', '改进'] : ['定位', '选题', '表达', '分发', '互动', '复盘']).map((word, i, words) => {
        const p = orbitPoint(-Math.PI / 2 + i * 2 * Math.PI / words.length, 220, 220, 450, 309);
        return <g key={i} opacity={enter(0.3 + i * 0.2)}>
          <circle cx={p.x} cy={p.y} r={43} fill={surface} stroke={foreground} strokeWidth={1} />
          {label(p.x, p.y + 9, word, foreground, 24)}
        </g>;
      })}
      <g opacity={enter(0.65)}>
        <path d="M355 370 H551 M365 370 V250" stroke={quiet} strokeWidth={2} />
        {dash('M372 341 L404 318 L432 332 L459 294 L485 309 L523 270', enter(0.75, 1.2), second, 4)}
        {dot(523, 270, 7, second)}
        <text x={388} y={419} fill={foreground} fontSize={23} fontWeight={650}>验证，而非猜测</text>
      </g>
      <circle cx={point.x} cy={point.y} r={10} fill={accent} />
      <circle cx={point.x} cy={point.y} r={23} fill={accent} fillOpacity={0.1} />
    </>;
  } else if (mode === 'action') {
    const stepLabels = kind === 'plan' ? ['1 类人', '3 个问题', '1 条内容']
      : ['找一个问题', '做一条内容', '收一次反馈'];
    const steps = [{x: 130, y: 403, label: stepLabels[0]}, {x: 365, y: 294, label: stepLabels[1]}, {x: 600, y: 185, label: stepLabels[2]}];
    artwork = <>
      <path d="M123 508 H340 V399 H575 V290 H811" fill="none" stroke={quiet} strokeWidth={3} strokeOpacity={0.5} />
      {steps.map((step, i) => {
        const reveal = enter(0.15 + i * 0.4, 0.8);
        return <g key={step.label} opacity={reveal}
          transform={`translate(0 ${(1 - reveal) * 42})`}>
          <rect x={step.x} y={step.y - 22} width={194} height={106} rx={15}
            fill={i === 1 ? accent : surface} stroke={i === 1 ? accent : quiet} strokeOpacity={0.4} />
          <text x={step.x + 22} y={step.y + 16} fill={i === 1 ? PAPER : accent}
            fontSize={20} fontWeight={700}>0{i + 1}</text>
          <text x={step.x + 22} y={step.y + 56} fill={i === 1 ? PAPER : foreground}
            fontSize={25} fontWeight={650}>{step.label}</text>
        </g>;
      })}
      <g opacity={enter(1.45)}>
        <path d="M698 101 L748 51 L772 75 L722 125 L690 134Z" fill={second} />
        <path d="M748 51 L772 75" stroke={foreground} strokeWidth={3} />
      </g>
      {label(452, 600, '先完成一个小循环', foreground, 28)}
    </>;
  } else {
    // 'ending' also provides a quiet visual fallback for newly authored scenes.
    const angle = -Math.PI * 0.72 + phase * Math.PI * 1.35;
    const point = orbitPoint(angle, 300, 155, 455, 316);
    artwork = <>
      <g transform="rotate(-23 455 316)" opacity={enter()}>
        <ellipse cx={455} cy={316} rx={304} ry={158} fill="none" stroke={quiet} strokeWidth={2} strokeOpacity={0.6} />
        <ellipse cx={455} cy={316} rx={224} ry={113} fill="none" stroke={quiet} strokeWidth={1} strokeOpacity={0.25} />
        <circle cx={point.x} cy={point.y} r={18} fill={second} />
        <circle cx={point.x} cy={point.y} r={34} fill={second} fillOpacity={0.1} />
      </g>
      <circle cx={455} cy={316} r={98 + breathe} fill={accent} />
      <path d="M421 316 H490 M464 286 L494 316 L464 346" fill="none" stroke={PAPER} strokeWidth={9}
        strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={221} cy={132} r={8} fill={accent} opacity={enter(0.6)} />
      <circle cx={755} cy={436} r={5} fill={foreground} opacity={enter(0.9)} />
      <path d="M683 118 H711 M697 104 V132" stroke={second} strokeWidth={3} opacity={enter(1.1)} />
      {label(455, 582, '每一次被需要，都是起点', foreground, 29)}
    </>;
  }

  return <svg viewBox="0 0 900 650" width="100%" height="100%" aria-hidden="true"
    style={{display: 'block', overflow: 'visible', fontFamily: 'NewMedia Sans, Noto Sans CJK SC, sans-serif'}}>
    <defs>
      <linearGradient id={`${uid}-hairline`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor={foreground} stopOpacity={0} />
        <stop offset="50%" stopColor={foreground} stopOpacity={0.15} />
        <stop offset="100%" stopColor={foreground} stopOpacity={0} />
      </linearGradient>
    </defs>
    <path d="M60 633 H840" stroke={`url(#${uid}-hairline)`} strokeWidth={1} />
    {artwork}
  </svg>;
};
