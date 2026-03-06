"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const RESUME_PDF = "/Vedika-Maheshwari-Resume.pdf";
const RESUME_FILENAME = "Vedika-Maheshwari-Resume.pdf";

const LINKS = [
  { label: "Timeline", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: RESUME_PDF, download: RESUME_FILENAME },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

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
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.download ? { download: link.download } : {})}
                  className="text-sm text-slate-400 transition hover:text-[var(--fg)]"
                >
                  {link.label}
                </a>
              ))}
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
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.download ? { download: link.download } : {})}
                  className="rounded-lg py-3 px-4 text-lg text-slate-500 hover:bg-white/10 hover:text-[var(--fg)] dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
