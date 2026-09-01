import type { Motif } from "../data/clubs";
import Pattern from "./Pattern";

interface Props {
  src?: string;
  alt: string;
  caption?: string;
  motif?: Motif;
  accent?: string;
  className?: string; // sizing / aspect goes here
  frame?: boolean;
}

/**
 * Editorial figure with strong crop. When no src is supplied yet, renders a
 * designed placeholder tile so the page is finished before real photography
 * lands — replacing a placeholder later is a one-line change in clubs.ts.
 */
export default function Figure({
  src,
  alt,
  caption,
  motif,
  accent = "#7c2130",
  className = "aspect-[4/3]",
  frame = true,
}: Props) {
  return (
    <figure className={`group relative overflow-hidden ${className}`}>
      {src ? (
        <>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[2400ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.06]"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(23,24,28,0.42), rgba(23,24,28,0) 45%)",
            }}
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-bone">
          {motif && (
            <Pattern
              motif={motif}
              color={accent}
              opacity={0.3}
              className="absolute inset-0 h-full w-full transition-opacity duration-700 group-hover:opacity-70"
            />
          )}
          <div className="absolute inset-0 flex flex-col items-start justify-end p-4">
            <span
              className="font-mono text-[10px] uppercase tracking-[0.22em]"
              style={{ color: accent }}
            >
              ◳ Photograph incoming
            </span>
          </div>
        </div>
      )}
      {caption && (
        <figcaption
          className={`absolute bottom-0 left-0 right-0 flex items-baseline gap-2 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] ${
            src ? "text-paper/85" : "text-ink/60"
          }`}
        >
          <span className="inline-block h-1 w-1 shrink-0 translate-y-[-1px]" style={{ background: accent }} />
          {caption}
        </figcaption>
      )}
      {frame && (
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/15" />
      )}
    </figure>
  );
}
