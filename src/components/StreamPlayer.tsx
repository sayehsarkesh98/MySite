import { useEffect, useRef, useState } from "react";

/* ============================================================
   StreamPlayer — plays any of these inputs:
   · Cloudflare Stream UID (32 hex chars, e.g. "a1b2c3…")
   · Cloudflare Stream manifest URL
     (https://customer-<code>.cloudflarestream.com/<UID>/manifest/video.m3u8)
   · YouTube / Vimeo embed URL (passed through)
   · Any direct URL (mp4 / webm / m3u8) — plain <video>
   ============================================================ */

/** Extract a Cloudflare Stream UID from a raw UID or any stream URL shape. */
export function extractStreamUid(input: string): string | null {
  if (!input) return null;
  const s = input.trim();

  // Raw 32-hex UID
  if (/^[0-9a-f]{32}$/i.test(s)) return s;

  // customer-<code>.cloudflarestream.com/<uid>/...
  let m = s.match(
    /cloudflarestream\.com\/([0-9a-f]{32})/i,
  );
  if (m) return m[1];

  // iframe.videodelivery.net/<uid>
  m = s.match(/videodelivery\.net\/([0-9a-f]{32})/i);
  if (m) return m[1];

  // watch.videodelivery.net/<uid>/...
  m = s.match(/watch\.videodelivery\.net\/([0-9a-f]{32})/i);
  if (m) return m[1];

  // customers/<uid>/... (older API shape)
  m = s.match(/customers\/([0-9a-f]{32})/i);
  if (m) return m[1];

  return null;
}

/** True when the URL should render inside an iframe (Stream / YouTube / Vimeo). */
export function isIframePlayable(input: string): boolean {
  if (!input) return false;
  const s = input.trim();
  return (
    extractStreamUid(s) !== null ||
    /(youtube\.com|youtu\.be|vimeo\.com|player\.vimeo)/i.test(s)
  );
}

interface Props {
  src: string; // UID, stream URL, embed URL, or direct mp4
  poster?: string;
  title?: string;
  autoPlay?: boolean;
  controls?: boolean;
  className?: string;
  /** Defer iframe until the element scrolls near the viewport (default true). */
  lazy?: boolean;
}

export default function StreamPlayer({
  src,
  poster,
  title = "video player",
  autoPlay = false,
  controls = true,
  className = "",
  lazy = true,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(!lazy);

  // Lazy: only mount the iframe when near the viewport
  useEffect(() => {
    if (!lazy || inView) return;
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [lazy, inView]);

  const s = (src || "").trim();

  /* ——— YouTube / Vimeo ——— pass through untouched ——— */
  if (/(youtube\.com|youtu\.be|vimeo\.com|player\.vimeo)/i.test(s)) {
    return (
      <div ref={containerRef} className={className}>
        {inView ? (
          <iframe
            src={s}
            title={title}
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
            dir="ltr"
          />
        ) : (
          poster && (
            <img
              src={poster}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          )
        )}
      </div>
    );
  }

  /* ——— Cloudflare Stream (UID or manifest URL) ——— */
  const uid = extractStreamUid(s);
  if (uid) {
    const iframeSrc = `https://iframe.videodelivery.net/${uid}${poster ? `?poster=${encodeURIComponent(poster)}` : ""}`;
    return (
      <div ref={containerRef} className={className} dir="ltr">
        {inView ? (
          <iframe
            src={iframeSrc}
            title={title}
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
          />
        ) : (
          poster && (
            <img
              src={poster}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          )
        )}
      </div>
    );
  }

  /* ——— direct file (mp4 / webm / m3u8 …) — plain <video> ——— */
  return (
    <div ref={containerRef} className={className}>
      <video
        src={s}
        poster={poster}
        controls={controls}
        autoPlay={autoPlay}
        muted={autoPlay} // required by browsers for autoplay
        playsInline
        preload="metadata"
        className="h-full w-full object-contain"
      />
    </div>
  );
}
