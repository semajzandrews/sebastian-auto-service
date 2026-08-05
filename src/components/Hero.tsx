"use client";

import { motion } from "motion/react";
import { Phone, ArrowDown } from "lucide-react";
import Tachometer from "./Tachometer";
import CallOrText from "./CallOrText";

const line1 = ["We", "find", "what's"];
const line2 = ["actually", "wrong."];

export default function Hero() {
  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative min-h-[100svh] flex items-start lg:items-center overflow-hidden pt-24 lg:pt-[72px]">
      <div className="absolute inset-0 grid-etch opacity-60" />
      <div
        className="orb absolute pointer-events-none"
        style={{
          top: "8%",
          right: "-6%",
          width: "560px",
          height: "560px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--amber-glow) 0%, transparent 68%)",
        }}
      />
      <div
        className="orb-alt absolute pointer-events-none"
        style={{
          bottom: "-12%",
          left: "-8%",
          width: "440px",
          height: "440px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(95,208,138,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="shell relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center py-16">
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="font-mono text-[0.7rem] tracking-[0.28em] text-[var(--amber)]">
              CH·01
            </span>
            <span className="w-10 h-px bg-[var(--border-strong)]" />
            <span className="font-mono text-[0.7rem] tracking-[0.24em] text-[var(--muted)] uppercase">
              City of Orange, NJ
            </span>
          </motion.div>

          <h1 className="font-display text-[var(--ink)] text-[clamp(3rem,8vw,6.4rem)]">
            <span className="block overflow-hidden">
              {line1.map((w, i) => (
                <motion.span
                  key={w}
                  className="inline-block"
                  style={{ marginRight: "0.24em" }}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.32 + i * 0.08, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden">
              {line2.map((w, i) => (
                <motion.span
                  key={w}
                  className="inline-block"
                  style={{ marginRight: "0.24em", color: i === 0 ? "var(--amber)" : undefined }}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.32 + (line1.length + i) * 0.08, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-7 max-w-[30rem] text-[1.02rem] leading-relaxed text-[var(--ink-soft)]"
          >
            A full-service shop on South Jefferson Street. We read the car before we touch
            it, tell you straight what it needs, and send it back running right. Foreign and
            domestic, in and out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <CallOrText variant="pair" />
            <a
              href="#services"
              onClick={(e) => scrollTo(e, "#services")}
              className="flex items-center gap-2.5 px-6 py-3.5 border border-[var(--border-strong)] text-[var(--ink-soft)] font-mono text-[0.78rem] tracking-[0.12em] uppercase hover:border-[var(--amber)] hover:text-[var(--ink)] transition-colors"
            >
              See the work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.7 }}
            className="mt-10 flex items-center gap-7 font-mono text-[0.68rem] tracking-[0.18em] text-[var(--muted)] uppercase"
          >
            <span className="flex items-center gap-2">
              <span className="text-[var(--amber)] text-[0.9rem]">★</span> 4.7 / 117 reviews
            </span>
            <span className="w-px h-4 bg-[var(--border-strong)]" />
            <span>Foreign &amp; domestic</span>
          </motion.div>
        </div>

        {/* Right column — instrument */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[440px]"
        >
          <div className="relative aspect-square">
            <Tachometer />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {[
              ["117", "SERVICED"],
              ["4.7", "AVG ★"],
              ["07050", "ORANGE NJ"],
            ].map(([v, k]) => (
              <div key={k} className="bg-[var(--bg)] px-3 py-3 text-center">
                <div className="font-display text-[1.4rem] text-[var(--ink)]">{v}</div>
                <div className="font-mono text-[0.56rem] tracking-[0.2em] text-[var(--muted)] mt-1">{k}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        onClick={(e) => scrollTo(e, "#services")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[0.6rem] tracking-[0.28em] text-[var(--muted)]"
      >
        SCROLL
        <ArrowDown size={14} className="flicker text-[var(--amber)]" />
      </motion.a>
    </section>
  );
}
