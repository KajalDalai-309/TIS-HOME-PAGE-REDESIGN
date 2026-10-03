import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Compass } from 'lucide-react';
import { hero, schoolInfo } from '../../data/tisData';
import MaskText from '../animation/MaskText';
import Magnetic from '../animation/Magnetic';
import Button from '../ui/Button';

export default function HeroSection({ ready }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  // 4 pairs of images (Basketball/Kathak -> Cricket/Karate -> Lab/Shooting -> Pottery/Art)
  // Moving from 0% to -75% slides each of the 4 slides (each 25% height) exactly into the center
  const yTranslate = useTransform(smoothProgress, [0, 1], ['0%', '-75%']);

  // Scroll arrow fades away quickly as soon as user starts scrolling
  const arrowOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);

  // Buttons reveal ONLY when the last picture pair (Pair 4) arrives; completely hidden before that
  const finaleOpacity = useTransform(smoothProgress, [0.72, 0.90], [0, 1]);
  const finaleY = useTransform(smoothProgress, [0.72, 0.90], [24, 0]);
  const finaleScale = useTransform(smoothProgress, [0.72, 0.90], [0.94, 1]);

  return (
    <section id="top" ref={containerRef} className="relative h-[360vh] bg-crimson">
      <div className="sticky top-[64px] sm:top-[72px] flex h-[calc(100svh-64px)] sm:h-[calc(100svh-72px)] items-center justify-center overflow-hidden bg-crimson select-none">
        
        {/* Left Column of Scrolling Orbs (4 images) */}
        <div className="pointer-events-none absolute left-[2%] sm:left-[3%] lg:left-[4%] top-0 h-full w-[25vw] max-w-[280px] min-w-[125px] z-10 overflow-hidden">
          <motion.div style={{ y: yTranslate }} className="flex flex-col h-[400%]">
            {hero.pairs.map((pair, idx) => (
              <div key={idx} className="flex h-[25%] items-center justify-center p-2">
                <img
                  src={pair.left.src}
                  alt={pair.left.alt}
                  width="440"
                  height="440"
                  className="h-auto w-full max-h-[75%] object-contain drop-shadow-2xl"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column of Scrolling Orbs (4 images) */}
        <div className="pointer-events-none absolute right-[2%] sm:right-[3%] lg:right-[4%] top-0 h-full w-[25vw] max-w-[280px] min-w-[125px] z-10 overflow-hidden">
          <motion.div style={{ y: yTranslate }} className="flex flex-col h-[400%]">
            {hero.pairs.map((pair, idx) => (
              <div key={idx} className="flex h-[25%] items-center justify-center p-2">
                <img
                  src={pair.right.src}
                  alt={pair.right.alt}
                  width="440"
                  height="440"
                  className="h-auto w-full max-h-[75%] object-contain drop-shadow-2xl"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Center Constant Text - Firmly locked in the middle */}
        <div className="relative z-20 mx-auto max-w-2xl px-4 text-center">
          <h1 className="font-display text-[clamp(3.5rem,9vw,7.5rem)] font-extrabold uppercase leading-[0.92] tracking-tight text-white drop-shadow-md">
            <span className="sr-only">Welcome to Tulas International School (TIS). </span>
            <span aria-hidden="true">
              <MaskText ready={ready} delay={0.2}>
                Let&apos;s do <span className="italic-accent">it</span>
              </MaskText>
              <MaskText ready={ready} delay={0.32}>
                with{' '}
                <span className="relative inline-block">
                  <span className="italic-accent">Tulas</span>
                  <svg viewBox="0 0 300 20" preserveAspectRatio="none" className="absolute -bottom-1 left-0 h-3 w-full" aria-hidden="true">
                    <motion.path
                      d="M4 12 C 60 2, 140 18, 296 6"
                      fill="none"
                      stroke="#f3d9a4"
                      strokeWidth="5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={ready ? { pathLength: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.7, ease: 'easeInOut' }}
                    />
                  </svg>
                </span>
              </MaskText>
            </span>
          </h1>

          {/* Intro text & CTA buttons reveal ONLY when the last picture pair arrives */}
          <motion.div
            style={{
              opacity: finaleOpacity,
              y: finaleY,
              scale: finaleScale,
            }}
            className="flex flex-col items-center"
          >
            <p className="mx-auto mt-4 sm:mt-5 max-w-md text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              {hero.intro}
            </p>

            <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-4">
              <Magnetic>
                <Button
                  variant="light"
                  href={schoolInfo.links.apply}
                  data-cursor="Apply"
                  className="shadow-xl text-sm sm:text-base px-8 py-3.5 hover:scale-105 transition-all"
                >
                  Apply Now
                </Button>
              </Magnetic>
              <Magnetic>
                <Button
                  variant="outline"
                  href={schoolInfo.links.tour}
                  data-cursor="Explore"
                  className="shadow-lg text-sm sm:text-base px-7 py-3.5 hover:scale-105 transition-all"
                >
                  <Compass className="h-5 w-5" aria-hidden="true" /> 360° Virtual Tour
                </Button>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint arrow on the first slide */}
        <motion.div
          style={{ opacity: arrowOpacity }}
          className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/80"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-white/70">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce text-white" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
