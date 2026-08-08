// Hand-drawn SVG product illustrations — placeholders for real product
// photography, styled to match the concept design system.

const INK = "#221510";
const PAPER = "#fbf4e8";

type Props = { kind: "pouch" | "tap" | "bag" | "gift"; tint: string; size?: number };

function Mountains({ tint }: { tint: string }) {
  return (
    <g>
      <path d="M0 26 L14 6 L24 18 L34 2 L50 26 Z" fill={tint} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="42" cy="7" r="4.5" fill="#ffc93c" stroke={INK} strokeWidth="2.5" />
    </g>
  );
}

export default function ProductArt({ kind, tint, size = 150 }: Props) {
  if (kind === "pouch") {
    return (
      <svg width={size} height={size * 1.25} viewBox="0 0 160 200" fill="none" aria-hidden>
        {/* straw */}
        <path d="M116 38 L138 6" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        <path d="M116 38 L138 6" stroke="#ffc93c" strokeWidth="4" strokeLinecap="round" />
        {/* pouch body */}
        <path
          d="M34 34 Q34 22 46 22 L114 22 Q126 22 126 34 L132 168 Q132 184 116 184 L44 184 Q28 184 28 168 Z"
          fill={tint} stroke={INK} strokeWidth="5" strokeLinejoin="round"
        />
        {/* crimped top */}
        <path d="M34 44 L126 44" stroke={INK} strokeWidth="4" />
        <path d="M40 33 L46 33 M54 33 L60 33 M68 33 L74 33 M82 33 L88 33 M96 33 L102 33 M110 33 L116 33" stroke={INK} strokeWidth="3" />
        {/* label */}
        <rect x="44" y="70" width="72" height="78" rx="14" fill={PAPER} stroke={INK} strokeWidth="4" />
        <g transform="translate(55 84)"><Mountains tint={tint} /></g>
        <text x="80" y="132" textAnchor="middle" fontFamily="Archivo Black, sans-serif" fontSize="15" fill={INK}>SUPER</text>
        <text x="80" y="146" textAnchor="middle" fontFamily="Archivo Black, sans-serif" fontSize="15" fill={INK}>DUPER</text>
        {/* shine */}
        <path d="M42 60 Q40 120 46 170" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "tap") {
    return (
      <svg width={size * 1.1} height={size * 1.2} viewBox="0 0 190 200" fill="none" aria-hidden>
        {/* handle */}
        <path d="M70 24 Q95 2 120 24" stroke={INK} strokeWidth="7" fill="none" strokeLinecap="round" />
        {/* bag */}
        <path
          d="M30 40 Q30 28 42 28 L148 28 Q160 28 160 40 L166 158 Q166 178 146 178 L44 178 Q24 178 24 158 Z"
          fill={tint} stroke={INK} strokeWidth="5" strokeLinejoin="round"
        />
        <path d="M30 52 L160 52" stroke={INK} strokeWidth="4" />
        {/* label */}
        <rect x="52" y="68" width="86" height="72" rx="14" fill={PAPER} stroke={INK} strokeWidth="4" />
        <g transform="translate(70 80)"><Mountains tint={tint} /></g>
        <text x="95" y="122" textAnchor="middle" fontFamily="Archivo Black, sans-serif" fontSize="14" fill={INK}>COLD BREW</text>
        <text x="95" y="135" textAnchor="middle" fontFamily="Archivo, sans-serif" fontWeight="800" fontSize="10" fill={INK}>50 OZ · ON TAP</text>
        {/* tap spout */}
        <g transform="translate(142 148)">
          <rect x="0" y="0" width="26" height="16" rx="6" fill="#ffc93c" stroke={INK} strokeWidth="4" />
          <rect x="8" y="14" width="10" height="12" rx="3" fill={INK} />
          <circle cx="13" cy="34" r="4" fill={tint} stroke={INK} strokeWidth="2.5" />
        </g>
        <path d="M38 62 Q36 115 42 168" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "bag") {
    return (
      <svg width={size} height={size * 1.25} viewBox="0 0 160 200" fill="none" aria-hidden>
        {/* fold-over top */}
        <path d="M36 44 L124 44 L120 24 Q118 14 106 14 L54 14 Q42 14 40 24 Z" fill={tint} stroke={INK} strokeWidth="5" strokeLinejoin="round" />
        <path d="M36 44 L124 44 L126 54 L34 54 Z" fill={INK} />
        {/* bag body */}
        <path
          d="M34 54 L126 54 L132 170 Q132 186 114 186 L46 186 Q28 186 28 170 Z"
          fill={tint} stroke={INK} strokeWidth="5" strokeLinejoin="round"
        />
        {/* valve */}
        <circle cx="112" cy="72" r="6" fill={PAPER} stroke={INK} strokeWidth="3" />
        {/* label */}
        <rect x="44" y="86" width="72" height="74" rx="14" fill={PAPER} stroke={INK} strokeWidth="4" />
        <g transform="translate(55 98)"><Mountains tint={tint} /></g>
        <text x="80" y="142" textAnchor="middle" fontFamily="Archivo Black, sans-serif" fontSize="13" fill={INK}>FRESH</text>
        <text x="80" y="155" textAnchor="middle" fontFamily="Archivo Black, sans-serif" fontSize="13" fill={INK}>ROASTED</text>
        <path d="M40 66 Q38 125 44 176" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  // gift card
  return (
    <svg width={size * 1.15} height={size * 0.95} viewBox="0 0 200 150" fill="none" aria-hidden>
      <rect x="14" y="26" width="172" height="108" rx="16" fill={tint} stroke={INK} strokeWidth="5" />
      <rect x="14" y="58" width="172" height="18" fill={INK} />
      <rect x="28" y="92" width="84" height="26" rx="8" fill={PAPER} stroke={INK} strokeWidth="3.5" />
      <text x="70" y="110" textAnchor="middle" fontFamily="Archivo Black, sans-serif" fontSize="13" fill={INK}>$25–$100</text>
      {/* bow */}
      <g transform="translate(140 10)">
        <path d="M20 22 Q4 6 14 2 Q26 -2 22 16 Z" fill="#ffc93c" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M24 22 Q40 6 30 2 Q18 -2 22 16 Z" fill="#ffc93c" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
        <circle cx="22" cy="20" r="6" fill="#ffc93c" stroke={INK} strokeWidth="3.5" />
      </g>
      <text x="100" y="50" textAnchor="middle" fontFamily="Archivo Black, sans-serif" fontSize="15" fill={PAPER}>SUPER DUPER</text>
    </svg>
  );
}
