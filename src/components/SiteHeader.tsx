import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getClub } from "../data/clubs";

const NAV: [string, string][] = [
  ["roster", "The Roster"],
  ["life", "Campus Life"],
  ["calendar", "Calendar"],
  ["contact", "Contact"],
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
}

export default function SiteHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const club = /^\/clubs\/.+/.test(location.pathname)
    ? getClub(location.pathname.split("/")[2])
    : undefined;

  const go = (id: string) => {
    if (location.pathname !== "/clubs") {
      navigate("/clubs");
      window.setTimeout(() => scrollToId(id), 80);
    } else {
      scrollToId(id);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30">
      {/* institutional hairline */}
      <div className="h-[3px] bg-maroon" />
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-ink/10 bg-paper/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link to="/clubs" className="group flex items-center gap-3" aria-label="Clubs at RDEC — home">
            <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
              <circle cx="20" cy="20" r="18.5" fill="none" stroke="#7c2130" strokeWidth="1.6" />
              <circle cx="20" cy="20" r="14.5" fill="none" stroke="#7c2130" strokeOpacity="0.35" strokeWidth="0.8" />
              <text
                x="20"
                y="25.5"
                textAnchor="middle"
                fontFamily="Fraunces, Georgia, serif"
                fontStyle="italic"
                fontWeight="600"
                fontSize="14"
                fill="#7c2130"
              >
                RD
              </text>
            </svg>
            <span className="leading-tight">
              <span className="block text-[12.5px] font-bold tracking-[0.14em] text-ink">
                R.D. ENGINEERING COLLEGE
              </span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.22em] text-smoke">
                Office of Student Life · Ghaziabad
              </span>
            </span>
          </Link>

          {club ? (
            <div className="flex items-center gap-3 sm:gap-5">
              <span className="hidden font-display text-lg italic sm:block" style={{ color: club.accentDeep }}>
                {club.name}
              </span>
              <span className="hidden h-4 w-px bg-ink/20 sm:block" />
              <Link
                to="/clubs"
                className="group flex items-center gap-2 border border-ink/25 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
                All Clubs
              </Link>
            </div>
          ) : (
            <nav className="flex items-center gap-1 sm:gap-2" aria-label="Sections">
              {NAV.map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="link-line hidden px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/70 hover:text-ink md:block"
                >
                  {label}
                </button>
              ))}
              <span className="mx-2 hidden h-4 w-px bg-ink/15 md:block" />
              <span className="hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-maroon lg:flex">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-maroon" />
                Session 2025–26
              </span>
              <button
                onClick={() => go("roster")}
                className="border border-ink/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-paper md:hidden"
              >
                Roster
              </button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
