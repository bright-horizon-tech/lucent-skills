const base = import.meta.env.BASE_URL;
const p = (f: string) => `${base}assets/01-portrait/${f}.webp`;
const s = (f: string) => `${base}assets/02-square/${f}.webp`;

export interface AssetItem {
  src: string;
  title: string;
  w: number;
  h: number;
}

const A = (src: string, title: string, w: number, h: number): AssetItem => ({ src, title, w, h });

/* ---- shared dimension presets ---- */
const SQ = [1254, 1254] as const;
const AD = [941, 1672] as const; // 9:16 ad creative
const BAG = [896, 1152] as const; // 7:9 handbag
const BAG2 = [928, 1120] as const; // 5:6 black handbag
const SP3 = [688, 912] as const; // 3:4 spice pack shot

/* ============================================================
   HERO COLLAGE (all squares — shown at native 1:1, no crops)
   ============================================================ */
export const HERO = {
  left1: A(s('red-gemstone-necklace-set-full-shot'), 'Red gemstone necklace set', ...SQ),
  left2: A(s('must-include-earrings-on-model-shot'), 'Earrings on model', ...SQ),
  left3: A(s('peach-necklace-full-set-white-bg-studio-shot'), 'Peach necklace studio set', ...SQ),
  left4: A(s('must-include-ring-closeup'), 'Ring close-up', ...SQ),
  right1: A(s('attitude-model'), 'Attitude model shot', ...SQ),
  right2: A(s('red-gemstone-necklace-closeup'), 'Necklace macro', ...SQ),
  right3: A(s('peach-colored-handbag-kept-on-a-beige-background-lifestyle-shot'), 'Handbag lifestyle', 896, 1152),
  right4: A(s('peacock-earrcuff-on-whtie-bg'), 'Peacock earcuff', ...SQ),
} as const;

/* ============================================================
   WORLD CARDS
   ============================================================ */
export const WORLDS = {
  agency: A(s('peach-colored-handbag-kept-on-a-beige-background-lifestyle-shot'), 'Studio lifestyle production', 896, 1152),
  brand: A(s('must-include-earrings-on-model-shot'), 'Signature earrings on model', ...SQ),
} as const;

/* ============================================================
   GALLERY — grouped by client / category, native ratios
   ============================================================ */
