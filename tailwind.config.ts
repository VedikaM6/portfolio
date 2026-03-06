import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        glass: "rgba(255,255,255,0.05)",
        "glass-border": "rgba(255,255,255,0.08)",
        glow: "rgba(139, 92, 246, 0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "aurora-drift-1": "auroraDrift1 22s ease-in-out infinite",
        "aurora-drift-2": "auroraDrift2 26s ease-in-out infinite",
        "aurora-drift-3": "auroraDrift3 30s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        auroraDrift1: {
          "0%, 100%": { backgroundPosition: "50% 45%" },
          "50%": { backgroundPosition: "55% 55%" },
        },
        auroraDrift2: {
          "0%, 100%": { backgroundPosition: "55% 50%" },
          "50%": { backgroundPosition: "45% 55%" },
        },
        auroraDrift3: {
          "0%, 100%": { backgroundPosition: "50% 50%" },
          "33%": { backgroundPosition: "52% 48%" },
          "66%": { backgroundPosition: "48% 52%" },
        },
      },
      backgroundSize: {
        "aurora": "120% 120%",
      },
    },
  },
  plugins: [],
};
export default config;
