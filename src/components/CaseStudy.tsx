import type { AssetItem } from '../assets';
import {
  GALLERY_JEWELRY,
  GALLERY_COSMETICS,
  GALLERY_ADS,
  GALLERY_SPICES,
  GALLERY_HONEY,
  TESTI_IMGS,
} from '../assets';
import { setPendingScroll } from '../scroll';

interface CaseStudyProps {
  slug: string;
  onContact: () => void;
}

interface CaseData {
  num: string;
  slug: string;
  client: string;
  eyebrowClient: string;
  tagline: string;
  meta: { label: string; value: string }[];
  world: string;
  challenge: { h: string; lead: string };
  approachHead: string;
  steps: { n: string; h: string; p: string }[];
  workHead: string;
  workNote: string;
  work: AssetItem[];
  workStrip: 'six' | 'four';
  work2Head?: string;
  work2Note?: string;
  work2?: AssetItem[];
  results: { num: string; sup?: string; label: string }[];
  quote: { text: string; name: string; role: string; detail: string; img: string; alt: string };
  otherSlug: string;
  otherName: string;
}

const CASES: Record<string, CaseData> = {
  missastute: {
    num: '01',
    slug: 'missastute',
    client: 'Miss Astute',
    eyebrowClient: 'Miss Astute',
    tagline:
      'Product photography first, then a full social language — graphics, carousels and reels for a Bangalore jewellery label.',
    world: 'The Brand Atelier',
    meta: [
      { label: 'Client', value: 'Miss Astute — Parul\u2019s fine-jewellery label, Bangalore' },
      { label: 'Category', value: 'Fine jewellery · earrings, rings, necklaces, bangles & more' },
      { label: 'Services', value: 'Product photography · social media graphics · carousels · reels' },
      { label: 'World', value: 'The Brand Atelier' },
    ],
    challenge: {
      h: 'One craft,\ntwo formats.',
      lead:
        'Miss Astute came to us for pure product photography — clean, consistent frames of jhumkas, hathphools, bangles and rings. As the label grew on Instagram, the same visual world expanded into social media graphics, multi-page carousels and reels covers, all without a single studio shoot.',
    },
    approachHead: 'Shoot the product. Build the world.',
    steps: [
      { n: '01', h: 'Product first', p: 'We began with the essentials: crisp product frames of every piece — earrings, rings, necklaces and bangles — on consistent surfaces and light.' },
      { n: '02', h: 'Worn & editorial', p: 'Once the catalogue was covered, pieces were styled on models — full sets, close-ups and editorial angles for launch posts.' },
      { n: '03', h: 'Social language', p: 'The imagery grew into social media graphics, carousels and reels covers, all cut from the same visual world.' },
      { n: '04', h: 'Always-on delivery', p: 'New drops slot straight into the pipeline — same palette, same quality, delivered in every ratio Instagram needs.' },
    ],
    workHead: 'The jewellery, frame by frame.',
    workNote:
      'Full sets, worn shots, macro details and editorial angles — the product photography that started it all.',
    work: GALLERY_JEWELRY.slice(0, 6),
    workStrip: 'six',
    work2Head: 'Then the social world.',
    work2Note: 'Model shots, carousels and campaign frames that turned the catalogue into content.',
    work2: GALLERY_JEWELRY.slice(6, 12),
    results: [
      { num: '40', sup: '+', label: 'Jewellery pieces shot' },
      { num: '3', label: 'Content formats — stills, carousels, reels' },
      { num: '100', sup: '%', label: 'One visual world, every drop' },
      { num: '0', label: 'Studio shoots needed' },
    ],
    quote: {
      text:
        'We started with just product photography for Miss Astute, and it has grown into so much more — social media graphics, carousels and even reels. The team understands jewellery: the macros are sharp, the sets look royal, and every new drop matches the last one. (Placeholder testimonial — Parul\u2019s actual words will replace this soon.)',
      name: 'Parul',
      role: 'Miss Astute',
      detail: 'Fine jewellery · Bangalore',
      img: TESTI_IMGS.missastute,
      alt: 'Miss Astute jhumka shot',
    },
    otherSlug: 'aurorah',
    otherName: 'The Aurorah Store',
  },

  aurorah: {
    num: '02',
    slug: 'aurorah',
    client: 'The Aurorah Store',
    eyebrowClient: 'The Aurorah Store',
    tagline:
      'Five months of ayurvedic ad creatives, carousels and story edits — and not a single missed deadline.',
    world: 'The Brand Atelier',
    meta: [
      { label: 'Client', value: 'The Aurorah Store — Shwetha\u2019s ayurvedic cosmetics label' },
      { label: 'Duration', value: '5 months and counting' },
      { label: 'Services', value: 'Ad creatives · carousel posts · Instagram story edits' },
      { label: 'World', value: 'The Brand Atelier' },
    ],
    challenge: {
      h: 'Timely delivery,\nevery single time.',
      lead:
        'Shwetha had worked with freelancers before. The creatives were fine — the deadlines were not. The Aurorah Store needed a production partner who treated a festival drop like a launch: theme-accurate, on-brand, and in hand before the agreed date, every time, even when the deadline itself was hectic.',
    },
    approachHead: 'Palette first. Approval always.',
    steps: [
      { n: '01', h: 'Questionnaire', p: 'Every detail about the business, the audience and the visual direction — captured once, reused all season.' },
      { n: '02', h: 'Design palette', p: 'A full palette of light, surface and mood built around the product line, so every creative feels like one brand.' },
      { n: '03', h: 'Approval', p: 'A rough guideline of each creative went to Shwetha first — nothing shipped until the vibe matched her imagination.' },
      { n: '04', h: 'Generation', p: 'Festival creatives, carousel pages and story edits produced ahead of deadline, with revisions turned around fast.' },
    ],
    workHead: 'One carousel, page by page.',
    workNote:
      'A six-page ayurvedic cream carousel — cover to closer — plus the ad creatives that carried the festival seasons.',
    work: GALLERY_COSMETICS.slice(0, 6),
    workStrip: 'six',
    work2Head: 'Festival ad creatives.',
    work2Note: 'Portrait-first campaign creatives built for stories, reels covers and paid placements.',
    work2: GALLERY_ADS.slice(0, 3),
    results: [
      { num: '5', sup: 'mo', label: 'Of continuous collaboration' },
      { num: '0', label: 'Missed deadlines' },
      { num: '100', sup: '%', label: 'Theme-accurate creatives' },
      { num: '∞', sup: '', label: 'Repeat commissions' },
    ],
    quote: {
      text:
        'He has the ability to recreate my message, text, and vision into creatives exactly as I imagine them, without confusion. Even with very hectic deadlines, he has consistently completed the work well before the agreed delivery time. The pricing is very fair, and I truly appreciate the discounts and combo pricing he offers to his regular clients.',
      name: 'Shwetha',
      role: 'The Aurorah Store',
      detail: 'Ad creatives · Carousels · Story edits',
      img: TESTI_IMGS.aurorah,
      alt: 'Aurorah carousel cover',
    },
    otherSlug: 'ganges',
    otherName: 'By The Ganges',
  },

  ganges: {
    num: '03',
    slug: 'ganges',
    client: 'By The Ganges',
    eyebrowClient: 'By The Ganges',
    tagline:
      'Honey and spices, shot as one shelf — brief in the morning, first cut the same day.',
    world: 'The Brand Atelier',
    meta: [
      { label: 'Client', value: 'By The Ganges — Altamash\u2019s FMCG label of honey & spices' },
      { label: 'Category', value: 'FMCG · honey, spice mixes & seasonings' },
      { label: 'Services', value: 'Pack shots · infographics · social carousels · ad creatives' },
      { label: 'World', value: 'The Brand Atelier' },
    ],
    challenge: {
      h: 'One label,\ntwo shelves.',
      lead:
        'Honey and spices live in different aisles but share one brand. By The Ganges needed imagery that could do both: honest pack shots for the catalogue, ingredient-led infographics for social, and festival ad creatives for the season — all consistent, all fast. Altamash briefed the outcome; the "how" was left to us.',
    },
    approachHead: 'Brief it. We experiment.',
    steps: [
      { n: '01', h: 'The brief', p: 'Altamash described what each creative had to achieve — the execution was ours to own, end to end.' },
      { n: '02', h: 'Own inputs', p: 'We brought our own angles and experimented with different approaches rather than waiting for direction.' },
      { n: '03', h: 'Same-day cut', p: 'First versions typically landed within a day, with revisions turned around just as quickly.' },
      { n: '04', h: 'Range coverage', p: 'Pack shots, carousels and ingredient stories across both shelves — spices and honey — kept visually consistent.' },
    ],
    workHead: 'The spice shelf.',
    workNote:
      'Pack shots for the range, the ingredient story, and a five-page social carousel — plus the recipe infographic that closed the loop.',
    work: GALLERY_SPICES.slice(0, 6),
    workStrip: 'six',
    work2Head: 'The honey shelf.',
    work2Note: 'Strength-themed honey ads and bottle arrangements — same brand, second aisle, same visual language.',
    work2: GALLERY_HONEY,
    results: [
      { num: '1', sup: 'day', label: 'Typical turnaround' },
      { num: '2', label: 'Product lines, one language' },
      { num: '11', sup: '+', label: 'Range SKUs covered' },
      { num: '100', sup: '%', label: 'Briefs matched' },
    ],
    quote: {
      text:
        'Our products are in the FMCG category — primarily honey and spices. The output was great, to be honest. We told Aditya what we wanted, and he delivered exactly that. He also gave his own inputs and experimented with different approaches for us, which we really appreciated. The turnaround time was just a day, and the revisions were also very quick. I\u2019d definitely suggest Aditya\u2019s work to brand owners and social media managers. They can get a lot of value from working with him.',
      name: 'Altamash',
      role: 'By The Ganges',
      detail: 'FMCG · Honey & spices',
      img: TESTI_IMGS.ganges,
      alt: 'By The Ganges spice lineup',
    },
    otherSlug: 'missastute',
    otherName: 'Miss Astute',
  },
};

