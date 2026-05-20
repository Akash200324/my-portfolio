"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center space-y-[-10px] opacity-60"
    >
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0 }}
      >
        <ChevronDown className="w-8 h-8 text-accent" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.1, 0.8, 0.1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      >
        <ChevronDown className="w-8 h-8 text-accent" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0, 0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        <ChevronDown className="w-8 h-8 text-accent" />
      </motion.div>
    </motion.div>
  );
}
