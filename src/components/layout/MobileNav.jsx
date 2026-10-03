import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { navLinks, schoolInfo } from '../../data/tisData';
import Button from '../ui/Button';

export default function MobileNav({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          initial={{ clipPath: 'circle(0% at 100% 0%)' }}
          animate={{ clipPath: 'circle(150% at 100% 0%)' }}
          exit={{ clipPath: 'circle(0% at 100% 0%)' }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[60] flex flex-col bg-crimson-dark p-6 text-white lg:hidden"
        >
          <button type="button" onClick={onClose} aria-label="Close menu" className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/40">
            <X aria-hidden="true" />
          </button>
          <nav aria-label="Mobile" className="mt-6 flex flex-1 flex-col justify-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                className="flex min-h-[56px] items-center font-display text-4xl font-extrabold uppercase"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
          <Button variant="light" href={schoolInfo.links.apply}>
            Apply Now
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
