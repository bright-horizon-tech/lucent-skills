import React, { useEffect, useRef, useState } from 'react';
import type { Mode } from '../types';
import { smoothScrollTo, getSmoother } from '../scroll';

interface HeaderProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  onContact: () => void;
}

const NAV_LINKS: { label: string; hash: string }[] = [
  { label: 'Work', hash: '#work' },
  { label: 'Pricing', hash: '#pricing' },
  { label: 'Process', hash: '#process' },
  { label: 'Studio', hash: '#capabilities' },
];

export default function Header({ mode, onModeChange, onContact }: HeaderProps) {
  const [isStuck, setIsStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const agencyBtnRef = useRef<HTMLButtonElement>(null);
  const brandBtnRef = useRef<HTMLButtonElement>(null);
  const switchContainerRef = useRef<HTMLDivElement>(null);
  const [thumbStyle, setThumbStyle] = useState<{ left: number; width: number; height: number }>({
    left: 4,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleScroll = () => setIsStuck(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scrolling while the mobile menu is open
  useEffect(() => {
    const smoother = getSmoother();
    if (menuOpen) {
      smoother?.paused(true);
      document.documentElement.classList.add('menu-lock');
    } else {
      smoother?.paused(false);
      document.documentElement.classList.remove('menu-lock');
    }
    return () => {
      smoother?.paused(false);
      document.documentElement.classList.remove('menu-lock');
    };
  }, [menuOpen]);

  // Update mode switch thumb position
  useEffect(() => {
    const updateThumb = () => {
      const activeBtn = mode === 'agency' ? agencyBtnRef.current : brandBtnRef.current;
      const container = switchContainerRef.current;
      if (!activeBtn || !container) return;

      const btnRect = activeBtn.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setThumbStyle({
        left: btnRect.left - containerRect.left,
        width: btnRect.width,
        height: containerRect.height - 8,
      });
    };

    updateThumb();
    window.addEventListener('resize', updateThumb);
    if (document.fonts?.ready) {
      document.fonts.ready.then(updateThumb);
    }
    return () => window.removeEventListener('resize', updateThumb);
  }, [mode]);

  const go = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    requestAnimationFrame(() => {
      if (!document.querySelector(hash) && hash !== '#top') {
        smoothScrollTo('#work');
      } else {
        smoothScrollTo(hash);
      }
    });
  };

  return (
    <>
      <header
        className={`site-header ${isStuck ? 'is-stuck' : ''} ${menuOpen ? 'menu-open' : ''}`}
        id="siteHeader"
      >
        <a href="#top" onClick={go('#top')} className="logo">
          LUCENT<b>·</b><span>STILLS</span>
        </a>

        <nav className="main-nav" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.hash} href={l.hash} onClick={go(l.hash)}>
              {l.label}
            </a>
          ))}
          <a
            href="#/case-study/missastute"
            onClick={() => setMenuOpen(false)}
          >
            Case Studies
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              onContact();
            }}
          >
            Contact
          </a>
        </nav>

        <div className="header-right">
          <div className="mode-switch" ref={switchContainerRef} data-switch>
            <span
              className="ms-thumb"
              style={{
                transform: `translateX(${thumbStyle.left - 4}px)`,
                width: `${thumbStyle.width}px`,
                height: `${thumbStyle.height}px`,
                transition: 'transform 0.4s var(--ease), width 0.3s var(--ease)',
              }}
            />
            <button
              ref={agencyBtnRef}
              type="button"
              data-set-mode="agency"
              className={mode === 'agency' ? 'is-active' : ''}
              onClick={() => onModeChange('agency')}
            >
              Agencies
            </button>
            <button
              ref={brandBtnRef}
              type="button"
              data-set-mode="brand"
              className={mode === 'brand' ? 'is-active' : ''}
              onClick={() => onModeChange('brand')}
            >
              Brands
            </button>
          </div>

          <button
            type="button"
            className={`burger ${menuOpen ? 'is-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* MOBILE / TABLET MENU */}
      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mobile-nav" aria-label="Mobile">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.hash}
              href={l.hash}
              style={{ transitionDelay: menuOpen ? `${0.08 + i * 0.05}s` : '0s' }}
              onClick={go(l.hash)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#/case-study/missastute"
            style={{ transitionDelay: menuOpen ? '0.28s' : '0s' }}
            onClick={() => setMenuOpen(false)}
          >
            Case Studies
          </a>
          <a
            href="#contact"
            style={{ transitionDelay: menuOpen ? '0.33s' : '0s' }}
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              onContact();
            }}
          >
            Contact
          </a>
        </nav>
        <div className="mobile-foot">
          <div className="mode-switch">
            <button
              type="button"
              className={mode === 'agency' ? 'is-active' : ''}
              onClick={() => onModeChange('agency')}
            >
              Agencies
            </button>
            <button
              type="button"
              className={mode === 'brand' ? 'is-active' : ''}
              onClick={() => onModeChange('brand')}
            >
              Brands
            </button>
          </div>
          <a className="mobile-mail" href="mailto:studio@lucentstills.com">
            studio@lucentstills.com
          </a>
        </div>
      </div>
    </>
  );
}
