# Vedika Maheshwari — Portfolio

Futuristic, responsive portfolio site built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Sitemap / section order

1. **Hero** (`#hero`) — Name, title, summary, CTAs (View Experience, Download Resume)
2. **Experience** (`#experience`) — Timeline/accordion of roles and bullets
3. **Achievements** (`#achievements`) — Top impact strip + achievement cards
4. **Projects** (`#projects`) — Phishing simulation and other projects
5. **Skills** (`#skills`) — Grouped (AI, Software Engineering, DevOps, Security)
6. **Education** (`#education`) — York University, Sheridan College
7. **Certifications** (`#certifications`) — Google AI, CompTIA, SAP, ISC2
8. **More** (`#more`) — Additional lines from resume
9. **Resume** (`#download-resume`) — Full resume content + Print / Save as PDF
10. **Footer** — Copyright and contact links

## Content

All content is driven by `lib/data.ts` (parsed from resume/LinkedIn). No content is invented; every resume line is represented in the data and on the site.

## Features

- **Splash** — ~1.6s intro with VM monogram and progress bar, then transition to hero
- **Animated background** — Gradient mesh + drifting particles + faint connecting lines (Canvas), respects `prefers-reduced-motion`
- **Scroll spy** — Sticky section dots on the right (desktop)
- **Responsive** — Mobile nav (burger), stacked experience cards, touch-friendly
- **Print** — “Print / Save as PDF” uses browser print; nav and background are hidden when printing
