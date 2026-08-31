import { useEffect, useState, type CSSProperties } from "react";
import { heroVideoSource, site } from "../data/site";
import { usePrefersReducedMotion, useScramble } from "../hooks";
import { IconArrowDown, IconPlay } from "./icons";

interface Props {
  onPlayReel: () => void;
}

export default function Hero({ onPlayReel }: Props) {
  const reduced = usePrefersReducedMotion();
  const [loop, setLoop] = useState(true);
  const [masksIn, setMasksIn] = useState(false);
  const firstName = useScramble(site.firstName, 350);
  const lastName = useScramble(site.lastName, 750);

  useEffect(() => {
    const t = setTimeout(() => setMasksIn(true), 150);
    return () => clearTimeout(t);
  }, []);

  const showVideo = !reduced && loop;

  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col overflow-hidden hero-rtl" dir="rtl">
      {/* ——— background video placeholder (swap in src/data/site.ts) ——— */}
      <div className="absolute inset-0">
        {showVideo ? (
          <video
            className="h-full w-full object-cover"
            src={heroVideoSource()}
            poster={site.heroPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img
            src={site.heroPoster}
            alt="On set — cinematographer at the camera"
            className={`h-full w-full object-cover ${reduced ? "" : "kenburns"}`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-l from-coal-950/90 via-coal-950/30 to-coal-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-coal-950 via-transparent to-coal-950/70" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 35%, rgba(11,10,8,0.8) 100%)",
          }}
        />
      </div>

      {/* ——— top letterbox bar / slate ——— */}
      <div className="relative z-20 flex h-10 shrink-0 items-center justify-between border-b border-bone-100/10 bg-coal-950 px-4 font-mono text-[10px] uppercase tracking-[0.25em] text-bone-500 md:h-12 md:px-8" dir="ltr">
        <span>Prod. AV—2026</span>
        <span className="hidden md:block">Scene 01 · Take 03</span>
        <span className="ltr-tech">2.39:1 · 24 fps</span>
      </div>

      {/* ——— viewfinder corner marks ——— */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 bottom-24 top-24 z-10 hidden md:inset-x-8 md:block"
      >
        <span className="absolute right-0 top-0 h-8 w-8 border-r border-t border-bone-100/25" />
        <span className="absolute left-0 top-0 h-8 w-8 border-l border-t border-bone-100/25" />
        <span className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-bone-100/25" />
        <span className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-bone-100/25" />
        <span className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-bone-100/20" />
        <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-bone-100/20" />
      </div>

      {/* ——— camera meta readout ——— */}
      <div className="absolute left-12 top-28 z-10 hidden flex-col items-start gap-1 font-mono text-[10px] tracking-[0.2em] text-bone-500 lg:flex ltr-tech">
        <span>A-CAM · ALEXA 35</span>
        <span>ISO 800 · T2.0</span>
        <span>WB 3200K · ND0.9</span>
      </div>

      {/* ——— vertical edition marker ——— */}
      <span className="absolute left-8 top-1/2 z-10 hidden -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.5em] text-bone-600 [writing-mode:vertical-rl] lg:block ltr-tech">
        Portfolio — 2026 Edition
      </span>

      {/* ——— main content ——— */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-5 md:px-8">
        <div className={`max-w-3xl py-16 ${masksIn ? "masks-in" : ""}`} dir="rtl">
          <p className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.35em] text-tungsten-400">
            <span className="inline-block h-px w-10 bg-tungsten-400" />
            {site.title}
          </p>

          <h1 className="font-display leading-[0.82] text-bone-100">
            <span className="block text-[clamp(4.2rem,14vw,11.5rem)]">
              {firstName || "\u00A0"}
            </span>
            <span className="block text-[clamp(4.2rem,14vw,11.5rem)] text-tungsten-400">
              {lastName || "\u00A0"}
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-bone-300 md:text-lg">
            {site.intro.map((line, i) => (
              <span key={i} className="mask-line">
                <span style={{ "--rd": `${950 + i * 140}ms` } as CSSProperties}>{line}</span>
              </span>
            ))}
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-6"
            data-reveal
            style={{ "--rd": "1500ms" } as CSSProperties}
          >
            <button
              onClick={onPlayReel}
              className="group flex items-center gap-3 border border-bone-100/25 bg-coal-950/40 px-7 py-4 font-mono text-xs uppercase tracking-[0.25em] text-bone-100 backdrop-blur-sm transition-all duration-300 hover:border-tungsten-400 hover:bg-tungsten-400 hover:text-coal-950"
            >
              <IconPlay className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-125" />
              تماشای ریل
            </button>
            <a
              href="#work"
              className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-bone-300 transition-colors hover:text-tungsten-400"
            >
              آثار منتخب
              <IconArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>

      {/* ——— bottom letterbox bar ——— */}
      <div className="relative z-20 flex h-10 shrink-0 items-center justify-between border-t border-bone-100/10 bg-coal-950 px-4 font-mono text-[10px] uppercase tracking-[0.25em] text-bone-500 md:h-12 md:px-8" dir="ltr">
        <span className="flex items-center gap-3">
          <span className="relative block h-5 w-px overflow-hidden bg-bone-100/10">
            <span className="scroll-line absolute inset-0 bg-tungsten-400" />
          </span>
          Scroll
        </span>
        <span className="hidden md:block ltr-tech">{site.coordinates}</span>
        <button
          onClick={() => setLoop((v) => !v)}
          className="transition-colors hover:text-tungsten-400"
          aria-label="Toggle background video loop"
        >
          Bg loop: <span className={loop ? "text-tungsten-400" : "text-bone-600"}>{loop ? "on" : "off"}</span>
        </button>
      </div>
    </section>
  );
}
