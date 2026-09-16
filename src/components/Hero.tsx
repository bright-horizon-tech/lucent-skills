import React, { useEffect, useRef } from 'react';
import { HERO } from '../assets';
import { smoothScrollTo } from '../scroll';

const LEFT = [
  { item: HERO.left1, cls: 'img-left-1' },
  { item: HERO.left2, cls: 'img-left-2' },
  { item: HERO.left3, cls: 'img-left-3' },
  { item: HERO.left4, cls: 'img-left-4' },
];

const RIGHT = [
  { item: HERO.right1, cls: 'img-right-1' },
  { item: HERO.right2, cls: 'img-right-2' },
  { item: HERO.right3, cls: 'img-right-3' },
  { item: HERO.right4, cls: 'img-right-4' },
];

/**
 * Layered waves on the right side of the hero. Each boundary is a sum of two
 * travelling sine components drawn against the element's real pixel size, so
 * the amplitude scales with the viewport and never elongates on small screens.
 */
function useTravelingWaves(
  svgRef: React.RefObject<SVGSVGElement | null>,
  baseRef: React.RefObject<SVGPathElement | null>,
  accentRef: React.RefObject<SVGPathElement | null>
) {
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    let W = 0;
    let H = 0;
    let raf = 0;

    const resize = () => {
      W = svg.clientWidth;
      H = svg.clientHeight;
      svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    };
    resize();
    window.addEventListener('resize', resize);

    const wavePath = (t: number) => {
      const steps = 48;
      const baseX = (y: number) =>
        W * 0.6 +
        W * 0.05 * Math.sin((y / H) * 6.4 + t * 0.85) +
        W * 0.022 * Math.sin((y / H) * 11 - t * 0.55);
      const accentX = (y: number) =>
        W * 0.74 +
        W * 0.055 * Math.sin((y / H) * 5 + t * -0.65 + 2.1) +
        W * 0.024 * Math.sin((y / H) * 9.5 + t * 0.95 + 1.2);

      let dBase = '';
      let dAccent = '';
      for (let i = 0; i <= steps; i++) {
        const y = (i / steps) * H;
        dBase += (i === 0 ? 'M' : 'L') + baseX(y).toFixed(1) + ',' + y.toFixed(1);
        dAccent += (i === 0 ? 'M' : 'L') + accentX(y).toFixed(1) + ',' + y.toFixed(1);
      }
      return [dBase + `L${W},${H} L${W},0 Z`, dAccent + `L${W},${H} L${W},0 Z`];
    };

    const draw = (t: number) => {
      const [dBase, dAccent] = wavePath(t);
      baseRef.current?.setAttribute('d', dBase);
      accentRef.current?.setAttribute('d', dAccent);
    };

    draw(0); // static frame for reduced-motion users

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      const t0 = performance.now();
      const tick = (now: number) => {
        raf = requestAnimationFrame(tick);
        if (window.scrollY > window.innerHeight * 1.4) return; // hero off-screen
        draw((now - t0) / 1000);
      };
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [svgRef, baseRef, accentRef]);
}

export default function Hero() {
  const leftCollageRef = useRef<HTMLDivElement>(null);
  const rightCollageRef = useRef<HTMLDivElement>(null);
  const glassCardRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const baseRef = useRef<SVGPathElement>(null);
  const accentRef = useRef<SVGPathElement>(null);

  useTravelingWaves(svgRef, baseRef, accentRef);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;

      if (leftCollageRef.current) {
        leftCollageRef.current.style.transform = `translate(${nx * -30}px, ${ny * -20}px)`;
      }
      if (rightCollageRef.current) {
        rightCollageRef.current.style.transform = `translate(${nx * 30}px, ${ny * 20}px)`;
      }
      if (glassCardRef.current) {
        glassCardRef.current.style.transform = `translate(${nx * 14}px, ${ny * 10}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" aria-hidden="true">
        <svg ref={svgRef} preserveAspectRatio="none">
          <path ref={baseRef} fill="#5C703F" />
          <path ref={accentRef} fill="var(--accent)" opacity="0.22" />
        </svg>
      </div>

      <div className="container">
        <div className="hero-main">
          {/* LEFT COLLAGE */}
          <div
            className="collage collage-left"
            ref={leftCollageRef}
            style={{ transition: 'transform 0.4s ease-out' }}
          >
            {LEFT.map(({ item, cls }) => (
              <div
                className={`img-wrapper ${cls}`}
                key={cls}
                style={{ aspectRatio: `${item.w} / ${item.h}` }}
              >
                <img src={item.src} alt={item.title} />
              </div>
            ))}
          </div>

          {/* GLASS CARD */}
          <div
            className="hero-glass-card"
            id="glassCard"
            ref={glassCardRef}
            style={{ transition: 'transform 0.4s ease-out' }}
          >
            <h1>
              LUCENT
              <br />
              STILLS
            </h1>
            <div className="subtitle">
              PRODUCT VISUALS
              <br />
              WITHOUT THE SHOOT.
            </div>
            <p>
              High-grade, production-level product visuals built on next-generation
              imaging technology — no studio, no crew, no scheduling.
            </p>
            <div className="hero-buttons">
              <button
                type="button"
                className="btn btn-solid magnetic"
                onClick={() => smoothScrollTo('#work')}
              >
                View the work
              </button>
            </div>
          </div>

          {/* RIGHT COLLAGE */}
          <div
            className="collage collage-right"
            ref={rightCollageRef}
            style={{ transition: 'transform 0.4s ease-out' }}
          >
            {RIGHT.map(({ item, cls }) => (
              <div
                className={`img-wrapper ${cls}`}
                key={cls}
                style={{ aspectRatio: `${item.w} / ${item.h}` }}
              >
                <img src={item.src} alt={item.title} />
              </div>
            ))}
          </div>
        </div>

        <div className="hint">
          <span>Scroll to explore</span>
          <div className="hint-line" />
        </div>
      </div>
    </section>
  );
}
