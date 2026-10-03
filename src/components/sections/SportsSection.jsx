import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { sports } from '../../data/tisData';
import { useCountUp } from '../../hooks/useCountUp';
import MaskText from '../animation/MaskText';
import SportModal from '../ui/SportModal';

const INITIAL = 6;
// Tiles that are two columns wide on large screens. With these, the first 6 cards fill
// two full rows of four, and the remaining 10 fill three full rows (no gaps).
const WIDE = new Set([0, 5, 6, 14]);

// On devices that can hover, the name bar is hidden until hover/focus.
// On touch screens there is no hover, so it stays visible.
const reveal =
  '[@media(hover:hover)]:translate-y-3 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:transition-all [@media(hover:hover)]:duration-500 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:translate-y-0 [@media(hover:hover)]:group-focus-visible:opacity-100';

function SportCard({ sport, index, delay, onOpen }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={WIDE.has(index) ? 'lg:col-span-2' : ''}
    >
      <button
        type="button"
        onClick={(e) => onOpen(index, e.currentTarget)}
        data-cursor="View"
        aria-label={`${sport.name}, open preview`}
        className="group relative block h-full w-full overflow-hidden rounded-3xl text-left text-white"
      >
        <img
          src={`/images/sports/${sport.slug}.webp`}
          alt=""
          width="760"
          height="500"
          loading="lazy"
          draggable="false"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1 text-xs font-bold backdrop-blur-sm">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className={`absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 pt-16 ${reveal}`}>
          <span className="font-display text-2xl font-extrabold uppercase leading-none">{sport.name}</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-crimson">
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </span>
      </button>
    </motion.li>
  );
}

export default function SportsSection() {
  const [expanded, setExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const opener = useRef(null); // the card that opened the preview, so focus can go back to it
  const section = useRef(null);
  const { ref, value } = useCountUp(16);
  const visible = expanded ? sports : sports.slice(0, INITIAL);

  const openPreview = (index, el) => {
    opener.current = el;
    setOpenIndex(index);
  };
  const closePreview = () => {
    setOpenIndex(null);
    opener.current?.focus();
  };
  const toggle = () => {
    if (expanded) section.current?.scrollIntoView({ behavior: 'smooth' });
    setExpanded((v) => !v);
  };

  return (
    <section ref={section} id="sports" aria-labelledby="sports-title" className="bg-card px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 id="sports-title" className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight">
          <MaskText>Beyond the Classroom</MaskText>
          <MaskText delay={0.1}>
            <span className="italic-accent text-accent">Into the Game</span>
          </MaskText>
        </h2>

        <div className="mt-10 flex flex-wrap items-end gap-x-8 gap-y-2">
          <p className="font-display text-[clamp(5rem,14vw,10rem)] font-extrabold leading-none text-tealink">
            <span ref={ref}>
              <motion.span>{value}</motion.span>
            </span>
            +
          </p>
          <div className="pb-4">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-tealink">Sports</p>
            <p className="mt-2 max-w-md text-lg text-muted">
              It’s not just a facility. At Tulas it’s the foundation! Sports curated to bring joy and discipline to your life.
            </p>
          </div>
        </div>

        <ul id="sports-grid" className="mt-12 grid auto-rows-[240px] grid-cols-1 gap-4 sm:auto-rows-[280px] sm:grid-cols-2 lg:auto-rows-[300px] lg:grid-cols-4">
          {visible.map((s, i) => (
            <SportCard key={s.slug} sport={s} index={i} delay={i < INITIAL ? (i % 4) * 0.08 : (i - INITIAL) * 0.04} onOpen={openPreview} />
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={expanded}
            aria-controls="sports-grid"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-full border-2 border-line/30 px-7 text-sm font-bold uppercase tracking-wide transition-colors hover:border-accent hover:text-accent"
          >
            {expanded ? 'Show Fewer Sports' : `Explore All Sports (+${sports.length - INITIAL})`}
            <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
        </div>
      </div>

      <SportModal index={openIndex} onChange={setOpenIndex} onClose={closePreview} />
    </section>
  );
}