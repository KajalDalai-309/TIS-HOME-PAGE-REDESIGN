import { useEffect, useRef } from 'react';
import { animate, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';

/** Counts from 0 to `to` once the element scrolls into view. Returns a ref and a MotionValue (no re-renders). */
export function useCountUp(to, duration = 1.6) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const reduced = useReducedMotion();
  const progress = useMotionValue(0);
  const value = useTransform(progress, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return undefined;
    if (reduced) {
      progress.set(to);
      return undefined;
    }
    const controls = animate(progress, to, { duration, ease: 'easeOut' });
    return () => controls.stop();
  }, [inView, reduced, to, duration, progress]);

  return { ref, value };
}
