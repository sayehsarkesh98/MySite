import { useEffect, useRef, useState } from "react";

/* ————— prefers-reduced-motion ————— */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/* ————— IntersectionObserver for every [data-reveal] element ————— */
export function useRevealObserver(): void {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ————— running 24fps timecode (HH:MM:SS:FF) ————— */
const pad = (n: number) => String(n).padStart(2, "0");

export function useTimecode(fps = 24): string {
  const [tc, setTc] = useState("00:00:00:00");
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const total = Math.floor(((now - start) / 1000) * fps);
      const f = total % fps;
      const s = Math.floor(total / fps) % 60;
      const m = Math.floor(total / (fps * 60)) % 60;
      const h = Math.floor(total / (fps * 3600));
      setTc(`${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [fps]);
  return tc;
}

/* ————— 0..1 page scroll progress ————— */
export function useScrollProgress(): number {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}

/* ————— scramble-decode text effect ————— */
const GLYPHS = "█▓▒░<>/\\*+=—#";

export function useScramble(target: string, startDelay = 0): string {
  const reduced = usePrefersReducedMotion();
  const [out, setOut] = useState(reduced ? target : "");
  const rafRef = useRef(0);

  useEffect(() => {
    if (reduced) {
      setOut(target);
      return;
    }
    let frame = 0;
    const total = Math.max(26, target.length * 5);
    const t0 = performance.now() + startDelay;
    const tick = (now: number) => {
      if (now < t0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      frame += 1;
      const locked = Math.floor((frame / total) * target.length);
      if (locked >= target.length) {
        setOut(target);
        return;
      }
      let s = "";
      for (let i = 0; i < target.length; i++) {
        const c = target[i];
        if (c === " ") {
          s += " ";
          continue;
        }
        s += i < locked ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setOut(s);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, startDelay, reduced]);

  return out;
}
