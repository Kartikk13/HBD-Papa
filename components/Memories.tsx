'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { memories } from '@/lib/content';
import SectionLabel from './ui/SectionLabel';

export default function Memories() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = memories.find((m) => m.id === activeId) ?? null;

  return (
    <section id="memories" className="relative bg-navy px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Memories</SectionLabel>
        <h2 className="mt-4 max-w-xl font-display text-3xl text-frost sm:text-4xl">
          A few of the thousands worth keeping
        </h2>
        <p className="mt-4 max-w-lg text-frost-dim">
          Tap any photo to look closer.
        </p>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {memories.map((memory, i) => (
            <motion.button
              key={memory.id}
              onClick={() => setActiveId(memory.id)}
              initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, scale: 1.03, y: -6 }}
              className="glass mb-6 block w-full break-inside-avoid rounded-xl p-3 text-left shadow-glass focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              <div className="overflow-hidden rounded-md">
                {/* Replace with personal photo */}
                <img
                  src={memory.src}
                  alt={memory.caption}
                  loading="lazy"
                  className="photo-duotone w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-baseline justify-between gap-3 px-1 pt-3">
                <p className="font-display text-sm italic text-frost-dim">
                  {memory.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/85 p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass glass-gold-border max-h-[85vh] max-w-lg overflow-hidden rounded-2xl p-4"
            >
              <img
                src={active.src}
                alt={active.caption}
                className="photo-duotone max-h-[65vh] w-full rounded-lg object-cover"
              />
              <div className="flex items-baseline justify-between gap-4 px-2 pt-4">
                <p className="font-display italic text-frost">{active.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
