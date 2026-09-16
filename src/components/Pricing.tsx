import { waLink } from '../whatsapp';

interface PricingProps {
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

export default function Pricing({ onContact }: PricingProps) {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-head">
          <span className="eyebrow" data-reveal>
            Pricing
          </span>
          <h2 className="h-display" data-reveal>
            Clear starting points.
            <br />
            <span className="accent-text">Custom quotes.</span>
          </h2>
          <p className="lede" data-reveal>
            Every project is different — number of SKUs, visual complexity,
            deliverables, usage, and turnaround all affect the final scope.
            So rather than forcing every project into a fixed package, we
            quote based on what you&apos;re actually trying to create.
          </p>
        </div>

        <p className="pricing-ballpark" data-reveal>
          Need a quick ballpark?
          <br />
          Here are our typical starting points.
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
              We&apos;ll come back with a scope and quote tailored to the project.
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
  );
}
