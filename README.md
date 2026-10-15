# Hassan Irtaza — AI & Automation Portfolio

A responsive React portfolio for Syed Hassan Irtaza. Includes project case studies, expertise, education, certifications, and direct contact links.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Deploy `dist/` to any static host. There are no backend services or API keys.

## Content

Edit `src/main.jsx` to update projects, contact details, and biographical copy. Edit `src/styles.css` for styling. Project interface visuals are explicitly illustrative; no performance metrics or testimonials are fabricated. Content was grounded in the supplied CV.

## Rays component

Uses the component requested at https://framer.com/m/Rays-Prod-o7ad.js, resolved to its published Rays_Prod.js asset on 2026-10-15. The original React/Three.js rendering logic is in `src/components/Rays.jsx`. Only its Framer editor import is redirected to `framer-compat.js`, which supplies editor-free runtime APIs. All runtime properties are passed explicitly. The component is lazy loaded and has an error boundary and CSS background fallback. It handles reduced-motion preferences internally. See `THIRD_PARTY.md` for attribution.

## Privacy

No analytics, trackers, or contact form storage. The copy button uses the clipboard and falls back to opening an email client. Fonts load from Google Fonts, with system fallbacks. All JavaScript, including the Rays component and Three.js, is bundled locally.
