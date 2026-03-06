"use client";

import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

const RESUME_PDF = "/Vedika-Maheshwari-Resume.pdf";
const RESUME_FILENAME = "Vedika-Maheshwari-Resume.pdf";

export function DownloadResume() {
  return (
    <section id="download-resume" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-8 text-3xl font-bold text-[var(--fg)] sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Resume
        </motion.h2>
        <motion.div
          className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-8 shadow-sm backdrop-blur-sm"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <p className="mb-6 text-slate-600 dark:text-slate-500">
            Download my resume as a PDF to share with recruiters or include with applications.
          </p>
          <a
            href={RESUME_PDF}
            download={RESUME_FILENAME}
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-600/25 transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
          >
            <FileDown className="h-4 w-4" />
            Download resume (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
}
