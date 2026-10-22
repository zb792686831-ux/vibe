import {Audio} from '@remotion/media';
import {loadFont} from '@remotion/fonts';
import {TransitionSeries} from '@remotion/transitions';
import {
  AbsoluteFill,
  Easing,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import data from './timeline.generated.json';
import {SceneVisuals} from './SceneVisuals';

void Promise.all([
  loadFont({family: 'NewMedia Sans', url: staticFile('fonts/new-media/Regular.woff2'), weight: '400'}),
  loadFont({family: 'NewMedia Sans', url: staticFile('fonts/new-media/Bold.woff2'), weight: '700'}),
]);

type SceneData = (typeof data.scenes)[number];
const PAPER = '#f5f0e8';
const INK = '#111119';
const CORAL = '#ff5d43';
const AQUA = '#70d6ce';
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const titles: Record<string, string[]> = {
  hook: ['每天更新，', '还是没人看？'],
  treadmill: ['忙着发内容。', '忘了内容帮谁。'],
  definition: ['让内容，', '连接到人。'],
  'six-loop': ['六个动作。', '一个循环。'],
  'coffee-audience': ['同一家店，', '两种需求。'],
  positioning: ['先为谁？', '解决什么？'],
  topic: ['早高峰，', '咖啡不迟到。'],
  content: ['理由。证据。', '下一步。'],
  proof: ['把证据，', '摆到眼前。'],
  distribution: ['形式，', '跟着目标走。'],
  interaction: ['问题后面，', '都有人。'],
  review: ['每次，', '只改一个变量。'],
  relief: ['播放量，', '≠ 你的价值。'],
  tools: ['先找到方向。', '再提速。'],
  start: ['今晚，', '就能开始。'],
  iterate: ['讲清一个问题。', '帮到一个人。'],
  ending: ['“刚好，', '帮到了我。”'],
};
const darkScenes = new Set([0, 1, 3, 6, 9, 11, 13, 16]);

const Chapter = ({scene}: {scene: SceneData}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const dark = darkScenes.has(scene.index);
  const color = dark ? PAPER : INK;
  const accent = scene.index % 3 === 0 ? CORAL : (dark ? AQUA : CORAL);
  const caption = scene.captions.find((item) => frame >= item.from && frame < item.to);
  const last = scene.id === 'ending';
  const relief = scene.id === 'relief';
  const lines = titles[scene.id] ?? [scene.headline];

  return (
    <AbsoluteFill style={{backgroundColor: dark ? INK : PAPER, color, fontFamily: 'NewMedia Sans, Noto Sans CJK SC, sans-serif'}}>
      <AbsoluteFill style={{
        backgroundImage: `radial-gradient(ellipse at 85% 15%, ${dark ? '#252537' : '#fffaf0'} 0%, transparent 65%)`,
        opacity: 0.85,
      }} />
      <div style={{position: 'absolute', top: 64, left: 116, right: 116, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 24, letterSpacing: 3}}>
        <span><span style={{color: accent, fontWeight: 700}}>新媒体运营</span><span style={{opacity: 0.45}}> / 入门第一课</span></span>
        <span style={{opacity: 0.5, fontVariantNumeric: 'tabular-nums'}}>{String(scene.index + 1).padStart(2, '0')} / 17</span>
      </div>

      <div style={{position: 'absolute', left: 116, top: relief ? 245 : 240, width: relief ? 1330 : 840, zIndex: 2}}>
        <div style={{fontSize: 23, letterSpacing: 4, color: accent, marginBottom: 34, opacity: interpolate(frame, [0, 0.25 * fps], [0, 1], clamp)}}>
          {scene.chapter.replace(/^\d+ /, '')}
        </div>
        <h1 style={{margin: 0, fontSize: relief ? 166 : (['iterate', 'review', 'treadmill'].includes(scene.id) ? 112 : 126), fontWeight: 700, lineHeight: 1.24, letterSpacing: -5}}>
          {lines.map((line, i) => (
            <span key={line} style={{
              display: 'block',
              color: i === lines.length - 1 ? accent : color,
              opacity: interpolate(frame, [i * 0.12 * fps, (0.45 + i * 0.12) * fps], [0, 1], clamp),
              translate: `0px ${interpolate(frame, [i * 0.12 * fps, (0.7 + i * 0.12) * fps], [38, 0], {...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1)})}px`,
            }}>{line}</span>
          ))}
        </h1>
        <div style={{marginTop: 44, maxWidth: 780, fontSize: 32, lineHeight: 1.65, opacity: interpolate(frame, [0.55 * fps, 1 * fps], [0, 0.62], clamp)}}>
          {scene.subline}
        </div>
        <div style={{marginTop: 40, height: 4, width: 74, backgroundColor: accent, opacity: 0.85}} />
      </div>

      <div style={{
        position: 'absolute', width: 950, height: 686, left: relief ? 1190 : 895, top: relief ? 290 : 150,
        opacity: relief ? 0.22 : 1,
        scale: interpolate(frame, [0, scene.durationInFrames - 1], [0.98, last ? 1.025 : 1], clamp),
      }}>
        <SceneVisuals kind={scene.visualType} frame={frame} fps={fps} durationInFrames={scene.durationInFrames} dark={dark} accent={accent} cueFrames={scene.visualCues} />
      </div>

      {caption && <div style={{position: 'absolute', left: 120, right: 120, bottom: 112, textAlign: 'center'}}>
        <span style={{display: 'inline-block', maxWidth: 1580, fontSize: 44, lineHeight: 1.6, fontWeight: 400, letterSpacing: 1.5,
          padding: '5px 26px', borderRadius: 8, backgroundColor: dark ? '#111119ec' : '#f5f0e8ed', color}}>{caption.text}</span>
      </div>}

      <div style={{position: 'absolute', bottom: 57, left: 116, right: 116, height: 2, backgroundColor: dark ? '#303039' : '#d6cfc6'}}>
        <div style={{height: '100%', backgroundColor: accent,
          width: `${(scene.index + interpolate(frame, [0, scene.durationInFrames - 1], [0, 1], clamp)) / 17 * 100}%`}} />
      </div>
      {last && <AbsoluteFill style={{backgroundColor: INK, pointerEvents: 'none', opacity: interpolate(frame, [scene.durationInFrames - 0.6 * fps, scene.durationInFrames - 1], [0, 1], clamp)}} />}
    </AbsoluteFill>
  );
};

export const NewMediaVideo = ({draftWithoutBgm}: {draftWithoutBgm: boolean}) => (
  <AbsoluteFill>
    <TransitionSeries>
      <TransitionSeries.Sequence name="01 更新困境" durationInFrames={data.scenes[0].durationInFrames}><Chapter scene={data.scenes[0]} /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence name="02 内容帮谁" durationInFrames={data.scenes[1].durationInFrames}><Chapter scene={data.scenes[1]} /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence name="03 内容连接人" durationInFrames={data.scenes[2].durationInFrames}><Chapter scene={data.scenes[2]} /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence name="04 六步循环" durationInFrames={data.scenes[3].durationInFrames}><Chapter scene={data.scenes[3]} /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence name="05 咖啡店案例" durationInFrames={data.scenes[4].durationInFrames}><Chapter scene={data.scenes[4]} /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence name="06 定位" durationInFrames={data.scenes[5].durationInFrames}><Chapter scene={data.scenes[5]} /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence name="07 选题" durationInFrames={data.scenes[6].durationInFrames}><Chapter scene={data.scenes[6]} /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence name="08 表达" durationInFrames={data.scenes[7].durationInFrames}><Chapter scene={data.scenes[7]} /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence name="09 证据" durationInFrames={data.scenes[8].durationInFrames}><Chapter scene={data.scenes[8]} /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence name="10 分发" durationInFrames={data.scenes[9].durationInFrames}><Chapter scene={data.scenes[9]} /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence name="11 互动" durationInFrames={data.scenes[10].durationInFrames}><Chapter scene={data.scenes[10]} /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence name="12 复盘" durationInFrames={data.scenes[11].durationInFrames}><Chapter scene={data.scenes[11]} /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence name="13 释压" durationInFrames={data.scenes[12].durationInFrames}><Chapter scene={data.scenes[12]} /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence name="14 工具" durationInFrames={data.scenes[13].durationInFrames}><Chapter scene={data.scenes[13]} /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence name="15 开始" durationInFrames={data.scenes[14].durationInFrames}><Chapter scene={data.scenes[14]} /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence name="16 迭代" durationInFrames={data.scenes[15].durationInFrames}><Chapter scene={data.scenes[15]} /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence name="17 收束" durationInFrames={data.scenes[16].durationInFrames}><Chapter scene={data.scenes[16]} /></TransitionSeries.Sequence>
    </TransitionSeries>
    <Audio name="旁白与原创音效" src={staticFile('audio/new-media/mix.mp3')} />
    {draftWithoutBgm && <div style={{position: 'absolute', bottom: 17, left: 116, color: '#928e87', fontFamily: 'NewMedia Sans, sans-serif', fontSize: 18, letterSpacing: 2}}>音画样片 · 参考背景音乐待接入</div>}
  </AbsoluteFill>
);
