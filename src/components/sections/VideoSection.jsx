import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import { schoolInfo } from '../../data/tisData';

function VideoPlayer() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().then(() => setPlaying(true)).catch(() => {});
        } else {
          video.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <div
      className="relative mt-10 overflow-hidden rounded-2xl"
      style={{ border: '5px solid #c0113a' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <video
        ref={videoRef}
        src="/videos/why-tis.mp4"
        poster="/videos/why-tis.jpg"
        playsInline
        muted
        loop
        preload="metadata"
        className="w-full object-cover"
        style={{ maxHeight: '65vh', display: 'block' }}
      />

      {/* Play / Pause overlay */}
      <motion.button
        onClick={togglePlay}
        animate={{ opacity: !playing || hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        aria-label={playing ? 'Pause video' : 'Play video'}
        className="absolute inset-0 flex items-center justify-center focus:outline-none"
      >
        <motion.span
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.94 }}
          className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-crimson/90 text-white shadow-2xl backdrop-blur-sm"
        >
          {playing
            ? <Pause className="h-7 w-7 sm:h-9 sm:w-9" />
            : <Play  className="h-7 w-7 sm:h-9 sm:w-9 translate-x-0.5" />}
        </motion.span>
      </motion.button>
    </div>
  );
}

export default function VideoSection() {
  return (
    <section
      id="school-video"
      aria-label="Tulas school video"
      className="bg-[#1a1a1a] px-4 py-14 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading — exactly like the reference screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-[clamp(2rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-white">
            Tulas Is…
            <br />
            Made for the{' '}
            <span className="italic-accent text-tealink">future</span>
          </h2>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <VideoPlayer />
        </motion.div>

        {/* Virtual Tour CTA — below video, like the reference */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 border-t border-white/10 pt-10"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-white/50">
            Dive into our…
          </p>
          <a
            href={schoolInfo.links.tour}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-wrap items-center gap-3 sm:gap-4 font-display text-[clamp(1.8rem,8vw,6.5rem)] font-extrabold uppercase leading-none text-white transition-colors hover:text-tealink"
          >
            Virtual Tour
            <span className="inline-flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-full border-2 border-white/30 transition-all group-hover:border-tealink group-hover:bg-tealink/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-9 sm:w-9 -rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
