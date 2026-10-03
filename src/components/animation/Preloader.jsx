import { useEffect } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

/** Crimson curtain with a 0-100 counter. Calls onDone, then the parent unmounts it (exit slides it up). */
export default function Preloader({ onDone }) {
  const progress = useMotionValue(0);
  const label = useTransform(progress, (v) => Math.round(v).toString().padStart(2, '0'));

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 1.4,
      ease: [0.65, 0, 0.35, 1],
      onComplete: () => setTimeout(onDone, 150),
    });
    return () => controls.stop();
  }, [progress, onDone]);

  return (
    <motion.div
      role="status"
      aria-label="Loading"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[10000] flex flex-col justify-between bg-crimson p-6 text-white md:p-10"
    >
      <p className="font-display text-lg font-extrabold uppercase tracking-wide">
        Let&apos;s do <span className="italic-accent">it</span>
      </p>
      <motion.p className="font-display text-[26vw] font-extrabold leading-none md:text-[18vw]">{label}</motion.p>
    </motion.div>
  );
}
