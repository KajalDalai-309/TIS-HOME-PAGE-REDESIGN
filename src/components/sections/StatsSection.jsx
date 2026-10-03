import { motion } from 'framer-motion';
import { stats } from '../../data/tisData';
import { useCountUp } from '../../hooks/useCountUp';
import RevealWrapper from '../animation/RevealWrapper';

function Stat({ to, suffix, label }) {
  const { ref, value } = useCountUp(to);
  return (
    <div className="border-t-2 border-line/20 pt-6">
      <p className="font-display text-[clamp(2.75rem,6.5vw,5.5rem)] font-extrabold leading-none text-accent">
        <span ref={ref}>
          <motion.span>{value}</motion.span>
        </span>
        {suffix}
      </p>
      <p className="mt-3 text-sm font-bold uppercase tracking-[0.15em] text-muted">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section aria-label="TIS at a glance" className="bg-card px-4 py-14 sm:py-24 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-10 sm:gap-12 lg:grid-cols-2">
        <RevealWrapper>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-14">
            {stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </RevealWrapper>
        <RevealWrapper delay={0.15}>
          <div className="grid grid-cols-2 gap-4" aria-hidden="true">
            <img src="/images/misc/campus-3.webp" alt="" width="760" height="760" loading="lazy" className="col-span-1 row-span-2 h-full w-full rounded-[2rem] object-cover" />
            <img src="/images/misc/campus-2.webp" alt="" width="760" height="428" loading="lazy" className="h-full w-full rounded-[2rem] object-cover" />
            <img src="/images/misc/campus-1.webp" alt="" width="760" height="464" loading="lazy" className="h-full w-full rounded-[2rem] object-cover" />
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
