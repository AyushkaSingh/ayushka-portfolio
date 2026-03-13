"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Database, Container, LucideIcon } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, desc, delay }: { icon: LucideIcon, title: string, desc: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-card rounded-2xl p-6 group relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  </motion.div>
);

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-fuchsia-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden box-glow"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
            
            <h3 className="text-2xl font-bold mb-6 font-heading">
              Hi, I&apos;m Ayushka Kumari 🚀
            </h3>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I am a Computer Science undergraduate at Lovely Professional University with a strong interest in <strong className="text-foreground">Cloud Computing, DevOps, and Infrastructure Automation</strong>.
              </p>
              <p>
                My passion lies in building tools that simplify deployment, monitoring, and cloud operations. I enjoy diving deep into system architecture and ensuring applications run reliably and scale effortlessly.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              {['AWS', 'Docker', 'Jenkins', 'Kubernetes' , 'Linux'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full glass text-sm font-medium border border-primary/20 text-primary">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats / Highlight Cards */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-6">
            <FeatureCard
              icon={Cloud}
              title="AWS Infrastructure"
              desc="Architecting scalable and secure cloud solutions."
              delay={0.1}
            />
            <FeatureCard
              icon={Container}
              title="Docker & DevOps"
              desc="Containerizing apps and automating delivery pipelines."
              delay={0.2}
            />
          </div>
          
          <div className="lg:col-span-4 lg:-mt-[5.5rem]">
            <FeatureCard
              icon={Server}
              title="Backend Development"
              desc="Building robust APIs and scalable backend architectures."
              delay={0.3}
            />
          </div>
          <div className="lg:col-span-8">
            <FeatureCard
              icon={Database}
              title="Database Management"
              desc="Designing schemas and optimizing database performance."
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
