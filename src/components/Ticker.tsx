interface Props {
  items?: string[];
  className?: string;
}

const defaults = [
  "Cinematography",
  "Direction",
  "Video Editing",
  "Color Grade",
  "AI Workflows",
  "Visual Storytelling",
];

/** Endless credits-roll marquee. Pauses on hover. */
export default function Ticker({ items = defaults, className = "" }: Props) {
  const row = (hidden: boolean) => (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((it, i) => (
        <span
          key={`${it}-${i}`}
          className="flex items-center font-mono text-xs uppercase tracking-[0.35em] text-bone-500"
        >
          <span className="px-6 py-1">{it}</span>
          <span className="text-[8px] text-tungsten-500">◆</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`marquee overflow-hidden border-y border-bone-100/10 bg-coal-900/70 py-3 ${className}`}
    >
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
