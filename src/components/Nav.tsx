import { useEffect, useState } from "react";
import { site } from "../data/site";
import { useScrollProgress, useTimecode } from "../hooks";
import { IconClose } from "./icons";

const links = [
  { href: "#work", label: "آثار منتخب" },
  { href: "#about", label: "درباره من" },
  { href: "#contact", label: "تماس" },
];

export default function Nav() {
  const progress = useScrollProgress();
  const tc = useTimecode();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* timeline playhead — page scroll progress */}
      <div className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-coal-800">
        <div
          className="h-full origin-left bg-tungsten-400"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-bone-100/10 bg-coal-950/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 nav-rtl">
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center border border-tungsten-400/60 font-display text-lg leading-none text-tungsten-400 transition-colors duration-300 group-hover:bg-tungsten-400 group-hover:text-coal-950">
              {site.monogram}
            </span>
            <span className="hidden font-display text-xl tracking-wide text-bone-100 sm:block">
              {site.name}
            </span>
          </a>

          <ul className="hidden items-center gap-10 md:flex nav-rtl">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative font-mono text-[11px] uppercase tracking-[0.3em] text-bone-300 transition-colors hover:text-bone-100"
                >
                  <span className="ml-2 ltr-tech text-tungsten-500">0{i + 1}</span>
                  {l.label}
                  <span className="absolute -bottom-1.5 right-0 h-px w-0 bg-tungsten-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <div className="hidden items-center gap-2 font-mono text-[11px] tracking-widest text-bone-500 sm:flex ltr-tech">
              <span className="rec-dot h-2 w-2 rounded-full bg-[#e0563f]" />
              REC
              <span className="tabular-nums text-bone-300">{tc}</span>
            </div>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex flex-col gap-1.5 p-1 md:hidden"
            >
              <span className="block h-px w-7 bg-bone-100" />
              <span className="block h-px w-5 bg-bone-100" />
            </button>
          </div>
        </nav>
      </header>

      {/* mobile menu — full-frame slate */}
      {open && (
        <div className="fade-in fixed inset-0 z-[70] flex flex-col bg-coal-950/[0.98] md:hidden" dir="rtl">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-500 ltr-tech">
              Menu — AV/26
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 text-bone-300 transition-colors hover:text-tungsten-400"
            >
              <IconClose className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 border-b border-bone-100/10 py-4"
              >
                <span className="font-mono text-xs text-tungsten-500 ltr-tech">0{i + 1}</span>
                <span className="font-display text-6xl leading-none text-bone-100 transition-colors group-hover:text-tungsten-400">
                  {l.label}
                </span>
              </a>
            ))}
          </nav>
          <div className="px-8 pb-10 font-mono text-[11px] tracking-widest text-bone-600 ltr-tech">
            {site.email}
          </div>
        </div>
      )}
    </>
  );
}
