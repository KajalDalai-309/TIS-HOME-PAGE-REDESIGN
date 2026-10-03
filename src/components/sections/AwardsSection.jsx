import RevealWrapper from '../animation/RevealWrapper';
import SectionHeading from '../ui/SectionHeading';

/* 3 flip-card slots — front = existing award, back = new award photo */
const flipCards = [
  {
    front: { src: '/images/awards/top10.webp',            alt: 'Top 10 Best Boarding School of India — Education Today' },
    back:  { src: '/images/awards/award-educational.jpg', alt: 'Educational Reformer of the Year — Uttarakhand Swarnim Award 2023' },
    col: 'md:col-span-7',
  },
  {
    front: { src: '/images/awards/best-residential.webp',  alt: 'Best Boarding School in Uttarakhand' },
    back:  { src: '/images/awards/award-thetop.jpg',       alt: 'The Top School Educator Award — Indian School Awards' },
    col: 'md:col-span-5',
  },
  {
    front: { src: '/images/awards/icon-awards.webp',        alt: 'Uttarakhand Icon Awards 2024' },
    back:  { src: '/images/awards/award-international.png', alt: 'International School Award — Tulas International School' },
    col: 'md:col-span-6 md:col-start-4',
  },
];

export default function AwardsSection() {
  return (
    <section aria-labelledby="awards-title" className="mx-auto max-w-6xl px-4 py-14 sm:py-24 sm:px-6">
      <SectionHeading id="awards-title" lines={[<span key="a" className="italic-accent text-accent">Awards</span>]} />
      <p className="mt-4 max-w-md text-lg text-muted">
        We believe in celebrating the hard work and perseverance of the best!
      </p>
      <p className="mt-1 text-sm text-muted/60">Hover over an award to reveal more ✦</p>

      <ul className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-12">
        {flipCards.map((card, i) => (
          <li key={i} className={`${card.col} sm:col-span-1`}>
            <RevealWrapper delay={i * 0.1}>
              {/* Flip container */}
              <div
                className="group relative w-full"
                style={{ perspective: '1000px' }}
              >
                {/* Inner — rotates on hover */}
                <div
                  className="relative w-full transition-transform duration-700 ease-in-out"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateY(0deg)',
                  }}
                  /* CSS hover handled via Tailwind group */
                >
                  {/* FRONT */}
                  <div style={{ backfaceVisibility: 'hidden' }}>
                    <img
                      src={card.front.src}
                      alt={card.front.alt}
                      width="900"
                      height="520"
                      loading="lazy"
                      className={`w-full rounded-[2rem] shadow-xl transition-transform duration-500
                        group-hover:[transform:rotateY(180deg)] group-hover:opacity-0`}
                      style={{ transition: 'transform 0.65s ease, opacity 0.3s ease' }}
                    />
                  </div>
                </div>

                {/* BACK — absolutely on top, hidden until hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{ transition: 'opacity 0.35s ease 0.2s' }}
                >
                  <img
                    src={card.back.src}
                    alt={card.back.alt}
                    width="900"
                    height="520"
                    loading="lazy"
                    className="h-full w-full rounded-[2rem] object-cover shadow-2xl"
                  />
                </div>
              </div>
            </RevealWrapper>
          </li>
        ))}
      </ul>
    </section>
  );
}
