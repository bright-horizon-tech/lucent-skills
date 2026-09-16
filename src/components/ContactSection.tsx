import React, { useState } from 'react';
import type { Mode } from '../types';
import { WA_ICON, waLink } from '../whatsapp';

interface ContactSectionProps {
  mode: Mode;
}

export default function ContactSection({ mode }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hi Lucent Stills! I'm ${mode === 'agency' ? 'an agency' : 'a brand'} looking for product visuals.`,
      name ? `\nName: ${name}` : '',
      email ? `\nEmail: ${email}` : '',
      `\n\nBrief: ${message}`,
    ].join('');
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-glass cta-glass-card">
          <div className="contact-copy">
            <span className="eyebrow contact-eyebrow">Contact · the last stop</span>
            <h2>
              The brief
              <br />
              starts here.
            </h2>
            <p>
              {mode === 'agency'
                ? 'One account or forty, calm season or Friday panic — send the workload and we will quote it honestly. Per-asset or monthly tier, your pick.'
                : 'A debut collection or a seasonal refresh — tell us the product and the feeling, and we will come back with a quote that fits it, fast.'}
            </p>
            <ul className="contact-points">
              <li>Reply within a working day</li>
              <li>Quotes matched to the actual brief</li>
              <li>Last-minute friendly — we have proven it</li>
            </ul>
            <div className="contact-channels">
              <a className="contact-mail" href="mailto:studio@lucentstills.com">
                studio@lucentstills.com
              </a>
              <a
                className="contact-wa"
                href={waLink('Hi Lucent Stills! I want a quote for product visuals.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={WA_ICON} alt="" />
                WhatsApp us instead
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit}>
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
            <label className="modal-glass-input">
              <span>The brief, in one breath</span>
              <textarea
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What are we shooting, for whom, and how soon?"
              />
            </label>
            <button type="submit" className="btn btn-rust magnetic">
              Send it over on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
