"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const STATS = [
  { v: "4.7", k: "Average rating", s: "★★★★★" },
  { v: "117", k: "Reviews and counting", s: "" },
  { v: "F+D", k: "Foreign and domestic", s: "" },
];

export default function Proof() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} id="proof" className="relative">
      {/* Full-bleed graded band */}
      <div className="relative min-h-[460px] flex items-center overflow-hidden">
        <img
          src="/images/garage.jpg"
          alt="Cars in the service garage"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "saturate(0.72) contrast(1.08) brightness(0.5)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--bg) 0%, rgba(10,11,13,0.65) 40%, rgba(10,11,13,0.88) 100%)" }} />
        <div
          className="orb absolute pointer-events-none"
          style={{ top: "10%", left: "30%", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle, var(--amber-glow) 0%, transparent 70%)" }}
        />

        <div className="shell relative section-pad w-full">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-[24ch]"
          >
            <span className="tag">CH·04 / The record</span>
            <h2 className="font-display text-[clamp(2.4rem,6vw,4.4rem)] text-[var(--ink)] mt-4">
              Earned one car at a time.
            </h2>
            <p className="mt-5 text-[var(--ink-soft)] leading-relaxed max-w-[42ch]">
              A 4.7 average across 117 reviews is not luck. It is what happens when the
              shop tells people the truth and the car actually gets fixed.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] max-w-[680px]">
            {STATS.map((st, i) => (
              <motion.div
                key={st.k}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                className="bg-[rgba(10,11,13,0.82)] backdrop-blur-sm px-7 py-8"
              >
                <div className="font-display text-[2.8rem] text-[var(--amber)] leading-none">{st.v}</div>
                {st.s && <div className="text-[var(--amber-hi)] text-[0.8rem] mt-2 tracking-[0.2em]">{st.s}</div>}
                <div className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-[var(--muted)] mt-3">{st.k}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
