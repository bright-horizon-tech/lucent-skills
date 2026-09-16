import { WA_ICON, waLink } from '../whatsapp';

interface PricingPageProps {
  onContact: () => void;
}

const STARTING_POINTS = [
  {
    name: 'Product Visuals',
    price: '₹250',
    unit: '/ visual',
    desc: 'Clean product imagery, lifestyle scenes, campaign-ready compositions and e-commerce assets.',
  },
  {
    name: 'Ad Creatives',
    price: '₹250',
    unit: '/ creative',
    desc: 'Static ads and campaign visuals built around your product, offer or campaign concept.',
  },
  {
    name: 'Carousels & Content Sets',
    price: '₹999',
    unit: '/ set',
    desc: 'Multi-frame product stories, educational carousels and social content systems.',
  },
  {
    name: 'Larger Catalogues',
    price: null,
    unit: null,
    desc: 'For multiple SKUs, recurring production, large visual batches or ongoing brand work.',
  },
];

const BRIEF_ITEMS = [
  "What you're selling",
  'What you need',
  'How many SKUs / assets',
  "Where they'll be used",
  'Your timeline',
];

export default function PricingPage({ onContact }: PricingPageProps) {
  return (
    <div className="case-page pricing-page">
      <header className="case-topbar">
        <a href="#/" className="logo" aria-label="Back to the studio">
          LUCENT<b>·</b><span>STILLS</span>
        </a>
        <div className="case-topbar-right">
          <a
            className="btn btn-wa pricing-page-wa"
            href={waLink('Hi Lucent Stills! I want a quote for product visuals.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={WA_ICON} alt="" />
            WhatsApp
          </a>
          <button type="button" className="btn btn-ghost" onClick={onContact}>
            Contact us
          </button>
          <a className="btn btn-solid" href="#/">
            ← Back to the studio
          </a>
        </div>
      </header>

      <section className="pricing-page-hero">
        <div className="container">
          <span className="eyebrow" data-reveal>
            Pricing
          </span>
          <h1 data-reveal>
            We quote around
            <br />
            <span className="accent-text">your actual project.</span>
          </h1>
          <p className="lede" data-reveal>
            Every client is different, every need is different. Your quote is
            built from scratch around what you&apos;re actually creating —
            your SKUs, formats, timeline, and level of production. You pay
            for the scope you need, nothing padded, nothing wasted.
          </p>
          <p className="lede pricing-pledge" data-reveal>
            Every client is different — and so should the price be.{' '}
            <b>You don&apos;t get charged for a quote built for someone else&apos;s project.</b>
          </p>
        </div>
      </section>

      <section className="pricing-page-cats">
        <div className="container">
          <p className="pricing-ballpark" data-reveal>
            Here&apos;s what that generally starts at
          </p>
          <div className="sp-grid" data-stagger>
            {STARTING_POINTS.map((sp) => (
              <article className="sp-card" key={sp.name}>
                <h4 className="sp-name">{sp.name}</h4>
                {sp.price ? (
                  <div className="sp-price">
                    From <b>{sp.price}</b>
                    <span>{sp.unit}</span>
                  </div>
                ) : (
                  <div className="sp-price sp-price-custom">Custom quote</div>
                )}
                <p className="sp-desc">{sp.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-page-brief">
        <div className="container">
          <div className="brief-quote" data-reveal>
            <div className="brief-copy">
              <h3>
                Tell us what you&apos;re making <span className="brief-arrow">→</span>{' '}
                we&apos;ll quote it
              </h3>
              <p className="brief-lede">For a proper quote, send us:</p>
              <ul className="brief-list">
                {BRIEF_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="brief-out">
                We&apos;ll come back with a scope and quote tailored to the
                project — the scope you need, nothing padded, nothing wasted.
              </p>
            </div>
            <div className="brief-cta">
              <button type="button" className="btn btn-rust magnetic" onClick={onContact}>
                Get a quote →
              </button>
              <a
                className="brief-wa"
                href={waLink("Hi Lucent Stills! I'd like a quote. Here's my brief:")}
                target="_blank"
                rel="noopener noreferrer"
              >
                or WhatsApp us instead
              </a>
            </div>
          </div>

          <p className="pricing-fine" data-reveal>
            Listed prices are indicative starting points, not fixed package
            rates. Final pricing depends on scope, complexity, volume and
            turnaround.
          </p>
        </div>
      </section>
    </div>
  );
}
