"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SPLASH_DURATION_MS = 1600;
const EXIT_DURATION_MS = 350;

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(100, (elapsed / SPLASH_DURATION_MS) * 100);
      setProgress(p);
      if (p >= 100) {
        setDone(true);
        setTimeout(onComplete, EXIT_DURATION_MS);
        return;
      }
      requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0612]"
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: EXIT_DURATION_MS / 1000, ease: "easeInOut" }}
      style={{ pointerEvents: done ? "none" : "auto" }}
    >
      <motion.div
        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-bold tracking-tighter text-white"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        VM
      </motion.div>
      <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-violet-500/90"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.15 }}
        />
      </div>
    </motion.div>
  );
}
