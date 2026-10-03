import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { classOptions, schoolInfo, stateOptions } from '../../data/tisData';
import Button from '../ui/Button';

const empty = { name: '', email: '', mobile: '', grade: '', state: '', consent: false };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter the full name.';
  if (v.email && !/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Please enter a valid email.';
  if (!/^[6-9]\d{9}$/.test(v.mobile)) e.mobile = 'Enter a valid 10-digit mobile number.';
  if (!v.grade) e.grade = 'Please select a class.';
  if (!v.state) e.state = 'Please select a state.';
  if (!v.consent) e.consent = 'Please agree to continue.';
  return e;
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-bold">{label}</label>
      {children}
      {error && <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-accent">{error}</p>}
    </div>
  );
}

const input = 'min-h-[48px] w-full rounded-xl border-2 border-line/25 bg-bg px-4 text-fg placeholder:text-muted/70 focus:border-accent';

export default function EnquirySection() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues((v) => ({ ...v, [key]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) setSent(true);
  };

  const aria = (key) => ({ 'aria-invalid': Boolean(errors[key]), 'aria-describedby': errors[key] ? `${key}-error` : undefined });

  return (
    <section id="admissions" aria-labelledby="enquiry-title" className="px-4 py-10 sm:py-12 sm:px-6">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] shadow-2xl grid-cols-1 lg:grid-cols-[1fr_1.2fr]">
        <div className="focus-white relative bg-crimson p-6 text-white sm:p-8">
          <div className="flex items-start justify-between gap-3">
            <h2 id="enquiry-title" className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold leading-none">
              Contact <span className="italic-accent">Us.</span>
            </h2>
            <img
              src="/images/logo.webp"
              alt="Tulas International School"
              width="64"
              height="64"
              className="h-14 w-14 shrink-0 rounded-full bg-white object-contain p-1 shadow-lg"
              loading="lazy"
            />
          </div>
          <ul className="mt-6 space-y-4 text-base">
            <li className="flex gap-4"><Phone className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              <span>Admission Helpline No.<br /><a href={`tel:${schoolInfo.helpline}`} className="font-bold hover:underline">{schoolInfo.helplineLabel}</a></span></li>
            <li className="flex gap-4"><Mail className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              <a href={`mailto:${schoolInfo.email}`} className="font-bold hover:underline">{schoolInfo.email}</a></li>
            <li className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              <span>{schoolInfo.name}<br />{schoolInfo.address[0]}<br />{schoolInfo.address[1]}</span></li>
            <li className="flex gap-4"><Phone className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              <span>Landline No. {schoolInfo.landlines.join(', ')}</span></li>
          </ul>
        </div>

        <div className="bg-card p-6 sm:p-8">
          {sent ? (
            <div role="status" className="flex h-full flex-col justify-center gap-4">
              <h3 className="font-display text-4xl font-extrabold">Thank you!</h3>
              <p className="text-lg text-muted">
                This is a demo form, so nothing was sent. To enquire for real, call the admissions helpline or apply on the official portal.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href={`tel:${schoolInfo.helpline}`}>Call now</Button>
                <Button variant="ghost" href={schoolInfo.links.apply}>Apply online</Button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <h3 className="font-display text-2xl font-extrabold">Enquire Now!</h3>
              <Field id="name" label="Full Name" error={errors.name}>
                <input id="name" autoComplete="name" value={values.name} onChange={set('name')} placeholder="Enter your full name" className={input} {...aria('name')} />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="email" label="Email Id (Optional)" error={errors.email}>
                  <input id="email" type="email" autoComplete="email" value={values.email} onChange={set('email')} placeholder="you@example.com" className={input} {...aria('email')} />
                </Field>
                <Field id="mobile" label="Mobile No. (+91)" error={errors.mobile}>
                  <input id="mobile" type="tel" inputMode="numeric" maxLength={10} autoComplete="tel-national" value={values.mobile} onChange={set('mobile')} placeholder="10-digit number" className={input} {...aria('mobile')} />
                </Field>
                <Field id="grade" label="Select Class" error={errors.grade}>
                  <select id="grade" value={values.grade} onChange={set('grade')} className={input} {...aria('grade')}>
                    <option value="">Select Class</option>
                    {classOptions.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </Field>
                <Field id="state" label="Select State" error={errors.state}>
                  <select id="state" value={values.state} onChange={set('state')} className={input} {...aria('state')}>
                    <option value="">Select State</option>
                    {stateOptions.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </Field>
              </div>
              <div>
                <label className="flex cursor-pointer items-start gap-3 text-sm text-muted">
                  <input type="checkbox" checked={values.consent} onChange={set('consent')} className="mt-1 h-5 w-5 accent-crimson" {...aria('consent')} />
                  I Agree to receive information regarding my submitted application by signing up on Tulas International School, Dehradun
                </label>
                {errors.consent && <p id="consent-error" role="alert" className="mt-1 text-sm text-accent">{errors.consent}</p>}
              </div>
              <Button type="submit" className="w-full sm:w-auto">Enquire Now</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
