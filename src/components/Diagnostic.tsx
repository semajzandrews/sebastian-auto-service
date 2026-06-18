"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const STEPS = [
  {
    n: "01",
    title: "Drop it off",
    body: "Tell us what the car is doing. No appointment needed for a look, and you talk to the person who works on it.",
  },
  {
    n: "02",
    title: "We read it",
    body: "Scan, test, and trace the real fault. We do not throw parts at a problem and hope. The diagnosis comes first.",
  },
  {
    n: "03",
    title: "Straight quote",
    body: "You hear the price and the reason before anything happens. Nothing gets done without your go-ahead.",
  },
  {
    n: "04",
    title: "Dialed in",
    body: "Fixed, road-tested, and handed back running right. That is the whole point of the bay.",
  },
];

export default function Diagnostic() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section ref={ref} id="diagnostic" className="section-pad relative bg-[var(--panel)] border-y border-[var(--border)]">
      <div className="shell grid lg:grid-cols-2 gap-14 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] overflow-hidden border border-[var(--border)]">
            <img
              src="/images/bay-wrench.jpg"
              alt="A technician working on an engine in the bay"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "saturate(0.82) contrast(1.05) brightness(0.78)" }}
            />
            <div
              className="absolute inset-0 mix-blend-overlay"
              style={{ background: "linear-gradient(135deg, rgba(232,162,60,0.22) 0%, transparent 55%, rgba(10,11,13,0.5) 100%)" }}
            />
            <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 120px rgba(10,11,13,0.7)" }} />
            <span className="absolute bottom-5 left-5 font-mono text-[0.62rem] tracking-[0.22em] text-[var(--ink-soft)] uppercase">
              The bay · S Jefferson St
            </span>
          </div>
          <div
            className="absolute -z-0 pointer-events-none"
            style={{ inset: "16px -16px -16px 16px", border: "1px solid var(--amber-dim)" }}
          />
        </motion.div>

        {/* Steps */}
        <div className="order-1 lg:order-2">
          <span className="tag">CH·03 / How a visit works</span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] text-[var(--ink)] mt-4 mb-10 max-w-[14ch]">
            No mystery. No runaround.
          </h2>

          <div className="flex flex-col">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="grid grid-cols-[auto_1fr] gap-6 py-6 border-t border-[var(--border)] last:border-b"
              >
                <span className="font-mono text-[0.8rem] text-[var(--amber)] pt-1.5 tabular-nums">{s.n}</span>
                <div>
                  <h3 className="font-display text-[1.45rem] text-[var(--ink)] mb-1.5">{s.title}</h3>
                  <p className="text-[0.93rem] leading-relaxed text-[var(--muted)] max-w-[34ch]">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
