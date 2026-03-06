"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, TrendingUp, Award, Zap } from "lucide-react";
import { resumeData } from "@/lib/data";

const TOP_3 = [
  resumeData.achievements.find((a) => a.text.includes("70%"))?.text ?? resumeData.achievements[0]?.text,
  resumeData.achievements.find((a) => a.text.includes("40%"))?.text ?? resumeData.achievements[1]?.text,
  resumeData.achievements.find((a) => a.text.includes("15%"))?.text ?? resumeData.achievements[2]?.text,
].filter(Boolean) as string[];

function IconForType(type?: string) {
  switch (type) {
    case "metric":
      return TrendingUp;
    case "leadership":
      return Zap;
    case "award":
      return Award;
    default:
      return Trophy;
  }
}

export function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="achievements" className="relative px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-8 text-3xl font-bold text-[var(--fg)] sm:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          Achievements
        </motion.h2>
        {TOP_3.length > 0 && (
          <motion.div
            className="mb-12 flex flex-wrap gap-3 rounded-2xl border border-violet-500/25 bg-violet-500/15 p-4 backdrop-blur-sm md:p-6"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <span className="text-sm font-medium text-violet-600 dark:text-violet-300">Top impact</span>
            {TOP_3.map((t, i) => (
              <span
                key={i}
                className="rounded-lg bg-violet-500/20 px-3 py-1.5 text-sm text-[var(--fg)]"
              >
                {t}
              </span>
            ))}
          </motion.div>
        )}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resumeData.achievements.map((a, i) => {
            const Icon = IconForType(a.type);
            return (
              <motion.div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 shadow-sm backdrop-blur-sm transition hover:border-violet-500/30 hover:shadow-md hover:shadow-violet-500/10"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.04 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 transition-opacity duration-300 ${
                    hovered === i ? "opacity-100" : ""
                  }`}
                />
                <div className="relative flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--fg)]">{a.text}</p>
                    {a.context && (
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-500">{a.context}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
