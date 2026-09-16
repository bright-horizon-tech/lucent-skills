export const WHATSAPP_NUMBER = '919999999999';

export function waLink(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const WA_ICON = '/assets/WA%20Icon.svg';
