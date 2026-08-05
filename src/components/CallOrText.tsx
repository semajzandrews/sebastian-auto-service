"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Phone, MessageSquare, ChevronRight } from "lucide-react";
import { site, SMS_HINT } from "@/lib/site";

/**
 * Call OR Text. A dial-only CTA loses every customer who would rather show us
 * the problem than describe it, and on a repair job that photo is half the
 * diagnosis. Both hrefs come from lib/phone in E.164.
 *
 * Sebastian's language: instrument panel. Hairline amber rules, mono readout
 * type, a thin readout strip across the head of the menu. Root class is `.cot`
 * so nothing inherits the page shell.
 */

type Props = {
  variant?: "readout" | "pair";
  /** pair only: primary button treatment */
  tone?: "amber" | "outline";
  className?: string;
  onNavigate?: () => void;
};

export default function CallOrText({
  variant = "readout",
  tone = "amber",
  className = "",
  onNavigate,
}: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (variant === "pair") {
    return (
      <div className={`flex flex-wrap items-center gap-4 ${className}`}>
        <a
          href={site.phoneHref}
          onClick={onNavigate}
          className={
            tone === "amber"
              ? "flex items-center gap-2.5 px-6 py-3.5 bg-[var(--amber)] text-[var(--void)] font-mono text-[0.78rem] tracking-[0.12em] uppercase hover:bg-[var(--amber-hi)] transition-colors"
              : "flex items-center gap-2.5 px-6 py-3.5 border border-[var(--amber)] text-[var(--amber)] font-mono text-[0.78rem] tracking-[0.12em] uppercase hover:bg-[var(--amber)] hover:text-[var(--void)] transition-colors"
          }
        >
          <Phone size={15} strokeWidth={2.4} />
          Call {site.phone}
        </a>
        <a
          href={site.smsHref}
          onClick={onNavigate}
          className="flex items-center gap-2.5 px-6 py-3.5 border border-[var(--border-strong)] text-[var(--ink-soft)] font-mono text-[0.78rem] tracking-[0.12em] uppercase hover:border-[var(--amber)] hover:text-[var(--ink)] transition-colors"
        >
          <MessageSquare size={15} strokeWidth={2.2} />
          Text a photo
        </a>
      </div>
    );
  }

  return (
    <div className={`cot relative ${className}`} ref={rootRef}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`Call or text ${site.phone}`}
        onClick={() => setOpen((v) => !v)}
        className="group flex items-center gap-2 px-3 py-2 sm:px-4 border border-[var(--amber)] text-[var(--amber)] font-mono text-[0.72rem] tracking-[0.16em] uppercase hover:bg-[var(--amber)] hover:text-[var(--void)] transition-colors"
      >
        <Phone size={13} strokeWidth={2.2} />
        <span className="hidden sm:inline">{site.phone}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="absolute right-0 top-[calc(100%+10px)] z-[70] w-[min(19rem,calc(100vw-2rem))] border border-[var(--border-strong)] bg-[var(--void)] shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
          >
            {/* readout strip */}
            <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2 font-mono text-[0.58rem] tracking-[0.24em] uppercase text-[var(--muted)]">
              <span>Reach the bay</span>
              <span className="text-[var(--amber)]">{site.phone}</span>
            </div>

            <a
              href={site.phoneHref}
              role="menuitem"
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
              className="flex items-center gap-3 px-4 py-3.5 text-[var(--ink)] hover:bg-[var(--amber-dim)] hover:text-[var(--amber)] transition-colors"
            >
              <Phone size={16} strokeWidth={2.2} className="text-[var(--amber)]" />
              <span className="flex-1">
                <strong className="block font-mono text-[0.78rem] tracking-[0.14em] uppercase">Call</strong>
                <em className="block not-italic text-[0.78rem] text-[var(--muted)] mt-0.5">
                  Talk it through with the shop
                </em>
              </span>
              <ChevronRight size={14} className="text-[var(--muted)]" />
            </a>

            <a
              href={site.smsHref}
              role="menuitem"
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
              className="flex items-center gap-3 border-t border-[var(--border)] px-4 py-3.5 text-[var(--ink)] hover:bg-[var(--amber-dim)] hover:text-[var(--amber)] transition-colors"
            >
              <MessageSquare size={16} strokeWidth={2.2} className="text-[var(--amber)]" />
              <span className="flex-1">
                <strong className="block font-mono text-[0.78rem] tracking-[0.14em] uppercase">Text</strong>
                <em className="block not-italic text-[0.78rem] text-[var(--muted)] mt-0.5">{SMS_HINT}</em>
              </span>
              <ChevronRight size={14} className="text-[var(--muted)]" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
