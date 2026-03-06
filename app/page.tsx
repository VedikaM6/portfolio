"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SplashScreen } from "@/components/SplashScreen";
import { Hero } from "@/components/Hero";
import { CombinedTimeline } from "@/components/CombinedTimeline";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setShowMain(true);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {!showMain && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>
      <AnimatePresence>
        {showMain && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Hero />
            <CombinedTimeline />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
