"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", proficiency: 88 },
      { name: "Java", proficiency: 80 },
      { name: "C++", proficiency: 78 },
      { name: "C", proficiency: 74 }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "AWS (EC2, S3, Lambda, RDS, IAM)", proficiency: 86 },
      { name: "Docker", proficiency: 88 },
      { name: "GitHub", proficiency: 84 },
      { name: "Linux", proficiency: 86 },
      { name: "MySQL", proficiency: 78 }
    ]
  },
  {
    category: "Frameworks & Web",
    items: [
      { name: "HTML", proficiency: 84 },
      { name: "CSS", proficiency: 82 },
      { name: "Node.js", proficiency: 80 },
      { name: "Nginx", proficiency: 76 }
    ]
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Problem Solving", proficiency: 95 },
      { name: "Continuous Learner", proficiency: 92 },
      { name: "Project Management", proficiency: 82 }
    ]
  }
];

export function Skills() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="skills" ref={containerRef} className="section-shell flex min-h-screen items-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,transparent_70%)]" />
      <motion.div style={{ opacity: opacityTransform, y: yTransform }} className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="section-kicker">Skills</span>
          <h2 className="section-heading mb-4">Technical arsenal with delivery focus.</h2>
          <p className="section-copy mx-auto max-w-2xl">
            A practical mix of engineering fundamentals, cloud tooling, and product development experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, rotateX: -15, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: 1000 }}
              className="glass-card group rounded-[2rem] p-6 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.3)] sm:p-8"
            >
              <h3 className="text-glow mb-7 inline-block text-xl font-bold sm:text-2xl">{skillGroup.category}</h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, i) => (
                  <div key={skill.name} className="space-y-2 relative">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-foreground/90 group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "circOut" }}
                        className="h-full bg-gradient-to-r from-primary via-fuchsia-500 to-indigo-500 relative"
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/30 mix-blend-overlay animate-[shimmer_2s_infinite]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
