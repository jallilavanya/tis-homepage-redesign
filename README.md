# Tulas International School

A responsive, single-page school homepage concept for Tulas International School (TIS), built with React, TypeScript and Vite. The experience brings together the school's learning journey, residential life, campus and admissions enquiry in one editorial-style page.

## Key Features

- [x] Responsive sticky navigation with a compact mobile drawer
- [x] Light and dark themes persisted in `localStorage`
- [x] Custom pointer ring on fine-pointer devices
- [x] Scroll progress indicator and viewport-triggered section reveals
- [x] Tabbed learning stages with animated content transitions
- [x] Campus image gallery modal with selectable highlights
- [x] Admissions timeline and enquiry form modal
- [x] Community story carousel and newsletter interaction
- [x] Reduced-motion support, semantic landmarks and labeled controls

## Tech Stack

- React 18 and TypeScript with strict compiler settings
- Vite 6 for local development and production builds
- Tailwind CSS 3 with project design tokens; bespoke responsive styling lives in `src/styles.css`
- Framer Motion for transitions and scroll reveals
- Lucide React for interface icons
- DM Sans and Playfair Display via Google Fonts

## Local Setup

Requires Node.js 20 or later and npm.

```bash
npm install
npm run dev
```

Vite prints the local URL after starting. To run the production checks and create an optimized bundle:

```bash
npm run build
npm run preview
```

## Deployment

### Vercel

Import the repository in Vercel. It detects Vite automatically; use `npm run build` as the build command and `dist` as the output directory.

### Netlify

Create a site from the repository with build command `npm run build` and publish directory `dist`.

### GitHub Pages

Set Vite's `base` in `vite.config.ts` to `'/<repository-name>/'` for a project site (use `'/'` for a user or organization site), then build with `npm run build`. Publish the generated `dist` directory with GitHub Actions or the Pages deployment workflow of your choice.

## Project Structure

```text
src/
  components/
    sections/       Hero, about, learning, campus, admissions, stories, footer
    ui/             Button, Card, Modal, reveal, cursor, progress bar
    Header.tsx      Responsive site navigation
  context/          Theme provider and persisted theme state
  data/             Image references and structured page content
  hooks/            Theme, cursor, and scroll-progress hooks
  App.tsx           Page composition, inquiry flow, and shared modal state
  main.tsx          React entry point
  styles.css        Theme tokens, layouts, motion, and responsive breakpoints
```

## Production Content Notes

This is a front-end implementation. Enquiry and newsletter forms demonstrate client-side validation and confirmation; connect them to an admissions CRM or form endpoint before launch. Community story copy is illustrative and should be replaced with approved, attributable testimonials. Confirm school statistics, current admissions dates, contact details, policies and campus photography with TIS before publishing. The sample imagery is served from Unsplash; replace it with approved school photography for a production site.