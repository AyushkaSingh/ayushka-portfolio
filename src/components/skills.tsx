"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "C++", level: 90 },
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "C", level: 85 }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "Linux", level: 85 }
    ]
  },
  {
    category: "Frameworks & Web",
    items: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "MySQL", level: 80 }
    ]
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Problem Solving", level: 95 },
      { name: "Project Management", level: 85 },
      { name: "Continuous Learner", level: 100 }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6 mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Technical Arsenal</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIdx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="glass-card rounded-3xl p-8 relative overflow-hidden group"
            >
              {/* Highlight Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] group-hover:bg-primary/20 transition-all duration-500" />
              
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full"></span>
                {skillGroup.category}
              </h3>

              <div className="space-y-6 relative z-10">
                {skillGroup.items.map((skill, idx) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 relative"
                      >
                        <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
