'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

/**
 * GoldenThread
 * ─────────────────────────────────────────────────────────────────────────
 * The one deliberately bold move on this page: a single hairline gold path
 * that runs the full height of the site, behind every section, and draws
 * itself in as you scroll. It starts behind the hero portrait, becomes the
 * spine of the Timeline section, and resolves into the closing flourish in
 * the Final Tribute — meant to read as "the steady thread running through
 * a life," rather than a decorative divider repeated per-section.
 *
 * Implementation notes:
 * - The path is generated at runtime from the full document height, so it
 *   always spans exactly as far as there is content to scroll through.
 * - Drawing is driven by GSAP ScrollTrigger with `scrub`, tied to overall
 *   page scroll progress (not any single section).
 * - Respects prefers-reduced-motion by rendering the line fully drawn,
 *   static, with no scroll-linked animation.
 */
export default function GoldenThread() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [docHeight, setDocHeight] = useState(0);

  useEffect(() => {
    const measure = () => setDocHeight(document.documentElement.scrollHeight);
    measure();

    // Re-measure after images/fonts settle, and on resize.
    const ro = new ResizeObserver(() => measure());
    ro.observe(document.body);
    window.addEventListener('load', measure);
    window.addEventListener('resize', measure);

    return () => {
      ro.disconnect();
      window.removeEventListener('load', measure);
      window.removeEventListener('resize', measure);
    };
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    if (!path || docHeight === 0) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const length = path.getTotalLength();

    if (prefersReducedMotion) {
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = '0';
      return;
    }

    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const tween = gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [docHeight]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [docHeight]);

  if (docHeight === 0) return null;

  // Build a gentle, irregular S-curve down the page so the line feels
  // hand-drawn rather than a mechanical sine wave.
  const width = 200;
  const segment = 760;
  const segments = Math.max(1, Math.ceil(docHeight / segment));
  let d = `M ${width / 2} 0`;
  for (let i = 0; i < segments; i++) {
    const yStart = i * segment;
    const yMid = yStart + segment * 0.5;
    const yEnd = Math.min(yStart + segment, docHeight);
    const dir = i % 2 === 0 ? 1 : -1;
    const cx1 = width / 2 + dir * 55;
    const cx2 = width / 2 + dir * 55;
    d += ` C ${cx1} ${yStart + segment * 0.25}, ${cx2} ${yMid}, ${width / 2} ${yEnd}`;
  }

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-1/2 top-0 -z-0 h-full w-[200px] -translate-x-1/2 opacity-[0.35] mix-blend-screen"
      style={{ height: docHeight }}
      viewBox={`0 0 ${width} ${docHeight}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="thread-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8c873" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#c9a24b" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#e8c873" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d={d}
        fill="none"
        stroke="url(#thread-gradient)"
        strokeWidth={1.2}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
