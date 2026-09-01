import { site } from "../data/site";
import { useTimecode } from "../hooks";
import { IconArrowDown } from "./icons";

export default function Footer() {
  const tc = useTimecode();

  return (
    <footer className="relative overflow-hidden border-t border-bone-100/10">
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 select-none whitespace-nowrap font-display text-[11vw] leading-none"
      >
        End Credits
      </span>

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-24 md:px-8 md:pt-32">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div>
            <p className="font-display text-3xl text-bone-100">{site.name}</p>
            <p className="mt-2 text-[12px] tracking-wide text-bone-600">
              {site.title} — {site.location}
            </p>
          </div>

          <nav className="flex gap-10 font-mono text-[11px] uppercase tracking-[0.25em]">
            {[
              ["#work", "Work"],
              ["#about", "About"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-bone-500 transition-colors hover:text-tungsten-400"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="font-mono text-[10px] uppercase leading-loose tracking-[0.2em] text-bone-600">
            <p>React · Vite · Tailwind</p>
            <p>Deployed on Cloudflare Pages</p>
            <p>Set in Bebas Neue &amp; Space Mono</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-bone-100/10 pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-bone-600 sm:flex-row">
          <span>© 2026 {site.name} — all frames reserved</span>
          <span className="tabular-nums">TC {tc} · 24 fps · 2.39:1</span>
          <a
            href="#home"
            className="group flex items-center gap-2 transition-colors hover:text-tungsten-400"
          >
            Back to top
            <IconArrowDown className="h-3.5 w-3.5 rotate-180 transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}
