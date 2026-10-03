import { useCallback, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { sports } from '../../data/tisData';
import Button from './Button';

const pad = (n) => String(n + 1).padStart(2, '0');

/**
 * Large preview for one sport. `index` is the open sport (null = closed).
 * Esc closes, arrow keys / chips / buttons move between sports, focus stays inside the dialog.
 */
export default function SportModal({ index, onChange, onClose }) {
  const open = index !== null;
  const dialog = useRef(null);
  const closeButton = useRef(null);
  const sport = open ? sports[index] : null;

  const step = useCallback(
    (dir) => onChange((index + dir + sports.length) % sports.length),
    [index, onChange]
  );

  // Runs only when the dialog opens/closes: lock page scroll and move focus in.
  useEffect(() => {
    if (!open) return undefined;
    closeButton.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'Tab') {
        // Keep Tab inside the dialog.
        const items = dialog.current.querySelectorAll('button, a[href]');
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, step, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
        >
          <motion.div
            ref={dialog}
            role="dialog"
            aria-modal="true"
            aria-label={`${sport.name} preview`}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid max-h-[92svh] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-card text-fg md:grid-cols-[1.5fr_1fr]"
          >
            <button
              ref={closeButton}
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-crimson"
            >
              <X aria-hidden="true" />
            </button>

            <div className="relative min-h-[260px] overflow-hidden bg-black md:min-h-[480px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={sport.slug}
                  src={`/images/sports/${sport.slug}.webp`}
                  alt={`${sport.name} at Tulas International School`}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>

            <div className="flex flex-col p-7 sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-tealink">
                {pad(index)} / {sports.length}
              </p>
              <motion.h3
                key={sport.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-2 font-display text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold uppercase leading-none"
              >
                {sport.name}
              </motion.h3>

              <ul aria-label="All sports" className="mt-8 flex flex-wrap gap-2">
                {sports.map((s, i) => (
                  <li key={s.slug}>
                    <button
                      type="button"
                      onClick={() => onChange(i)}
                      aria-current={i === index}
                      className={`min-h-[36px] rounded-full border px-3 text-xs font-bold uppercase tracking-wide transition-colors ${
                        i === index ? 'border-crimson bg-crimson text-white' : 'border-line/25 hover:border-accent hover:text-accent'
                      }`}
                    >
                      {s.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                {[-1, 1].map((dir) => (
                  <button
                    key={dir}
                    type="button"
                    onClick={() => step(dir)}
                    aria-label={dir < 0 ? 'Previous sport' : 'Next sport'}
                    className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-line/30 transition-colors hover:border-accent hover:text-accent"
                  >
                    {dir < 0 ? <ArrowLeft aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}
                  </button>
                ))}
                <Button href="#admissions" onClick={onClose}>
                  Enquire Now
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}