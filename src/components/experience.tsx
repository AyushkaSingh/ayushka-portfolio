"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, ShieldCheck, ServerCog } from "lucide-react";

const education = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech Computer Science",
    period: "2023 – 2027",
    score: "CGPA: 7.0",
    icon: GraduationCap
  },
  {
    institution: "CS DAV Public School",
    period: "Intermediate",
    degree: "High School",
    score: "CGPA: 7.6",
    icon: BookOpen
  }
];

const certificates = [
  "AWS Essential's – Udemy",
  "Privacy and Security on Social Media – NPTEL",
  "AWS Academy Cloud Foundation – AWS",
  "Java, C, Cpp, DSA – IamNeo"
];

const achievements = [
  "Configured IAM roles, security groups, and S3 policies using AWS best practices.",
  "AWS Cloud Practitioner",
  "Architecting on AWS",
  "AWS Cloud Quest"
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto max-w-6xl relative z-10 space-y-32">
        
        {/* Education Timeline */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
          </motion.div>

          {/* Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-32 bottom-0 w-0.5 bg-gradient-to-b from-primary via-fuchsia-500 to-transparent transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className={`flex flex-col md:flex-row items-center justify-between gap-8 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-5/12 hidden md:block" />
                
                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 rounded-full glass border-4 border-background flex items-center justify-center transform -translate-x-1/2 text-primary shadow-[0_0_15px_currentColor] z-10 hidden md:flex">
                  <item.icon className="w-5 h-5" />
                </div>

                <div className="w-full md:w-5/12">
                  <div className="glass-card rounded-3xl p-8 relative group hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all">
                    <div className="absolute w-2 h-full top-0 left-0 bg-gradient-to-b from-primary to-fuchsia-500" />
                    <span className="text-primary font-bold tracking-wider text-sm mb-2 block">{item.period}</span>
                    <h3 className="text-2xl font-bold mb-1">{item.institution}</h3>
                    <p className="text-muted-foreground font-medium mb-3">{item.degree}</p>
                    <div className="inline-flex px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold">
                      {item.score}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Training & Certifications Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Training */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-8 lg:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px] group-hover:bg-violet-500/20 transition-all duration-700" />
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <ServerCog className="text-violet-500 w-8 h-8" />
              Training Highlight
            </h3>
            
            <h4 className="text-xl font-bold mb-4 text-glow">Linux & Container Deployment</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-violet-500 mt-2 shrink-0" />
                Container deployment using Podman on RHEL instances.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-violet-500 mt-2 shrink-0" />
                NGINX running inside container with persistent storage configuration.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-violet-500 mt-2 shrink-0" />
                Systemd automation for container auto-start and flawless reliability.
              </li>
            </ul>
          </motion.div>

          {/* Certificates & Achievements */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-3xl p-8 flex-1"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-fuchsia-500 w-6 h-6" />
                Certificates
              </h3>
              <ul className="space-y-3">
                {certificates.map((cert, idx) => (
                  <motion.li 
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="p-4 rounded-xl glass border border-white/5 text-sm font-medium transition-all hover:bg-white/10"
                  >
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card rounded-3xl p-8 flex-1 border-t-4 border-t-primary"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ShieldCheck className="text-primary w-6 h-6" />
                Achievements
              </h3>
              <ul className="space-y-3">
                {achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
