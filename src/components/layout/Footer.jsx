import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { footerLinks, schoolInfo, socials } from '../../data/tisData';

const socialRoundel = [
  { label: 'Facebook',  href: 'https://www.facebook.com/TulasInternationalSchool/', Icon: Facebook },
  { label: 'Twitter',   href: socials.find(s => s.label === 'Twitter')?.href  || '#', Icon: Twitter },
  { label: 'LinkedIn',  href: socials.find(s => s.label === 'LinkedIn')?.href || '#', Icon: Linkedin },
  { label: 'Instagram', href: socials.find(s => s.label === 'Instagram')?.href|| '#', Icon: Instagram },
  { label: 'YouTube',   href: socials.find(s => s.label === 'YouTube')?.href  || '#', Icon: Youtube },
];

export default function Footer() {
  const { address, landlines, email, helpline, helplineLabel, links, name } = schoolInfo;

  return (
    <footer className="relative overflow-hidden text-white">

      {/* ── BG: aerial campus photo ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/tis-campus.png)' }}
        aria-hidden="true"
      />
      {/* Crimson overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(160, 10, 35, 0.65)' }} aria-hidden="true" />

      {/* ── Main content ── */}
      <div className="relative z-10">

        {/* Responsive grid: stacks on mobile, 2-col tablet, 4-col desktop */}
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6
                        grid-cols-1 sm:grid-cols-2 xl:grid-cols-[300px_1fr_1fr_auto]">

          {/* Col 1 — Google Map */}
          <div className="overflow-hidden rounded-xl shadow-2xl border border-white/20 bg-white sm:col-span-2 xl:col-span-1">
            <iframe
              title="Tulas International School location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.0!2d77.8742!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929b5a4ff5555%3A0xa5c6b3a3d14e2a5a!2sTulas%20International%20School!5e0!3m2!1sen!2sin!4v1696000000000"
              width="100%"
              height="280"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={links.map}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-crimson py-2 text-xs font-bold uppercase tracking-widest text-white hover:bg-crimson-dark transition-colors"
            >
              Open in Maps ↗
            </a>
          </div>

          {/* Col 2 — Logo + address */}
          <address className="not-italic space-y-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/footer-logo.png"
                alt="Tulas International School"
                width="60"
                height="60"
                className="h-14 w-14 object-contain"
                loading="lazy"
                onError={(e) => { e.target.src = '/images/logo.webp'; e.target.className = 'h-14 w-14 rounded-full bg-white object-contain p-1'; }}
              />
              <div className="font-display font-extrabold leading-snug text-base sm:text-lg">
                <span className="block">Tula's</span>
                <span className="block italic">International</span>
                <span className="block">School</span>
              </div>
            </div>

            <p className="text-sm text-white/90 leading-relaxed">
              {name}<br />
              {address[0]}<br />
              {address[1]}
            </p>
            <p className="text-sm text-white/90">
              Landline No.{' '}
              {landlines.map((n, i) => (
                <span key={n}>
                  {i > 0 && ', '}
                  <a href={`tel:${n.replace(/-/g,'')}`} className="hover:underline underline-offset-4">{n}</a>
                </span>
              ))}
            </p>
            <p className="text-sm text-white/90">
              Admission Helpline No.{' '}
              <a href={`tel:${helpline}`} className="hover:underline underline-offset-4">{helplineLabel}</a>
            </p>
            <p className="text-sm">
              <a href={`mailto:${email}`} className="hover:underline underline-offset-4 text-white/90">{email}</a>
            </p>
          </address>

          {/* Col 3 — Footer links */}
          <nav aria-label="Footer links">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 sm:block sm:space-y-1">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/85 hover:text-white hover:underline underline-offset-4 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4 — CTA buttons */}
          <div className="flex flex-row flex-wrap gap-3 sm:flex-col sm:gap-3">
            {[
              { label: 'Virtual Tour', href: links.tour },
              { label: 'Apply Now',    href: links.apply },
              { label: 'Fedena Login', href: links.fedena },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white bg-white/10 px-5 py-2 text-center text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-crimson"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/20 px-4 py-5 text-center">
          <p className="text-sm text-white/85">
            Copyright © {new Date().getFullYear()} Tulas International School, Dehradun | All Rights Reserved
          </p>
          <p className="mt-0.5 text-xs text-white/60">Designed and Managed by NetPuppys</p>

          <ul className="mt-4 flex items-center justify-center gap-3 flex-wrap">
            {socialRoundel.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 text-white transition-all hover:bg-white hover:text-crimson"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
