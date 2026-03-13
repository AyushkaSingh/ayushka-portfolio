"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2, Database, LayoutTemplate, Terminal, LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingIcon = ({ icon: Icon, delay, className }: { icon: LucideIcon, delay: number, className: string }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
    transition={{
      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
    }}
    className={`absolute hidden md:flex items-center justify-center w-16 h-16 rounded-2xl glass-card text-muted-foreground ${className}`}
  >
    <Icon className="w-8 h-8" />
  </motion.div>
);

const TypeWriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 0);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, Math.random() * 150));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="inline-block min-w-[20px]">
      {words[index].substring(0, subIndex)}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  );
};

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      
      {/* Decorative Floating Elements */}
      <FloatingIcon icon={Terminal} delay={0} className="top-1/4 left-[10%] -rotate-12" />
      <FloatingIcon icon={Database} delay={1} className="bottom-1/3 left-[15%] rotate-12" />
      <FloatingIcon icon={Code2} delay={2} className="top-1/3 right-[10%] rotate-6" />
      <FloatingIcon icon={LayoutTemplate} delay={3} className="bottom-1/4 right-[15%] -rotate-6" />

      <div className="container px-6 relative z-10 mx-auto text-center max-w-5xl">
        <motion.div style={{ opacity, y: y2 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-primary text-sm font-medium mb-8 box-glow"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter"
          >
            Hi, I&apos;m <span className="gradient-text font-serif italic pr-2">Ayushka</span>
            <br className="hidden md:block" />
            <span className="text-foreground/80">
              I build <TypeWriter words={["scalable cloud infra", "modern web apps", "automated pipelines", "resilient systems"]} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium"
          >
            Cloud & DevOps Enthusiast | Software Developer building automated tools, scalable infrastructure, and modern applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#projects"
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-foreground px-8 font-medium text-background transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20" />
              </div>
              <span className="mr-2">View Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/ayushka-cv.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full px-8 font-medium text-foreground glass border border-white/10 transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
            >
              <span className="mr-2">Download CV</span>
              <div className="h-2 w-2 rounded-full bg-primary transition-all group-hover:animate-ping" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Mouse parallax subtle overlay layer */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,var(--background)_100%)] opacity-80"
      />
    </section>
  );
}
