'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  goldBorder?: boolean;
  children: React.ReactNode;
  className?: string;
}

/**
 * Frosted glass surface with an optional gold edge. Used for memory cards,
 * milestone cards, and the special-message centerpiece so every floating
 * panel on the site shares one consistent material.
 */
export default function GlassCard({
  goldBorder = false,
  children,
  className,
  ...motionProps
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'glass rounded-2xl shadow-glass',
        goldBorder && 'glass-gold-border',
        className
      )}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
