export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-head">
          <span className="eyebrow" data-reveal>
            Pricing
          </span>
          <h2 className="h-display" data-reveal>
            Every client is different.
            <br />
            <span className="accent-text">Every need is different.</span>
          </h2>
          <p className="lede" data-reveal>
            So we don&apos;t do fixed packages. Your quote is built from
            scratch around what you&apos;re actually creating — your SKUs,
            your formats, your timeline — and you get the most affordable
            rate for that exact scope. Nothing padded, nothing wasted.
          </p>
          <a className="pricing-link" href="#/pricing" data-reveal>
            See how pricing works
          </a>
        </div>
      </div>
    </section>
  );
}
