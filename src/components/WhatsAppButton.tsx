import { WA_ICON, waLink } from '../whatsapp';

export default function WhatsAppButton() {
  return (
    <a
      className="wa-btn"
      href={waLink('Hi Lucent Stills! I want a quote for product visuals.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <img src={WA_ICON} alt="" />
      <span className="wa-label">Chat on WhatsApp</span>
    </a>
  );
}
