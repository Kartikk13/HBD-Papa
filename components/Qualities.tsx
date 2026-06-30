'use client';

import { motion } from 'framer-motion';
import { qualities } from '@/lib/content';
import Icon from './ui/Icon';
import SectionLabel from './ui/SectionLabel';

export default function Qualities() {
  return (
    <section id="qualities" className="relative bg-midnight px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionLabel align="center">Things I Admire</SectionLabel>
        <h2 className="mx-auto mt-4 max-w-xl text-center font-display text-3xl text-frost sm:text-4xl">
          Not everything you taught me was said out loud
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {qualities.map((q, i) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="glass group rounded-2xl p-7 transition-colors hover:glass-gold-border"
            >
              <Icon
                name={q.icon as 'mountain' | 'compass' | 'leaf' | 'anchor' | 'sun' | 'hands'}
                className="h-9 w-9 text-gold-dim transition-colors duration-300 group-hover:text-gold-bright"
              />
              <h3 className="mt-5 font-display text-xl text-frost">{q.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-frost-dim">{q.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
