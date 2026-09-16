import React, { useEffect, useState } from 'react';
import type { Mode } from '../types';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}

export default function ContactModal({ open, onClose, mode, onModeChange }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      window.addEventListener('keydown', onKey);
      document.documentElement.classList.add('menu-lock');
    }
    return () => {
      window.removeEventListener('keydown', onKey);
      document.documentElement.classList.remove('menu-lock');
    };
  }, [open, onClose]);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Brief / Quote request — ${mode === 'agency' ? 'Agency' : 'Brand'}${name ? ` — ${name}` : ''}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nI am: ${mode === 'agency' ? 'An agency' : 'A brand'}\n\n${message}`
    );
    window.location.href = `mailto:studio@lucentstills.com?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card modal-glass-container"
        role="dialog"
        aria-modal="true"
        aria-label="Contact Lucent Stills"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" aria-label="Close" onClick={onClose}>
          ×
        </button>
        <span className="eyebrow modal-eyebrow">Start the conversation</span>
        <h3>Tell us the impossible.</h3>
        <p className="modal-sub">
          Six SKUs or six hundred, a calm season or a Friday panic — send it over
          and we&apos;ll come back with a quote that fits. Expect a reply within a
          working day.
        </p>
        <form onSubmit={submit} className="modal-form">
          <div className="modal-row">
            <label className="modal-glass-input">
              <span>Your name</span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Aditi Sharma"
              />
            </label>
            <label className="modal-glass-input">
              <span>Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@brand.com"
              />
            </label>
          </div>
          <div className="modal-kind" role="group" aria-label="I am">
            <span>I am</span>
            <div className="mode-switch">
              <button
                type="button"
                className={mode === 'agency' ? 'is-active' : ''}
                onClick={() => onModeChange('agency')}
              >
                An Agency
              </button>
              <button
                type="button"
                className={mode === 'brand' ? 'is-active' : ''}
                onClick={() => onModeChange('brand')}
              >
                A Brand
              </button>
            </div>
          </div>
          <label className="modal-glass-input">
            <span>The brief, in one breath</span>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What are we shooting, for whom, and how soon?"
            />
          </label>
          <div className="modal-actions">
            <button type="submit" className="btn btn-rust magnetic">
              Send it over
            </button>
            <a className="modal-mail" href="mailto:studio@lucentstills.com">
              or write to studio@lucentstills.com directly
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
