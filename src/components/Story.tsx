"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function Story() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section ref={ref} id="story" className="section-pad relative">
      <div className="shell grid lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
        <div>
          <span className="tag">CH·05 / The shop</span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] text-[var(--ink)] mt-4 mb-6 max-w-[15ch]">
            A neighborhood shop that does it the right way.
          </h2>
          <div className="space-y-5 text-[var(--ink-soft)] leading-relaxed max-w-[44ch]">
            <p>
              Sebastian Auto Service sits on South Jefferson Street in the City of Orange.
              It is the kind of shop you send your family to: clear answers, fair work, and
              a car that comes back better than it went in.
            </p>
            <p>
              Foreign or domestic, an oil change or a hard-to-find rattle, the approach does
              not change. Find the real problem, explain it in plain language, and fix it so
              it stays fixed.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {["Honest quotes", "Real diagnostics", "Done right once"].map((t) => (
              <span
                key={t}
                className="font-mono text-[0.66rem] tracking-[0.14em] uppercase px-3.5 py-2 border text-[var(--ink-soft)]"
                style={{ borderColor: "var(--amber-dim)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[5/4] overflow-hidden border border-[var(--border)]">
            <img
              src="/images/shop-lift.jpg"
              alt="A vehicle on the lift in the service bay"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "saturate(0.8) contrast(1.05) brightness(0.82)" }}
            />
            <div
              className="absolute inset-0 mix-blend-overlay"
              style={{ background: "linear-gradient(160deg, rgba(232,162,60,0.18) 0%, transparent 50%, rgba(10,11,13,0.4) 100%)" }}
            />
          </div>
          <div
            className="absolute bottom-5 right-5 bg-[var(--void)] border border-[var(--amber-dim)] px-5 py-3.5"
          >
            <div className="font-display text-[1.3rem] text-[var(--amber)] leading-none">4.7 ★</div>
            <div className="font-mono text-[0.56rem] tracking-[0.18em] text-[var(--muted)] mt-1.5">117 REVIEWS</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
