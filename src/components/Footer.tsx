import React from 'react';
import type { Mode } from '../types';
import { smoothScrollTo } from '../scroll';
import { waLink } from '../whatsapp';

interface FooterProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  onContact: () => void;
}

export default function Footer({ mode, onModeChange, onContact }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollTo = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (!document.querySelector(hash) && hash !== '#top') {
      smoothScrollTo('#work');
      return;
    }
    smoothScrollTo(hash);
  };

  return (
    <footer>
      <div className="container">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="logo">
              LUCENT<b>·</b><span>STILLS</span>
            </div>
            <p>
              A white-label visual production studio. High-grade product visuals
              for brands and the agencies who build them.
            </p>
            <button type="button" className="btn btn-outline-dark foot-contact" onClick={onContact}>
              Start a conversation
            </button>
          </div>
          <div className="foot-col">
            <h5>Studio</h5>
            <ul>
              <li>
                <a href="#/case-study/aurorah">
                  Case study — The Aurorah Store
                </a>
              </li>
              <li>
                <a href="#/case-study/ganges">
                  Case study — By The Ganges
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={scrollTo('#pricing')}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#process" onClick={scrollTo('#process')}>
                  Process
                </a>
              </li>
              <li>
                <a href="#capabilities" onClick={scrollTo('#capabilities')}>
                  Output
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={scrollTo('#testimonials')}>
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>For</h5>
            <ul>
              <li>
                <a
                  href="#work"
                  onClick={(e) => {
                    scrollTo('#work')(e);
                    onModeChange('agency');
                  }}
                >
                  Agencies
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => {
                    scrollTo('#work')(e);
                    onModeChange('brand');
                  }}
                >
                  Brands
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onContact();
                  }}
                >
                  Contact — {mode === 'agency' ? 'agency desk' : 'brand desk'}
                </a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Elsewhere</h5>
            <ul>
              <li>
                <a href={waLink('Hi Lucent Stills!')} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                  Behance
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>
            © <span id="year">{currentYear}</span> Lucent Stills. All rights
            reserved.
          </span>
          <span>Product visuals without the shoot.</span>
        </div>
      </div>
    </footer>
  );
}
