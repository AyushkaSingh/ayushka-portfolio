"use client";

import { motion } from "framer-motion";
import { Github, ServerCog, TerminalSquare } from "lucide-react";

const projects = [
  {
    title: "AutoDeploy EC2",
    description: "A CLI-based DevOps automation tool that detects project frameworks and automatically containerizes applications using Docker for deployment on AWS EC2.",
    features: [
      "Dynamic Dockerfile generation",
      "One-command deployment",
      "Nginx reverse proxy setup",
      "Automatic port detection"
    ],
    tech: ["Node.js", "Docker", "AWS EC2", "IAM", "Linux", "Nginx"],
    icon: TerminalSquare,
    github: "https://github.com/AyushkaSingh",
  },
  {
    title: "Docker Self-Healing Infrastructure Monitor",
    description: "A monitoring system that continuously tracks Docker containers and automatically restarts failed containers to maintain service reliability.",
    features: [
      "Docker Engine API integration",
      "Automated health checks",
      "Container recovery",
      "Infrastructure reliability simulation"
    ],
    tech: ["Node.js", "Docker", "Linux"],
    icon: ServerCog,
    github: "https://github.com/AyushkaSingh",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6 mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="group relative glass-card rounded-3xl p-8 flex flex-col h-full overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.3)]"
            >
              {/* Background gradient orb for hover */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all duration-700 -translate-y-1/2 translate-x-1/3" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-glow transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 text-xs font-medium rounded-full glass border border-white/10 text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-white/10 hover:text-white transition-colors duration-300 ml-auto"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
