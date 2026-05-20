"use client";

import { motion } from "framer-motion";
import AmbientDust from "./AmbientDust";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-24 overflow-hidden z-10">
      <AmbientDust />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        
        {/* Left Side: Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-2xl text-left"
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl tracking-widest text-white mb-8 uppercase">
            <span className="text-accent/60 mr-4">{"//"}</span> ABOUT ME
          </h2>
          
          <p className="font-sans text-lg md:text-xl leading-relaxed text-gray-300 font-medium">
            I am a full-stack developer specializing in building high-performance web applications with futuristic user interfaces. My core expertise is engineering robust, highly scalable backend architectures using <span className="text-accent font-bold tracking-wide">Python</span> and the <span className="text-accent font-bold tracking-wide">Django</span> framework. Blending this powerful server-side logic with cutting-edge frontend aesthetics, I translate complex requirements into seamless, interactive digital experiences. Alongside my primary focus on Python, I utilize Next.js and TypeScript to build modern frontends driven by a passion for motion design.
          </p>
        </motion.div>

        {/* Right Side: Media Core */}
        <motion.div 
          initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex-1 flex justify-center lg:justify-end relative"
        >
          {/* Subtle wireframe/data stream highlights behind the image */}
          <div className="absolute inset-0 bg-accent/5 rounded-full blur-[100px] animate-pulse" />
          
          <img 
            src="/image/image2.png" 
            alt="3D Character" 
            className="w-full max-w-md object-contain drop-shadow-[0_0_30px_rgba(104,134,156,0.3)] relative z-10"
          />
        </motion.div>

      </div>
    </section>
  );
}
