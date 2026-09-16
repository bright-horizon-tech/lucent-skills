import { useEffect, useState } from 'react';

interface PreloaderProps {
  onFinish: () => void;
}

export default function Preloader({ onFinish }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Fill the progress bar over 1 second
    const startTime = performance.now();
    const duration = 900;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const p = Math.min(1, elapsed / duration);
      setProgress(p);

      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        // Fade out preloader elements
        setFading(true);
        setTimeout(() => {
          onFinish();
          setTimeout(() => {
            setHidden(true);
          }, 300);
        }, 400);
      }
    };

    const animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [onFinish]);

  if (hidden) return null;

  return (
    <div
      className="preloader"
      id="preloader"
      aria-hidden="true"
      style={{
        opacity: fading ? 0 : 1,
        transform: fading ? 'translateY(-16px)' : 'none',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}
    >
      <div className="pre-mark" />
      <div className="pre-logo">Lucent Stills</div>
      <div className="pre-sub">Visual Production Studio</div>
      <div className="pre-bar">
        <i
          id="preBar"
          style={{
            transform: `scaleX(${progress})`,
            transition: 'transform 0.05s linear',
          }}
        />
      </div>
    </div>
  );
}
