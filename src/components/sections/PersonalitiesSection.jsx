import DragCarousel from '../ui/DragCarousel';
import SectionHeading from '../ui/SectionHeading';

function PersonCard({ person }) {
  return (
    <li className="w-[270px] shrink-0 overflow-hidden rounded-3xl border border-line/15 bg-bg sm:w-[300px]">
      <img
        src={`/images/people/${person.slug}.webp`}
        alt={person.name}
        width="420"
        height="420"
        loading="lazy"
        draggable="false"
        className="pointer-events-none h-64 w-full object-cover object-top"
      />
      <div className="p-5">
        <h3 className="font-display text-lg font-extrabold leading-snug text-accent">{person.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{person.note}</p>
      </div>
    </li>
  );
}

export default function PersonalitiesSection({ personalities, leaders }) {
  return (
    <section aria-labelledby="people-title" className="bg-card px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-20">
        <div>
          <SectionHeading id="people-title" eyebrow="Sports Person/Social Media Influencers" lines={['Influential', <span key="p" className="italic-accent">Personalities</span>, 'On Campus']} />
          <div className="mt-12">
            <DragCarousel label="influential personalities">
              {personalities.map((p) => <PersonCard key={p.slug} person={p} />)}
            </DragCarousel>
          </div>
        </div>
        <div>
          <h3 className="mb-10 font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold">
            Leaders of <span className="italic-accent text-accent">India</span>
          </h3>
          <DragCarousel label="leaders of India">
            {leaders.map((p) => <PersonCard key={p.slug} person={p} />)}
          </DragCarousel>
        </div>
      </div>
    </section>
  );
}
