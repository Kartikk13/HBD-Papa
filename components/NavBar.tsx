'use client';

import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#memories', label: 'Memories' },
  { href: '#qualities', label: 'Admire' },
  { href: '#message', label: 'Message' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 flex justify-center transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <nav
        className={`glass flex items-center gap-6 rounded-full px-6 py-2.5 transition-shadow ${
          scrolled ? 'shadow-glass' : ''
        }`}
      >
        <a href="#hero" className="font-display text-sm italic text-gold-bright">
          for Papa
        </a>
        <span className="hidden h-4 w-px bg-frost/15 sm:block" />
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hidden text-xs uppercase tracking-widest text-frost-dim transition-colors hover:text-gold-bright sm:block"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
