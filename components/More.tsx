"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

export function More() {
  if (!resumeData.extra?.length) return null;
  return (
    <section id="more" className="relative px-6 py-12 md:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <motion.p
          className="text-base font-medium leading-relaxed text-slate-600 dark:text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
        >
          {resumeData.extra[0]}
        </motion.p>
        <motion.a
          href="#contact"
          className="mt-4 inline-block text-sm font-medium text-violet-500 hover:text-violet-600 dark:text-violet-400 dark:hover:text-violet-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.08 }}
        >
          Get in touch →
        </motion.a>
      </div>
    </section>
  );
}
