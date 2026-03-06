"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { resumeData } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="mb-12 text-3xl font-bold text-[var(--fg)] sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Education
        </motion.h2>
        <div className="relative space-y-0">
          <div
            className="absolute left-[11px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-violet-500/50 via-slate-500/30 to-transparent md:left-[15px]"
            aria-hidden
          />
          {resumeData.education.map((edu, i) => (
            <motion.div
              key={`${edu.institution}-${edu.degree}`}
              className="relative flex gap-4 pb-12 pl-8 last:pb-0 md:pl-10 md:gap-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <div
                className="absolute left-0 top-6 h-4 w-4 rounded-full border-2 border-violet-500/50 bg-violet-500/20 dark:border-slate-500 dark:bg-slate-800"
                style={{ left: "11px" }}
              />
              <div className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--fg)]">{edu.degree}</h3>
                    <p className="text-slate-400 dark:text-slate-500">{edu.institution}</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-600">{edu.dates}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
