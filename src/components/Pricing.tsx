import type { Mode } from '../types';
import { WA_ICON, waLink } from '../whatsapp';

interface PricingProps {
  mode: Mode;
  onContact: () => void;
}

const AGENCY_TIERS = [
  { tier: 'Tier 1 — Batch', range: '10–24 assets', inr: '₹250 / asset', usd: '$15 / asset' },
  { tier: 'Tier 2 — Scale', range: '25–49 assets', inr: '₹200 / asset', usd: '$12 / asset' },
  { tier: 'Tier 3 — Floor', range: '50+ assets', inr: '₹150 / asset', usd: '$10 / asset' },
];

const RETAINERS = [
  {
    tier: 'Growth Agency Tier',
    range: 'Up to 75 assets across any client accounts',
    inr: '₹15,000 / mo',
    usd: '$350 / mo',
  },
  {
    tier: 'Scale Agency Tier',
    range: 'Up to 180 assets + priority 24h queue',
    inr: '₹30,000 / mo',
    usd: '$750 / mo',
  },
];

const BRAND_PACKS = [
  {
    name: 'Starter Pack',
    tag: 'Start here',
    price: '₹999',
    usd: '$49',
    items: [
      '3 campaign assets for 1 SKU',
      '1 studio hero + 1 lifestyle scene + 1 close-up',
      'The low-risk first brief — no commitment beyond it',
    ],
  },
  {
    name: 'Product Launch Pack',
    price: '₹3,499',
    usd: '$149',
    items: [
      'Up to 3 SKUs',
      '10 high-res campaign assets',
      '1 social carousel included',
    ],
  },
  {
    name: 'Full Catalogue Refresh',
    price: '₹8,999',
    usd: '$349',
    items: [
      'Up to 10 SKUs',
      '25 campaign assets across 1:1, 9:16 & 4:5',
      '2 social carousels included',
    ],
  },
];

const COMPARE = [
  { f: 'Sales focus', b: 'Campaign-ready bundles, SKU focused', a: 'Raw volume brackets & capacity' },
  { f: 'Turnaround', b: 'Standard 48 hours', a: '24–48 hours (priority queue)' },
  { f: 'Revisions', b: '2 rounds included', a: 'Self-managed / 1 fast sweep' },
  { f: 'Delivery', b: 'Standard files — yours to keep, reuse and rework anytime', a: 'Standard files — yours to keep, reuse and rework anytime' },
];

export default function Pricing({ mode, onContact }: PricingProps) {
  const isAgency = mode === 'agency';

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-head">
          <span className="eyebrow" data-reveal>
            Pricing · {isAgency ? 'for agencies' : 'for brands'}
          </span>
          <h2 className="h-display" data-reveal>
            Prices, upfront.
            <br />
            <span className="accent-text">No guesswork.</span>
          </h2>
          <p className="lede" data-reveal>
            {isAgency
              ? 'Volume work should earn volume rates — and you should see the brackets before the first brief. Pick per-asset batches or a flat monthly retainer; the rates below are the rates.'
              : 'You should know what you are getting before you send anything. Pick a pack, see the deliverables, see the price — the Starter Pack is built to be the easiest yes in the room.'}
          </p>
        </div>

        {isAgency ? (
          <div className="pricing-routes">
            <article className="p-route" data-stagger>
              <span className="p-route-num">Route · 01 — Per-asset volume brackets</span>
              <h3>Wholesale rates that drop as you scale</h3>
              <p>
                The route for agencies with fluctuating output. Each brief is
                billed per delivered asset, and the rate steps down as the
                batch grows.
              </p>
              <div className="price-rows">
                {AGENCY_TIERS.map((t) => (
                  <div className="price-row" key={t.tier}>
                    <h5>
                      {t.tier}
                      <span>{t.range}</span>
                    </h5>
                    <div className="price-val">
                      {t.inr}
                      <span>{t.usd}</span>
                    </div>
                  </div>
                ))}
                <p className="price-note">Minimum order value: ₹2,500 / $150 per brief.</p>
              </div>
            </article>

            <article className="p-route" data-stagger>
              <span className="p-route-num">Route · 02 — Monthly white-label retainers</span>
              <h3>One flat plan, the subsidised one</h3>
              <p>
                For agencies running continuous output across accounts. Budget
                once, brief all month — the lowest effective per-asset cost we
                offer.
              </p>
              <div className="price-rows">
                {RETAINERS.map((t) => (
                  <div className="price-row" key={t.tier}>
                    <h5>
                      {t.tier}
                      <span>{t.range}</span>
                    </h5>
                    <div className="price-val">
                      {t.inr}
                      <span>{t.usd}</span>
                    </div>
                  </div>
                ))}
                <p className="price-note">White-label end to end — no Lucent mark, no disclosure.</p>
              </div>
            </article>
          </div>
        ) : (
          <div className="packs" data-stagger>
            {BRAND_PACKS.map((p, i) => (
              <article className={`pack-card ${i === 0 ? 'is-featured' : ''}`} key={p.name}>
                {p.tag && <span className="pack-tag">{p.tag}</span>}
                <h4 className="pack-name">{p.name}</h4>
                <div className="pack-price">
                  {p.price}
                  <span>{p.usd}</span>
                </div>
                <ul className="p-list">
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <a
                  className="btn btn-ghost pack-cta"
                  href={waLink(`Hi Lucent Stills! I'm interested in the ${p.name} (₹${p.price.slice(1)}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book this pack
                </a>
              </article>
            ))}
          </div>
        )}

        <div className="compare-wrap" data-reveal>
          <span className="eyebrow">At a glance</span>
          <div className="compare">
            <div className="compare-row compare-head">
              <b aria-hidden="true" />
              <b>Direct brands</b>
              <b>Agencies</b>
            </div>
            {COMPARE.map((row) => (
              <div className="compare-row" key={row.f}>
                <span className="compare-feature">{row.f}</span>
                <span>{row.b}</span>
                <span>{row.a}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pricing-chips" data-stagger>
          <div className="p-chip">
            <b>Tremendously affordable</b>
            <span>From ₹150 / asset at scale — or $10 for global teams</span>
          </div>
          <div className="p-chip">
            <b>Last-minute? Handled.</b>
            <span>We have pulled panics out of the fire before</span>
          </div>
          <div className="p-chip">
            <b>100 assets / day</b>
            <span>Real pipeline capacity, not marketing copy</span>
          </div>
          <div className="p-chip">
            <b>One message away</b>
            <span>WhatsApp us — same-day replies, no inbox graveyard</span>
          </div>
        </div>

        <div className="pricing-cta" data-reveal>
          <p className="pricing-punch">
            Know your pack or bracket? Say hi on WhatsApp — or send the brief
            and we&apos;ll confirm the fit within a working day.
          </p>
          <div className="cta-actions">
            <a
              className="btn btn-wa magnetic"
              href={waLink('Hi Lucent Stills! I want a quote for product visuals.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={WA_ICON} alt="" />
              WhatsApp us
            </a>
            <button type="button" className="btn btn-rust magnetic" onClick={onContact}>
              Send the full brief
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
