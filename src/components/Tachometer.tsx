"use client";

import { motion, useReducedMotion } from "motion/react";

/* Signature moment: a live analog tachometer that sweeps to redline on load,
   then settles to a running idle. Auto = precision = instrumentation. */

const CX = 200;
const CY = 200;
const R = 150;
const START = 135; // degrees, value 0 (lower-left)
const SWEEP = 270; // degrees across the dial
const MAX = 8; // x1000 rpm

const rad = (deg: number) => (deg * Math.PI) / 180;
const polar = (r: number, deg: number) => ({
  x: CX + r * Math.cos(rad(deg)),
  y: CY + r * Math.sin(rad(deg)),
});
const valDeg = (v: number) => START + (v / MAX) * SWEEP;

const arcPath = (vFrom: number, vTo: number, r: number) => {
  const a = polar(r, valDeg(vFrom));
  const b = polar(r, valDeg(vTo));
  const large = (valDeg(vTo) - valDeg(vFrom)) > 180 ? 1 : 0;
  return `M ${a.x.toFixed(2)} ${a.y.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${b.x.toFixed(2)} ${b.y.toFixed(2)}`;
};

const ticks = Array.from({ length: MAX * 4 + 1 }, (_, i) => i / 4);
const READING = 4.7;                        // matches the 4.7 rating in the readout
const readingRot = (READING / MAX) * SWEEP; // where the needle comes to rest
const revPeak = (7.4 / MAX) * SWEEP;        // one clean rev toward (not past) redline

export default function Tachometer() {
  const reduce = useReducedMotion();
  // Foot on the gas: a single smooth rev toward redline, then settle onto 4.7.
  const needleAnim = reduce
    ? { rotate: readingRot }
    : { rotate: [0, revPeak, readingRot] };

  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      role="img"
      aria-label="Tachometer reading the shop rating, four point seven"
    >
      <defs>
        <radialGradient id="face" cx="50%" cy="42%" r="65%">
          <stop offset="0%" stopColor="#1b1f27" />
          <stop offset="70%" stopColor="#101216" />
          <stop offset="100%" stopColor="#0a0b0d" />
        </radialGradient>
        <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Dial face */}
      <circle cx={CX} cy={CY} r={R + 22} fill="url(#face)" stroke="var(--steel)" strokeWidth="1.5" />
      <circle cx={CX} cy={CY} r={R + 6} fill="none" stroke="var(--border)" strokeWidth="1" />

      {/* Base + redline arcs */}
      <path d={arcPath(0, 6.5, R)} fill="none" stroke="var(--steel)" strokeWidth="3" strokeLinecap="round" />
      <path d={arcPath(6.5, 8, R)} fill="none" stroke="var(--redline)" strokeWidth="3" strokeLinecap="round" opacity="0.9" />

      {/* Ticks */}
      {ticks.map((v) => {
        const major = Number.isInteger(v);
        const inner = major ? R - 18 : R - 9;
        const a = polar(R, valDeg(v));
        const b = polar(inner, valDeg(v));
        const red = v >= 6.5;
        return (
          <line
            key={v}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke={red ? "var(--redline)" : major ? "var(--ink-soft)" : "var(--muted)"}
            strokeWidth={major ? 2 : 1}
            opacity={major ? 0.95 : 0.5}
          />
        );
      })}

      {/* Numerals */}
      {Array.from({ length: MAX + 1 }, (_, n) => {
        const p = polar(R - 38, valDeg(n));
        return (
          <text
            key={n}
            x={p.x}
            y={p.y + 5}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="17"
            fill={n >= 7 ? "var(--redline)" : "var(--ink-soft)"}
          >
            {n}
          </text>
        );
      })}

      {/* x1000 r/min label */}
      <text x={CX} y={CY + 74} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="3" fill="var(--muted)">
        x1000 r/min
      </text>

      {/* Center readout */}
      <text x={CX} y={CY - 6} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="800" fontSize="46" fill="var(--ink)">
        4.7
      </text>
      <text x={CX} y={CY + 20} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="3" fill="var(--amber)">
        117 REVIEWS
      </text>

      {/* Needle */}
      <motion.g
        style={{ transformBox: "view-box", transformOrigin: "200px 200px" }}
        initial={{ rotate: 0 }}
        animate={needleAnim}
        transition={
          reduce
            ? { duration: 0 }
            : { duration: 2.2, ease: [0.16, 1, 0.3, 1], times: [0, 0.52, 1] }
        }
      >
        <g filter="url(#glow)">
          <line x1={CX} y1={CY} {...{ x2: polar(R - 6, START).x, y2: polar(R - 6, START).y }} stroke="var(--amber-hi)" strokeWidth="3.4" strokeLinecap="round" />
          <line x1={CX} y1={CY} {...{ x2: polar(34, START + 180).x, y2: polar(34, START + 180).y }} stroke="var(--amber-deep)" strokeWidth="4" strokeLinecap="round" />
        </g>
      </motion.g>

      {/* Hub */}
      <circle cx={CX} cy={CY} r="13" fill="#0a0b0d" stroke="var(--amber)" strokeWidth="2" />
      <circle cx={CX} cy={CY} r="4" fill="var(--amber-hi)" />
    </svg>
  );
}
