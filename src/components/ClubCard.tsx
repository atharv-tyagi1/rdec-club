import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Club } from "../data/clubs";
import Monogram from "./Monogram";

/**
 * Compact flag card — used both in the roster grid and as the "collapsed"
 * face of the expanding overlay, so growth feels continuous.
 */
export default function ClubCard({ club, style }: { club: Club; style?: CSSProperties }) {
  return (
    <div className="relative flex h-full flex-col p-6" style={style}>
      <span className="absolute inset-x-0 top-0 h-[3px]" style={{ background: club.accent }} />
      <div className="flex items-start justify-between">
        <span
          style={{ color: club.accentDeep }}
          className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-rotate-6 group-hover:scale-110"
        >
          <Monogram id={club.id} className="h-9 w-9" />
        </span>
        <span className="font-mono text-[10px] tracking-[0.18em] text-smoke">
          No. 0{club.no} / 07
        </span>
      </div>
      <div className="mt-auto pt-6">
        <h3
          className="font-display text-[26px] font-semibold leading-[1.02] tracking-tight transition-colors duration-300 group-hover:[color:var(--cd)]"
        >
          {club.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-ink/65">
          {club.summary}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-3">
          <span className="flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/50">
            <span className="inline-block h-1.5 w-1.5" style={{ background: club.accent }} />
            {club.category}
          </span>
          <ArrowUpRight
            className="h-4 w-4 text-ink/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--cd)]"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
