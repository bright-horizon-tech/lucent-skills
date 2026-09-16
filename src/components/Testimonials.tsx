import { TESTI_IMGS } from '../assets';

const TESTIMONIALS = [
  {
    quote:
      'We started with just product photography for Miss Astute, and it has grown into so much more — social media graphics, carousels and even reels. The team understands jewellery: the macros are sharp, the sets look royal, and every new drop matches the last one. It never feels like generated work; it feels like our brand.',
    name: 'Parul',
    role: 'Miss Astute · Bangalore',
    detail: 'Product photography · Graphics · Carousels · Reels',
    img: TESTI_IMGS.missastute,
  },
  {
    quote:
      'Our products are in the FMCG category — primarily honey and spices. The output was great, to be honest. We told Aditya what we wanted, and he delivered exactly that. He also gave his own inputs and experimented with different approaches for us, which we really appreciated. As I said, working with Aditya is great — he has a good grasp of what he does and understands what the client needs. The turnaround time was just a day, and the revisions were also very quick. The pricing is a bit on the higher side, but I\u2019m good with it as long as the output I\u2019m getting is what I wanted. I\u2019d definitely suggest Aditya\u2019s work to brand owners and social media managers. They can get a lot of value from working with him.',
    name: 'Altamash',
    role: 'By The Ganges',
    detail: 'FMCG · Honey & spices',
    img: TESTI_IMGS.ganges,
  },
  {
    quote:
      'We\u2019ve been working together for almost 5 months now — ad creatives, carousel posts, and Instagram story edits. One of the biggest issues I faced with other freelancers was timely delivery; thankfully, that was never a concern. He was always available, quick to respond, and the service was consistently fast and kind. The quality of the creatives has always been top-notch. Every design delivered the right theme and vibe exactly as expected — professional, unique, and never repetitive. He understands the brand well, which is why I keep coming back. Even with very hectic deadlines, he has consistently completed the work well before the agreed delivery time. The pricing is very fair, and I truly appreciate the discounts and combo pricing he offers to his regular clients. Most importantly, he has the ability to recreate my message, text, and vision into creatives exactly as I imagine them, without confusion. I would definitely recommend Aditya to other businesses.',
    name: 'Shwetha',
    role: 'The Aurorah Store',
    detail: 'Ad creatives · Carousels · Story edits',
    img: TESTI_IMGS.aurorah,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testi-head">
          <span className="eyebrow" data-reveal>
            Word of mouth
          </span>
          <h2 className="h-mid" data-reveal>
            The brands who stopped
            <br />
            booking studios.
          </h2>
        </div>

        <div className="testi-grid testi-grid--two" data-stagger>
          {TESTIMONIALS.map((t) => (
            <figure className="testi-card" key={t.name}>
              <div className="testi-stars" aria-hidden="true">
                ★★★★★
              </div>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <img src={t.img} alt={`${t.role} work sample`} loading="lazy" />
                <div>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                  <em>{t.detail}</em>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