export const GALLERY_JEWELRY: AssetItem[] = [
  A(s('must-include-earrings'), 'Must-include earrings', ...SQ),
  A(s('must-include-earrings-on-model-shot'), 'Earrings on model', ...SQ),
  A(s('must-include-ring'), 'Statement ring', ...SQ),
  A(s('must-include-ring-being-worn'), 'Ring worn', ...SQ),
  A(s('must-include-ring-closeup'), 'Ring close-up', ...SQ),
  A(s('red-gemstone-necklace-set-full-shot'), 'Red gemstone set', ...SQ),
  A(s('red-gemstone-necklace-being-worn'), 'Necklace worn', ...SQ),
  A(s('red-gemstone-necklace-closeup'), 'Necklace macro', ...SQ),
  A(s('red-necklace-set-with-earrings-on-a-stylish-bg'), 'Necklace set on styled bg', ...SQ),
  A(s('hathphool-being-worn'), 'Hathphool worn', ...SQ),
  A(s('hathphool-on-cylinder'), 'Hathphool on cylinder', ...SQ),
  A(s('jhumka'), 'Jhumka', ...SQ),
  A(s('long-jhumka'), 'Long jhumka', ...SQ),
  A(s('peacock-earcuff'), 'Peacock earcuff', ...SQ),
  A(s('peacock-earrcuff-on-whtie-bg'), 'Peacock earcuff white bg', ...SQ),
  A(s('multi-stone-bracelet-being-worn'), 'Multi-stone bracelet worn', ...SQ),
  A(s('multi-stone-bracelet-closeup'), 'Bracelet close-up', ...SQ),
  A(s('multistone-bracelet-full-shot'), 'Bracelet full shot', ...SQ),
  A(s('cinematic-shot-multi-stone-bracelet'), 'Cinematic bracelet shot', ...SQ),
  A(s('star-and-moon-bracelet'), 'Star & moon bracelet', ...SQ),
  A(s('turquoise-stone-bracelet'), 'Turquoise bracelet', ...SQ),
  A(s('colorful-bangle-being-worn'), 'Bangle worn', ...SQ),
  A(s('single-bangle'), 'Single bangle', ...SQ),
  A(s('double-bangle'), 'Double bangle', ...SQ),
  A(s('red-and-green-bangle'), 'Red & green bangle', ...SQ),
  A(s('anklet'), 'Anklet', ...SQ),
  A(s('blue-ring-on-a-table'), 'Blue ring on table', ...SQ),
  A(s('white-ring-on-a-black-granite'), 'White ring on granite', ...SQ),
  A(s('broock'), 'Brooch', ...SQ),
  A(s('earring-on-staircase'), 'Earring on staircase', ...SQ),
  A(s('green-earring-necklace-set-being-worn'), 'Green set worn', ...SQ),
  A(s('necklace-set-lifestyle-shot'), 'Necklace set lifestyle', ...SQ),
  A(s('sanskrit-based-earring'), 'Sanskrit earring', ...SQ),
  A(s('bee-shaped-earring-closeup'), 'Bee earring close-up', ...SQ),
  A(s('bird-shaped-earring'), 'Bird earring', ...SQ),
  A(s('earrcuff'), 'Earcuff', ...SQ),
  A(s('earring-beign-worn'), 'Earring worn', ...SQ),
  A(s('spider-shaped-handcuff'), 'Spider handcuff', ...SQ),
  A(s('attitude-model'), 'Attitude model shot', ...SQ),
  A(s('model-shot'), 'Model shot', ...SQ),
  A(s('nail-extension'), 'Nail extension creative', ...SQ),
];

export const GALLERY_COSMETICS: AssetItem[] = [
  A(s('ayurvedic-cream-carousel-page-1'), 'Cream carousel · Cover', ...SQ),
  A(s('ayurvedic-cream-carousel-page-2'), 'Cream carousel · 02', ...SQ),
  A(s('ayurvedic-cream-carousel-page-3'), 'Cream carousel · 03', ...SQ),
  A(s('ayurvedic-cream-carousel-page-4'), 'Cream carousel · 04', ...SQ),
  A(s('ayurvedic-cream-carousel-page-5'), 'Cream carousel · 05', ...SQ),
  A(s('ayurvedic-cream-carousel-page-6'), 'Cream carousel · End', ...SQ),
];

export const GALLERY_SPICES: AssetItem[] = [
  A(s('strength-spice-mix'), 'Strength spice mix', ...SP3),
  A(s('herby-eggs-spice-mix-whit-ebg'), 'Herby eggs', ...SP3),
  A(s('middle-eastern-house-spice-product-photography-white-studio-background'), 'Middle Eastern house spice', ...SP3),
  A(s('all-spices-lined-up'), 'All spices lined up', ...SQ),
  A(p('spice-ingredient-list'), 'Spice ingredient list', 1441, 1990),
  A(s('spice-mix-carousle-1'), 'Spice carousel · 01', ...SQ),
  A(s('spice-mix-carousle-2'), 'Spice carousel · 02', ...SQ),
  A(s('spice-mix-carousle-3'), 'Spice carousel · 03', ...SQ),
  A(s('spice-mix-carousle-4'), 'Spice carousel · 04', ...SQ),
  A(s('spice-mix-carousle-5'), 'Spice carousel · 05', ...SQ),
  A(s('recipe-infographic'), 'Recipe infographic', 1120, 928),
];

export const GALLERY_HONEY: AssetItem[] = [
  A(s('honey-strenght-theme-ad'), 'Honey · Strength theme ad', 1024, 1024),
  A(p('honey-bottles-being-arranged'), 'Honey bottles being arranged', ...AD),
];

