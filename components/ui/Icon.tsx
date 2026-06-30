interface IconProps {
  name: 'mountain' | 'compass' | 'leaf' | 'anchor' | 'sun' | 'hands';
  className?: string;
}

/**
 * A small set of single-weight line icons, drawn specifically for the
 * "Things I Admire" cards. Kept geometric and restrained on purpose —
 * avoids the rounded, filled "AI icon pack" look the brief asked to skip.
 */
export default function Icon({ name, className = 'w-8 h-8' }: IconProps) {
  const common = {
    className,
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (name) {
    case 'mountain':
      return (
        <svg {...common}>
          <path d="M5 36 L18 14 L25 25 L31 16 L43 36 Z" />
          <path d="M18 14 L22 20 L17 27" opacity={0.5} />
        </svg>
      );
    case 'compass':
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="17" />
          <path d="M30 18 L22 22 L18 30 L26 26 Z" />
          <circle cx="24" cy="24" r="1.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'leaf':
      return (
        <svg {...common}>
          <path d="M12 34 C12 18 26 9 39 9 C39 24 28 36 14 36 C13 36 12 35 12 34 Z" />
          <path d="M13 35 C19 28 24 22 33 13" />
        </svg>
      );
    case 'anchor':
      return (
        <svg {...common}>
          <circle cx="24" cy="11" r="4" />
          <path d="M24 15 L24 38" />
          <path d="M13 26 C13 33 18 38 24 38 C30 38 35 33 35 26" />
          <path d="M16 19 L32 19" />
        </svg>
      );
    case 'sun':
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="9" />
          <path d="M24 4 L24 10 M24 38 L24 44 M4 24 L10 24 M38 24 L44 24 M9 9 L13.5 13.5 M34.5 34.5 L39 39 M9 39 L13.5 34.5 M34.5 13.5 L39 9" />
        </svg>
      );
    case 'hands':
      return (
        <svg {...common}>
          <path d="M6 26 C6 26 12 20 18 23 C22 25 22 30 18 31 L9 33" />
          <path d="M42 26 C42 26 36 20 30 23 C26 25 26 30 30 31 L39 33" />
          <path d="M18 31 L30 31" />
        </svg>
      );
    default:
      return null;
  }
}
