import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { schoolInfo } from '../../data/tisData';
import MaskText from '../animation/MaskText';

export default function WhyTisSection() {
  const [playing, setPlaying] = useState(false);
  const video = useRef(null);

  return (
    <section id="why-tis" aria-labelledby="why-title" className="bg-ink px-4 py-24 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 id="why-title" className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
          <MaskText>Tulas is...</MaskText>
          <MaskText delay={0.08}>
            Made for the <span className="italic-accent text-teal">future</span>
          </MaskText>
        </h2>

        <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-black">
          {playing ? (
            <video ref={video} src="/videos/why-tis.mp4" poster="/videos/why-tis.jpg" controls autoPlay playsInline className="aspect-video w-full" />
          ) : (
            <button type="button" onClick={() => setPlaying(true)} data-cursor="Play" aria-label="Play film: Why Tulas International School" className="group relative block w-full">
              <img src="/videos/why-tis.jpg" alt="" width="960" height="540" loading="lazy" className="aspect-video w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-crimson transition-transform group-hover:scale-110">
                  <Play className="ml-1 h-10 w-10 fill-white" aria-hidden="true" />
                </span>
              </span>
            </button>
          )}
        </div>

        <a
          href={schoolInfo.links.tour}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="Explore"
          className="group mt-16 block border-t border-white/20 pt-10"
        >
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Dive into our...</span>
          <span className="mt-2 block font-display text-[clamp(2.75rem,10vw,8rem)] font-extrabold uppercase leading-none transition-colors group-hover:text-teal">
            Virtual Tour <span aria-hidden="true">↗</span>
          </span>
        </a>
      </div>
    </section>
  );
}
