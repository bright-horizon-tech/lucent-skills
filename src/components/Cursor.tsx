import { useEffect, useRef } from 'react';

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReducedMotion) return;

    document.documentElement.classList.add('has-cursor');

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let dotX = -100;
    let dotY = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseEnterTarget = () => {
      document.body.classList.add('cursor-hover');
    };

    const onMouseLeaveTarget = () => {
      document.body.classList.remove('cursor-hover');
    };

    window.addEventListener('mousemove', onMouseMove);

    const updateHoverListeners = () => {
      const targets = document.querySelectorAll(
        'a, button, .world-card, .img-wrapper, .collage-set figure, .stat'
      );
      targets.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterTarget);
        el.addEventListener('mouseleave', onMouseLeaveTarget);
      });
      return targets;
    };

    let targets = updateHoverListeners();
    const observer = new MutationObserver(() => {
      targets = updateHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const animate = () => {
      // Smooth lerp for ring and dot
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      dotX += (mouseX - dotX) * 0.45;
      dotY += (mouseY - dotY) * 0.45;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      if (dotRef.current) {
        dotRef.current.style.left = `${dotX}px`;
        dotRef.current.style.top = `${dotY}px`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove('has-cursor');
      document.body.classList.remove('cursor-hover');
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
      observer.disconnect();
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterTarget);
        el.removeEventListener('mouseleave', onMouseLeaveTarget);
      });
    };
  }, []);

  return (
    <div className="cursor" aria-hidden="true">
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}
