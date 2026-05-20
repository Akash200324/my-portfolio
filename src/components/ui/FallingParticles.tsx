"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FallingParticles() {
  const [particles, setParticles] = useState<{ id: number; left: number; duration: number; delay: number; height: number }[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 40; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          duration: 3 + Math.random() * 5,
          delay: Math.random() * 5,
          height: 10 + Math.random() * 30,
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-0 bg-accent w-[1px] md:w-[2px] opacity-40 rounded-full shadow-[0_0_8px_#68869C]"
          style={{ left: `${p.left}%`, height: `${p.height}px` }}
          animate={{
            y: ["-10vh", "110vh"],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
