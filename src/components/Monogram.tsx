import type { ClubId } from "../data/clubs";

interface Props {
  id: ClubId;
  className?: string;
  strokeWidth?: number;
}

/** Hand-drawn geometric marks — one per club, all stroke-based (currentColor). */
export default function Monogram({ id, className = "h-8 w-8", strokeWidth = 2 }: Props) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {id === "mehfil" && (
        <>
          <path d="M10 38 C10 21 17 10 24 10 C31 10 38 21 38 38" />
          <path d="M6 38 H42" />
          <circle cx="24" cy="28" r="2.6" fill="currentColor" stroke="none" />
          <path d="M24 38 V33" />
        </>
      )}
      {id === "velocity" && (
        <>
          <polyline points="10,12 26,24 10,36" />
          <polyline points="21,12 37,24 21,36" />
          <path d="M4 17 H10" />
          <path d="M4 31 H10" />
        </>
      )}
      {id === "hottake" && (
        <>
          <circle cx="16" cy="17" r="5" fill="currentColor" stroke="none" />
          <path d="M16 19 C16 28 13 32 8 34" />
          <circle cx="33" cy="17" r="5" fill="currentColor" stroke="none" />
          <path d="M33 19 C33 28 30 32 25 34" />
          <path d="M41 10 L9 42" />
        </>
      )}
      {id === "nexora" && (
        <>
          <path d="M24 6 L39 15 V33 L24 42 L9 33 V15 Z" />
          <circle cx="24" cy="24" r="2.6" fill="currentColor" stroke="none" />
          <path d="M24 21.4 V12" />
          <path d="M26.3 25.5 L33 30" />
          <path d="M21.7 25.5 L15 30" />
          <circle cx="24" cy="10.5" r="1.8" fill="currentColor" stroke="none" />
          <circle cx="34.5" cy="31" r="1.8" fill="currentColor" stroke="none" />
          <circle cx="13.5" cy="31" r="1.8" fill="currentColor" stroke="none" />
        </>
      )}
      {id === "sukham" && (
        <>
          <path d="M14 30 a10 10 0 0 1 20 0" />
          <path d="M6 30 H42" />
          <path d="M24 14 V7" />
          <path d="M15 16 L10.5 11.5" />
          <path d="M33 16 L37.5 11.5" />
          <path d="M13 37 a11 5.5 0 0 0 22 0" />
        </>
      )}
      {id === "spotlight" && (
        <>
          <circle cx="24" cy="24" r="11" />
          <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
          <path d="M24 9 V3" />
          <path d="M24 39 V45" />
          <path d="M9 24 H3" />
          <path d="M39 24 H45" />
          <path d="M34.5 13.5 L38.5 9.5" />
          <path d="M9.5 38.5 L13.5 34.5" />
        </>
      )}
      {id === "placement-cell" && (
        <>
          <polyline points="7,40 7,32 16,32 16,24 25,24 25,16 34,16 34,10" />
          <path d="M27 17 L40 5" />
          <path d="M40 5 H32.5" />
          <path d="M40 5 V12.5" />
        </>
      )}
    </svg>
  );
}
