import type { Mode } from '../types';

interface IntroProps {
  mode: Mode;
}

export default function Intro({ mode }: IntroProps) {
  const isAgency = mode === 'agency';

  return (
    <section className="intro" id="work">
      <div className="container">
        <div className="intro-head">
          <span className="eyebrow" data-reveal>
            {isAgency ? 'For agencies' : 'For brands'}
          </span>
          {isAgency ? (
            <>
              <h2 className="h-display" data-reveal>
                Their brand on the brief.
                <br />
                <span className="accent-text">Your name on every file.</span>
              </h2>
              <p className="lede" data-reveal>
                You run client accounts; we run the production floor behind them.
                Send the brief, references and SKU list — we return finished,
                campaign-ready static imagery produced on next-generation imaging
                pipelines. White-label end to end: no Lucent mark, no disclosure,
                no studio logistics for your team to babysit.
              </p>
            </>
          ) : (
            <>
              <h2 className="h-display" data-reveal>
                Your product,
                <br />
                <span className="accent-text">photographed beautifully.</span>
              </h2>
              <p className="lede" data-reveal>
                You built the product; we build the visual world around it. A
                questionnaire about your business and the direction you want, a
                design palette crafted for you, then product photography-grade
                statics — hero frames, detail macros, lifestyle scenes — produced
                on next-generation imaging pipelines and approved by you before a
                single asset is finalised.
              </p>
            </>
          )}
        </div>

        <div className="intro-cards" data-stagger>
          {(isAgency
            ? [
                {
                  num: '01 / Brief',
                  h: 'Drop the client brief',
                  p: 'References, SKU list, ratios, the account you are producing for — one shared folder is all we need to start.',
                },
                {
                  num: '02 / Produce',
                  h: 'We produce, white-label',
                  p: 'Lighting, surface and angle sets locked across the whole batch and rendered at repeatable, campaign-grade quality.',
                },
                {
                  num: '03 / Deliver',
                  h: 'Your name on every file',
                  p: 'Delivered in every ratio your deck needs, under your brand. Your client never hears ours. NDAs are routine for us.',
                },
              ]
            : [
                {
                  num: '01 / Questionnaire',
                  h: 'Tell us the feeling',
                  p: 'A short questionnaire captures your business, audience and the visual direction you want — that becomes our brief.',
                },
                {
                  num: '02 / Palette',
                  h: 'We craft the palette',
                  p: 'A full design palette — light, surface, colour, mood — is built for your product and shared with you before we shoot.',
                },
                {
                  num: '03 / Approve',
                  h: 'You approve, we deliver',
                  p: 'A rough guideline of how everything will look comes to you for sign-off. Once approved, generation and delivery are on us.',
                },
              ]
          ).map((c) => (
            <div className="intro-card" key={c.num}>
              <span className="num">{c.num}</span>
              <h4>{c.h}</h4>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
