# 🎬 Cinema Portfolio — Cinematographer & Director

A dark, cinematic single-page portfolio for a filmmaker — built with **React + Vite + Tailwind CSS v4** and deployed on **Cloudflare Pages**.

It opens on a full-screen showreel framed like a camera viewfinder: letterbox slate bars, live 24 fps REC timecode, corner focus marks, and a scramble-decode name reveal. Film grain, a scroll "timeline playhead", and credits-roll marquees keep the whole page moving.

## ✨ Features

- **Cinematic hero** — background video with toggleable loop, Ken Burns poster fallback, camera meta readout
- **Selected Works** — filterable project gallery (Commercial / Music Video / Documentary / Short Film / Brand Film) opening into a full *screening room* modal with mp4 playback **or** YouTube/Vimeo embeds
- **About** — sticky portrait, stats, bio, filmmaking philosophy, animated skill meters (Cinematography, Editing, Directing, AI tools, Visual storytelling)
- **Contact** — email with copy-to-clipboard, social links, availability
- Living details — ticking timecode, scroll progress playhead, film grain, marquee tickers
- SEO ready — meta/OG tags, JSON-LD `Person` schema, robots.txt, semantic HTML
- Fast — ~57 kB gzipped JS, lazy images, hashed assets with immutable caching
- Fully responsive + `prefers-reduced-motion` respected throughout

## 🚀 Run locally

```bash
npm install
npm run dev        # → http://localhost:5173
npm run build      # production build → dist/
```

## ☁️ Deploy to Cloudflare Pages

Everything is preconfigured in `wrangler.toml` (project name, account ID, `dist` output).

```bash
npm run build
export CLOUDFLARE_API_TOKEN="your-token"   # never commit this
npx wrangler pages deploy dist
```

Or connect the repo in the Cloudflare dashboard (Pages → Connect to Git): **Framework: Vite · Build: `npm run build` · Output: `dist`** — then every push deploys automatically.

## ✏️ Make it yours

All content lives in two files:

| File | What you edit |
|---|---|
| `src/data/site.ts` | Name, title, intro, email, socials, hero showreel URL |
| `src/data/projects.ts` | Films: thumbnail, video URL, year, role, runtime, credits |

- Drop stills into `public/images/`, films into `public/videos/`, then reference them as `"/images/still.jpg"`.
- YouTube/Vimeo links are auto-detected and embedded (`https://www.youtube.com/embed/…`, `https://player.vimeo.com/video/…`).

## 📁 Structure

```
src/
├── components/   Nav · Hero · Ticker · Portfolio · About · Contact · Footer · Grain · icons
├── data/         site.ts · projects.ts   ← edit these
├── hooks.ts      scroll reveals · timecode · scramble · reduced-motion
└── index.css     theme tokens, grain, letterbox, keyframes
```
