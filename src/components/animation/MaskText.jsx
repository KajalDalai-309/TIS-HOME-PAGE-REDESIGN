import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * One line of text that slides up from behind a mask.
 * The wrapper (not the moving text) is observed: a clipped, translated element would never count as "in view".
 * Pass `ready` to control it manually (hero, after the preloader); leave it undefined to play on scroll.
 */
export default function MaskText({ children, delay = 0, ready, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const show = ready === undefined ? inView : ready;

  return (
    <span ref={ref} className={`block overflow-hidden pb-[0.1em] ${className}`}>
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        animate={{ y: show ? 0 : '110%' }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
