"use client";

import { Phone, MessageSquare } from "lucide-react";
import { site } from "@/lib/site";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "The Bay", href: "#diagnostic" },
  { label: "Reviews", href: "#proof" },
  { label: "The Shop", href: "#story" },
  { label: "Visit", href: "#visit" },
];

export default function Footer() {
  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--void)]">
      <div className="shell py-16">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-12">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[1.6rem] text-[var(--ink)]">SEBASTIAN</span>
              <span className="font-mono text-[0.6rem] tracking-[0.26em] text-[var(--amber)]">AUTO SERVICE</span>
            </div>
            <p className="mt-4 text-[var(--muted)] leading-relaxed max-w-[34ch] text-[0.92rem]">
              Full-service auto repair on South Jefferson Street in the City of Orange, NJ.
              Diagnosed right, fixed once.
            </p>
            <div className="mt-6 flex flex-col items-start gap-2.5">
              <a href={site.phoneHref} className="inline-flex items-center gap-2.5 font-mono text-[0.8rem] tracking-[0.1em] text-[var(--amber)] hover:text-[var(--amber-hi)] transition-colors">
                <Phone size={15} /> {site.phone}
              </a>
              <a href={site.smsHref} className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] tracking-[0.1em] text-[var(--ink-soft)] hover:text-[var(--amber)] transition-colors">
                <MessageSquare size={15} /> Text a photo of the problem
              </a>
            </div>
          </div>

          <div>
            <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-[var(--muted)] mb-5">Explore</div>
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => go(e, l.href)} className="text-[var(--ink-soft)] hover:text-[var(--amber)] transition-colors text-[0.95rem]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-[var(--muted)] mb-5">Visit</div>
            <p className="text-[var(--ink-soft)] leading-relaxed text-[0.95rem]">
              224 S Jefferson St<br />
              City of Orange, NJ 07050
            </p>
            <p className="text-[var(--muted)] text-[0.82rem] mt-4">
              Call ahead for current hours.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-mono text-[0.62rem] tracking-[0.14em] text-[var(--muted)]">
            © {new Date().getFullYear()} Sebastian Auto Service LLC
          </span>
          <span className="font-mono text-[0.62rem] tracking-[0.18em] text-[var(--steel)] uppercase">
            Foreign &amp; domestic · Orange, NJ · <a href="https://bysemaj.com" target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline transition-opacity hover:opacity-80">BUILT · BYSEMAJ.COM</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
