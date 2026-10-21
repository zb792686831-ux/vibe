import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

type SetupTestProps = {title: string};

// Synthetic environment check only. No real footage or remote assets are used.
export const SetupTest = ({title}: SetupTestProps) => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#101b28',
        color: '#eff7fc',
        fontFamily: 'Arial, sans-serif',
        padding: '100px 120px',
        justifyContent: 'space-between',
      }}
    >
      <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 28, letterSpacing: 4}}>
        <span style={{color: '#62e6b9'}}>REMOTION + FFMPEG</span>
        <span>ENVIRONMENT TEST / 001</span>
      </div>

      <div>
        <div
          style={{
            fontSize: 34,
            letterSpacing: 8,
            color: '#62e6b9',
            marginBottom: 24,
          }}
        >
          READY TO CREATE
        </div>
        <h1
          style={{
            fontSize: 122,
            letterSpacing: -5,
            margin: '0 0 32px',
            opacity: interpolate(frame, [0, 0.7 * fps], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
            translate: `${interpolate(frame, [0, 0.7 * fps], [0, -20], {
              extrapolateRight: 'clamp',
              easing: Easing.out(Easing.cubic),
            })}px 0px`,
          }}
        >
          {title}
        </h1>
        <p style={{fontSize: 48, color: '#b6c8d8', margin: 0}}>
          1920 × 1080 <span style={{color: '#62e6b9'}}> / </span> 60 FPS
          <span style={{color: '#62e6b9'}}> / </span> 16:9
        </p>
      </div>

      <div>
        <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 30, marginBottom: 24}}>
          <span>5 SECOND RENDER CHECK</span>
          <span style={{fontVariantNumeric: 'tabular-nums', color: '#62e6b9'}}>
            FRAME {String(frame + 1).padStart(3, '0')} / {durationInFrames}
          </span>
        </div>
        <div style={{height: 12, backgroundColor: '#2a3b4c', borderRadius: 6, overflow: 'hidden'}}>
          <div
            style={{
              height: '100%',
              backgroundColor: '#62e6b9',
              width: `${interpolate(frame, [0, durationInFrames - 1], [0, 100])}%`,
            }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
