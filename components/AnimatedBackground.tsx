"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";

const PARTICLE_COUNT_DESKTOP = 45;
const PARTICLE_COUNT_TABLET = 22;
const PARTICLE_COUNT_MOBILE = 10;
const CONNECT_THRESHOLD = 140;
const LINE_OPACITY = 0.08;
const PARTICLE_SPEED = 0.15;
const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1280;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

function getParticleCount(): number {
  if (typeof window === "undefined") return PARTICLE_COUNT_TABLET;
  const w = window.innerWidth;
  if (w < MOBILE_BREAKPOINT) return PARTICLE_COUNT_MOBILE;
  if (w < TABLET_BREAKPOINT) return PARTICLE_COUNT_TABLET;
  return PARTICLE_COUNT_DESKTOP;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const [reduceMotion, setReduceMotion] = useState(false);

  const initParticles = useCallback((width: number, height: number, count: number): Particle[] => {
    const arr: Particle[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * PARTICLE_SPEED,
        vy: (Math.random() - 0.5) * PARTICLE_SPEED,
        r: 0.8 + Math.random() * 0.8,
      });
    }
    return arr;
  }, []);

  const updateAndDraw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.width;
    const h = canvas.height;
    const width = w / dpr;
    const height = h / dpr;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.scale(dpr, dpr);

    let particles = particlesRef.current;
    const expectedCount = getParticleCount();
    if (particles.length !== expectedCount) {
      particles = initParticles(width, height, expectedCount);
      particlesRef.current = particles;
    }

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      p.x = Math.max(0, Math.min(width, p.x));
      p.y = Math.max(0, Math.min(height, p.y));
    }

    // Soft gradient mesh (drawn under particles)
    const g1 = ctx.createRadialGradient(
      width * 0.2,
      height * 0.3,
      0,
      width * 0.2,
      height * 0.3,
      width * 0.8
    );
    g1.addColorStop(0, "rgba(120, 80, 200, 0.06)");
    g1.addColorStop(1, "rgba(120, 80, 200, 0)");
    ctx.fillStyle = g1;
    ctx.fillRect(0, 0, width, height);

    const g2 = ctx.createRadialGradient(
      width * 0.8,
      height * 0.7,
      0,
      width * 0.8,
      height * 0.7,
      width * 0.7
    );
    g2.addColorStop(0, "rgba(80, 120, 220, 0.05)");
    g2.addColorStop(1, "rgba(80, 120, 220, 0)");
    ctx.fillStyle = g2;
    ctx.fillRect(0, 0, width, height);

    // Faint connecting lines (every few frames for performance)
    if (Math.random() < 0.4) {
      ctx.strokeStyle = `rgba(200, 220, 255, ${LINE_OPACITY})`;
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particles[i].x;
          const dy = particles[j].y - particles[i].y;
          if (dx * dx + dy * dy < CONNECT_THRESHOLD * CONNECT_THRESHOLD) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    // Particles
    ctx.fillStyle = "rgba(220, 230, 255, 0.35)";
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }, [initParticles]);

  const tick = useCallback(() => {
    updateAndDraw();
    rafRef.current = requestAnimationFrame(tick);
  }, [updateAndDraw]);

  const drawStaticGradient = useCallback((canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    const width = w;
    const height = h;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(dpr, dpr);
    const g1 = ctx.createRadialGradient(
      width * 0.2,
      height * 0.3,
      0,
      width * 0.2,
      height * 0.3,
      width * 0.8
    );
    g1.addColorStop(0, "rgba(120, 80, 200, 0.08)");
    g1.addColorStop(1, "rgba(120, 80, 200, 0)");
    ctx.fillStyle = g1;
    ctx.fillRect(0, 0, width, height);
    const g2 = ctx.createRadialGradient(
      width * 0.8,
      height * 0.7,
      0,
      width * 0.8,
      height * 0.7,
      width * 0.7
    );
    g2.addColorStop(0, "rgba(80, 120, 220, 0.06)");
    g2.addColorStop(1, "rgba(80, 120, 220, 0)");
    ctx.fillStyle = g2;
    ctx.fillRect(0, 0, width, height);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReduceMotion(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const count = getParticleCount();
      particlesRef.current = initParticles(w, h, count);
      if (mediaQuery.matches) {
        drawStaticGradient(canvas);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      drawStaticGradient(canvas);
    } else {
      tick();
    }

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [reduceMotion, initParticles, tick, drawStaticGradient]);

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ pointerEvents: "none" }}
      aria-hidden
    >
      {/* Base static gradient for initial paint and fallback */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0a0612] via-[#0d0a18] to-[#0a0814]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 20% 30%, rgba(120, 80, 200, 0.07) 0%, transparent 50%),
            radial-gradient(ellipse 60% 80% at 80% 70%, rgba(80, 120, 220, 0.06) 0%, transparent 50%)
          `,
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
