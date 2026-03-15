"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ServerCog, TerminalSquare } from "lucide-react";

const projects = [
  {
    title: "AutoDeploy EC2",
    description: "A CLI-based deployment automation tool that detects project frameworks and ships applications to AWS EC2 with a containerized flow.",
    summary: "Built for faster one-command deployment of modern web applications.",
    features: [
      "Detects project frameworks and generates Dockerfiles dynamically.",
      "Automates container build and run steps before EC2 deployment.",
      "Configures Nginx reverse proxy setup, port management, and environment validation."
    ],
    tech: ["Node.js", "Docker", "IAM", "AWS EC2", "Linux", "Nginx"],
    icon: ServerCog,
    github: "https://github.com/AyushkaSingh/autodeploy-ec2",
    image: "/project-autodeploy-ec2.png",
    accent: "from-sky-400/30 via-primary/20 to-fuchsia-400/20",
    shadow: "shadow-[0_28px_80px_rgba(59,130,246,0.14)]",
    timeline: "Jan 2026 - Feb 2026",
    outcome: "Modular deployment architecture for full-stack projects."
  },
  {
    title: "Docker Self-Healing Infrastructure Monitor",
    description: "A monitoring service that tracks Docker container state and automatically restarts failed workloads to maintain availability.",
    summary: "Designed as a lightweight reliability mechanism inspired by modern DevOps operations.",
    features: [
      "Continuously monitors container state using the Docker Engine API.",
      "Automatically restarts failed containers to reduce manual intervention.",
      "Provides configurable monitoring intervals and structured logging for maintainability."
    ],
    tech: ["Node.js", "Docker", "Docker Engine API", "Linux", "Automation"],
    icon: TerminalSquare,
    github: "https://github.com/AyushkaSingh/docker-selfhealing-infrastructure",
    image: "/project-self-healing-monitor.png",
    accent: "from-emerald-400/25 via-sky-300/15 to-primary/20",
    shadow: "shadow-[0_28px_80px_rgba(16,185,129,0.12)]",
    timeline: "Nov 2024 - Dec 2024",
    outcome: "Improved service continuity through automated health recovery."
  }
];

export function Projects() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [32, -32]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.9]);

  return (
    <section id="projects" ref={containerRef} className="section-shell relative overflow-hidden">
      <motion.div 
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-10 mb-12 text-center sm:mb-16"
      >
        <span className="section-kicker">Projects</span>
        <h2 className="section-heading mb-4">Projects presented as real engineering case studies.</h2>
        <p className="section-copy mx-auto max-w-2xl">
          The portfolio now reflects the two projects from the CV, with clearer context, delivery details, and better visual balance.
        </p>
      </motion.div>

      <div className="section-container relative z-20 mt-12">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: 1200 }}
              className={`glass-card group relative overflow-hidden rounded-[2rem] ${project.shadow} border border-white/10 bg-black/35 backdrop-blur-3xl transition-all duration-700 hover:-translate-y-1 hover:border-white/25`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-40 transition-opacity duration-700 group-hover:opacity-70`} />
              
              <div className={`relative z-10 grid grid-cols-1 gap-0 overflow-hidden lg:grid-cols-[1.08fr_0.92fr] ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
                <div className="flex flex-col p-6 sm:p-8 lg:p-10">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                      Featured Project
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      <project.icon className="h-3.5 w-3.5" />
                      {project.timeline}
                    </span>
                  </div>

                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                        {project.outcome}
                      </p>
                      <h3 className="mb-4 max-w-2xl text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mb-3 max-w-2xl text-base leading-7 text-foreground/90 sm:text-lg">
                        {project.summary}
                      </p>
                      <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                        {project.description}
                      </p>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-foreground/80 transition hover:-translate-y-0.5 hover:text-foreground"
                      aria-label={`Open ${project.title} source`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="mb-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_220px]">
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">What It Does</h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm leading-7 text-foreground/80 transition-colors group-hover:text-foreground sm:text-base">
                            <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-3 xl:grid-cols-1">
                      <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">Focus</p>
                        <p className="mt-3 text-base font-semibold text-foreground">DevOps & Automation</p>
                      </div>
                      <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">Stack</p>
                        <p className="mt-3 text-base font-semibold text-foreground">Node.js + Cloud Tooling</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2.5 pt-2">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:bg-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-7">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 sm:text-base"
                    >
                      <Github className="w-5 h-5" />
                      View Source
                    </a>
                  </div>
                </div>

                <div className="border-t border-white/10 p-4 sm:p-5 lg:border-l lg:border-t-0 lg:p-6">
                  <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
                    
                    <div className="relative aspect-[4/3] min-h-[260px] sm:min-h-[320px]">
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        sizes="(min-width: 1024px) 34vw, 100vw"
                        className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.03]"
                        priority={project.title === "AutoDeploy EC2"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
