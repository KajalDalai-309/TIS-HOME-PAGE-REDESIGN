/** Endless horizontal ticker. The second copy is hidden from assistive tech. */
export default function Marquee({ children, duration = 40, className = '' }) {
  return (
    <div className={`marquee overflow-hidden ${className}`}>
      <div className="marquee-track flex w-max" style={{ '--dur': `${duration}s` }}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
