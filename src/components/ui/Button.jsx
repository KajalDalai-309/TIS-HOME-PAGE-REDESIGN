const variants = {
  light: 'bg-white text-crimson hover:bg-cream',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-crimson',
  crimson: 'bg-crimson text-white hover:bg-crimson-dark',
  ghost: 'border-2 border-line/30 text-fg hover:border-accent hover:text-accent',
};

/** Renders an <a> when given href, otherwise a <button>. 44px minimum touch target. */
export default function Button({ variant = 'crimson', href, className = '', children, ...props }) {
  const classes = `inline-flex min-h-[44px] items-center whitespace-nowrap justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${variants[variant]} ${className}`;
  if (href) {
    const external = href.startsWith('http');
    return (
      <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
