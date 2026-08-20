import type { SVGProps } from "react";
import type { SocialId } from "../data/site";

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "square" as const,
  ...props,
});

/* ————— custom hand-drawn skill icons ————— */

export function IconAperture(props: P) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9.25" />
      <path d="M12 2.75 16.4 12M12 2.75 7.6 12M21.25 12H12M2.75 12l4.85 8.4M21.25 12l-4.85 8.4M7.6 20.4 12 12" />
    </svg>
  );
}

export function IconEdit(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M3 6h13M16 6h5M3 12h5M8 12h13M3 18h10M13 18h8" />
      <path d="M16 3.5v5M8 9.5v5M13 15.5v5" strokeWidth={2} />
    </svg>
  );
}

export function IconMegaphone(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M3 10.5v3l11 4.5v-12L3 10.5Z" />
      <path d="M14 8.5c2.5.5 4 1.9 4 3.5s-1.5 3-4 3.5M18.5 7.5c1.4 1.1 2.3 2.7 2.3 4.5s-.9 3.4-2.3 4.5M6 14.5V19l3 .8v-4" />
    </svg>
  );
}

export function IconNeural(props: P) {
  return (
    <svg {...base(props)}>
      <circle cx="5.5" cy="12" r="2.25" />
      <circle cx="12" cy="5" r="2.25" />
      <circle cx="12" cy="19" r="2.25" />
      <circle cx="18.5" cy="12" r="2.25" />
      <path d="M7.5 10.8 10 6.5M7.5 13.2 10 17.5M14 6.5l2.5 4.3M14 17.5l2.5-4.3M12 7.25v9.5" />
    </svg>
  );
}

export function IconEye(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M2.5 12S6 5.75 12 5.75 21.5 12 21.5 12 18 18.25 12 18.25 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.5v1.75M12 19.75v1.75" />
    </svg>
  );
}

/* ————— UI icons ————— */

export function IconPlay(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

export function IconArrowUpRight(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M6.5 17.5 17.5 6.5M8.5 6.5h9v9" />
    </svg>
  );
}

export function IconArrowDown(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M12 4v16m0 0-6-6m6 6 6-6" />
    </svg>
  );
}

export function IconClose(props: P) {
  return (
    <svg {...base(props)}>
      <path d="m5.5 5.5 13 13m0-13-13 13" />
    </svg>
  );
}

export function IconCopy(props: P) {
  return (
    <svg {...base(props)}>
      <rect x="8.5" y="8.5" width="12" height="12" />
      <path d="M15.5 5.5v-2h-12v12h2" />
    </svg>
  );
}

export function IconCheck(props: P) {
  return (
    <svg {...base(props)}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function IconMail(props: P) {
  return (
    <svg {...base(props)}>
      <rect x="2.75" y="5" width="18.5" height="14" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  );
}

export function IconCamera(props: P) {
  return (
    <svg {...base(props)}>
      <rect x="2.75" y="7" width="13" height="10" />
      <path d="m15.75 11 5.5-3v8l-5.5-3M6 7V4.75h5V7" />
      <circle cx="9" cy="12" r="2.5" />
    </svg>
  );
}

/* ————— social marks (simplified, drawn in-house) ————— */

export function SocialIcon({ id, ...props }: P & { id: SocialId }) {
  switch (id) {
    case "vimeo":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
          <path d="M3 8.2c1.6-1.5 3-2.4 3.9-1.5 1 1 .9 3.2 1.7 6.3.5 1.9 1 3 1.7 3 .9 0 2.5-2.7 3.3-4.6.7-1.7.5-3.2-1.2-2.8 1-2.9 2.9-4.2 5-3.3 2.3 1 1.5 4.2-.7 8.1-2.3 4-4.4 6.1-6 6.1-1.8 0-2.7-2.5-3.6-6.1-.6-2.4-1-4.7-2-4.7-.4 0-1 .5-1.5 1L3 8.2Z" strokeLinejoin="round" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
          <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
          <path d="M10 9.25v5.5l5-2.75-5-2.75Z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
          <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="4.5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
          <path d="m4.5 4.5 15 15M19.5 4.5 12.9 11m-1.8 2-6.6 6.5" />
        </svg>
      );
  }
}
