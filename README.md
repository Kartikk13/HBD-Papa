# For Dad — A Father's Day Tribute

A one-page, interactive tribute site: glassmorphism, scroll-driven parallax,
and a single gold "thread" motif that runs the length of the page. Built
with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and GSAP.

---

## 1. Install

You'll need [Node.js](https://nodejs.org) 18.18 or newer.

```bash
cd father-tribute
npm install
npm run dev
```

Open **http://localhost:3000**. The site already renders fully with
placeholder photos and copy — nothing is broken or empty out of the box.

---

## 2. Personalize it (the only file you need to touch)

Everything text- and photo-related lives in **`lib/content.ts`**:

- `FATHER_NAME`, `AUTHOR_NAME` — used throughout the copy automatically
- `hero.headline` / `hero.subline` — the opening message
- `memories[]` — the masonry gallery (add, remove, or reorder freely)
- `qualities[]` — the six "Things I Admire" cards
- `timeline[]` — the life-milestones list
- `specialMessage` — the centerpiece letter
- `thankYouMoments[]` — the closing photo collage
- `finalTribute` — the last full-screen line

Each entry has a `// TODO` comment marking what to replace. No component
code needs to change for ordinary edits — add a fourth `timeline` entry,
for instance, and the layout reflows on its own.

### Swapping in real photos

The site currently points every image at `picsum.photos` so it renders
immediately. To use real photos:

1. Drop your files into `public/images/` (e.g. `portrait.jpg`).
2. In `lib/content.ts`, change the matching `src` to `"/images/portrait.jpg"`.

That's it — no config changes required for local files.

---

## 3. The design, briefly

- **Palette**: deep navy/midnight base, a single muted gold accent, frosted
  glass surfaces. No gradients outside that range.
- **Type**: Fraunces (display/headlines), Inter (body/UI), Petit Formal
  Script (handwritten accent — used once, in the special message section).
- **Signature element**: `components/GoldenThread.tsx` — a single SVG path
  spanning the full page height that draws itself in as you scroll, tying
  every section to one continuous line rather than repeating a divider.
- **Photos**: every placeholder image runs through a `.photo-duotone` CSS
  filter (in `app/globals.css`) so any photo you swap in — regardless of its
  original colors — reads as part of the same navy/gold world.

---

## 4. Deployment

### Vercel (recommended — built by the same team as Next.js)

1. Push this folder to a GitHub/GitLab/Bitbucket repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Leave all defaults (Vercel auto-detects Next.js) and click **Deploy**.
4. You'll get a live URL in about a minute. Free tier is sufficient for this site.

You can also deploy without git, using the Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Netlify

1. Push to a git repo and import it at [app.netlify.com](https://app.netlify.com).
2. Build command: `npm run build` — Netlify's Next.js runtime handles the rest.

### Self-hosted / any Node server

```bash
npm run build
npm run start   # serves on port 3000
```

Put a reverse proxy (e.g. Nginx) in front of it for a custom domain and HTTPS.

---

## 5. Project structure

```
app/
  layout.tsx        # fonts, metadata, root HTML shell
  page.tsx           # composes all 7 sections in order
  globals.css        # design tokens consumed via Tailwind, glass/duotone utilities
components/
  GoldenThread.tsx    # the page-spanning signature motif
  NavBar.tsx          # floating pill nav
  Hero.tsx            # Section 1
  Memories.tsx        # Section 2 — masonry + lightbox
  Qualities.tsx       # Section 3
  Timeline.tsx        # Section 4
  SpecialMessage.tsx  # Section 5
  ThankYouMoments.tsx # Section 6
  FinalTribute.tsx    # Section 7
  ui/
    GlassCard.tsx, SectionLabel.tsx, Icon.tsx
lib/
  content.ts   # ← all editable copy, photos, and data lives here
  gsap.ts      # GSAP/ScrollTrigger registered once, re-exported
  utils.ts
```

---

## 6. Notes on a few deliberate choices

- **Plain `<img>` instead of `next/image`**: keeps photo-swapping a one-line
  change in `content.ts` with zero config (no domain allowlisting). If you'd
  rather have automatic image optimization, swap `<img>` for `next/image` in
  the five spots that render photos and add your photo host to
  `next.config.js`.
- **Reduced motion**: `GoldenThread.tsx` and the looping ambient animations
  respect `prefers-reduced-motion` — the thread renders fully drawn and
  static instead of scroll-linked.
- **No external icon library**: the six trait icons in `components/ui/Icon.tsx`
  are hand-drawn inline SVGs, kept deliberately plain rather than a generic
  rounded icon-pack look.
