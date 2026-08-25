import { useEffect, useState, type CSSProperties } from "react";
import {
  categories,
  isEmbedUrl,
  projects,
  type Category,
  type Project,
} from "../data/projects";
import { IconArrowUpRight, IconClose, IconPlay } from "./icons";

const spans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-6",
  "md:col-span-6",
];

/* ————————————————— gallery ————————————————— */

export default function Portfolio({ onOpen }: { onOpen: (p: Project) => void }) {
  const [cat, setCat] = useState<"All" | Category>("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.category === cat);

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* header */}
        <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
          <div>
            <p className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.35em] text-tungsten-400">
              <span className="inline-block h-px w-10 bg-tungsten-400" />
              01 — Portfolio
            </p>
            <h2 className="font-display text-6xl leading-[0.9] text-bone-100 md:text-8xl">
              Selected <span className="text-tungsten-400">Works</span>
            </h2>
          </div>
          <p className="max-w-xs font-mono text-[11px] leading-relaxed tracking-wide text-bone-500">
            Films from the archive. Each title opens in a screening room —
            swap the placeholder cuts for your own in{" "}
            <span className="text-bone-300">src/data/projects.ts</span>.
          </p>
        </div>

        {/* filters */}
        <div
          className="mt-10 flex flex-wrap gap-2"
          data-reveal
          style={{ "--rd": "120ms" } as CSSProperties}
        >
          {categories.map((c) => {
            const active = cat === c;
            const count =
              c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
            return (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  active
                    ? "border-bone-100 bg-bone-100 text-coal-950"
                    : "border-bone-100/15 text-bone-300 hover:border-tungsten-400 hover:text-tungsten-400"
                }`}
              >
                {c === "All" ? "همه" : c}{" "} <span className={active ? "opacity-60" : "text-bone-600"}>({count})</span>
              </button>
            );
          })}
        </div>

        {/* grid — keyed so it re-animates on filter change */}
        <div key={cat} className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12">
          {list.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} span={spans[i % spans.length]} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————————————————— card ————————————————— */

function ProjectCard({
  p,
  i,
  span,
  onOpen,
}: {
  p: Project;
  i: number;
  span: string;
  onOpen: (p: Project) => void;
}) {
  return (
    <article
      className={`card-in group cursor-pointer ${span}`}
      style={{ "--rd": `${i * 90}ms` } as CSSProperties}
      onClick={() => onOpen(p)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(p);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Open screening room: ${p.title} (${p.year})`}
    >
      <div
        className={`relative overflow-hidden bg-coal-900 ${
          p.ratio === "film" ? "aspect-[2.35/1]" : "aspect-video"
        }`}
      >
        <img
          src={p.thumb}
          alt={`${p.title} — film still, ${p.year}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coal-950/85 via-coal-950/10 to-coal-950/35 transition-opacity duration-500 group-hover:from-coal-950/55" />

        {/* slate meta */}
        <div className="absolute left-0 top-0 flex w-full items-center justify-between p-4 font-mono text-[10px] uppercase tracking-[0.25em]">
          <span className="text-tungsten-400">
            {p.index} / {p.category}
          </span>
          <span className="text-bone-300">{p.year}</span>
        </div>

        {/* play badge */}
        <div className="absolute inset-0 grid place-items-center">
          <span className="grid h-16 w-16 scale-75 place-items-center rounded-full border border-bone-100/40 bg-coal-950/50 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
            <IconPlay className="ml-0.5 h-5 w-5 text-bone-100" />
          </span>
        </div>

        {/* focus corners + runtime on hover */}
        <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-tungsten-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-tungsten-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.35em] text-bone-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {p.duration}
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4 border-t border-bone-100/10 pt-4">
        <div>
          <h3 className="font-display text-3xl leading-none text-bone-100 transition-colors duration-300 group-hover:text-tungsten-400 md:text-4xl">
            {p.title}
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-bone-500 line-clamp-2">
            {p.description}
          </p>
        </div>
        <span className="mt-1 shrink-0 text-bone-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-tungsten-400">
          <IconArrowUpRight className="h-5 w-5" />
        </span>
      </div>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-bone-600">
        {p.role} · {p.format}
      </p>
    </article>
  );
}

/* ————————————————— screening-room modal ————————————————— */

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  if (!project) return null;

  const meta: [string, string][] = [
    ["Year", String(project.year)],
    ["Role", project.role],
    ["Runtime", project.duration],
    ["Shot on", project.format],
    ["Category", project.category],
  ];

  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Screening room: ${project.title}`}
    >
      <div
        className="fade-in fixed inset-0 bg-coal-950/90 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="modal-in relative my-8 w-full max-w-5xl border border-bone-100/15 bg-coal-900 shadow-[0_40px_120px_rgba(0,0,0,0.75)]">
        {/* slate strip */}
        <div className="flex items-center justify-between border-b border-bone-100/10 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-500">
          <span className="flex items-center gap-2.5">
            <span className="rec-dot h-1.5 w-1.5 rounded-full bg-[#e0563f]" />
            Now screening — {project.title}
          </span>
          <button
            onClick={onClose}
            aria-label="Close screening room"
            className="p-1 text-bone-300 transition-colors hover:text-tungsten-400"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </div>

        {/* player */}
        <div className="relative aspect-video bg-coal-950">
          {isEmbedUrl(project.video) ? (
            <iframe
              src={project.video}
              title={project.title}
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={project.video}
              poster={project.thumb}
              controls
              autoPlay
              playsInline
              className="h-full w-full object-contain"
            />
          )}
        </div>

        {/* details */}
        <div className="p-6 md:p-10">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="font-display text-5xl leading-none text-bone-100 md:text-7xl">
              {project.title}
            </h3>
            <span className="font-mono text-sm tracking-[0.3em] text-tungsten-400">
              {project.year}
            </span>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-px border border-bone-100/10 bg-bone-100/10 md:grid-cols-5">
            {meta.map(([label, value]) => (
              <div key={label} className="bg-coal-900 p-4">
                <dt className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone-600">
                  {label}
                </dt>
                <dd className="mt-2 text-sm text-bone-200">{value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-bone-300">
            {project.description}
          </p>

          {/* Technical Approach / Behind the Scenes */}
          <div className="mt-10 border-t border-bone-100/10 pt-8">
            <h4 className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.35em] text-tungsten-400">
              <span className="inline-block h-px w-8 bg-tungsten-400" />
              Technical Approach
            </h4>
            
            {/* Before & After Color Grading Comparison */}
            <div className="mb-8">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-bone-500">
                Color Grade — DaVinci Resolve Workflow
              </p>
              <div className="grid grid-cols-2 gap-2 overflow-hidden rounded-sm border border-bone-100/10">
                <div className="relative aspect-video bg-coal-950">
                  <img
                    src={project.thumb}
                    alt="Before color grade - flat log profile"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover opacity-60 grayscale-[30%]"
                  />
                  <span className="absolute bottom-2 left-2 font-mono text-[9px] uppercase tracking-[0.2em] text-bone-400">
                    Before
                  </span>
                </div>
                <div className="relative aspect-video bg-coal-950">
                  <img
                    src={project.thumb}
                    alt="After color grade - final look"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 font-mono text-[9px] uppercase tracking-[0.2em] text-tungsten-400">
                    After
                  </span>
                </div>
              </div>
            </div>

            {/* Lighting & Camera Notes */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.25em] text-bone-600">
                  Lighting Setup
                </p>
                <p className="text-sm leading-relaxed text-bone-300">
                  Placeholder: Describe key light position, fill ratio, practicals used, 
                  and any special lighting techniques. Example: "Single source 4K HMI 
                  through 12x12 diffusion frame at 45°, supplemented by tungsten practicals 
                  dimmed to 30%."
                </p>
              </div>
              <div>
                <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.25em] text-bone-600">
                  Camera & Movement
                </p>
                <p className="text-sm leading-relaxed text-bone-300">
                  Placeholder: Detail camera support, lens choices, and movement. 
                  Example: "Handheld for intimate moments, locked-off on dolly for 
                  wide establishing shots. Primary lens: 35mm anamorphic at T2.8."
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-x-10 sm:grid-cols-2">
            {project.credits.map((c) => (
              <div
                key={`${c.role}-${c.name}`}
                className="flex items-baseline justify-between gap-4 border-b border-bone-100/10 py-2.5"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-600">
                  {c.role}
                </span>
                <span className="text-sm text-bone-200">{c.name}</span>
              </div>
            ))}
          </div>

          <button
            onClick={onClose}
            className="mt-10 border border-bone-100/20 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-bone-300 transition-all duration-300 hover:border-tungsten-400 hover:bg-tungsten-400 hover:text-coal-950"
          >
            ← Back to archive
          </button>
        </div>
      </div>
    </div>
  );
}
