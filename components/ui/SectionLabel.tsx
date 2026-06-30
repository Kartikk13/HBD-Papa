interface SectionLabelProps {
  children: React.ReactNode;
  align?: 'left' | 'center';
}

/**
 * Small uppercase, wide-tracked label used above section headlines.
 * Centralized so the "voice" of every section kicker stays consistent.
 */
export default function SectionLabel({
  children,
  align = 'left',
}: SectionLabelProps) {
  return (
    <p
      className={`label-eyebrow ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {children}
    </p>
  );
}
