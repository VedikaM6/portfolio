"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

const groupOrder = [
  "AI & Applied Intelligence",
  "Software Engineering",
  "DevOps, Systems & Data",
  "Security & Tools",
];

export function Skills() {
  const groups = groupOrder.filter((g) => resumeData.skills[g]?.length);
  const rest = Object.keys(resumeData.skills).filter((k) => !groupOrder.includes(k));

  return (
    <section id="skills" className="relative px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-12 text-3xl font-bold text-[var(--fg)] sm:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08, margin: "0px 0px 80px 0px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Skills
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {[...groups, ...rest].map((groupKey, gi) => {
            const items = resumeData.skills[groupKey];
            if (!items?.length) return null;
            return (
              <motion.div
                key={groupKey}
                className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-0.5 dark:hover:border-violet-400/30 dark:hover:shadow-violet-500/15"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08, margin: "0px 0px 80px 0px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: gi * 0.05 }}
              >
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                  {groupKey}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, j) => (
                    <span
                      key={j}
                      className="rounded-lg border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-sm text-slate-700 transition-colors duration-200 hover:border-violet-500/40 hover:bg-violet-500/20 dark:border-violet-400/25 dark:bg-violet-500/15 dark:text-slate-300 dark:hover:border-violet-400/50 dark:hover:bg-violet-500/25"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
