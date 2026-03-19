"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, Heart } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-shell relative overflow-hidden pb-10">
      {/* Background Orbs/Gradients - Light/Dark aware */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:bg-[radial-gradient(circle_at_bottom,rgba(139,92,246,0.15)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute bottom-0 z-0 h-[30vh] w-full bg-gradient-to-t from-background via-background/80 to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="section-kicker">Contact</span>
          <h2 className="mb-6 text-4xl font-black tracking-[-0.06em] text-gray-900 dark:text-white dark:text-glow-dark sm:text-5xl md:text-6xl lg:text-7xl">
            Let&apos;s build something great.
          </h2>
          <p className="mx-auto max-w-3xl text-base font-medium leading-7 text-gray-600 dark:text-muted-foreground sm:text-xl sm:leading-8">
            Currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        {/* Main Contact Card - Responsive light/dark styles */}
        <div className="relative mb-12 flex justify-center sm:mb-16">
          <motion.a
            href="mailto:ayushkasingh63@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex w-full max-w-2xl items-center gap-5 overflow-hidden rounded-[2rem] border border-gray-200/50 bg-white/80 p-6 shadow-lg shadow-primary/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-xl hover:shadow-primary/20 dark:border-white/10 dark:bg-black/40 dark:shadow-none dark:hover:border-white/30 dark:hover:bg-white/10 dark:hover:shadow-[0_0_50px_rgba(139,92,246,0.2)] sm:gap-6 sm:p-8"
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 dark:from-primary/20" />

            {/* Icon container */}
            <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:border-primary/50 group-hover:bg-primary/20 dark:border-primary/20 dark:bg-primary/10 dark:group-hover:bg-primary/30 sm:h-20 sm:w-20 sm:rounded-3xl">
              <Mail className="h-8 w-8 text-primary group-hover:animate-pulse sm:h-10 sm:w-10" />
            </div>

            {/* Text */}
            <div className="relative z-10 overflow-hidden">
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.24em] text-gray-500 dark:text-muted-foreground">
                Email Me
              </p>
              <p className="truncate text-lg font-bold text-gray-900 transition-colors group-hover:text-primary dark:text-foreground dark:group-hover:text-glow sm:text-2xl">
                ayushkasingh63@gmail.com
              </p>
            </div>
          </motion.a>
        </div>

        {/* Social Links & CV - Responsive buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap"
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ayushka-43859a289"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 w-full items-center justify-center rounded-full border border-gray-300 bg-gray-100 px-6 text-sm font-medium text-gray-800 transition-all hover:-translate-y-0.5 hover:border-[#0077b5] hover:bg-[#0077b5] hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-foreground dark:hover:border-transparent dark:hover:bg-[#0077b5] sm:h-14 sm:w-auto sm:px-8 sm:text-base"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AyushkaSingh"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 w-full items-center justify-center rounded-full border border-gray-300 bg-gray-100 px-6 text-sm font-medium text-gray-800 transition-all hover:-translate-y-0.5 hover:border-[#333] hover:bg-[#333] hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-foreground dark:hover:border-transparent dark:hover:bg-[#333] sm:h-14 sm:w-auto sm:px-8 sm:text-base"
          >
            <Github className="mr-2 h-5 w-5" />
            <span>GitHub</span>
          </a>

          {/* CV Button - Standout style */}
          <a
            href="/CV_AYU_FINAL.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 px-6 text-sm font-medium text-white shadow-lg shadow-primary/30 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/40 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-white/90 dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] sm:h-14 sm:w-auto sm:px-8 sm:text-base"
          >
            <Download className="mr-2 h-5 w-5" />
            <span className="tracking-wide">Open CV</span>
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.8 }}
          className="mt-14 flex flex-col items-center justify-center border-t border-gray-200 pt-8 text-center text-gray-500 dark:border-white/10 dark:text-muted-foreground sm:mt-16"
        >
          <p className="flex items-center gap-3 text-base font-medium tracking-wide sm:text-lg">
            Designed & Built with <Heart className="h-5 w-5 animate-pulse text-red-500" /> by Ayushka Kumari
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.24em] sm:text-sm">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
