import { useEffect, useState, useRef } from 'react';
import type { Mode } from '../types';

interface ProcessProps {
  mode: Mode;
}

const BRAND_STEPS = [
  {
    num: '01',
    title: 'Questionnaire',
    text: 'A short but deep questionnaire about your business, audience and the visual direction you want — every detail captured before anything is made.',
  },
  {
    num: '02',
    title: 'Design palette',
    text: 'We craft a complete design palette for your product — light, surface, colour, mood — so the whole set feels like one brand world.',
  },
  {
    num: '03',
    title: 'Brief & products',
    text: 'You send the brief and the products you want photographed. Everything we need now lives in one place.',
  },
  {
    num: '04',
    title: 'Your approval',
    text: 'A rough guideline of how every frame will look comes to you first. Nothing is finalised until you have signed off on the direction.',
  },
  {
    num: '05',
    title: 'Generation & delivery',
    text: 'Once approved, the rest is on us — every frame generated, colour-matched and delivered across every ratio you need.',
  },
];

const AGENCY_STEPS = [
  {
    num: '01',
    title: 'Client brief',
    text: 'Drop the brief, references and SKU list into one shared folder — the account, the ratios and the deadline included.',
  },
  {
    num: '02',
    title: 'Client sign-off',
    text: 'We package a direction preview you can confirm with your own client, so the batch is locked before production starts.',
  },
  {
    num: '03',
    title: 'Generation',
    text: 'Lighting, surface and angle sets locked across the whole batch and rendered at consistent, repeatable quality.',
  },
  {
    num: '04',
    title: 'White-label delivery',
    text: 'Files land in every ratio with your brand on them — your client never hears ours. NDAs and confidentiality are routine.',
  },
];

export default function Process({ mode }: ProcessProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [railProgress, setRailProgress] = useState(0);
  const steps = mode === 'brand' ? BRAND_STEPS : AGENCY_STEPS;

  useEffect(() => {
    const handleScroll = () => {
      if (!railRef.current) return;
      const rect = railRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.8;
      const end = windowHeight * 0.25;
      const current = rect.top;
      const p = Math.min(1, Math.max(0, (start - current) / (start - end)));
      setRailProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process-head">
          <div>
            <span className="eyebrow" data-reveal>
              {mode === 'agency' ? 'The agency pipeline' : 'The brand journey'}
            </span>
            <h2 className="h-mid" data-reveal>
              {mode === 'agency' ? (
                <>
                  Brief to white-label
                  <br />
                  delivery.
                </>
              ) : (
                <>
                  Questionnaire to
                  <br />
                  delivery.
                </>
              )}
            </h2>
          </div>
          <p className="lede" data-reveal style={{ maxWidth: '38ch' }}>
            {mode === 'agency'
              ? 'A tight, repeatable pipeline that keeps your client in the loop and our name out of it.'
              : 'You approve the direction before anything is finalised — then generation and delivery are on us.'}
          </p>
        </div>

        <div className="rail" ref={railRef}>
          <div className="rail-line">
            <i
              id="railFill"
              style={{
                transform: `scaleX(${railProgress})`,
                transition: 'transform 0.1s linear',
              }}
            />
          </div>
          <div className="steps">
            {steps.map((step, idx) => {
              const isLit = railProgress >= (idx + 0.5) / steps.length;
              return (
                <div key={step.num} className={`step ${isLit ? 'is-lit' : ''}`}>
                  <span className="step-num">{step.num}</span>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
