"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Building2, GraduationCap, BadgeCheck } from "lucide-react";
import { getTimelineItems, type TimelineItem, type TimelineExperience } from "@/lib/timeline";

const TYPE_CONFIG = {
  experience: {
    label: "Experience",
    icon: Building2,
    color: "violet",
    classes: {
      node: "border-violet-500 bg-violet-500 shadow-violet-500/30",
      nodeRing: "ring-violet-500/40",
      card: "border-l-4 border-violet-500 dark:border-violet-500",
      iconBg: "bg-violet-500/20 text-violet-500 dark:text-violet-400",
      badge: "bg-violet-500/15 text-violet-700 dark:text-violet-300",
      bullet: "before:text-violet-500",
    },
  },
  education: {
    label: "Education",
    icon: GraduationCap,
    color: "blue",
    classes: {
      node: "border-blue-500 bg-blue-500 shadow-blue-500/30",
      nodeRing: "ring-blue-500/40",
      card: "border-l-4 border-blue-500 dark:border-blue-500",
      iconBg: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
      badge: "bg-blue-500/15 text-blue-700 dark:text-blue-300",
      bullet: "before:text-blue-500",
    },
  },
  certification: {
    label: "Certification",
    icon: BadgeCheck,
    color: "amber",
    classes: {
      node: "border-amber-500 bg-amber-500 shadow-amber-500/30",
      nodeRing: "ring-amber-500/40",
      card: "border-l-4 border-amber-500 dark:border-amber-500",
      iconBg: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
      badge: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
      bullet: "before:text-amber-500",
    },
  },
} as const;

