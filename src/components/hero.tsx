"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { WebGLHero } from "@/components/webgl-hero";

export function Hero() {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, 140]);
  const opacity = useTransform(scrollY, [0, 420], [1, 0]);

  return (
    <section id="hero" className="section-shell flex min-h-screen items-center justify-center overflow-hidden pt-28 sm:pt-32">
      <WebGLHero />

      <div className="section-container relative z-10 text-center pointer-events-none">
        <motion.div style={{ opacity, y: y2 }} className="pointer-events-auto mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/80 shadow-[0_0_30px_rgba(139,92,246,0.2)] backdrop-blur-md sm:mb-8 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            Cloud, DevOps, and Full-Stack Craft
          </motion.div>

          <motion.div className="mb-6 overflow-hidden sm:mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl font-black leading-[0.9] tracking-[-0.07em] text-glow-dark sm:text-6xl md:text-7xl lg:text-[7.5rem]"
            >
              <span className="block pr-0 text-foreground md:inline-block md:pr-4">Ayushka</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-fuchsia-500">Kumari</span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mb-8 max-w-3xl text-base font-medium leading-7 text-muted-foreground sm:mb-10 sm:text-xl sm:leading-8 md:text-2xl"
          >
            Cloud and DevOps focused developer building automation-first tooling, container workflows, and reliable deployment systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              onClick={() => {
                const el = document.getElementById("about");
                const lenisWindow = window as unknown as { lenis: unknown };
                if (el && lenisWindow.lenis) {
                  // @ts-expect-error - lenis is dynamically injected
                  lenisWindow.lenis.scrollTo(el, { duration: 1.5 });
                }
              }}
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(255,255,255,0.16)] active:scale-95 sm:h-14 sm:px-8 sm:text-base"
            >
              <span className="mr-2">Enter Experience</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="/CV_AYU_FINAL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-medium text-foreground/80 transition-all hover:-translate-y-0.5 hover:text-foreground sm:h-14 sm:px-6 sm:text-base"
            >
              <Download className="mr-2 h-4 w-4" />
              Open CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
