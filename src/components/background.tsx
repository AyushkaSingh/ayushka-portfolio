"use client";

import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      {/* Orb 1 */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-violet-600/20 dark:bg-violet-900/40 blur-[100px] mix-blend-screen"
      />
      
      {/* Orb 2 */}
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.5, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-fuchsia-600/20 dark:bg-fuchsia-900/30 blur-[120px] mix-blend-screen"
      />

      {/* Orb 3 (Center subtle) */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[30%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-blue-500/10 dark:bg-blue-800/20 blur-[80px] mix-blend-screen"
      />
      
      {/* Noise overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
}
