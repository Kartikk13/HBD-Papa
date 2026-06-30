'use client';

import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import Icon from './ui/Icon';
import { hero } from '@/lib/content';

const FLOATERS: { icon: 'compass' | 'anchor' | 'sun'; top: string; left: string; depth: number }[] = [
  { icon: 'compass', top: '18%', left: '12%', depth: 18 },
  { icon: 'anchor', top: '68%', left: '8%', depth: 28 },
  { icon: 'sun', top: '22%', left: '86%', depth: 22 },
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll-linked parallax — background drifts slower than the portrait,
  // portrait drifts slower than the foreground glass card.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse-linked parallax for the floating symbols, smoothed with a spring.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 18 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-midnight"
    >
      {/* Ambient background layers */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/3 h-[36rem] w-[36rem] rounded-full bg-navy-light/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight" />
      </motion.div>

      {/* Floating symbols — subtle mouse + scroll parallax, decorative */}
      {FLOATERS.map((f) => (
        <FloatingSymbol key={f.icon} {...f} springX={springX} springY={springY} />
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-32 md:grid-cols-2 md:px-12">
        {/* Text column */}
        <motion.div
          style={{ opacity: contentOpacity }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="label-eyebrow">{hero.eyebrow}</p>
          <h1 className="mt-5 font-display text-4xl leading-[1.1] text-frost sm:text-5xl lg:text-6xl">
            {hero.headline}
            <br />
            <span className="italic text-gold-bright">{hero.headlineAccent}</span>
          </h1>
          <p className="mt-6 max-w-md text-balance text-base text-frost-dim sm:text-lg">
            {hero.subline}
          </p>
        </motion.div>

        {/* Portrait column */}
        <motion.div
          style={{ y: portraitY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glass glass-gold-border relative rounded-[28px] p-3 shadow-gold">
            <div className="overflow-hidden rounded-[20px]">
              {/* Replace with father's image */}
              <img
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                className="photo-duotone aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-[28px] border border-gold/20" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="label-eyebrow !text-frost-dim">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}

/**
 * Renders a single floating decorative symbol. Pulled out of Hero's render
 * loop so each instance owns its own `useTransform` call — calling hooks
 * directly inside `.map()` would break the rules of hooks.
 */
function FloatingSymbol({
  icon,
  top,
  left,
  depth,
  springX,
  springY,
}: {
  icon: 'compass' | 'anchor' | 'sun';
  top: string;
  left: string;
  depth: number;
  springX: ReturnType<typeof useSpring>;
  springY: ReturnType<typeof useSpring>;
}) {
  const x = useTransform(springX, (v) => v * depth);
  const y = useTransform(springY, (v) => v * depth);

  return (
    <motion.div
      style={{ top, left, x, y }}
      className="absolute hidden text-gold/40 md:block animate-float"
    >
      <Icon name={icon} className="h-10 w-10" />
    </motion.div>
  );
}
