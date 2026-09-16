import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CAROUSEL } from '../assets';

export default function Carousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let wrapWidth = 1;
    let x = 0;
    let vel = 0.55; // auto-drift speed, px per frame
    let dragging = false;
    let lastPointerX = 0;

    const measure = () => {
      // distance from first item to the start of the duplicated set
      const first = track.children[0] as HTMLElement | undefined;
      const dup = track.children[CAROUSEL.length] as HTMLElement | undefined;
      if (first && dup) wrapWidth = dup.offsetLeft - first.offsetLeft;
    };
    measure();
    window.addEventListener('resize', measure);

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      dragging = true;
      lastPointerX = e.clientX;
      section.classList.add('is-dragging');
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastPointerX;
      lastPointerX = e.clientX;
      x += dx;
      vel = gsap.utils.clamp(-16, 16, -dx);
    };
    const onUp = () => {
      dragging = false;
      section.classList.remove('is-dragging');
    };

    section.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tick = () => {
      if (!dragging) {
        // ease velocity back to the auto-drift speed for smooth inertia
        vel += (0.55 - vel) * 0.03;
        x -= vel;
      }
      if (wrapWidth > 1) x = gsap.utils.wrap(-wrapWidth, 0, x);
      track.style.transform = `translate3d(${x.toFixed(2)}px,0,0)`;
    };
    if (!prefersReduced) gsap.ticker.add(tick);
    else tick();

    return () => {
      window.removeEventListener('resize', measure);
      section.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <section className="carousel" ref={sectionRef} aria-label="Selected work">
      <div className="carousel-track" ref={trackRef}>
        {[0, 1].map((dup) =>
          CAROUSEL.map((item) => (
            <figure className="carousel-item" key={`${dup}-${item.src}`}>
              <img
                src={item.src}
                alt={item.title}
                draggable={false}
                loading={dup ? 'lazy' : 'eager'}
                style={{ aspectRatio: `${item.w} / ${item.h}` }}
              />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))
        )}
      </div>
    </section>
  );
}
