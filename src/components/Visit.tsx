"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Phone, Car } from "lucide-react";
import CallOrText from "./CallOrText";
import { site } from "@/lib/site";

export default function Visit() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section ref={ref} id="visit" className="section-pad relative bg-[var(--panel)] border-t border-[var(--border)]">
      <div className="shell">
        <div className="mb-12">
          <span className="tag">CH·06 / Find the shop</span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] text-[var(--ink)] mt-4 max-w-[16ch]">
            Bring it by South Jefferson.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-px bg-[var(--border)] border border-[var(--border)]">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="bg-[var(--bg)] p-9 flex flex-col gap-8"
          >
            <div className="flex gap-4">
              <MapPin size={20} className="text-[var(--amber)] mt-0.5 shrink-0" />
              <div>
                <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-[var(--muted)] mb-1.5">Address</div>
                <p className="text-[var(--ink)] leading-snug">
                  224 S Jefferson St<br />City of Orange, NJ 07050
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone size={20} className="text-[var(--amber)] mt-0.5 shrink-0" />
              <div>
                <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-[var(--muted)] mb-1.5">Phone</div>
                <a href={site.phoneHref} className="text-[var(--ink)] hover:text-[var(--amber)] transition-colors text-[1.1rem]">
                  {site.phone}
                </a>
                <p className="text-[var(--muted)] text-[0.82rem] mt-1.5">
                  Call ahead for current hours, or text a photo of what your car is doing and
                  we will tell you what we see.
                </p>
                <CallOrText variant="pair" tone="outline" className="mt-4" />
              </div>
            </div>

            <div className="flex gap-4">
              <Car size={20} className="text-[var(--amber)] mt-0.5 shrink-0" />
              <div>
                <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-[var(--muted)] mb-1.5">Service</div>
                <p className="text-[var(--ink-soft)] leading-snug text-[0.95rem]">
                  Full-service repair and diagnostics. Foreign and domestic.
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps?q=224+S+Jefferson+St,+Orange,+NJ+07050"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[var(--amber)] text-[var(--void)] font-mono text-[0.74rem] tracking-[0.12em] uppercase hover:bg-[var(--amber-hi)] transition-colors"
            >
              Get directions
            </a>
          </motion.div>

          {/* Map */}
          <div className="bg-[var(--bg)] min-h-[360px] relative">
            <iframe
              title="Map to Sebastian Auto Service, 224 S Jefferson St, City of Orange, NJ"
              src="https://www.google.com/maps?q=224+S+Jefferson+St,+Orange,+NJ+07050&output=embed"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: "grayscale(0.4) invert(0.92) hue-rotate(180deg) contrast(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
