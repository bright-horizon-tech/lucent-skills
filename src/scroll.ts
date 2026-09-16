import type ScrollSmoother from 'gsap/ScrollSmoother';

let smoother: ScrollSmoother | null = null;

export function setSmoother(s: ScrollSmoother | null) {
  smoother = s;
}

export function getSmoother(): ScrollSmoother | null {
  return smoother;
}

/** Smoothly scroll to a CSS selector, keeping the sticky header clear of the target. */
export function smoothScrollTo(target: string, offset = 84) {
  const el = document.querySelector(target);
  if (!el) return;
  const s = smoother;
  if (s) {
    const y = el.getBoundingClientRect().top + s.scrollTop() - offset;
    s.scrollTo(y, true);
  } else {
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

let pendingScroll: string | null = null;

/** Queue an anchor to scroll to after the next route swap mounts its content. */
export function setPendingScroll(target: string) {
  pendingScroll = target;
}

/** Consume the queued anchor, if any. */
export function consumePendingScroll() {
  const p = pendingScroll;
  pendingScroll = null;
  if (p) smoothScrollTo(p);
}
