import { about } from '../../data/tisData';
import RevealWrapper from '../animation/RevealWrapper';

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-4 py-16 sm:py-24 sm:px-6">
      <RevealWrapper>
        <h2 id="about-title" className="mx-auto max-w-4xl text-center font-display text-[clamp(1.4rem,3.2vw,2.75rem)] font-extrabold leading-tight">
          {about.established}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-center text-base sm:text-lg text-muted">{about.excellence}</p>
      </RevealWrapper>

      <div className="mt-16 sm:mt-24 space-y-16 sm:space-y-24">
        {about.quotes.map((q, i) => (
          <RevealWrapper key={q.image}>
            <article className={`flex flex-col items-center gap-8 md:flex-row md:gap-10 ${i % 2 ? 'md:flex-row-reverse' : ''}`}>
              <img
                src={`/images/misc/${q.image}.webp`}
                alt="Tulas student"
                width="560"
                height="510"
                loading="lazy"
                className="w-52 sm:w-64 md:w-80 shrink-0 rounded-2xl object-cover"
              />
              <div className="text-center md:text-left">
                <h3 className="font-display text-[clamp(1.5rem,4vw,3rem)] font-extrabold leading-tight text-accent">{q.title}</h3>
                <p className="mt-4 max-w-xl text-base sm:text-lg text-muted">{q.body}</p>
              </div>
            </article>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
