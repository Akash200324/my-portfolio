"use client";

import { motion, Variants } from "framer-motion";

export default function HeroText() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { x: 100, opacity: 0, filter: "blur(10px)" },
    visible: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const speedLineVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0, originX: 1 },
    visible: {
      scaleX: 1,
      opacity: [0, 1, 0],
      transition: { duration: 1.5, repeat: Infinity, repeatDelay: 3 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col justify-end items-end text-right mt-12 pr-4 md:pr-12 pb-12"
    >
      {/* Motion Trailing Lines */}
      <div className="absolute top-1/2 -right-20 w-[600px] h-full -translate-y-1/2 pointer-events-none z-[-1] overflow-hidden">
        <motion.div variants={speedLineVariants} className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-l from-transparent via-accent/30 to-accent/50" />
        <motion.div variants={speedLineVariants} className="absolute top-[50%] left-0 w-3/4 h-[2px] bg-gradient-to-l from-transparent via-accent/40 to-accent/60" />
        <motion.div variants={speedLineVariants} className="absolute top-[80%] left-0 w-full h-[1px] bg-gradient-to-l from-transparent via-accent/20 to-accent/40" />
      </div>

      <motion.h1 
        variants={itemVariants}
        className="font-heading font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter text-white mb-2 text-shadow-xl"
      >
        AKASH <br /> PRASAD
      </motion.h1>

      <motion.h2 
        variants={itemVariants}
        className="font-sans font-medium text-base md:text-xl tracking-[0.4em] text-gray-300 mb-4 mr-1 uppercase"
      >
        FULL STACK DEVELOPER
      </motion.h2>

      <motion.h3 
        variants={itemVariants}
        className="font-sans font-bold text-[10px] md:text-sm tracking-wider text-accent text-glow mr-1 uppercase"
      >
        UI/UX DESIGNER
      </motion.h3>
      
    </motion.div>
  );
}
