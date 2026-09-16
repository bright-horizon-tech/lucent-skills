import type { Mode } from '../types';

interface WhyUsProps {
  mode: Mode;
}

const AGENCY_POINTS = [
  {
    h: 'No shoot days, ever',
    p: 'A traditional product shoot for even one account eats budget, crew calls and two weeks of coordination. Multiply that by every client you run — our floor produces the same output with none of it.',
  },
  {
    h: 'Confidentiality is the default',
    p: 'White-label means white-label. Files carry your brand, NDAs are routine, and we never disclose that the work ran through us — your client relationship stays yours.',
  },
  {
    h: 'Volume pricing that scales',
    p: 'Per-asset rates drop as each batch grows, and a monthly content tier gives you the most subsidised per-asset cost we offer — with a priority slot in the pipeline.',
  },
  {
    h: 'Built for last-minute',
    p: '48-hour first look, 100-asset daily capacity, and a pipeline that has pulled plenty of Friday-evening panics out of the fire.',
  },
];

const BRAND_POINTS = [
  {
    h: 'A studio shoot, without the studio',
    p: 'Traditional product photography books a studio, a photographer and weeks of back-and-forth — often more than the product launch itself. We deliver the same calibre of imagery at a fraction of that cost and time.',
  },
  {
    h: 'Art direction included',
    p: 'You are not just buying pictures — a full design palette, lighting language and visual world is crafted around your product before a single frame is finalised.',
  },
  {
    h: 'Loyalty that pays you back',
    p: 'First-order discounts on your debut brief, combo pricing, and returning-brand discounts that grow every season you stay.',
  },
  {
    h: 'Small batches welcome',
    p: 'No minimum order, no tier gatekeeping. Six SKUs of honey get the same care as six hundred frames of fine jewelry.',
  },
];

export default function WhyUs({ mode }: WhyUsProps) {
  const isAgency = mode === 'agency';
  const points = isAgency ? AGENCY_POINTS : BRAND_POINTS;

  return (
    <section className="whyus" id="whyus">
      <div className="container">
        <div className="whyus-head">
          <span className="eyebrow" data-reveal>
            Why us · {isAgency ? 'the agency case' : 'the brand case'}
          </span>
          <h2 className="h-mid" data-reveal>
            {isAgency
              ? 'Your studio bill, deleted.'
              : 'The shoot your product deserves.'}
          </h2>
        </div>
        <div className="whyus-grid" data-stagger>
          {points.map((pt, i) => (
            <div className="whyus-card" key={pt.h}>
              <span className="whyus-num">0{i + 1}</span>
              <h4>{pt.h}</h4>
              <p>{pt.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
