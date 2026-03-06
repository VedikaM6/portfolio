"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export function AnimatedBackground() {
  const { theme } = useTheme();
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setReduceMotion(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  const isDark = theme === "dark";

  // Aurora: dark = deeper violet/indigo/blue; light = soft lavender/slate (professional, subtle)
  const aurora1 = isDark
    ? "radial-gradient(ellipse 70% 50% at 20% 40%, rgba(88, 28, 135, 0.35) 0%, rgba(88, 28, 135, 0.08) 40%, transparent 70%)"
    : "radial-gradient(ellipse 70% 50% at 20% 40%, rgba(129, 140, 248, 0.2) 0%, rgba(129, 140, 248, 0.06) 40%, transparent 70%)";
  const aurora2 = isDark
    ? "radial-gradient(ellipse 60% 70% at 80% 60%, rgba(49, 46, 129, 0.3) 0%, rgba(49, 46, 129, 0.06) 45%, transparent 70%)"
    : "radial-gradient(ellipse 60% 70% at 80% 60%, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.04) 45%, transparent 70%)";
  const aurora3 = isDark
    ? "radial-gradient(ellipse 50% 80% at 50% 20%, rgba(67, 56, 202, 0.2) 0%, rgba(67, 56, 202, 0.04) 50%, transparent 70%)"
    : "radial-gradient(ellipse 50% 80% at 50% 20%, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0.03) 50%, transparent 70%)";

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ pointerEvents: "none" }}
      aria-hidden
    >
      {/* Layer 1 – flows slowly */}
      <div
        className={`absolute -inset-[10%] opacity-90 ${reduceMotion ? "" : "animate-aurora-drift-1"}`}
        style={{
          backgroundImage: aurora1,
          backgroundSize: "120% 120%",
          backgroundPosition: "50% 45%",
        }}
      />
      {/* Layer 2 – different phase */}
      <div
        className={`absolute -inset-[10%] opacity-90 ${reduceMotion ? "" : "animate-aurora-drift-2"}`}
        style={{
          backgroundImage: aurora2,
          backgroundSize: "130% 110%",
          backgroundPosition: "55% 50%",
        }}
      />
      {/* Layer 3 – subtle */}
      <div
        className={`absolute -inset-[10%] opacity-80 ${reduceMotion ? "" : "animate-aurora-drift-3"}`}
        style={{
          backgroundImage: aurora3,
          backgroundSize: "110% 130%",
          backgroundPosition: "50% 50%",
        }}
      />
    </div>
  );
}
