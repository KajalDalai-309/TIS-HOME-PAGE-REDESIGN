import { motion } from 'framer-motion';
import { secret } from '../../data/tisData';
import WordReveal from '../animation/WordReveal';

export default function SecretSection() {
  return (
    <section aria-label="What’s the secret to making school awesome?" className="mx-auto max-w-5xl px-4 py-28 sm:px-6">
      <h2 className="font-display text-[clamp(2rem,5.5vw,4.5rem)] font-extrabold leading-[1.02] tracking-tight">
        <WordReveal text={secret.question} />
      </h2>
      <WordReveal text={secret.answer} className="mt-10 max-w-3xl text-xl leading-relaxed sm:text-2xl" />
      <motion.p
        initial={{ opacity: 0, y: 24, rotate: -3 }}
        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
        className="italic-accent mt-10 text-[clamp(2.5rem,7vw,5.5rem)] leading-none text-tealink"
      >
        {secret.cracked}
      </motion.p>
    </section>
  );
}
