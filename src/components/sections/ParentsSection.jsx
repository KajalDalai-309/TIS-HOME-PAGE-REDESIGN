import { useState } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { parents } from '../../data/tisData';

function Reel({ n, featured = false }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: n * 0.1 }}
      className={`
        relative overflow-hidden rounded-[2.5rem] border-4 border-ink bg-black shadow-2xl
        transition-transform duration-300 hover:-translate-y-2
        ${featured
          ? 'w-full max-w-[320px] sm:max-w-[340px] z-10 scale-100 sm:scale-105'
          : 'w-full max-w-[270px] sm:max-w-[290px] opacity-90 hover:opacity-100'
        }
      `}
    >
      {playing ? (
        <video
          src={`/videos/reel-${n}.mp4`}
          poster={`/videos/reel-${n}.jpg`}
          controls
          autoPlay
          playsInline
          className="aspect-[9/16] w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          data-cursor="Play"
          aria-label={`Play parent video ${n}`}
          className="group relative block w-full"
        >
          <img
            src={`/videos/reel-${n}.jpg`}
            alt=""
            width="360"
            height="640"
            loading="lazy"
            className="aspect-[9/16] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Dark gradient overlay */}
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Play button */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className={`
              flex items-center justify-center rounded-full bg-crimson shadow-xl
              transition-all duration-300 group-hover:scale-110 group-hover:shadow-crimson/50
              ${featured ? 'h-20 w-20' : 'h-16 w-16'}
            `}>
              <Play className={`fill-white text-white ml-1 ${featured ? 'h-9 w-9' : 'h-7 w-7'}`} aria-hidden="true" />
            </span>
          </span>

          {/* Play label */}
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
            Play
          </span>
        </button>
      )}
    </motion.li>
  );
}

export default function ParentsSection() {
  return (
    <section aria-labelledby="parents-title" className="mx-auto max-w-6xl px-4 py-12 sm:py-16 sm:px-6">
      {/* Heading */}
      <div className="flex items-start gap-3">
        <span className="font-display text-[3rem] sm:text-[3.5rem] leading-none text-crimson select-none" aria-hidden="true">&quot;</span>
        <h2 id="parents-title" className="font-display text-[clamp(1.4rem,3.5vw,2.4rem)] font-extrabold leading-tight">
          From The{' '}
          <span className="italic-accent text-accent">Parents</span>
        </h2>
      </div>

      <p className="mt-4 max-w-2xl border-l-2 border-line/30 pl-4 text-sm sm:text-base leading-relaxed text-muted">
        {parents.quote}
      </p>

      {/* Phone video grid — horizontal scroll on mobile */}
      <div className="mt-10 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto pb-4">
        <ul className="flex items-center gap-5 sm:gap-8 sm:justify-center w-max sm:w-full">
          {parents.videos.map((n, i) => (
            <Reel key={n} n={n} featured={i === 1} />
          ))}
        </ul>
      </div>

      <p className="mt-6 text-center text-sm text-muted/60 font-medium tracking-wide">
        Hear directly from parents about life at Tulas
      </p>
    </section>
  );
}
