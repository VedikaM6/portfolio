"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Building2 } from "lucide-react";
import { resumeData } from "@/lib/data";

function extractMetrics(bullets: string[]): string[] {
  const metrics: string[] = [];
  const patterns = [
    /\d+%|\d+\+\s*(?:emails?|users?|metrics?|customers?)/gi,
    /(?:cut|reduced?|increased?|decreased?|by)\s*\d+%/gi,
    /\d+\+\s*(?:critical|key|design)/gi,
  ];
  for (const b of bullets) {
    for (const p of patterns) {
      const m = b.match(p);
      if (m) metrics.push(...m.map((x) => x.trim()));
    }
    if (/\d+%/.test(b)) {
      const snippet = b.replace(/^.*?(\d+%.*?)(?:\.|$)/, "$1").trim();
      if (snippet && snippet.length < 60) metrics.push(snippet);
    }
  }
  return Array.from(new Set(metrics)).slice(0, 5);
}

function getJobId(job: { company: string; role: string; dates: string }, i: number) {
  return `${job.company}-${job.role}-${job.dates}-${i}`;
}

export function Experience() {
  const [openId, setOpenId] = useState<string | null>(() =>
    resumeData.experience[0] ? getJobId(resumeData.experience[0], 0) : null
  );

  return (
    <section id="experience" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="mb-12 text-3xl font-bold text-[var(--fg)] sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          Experience
        </motion.h2>
        <div className="relative space-y-0">
          {/* Vertical timeline line */}
          <div
            className="absolute left-[11px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-violet-500/50 via-slate-500/30 to-transparent md:left-[15px]"
            aria-hidden
          />
          {resumeData.experience.map((job, i) => {
            const jobId = getJobId(job, i);
            const isOpen = openId === jobId;
            const metrics = extractMetrics(job.bullets);
            return (
              <motion.article
                key={jobId}
                className="relative flex gap-4 pb-12 last:pb-0 pl-8 md:pl-10 md:gap-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                {/* Timeline node */}
                <div
                  className={`absolute top-6 h-4 w-4 rounded-full border-2 shadow-md ${isOpen ? "border-violet-500 bg-violet-500" : "border-slate-500 bg-slate-800 dark:bg-slate-800"}`}
                  style={{ left: "11px" }}
                />
                <div className="min-w-0 flex-1 md:flex-[1_1_50%]">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                      onClick={() => setOpenId(isOpen ? null : jobId)}
                      aria-expanded={isOpen}
                    >
                  <div className="flex min-w-0 flex-1 items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-white">{job.role}</h3>
                      <p className="text-sm text-slate-400">{job.company}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{job.dates}</p>
                    </div>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="shrink-0 text-slate-500"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="border-t border-white/10"
                    >
                      <div className="p-5 pt-0 sm:p-6 sm:pt-0">
                        {metrics.length > 0 && (
                          <div className="mb-4 flex flex-wrap gap-2">
                            {metrics.map((m) => (
                              <span
                                key={m}
                                className="rounded-lg bg-violet-500/15 px-3 py-1 text-xs font-medium text-violet-300"
                              >
                                {m}
                              </span>
                            ))}
                          </div>
                        )}
                        <ul className="space-y-2">
                          {job.bullets.map((bullet, j) => (
                            <li
                              key={j}
                              className="flex gap-2 text-sm text-slate-300 before:mt-1.5 before:shrink-0 before:content-['•'] before:text-violet-500"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
