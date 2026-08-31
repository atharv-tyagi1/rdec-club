import { useEffect, useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import type { Club } from "../data/clubs";
import ClubCard from "./ClubCard";
import Monogram from "./Monogram";
import Pattern from "./Pattern";

export interface Rect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface ActiveClub {
  club: Club;
  rect: Rect;
}

interface Props {
  active: ActiveClub | null;
  expanded: boolean;
  touch: boolean;
  reduced: boolean;
  onNavigate: (club: Club) => void;
  onClose: () => void;
}

function computeTarget(): Rect {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const mobile = vw < 720;
  const width = mobile ? vw - 20 : Math.min(980, vw - 90);
  const height = mobile ? Math.min(vh * 0.88, 680) : Math.min(580, vh - 150);
  return { left: (vw - width) / 2, top: (vh - height) / 2, width, height };
}

/**
 * The signature interaction: the flag card itself grows into focus while the
 * rest of campus dims and blurs behind it. Clicking anywhere on the expanded
 * card enters the club page.
 */
export default function ClubExpander({ active, expanded, touch, reduced, onNavigate, onClose }: Props) {
  const [, setTick] = useState(0);

  useEffect(() => {
    if (!active) return;
    const onResize = () => setTick((t) => t + 1);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, onClose]);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  if (!active) return null;

  const { club } = active;
  const dur = reduced ? 0 : 0.55;
  const geo = expanded ? computeTarget() : active.rect;
  const [president, vp, mentor] = club.leadership;

  return (
    <>
      {/* backdrop — darkens & blurs everything behind the flag */}
      <motion.div
        initial={false}
        animate={{ opacity: expanded ? 1 : 0 }}
        transition={{ duration: reduced ? 0 : 0.4, ease: "easeOut" }}
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 z-40 bg-ink/70 backdrop-blur-[6px]"
        style={{ pointerEvents: expanded ? "auto" : "none" }}
      />

      {/* the expanding card */}
      <motion.div
        role="link"
        tabIndex={0}
        aria-label={`Open the ${club.name} club page`}
        onClick={() => onNavigate(club)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onNavigate(club);
          }
        }}
        initial={false}
        animate={{ top: geo.top, left: geo.left, width: geo.width, height: geo.height }}
        transition={{
          duration: dur,
          /* base curve, nudged by the club's own motion personality */
          ease: [0.32, 0.72, 0, 1].map((v, i) =>
            i === 1 ? Math.min(0.9, v + club.motion.ease[1] * 0.1) : v
          ) as [number, number, number, number],
        }}
        className="fixed z-50 cursor-pointer overflow-hidden rounded-md bg-paper shadow-[0_40px_120px_-20px_rgba(23,24,28,0.55)] ring-1 ring-ink/25 outline-none focus-visible:ring-2 focus-visible:ring-maroon"
        style={{ willChange: "top, left, width, height" }}
      >
        {/* collapsed face — matches the grid card exactly */}
        <motion.div
          initial={false}
          animate={{ opacity: expanded ? 0 : 1 }}
          transition={{ duration: reduced ? 0 : 0.18 }}
          className="pointer-events-none absolute inset-0 group"
        >
          <ClubCard club={club} style={{ "--cd": club.accentDeep } as CSSProperties} />
        </motion.div>

        {/* expanded face */}
        <motion.div
          initial={false}
          animate={{ opacity: expanded ? 1 : 0 }}
          transition={{ duration: reduced ? 0 : 0.3, delay: expanded ? dur * 0.55 : 0 }}
          className="absolute inset-0 grid grid-rows-[104px_1fr] md:grid-cols-[38%_1fr] md:grid-rows-1"
        >
          {/* identity pane */}
          <div
            className="relative flex items-center justify-between overflow-hidden px-6 md:flex-col md:items-start md:justify-between md:p-8"
            style={{ background: club.accent }}
          >
            <Pattern motif={club.motif} color={club.onAccent} opacity={0.22} className="absolute inset-0 h-full w-full" />
            <span
              className="relative font-mono text-[10px] uppercase tracking-[0.22em]"
              style={{ color: club.onAccent, opacity: 0.85 }}
            >
              Club 0{club.no} / 07
            </span>
            <span className="relative hidden md:block" style={{ color: club.onAccent }}>
              <Monogram id={club.id} className="h-20 w-20" strokeWidth={1.7} />
            </span>
            <div className="relative md:mt-auto">
              <p className="font-display text-2xl italic leading-none md:text-3xl" style={{ color: club.onAccent }}>
                {club.italicWord}
              </p>
              <p
                className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em]"
                style={{ color: club.onAccent, opacity: 0.75 }}
              >
                Est. {club.founded} · {club.category}
              </p>
            </div>
          </div>

          {/* detail pane */}
          <div className="flex min-h-0 flex-col overflow-y-auto p-6 md:p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: club.accentDeep }}>
              ● {club.category}
            </p>
            <h3 className="mt-2 font-display text-3xl font-semibold leading-[0.98] tracking-tight text-ink sm:text-4xl md:text-[44px]">
              {club.name}
            </h3>
            <p className="mt-2 font-display text-base italic text-ink/60 sm:text-lg">{club.tagline}</p>
            <p className="mt-3 hidden max-w-xl text-[13.5px] leading-relaxed text-ink/70 md:block">
              {club.summary}
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-ink/15 pt-4 md:mt-6 md:gap-5 md:pt-5">
              {[president, vp, mentor].filter(Boolean).map((l) => (
                <div key={l.role} className="min-w-0">
                  <p className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-smoke md:text-[9.5px]">{l.role}</p>
                  <p className="mt-1 truncate text-[13px] font-semibold text-ink md:text-[15px]">{l.name}</p>
                  <p className="mt-0.5 hidden font-mono text-[9.5px] text-ink/45 md:block">{l.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between gap-4 border-t border-ink/15 pt-4 md:pt-5">
              <p className="min-w-0 truncate font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink/55 md:text-[10.5px]">
                {club.meets} — {club.room}
              </p>
              <span
                className="group/cta flex shrink-0 items-center gap-2.5 pl-2 font-mono text-[10px] uppercase tracking-[0.18em] md:text-[11px]"
                style={{ color: club.accentDeep }}
              >
                Enter the club
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover/cta:translate-x-1 md:h-9 md:w-9"
                  style={{ background: club.accentDeep, color: club.onAccent }}
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* close — always reachable, essential on touch */}
        {expanded && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close club preview"
            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink/85 text-paper backdrop-blur-sm transition-transform duration-200 hover:scale-110"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </motion.div>

      {touch && expanded && (
        <p className="pointer-events-none fixed inset-x-0 bottom-4 z-50 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-paper/70">
          Tap the card to enter · tap outside to close
        </p>
      )}
    </>
  );
}
