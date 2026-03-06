"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { CombinedTimeline } from "@/components/CombinedTimeline";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Hero />
      <CombinedTimeline />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </motion.main>
  );
}
