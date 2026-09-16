import { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import type { Mode } from './types';
import { setSmoother, consumePendingScroll } from './scroll';
import Cursor from './components/Cursor';
import Aperture from './components/Aperture';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Marquee from './components/Marquee';
import Intro from './components/Intro';
import WhyUs from './components/WhyUs';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import ContactSection from './components/ContactSection';
import WorldGate from './components/WorldGate';
import CaseStudy from './components/CaseStudy';
import Footer from './components/Footer';
import WorldBadge from './components/WorldBadge';
import ContactModal from './components/ContactModal';
import WhatsAppButton from './components/WhatsAppButton';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/** Per-image entrance variants so assets arrive from different angles, not one queue. */
const ENTRANCES = [
  { y: 70, x: 0, rotation: -2.5, scale: 0.94 },
  { x: -70, y: 20, rotation: 2, scale: 0.94 },
  { y: -70, x: 30, rotation: 0, scale: 0.96 },
  { x: 70, y: 40, rotation: -3, scale: 0.9 },
  { y: 90, x: -30, rotation: 3, scale: 0.92 },
  { x: -90, y: -20, rotation: -2, scale: 0.95 },
  { y: 60, x: 40, rotation: 1.5, scale: 0.97 },
  { x: 50, y: -60, rotation: 2.5, scale: 0.93 },
];

export default function App() {
  const [mode, setMode] = useState<Mode>('agency');
  const [contactOpen, setContactOpen] = useState(false);
  const [irisOpen, setIrisOpen] = useState(0);
  const [shutterVisible, setShutterVisible] = useState(true);
  const [gateVisible, setGateVisible] = useState(false);
  const [gateLeaving, setGateLeaving] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [route, setRoute] = useState(() => window.location.hash);
  const [introStarted, setIntroStarted] = useState(false);
  const transitioningRef = useRef(false);

  // Sync data-mode attribute on <html> element
  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
  }, [mode]);

  // Tiny hash router: '#/...' paths swap the page, plain anchors just scroll
  useEffect(() => {
    const onHash = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0);
      requestAnimationFrame(() => ScrollTrigger.refresh());
      window.setTimeout(() => consumePendingScroll(), 90);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const isCaseStudy = route.startsWith('#/case-study');
  const caseSlug = route.split('/')[2] || 'aurorah';

  // Smooth scrolling (native scroll on the case-study page — no smoother there)
  useEffect(() => {
    if (isCaseStudy) {
      setSmoother(null);
      return;
    }
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.2,
      smoothTouch: 0.08,
      effects: true,
    });
    setSmoother(smoother);

    return () => {
      smoother.kill();
      setSmoother(null);
    };
  }, [isCaseStudy]);

  // Scroll-driven reveals — re-checked when the route swaps page content
  useEffect(() => {
    const reveal = (el: HTMLElement, vars: gsap.TweenVars) => {
      if (el.dataset.revealDone) return;
      el.dataset.revealDone = '1';
      gsap.fromTo(el, { y: 44, autoAlpha: 0 }, vars);
    };

    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
      reveal(el, {
        y: 0,
        autoAlpha: 1,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });

    gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((group) => {
      if (group.dataset.staggerDone) return;
      group.dataset.staggerDone = '1';
      const kids = Array.from(group.children) as HTMLElement[];
      gsap.fromTo(
        kids,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: Math.min(0.1, 1 / Math.max(1, kids.length)),
          scrollTrigger: { trigger: group, start: 'top 86%', once: true },
        }
      );
    });

    // Hero collage entrance — each image arrives from its own angle and beat
    if (!introStarted || isCaseStudy) return;
    gsap.utils.toArray<HTMLElement>('.img-wrapper').forEach((el, i) => {
      if (el.dataset.heroDone) return;
      el.dataset.heroDone = '1';
      const from = ENTRANCES[i % ENTRANCES.length];
      gsap.fromTo(
        el,
        { ...from, autoAlpha: 0 },
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 1.35,
          delay: 0.2 + (i % 4) * 0.16 + Math.floor(i / 4) * 0.08,
          ease: 'power3.out',
        }
      );
    });
  }, [route, introStarted, isCaseStudy]);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        setScrollProgress(Math.min(1, Math.max(0, window.scrollY / maxScroll)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Preloader finish -> world gate (shutter stays closed until a world is picked)
  const handlePreloaderFinish = useCallback(() => {
    if (window.location.hash.startsWith('#/case-study')) {
      // no gate on the case-study page — open straight onto it
      setIrisOpen(1);
      setShutterVisible(false);
      return;
    }
    setGateVisible(true);
  }, []);

  // World picked -> gate fades -> aperture opens onto the site
  const handleWorldChoose = useCallback(
    (newMode: Mode) => {
      if (gateLeaving) return;
      setGateLeaving(true);
      setMode(newMode);
      setIntroStarted(true);

      const obj = { v: 0 };
      gsap
        .timeline({
          onComplete: () => {
            setShutterVisible(false);
            setGateVisible(false);
            setGateLeaving(false);
          },
        })
        .to('.world-gate .gate-inner', {
          autoAlpha: 0,
          y: -26,
          duration: 0.45,
          ease: 'power2.in',
        })
        .to(obj, {
          v: 1,
          duration: 1.25,
          ease: 'power3.inOut',
          onUpdate: () => setIrisOpen(obj.v),
        });
    },
    [gateLeaving]
  );

  // Mode switcher (header toggle) with iris close -> switch -> open
  const switchMode = useCallback(
    (newMode: Mode) => {
      if (transitioningRef.current || newMode === mode) return;
      transitioningRef.current = true;

      setShutterVisible(true);
      const obj = { v: 1 };

      const tl = gsap.timeline({
        onComplete: () => {
          transitioningRef.current = false;
        },
      });

      tl.to(obj, {
        v: 0,
        duration: 0.55,
        ease: 'power3.inOut',
        onUpdate: () => setIrisOpen(obj.v),
      })
        .add(() => {
          setMode(newMode);
        })
        .to(
          obj,
          {
            v: 1,
            duration: 0.85,
            ease: 'power3.inOut',
            onUpdate: () => setIrisOpen(obj.v),
          },
          '+=0.1'
        )
        .add(() => {
          setShutterVisible(false);
        });
    },
    [mode]
  );

  return (
    <>
      {/* GRAIN OVERLAY */}
      <div className="grain" aria-hidden="true" />

      {/* CUSTOM CURSOR */}
      <Cursor />

      {/* SCROLL PROGRESS BAR */}
      <div className="progress" aria-hidden="true">
        <i
          id="progressBar"
          style={{
            transform: `scaleX(${scrollProgress})`,
            transition: 'transform 0.05s linear',
          }}
        />
      </div>

      {/* MECHANICAL APERTURE */}
      <Aperture openValue={irisOpen} visible={shutterVisible} />

      {/* PRELOADER */}
      <Preloader onFinish={handlePreloaderFinish} />

      {/* WORLD GATE — sits over the closed shutter, before it opens */}
      <WorldGate
        visible={gateVisible && !isCaseStudy}
        leaving={gateLeaving}
        mode={mode}
        onChoose={handleWorldChoose}
      />

      {isCaseStudy ? (
        /* ---------- CASE STUDY PAGES ---------- */
        <CaseStudy slug={caseSlug} onContact={() => setContactOpen(true)} />
      ) : (
        /* ---------- LANDING PAGE ---------- */
        <>
          {/* SITE HEADER */}
          <Header mode={mode} onModeChange={switchMode} onContact={() => setContactOpen(true)} />

          {/* WORLD BADGE */}
          <WorldBadge mode={mode} />

          {/* SMOOTH SCROLL SHELL */}
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <main id="top">
                <Hero />
                <Carousel />
                <Marquee />
                <Intro mode={mode} />
                <WhyUs mode={mode} />
                <Pricing mode={mode} onContact={() => setContactOpen(true)} />
                <Process mode={mode} />
                <Gallery />
                <Testimonials />
                <Stats />
                <ContactSection mode={mode} />
              </main>

              <Footer mode={mode} onModeChange={switchMode} onContact={() => setContactOpen(true)} />
            </div>
          </div>
        </>
      )}

      {/* WHATSAPP CTA WIDGET */}
      <WhatsAppButton />

      {/* CONTACT MODAL */}
      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        mode={mode}
        onModeChange={switchMode}
      />
    </>
  );
}
