import { useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/** Draggable row with prev/next buttons (keyboard and touch friendly). Children are the slides. */
export default function DragCarousel({ children, label }) {
  const wrap = useRef(null);
  const track = useRef(null);
  const x = useMotionValue(0);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    const measure = () => setLimit(Math.max(0, track.current.scrollWidth - wrap.current.clientWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrap.current);
    ro.observe(track.current);
    return () => ro.disconnect();
  }, []);

  const step = (dir) => {
    const next = Math.min(0, Math.max(-limit, x.get() - dir * wrap.current.clientWidth * 0.8));
    animate(x, next, { duration: 0.5, ease: [0.22, 1, 0.36, 1] });
  };

  return (
    <div role="region" aria-label={label}>
      <div ref={wrap} className="overflow-hidden" data-cursor="Drag">
        <motion.ul
          ref={track}
          drag="x"
          dragConstraints={{ left: -limit, right: 0 }}
          dragElastic={0.08}
          style={{ x }}
          className="flex w-max cursor-grab gap-5 active:cursor-grabbing"
        >
          {children}
        </motion.ul>
      </div>
      <div className="mt-6 flex gap-3">
        {[-1, 1].map((dir) => (
          <button
            key={dir}
            type="button"
            onClick={() => step(dir)}
            aria-label={dir < 0 ? `Previous ${label}` : `Next ${label}`}
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-line/30 transition-colors hover:border-accent hover:text-accent"
          >
            {dir < 0 ? <ChevronLeft aria-hidden="true" /> : <ChevronRight aria-hidden="true" />}
          </button>
        ))}
      </div>
    </div>
  );
}
