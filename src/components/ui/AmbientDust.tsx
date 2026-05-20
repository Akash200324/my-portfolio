"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AmbientDust() {
  const [particles, setParticles] = useState<{ 
    id: number; 
    size: number; 
    startX: number; 
    startY: number; 
    moveX: number; 
    moveY: number; 
    duration: number; 
    delay: number 
  }[]>([]);

  useEffect(() => {
    // Generate static particle data on mount
    const newParticles = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 1, // Range: 1px to 5px
      startX: Math.random() * 100, // Random percentage start X
      startY: Math.random() * 100, // Random percentage start Y
      moveX: (Math.random() - 0.5) * 15, // Drift between -7.5vw and +7.5vw
      moveY: (Math.random() - 0.5) * 15, // Drift between -7.5vh and +7.5vh
      duration: 15 + Math.random() * 25, // Extremely slow drift (15 to 40 seconds)
      delay: Math.random() * -30, // Negative delay so they are instantly visible on load
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent"
          style={{ 
            width: p.size, 
            height: p.size,
            left: `${p.startX}%`,
            top: `${p.startY}%`,
            filter: `blur(${p.size * 0.6}px)`, // Out of focus blur effect
            boxShadow: `0 0 ${p.size * 3}px rgba(104, 134, 156, 0.8)` // Soft glow
          }}
          animate={{
            x: [`0vw`, `${p.moveX}vw`],
            y: [`0vh`, `${p.moveY}vh`],
            opacity: [0, Math.random() * 0.4 + 0.3, 0], // Pulse in and out of existence
            scale: [0.8, 1.3, 0.8]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
