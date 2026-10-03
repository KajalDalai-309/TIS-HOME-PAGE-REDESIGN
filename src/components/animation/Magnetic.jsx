import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/** Pulls its child slightly toward the pointer. Does nothing on touch (no mousemove). */
export default function Magnetic({ children, strength = 0.3, className = '' }) {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  const onMove = (e) => {
    const box = ref.current.getBoundingClientRect();
    x.set((e.clientX - (box.left + box.width / 2)) * strength);
    y.set((e.clientY - (box.top + box.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} style={{ x, y }} onMouseMove={onMove} onMouseLeave={reset} className={`inline-block ${className}`}>
      {children}
    </motion.div>
  );
}
