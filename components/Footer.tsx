"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { resumeData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--card-border)] px-6 py-10 bg-gradient-to-t from-violet-500/10 via-violet-500/5 to-transparent dark:from-violet-950/40 dark:via-violet-950/20 dark:to-transparent">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {resumeData.basics.name}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href={`mailto:${resumeData.basics.email}`}
            className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-[var(--fg)] hover:underline underline-offset-2 dark:text-slate-400 dark:hover:text-white"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          {resumeData.basics.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-[var(--fg)] hover:underline underline-offset-2 dark:text-slate-400 dark:hover:text-white"
            >
              {l.label === "GitHub" ? (
                <Github className="h-4 w-4" />
              ) : (
                <Linkedin className="h-4 w-4" />
              )}
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
