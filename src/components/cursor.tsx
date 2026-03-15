"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName.toLowerCase() === "a" || 
          (e.target as HTMLElement).tagName.toLowerCase() === "button" ||
          (e.target as HTMLElement).closest("a") ||
          (e.target as HTMLElement).closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Hide cursor on mobile or touch devices
  if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary pointer-events-none z-[100] hidden md:block"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-40 h-40 rounded-full pointer-events-none z-[99] hidden md:block mix-blend-screen"
        animate={{
          x: mousePosition.x - 80,
          y: mousePosition.y - 80,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(139, 92, 246, 0.15)" : "rgba(139, 92, 246, 0.05)",
          boxShadow: isHovering ? "0 0 60px 20px rgba(139, 92, 246, 0.2)" : "0 0 40px 10px rgba(139, 92, 246, 0.1)"
        }}
        transition={{ type: "tween", ease: "circOut", duration: 0.4 }}
      />
    </>
  );
}
