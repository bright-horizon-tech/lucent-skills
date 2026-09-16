import { WA_ICON, waLink } from '../whatsapp';

interface PricingPageProps {
  onContact: () => void;
}

const CATEGORIES = [
  {
    name: 'Product Visuals',
    desc: 'Clean product imagery, lifestyle scenes, campaign-ready compositions and e-commerce assets.',
  },
  {
    name: 'Ad Creatives',
    desc: 'Static ads and campaign visuals built around your product, offer or campaign concept.',
  },
  {
    name: 'Carousels & Content Sets',
    desc: 'Multi-frame product stories, educational carousels and social content systems.',
  },
  {
    name: 'Larger Catalogues',
    desc: 'Multiple SKUs, recurring production, large visual batches or ongoing brand work.',
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
            Custom quotes.
            <br />
            <span className="accent-text">Always the most affordable.</span>
          </h1>
          <p className="lede" data-reveal>
            Every client is different, every need is different — so every
            quote is built from scratch around what you&apos;re creating.
            No packages to squeeze into, no rates to bargain down, no paying
            for what you don&apos;t need.
          </p>
        </div>
      </section>

      <section className="pricing-page-cats">
        <div className="container">
          <p className="pricing-ballpark" data-reveal>
            What we quote for
          </p>
          <div className="sp-grid" data-stagger>
            {CATEGORIES.map((c) => (
              <article className="sp-card" key={c.name}>
                <span className="sp-tag">Custom quote</span>
                <h4 className="sp-name">{c.name}</h4>
                <p className="sp-desc">{c.desc}</p>
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
                Your brief <span className="brief-arrow">→</span> our quote
              </h3>
              <p className="brief-lede">For a proper quote, send us:</p>
              <ul className="brief-list">
                {BRIEF_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="brief-out">
                We&apos;ll come back with a scope and quote tailored to the
                project — the most affordable rate for what you actually need.
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
            We don&apos;t publish fixed rates because every project scopes
            differently. You always get the most affordable quote for your
            exact scope, complexity, volume and turnaround.
          </p>
        </div>
      </section>
    </div>
  );
}
