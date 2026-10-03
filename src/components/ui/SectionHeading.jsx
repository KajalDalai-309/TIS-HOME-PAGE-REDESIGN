import MaskText from '../animation/MaskText';

/** Eyebrow + masked display lines. `lines` is an array of strings or JSX, one per visual line. */
export default function SectionHeading({ id, eyebrow, lines, className = '', eyebrowClass = 'text-tealink' }) {
  return (
    <div className={className}>
      {eyebrow && <p className={`mb-4 text-sm font-bold uppercase tracking-[0.2em] ${eyebrowClass}`}>{eyebrow}</p>}
      <h2 id={id} className="font-display text-[clamp(2.25rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-tight">
        {lines.map((line, i) => (
          <MaskText key={i} delay={i * 0.08}>
            {line}
          </MaskText>
        ))}
      </h2>
    </div>
  );
}
