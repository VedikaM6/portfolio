"use client";

import { useEffect, useState, useRef } from "react";

const SECTIONS = ["hero", "experience", "achievements", "projects", "skills", "contact"];

export function ScrollProgress() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastIdxRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        let idx = 0;
        const third = window.innerHeight * 0.35;
        for (let i = SECTIONS.length - 1; i >= 0; i--) {
          const el = document.getElementById(SECTIONS[i]);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= third && rect.bottom >= third) {
              idx = i;
              break;
            }
          }
        }
        if (idx !== lastIdxRef.current) {
          lastIdxRef.current = idx;
          setActiveIndex(idx);
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2.5 md:flex"
      aria-label="Page sections"
    >
      {SECTIONS.map((id, i) => (
        <a
          key={id}
          href={`#${id}`}
          className="group flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
        >
          <span
            className={`h-2 w-2 shrink-0 rounded-full transition-[transform,box-shadow,background-color] duration-200 ease-out ${
              activeIndex === i
                ? "h-2.5 w-2.5 bg-violet-500 ring-2 ring-violet-500/40 dark:bg-violet-400 dark:ring-violet-400/40"
                : "bg-slate-400 group-hover:bg-slate-600 dark:bg-white/35 dark:group-hover:bg-white/55"
            }`}
          />
          <span className="max-w-0 overflow-hidden text-xs font-medium text-slate-600 opacity-0 transition-[max-width,opacity] duration-200 ease-out group-hover:max-w-[120px] group-hover:opacity-100 dark:text-slate-400 dark:group-hover:text-slate-200">
            {id.replace(/-/g, " ")}
          </span>
        </a>
      ))}
    </div>
  );
}
