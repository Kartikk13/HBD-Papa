/**
 * lib/content.ts
 * ─────────────────────────────────────────────────────────────────────────
 * This is the ONLY file you need to edit to personalize the site.
 * Every name, line of copy, photo, and date on the page is read from here.
 *
 * Photos currently point to picsum.photos placeholders so the site renders
 * immediately. Swap each `src` for a real photo (drop files in /public/images
 * and reference them as "/images/your-file.jpg") whenever you're ready —
 * everything else (layout, animation, sizing) will keep working unchanged.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const FATHER_NAME = 'Papa'; // TODO: replace with his name, e.g. "Rajesh"
export const AUTHOR_NAME = 'Your sons'; // TODO: replace with your name / signature

export const hero = {
  eyebrow: `For you ${FATHER_NAME}, on your birthday`,
  headline: 'Some men build houses.',
  headlineAccent: 'You built a home.',
  subline:
    "Every steady thing in our lives traces back to you — we wanted one day that says so properly.",
  portrait: {
    src: '/images/photo9.jpg',
    alt: "Portrait of Dad", // TODO: replace with father's image
  },
};

export const memories = [
  {
    id: 'mem-01',
    src: '/images/photo3.jpg',
    caption: 'Lightning the lamp just like our lives',
  },
  {
    id: 'mem-02',
    src: '/images/photo2.jpg',
    caption: 'Just like Taj Mahal you made our life so beautiful',
  },
  {
    id: 'mem-03',
    src: '/images/photo6.jpg',
    caption: 'You bring the festival energy on every festival',
  },
  {
    id: 'mem-04',
    src: '/images/photo8.jpg',
    caption: 'You always taught us life lessons through your actions',
  },
  {
    id: 'mem-05',
    src: '/images/photo10.jpg',
    caption: 'You lived this world for many years without us, but we only know a world with you in it ',
  }
  // TODO: replace each src with a real photo, swap captions/years for the
  // memories that matter to you. Add or remove entries freely — the masonry
  // layout in components/Memories.tsx adapts to any count.
];

export const qualities = [
  {
    id: 'strength',
    label: 'Strength',
    icon: 'mountain',
    text: 'The kind that carried weight quietly, so we never had to.',
  },
  {
    id: 'wisdom',
    label: 'Wisdom',
    icon: 'compass',
    text: 'Always one question ahead of the problem we still were naming.',
  },
  {
    id: 'kindness',
    label: 'Kindness',
    icon: 'leaf',
    text: 'Patient with everyone, especially the version of us that tested it.',
  },
  {
    id: 'dedication',
    label: 'Dedication',
    icon: 'anchor',
    text: 'Showed up first and left last, year after year, without saying so.',
  },
  {
    id: 'humor',
    label: 'Humor',
    icon: 'sun',
    text: 'The same five jokes, decades running, still landing every time.',
  },
  {
    id: 'support',
    label: 'Support',
    icon: 'hands',
    text: 'The steady hand at every fall, the loudest voice at every win.',
  },
  // TODO: edit freely — six is the layout's sweet spot but the grid in
  // components/Qualities.tsx will reflow cleanly for 4–8 entries too.
];

export const specialMessage = {
  kicker: 'Before anything else —',
  lines: [
    `${FATHER_NAME}, we don't say this often enough, so we built an entire website to say it properly:`,
    'thank you. For the version of life you made possible just by being steady in it.',
    'We see the cost of that steadiness more clearly every year we get older.',
  ],
  signOff: 'With more love than we show,',
  signature: AUTHOR_NAME,
};

export const thankYouMoments = [
  {
    id: 'ty-01',
    src: '/images/photo1.jpg',
    note: 'For every places you made us visit and enjoy',
  },
  {
    id: 'ty-02',
    src: '/images/photo15.jpg',
    note: 'For all the facilities and comfort you give to us"',
  },
  {
    id: 'ty-03',
    src: '/images/photo22.jpg',
    note: 'For always supporting us and making our life beautiful',
  },
  {
    id: 'ty-04',
    src: '/images/photo21.jpg',
    note: 'For always being the strong foundation of our lives',
  },
  {
    id: 'ty-05',
    src: '/images/photo18.jpg',
    note: 'For always believing and being with us',
  },
  // TODO: swap photos/notes — five works well for the collage's stacking,
  // but components/ThankYouMoments.tsx will lay out any count gracefully.
];

export const finalTribute = {
  kicker: "Happy BirthDay Papa",
  headline: `${FATHER_NAME}, thank you for the life you quietly made room for.`,
  sub: 'Here\'s to you — today, and on every ordinary day this page can\'t cover.',
};
