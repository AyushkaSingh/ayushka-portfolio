"use client";

import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -40, 70, 0],
          scale: [1, 1.12, 0.92, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-[-8rem] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-indigo-500/18 blur-[110px] mix-blend-screen sm:h-[34rem] sm:w-[34rem]"
      />
      
      <motion.div
        animate={{
          x: [0, -90, 40, 0],
          y: [0, 90, -40, 0],
          scale: [1, 1.2, 0.94, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10rem] right-[-8rem] h-[26rem] w-[26rem] rounded-full bg-sky-500/12 blur-[130px] mix-blend-screen sm:h-[38rem] sm:w-[38rem]"
      />

      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-[28%] h-[18rem] w-[18rem] -translate-x-1/2 rounded-full bg-primary/12 blur-[90px] mix-blend-screen sm:h-[28rem] sm:w-[28rem]"
      />
      
      <div className="grid-overlay absolute inset-0 opacity-[0.06]" />
    </div>
  );
}
