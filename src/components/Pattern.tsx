import { useId } from "react";
import type { Motif } from "../data/clubs";

interface Props {
  motif: Motif;
  color?: string;
  className?: string;
  opacity?: number;
}

/** Decorative per-club motif, tiled as an SVG pattern. Purely ambient. */
export default function Pattern({ motif, color = "currentColor", className = "", opacity = 1 }: Props) {
  const uid = useId().replace(/:/g, "");

  const tile = (() => {
    switch (motif) {
      case "arches":
        return {
          size: 22,
          node: (
            <path
              d="M3 20 V12 a8 8 0 0 1 16 0 V20"
              fill="none"
              stroke={color}
              strokeWidth="1.4"
            />
          ),
        };
      case "speed":
        return {
          size: 26,
          node: (
            <>
              <line x1="-2" y1="28" x2="28" y2="-2" stroke={color} strokeWidth="1.6" />
              <line x1="-2" y1="13" x2="13" y2="-2" stroke={color} strokeWidth="0.8" />
            </>
          ),
        };
      case "halftone":
        return {
          size: 15,
          node: (
            <>
              <circle cx="4" cy="4" r="2.2" fill={color} />
              <circle cx="11.5" cy="11.5" r="1.2" fill={color} />
            </>
          ),
        };
      case "circuit":
        return {
          size: 34,
          node: (
            <>
              <path d="M0 17 H13 V5 H34" fill="none" stroke={color} strokeWidth="1.2" />
              <path d="M17 34 V24 H34" fill="none" stroke={color} strokeWidth="1.2" />
              <circle cx="13" cy="17" r="2.4" fill={color} />
              <circle cx="17" cy="24" r="2.4" fill="none" stroke={color} strokeWidth="1.2" />
            </>
          ),
        };
      case "leaves":
        return {
          size: 38,
          node: (
            <>
              <path
                d="M8 28 C10 17 19 10 29 7 C27 19 18 26 8 28 Z"
                fill="none"
                stroke={color}
                strokeWidth="1.3"
              />
              <path d="M8 28 L29 7" stroke={color} strokeWidth="0.8" />
            </>
          ),
        };
      case "rays":
        return {
          size: 44,
          node: (
            <>
              <circle cx="0" cy="44" r="10" fill="none" stroke={color} strokeWidth="1.2" />
              <circle cx="0" cy="44" r="22" fill="none" stroke={color} strokeWidth="1.2" />
              <circle cx="0" cy="44" r="34" fill="none" stroke={color} strokeWidth="1.2" />
            </>
          ),
        };
      case "steps":
        return {
          size: 26,
          node: (
            <path
              d="M0 26 V18 H8 V10 H16 V2 H26"
              fill="none"
              stroke={color}
              strokeWidth="1.3"
            />
          ),
        };
    }
  })();

  return (
    <svg className={className} style={{ opacity }} aria-hidden="true">
      <defs>
        <pattern id={`pt-${uid}`} width={tile.size} height={tile.size} patternUnits="userSpaceOnUse">
          {tile.node}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#pt-${uid})`} />
    </svg>
  );
}
