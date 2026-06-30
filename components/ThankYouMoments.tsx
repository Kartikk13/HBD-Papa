'use client';

import { motion } from 'framer-motion';
import { thankYouMoments } from '@/lib/content';
import SectionLabel from './ui/SectionLabel';

// Fixed (not random) rotation/offset values so server and client render
// identically — avoids hydration mismatches from Math.random().
const TILT = [-3, 2, -2, 3, -1];
const OFFSET = [0, 24, -12, 18, -6];

export default function ThankYouMoments() {
  return (
    <section id="thank-you" className="relative overflow-hidden bg-navy px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Thank You, For</SectionLabel>
        <h2 className="mt-4 max-w-xl font-display text-3xl text-frost sm:text-4xl">
          The things that never made it into a card
        </h2>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-wrap items-start justify-center gap-6">
        {thankYouMoments.map((item, i) => {
          const tilt = TILT[i % TILT.length];
          const offset = OFFSET[i % OFFSET.length];
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, rotate: tilt }}
              whileInView={{ opacity: 1, y: offset, rotate: tilt }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, scale: 1.06, zIndex: 20 }}
              className="glass relative w-[180px] shrink-0 rounded-xl p-2.5 shadow-glass sm:w-[220px]"
              style={{ zIndex: i }}
            >
              <div className="overflow-hidden rounded-md">
                {/* Replace with personal photo */}
                <img
                  src={item.src}
                  alt={item.note}
                  loading="lazy"
                  className="photo-duotone w-full object-cover"
                />
              </div>
              <p className="px-1 pt-2.5 text-center text-xs italic text-frost-dim">
                {item.note}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
