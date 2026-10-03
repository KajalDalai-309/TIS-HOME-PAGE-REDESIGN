import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useFinePointer } from '../../hooks/useFinePointer';

const INTERACTIVE = '[data-cursor], a, button, input, select, textarea, label';

/**
 * Follower ring. Position runs through motion values (no React re-render per mouse move).
 * Elements can set data-cursor="Drag" to show a label inside the ring.
 */
export default function CustomCursor() {
  const fine = useFinePointer();
  const [visible, setVisible] = useState(false);
  const [target, setTarget] = useState({ active: false, label: '' });
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 32, stiffness: 520, mass: 0.5 });
  const sy = useSpring(y, { damping: 32, stiffness: 520, mass: 0.5 });

  useEffect(() => {
    if (!fine) return undefined;
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e) => {
      const el = e.target instanceof Element ? e.target.closest(INTERACTIVE) : null;
      setTarget({ active: Boolean(el), label: el?.dataset.cursor ?? '' });
    };
    const onLeave = () => setVisible(false);
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [fine, x, y]);

  if (!fine) return null;

  const scale = target.label ? 1 : target.active ? 0.5 : 0.2;

  return (
    <motion.div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[9999]" style={{ x: sx, y: sy }}>
      <motion.div
        animate={{ scale, opacity: visible ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        className="-ml-10 -mt-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-crimson text-xs font-bold uppercase tracking-wider text-white shadow-lg"
      >
        <span className={target.label ? 'opacity-100' : 'opacity-0'}>{target.label}</span>
      </motion.div>
    </motion.div>
  );
}
