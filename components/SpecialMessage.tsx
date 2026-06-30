'use client';

import { motion } from 'framer-motion';
import { specialMessage } from '@/lib/content';

const lineVariants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export default function SpecialMessage() {
  return (
    <section
      id="message"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-midnight px-6 py-28 md:px-12"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="glass glass-gold-border relative max-w-2xl rounded-3xl px-8 py-12 text-center shadow-gold sm:px-14 sm:py-16"
      >
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={lineVariants}
          transition={{ duration: 0.6 }}
          className="label-eyebrow"
        >
          {specialMessage.kicker}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.25, delayChildren: 0.15 }}
          className="mt-7 space-y-4"
        >
          {specialMessage.lines.map((line, i) => (
            <motion.p
              key={i}
              variants={lineVariants}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance font-display text-xl leading-relaxed text-frost sm:text-2xl"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10"
        >
          <p className="text-sm text-frost-dim">{specialMessage.signOff}</p>
          <p className="mt-2 font-script text-3xl text-gold-bright">
            {specialMessage.signature}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
