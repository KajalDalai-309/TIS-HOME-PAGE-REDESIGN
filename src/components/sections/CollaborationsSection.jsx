import { collaborationCount } from '../../data/tisData';
import Marquee from '../animation/Marquee';

const logos = Array.from({ length: collaborationCount }, (_, i) => `c${String(i + 1).padStart(2, '0')}`);

export default function CollaborationsSection() {
  return (
    <section aria-labelledby="collab-title" className="py-20">
      <h2 id="collab-title" className="mb-10 text-center font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold uppercase">
        <span className="text-accent">{collaborationCount}+</span> Collaborations
      </h2>
      <Marquee duration={35}>
        {logos.map((id) => (
          <img key={id} src={`/images/collab/${id}.webp`} alt="Collaboration partner logo" width="100" height="100" loading="lazy" className="mx-4 h-24 w-24 rounded-2xl bg-white object-contain p-2 shadow" />
        ))}
      </Marquee>
    </section>
  );
}
