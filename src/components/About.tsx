import type { CSSProperties } from "react";
import { portrait } from "../data/projects";
import { bio, philosophy, site, skills } from "../data/site";
import { IconAperture, IconEdit, IconEye, IconMegaphone, IconNeural } from "./icons";

const iconMap = {
  aperture: IconAperture,
  edit: IconEdit,
  megaphone: IconMegaphone,
  neural: IconNeural,
  eye: IconEye,
} as const;

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-bone-100/10 bg-coal-900/40 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* ——— sticky portrait + stats ——— */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <figure className="relative" data-reveal="left">
                <span className="absolute -left-3 -top-3 z-10 h-8 w-8 border-l border-t border-tungsten-400" />
                <span className="absolute -bottom-3 -right-3 z-10 h-8 w-8 border-b border-r border-tungsten-400" />
                <div className="relative overflow-hidden">
                  <img
                    src={portrait}
                    alt={`${site.name} holding a cinema camera`}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[2200ms] ease-out hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal-950/70 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 flex w-full items-center justify-between p-4 font-mono text-[10px] uppercase tracking-[0.25em] text-bone-300">
                    <span>{site.name} — DP / Director</span>
                    <span className="text-tungsten-400">Est. 2018</span>
                  </figcaption>
                </div>
              </figure>

              <div className="mt-10 grid grid-cols-2 border border-bone-100/10">
                {site.stats.map((s, i) => (
                  <div
                    key={s.label}
                    data-reveal
                    style={{ "--rd": `${i * 100}ms` } as CSSProperties}
                    className={`p-5 md:p-6 ${i % 2 === 0 ? "border-r border-bone-100/10" : ""} ${
                      i < 2 ? "border-b border-bone-100/10" : ""
                    }`}
                  >
                    <p className="font-display text-5xl leading-none text-tungsten-400 md:text-6xl">
                      {s.value}
                      <span className="text-2xl md:text-3xl">{s.suffix}</span>
                    </p>
                    <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.25em] text-bone-500">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ——— bio / philosophy / capabilities ——— */}
          <div className="lg:col-span-7">
            <p
              className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.35em] text-tungsten-400"
              data-reveal
            >
              <span className="inline-block h-px w-10 bg-tungsten-400" />
              02 — About
            </p>
            <h2
              className="font-display text-6xl leading-[0.9] text-bone-100 md:text-8xl"
              data-reveal
              style={{ "--rd": "80ms" } as CSSProperties}
            >
              The eye behind <span className="text-tungsten-400">the lens</span>
            </h2>

            <div className="mt-10 space-y-6">
              {bio.map((para, i) => (
                <p
                  key={i}
                  className="max-w-2xl text-base leading-relaxed text-bone-300 md:text-lg"
                  data-reveal
                  style={{ "--rd": `${160 + i * 100}ms` } as CSSProperties}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* philosophy */}
            <blockquote
              className="mt-12 border-l-2 border-tungsten-400 pl-6 md:pl-8"
              data-reveal
            >
              <p className="font-display text-3xl leading-tight text-bone-100 md:text-4xl">
                “{philosophy.pull}”
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-bone-500">
                {philosophy.body}
              </p>
            </blockquote>

            {/* capabilities */}
            <p
              className="mt-14 font-mono text-[10px] uppercase tracking-[0.35em] text-bone-500"
              data-reveal
            >
              Capabilities
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {skills.map((s, i) => {
                const Icon = iconMap[s.icon];
                return (
                  <div
                    key={s.name}
                    className="group flex items-start gap-4 border-l border-bone-100/10 pl-5 py-2"
                    data-reveal
                    style={{ "--rd": `${i * 90}ms` } as CSSProperties}
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center border border-bone-100/15 text-tungsten-400 transition-all duration-300 group-hover:border-tungsten-400 group-hover:bg-tungsten-400/10">
                      <Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl leading-none text-bone-100 md:text-2xl">
                        {s.name}
                      </h3>
                      <p className="mt-2 font-mono text-[10px] leading-relaxed uppercase tracking-[0.2em] text-bone-500">
                        {s.note}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
