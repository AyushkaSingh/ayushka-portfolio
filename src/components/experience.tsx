"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

export function Experience() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const items = [
    {
      title: "Lovely Professional University",
      subtitle: "B.Tech in Computer Science and Engineering",
      date: "Aug 2023 - Jun 2027",
      icon: GraduationCap,
      description: "Current degree program in Jalandhar, Punjab with CGPA 7.0. Building a stronger foundation in software engineering while focusing on cloud and DevOps-oriented work.",
      color: "from-fuchsia-500/20 to-purple-600/20",
      delay: 0.1
    },
    {
      title: "CS DAV Public School",
      subtitle: "Intermediate",
      date: "Apr 2021 - Mar 2023",
      icon: BookOpen,
      description: "Completed intermediate studies in Motihari, Bihar with CGPA 7.6, building the academic base that led into computer science and technical problem solving.",
      color: "from-blue-500/20 to-cyan-500/20",
      delay: 0.3
    }
  ];

  return (
    <section id="experience" ref={containerRef} className="section-shell relative flex min-h-screen flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_70%)] pointer-events-none" />

      <motion.div style={{ y: headerY }} className="relative z-10 mb-14 text-center sm:mb-18">
        <span className="section-kicker">Experience</span>
        <h2 className="section-heading mb-4 text-glow-dark">Education aligned with the CV.</h2>
        <p className="section-copy mx-auto max-w-2xl">
          Academic background from the resume, presented cleanly without mixing it with certifications and training.
        </p>
      </motion.div>

      <div className="section-container relative z-20 perspective-1000">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-x-1/2 hidden md:block" />

        <div className="space-y-12 md:space-y-20">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, z: -200, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, z: 0, y: 0 }}
                viewport={{ once: false, margin: "-15%" }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1
                }}
                className={`relative flex flex-col items-center gap-6 md:flex-row md:gap-14 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full z-20 hidden md:block shadow-[0_0_15px_rgba(139,92,246,0.8)]" />

                <div className="w-full md:w-1/2 group">
                  <div className={`glass-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.3)] sm:p-8`}>
                    
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    
                    <div className="relative z-10">
                      <div className="mb-5 flex items-center gap-4">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10">
                          <item.icon className="h-7 w-7 text-primary transition-colors group-hover:text-foreground" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">{item.date}</p>
                          <h3 className="text-xl font-bold sm:text-2xl">{item.title}</h3>
                        </div>
                      </div>
                      <h4 className="mb-4 text-base font-medium text-foreground/90 sm:text-lg">{item.subtitle}</h4>
                      <p className="leading-7 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
