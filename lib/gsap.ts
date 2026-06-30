/**
 * lib/gsap.ts
 * Registers GSAP plugins exactly once and re-exports gsap + ScrollTrigger
 * so components import from here instead of touching the plugin registry.
 */
'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
