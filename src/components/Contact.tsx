import { useState, type CSSProperties } from "react";
import { site } from "../data/site";
import {
  IconArrowUpRight,
  IconCheck,
  IconCopy,
  IconDownload,
  IconMail,
  SocialIcon,
} from "./icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-bone-100/10 py-24 md:py-36">
      {/* giant outlined watermark */}
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -right-6 top-6 select-none font-display text-[26vw] leading-none opacity-60"
      >
        03
      </span>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.35em] text-tungsten-400" data-reveal>
            <span className="inline-block h-px w-10 bg-tungsten-400" />
            03 — Contact
          </p>
          <h2
            className="font-display leading-[0.85] text-bone-100 text-[clamp(3.5rem,9vw,8rem)]"
            data-reveal
            style={{ "--rd": "80ms" } as CSSProperties}
          >
            Let&rsquo;s make
            <br />
            pictures<span className="text-tungsten-400">.</span>
          </h2>
          <p
            className="mt-8 max-w-xl text-base leading-relaxed text-bone-300 md:text-lg"
            data-reveal
            style={{ "--rd": "160ms" } as CSSProperties}
          >
            Commercials, films, music videos — if it needs light and a point of
            view, I want to hear about it. Send a script, a reference, or just a
            feeling.
          </p>

          {/* email card */}
          <div
            className="mt-10 flex flex-wrap items-center gap-5 border border-bone-100/15 bg-coal-900/60 p-6 md:p-8"
            data-reveal
            style={{ "--rd": "240ms" } as CSSProperties}
          >
            <IconMail className="h-9 w-9 shrink-0 text-tungsten-400" />
            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone-600">
                Email — placeholder · edit in src/data/site.ts
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 block break-all font-display text-3xl leading-none text-bone-100 transition-colors hover:text-tungsten-400 md:text-5xl"
              >
                {site.email}
              </a>
            </div>
            <button
              onClick={copyEmail}
              className={`ml-auto flex items-center gap-2 border px-4 py-3 font-mono text-[10px] uppercase tracking-[0.25em] transition-all duration-300 ${
                copied
                  ? "border-tungsten-400 bg-tungsten-400 text-coal-950"
                  : "border-bone-100/20 text-bone-300 hover:border-tungsten-400 hover:text-tungsten-400"
              }`}
            >
              {copied ? <IconCheck className="h-4 w-4" /> : <IconCopy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          {/* Download CV button */}
          <div
            className="mt-8"
            data-reveal
            style={{ "--rd": "320ms" } as CSSProperties}
          >
            <a
              href="/cv.pdf"
              download
              className="group inline-flex items-center gap-3 border border-tungsten-400/30 bg-tungsten-400/5 px-6 py-4 transition-all duration-500 hover:border-tungsten-400 hover:bg-tungsten-400 hover:shadow-[0_0_30px_rgba(232,184,88,0.15)]"
            >
              <IconDownload className="h-5 w-5 text-tungsten-400 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-110" />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-tungsten-400 transition-colors duration-300 group-hover:text-coal-950">
                Download CV
              </span>
            </a>
          </div>

          {/* availability */}
          <p
            className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-bone-500"
            data-reveal
            style={{ "--rd": "320ms" } as CSSProperties}
          >
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-tungsten-400" />
            <span className="text-tungsten-300">{site.availability}</span>
            <span className="text-bone-600">·</span>
            <span>{site.location}</span>
          </p>
        </div>

        {/* socials */}
        <div className="lg:col-span-5">
          <p
            className="mb-6 font-mono text-[10px] uppercase tracking-[0.35em] text-bone-500"
            data-reveal
          >
            Find the work elsewhere
          </p>
          {site.socials.map((s, i) => (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              data-reveal
              style={{ "--rd": `${120 + i * 90}ms` } as CSSProperties}
              className="group flex items-center gap-5 border-t border-bone-100/10 px-2 py-5 transition-all duration-300 last:border-b hover:bg-coal-900 hover:px-5"
            >
              <SocialIcon
                id={s.id}
                className="h-6 w-6 shrink-0 text-bone-500 transition-colors group-hover:text-tungsten-400"
              />
              <span className="font-display text-2xl leading-none text-bone-100 transition-colors group-hover:text-tungsten-400 md:text-3xl">
                {s.label}
              </span>
              <span className="ml-auto hidden font-mono text-[11px] text-bone-600 sm:block">
                {s.handle}
              </span>
              <IconArrowUpRight className="h-5 w-5 shrink-0 text-bone-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-tungsten-400" />
            </a>
          ))}
          <p
            className="mt-8 font-mono text-[10px] leading-relaxed tracking-wide text-bone-600"
            data-reveal
            style={{ "--rd": "480ms" } as CSSProperties}
          >
            Handles are placeholders — point them at your real profiles in{" "}
            <span className="text-bone-300">src/data/site.ts</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
