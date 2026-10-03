import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { rankings } from '../../data/tisData';
import { useCountUp } from '../../hooks/useCountUp';
import RevealWrapper from '../animation/RevealWrapper';
import SectionHeading from '../ui/SectionHeading';

/* Extracts number from rank string e.g. "#1" → 1, "Top 10" → 10 */
function RankNumber({ rank }) {
  const num = parseInt(rank.replace(/\D/g, ''), 10);
  const { ref, value } = useCountUp(num || 1, 1.2);

  if (!num) {
    return (
      <p className="mt-6 font-display text-8xl font-extrabold leading-none text-crimson">
        {rank}
      </p>
    );
  }

  const prefix = rank.replace(/[0-9]/g, '').trim(); // "#" or "Top" etc.

  return (
    <p className="mt-6 font-display text-8xl font-extrabold leading-none text-crimson">
      <span ref={ref}>
        {prefix && <span>{prefix}</span>}
        <motion.span>{value}</motion.span>
      </span>
    </p>
  );
}

export default function RankingsSection() {
  return (
    <section id="rankings" aria-labelledby="rankings-title" className="focus-white bg-crimson px-4 py-14 sm:py-24 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        <RevealWrapper>
          <SectionHeading
            id="rankings-title"
            eyebrow="Top Boarding School"
            eyebrowClass="text-white/85"
            lines={['Our', <span key="r" className="italic-accent">Rankings</span>]}
          />
        </RevealWrapper>
        <ul className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rankings.map((r, i) => (
            <li key={r.place}>
              <RevealWrapper delay={i * 0.08} className="h-full">
                <article className="flex h-full flex-col rounded-[2rem] bg-white p-7 text-ink transition-transform duration-300 hover:-translate-y-2">
                  <Trophy className="h-7 w-7 text-crimson" aria-hidden="true" />
                  <RankNumber rank={r.rank} />
                  <h3 className="mt-3 font-display text-xl sm:text-2xl font-extrabold">{r.place}</h3>
                  <p className="mt-2 text-sm text-ink/75">{r.text}</p>
                </article>
              </RevealWrapper>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
