"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "The Bay", href: "#diagnostic" },
  { label: "Reviews", href: "#proof" },
  { label: "Visit", href: "#visit" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50"
      style={{
        backdropFilter: scrolled ? "blur(14px)" : "none",
        background: scrolled ? "rgba(10,11,13,0.78)" : "transparent",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        transition: "background 0.4s ease, border-color 0.4s ease",
      }}
    >
      <nav className="shell flex items-center justify-between h-[72px]">
        <a href="#top" onClick={(e) => go(e, "#top")} className="flex items-baseline gap-2 leading-none">
          <span className="font-display text-[1.35rem] text-[var(--ink)]">SEBASTIAN</span>
          <span className="font-mono text-[0.6rem] tracking-[0.28em] text-[var(--amber)] hidden sm:inline">
            AUTO&nbsp;SERVICE
          </span>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+19737311111"
            className="group flex items-center gap-2 px-4 py-2 border border-[var(--amber)] text-[var(--amber)] font-mono text-[0.72rem] tracking-[0.16em] uppercase hover:bg-[var(--amber)] hover:text-[var(--void)] transition-colors"
          >
            <Phone size={13} strokeWidth={2.2} />
            (973) 731-1111
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-[var(--ink)]"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[var(--void)] flex flex-col"
          >
            <div className="shell flex items-center justify-between h-[72px]">
              <span className="font-display text-[1.35rem]">SEBASTIAN</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={26} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-3 px-8">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1 }}
                  className="font-display text-[2.6rem] text-[var(--ink)]"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="tel:+19737311111"
                className="mt-8 flex items-center gap-3 font-mono text-[0.8rem] tracking-[0.16em] text-[var(--amber)]"
              >
                <Phone size={16} /> (973) 731-1111
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
