import { Link } from "react-router-dom";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import { CLUBS } from "../data/clubs";
import Monogram from "./Monogram";

export default function SiteFooter() {
  return (
    <footer id="contact" className="relative bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gild">
              04 — Contact & Directions
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-tight sm:text-6xl">
              Find your <em className="italic text-gild">flag</em>.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-paper/60">
              Every club meets weekly and takes new members at the start of each
              semester. Walk into any meet, or write to the Office of Student
              Life — the roster is open to every RDECian.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:studentlife@rdec.ac.in"
                className="group flex items-center gap-2.5 bg-maroon px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gild hover:text-ink"
              >
                <Mail className="h-3.5 w-3.5" />
                studentlife@rdec.ac.in
              </a>
              <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                      ? "auto"
                      : "smooth",
                  })
                }
                className="group flex items-center gap-2.5 border border-paper/25 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/80 transition-colors hover:border-paper hover:text-paper"
              >
                Back to top
                <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-paper/40">
              The Roster — Index
            </p>
            <ul className="mt-4 border-t border-paper/12">
              {CLUBS.map((club) => (
                <li key={club.id}>
                  <Link
                    to={`/clubs/${club.id}`}
                    className="group flex items-center gap-3.5 border-b border-paper/12 py-2.5 transition-all duration-300 hover:pl-2"
                  >
                    <span className="font-mono text-[10px] text-paper/35">0{club.no}</span>
                    <span style={{ color: club.accent }} className="transition-transform duration-300 group-hover:scale-110">
                      <Monogram id={club.id} className="h-4 w-4" strokeWidth={2.6} />
                    </span>
                    <span className="font-display text-lg tracking-wide text-paper/85 transition-colors group-hover:text-paper">
                      {club.name}
                    </span>
                    <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.16em] text-paper/30">
                      {club.category}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/40">
            <MapPin className="h-3 w-3" />
            Delhi–Meerut Road, Ghaziabad, Uttar Pradesh 201003
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/40">
            © 2026 R.D. Engineering College — Crafted with the Student Web Guild
          </p>
        </div>
      </div>
    </footer>
  );
}
