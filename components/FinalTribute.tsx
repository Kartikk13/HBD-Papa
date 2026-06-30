'use client';

import { motion } from 'framer-motion';
import { finalTribute } from '@/lib/content';

// Fixed particle positions/delays (not random) to keep server/client markup
// identical and avoid hydration mismatches.
const PARTICLES = [
  { left: '8%', top: '20%', delay: 0 },
  { left: '22%', top: '70%', delay: 1.2 },
  { left: '38%', top: '35%', delay: 2.4 },
  { left: '55%', top: '80%', delay: 0.6 },
  { left: '68%', top: '15%', delay: 1.8 },
  { left: '82%', top: '55%', delay: 3 },
  { left: '92%', top: '28%', delay: 0.9 },
  { left: '14%', top: '85%', delay: 2.1 },
];

export default function FinalTribute() {
  return (
    <section
      id="final"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-midnight px-6 text-center"
    >
      {/* Slowly breathing ambient gradient */}
      <motion.div
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-1/2 -z-10 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-navy-light via-gold/10 to-transparent blur-3xl"
      />

      {/* Drifting gold particles */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-gold-bright/70"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -22, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 6, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="relative z-10 max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="label-eyebrow"
        >
          {finalTribute.kicker}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-balance font-display text-3xl leading-tight text-frost sm:text-4xl md:text-5xl"
        >
          {finalTribute.headline}
        </motion.h2>

        {/* Hand-drawn closing flourish — echoes the golden thread's last stroke */}
        <motion.svg
          viewBox="0 0 240 24"
          className="mx-auto mt-7 h-5 w-44 text-gold"
          fill="none"
        >
          <motion.path
            d="M4 12 C 50 22, 90 2, 120 12 C 150 22, 190 2, 236 12"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.svg>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6 text-frost-dim"
        >
          {finalTribute.sub}
        </motion.p>
      </div>
    </section>
  );
}
