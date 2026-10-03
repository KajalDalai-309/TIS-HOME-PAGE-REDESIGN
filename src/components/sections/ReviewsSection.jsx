import DragCarousel from '../ui/DragCarousel';
import RevealWrapper from '../animation/RevealWrapper';
import SectionHeading from '../ui/SectionHeading';

function Avatar({ review }) {
  if (review.avatar) {
    return <img src={`/images/reviews/${review.avatar}.webp`} alt="" width="160" height="160" loading="lazy" draggable="false" className="pointer-events-none h-16 w-16 rounded-full object-cover" />;
  }
  const initials = review.name.replace('Mrs ', '').split(' ').map((w) => w[0]).slice(0, 2).join('');
  return <span aria-hidden="true" className="flex h-16 w-16 items-center justify-center rounded-full bg-crimson font-display text-xl font-extrabold text-white">{initials}</span>;
}

export default function ReviewsSection({ reviews }) {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="relative px-4 py-14 sm:py-24 sm:px-6"
      style={{
        backgroundImage: 'url(/images/reviews-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay so cards stay readable */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <RevealWrapper>
          <SectionHeading id="reviews-title" lines={[<span key="g" className="italic-accent text-accent">Google</span>, <span key="r" className="text-white">Reviews</span>]} />
        </RevealWrapper>
        <RevealWrapper delay={0.12}>
          <div className="mt-12">
            <DragCarousel label="Google reviews">
              {reviews.map((r) => (
                <li key={r.name} className="w-[290px] shrink-0 rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-md sm:w-[340px]">
                  <div className="flex items-center gap-4">
                    <Avatar review={r} />
                    <div>
                      <h3 className="font-display text-lg font-extrabold leading-tight text-white">{r.name}</h3>
                      <p className="text-sm text-tealink">{r.relation}</p>
                    </div>
                  </div>
                  <p className="mt-5 leading-relaxed text-white/80">{r.text}</p>
                </li>
              ))}
            </DragCarousel>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
