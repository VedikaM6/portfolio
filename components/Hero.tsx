"use client";

import { motion } from "framer-motion";
import { ChevronDown, FileDown } from "lucide-react";
import { resumeData } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 pb-16"
    >
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-[var(--fg)] sm:text-5xl md:text-6xl lg:text-7xl">
          {resumeData.basics.name}
        </h1>
        <motion.p
          className="mt-4 text-lg text-slate-500 sm:text-xl md:text-2xl dark:text-slate-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {resumeData.basics.title}
        </motion.p>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base text-slate-500 sm:text-lg dark:text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          {resumeData.basics.summary}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-600/25 transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
          >
            View Experience
            <ChevronDown className="h-4 w-4" />
          </a>
          <a
            href="/Vedika-Maheshwari-Resume.pdf"
            download="Vedika-Maheshwari-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-6 py-3 text-sm font-medium text-[var(--fg)] shadow-sm backdrop-blur-sm transition hover:bg-[var(--glass)] focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
          >
            Download Resume
            <FileDown className="h-4 w-4" />
          </a>
        </motion.div>
      </motion.div>
      <motion.a
        href="#experience"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition hover:text-[var(--fg)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-label="Scroll to experience"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </motion.a>
    </section>
  );
}
