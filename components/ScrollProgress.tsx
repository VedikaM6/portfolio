"use client";

import { useEffect, useState, useRef } from "react";

const SECTIONS = ["hero", "experience", "projects", "skills", "contact"];

export function ScrollProgress() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const startObserving = () => {
      const elements = SECTIONS.map((id) => document.getElementById(id)).filter(
        (el): el is HTMLElement => el != null
      );
      if (elements.length === 0) {
        timeoutId = setTimeout(startObserving, 100);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = entry.target.id;
            const index = SECTIONS.indexOf(id);
            if (index === -1) return;
            if (entry.isIntersecting) {
              visibleRef.current.add(index);
            } else {
              visibleRef.current.delete(index);
            }
          });
          const visible = Array.from(visibleRef.current).sort((a, b) => a - b);
          const active = visible[0] ?? 0;
          setActiveIndex(active);
        },
        {
          root: null,
          rootMargin: "-40% 0px -60% 0px",
          threshold: 0,
        }
      );

      elements.forEach((el) => observer!.observe(el));
    };

    const frameId = requestAnimationFrame(startObserving);

    return () => {
      cancelAnimationFrame(frameId);
      if (timeoutId != null) clearTimeout(timeoutId);
      observer?.disconnect();
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
            {id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </span>
        </a>
      ))}
    </div>
  );
}
