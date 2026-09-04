# AI Workshops & Design

A one-page microsite for the workshop and design side of my work: hands-on AI
sessions for teams, plus UI/UX design delivered with fixed scope and pricing.

**Live:** https://ai-matuskalis.vercel.app

## What is here

A single route rendering one long page: hero, what the workshops cover, how a
design engagement runs, and a contact section. `components/PageContent.tsx`
holds the whole page; `components/Navigation.tsx` is the sticky bar.

Two details worth knowing before editing:

- Section reveals use one `IntersectionObserver` set up in `useFadeIn`, which
  watches every `.fade-in` element and unobserves each one after it fires.
- The two blurred accent blobs in the hero are decorative and
  `pointer-events-none`; they animate via the `animate-drift` utilities in
  `globals.css`.

## Stack

- Next.js 16 (App Router) and React 19
- TypeScript
- Tailwind CSS v4
- Inter and Space Grotesk via `next/font`
- Deployed on Vercel

## Running locally

```bash
npm install
npm run dev
```

No environment variables and no backend. The page is static.

## Note on canonical URLs

`app/layout.tsx` and `public/sitemap.xml` still declare `matuskalis.com` as the
canonical host, which is a different site. Decide which domain this page should
own before doing anything SEO-sensitive with it.
