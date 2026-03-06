import type { Metadata } from "next";
import "./globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Vedika Maheshwari | AI Engineer & Cybersecurity Professional",
  description:
    "AI Engineer and Cybersecurity Professional building agentic AI systems, LLM pipelines, and secure software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen antialiased bg-[var(--bg)] text-[var(--fg)]">
        <ThemeProvider>
          <AnimatedBackground />
          <ScrollProgress />
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
