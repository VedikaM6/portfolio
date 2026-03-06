"use client";

import { Mail, Linkedin } from "lucide-react";
import { resumeData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {resumeData.basics.name}
        </p>
        <div className="flex gap-6">
          <a
            href={`mailto:${resumeData.basics.email}`}
            className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-[var(--fg)] dark:text-slate-400 dark:hover:text-white"
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
              className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-[var(--fg)] dark:text-slate-400 dark:hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
