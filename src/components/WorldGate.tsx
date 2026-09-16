import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import type { Mode } from '../types';
import { WORLDS } from '../assets';

interface WorldGateProps {
  visible: boolean;
  leaving: boolean;
  mode: Mode;
  onChoose: (mode: Mode) => void;
}

export default function WorldGate({ visible, leaving, mode, onChoose }: WorldGateProps) {
  const headRef = useRef<HTMLDivElement>(null);
  const agencyRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLElement>(null);

  // Cards slide in from opposite sides the moment the gate appears
  useEffect(() => {
    if (!visible) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { autoAlpha: 0, y: 26 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 }
      );
      gsap.fromTo(
        agencyRef.current,
        { autoAlpha: 0, x: -90, rotation: -2 },
        { autoAlpha: 1, x: 0, rotation: 0, duration: 0.85, ease: 'power3.out', delay: 0.25 }
      );
      gsap.fromTo(
        brandRef.current,
        { autoAlpha: 0, x: 90, rotation: 2 },
        { autoAlpha: 1, x: 0, rotation: 0, duration: 0.85, ease: 'power3.out', delay: 0.4 }
      );
    });

    return () => ctx.revert();
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={`world-gate ${leaving ? 'is-leaving' : ''}`} aria-label="Choose your world">
      <div className="gate-inner">
        <div className="gate-head" ref={headRef}>
          <div className="gate-brand">
            <span className="gate-brand-mark" aria-hidden="true" />
            <span className="gate-brand-name">Lucent Stills</span>
            <span className="gate-brand-sub">Visual Production Studio</span>
          </div>
          <span className="eyebrow gate-eyebrow">Before the shutter lifts</span>
          <h2>One studio.
            <br />
            Two ways in.</h2>
          <p>
            Tell us who we are producing for — the whole site, its pricing
            routes and its pipeline are tuned to your answer. You can always
            switch later from the header.
          </p>
        </div>

        <div className="gate-grid">
          <article
            ref={agencyRef}
            className={`world-card ${mode === 'agency' ? 'is-active' : ''}`}
            onClick={() => onChoose('agency')}
          >
            <div className="world-media">
              <img src={WORLDS.agency.src} alt={WORLDS.agency.title} />
              <span className="world-tag">World 01 · The Agency Floor</span>
            </div>
            <div className="world-body">
              <h3>For Agencies</h3>
              <p className="world-pitch">
                Your clients. Our production floor. Everything stays strictly
                under your brand — no Lucent mark, no disclosure, no trace.
              </p>
              <ul className="world-feats">
                <li>White-label &amp; NDA-ready</li>
                <li>Volume discounts</li>
                <li>Monthly tiers</li>
                <li>48h first look</li>
              </ul>
              <span className="world-enter">
                Enter the agency world <span>→</span>
              </span>
            </div>
          </article>

          <article
            ref={brandRef}
            className={`world-card ${mode === 'brand' ? 'is-active' : ''}`}
            onClick={() => onChoose('brand')}
          >
            <div className="world-media">
              <img src={WORLDS.brand.src} alt={WORLDS.brand.title} />
              <span className="world-tag">World 02 · The Brand Atelier</span>
            </div>
            <div className="world-body">
              <h3>For Brands</h3>
              <p className="world-pitch">
                Your product, art-directed into a complete visual world —
                palette first, your approval, then photography-grade imagery.
              </p>
              <ul className="world-feats">
                <li>Art direction included</li>
                <li>No minimum batch</li>
                <li>Seasonal packs</li>
                <li>Loyalty discounts</li>
              </ul>
              <span className="world-enter">
                Enter the brand world <span>→</span>
              </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
