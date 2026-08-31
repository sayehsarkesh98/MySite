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

## ✏️ Editing texts (غیرفنی — بدون برنامه‌نویسی)

همه متن‌های سایت در **یک فایل** هستند: `src/content.json`
(اسم، معرفی، بیو، فلسفه، مهارت‌ها، آمار، شبکه‌های اجتماعی و همه پروژه‌ها)

### ساده‌ترین روش: ویرایش در خود گیت‌هاب

1. برو به مخزن پروژه در GitHub (github.com/sayehsarkesh98/MySite)
2. وارد پوشه `src` شو و روی فایل **`content.json`** کلیک کن
3. روی آیکون **مداد ✏️ (Edit this file)** کلیک کن
4. فقط **متن‌های بین گیومه** را عوض کن — ساختار فایل (آکولاد و ویرگول‌ها) را دست نزن
5. پایین صفحه روی **Commit changes** کلیک کن

همین! هر Commit به شاخه `main` = سایت روی Cloudflare Pages **خودکار بازسازی می‌شود**
(معمولاً زیر ۲ دقیقه آماده می‌شود).

### راهنمای سریع فیلدهای مهم

| می‌خواهی عوض کنی | کجا در content.json |
|---|---|
| اسم و عنوان | `site.name`, `site.firstName`, `site.lastName`, `site.title` |
| متن معرفی صفحه اول | `site.intro` (هر خط یک رشته) |
| ایمیل و موقعیت | `site.email`, `site.location`, `site.availability` |
| ویدیوی پس‌زمینه هیرو | `site.heroVideo` (mp4 یا UID کلادفلر استریم) |
| عکس پوستر هیرو | `site.heroPoster` |
| آمار (سال تجربه و…) | `site.stats` |
| شبکه‌های اجتماعی | `site.socials` |
| بیوی «درباره من» | `bio.پاراگراف_۱` و `bio.پاراگراف_۲` |
| فلسفه | `philosophy.pull` و `philosophy.body` |
| مهارت‌ها | `skills.list` (عدد level از ۰ تا ۱۰۰) |
| فیلم‌ها | `projects.list` (برای افزودن فیلم، یک بلوک `{ … }` را کپی کن) |

> داخل خود فایل هم بالای هر بخش یک فیلد `_توضیح` یا `_راهنما` هست که فارسی
> توضیح می‌دهد آن بخش چیست. این فیلدها فقط راهنما هستند و در سایت نمایش داده نمی‌شوند.

### تصاویر پروژه‌ها

عکس‌ها را در پوشه `public/images` آپلود کن (در GitHub: *Add file → Upload files*)
و در `thumb` هر پروژه مسیر `/images/نام‌عکس.jpg` را بنویس.

## 🎬 Adding a new video (Cloudflare Stream)

The site plays videos from **Cloudflare Stream** with zero configuration —
you only paste a **UID**.

### Steps

1. **Upload** — go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Stream** → *Upload video*.
2. **Allow embedding** — after upload, open the video → *Embed* → make sure
   **Unsigned embeds** are enabled (Stream → Settings → "Allow unsigned embeds").
3. **Copy the UID** — it's the 32-character hex string in the video page URL or embed code,
   e.g. `b6f21a9c8d3e4f5a6b7c8d9e0f1a2b3c`.
4. **Paste it** into `src/data/projects.ts` in the `video` field of your project:

```ts
{
  id: "my-new-film",
  title: "فیلم جدید من",
  // …
  thumb: "/images/my-new-fillm.jpg",   // poster in /public/images
  video: "b6f21a9c8d3e4f5a6b7c8d9e0f1a2b3c",   // ← just the Stream UID
}
```

### What `video` accepts (all auto-detected)

| Input | Example |
|---|---|
| Stream UID | `b6f21a9c8d3e4f5a6b7c8d9e0f1a2b3c` |
| Stream manifest URL | `https://customer-<code>.cloudflarestream.com/<UID>/manifest/video.m3u8` |
| YouTube embed | `https://www.youtube.com/embed/VIDEO_ID` |
| Vimeo embed | `https://player.vimeo.com/video/VIDEO_ID` |
| Direct file | `https://…/film.mp4` or `/videos/film.mp4` |

> **No tokens or secrets** are needed in the code — Stream embeds are public
> (unsigned). If you ever need the Stream API (upload from the site, etc.),
> put the token only in `wrangler.toml` vars or Cloudflare Pages
> environment variables — never in git-tracked source.

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
