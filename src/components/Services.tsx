"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Gauge,
  Disc3,
  Droplet,
  BatteryCharging,
  Wind,
  CircleDot,
} from "lucide-react";

const SERVICES = [
  {
    ch: "02",
    icon: Gauge,
    title: "Diagnostics",
    body: "Check-engine lights, rough idle, warning chimes. We scan, test, and trace the fault to its source before anyone reaches for a wrench.",
  },
  {
    ch: "03",
    icon: Disc3,
    title: "Brakes",
    body: "Pads, rotors, calipers, lines, and the parking brake. We measure wear and tell you what is safe to wait on and what is not.",
  },
  {
    ch: "04",
    icon: Droplet,
    title: "Oil & Fluids",
    body: "Oil and filter, coolant, transmission, brake, and power-steering fluid. Clean fluids are the cheapest repair you will ever buy.",
  },
  {
    ch: "05",
    icon: BatteryCharging,
    title: "Batteries & Charging",
    body: "No-starts, slow cranks, and dash warnings. We test the battery, alternator, and starter so you are not guessing in a parking lot.",
  },
  {
    ch: "06",
    icon: Wind,
    title: "Heating & A/C",
    body: "Weak cold air, no heat, or a cabin that fogs over. We find the leak or the part and get the climate working again.",
  },
  {
    ch: "07",
    icon: CircleDot,
    title: "Tires & Suspension",
    body: "Mounting, rotation, and the clunks and pulls that come from worn struts, bushings, and steering parts. Smooth and straight again.",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section ref={ref} id="services" className="section-pad relative">
      <div className="shell">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <span className="tag">CH·02 / The Work</span>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] text-[var(--ink)] mt-4 max-w-[16ch]">
              Everything a daily driver needs.
            </h2>
          </div>
          <p className="max-w-[26rem] text-[var(--muted)] leading-relaxed">
            A full-service bay handles the whole car, not just the easy jobs. Here is
            what rolls through on a normal week.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.ch}
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group relative bg-[var(--bg)] p-8 min-h-[230px] flex flex-col"
              >
                <span className="absolute top-6 right-7 font-mono text-[0.7rem] tracking-[0.2em] text-[var(--steel)] group-hover:text-[var(--amber)] transition-colors">
                  {s.ch}
                </span>
                <Icon size={26} strokeWidth={1.5} className="text-[var(--amber)] mb-6" />
                <h3 className="font-display text-[1.5rem] text-[var(--ink)] mb-3">{s.title}</h3>
                <p className="text-[0.92rem] leading-relaxed text-[var(--muted)]">{s.body}</p>
                <span className="absolute left-0 bottom-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 bg-[var(--amber)] transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>

        <p className="mt-7 font-mono text-[0.72rem] tracking-[0.14em] text-[var(--muted)] uppercase">
          Not listed? Call and ask. If it has an engine, we have probably seen it.
        </p>
      </div>
    </section>
  );
}
