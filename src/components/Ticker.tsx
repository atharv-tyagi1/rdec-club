import { useNavigate } from "react-router-dom";
import { CLUBS } from "../data/clubs";
import Monogram from "./Monogram";

function Spark({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" style={{ color }} aria-hidden="true">
      <path
        d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/** Ink marquee strip of the seven flags — pauses on hover, static under reduced motion. */
export default function Ticker() {
  const navigate = useNavigate();
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {CLUBS.map((club) => (
        <button
          key={`${club.id}${hidden ? "-dup" : ""}`}
          onClick={() => navigate(`/clubs/${club.id}`)}
          tabIndex={hidden ? -1 : 0}
          className="group flex items-center gap-4 px-5 py-3 sm:px-7"
        >
          <span style={{ color: club.accent }} className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
            <Monogram id={club.id} className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="font-display text-xl italic tracking-wide text-paper/90 transition-colors group-hover:text-paper sm:text-2xl">
            {club.name}
          </span>
          <span className="ml-3">
            <Spark color={club.accent} />
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="marquee overflow-hidden border-y border-ink bg-ink" role="marquee" aria-label="All seven clubs">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
