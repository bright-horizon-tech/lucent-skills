import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { AssetItem } from '../assets';
import {
  GALLERY_JEWELRY,
  GALLERY_COSMETICS,
  GALLERY_SPICES,
  GALLERY_HONEY,
  GALLERY_ADS,
} from '../assets';
import { getSmoother } from '../scroll';

interface GallerySection {
  id: string;
  eyebrow: string;
  title: string;
  note: string;
  items: AssetItem[];
  caseHref?: string;
  caseLabel?: string;
}

const SECTIONS: GallerySection[] = [
  {
    id: 'jewelry',
    eyebrow: '01 · Fine jewellery — Miss Astute',
    title: 'Miss Astute, in every direction.',
    note: 'Parul\u2019s fine-jewellery label from Bangalore. We started with pure product photography — full sets, worn shots, macro details — and grew into social media graphics, carousels and reels for the brand.',
    items: GALLERY_JEWELRY,
    caseHref: '#/case-study/missastute',
    caseLabel: 'Read the Miss Astute case study',
  },
  {
    id: 'ayurveda',
    eyebrow: '02 · Ayurvedic cosmetics — The Aurorah Store',
    title: 'Ayurvedic cosmetics.',
    note: 'Carousel posts and social sets for The Aurorah Store — Shwetha\u2019s ayurvedic label from Tamil Nadu — the entire visual language, page by page.',
    items: GALLERY_COSMETICS,
    caseHref: '#/case-study/aurorah',
    caseLabel: 'Read the Aurorah case study',
  },
  {
    id: 'spices',
    eyebrow: '03 · Spices — By The Ganges',
    title: 'Spices, by The Ganges.',
    note: 'Pack shots, ingredient flat-lays and the social carousel that sold the range — for Uttarakhand\u2019s honey & spice label.',
    items: GALLERY_SPICES,
    caseHref: '#/case-study/ganges',
    caseLabel: 'Read the Ganges case study',
  },
  {
    id: 'honey',
    eyebrow: '04 · Honey — By The Ganges',
    title: 'Honey, same hive.',
    note: 'Same brand, second shelf: strength-themed ads and bottle arrangements for the honey line.',
    items: GALLERY_HONEY,
  },
  {
    id: 'ads',
    eyebrow: '05 · Ad creatives · Portrait',
    title: 'Ad creatives, in portrait.',
    note: 'Festival ads, campaign creatives and ingredient stories — built tall for stories and reels covers.',
    items: GALLERY_ADS,
  },
];

function Lightbox({ item, onClose }: { item: AssetItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const smoother = getSmoother();
    smoother?.paused(true);
    document.documentElement.classList.add('menu-lock');
    return () => {
      window.removeEventListener('keydown', onKey);
      smoother?.paused(false);
      document.documentElement.classList.remove('menu-lock');
    };
  }, [onClose]);

  // Portal to <body>: inside ScrollSmoother's transformed wrapper, position:fixed
  // anchors to the document instead of the viewport, so the overlay must live outside it.
  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <button type="button" className="lightbox-close" aria-label="Close" onClick={onClose}>
        ✕
      </button>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.title} />
        <figcaption>{item.title}</figcaption>
      </figure>
    </div>,
    document.body
  );
}

export default function Gallery() {
  const [active, setActive] = useState<AssetItem | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section className="gallery" id="capabilities">
      <div className="container">
        <div className="gallery-head">
          <div>
            <span className="eyebrow" data-reveal>
              The output
            </span>
            <h2 className="h-mid" data-reveal>
              Grouped the way
              <br />
              clients think.
            </h2>
          </div>
          <p className="lede" data-reveal style={{ maxWidth: '36ch' }}>
            Not agency vs brand — internally the work is one floor. So here it is
            the way it actually ships: by world and by shelf. Tap any image to
            view it up close.
          </p>
        </div>

        {SECTIONS.map((sec) => (
          <div className="g-section-block" key={sec.id} id={`gallery-${sec.id}`}>
            <div className="g-section-head">
              <span className="eyebrow">{sec.eyebrow}</span>
              <h3>{sec.title}</h3>
              <p>{sec.note}</p>
              {sec.caseHref && (
                <a className="g-case-link" href={sec.caseHref}>
                  {sec.caseLabel} <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
            <div className="g-masonry" data-stagger>
              {sec.items.map((item) => (
                <figure
                  className="g-item"
                  key={item.src}
                  onClick={() => setActive(item)}
                >
                  <img src={item.src} alt={item.title} loading="lazy" />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>

      {active && <Lightbox item={active} onClose={close} />}
    </section>
  );
}
