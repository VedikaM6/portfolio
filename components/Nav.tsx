"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const RESUME_PDF = "/Vedika-Maheshwari-Resume.pdf";

const SECTIONS = ["hero", "experience", "projects", "skills", "contact"];

const LINKS = [
  { label: "Timeline", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: RESUME_PDF, isResume: true },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastIdxRef = useRef(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        let idx = 0;
        const third = window.innerHeight * 0.35;
        for (let i = SECTIONS.length - 1; i >= 0; i--) {
          const el = document.getElementById(SECTIONS[i]);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= third && rect.bottom >= third) {
              idx = i;
              break;
            }
          }
        }
        if (idx !== lastIdxRef.current) {
          lastIdxRef.current = idx;
          setActiveSectionIndex(idx);
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Map section index (0=hero, 1=experience, ...) to nav link index (0=Timeline, 1=Projects, ...). Resume is never highlighted.
  const activeNavIndex = activeSectionIndex <= 0 ? -1 : Math.min(activeSectionIndex - 1, 3);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-40 border-b border-white/5 bg-[var(--bg)]/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#hero" className="text-sm font-semibold text-[var(--fg)]">
            VM
          </a>
          <div className="flex items-center gap-2 md:gap-6">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/10 hover:text-[var(--fg)]"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <div className="hidden gap-6 md:flex">
              {LINKS.map((link, i) => {
                const isActive = i === activeNavIndex;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    {...(link.isResume ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`text-sm transition hover:text-[var(--fg)] ${
                      isActive
                        ? "font-medium text-violet-500 dark:text-violet-400"
                        : "text-slate-400"
                    }`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 hover:text-[var(--fg)] md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-14 z-30 bg-[var(--bg)]/95 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="flex flex-col gap-2 p-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ staggerChildren: 0.05 }}
            >
              {LINKS.map((link, i) => {
                const isActive = i === activeNavIndex;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    {...(link.isResume ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`rounded-lg py-3 px-4 text-lg transition hover:bg-white/10 dark:hover:bg-white/5 ${
                      isActive
                        ? "font-medium text-violet-500 dark:text-violet-400"
                        : "text-slate-500 hover:text-[var(--fg)] dark:text-slate-300 dark:hover:text-white"
                    }`}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {link.label}
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
