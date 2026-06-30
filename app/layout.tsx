import type { Metadata } from 'next';
import { Fraunces, Inter, Petit_Formal_Script } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const script = Petit_Formal_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "For Dad — A Father's Day Tribute",
  description:
    "A personal, interactive Father's Day tribute — memories, milestones, and a thank you that deserved more than a card.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${inter.variable} ${script.variable} font-body bg-midnight text-frost antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
