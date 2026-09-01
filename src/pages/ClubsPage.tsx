import { useRef, useState, type CSSProperties } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CLUBS, IMG, calendarUpcoming, type Club } from "../data/clubs";
import ClubCard from "../components/ClubCard";
import ClubExpander, { type ActiveClub } from "../components/ClubExpander";
import Figure from "../components/Figure";
import Monogram from "../components/Monogram";
import Pattern from "../components/Pattern";
import Reveal from "../components/Reveal";
import Ticker from "../components/Ticker";
import { useIsTouch, usePrefersReducedMotion } from "../hooks";

const LIFE_STEPS: [string, string, string][] = [
  [
    "S.1",
    "Open House — week one",
    "Every club opens its doors in the first week of the semester. No forms and no auditions for the curious — just walk in.",
  ],
  [
    "S.2",
    "Meets & maker spaces",
    "Weekly rhythms from the 6 AM track squad to Friday open mics. This is the timetable of the second campus.",
  ],
  [
    "S.3",
    "The flags take over",
    "Fests, leagues, hackathons, drives — the calendar the Office of Student Life publishes is written by the clubs themselves.",
  ],
];

export default function ClubsPage() {
  const navigate = useNavigate();
  const touch = useIsTouch();
  const reduced = usePrefersReducedMotion();

  const [active, setActive] = useState<ActiveClub | null>(null);
  const [expanded, setExpanded] = useState(false);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  const clearTimers = () => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  const openClub = (club: Club, el: HTMLElement) => {
    clearTimers();
    setActive({ club, rect: el.getBoundingClientRect() });
    openTimer.current = window.setTimeout(() => setExpanded(true), 30);
  };

  const collapse = () => {
    clearTimers();
    setExpanded(false);
    closeTimer.current = window.setTimeout(
      () => setActive(null),
      reduced ? 0 : 580
    );
  };

  const enterClub = (club: Club) => navigate(`/clubs/${club.id}`);

  const handleCardClick = (club: Club, el: HTMLElement) => {
    if (touch) {
      if (expanded && active?.club.id === club.id) enterClub(club);
      else openClub(club, el);
    } else {
      enterClub(club);
    }
  };

  const upcoming = calendarUpcoming();

  return (
    <div className="relative">
      {/* ================================================= MASTHEAD */}
      <section className="relative overflow-hidden pt-[104px]">
        {/* ambient pattern, top right */}
        <Pattern
          motif="rays"
          color="#7c2130"
          opacity={0.1}
          className="pointer-events-none absolute -right-16 -top-16 h-[420px] w-[420px] lg:h-[560px] lg:w-[560px]"
        />
        {/* vertical gazette line */}
        <p
          className="pointer-events-none absolute left-4 top-40 hidden origin-left font-mono text-[9px] uppercase tracking-[0.3em] text-ink/35 xl:block"
          style={{ writingMode: "vertical-rl" }}
        >
          Student Life Gazette · Ghaziabad · Uttar Pradesh
        </p>

        <div className="relative mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:pb-20">
          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.26em] text-maroon">
                  <span className="inline-block h-2 w-2 bg-maroon" />
                  R.D. Engineering College — Student Life Gazette Nº 07
                </p>
              </Reveal>

              <h1 className="mt-6 font-display font-semibold tracking-[-0.03em]">
                <span className="rise-line" style={{ "--rise-delay": "60ms" } as CSSProperties}>
                  <span className="text-[clamp(4.2rem,13vw,10.5rem)] leading-[0.86]">Clubs</span>
                </span>
                <span className="rise-line" style={{ "--rise-delay": "200ms" } as CSSProperties}>
                  <span className="text-[clamp(3.2rem,9.5vw,7.6rem)] italic leading-[0.95] text-maroon">
                    @ RDEC<sup className="font-mono text-[0.16em] font-normal not-italic tracking-normal text-ink/50"> (seven)</sup>
                  </span>
                </span>
              </h1>

              <Reveal delay={260}>
                <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-ink/70">
                  Discover the communities that shape campus life — seven flags
                  raised by students, run by students, and open to every
                  RDECian. <span className="font-semibold text-ink">Hover a flag to expand it;</span>{" "}
                  click anywhere on the card to enter its story.
                </p>
              </Reveal>

              <Reveal delay={340}>
                <div className="mt-9 flex items-center justify-between gap-6 border-t border-ink/15 pt-5">
                  <span className="flex items-center gap-3.5">
                    <span className="block h-10 w-px overflow-hidden bg-ink/15">
                      <span className="cue-line block h-full w-full bg-ink/70" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                      Scroll — the roster is below
                    </span>
                  </span>
                  <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40 sm:block">
                    Session 2025–26
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="relative lg:col-span-5">
              <Reveal delay={180} className="relative">
                <Figure
                  src={IMG.campus}
                  alt="Students crossing the main courtyard of R.D. Engineering College at golden hour"
                  caption="Main courtyard, E-Block — 5:12 PM"
                  className="aspect-[4/5] w-full"
                />
                {/* rotating stamp */}
                <div className="absolute -left-7 bottom-8 hidden sm:block">
                  <svg viewBox="0 0 120 120" className="spin-slow h-28 w-28 drop-shadow-sm">
                    <defs>
                      <path id="stamp-circle" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
                    </defs>
                    <circle cx="60" cy="60" r="58" fill="#f2f1eb" stroke="#17181c" strokeOpacity="0.2" />
                    <circle cx="60" cy="60" r="30" fill="none" stroke="#7c2130" strokeOpacity="0.4" strokeWidth="0.8" />
                    <text fontFamily="Space Mono, monospace" fontSize="9" letterSpacing="2.4" fill="#17181c">
                      <textPath href="#stamp-circle">
                        SEVEN FLAGS · ONE CAMPUS · EST. RDEC ·
                      </textPath>
                    </text>
                    <text x="60" y="69" textAnchor="middle" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="26" fill="#7c2130">
                      07
                    </text>
                  </svg>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <Ticker />
      </section>

      {/* ================================================= THE ROSTER */}
      <section id="roster" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-maroon">01 — The Roster</p>
              <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl">
                Seven flags,
                <br />
                <em className="italic text-maroon">one campus.</em>
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5">
              <p className="max-w-md text-sm leading-relaxed text-ink/60">
                Each flag is a student society with its own colours, calendar
                and crew. The card grows when you reach for it — then take the
                whole card to step inside.
              </p>
              <p className="mt-4 inline-flex items-center gap-2.5 border border-ink/20 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-maroon opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-maroon" />
                </span>
                {touch ? "Tap a flag to expand · tap again to enter" : "Hover a flag to expand · click to enter"}
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CLUBS.map((club, i) => (
              <Reveal key={club.id} delay={(i % 3) * 90} className={club.id === "placement-cell" ? "sm:col-span-2 lg:col-span-2" : ""}>
                <button
                  onMouseEnter={(e) => {
                    if (!touch) openClub(club, e.currentTarget);
                  }}
                  onClick={(e) => handleCardClick(club, e.currentTarget)}
                  aria-label={`${club.name} — ${club.category}. Expand, then enter the club page.`}
                  style={{ "--cd": club.accentDeep } as CSSProperties}
                  className="group relative block h-full min-h-[268px] w-full border border-ink/15 bg-paper text-left shadow-[0_1px_0_rgba(23,24,28,0.05)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5 hover:border-ink/40 hover:shadow-[0_28px_50px_-18px_rgba(23,24,28,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
                >
                  {club.id === "placement-cell" && (
                    <span
                      className="absolute right-4 top-4 z-10 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em]"
                      style={{ background: club.accent, color: club.onAccent }}
                    >
                      Joins 2026
                    </span>
                  )}
                  <ClubCard club={club} />
                </button>
              </Reveal>
            ))}

            {/* office note — balances the grid, no extra CTA machinery */}
            <Reveal delay={180}>
              <div className="relative flex h-full min-h-[268px] flex-col justify-between border border-dashed border-ink/25 bg-bone/70 p-6">
                <Pattern motif="arches" color="#7c2130" opacity={0.08} className="pointer-events-none absolute inset-0 h-full w-full" />
                <p className="relative font-mono text-[9.5px] uppercase tracking-[0.22em] text-maroon">From the Office</p>
                <div className="relative">
                  <p className="max-w-xs text-sm leading-relaxed text-ink/70">
                    The Placement Cell formally joins the roster as the seventh
                    flag for Session 2025–26 — student-run, office-backed, and
                    open to all years.
                  </p>
                  <Link
                    to="/clubs/placement-cell"
                    className="link-line mt-4 inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink"
                  >
                    Meet the Cell <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================= CAMPUS LIFE */}
      <section id="life" className="scroll-mt-20 border-y border-ink/10 bg-bone/80 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-maroon">02 — Campus Life</p>
                  <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl">
                    Life between
                    <br />
                    <em className="italic text-maroon">lectures.</em>
                  </h2>
                  <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/65">
                    Clubs are the second timetable of RDEC — the one you choose.
                    The Office of Student Life keeps the lights on; the students
                    decide what happens under them.
                  </p>
                </Reveal>
                <div className="mt-9">
                  {LIFE_STEPS.map(([no, title, body], i) => (
                    <Reveal key={no} delay={i * 100}>
                      <div className="group flex gap-5 border-t border-ink/15 py-5 transition-colors hover:bg-paper/70">
                        <span className="font-mono text-[11px] font-bold text-maroon">{no}</span>
                        <div>
                          <h3 className="text-[15px] font-bold tracking-tight">{title}</h3>
                          <p className="mt-1.5 max-w-sm text-[13px] leading-relaxed text-ink/60">{body}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                  <div className="border-t border-ink/15" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative pb-24">
                <Reveal className="w-[92%]">
                  <Figure
                    src={IMG.velocity}
                    alt="A Velocity athlete mid-sprint on the track at dusk"
                    caption="06:00 — track squad, main ground"
                    className="aspect-[4/3] rotate-[1.1deg]"
                  />
                </Reveal>
                <Reveal delay={140} className="absolute -bottom-2 right-0 w-[62%]">
                  <Figure
                    src={IMG.spotlight}
                    alt="The Spotlight media crew filming on campus"
                    caption="17:12 — Spotlight crew, annual fest"
                    className="aspect-[4/3] -rotate-2 ring-[10px] ring-paper shadow-[0_30px_60px_-20px_rgba(23,24,28,0.4)]"
                  />
                </Reveal>
                <Reveal delay={220} className="absolute -bottom-4 left-2 flex items-center gap-2">
                  <span className="text-maroon">
                    <Monogram id="mehfil" className="h-5 w-5" />
                  </span>
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-ink/45">
                    Frames from the clubs — replaced each season
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= THE CALENDAR */}
      <section id="calendar" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-maroon">03 — The Calendar</p>
              <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl">
                What's on <em className="italic text-maroon">next.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-xs font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-ink/45">
                Dates confirmed via the Office of Student Life · every row leads to the hosting club
              </p>
            </Reveal>
          </div>

          <div className="mt-10">
            {upcoming.map((e, i) => (
              <Reveal key={`${e.club.id}-${e.dateISO}`} delay={Math.min(i, 5) * 60}>
                <Link
                  to={`/clubs/${e.club.id}`}
                  className="group grid grid-cols-[76px_1fr] items-center gap-x-4 gap-y-1 border-t border-ink/12 px-2 py-4 transition-colors duration-300 hover:bg-bone sm:grid-cols-[92px_1fr_auto] sm:gap-x-6"
                >
                  <span className="font-mono text-[13px] font-bold tracking-tight text-ink">{e.dateLabel}</span>
                  <span className="min-w-0">
                    <span className="block truncate text-[15px] font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                      {e.title}
                    </span>
                    <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45">
                      {e.venue}
                    </span>
                  </span>
                  <span className="col-start-2 flex items-center gap-4 sm:col-start-3">
                    <span
                      className="flex items-center gap-2 border border-ink/15 px-2.5 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink/70"
                    >
                      <span className="inline-block h-1.5 w-1.5" style={{ background: e.club.accent }} />
                      {e.club.name}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                  </span>
                </Link>
              </Reveal>
            ))}
            <div className="border-t border-ink/12" />
          </div>
        </div>
      </section>

      {/* the expanding overlay */}
      <ClubExpander
        active={active}
        expanded={expanded}
        touch={touch}
        reduced={reduced}
        onNavigate={enterClub}
        onClose={collapse}
      />
    </div>
  );
}
