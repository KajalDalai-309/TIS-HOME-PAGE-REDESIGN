import { Phone } from 'lucide-react';
import { schoolInfo } from '../../data/tisData';

export default function TopBar() {
  return (
    <div className="bg-teal text-ink">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2 text-xs font-bold uppercase tracking-wide sm:text-sm">
        <Phone className="h-4 w-4" aria-hidden="true" />
        <a href={`tel:${schoolInfo.helpline}`} className="hover:underline">
          <span className="hidden sm:inline">Admissions Helpline No. </span>
          {schoolInfo.helplineLabel}
        </a>
        <a href="#admissions" className="rounded-full bg-ink px-3 py-1 text-white">
          Enquire Now
        </a>
      </div>
    </div>
  );
}
