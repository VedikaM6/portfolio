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

  // Bokeh: soft blurred orbs, theme-aware
  const bokehColor1 = isDark ? "rgba(139, 92, 246, 0.22)" : "rgba(124, 58, 237, 0.18)";
  const bokehColor2 = isDark ? "rgba(99, 102, 241, 0.2)" : "rgba(99, 102, 241, 0.16)";
  const bokehColor3 = isDark ? "rgba(67, 56, 202, 0.18)" : "rgba(139, 92, 246, 0.14)";
  const bokehColor4 = isDark ? "rgba(88, 28, 135, 0.15)" : "rgba(129, 140, 248, 0.12)";
  const bokehColor5 = isDark ? "rgba(49, 46, 129, 0.2)" : "rgba(167, 139, 250, 0.15)";

  // Aurora: dark = deeper violet/indigo/blue; light = visible lavender/indigo on light bg
  const aurora1 = isDark
    ? "radial-gradient(ellipse 70% 50% at 20% 40%, rgba(88, 28, 135, 0.35) 0%, rgba(88, 28, 135, 0.08) 40%, transparent 70%)"
    : "radial-gradient(ellipse 70% 50% at 20% 40%, rgba(99, 102, 241, 0.35) 0%, rgba(129, 140, 248, 0.12) 40%, transparent 70%)";
  const aurora2 = isDark
    ? "radial-gradient(ellipse 60% 70% at 80% 60%, rgba(49, 46, 129, 0.3) 0%, rgba(49, 46, 129, 0.06) 45%, transparent 70%)"
    : "radial-gradient(ellipse 60% 70% at 80% 60%, rgba(139, 92, 246, 0.3) 0%, rgba(99, 102, 241, 0.1) 45%, transparent 70%)";
  const aurora3 = isDark
    ? "radial-gradient(ellipse 50% 80% at 50% 20%, rgba(67, 56, 202, 0.2) 0%, rgba(67, 56, 202, 0.04) 50%, transparent 70%)"
    : "radial-gradient(ellipse 50% 80% at 50% 20%, rgba(124, 58, 237, 0.25) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 70%)";

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

      {/* Layer 4 – bokeh-style blurs: large soft circles drifting */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute h-[280px] w-[280px] rounded-full blur-[80px] ${reduceMotion ? "" : "animate-bokeh-drift-1"}`}
          style={{ left: "5%", top: "15%", backgroundColor: bokehColor1 }}
        />
        <div
          className={`absolute h-[320px] w-[320px] rounded-full blur-[90px] ${reduceMotion ? "" : "animate-bokeh-drift-2"}`}
          style={{ right: "10%", top: "40%", backgroundColor: bokehColor2 }}
        />
        <div
          className={`absolute h-[240px] w-[240px] rounded-full blur-[70px] ${reduceMotion ? "" : "animate-bokeh-drift-3"}`}
          style={{ left: "40%", top: "70%", backgroundColor: bokehColor3 }}
        />
        <div
          className={`absolute h-[300px] w-[300px] rounded-full blur-[85px] ${reduceMotion ? "" : "animate-bokeh-drift-4"}`}
          style={{ left: "60%", top: "10%", backgroundColor: bokehColor4 }}
        />
        <div
          className={`absolute h-[260px] w-[260px] rounded-full blur-[75px] ${reduceMotion ? "" : "animate-bokeh-drift-5"}`}
          style={{ right: "25%", bottom: "20%", backgroundColor: bokehColor5 }}
        />
      </div>
    </div>
  );
}
