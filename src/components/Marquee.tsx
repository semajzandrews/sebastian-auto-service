"use client";

const ITEMS = [
  "DIAGNOSTICS",
  "BRAKES",
  "OIL & FLUIDS",
  "BATTERIES",
  "SUSPENSION",
  "HEATING & A/C",
  "TIRES",
  "CHECK ENGINE",
  "FOREIGN & DOMESTIC",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative border-y border-[var(--border)] bg-[var(--panel)] overflow-hidden py-5">
      <div className="marquee-track">
        {row.map((it, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display text-[1.6rem] text-[var(--ink-soft)] px-7">{it}</span>
            <span className="text-[var(--amber)] text-[0.7rem]">◦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