export const GALLERY_ADS: AssetItem[] = [
  A(p('allspices-rainy-background-teej-festival-ad-the-creative'), 'Teej festival ad · Allspice', ...AD),
  A(p('ayurvedic-cosmetics-ad-creative'), 'Ayurvedic ad creative', ...AD),
  A(p('ayurvedic-cosmetics-ad-creative-1'), 'Ayurvedic ad creative · 02', ...AD),
  A(p('frozen-ayurvedic-cosmetics-ad'), 'Frozen ayurvedic ad', ...AD),
];

/* ============================================================
   CAROUSEL — related runs so neighbours belong together
   ============================================================ */
export const CAROUSEL: AssetItem[] = [
  // Run 1 — the must-include signature set
  A(s('must-include-earrings'), 'Signature earrings', ...SQ),
  A(s('must-include-earrings-on-model-shot'), 'Earrings on model', ...SQ),
  A(s('must-include-ring'), 'Signature ring', ...SQ),
  A(s('must-include-ring-being-worn'), 'Ring worn', ...SQ),
  A(s('must-include-ring-closeup'), 'Ring close-up', ...SQ),
  // Run 2 — spice social carousel
  A(s('spice-mix-carousle-1'), 'Spice carousel · 01', ...SQ),
  A(s('spice-mix-carousle-2'), 'Spice carousel · 02', ...SQ),
  A(s('spice-mix-carousle-3'), 'Spice carousel · 03', ...SQ),
  A(s('spice-mix-carousle-4'), 'Spice carousel · 04', ...SQ),
  A(s('spice-mix-carousle-5'), 'Spice carousel · 05', ...SQ),
  // Run 3 — ayurvedic cream carousel
  A(s('ayurvedic-cream-carousel-page-1'), 'Cream carousel · Cover', ...SQ),
  A(s('ayurvedic-cream-carousel-page-2'), 'Cream carousel · 02', ...SQ),
  A(s('ayurvedic-cream-carousel-page-3'), 'Cream carousel · 03', ...SQ),
  A(s('ayurvedic-cream-carousel-page-4'), 'Cream carousel · 04', ...SQ),
  A(s('ayurvedic-cream-carousel-page-5'), 'Cream carousel · 05', ...SQ),
  A(s('ayurvedic-cream-carousel-page-6'), 'Cream carousel · End', ...SQ),
  // Run 4 — red gemstone necklace story
  A(s('red-gemstone-necklace-set-full-shot'), 'Necklace set full shot', ...SQ),
  A(s('red-gemstone-necklace-being-worn'), 'Necklace worn', ...SQ),
  A(s('red-gemstone-necklace-closeup'), 'Necklace macro', ...SQ),
  A(s('red-necklace-set-with-earrings-on-a-stylish-bg'), 'Necklace set styled', ...SQ),
  // Run 5 — handbag story
  A(s('peach-colored-handbag-being-touched-by-a-hand'), 'Peach handbag · Touch', ...BAG),
  A(s('peach-colored-handbag-kept-on-a-beige-background-lifestyle-shot'), 'Peach handbag · Lifestyle', ...BAG),
  A(s('this-coloured-handbag-kept-on-a-black-glass-panel'), 'Handbag · Black glass', ...BAG),
  A(s('black-handbag'), 'Black handbag · Studio', ...BAG2),
  A(s('blackhandbag-lifestyle-shot'), 'Black handbag · Lifestyle', ...BAG2),
  // Run 6 — honey
  A(s('honey-strenght-theme-ad'), 'Honey · Strength ad', 1024, 1024),
  A(p('honey-bottles-being-arranged'), 'Honey bottles arranged', ...AD),
];

/* ============================================================
   TESTIMONIAL PORTRAITS
   ============================================================ */
export const TESTI_IMGS = {
  missastute: s('jhumka'),
  ganges: s('all-spices-lined-up'),
  aurorah: s('ayurvedic-cream-carousel-page-1'),
} as const;
