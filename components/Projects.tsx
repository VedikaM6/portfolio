"use client";

import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { resumeData } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-12 text-3xl font-bold text-[var(--fg)] sm:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08, margin: "0px 0px 80px 0px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Projects
        </motion.h2>
        <div className="space-y-6">
          {resumeData.projects.map((proj, i) => (
            <motion.article
              key={proj.title}
              className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-0.5 dark:hover:border-violet-400/30 dark:hover:shadow-violet-500/15"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08, margin: "0px 0px 80px 0px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
            >
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                  <FolderGit2 className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-[var(--fg)]">{proj.title}</h3>
                  {(proj.dates || proj.stack) && (
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-500">
                      {[proj.dates, proj.stack].filter(Boolean).join(" · ")}
                    </p>
                  )}
                  <ul className="mt-4 list-inside list-disc space-y-2 pl-1 text-sm text-slate-600 marker:text-violet-500 dark:text-slate-300 dark:marker:text-violet-400">
                    {proj.bullets.map((b, j) => (
                      <li key={j} className="pl-1">
                        {b}
                      </li>
                    ))}
                  </ul>
                  {proj.links && proj.links.length > 0 && (
                    <div className="mt-4 flex gap-3">
                      {proj.links.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-violet-400 hover:text-violet-300"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
