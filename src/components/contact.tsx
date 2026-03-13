"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Download, Heart } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-primary/10 rounded-t-full blur-[120px] pointer-events-none" />
      
      <div className="container px-6 mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-glow-dark">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.a
            href="mailto:ayushkasingh63@gmail.com"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-3xl p-8 flex items-center gap-6 group hover:bg-white/10 dark:hover:bg-white/5 transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Email Me</p>
              <p className="text-lg font-bold group-hover:text-glow transition-colors">ayushkasingh63@gmail.com</p>
            </div>
          </motion.a>

          <motion.a
            href="tel:+917209745099"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 flex items-center gap-6 group hover:bg-white/10 dark:hover:bg-white/5 transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-fuchsia-500/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-fuchsia-500/20 transition-all duration-300">
              <Phone className="w-8 h-8 text-fuchsia-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Call Me</p>
              <p className="text-lg font-bold group-hover:text-glow transition-colors">+91-7209745099</p>
            </div>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN_HANDLE" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-14 items-center justify-center rounded-full px-8 font-medium text-foreground glass border border-white/10 transition-all hover:bg-[#0077b5] hover:border-transparent hover:text-white"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/AyushkaSingh"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-14 items-center justify-center rounded-full px-8 font-medium text-foreground glass border border-white/10 transition-all hover:bg-[#333] hover:border-transparent hover:text-white"
          >
            <Github className="mr-2 h-5 w-5" />
            <span>GitHub</span>
          </a>

          <a
            href="/ayushka-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-14 items-center justify-center rounded-full px-8 font-medium bg-primary text-primary-foreground transition-all hover:bg-primary/90 shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] hover:-translate-y-1"
          >
            <Download className="mr-2 h-5 w-5" />
            <span>Download CV</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24 pt-8 border-t border-white/10 flex flex-col items-center justify-center text-center text-muted-foreground"
        >
          <p className="flex items-center gap-2">
            Designed & Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Ayushka Kumari
          </p>
          <p className="text-sm mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
