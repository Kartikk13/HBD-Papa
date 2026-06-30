/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens — see lib/content.ts header for the full rationale.
        midnight: '#0a0f1c', // base background, near-black navy
        navy: {
          DEFAULT: '#121b2e', // panel / section background
          deep: '#0d1322',
          light: '#1c2840',
        },
        gold: {
          DEFAULT: '#c9a24b', // primary accent — muted, not shiny
          bright: '#e8c873', // hover / highlight state
          dim: '#8a703a', // low-emphasis gold (borders, dividers)
        },
        frost: {
          DEFAULT: '#e9ecf2', // primary text on dark
          dim: '#aab2c5', // secondary text on dark
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.35)',
        gold: '0 0 40px rgba(201,162,75,0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 8s ease-in-out infinite',
        drift: 'drift 14s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '50%': { transform: 'translate(12px, -16px) rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
};
