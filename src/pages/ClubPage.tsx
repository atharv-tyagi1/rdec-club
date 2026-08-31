import type { CSSProperties } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { getClub, nextClub } from "../data/clubs";
import Figure from "../components/Figure";
import Monogram from "../components/Monogram";
import Pattern from "../components/Pattern";
import Reveal from "../components/Reveal";

export default function ClubPage() {
  const { clubId } = useParams();
  const club = getClub(clubId);
  if (!club) return <Navigate to="/clubs" replace />;

  const next = nextClub(club.id);
  const theme = {
    "--club": club.accent,
    "--club-deep": club.accentDeep,
    "--club-soft": club.accentSoft,
    /* each club's motion personality drives reveal speed on its page */
    "--rv-dur": `${club.motion.dur}ms`,
  } as CSSProperties;

  return (
    <div style={theme}>
      {/* ================================================= CLUB HERO */}
      <section className="relative overflow-hidden pb-16 pt-[104px] sm:pb-20">
        <Pattern
          motif={club.motif}
          color={club.accent}
          opacity={0.07}
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
        <p
          className="text-hollow pointer-events-none absolute -top-6 right-0 hidden select-none font-display text-[22rem] font-bold leading-none lg:block"
          aria-hidden="true"
        >
          0{club.no}
        </p>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ink/60">
                    <span style={{ color: club.accentDeep }}>
                      <Monogram id={club.id} className="h-4 w-4" strokeWidth={2.6} />
                    </span>
                    RDEC Clubs — Nº 0{club.no}
                  </span>
                  <span
                    className="border px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.2em]"
                    style={{ borderColor: club.accent, color: club.accentDeep }}
                  >
                    {club.category}
                  </span>
                </div>
              </Reveal>

              <h1 className="mt-6 font-display font-semibold leading-[0.9] tracking-[-0.02em]">
                <span className="rise-line" style={{ "--rise-delay": "80ms" } as CSSProperties}>
                  <span className="text-[clamp(3.4rem,10vw,7.5rem)]">
                    {club.name.split(" ").map((word) =>
                      word === club.italicWord ? (
                        <em key={word} className="italic" style={{ color: club.accentDeep }}>
                          {word}
                        </em>
                      ) : (
                        <span key={word}>{word} </span>
                      )
                    )}
                  </span>
                </span>
              </h1>

              <Reveal delay={220}>
                <p className="mt-5 max-w-md font-display text-xl italic leading-snug text-ink/60 sm:text-2xl">
                  {club.tagline}
                </p>
              </Reveal>

              <Reveal delay={300}>
                <dl className="mt-9 grid grid-cols-1 gap-px border-t border-ink/15 sm:grid-cols-3 sm:gap-6">
                  <div className="border-b border-ink/10 pb-3 pt-4 sm:border-b-0">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.22em] text-smoke">Meets</dt>
                    <dd className="mt-1.5 text-[13px] font-semibold">{club.meets}</dd>
                  </div>
                  <div className="border-b border-ink/10 pb-3 pt-4 sm:border-b-0">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.22em] text-smoke">Venue</dt>
                    <dd className="mt-1.5 text-[13px] font-semibold">{club.room}</dd>
                  </div>
                  <div className="pt-4">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.22em] text-smoke">Mentor</dt>
                    <dd className="mt-1.5 text-[13px] font-semibold">{club.leadership[2]?.name}</dd>
                  </div>
                </dl>
              </Reveal>

              <Reveal delay={380}>
                <p className="mt-10 flex items-center gap-3.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
                  <span className="block h-10 w-px overflow-hidden bg-ink/15">
                    <span className="cue-line block h-full w-full" style={{ background: club.accentDeep }} />
                  </span>
                  The story, in five chapters
                </p>
              </Reveal>
            </div>

            <div className="relative lg:col-span-6">
              <span
                className="absolute inset-0 -z-10 translate-x-4 translate-y-4 border"
                style={{ borderColor: club.accent, opacity: 0.45 }}
                aria-hidden="true"
              />
              <Reveal delay={160}>
                <Figure
                  src={club.gallery[0].src}
                  alt={`${club.name} — cover photograph`}
                  caption={club.gallery[0].caption}
                  className="aspect-[4/3] lg:aspect-[5/4]"
                />
              </Reveal>
              <Reveal delay={280}>
                <span
                  className="absolute -bottom-4 left-6 px-3 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.2em] shadow-md"
                  style={{ background: "#17181c", color: "#f2f1eb" }}
                >
                  Est. {club.founded}
                </span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* accent rule */}
      <div className="relative h-2 overflow-hidden" style={{ background: club.accent }}>
        <Pattern motif={club.motif} color={club.onAccent} opacity={0.35} className="absolute inset-0 h-full w-full" />
      </div>

      {/* ================================================= ABOUT */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <p className="font-mono text-[10px] uppercase tracking-[0.26em]" style={{ color: club.accentDeep }}>
                    01 — About
                  </p>
                  <h2 className="mt-4 font-display text-4xl font-semibold leading-[1] tracking-tight sm:text-5xl">
                    The story
                    <br />
                    <em className="italic" style={{ color: club.accentDeep }}>
                      so far.
                    </em>
                  </h2>
                </Reveal>
                <Reveal delay={140}>
                  <dl className="mt-9 border-t border-ink/15">
                    {[
                      ["Founded", String(club.founded)],
                      ["Meets", club.meets],
                      ["Venue", club.room],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-3">
                        <dt className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-smoke">{k}</dt>
                        <dd className="text-right text-[13px] font-semibold">{v}</dd>
                      </div>
                    ))}
                    <div className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-3">
                      <dt className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-smoke">Write to us</dt>
                      <dd>
                        <a href={`mailto:${club.email}`} className="link-line text-[13px] font-semibold" style={{ color: club.accentDeep }}>
                          {club.email}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-8">
              <Reveal>
                <p className="dropcap max-w-2xl text-lg leading-relaxed text-ink/85 sm:text-xl sm:leading-relaxed">
                  {club.about[0]}
                </p>
              </Reveal>
              {club.about.slice(1).map((para, i) => (
                <Reveal key={i} delay={100 + i * 80}>
                  <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink/70">{para}</p>
                </Reveal>
              ))}
              <Reveal delay={220}>
                <blockquote className="mt-12 max-w-xl border-l-[3px] pl-6" style={{ borderColor: club.accent }}>
                  <p className="font-display text-2xl italic leading-snug sm:text-[28px]">
                    “{club.pullQuote}”
                  </p>
                  <footer className="mt-3 font-mono text-[9.5px] uppercase tracking-[0.24em] text-smoke">
                    — Club creed, {club.name}
                  </footer>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= MISSION / VISION */}
      <section className="relative overflow-hidden border-y border-ink/10 py-16 sm:py-20" style={{ background: club.accentSoft }}>
        <Pattern motif={club.motif} color={club.accentDeep} opacity={0.08} className="absolute inset-0 h-full w-full" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.26em]" style={{ color: club.accentDeep }}>
              M—01 · Mission
            </p>
            <p className="mt-5 max-w-md font-display text-2xl leading-snug tracking-tight sm:text-[27px]">
              {club.mission}
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="font-mono text-[10px] uppercase tracking-[0.26em]" style={{ color: club.accentDeep }}>
              V—02 · Vision
            </p>
            <p className="mt-5 max-w-md font-display text-2xl leading-snug tracking-tight sm:text-[27px]">
              {club.vision}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================================================= LEADERSHIP */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.26em]" style={{ color: club.accentDeep }}>
              02 — The People
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1] tracking-tight sm:text-5xl">
              Who carries <em className="italic" style={{ color: club.accentDeep }}>the flag.</em>
            </h2>
          </Reveal>

          <div className="mt-10">
            {club.leadership.map((l, i) => (
              <Reveal key={l.role} delay={i * 90}>
                <div className="group grid items-baseline gap-1.5 border-t border-ink/12 px-2 py-5 transition-all duration-300 hover:bg-bone/80 hover:pl-4 sm:grid-cols-[200px_1fr_auto] sm:gap-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-smoke">{l.role}</p>
                  <p className="font-display text-2xl font-medium tracking-tight transition-colors duration-300 group-hover:[color:var(--club-deep)] sm:text-3xl">
                    {l.name}
                  </p>
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink/50">{l.note}</p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-ink/12" />
            <Reveal delay={200}>
              <p className="mt-5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/40">
                The full committee publishes on the office notice board at the start of every semester.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================= ACHIEVEMENTS — the ledger */}
      <section className="bg-ink py-20 text-paper sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.26em]" style={{ color: club.accent }}>
              03 — The Ledger
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1] tracking-tight sm:text-5xl">
              What the years <em className="italic" style={{ color: club.accent }}>added up</em> to.
            </h2>
          </Reveal>
          <div className="mt-10 max-w-3xl">
            {club.achievements.map((a, i) => (
              <Reveal key={a.year + i} delay={i * 90}>
                <div className="group flex gap-6 border-t border-paper/15 py-5 transition-transform duration-300 hover:translate-x-1.5 sm:gap-10">
                  <span className="w-14 shrink-0 font-mono text-sm font-bold" style={{ color: club.accent }}>
                    {a.year}
                  </span>
                  <p className="text-[15px] leading-relaxed text-paper/80">{a.text}</p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-paper/15" />
          </div>
        </div>
      </section>

      {/* ================================================= EVENTS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.26em]" style={{ color: club.accentDeep }}>
              04 — The Calendar
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1] tracking-tight sm:text-5xl">
              On the <em className="italic" style={{ color: club.accentDeep }}>calendar.</em>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                  <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: club.accent }} />
                  Up next
                </p>
              </Reveal>
              <div className="mt-4">
                {club.upcoming.map((e, i) => (
                  <Reveal key={e.dateISO} delay={i * 90}>
                    <div className="group border-t border-ink/12 py-5 transition-colors hover:bg-bone/70">
                      <div className="flex items-baseline gap-5">
                        <span className="w-20 shrink-0 font-mono text-sm font-bold" style={{ color: club.accentDeep }}>
                          {e.dateLabel}
                        </span>
                        <div>
                          <p className="text-[15px] font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                            {e.title}
                          </p>
                          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">{e.venue}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
                <div className="border-t border-ink/12" />
              </div>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <p className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink/30" />
                  Recent — from the archive
                </p>
              </Reveal>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {club.past.map((e, i) => (
                  <Reveal key={e.dateISO} delay={i * 90}>
                    <figure className="group border border-ink/12 bg-paper transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_rgba(23,24,28,0.3)]">
                      <div className="relative aspect-[4/3] overflow-hidden bg-bone">
                        <Pattern
                          motif={club.motif}
                          color={club.accentDeep}
                          opacity={0.28}
                          className="absolute inset-0 h-full w-full transition-opacity duration-700 group-hover:opacity-60"
                        />
                        <span className="absolute left-3 top-3 font-mono text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: club.accentDeep }}>
                          {e.dateLabel}
                        </span>
                      </div>
                      <figcaption className="px-4 py-3">
                        <p className="text-[13px] font-semibold leading-snug">{e.title}</p>
                        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45">{e.venue}</p>
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= GALLERY */}
      <section className="border-y border-ink/10 bg-bone/80 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.26em]" style={{ color: club.accentDeep }}>
                05 — Frames
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[1] tracking-tight sm:text-5xl">
                From the <em className="italic" style={{ color: club.accentDeep }}>archive.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-xs font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-ink/45">
                Tiled placeholders hold the frame until the club's photography lands
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[185px] md:grid-cols-4">
            {club.gallery.map((g, i) => (
              <Reveal
                key={g.caption}
                delay={(i % 4) * 80}
                className={
                  g.span === "hero"
                    ? "col-span-2 row-span-2"
                    : g.span === "wide"
                      ? "col-span-2"
                      : g.span === "tall"
                        ? "row-span-2"
                        : ""
                }
              >
                <Figure
                  src={g.src}
                  alt={g.caption}
                  caption={g.caption}
                  motif={club.motif}
                  accent={club.accentDeep}
                  className="h-full w-full"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= CLOSING */}
      <section className="relative overflow-hidden py-20 sm:py-28" style={{ background: club.accent }}>
        <Pattern motif={club.motif} color={club.onAccent} opacity={0.14} className="absolute inset-0 h-full w-full" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Reveal>
                <p className="font-mono text-[10px] uppercase tracking-[0.26em]" style={{ color: club.onAccent, opacity: 0.8 }}>
                  Join — {club.meets} · {club.room}
                </p>
                <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl xl:text-7xl" style={{ color: club.onAccent }}>
                  Walk in a student.
                  <br />
                  <em className="italic">Walk out {club.closing}.</em>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${club.email}`}
                    className="group flex items-center gap-2.5 bg-ink px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    {club.email}
                  </a>
                  <Link
                    to="/clubs"
                    className="group flex items-center gap-2.5 border px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 hover:bg-ink"
                    style={{ borderColor: club.onAccent, color: club.onAccent }}
                  >
                    <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
                    All clubs
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={240}>
              <Link to={`/clubs/${next.id}`} className="group block lg:text-right">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em]" style={{ color: club.onAccent, opacity: 0.75 }}>
                  Next flag — 0{next.no} / 07
                </p>
                <p className="mt-2 flex items-center gap-3 font-display text-3xl italic tracking-tight sm:text-4xl" style={{ color: club.onAccent }}>
                  {next.name}
                  <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1.5" />
                </p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
