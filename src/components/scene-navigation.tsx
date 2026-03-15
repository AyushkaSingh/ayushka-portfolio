"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const scenes = [
  { id: "hero", label: "00 Intro" },
  { id: "about", label: "01 About" },
  { id: "skills", label: "02 Skills" },
  { id: "projects", label: "03 Work" },
  { id: "experience", label: "04 Timeline" },
  { id: "credentials", label: "05 Credentials" },
  { id: "contact", label: "06 Contact" }
];

export function SceneNavigation() {
  const [activeScene, setActiveScene] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveScene(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    scenes.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    const lenisWindow = window as unknown as { lenis: unknown };
    if (el && lenisWindow.lenis) {
      // @ts-expect-error - lenis is dynamically injected
      lenisWindow.lenis.scrollTo(el, { offset: 0, duration: 1.5 });
    }
  };

  return (
    <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex xl:right-8">
      {scenes.map((scene) => (
        <button
          key={scene.id}
          onClick={() => scrollTo(scene.id)}
          className="group relative flex items-center justify-end w-8 h-8"
          aria-label={`Scroll to ${scene.label}`}
        >
          {/* Label tooltip */}
          <span className="absolute right-10 px-2 py-1 rounded bg-black/50 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md pointer-events-none hidden md:block border border-white/10">
            {scene.label}
          </span>
          
          {/* Dot */}
          <div className="flex items-center justify-center w-full h-full">
            <motion.div
              animate={{
                scale: activeScene === scene.id ? 1 : 0.4,
                opacity: activeScene === scene.id ? 1 : 0.3,
                backgroundColor: activeScene === scene.id ? "var(--primary)" : "currentColor"
              }}
              transition={{ duration: 0.3 }}
              className="w-3 h-3 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)] cursor-pointer"
            />
          </div>
        </button>
      ))}
    </div>
  );
}
