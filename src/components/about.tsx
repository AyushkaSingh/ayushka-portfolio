"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cloud, Server, Database, Container, LucideIcon } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, desc, delay, zIndex }: { icon: LucideIcon, title: string, desc: string, delay: number, zIndex: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 100 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: false, margin: "-100px" }}
    transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    className="group relative"
    style={{ zIndex }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-fuchsia-500/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    <div className="glass-card p-8 rounded-3xl h-full border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.3)]">
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  </motion.div>
);

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="section-shell flex min-h-screen items-center">
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute right-[-10rem] top-1/4 h-[20rem] w-[20rem] -translate-y-1/2 rounded-full bg-primary/10 blur-[140px] mix-blend-screen sm:h-[34rem] sm:w-[34rem]" />
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute bottom-1/4 left-[-8rem] h-[18rem] w-[18rem] translate-y-1/2 rounded-full bg-sky-500/10 blur-[120px] mix-blend-screen sm:h-[24rem] sm:w-[24rem]" />

      <div className="section-container relative z-10">
        <motion.div style={{ opacity }} className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <span className="section-kicker">About</span>
              <h2 className="section-heading mb-5">Cloud-focused builder with a DevOps-first direction.</h2>
              <div className="mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-sky-400 mx-auto lg:mx-0" />

              <h3 className="mb-5 text-xl font-bold sm:text-2xl">
                Hi, I&apos;m Ayushka Kumari.
              </h3>

              <div className="space-y-4 text-left text-base leading-7 text-muted-foreground sm:text-lg">
                <p>
                  I am pursuing a B.Tech in Computer Science and Engineering at Lovely Professional University, with a strong focus on <strong className="text-foreground">cloud computing, deployment automation, and infrastructure reliability</strong>.
                </p>
                <p>
                  My recent work centers on AWS, Docker, Linux, and backend tooling that reduces manual deployment effort. I am especially interested in practical DevOps systems that improve availability, repeatability, and operational confidence.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                {['AWS', 'Docker', 'Linux', 'MySQL', 'GitHub'].map((tech) => (
                  <span key={tech} className="glass rounded-full border border-primary/20 px-4 py-2 text-sm font-medium text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FeatureCard 
                icon={Cloud}
                title="AWS Foundations"
                desc="Working with EC2, S3, Lambda, RDS, and IAM to build practical cloud-ready systems."
                delay={0.1}
                zIndex={40}
              />
              <FeatureCard 
                icon={Container}
                title="Container Delivery"
                desc="Building Docker and Podman based workflows for packaging, deployment, and runtime consistency."
                delay={0.3}
                zIndex={30}
              />
              <FeatureCard 
                icon={Server}
                title="Deployment Automation"
                desc="Creating CLI and infrastructure scripts that reduce repetitive deployment and server configuration work."
                delay={0.5}
                zIndex={20}
              />
              <FeatureCard 
                icon={Database}
                title="System Reliability"
                desc="Exploring self-healing monitoring flows, health checks, and resilient service operation patterns."
                delay={0.7}
                zIndex={10}
              />
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
