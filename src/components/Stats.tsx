import { useEffect, useRef, useState } from 'react';

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countC, setCountC] = useState(0);
  const [countD, setCountD] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        setHasAnimated(true);

        const duration = 2000;
        const startTime = performance.now();

        const tick = (now: number) => {
          const elapsed = now - startTime;
          const p = Math.min(1, elapsed / duration);
          const easeP = 1 - (1 - p) * (1 - p);

          setCountA(Math.round(easeP * 1499));
          setCountB(Math.round(easeP * 48));
          setCountC(Math.round(easeP * 100));
          setCountD(Math.round(easeP * 96));
          if (p < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid" data-stagger>
          <div className="stat">
            <span className="stat-num">
              <span className="counter">
                {countA.toLocaleString()}
              </span>
              <sup>+</sup>
            </span>
            <span className="stat-label">Assets delivered</span>
          </div>
          <div className="stat">
            <span className="stat-num">
              <span className="counter">{countB}</span>
              <sup>h</sup>
            </span>
            <span className="stat-label">Average first look</span>
          </div>
          <div className="stat">
            <span className="stat-num">
              <span className="counter">{countC}</span>
              <sup>%</sup>
            </span>
            <span className="stat-label">White-label delivery</span>
          </div>
          <div className="stat">
            <span className="stat-num">
              <span className="counter">{countD}</span>
              <sup>%</sup>
            </span>
            <span className="stat-label">First-round approval</span>
          </div>
        </div>
      </div>
    </section>
  );
}