function TimelineCard({
  item,
  index,
  isLeft,
  openId,
  setOpenId,
}: {
  item: TimelineItem;
  index: number;
  isLeft: boolean;
  openId: string | null;
  setOpenId: (id: string | null) => void;
}) {
  const config = TYPE_CONFIG[item.type];
  const Icon = config.icon;
  const isExperience = item.type === "experience";
  const exp = isExperience ? (item as TimelineExperience) : null;
  const isOpen = openId === item.id;
  const skills = exp?.highlightSkills ?? [];

  const cardContent = (
    <motion.div
      className={`overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-violet-500/25 hover:shadow-md hover:shadow-violet-500/5 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-lg dark:shadow-black/20 dark:hover:border-violet-500/25 dark:hover:shadow-violet-500/10 ${config.classes.card} ${isLeft ? "lg:mr-4" : "lg:ml-4"}`}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.02 }}
      whileHover={{ scale: 1.01 }}
      style={{ originX: isLeft ? 1 : 0 }}
    >
      {item.type === "experience" && exp && (
        <>
          <button
            type="button"
            className="group flex w-full flex-row items-center justify-between gap-4 p-4 text-left outline-none ring-violet-500/50 transition-all duration-200 hover:bg-[var(--glass)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] sm:p-5"
            onClick={() => setOpenId(isOpen ? null : item.id)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Collapse details" : "Expand for more details"}
          >
            <div className={`flex min-w-0 flex-1 items-center gap-3 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${config.classes.iconBg}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <h3 className="font-semibold text-[var(--fg)]">{exp.role}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{exp.company}</p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-500">{exp.dates}</p>
              </div>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1 text-slate-500 transition-colors group-hover:text-violet-500 group-focus-visible:text-violet-500 dark:group-hover:text-violet-400">
              <span className="hidden text-[10px] font-medium sm:inline">
                {isOpen ? "Less" : "More"}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex"
              >
                <motion.span
                  animate={!isOpen ? { y: [0, -2, 0] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  className="inline-flex"
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.span>
              </motion.span>
            </span>
          </button>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="border-t border-[var(--card-border)]"
              >
                <div className="p-4 pt-3 text-left sm:p-5 sm:pt-3">
                  {skills.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                      {skills.map((s) => (
                        <span key={s} className={`rounded-lg px-2.5 py-1 text-xs font-medium ${config.classes.badge}`}>
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className={`flex gap-2 before:mt-1.5 before:shrink-0 before:content-['•'] ${config.classes.bullet}`}
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
      {item.type === "education" && (
        <div className={`flex items-center gap-3 p-4 text-left sm:p-5 ${isLeft ? "lg:flex-row-reverse lg:text-right" : ""}`}>
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${config.classes.iconBg}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-[var(--fg)]">{item.degree}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{item.institution}</p>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-500">{item.dates}</p>
          </div>
        </div>
      )}
      {item.type === "certification" && (
        <div className={`flex items-center gap-3 p-4 text-left sm:p-5 ${isLeft ? "lg:flex-row-reverse lg:text-right" : ""}`}>
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${config.classes.iconBg}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-medium text-[var(--fg)]">{item.name}</p>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-500">{item.dates}</p>
          </div>
        </div>
      )}
    </motion.div>
  );

  return (
    <div className={`flex w-full max-w-full lg:max-w-[480px] xl:max-w-[540px] ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
      {cardContent}
    </div>
  );
}

export function CombinedTimeline() {
  const items = useMemo(() => getTimelineItems(), []);
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="experience" className="relative px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-4 text-3xl font-bold text-[var(--fg)] sm:text-4xl"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          Experience, Education & Certifications
        </motion.h2>
        <motion.p
          className="mb-12 text-slate-600 dark:text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.05 }}
        >
          Timeline view — tap cards to expand experience details.
        </motion.p>

        {/* Legend: type colors */}
        <motion.div
          className="mb-10 flex flex-wrap gap-4 gap-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.08 }}
        >
          {(["experience", "education", "certification"] as const).map((type) => {
            const c = TYPE_CONFIG[type];
            const Icon = c.icon;
            return (
              <span
                key={type}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-3 py-1.5 text-xs font-medium text-[var(--fg)]"
              >
                <span className={`rounded-full p-1 ${c.classes.iconBg}`}>
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {c.label}
              </span>
            );
          })}
        </motion.div>

        {/* Timeline: center line + alternating tiles */}
        <div className="relative">
          {/* Central vertical line - visible from md up */}
          <div
            className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-px bg-gradient-to-b from-violet-500/40 via-[var(--timeline-line)] to-transparent md:block"
            aria-hidden
          />
          {/* Mobile: left line */}
          <div
            className="absolute left-[15px] top-0 h-full w-0.5 bg-gradient-to-b from-violet-500/40 via-[var(--timeline-line)] to-transparent md:hidden"
            aria-hidden
          />

          <div className="space-y-8 md:space-y-10">
            {items.map((item, index) => {
              const isLeft = index % 2 === 0;
              const config = TYPE_CONFIG[item.type];

              return (
                <motion.div
                  key={item.id}
                  className="relative flex flex-col items-stretch md:flex-row md:items-center md:justify-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.02 }}
                >
                  {/* Left side card (desktop only when isLeft) */}
                  <div className="hidden min-w-0 flex-1 justify-end md:flex md:flex-[1_1_0] md:pr-3 lg:pr-4">
                    {isLeft && (
                      <TimelineCard
                        item={item}
                        index={index}
                        isLeft={true}
                        openId={openId}
                        setOpenId={setOpenId}
                      />
                    )}
                  </div>

                  {/* Center: node */}
                  <div className="relative z-10 flex shrink-0 items-start justify-center pt-1.5 md:items-center md:py-4 md:px-1">
                    <div
                      className={`h-4 w-4 rounded-full border-2 shadow-lg ring-4 ring-offset-2 ring-offset-[var(--bg)] transition-transform duration-300 hover:scale-125 md:h-5 md:w-5 ${config.classes.node} ${config.classes.nodeRing}`}
                    />
                  </div>

                  {/* Right side card (desktop when !isLeft; mobile always) */}
                  <div className="flex min-w-0 flex-1 items-start justify-start pl-2 md:flex-[1_1_0] md:justify-start md:pl-3 lg:pl-4">
                    <div className={`w-full ${isLeft ? "block md:hidden" : "block"}`}>
                      <TimelineCard
                        item={item}
                        index={index}
                        isLeft={false}
                        openId={openId}
                        setOpenId={setOpenId}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
