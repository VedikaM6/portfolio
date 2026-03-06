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
        "bokeh-drift-1": "bokehDrift1 25s ease-in-out infinite",
        "bokeh-drift-2": "bokehDrift2 30s ease-in-out infinite",
        "bokeh-drift-3": "bokehDrift3 28s ease-in-out infinite",
        "bokeh-drift-4": "bokehDrift4 32s ease-in-out infinite",
        "bokeh-drift-5": "bokehDrift5 27s ease-in-out infinite",
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
        bokehDrift1: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(8%, -5%)" },
        },
        bokehDrift2: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-6%, 8%)" },
        },
        bokehDrift3: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(5%, 4%)" },
          "66%": { transform: "translate(-4%, -6%)" },
        },
        bokehDrift4: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-10%, -4%)" },
        },
        bokehDrift5: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(4%, 10%)" },
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
