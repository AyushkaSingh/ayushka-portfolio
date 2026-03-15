"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Trophy, Wrench } from "lucide-react";

const trainings = [
  {
    title: "Linux & Container Deployment Training (Podman + NGINX)",
    date: "Jun 2025 - Jul 2025",
    points: [
      "Deployed containerized applications using Podman on RHEL with installation, configuration, and lifecycle management.",
      "Configured an NGINX web server inside a Podman container with host-mounted persistent storage and live content updates.",
      "Set up systemd-based automation for auto-start on boot to simulate production-like reliability."
    ]
  }
];

const certificates = [
  "AWS Essential's: A Complete Beginner's Guide | Udemy",
  "Privacy and Security on Social Media | NPTEL",
  "AWS Academy Cloud Foundation | AWS",
  "Java, C, Cpp, DSA | IamNeo"
];

const achievements = [
  "Strengthened cloud security by configuring IAM roles, security groups, and S3 policies aligned with best practices.",
  "Completed Cloud Practitioner Essentials, Architecting on AWS, and AWS Cloud Quest learning tracks."
];

const credentialGroups = [
  {
    title: "Training",
    icon: Wrench,
    color: "from-sky-400/20 to-primary/20",
    content: (
      <div className="space-y-5">
        {trainings.map((training) => (
          <div key={training.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-bold text-foreground">{training.title}</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                {training.date}
              </span>
            </div>
            <ul className="space-y-2 text-sm leading-7 text-muted-foreground sm:text-base">
              {training.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  },
  {
    title: "Certificates",
    icon: Award,
    color: "from-fuchsia-400/20 to-orange-400/20",
    content: (
      <ul className="grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
        {certificates.map((certificate) => (
          <li key={certificate} className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3">
            {certificate}
          </li>
        ))}
      </ul>
    )
  },
  {
    title: "Achievements",
    icon: Trophy,
    color: "from-emerald-400/20 to-sky-400/20",
    content: (
      <ul className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
        {achievements.map((achievement) => (
          <li key={achievement} className="flex gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    )
  }
];

export function Credentials() {
  return (
    <section id="credentials" className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute right-[-10rem] top-10 h-[20rem] w-[20rem] rounded-full bg-primary/12 blur-[120px]" />
      <div className="section-container relative z-10">
        <div className="mb-10 text-center sm:mb-14">
          <span className="section-kicker">Credentials</span>
          <h2 className="section-heading mb-4">Training, certifications, and applied milestones.</h2>
          <p className="section-copy mx-auto max-w-3xl">
            Resume-backed highlights that strengthen the cloud and DevOps focus across the portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          {credentialGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`glass-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 p-6 sm:p-8 ${
                index === 0 ? "xl:row-span-2" : ""
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-35`} />
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/8">
                    <group.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{group.title}</h3>
                </div>
                {group.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
