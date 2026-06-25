type CrestProps = { size?: number; className?: string };

/** Ornate gold seal/crest used in the header lockup. */
export function Crest({ size = 44, className = "" }: CrestProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="crestGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.86 0.12 85)" />
          <stop offset="55%" stopColor="oklch(0.72 0.13 80)" />
          <stop offset="100%" stopColor="oklch(0.5 0.09 75)" />
        </linearGradient>
      </defs>
      {/* outer shield */}
      <path
        d="M32 3 L57 11 L57 32 C57 46 46 56 32 61 C18 56 7 46 7 32 L7 11 Z"
        fill="none"
        stroke="url(#crestGold)"
        strokeWidth="1.5"
      />
      {/* inner shield */}
      <path
        d="M32 8 L52 14.5 L52 32 C52 43.5 43.2 51.8 32 56 C20.8 51.8 12 43.5 12 32 L12 14.5 Z"
        fill="none"
        stroke="url(#crestGold)"
        strokeWidth="0.8"
        opacity="0.7"
      />
      {/* crown of three flames */}
      <g fill="url(#crestGold)">
        <circle cx="32" cy="4.5" r="1.2" />
        <circle cx="22" cy="7" r="1" />
        <circle cx="42" cy="7" r="1" />
      </g>
      {/* central Hebrew aleph-like glyph */}
      <g
        fill="url(#crestGold)"
        transform="translate(32 33) scale(0.9)"
        textAnchor="middle"
      >
        <text
          y="6"
          fontFamily="Frank Ruhl Libre, Cormorant Garamond, serif"
          fontSize="20"
          fontWeight="500"
        >
          א
        </text>
      </g>
      {/* laurel sprigs */}
      <g
        fill="none"
        stroke="url(#crestGold)"
        strokeWidth="0.7"
        strokeLinecap="round"
      >
        <path d="M16 38 Q20 44 24 47" />
        <path d="M18 40 L20 39" />
        <path d="M20 43 L22 42" />
        <path d="M22 46 L24 45" />
        <path d="M48 38 Q44 44 40 47" />
        <path d="M46 40 L44 39" />
        <path d="M44 43 L42 42" />
        <path d="M42 46 L40 45" />
      </g>
    </svg>
  );
}

/** Thin gold flourish used beside the Hebrew eyebrow line. */
export function Flourish({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 80 12"
      width={80}
      height={12}
      aria-hidden
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      className="text-[var(--color-olive-pale)]"
    >
      <path
        d="M2 6 H50 M50 6 q5 -5 10 0 q-5 5 -10 0 M62 6 h12 M76 6 l3 -3 M76 6 l3 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