export { CASES };
export type { CaseData };

export default function CaseStudy({ slug, onContact }: CaseStudyProps) {
  const cs = CASES[slug] ?? CASES.aurorah;
  const challengeLines = cs.challenge.h.split('\n');

  return (
    <div className="case-page">
      <header className="case-topbar">
        <a href="#/" className="logo" aria-label="Back to the studio">
          LUCENT<b>·</b><span>STILLS</span>
        </a>
        <div className="case-topbar-right">
          <button type="button" className="btn btn-ghost" onClick={onContact}>
            Contact us
          </button>
          <a className="btn btn-solid" href="#/">
            ← Back to the studio
          </a>
        </div>
      </header>

      {/* HERO BAND */}
      <section className="case-hero">
        <div className="container">
          <span className="eyebrow case-eyebrow">Case study · {cs.num}</span>
          <h1 className="case-title">{cs.client}</h1>
          <p className="case-tagline">{cs.tagline}</p>
          <div className="case-meta" data-stagger>
            {cs.meta.map((m) => (
              <div className="case-meta-item" key={m.label}>
                <b>{m.label}</b>
                <span>{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="case-block">
        <div className="container case-cols">
          <div>
            <span className="eyebrow">The challenge</span>
            <h2>
              {challengeLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < challengeLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </div>
          <p className="case-lead">{cs.challenge.lead}</p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="case-block case-block--tinted">
        <div className="container">
          <div className="case-block-head">
            <span className="eyebrow">The approach</span>
            <h2>{cs.approachHead}</h2>
          </div>
          <div className="case-steps" data-stagger>
            {cs.steps.map((s) => (
              <div className="case-step" key={s.n}>
                <span>{s.n}</span>
                <h4>{s.h}</h4>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE WORK */}
      <section className="case-block">
        <div className="container">
          <div className="case-block-head">
            <span className="eyebrow">The work</span>
            <h2>{cs.workHead}</h2>
            <p>{cs.workNote}</p>
          </div>
          <div className="case-strip" data-stagger>
            {cs.work.map((item) => (
              <figure className="case-strip-item" key={item.src}>
                <img src={item.src} alt={item.title} loading="lazy" />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
          {cs.work2 && cs.work2.length > 0 && (
            <>
              <div className="case-block-head case-block-head--second">
                <span className="eyebrow">Also delivered</span>
                <h2>{cs.work2Head}</h2>
                <p>{cs.work2Note}</p>
              </div>
              <div
                className={`case-strip ${cs.work2.length === 4 ? 'case-strip--four' : 'case-strip--ads'}`}
                data-stagger
              >
                {cs.work2.map((item) => (
                  <figure className="case-strip-item" key={item.src}>
                    <img src={item.src} alt={item.title} loading="lazy" />
                    <figcaption>{item.title}</figcaption>
                  </figure>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* RESULTS */}
      <section className="case-results">
        <div className="container">
          <div className="stats-grid" data-stagger>
            {cs.results.map((r) => (
              <div className="stat" key={r.label}>
                <span className="stat-num">
                  {r.num}
                  {r.sup ? <sup>{r.sup}</sup> : null}
                </span>
                <span className="stat-label">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="case-quote">
        <div className="container">
          <figure className="testi-card case-quote-card">
            <div className="testi-stars" aria-hidden="true">★★★★★</div>
            <blockquote>{cs.quote.text}</blockquote>
            <figcaption>
              <img src={cs.quote.img} alt={cs.quote.alt} loading="lazy" />
              <div>
                <b>{cs.quote.name}</b>
                <span>{cs.quote.role}</span>
                <em>{cs.quote.detail}</em>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* NEXT CASE + CTA */}
      <section className="case-cta">
        <div className="container">
          <a className="case-next" href={`#/case-study/${cs.otherSlug}`}>
            <span className="eyebrow">Next case study</span>
            <b>{cs.otherName} →</b>
          </a>
          <h2 className="h-display">
            Your product
            <br />
            could be next.
          </h2>
          <div className="cta-actions">
            <button type="button" className="btn btn-rust magnetic" onClick={onContact}>
              Start your brief
            </button>
            <a
              className="btn btn-ghost magnetic"
              href="#/"
              onClick={() => setPendingScroll('#capabilities')}
            >
              See the full output
            </a>
          </div>
        </div>
      </section>

      <footer className="case-foot">
        <span>© {new Date().getFullYear()} Lucent Stills · Case study {cs.num} — {cs.client}</span>
      </footer>
    </div>
  );
}
