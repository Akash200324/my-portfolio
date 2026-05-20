"use client";

import { motion } from "framer-motion";
import AmbientDust from "./AmbientDust";

export default function EducationSection() {
  return (
    <section id="education" className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-24 overflow-hidden z-10">
      <AmbientDust />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        
        {/* Left Side: Media Core */}
        <motion.div 
          initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 flex justify-center lg:justify-start relative"
        >
          {/* Subtle wireframe/data stream highlights behind the image */}
          <div className="absolute inset-0 bg-accent/5 rounded-full blur-[100px] animate-pulse" />
          
          <img 
            src="/image/image3.png" 
            alt="Education Character" 
            className="w-full max-w-md object-contain drop-shadow-[0_0_30px_rgba(104,134,156,0.3)] relative z-10"
          />
        </motion.div>

        {/* Right Side: Timeline Architecture */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 max-w-2xl text-left relative"
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl tracking-widest text-white mb-12">
            <span className="text-accent/60 mr-4">//</span> EDUCATION_HISTORY
          </h2>
          
          {/* Timeline Spine */}
          <div className="relative pl-8 border-l-[2px] border-border-glass/60 space-y-12">
            
            {/* Card 1 */}
            <div className="relative group">
              <div className="absolute -left-[41px] top-8 w-4 h-4 rounded-full bg-[#030A11] border-2 border-accent shadow-[0_0_10px_#68869C] group-hover:bg-accent transition-colors duration-300" />
              <div className="glass-panel p-8 rounded-xl border border-border-glass/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-accent/50 hover:shadow-[0_0_30px_rgba(104,134,156,0.15)] transition-all duration-300">
                <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-3">
                  Bachelor of Computer Science
                </h3>
                <p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed font-medium">
                  Focused on Advanced Data Structures, algorithmic optimization, Web Systems, and Core Software Engineering principles.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group">
              <div className="absolute -left-[41px] top-8 w-4 h-4 rounded-full bg-[#030A11] border-2 border-accent shadow-[0_0_10px_#68869C] group-hover:bg-accent transition-colors duration-300" />
              <div className="glass-panel p-8 rounded-xl border border-border-glass/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-accent/50 hover:shadow-[0_0_30px_rgba(104,134,156,0.15)] transition-all duration-300">
                <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-3">
                  Python Full Stack Development Certification
                </h3>
                <p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed font-medium">
                  Comprehensive mastery of backend systems utilizing Python and Django architecture, relational database management, and modern frontend integration.
                </p>
              </div>
            </div>

          </div>
          
          {/* Tech Stack Matrix */}
          <div className="mt-20">
            <h3 className="font-heading font-bold text-lg md:text-xl tracking-widest text-white mb-6">
              <span className="text-accent/60 mr-3">//</span> LANGUAGES_&_FRAMEWORKS
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Python', 'Django', 'Flask', 'FastAPI', 'JavaScript', 'React', 'Node.js', 'HTML', 'CSS'].map((tech) => (
                <div 
                  key={tech} 
                  className="px-5 py-2.5 rounded-full border border-border-glass/40 bg-[#213344]/20 backdrop-blur-md text-gray-300 font-mono text-sm shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:border-accent hover:text-white hover:shadow-[0_0_20px_rgba(104,134,156,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
