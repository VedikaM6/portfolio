"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { resumeData } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="mb-12 text-3xl font-bold text-[var(--fg)] sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Certifications
        </motion.h2>
        <div className="relative space-y-0">
          <div
            className="absolute left-[11px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-violet-500/50 via-slate-500/30 to-transparent md:left-[15px]"
            aria-hidden
          />
          {resumeData.certifications.map((cert, i) => (
            <motion.div
              key={cert}
              className="relative flex gap-4 pb-8 pl-8 last:pb-0 md:pl-10 md:gap-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <div
                className="absolute left-0 top-5 h-4 w-4 rounded-full border-2 border-violet-500/50 bg-violet-500/20 dark:border-slate-500 dark:bg-slate-800"
                style={{ left: "11px" }}
              />
              <div className="min-w-0 flex-1 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                <BadgeCheck className="h-5 w-5 shrink-0 text-violet-400" />
                <span className="text-sm font-medium text-[var(--fg)]">{cert}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
