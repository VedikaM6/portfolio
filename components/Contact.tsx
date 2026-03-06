"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { resumeData } from "@/lib/data";

export function Contact() {
  const { email, phone, links } = resumeData.basics;
  const linkedin = links.find((l) => l.label === "LinkedIn");
  const github = links.find((l) => l.label === "GitHub");
  const tagline = "Let's connect — reach out via email, LinkedIn, or GitHub.";

  return (
    <section
      id="contact"
      className="relative border-t border-[var(--card-border)] px-4 pt-20 pb-24 sm:px-6 sm:pt-24 sm:pb-28 md:pt-28 md:pb-32 lg:px-8 lg:pt-32 lg:pb-36"
    >
      <div className="mx-auto max-w-6xl text-center">
        <motion.p
          className="mx-auto mb-10 max-w-xl text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {tagline}
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
        >
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-3 text-sm font-medium text-[var(--fg)] shadow-sm transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[var(--bg)] dark:hover:bg-violet-500/20"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-3 text-sm font-medium text-[var(--fg)] shadow-sm transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[var(--bg)] dark:hover:bg-violet-500/20"
          >
            <Phone className="h-4 w-4" />
            Phone
          </a>
          {linkedin && (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-3 text-sm font-medium text-[var(--fg)] shadow-sm transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[var(--bg)] dark:hover:bg-violet-500/20"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          )}
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-3 text-sm font-medium text-[var(--fg)] shadow-sm transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[var(--bg)] dark:hover:bg-violet-500/20"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
