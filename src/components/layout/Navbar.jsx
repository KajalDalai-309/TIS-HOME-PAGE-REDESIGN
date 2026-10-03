import { useState } from 'react';
import { Menu } from 'lucide-react';
import { navLinks, schoolInfo } from '../../data/tisData';
import ThemeToggle from '../animation/ThemeToggle';
import Magnetic from '../animation/Magnetic';
import Button from '../ui/Button';
import MobileNav from './MobileNav';

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="focus-white sticky top-0 z-50 bg-crimson text-white shadow-lg shadow-black/10">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="Tulas International School, home" className="flex items-center gap-3">
          <img src="/images/logo.webp" alt="" width="52" height="52" className="h-[52px] w-[52px] rounded-full bg-white" />
          <span className="hidden font-display text-lg font-extrabold leading-none sm:block">
            Tulas <span className="italic-accent text-xl">International</span> School
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="group relative whitespace-nowrap py-2 text-sm font-bold uppercase tracking-wide">
              {link.label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Magnetic className="hidden sm:inline-block">
            <Button variant="light" href={schoolInfo.links.apply} data-cursor="Apply">
              Apply Now
            </Button>
          </Magnetic>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-teal text-ink lg:hidden"
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </div>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
