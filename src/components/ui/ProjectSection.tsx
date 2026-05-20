"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AmbientDust from "./AmbientDust";

const projects = [
  {
    id: 1,
    title: "Couple Tracker",
    description: "An intuitive web platform designed exclusively for couples to track their relationship milestones, intimacy, and daily interactions. Built with a robust Python backend and styled dynamically using modern CSS frameworks for a seamless, responsive experience.",
    images: ["/image/project1.png", "/image/project2.png"],
  },
  {
    id: 2,
    title: "Sportsy",
    description: "A next-generation e-commerce fashion store featuring trendy collections of apparel and footwear. Engineered using Python for secure payment integrations and product management, paired with Tailwind CSS for a premium shopping interface.",
    images: ["/image/project3.png", "/image/project4.png"],
  },
  {
    id: 3,
    title: "Worksy",
    description: "A comprehensive 3-module job portal bridging Users, Companies, and Administrators. Powered by a highly scalable Python architecture, it features complete end-to-end payment flows and real-time data handling with a sleek frontend UI.",
    images: ["/image/project5.png", "/image/project6.png"],
  },
  {
    id: 4,
    title: "Pet Pantry",
    description: "A full-service pet care platform offering premium pet supplies and an integrated grooming booking system. Developed using Python for complex backend scheduling, combined with modern styling languages to deliver a highly interactive user experience.",
    images: ["/image/project7.png"],
  },
];

export default function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageSubIndex, setImageSubIndex] = useState(0);

  // Main Project Timer (6 seconds for better readability)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setImageSubIndex(0); // Reset sub-image on project change
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]); // Resets timer if manual navigation occurs

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setImageSubIndex(0);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setImageSubIndex(0);
  };

  // Sub-Image Timer (3 seconds for crossfading multiple images)
  useEffect(() => {
    const activeProject = projects[currentIndex];
    if (activeProject.images.length > 1) {
      const timer = setInterval(() => {
        setImageSubIndex((prev) => (prev + 1) % activeProject.images.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [currentIndex]);

  const activeProject = projects[currentIndex];

  return (
    <section id="projects" className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-24 overflow-hidden z-10">
      {/* Immersive Glowing Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
      </div>
      
      <AmbientDust />
      
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 h-full flex flex-col justify-center">
        
        <div className="mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl tracking-widest text-white drop-shadow-xl">
            <span className="text-accent/60 mr-4">//</span> SELECTED_WORKS
          </h2>
        </div>

        <div className="relative w-full h-[600px] flex items-center">
          <AnimatePresence>
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: 150, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -150, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-between"
            >
              
              {/* Left Side: Massive Glass Card for Images */}
              <div className="flex-1 w-full h-full relative glass-panel rounded-3xl border-[1px] border-border-glass/60 shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-hidden flex items-center justify-center backdrop-blur-xl bg-[#030A11]/30">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeProject.images[imageSubIndex] || activeProject.images[0]}
                    src={activeProject.images[imageSubIndex] || activeProject.images[0]}
                    alt={`${activeProject.title} screenshot`}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-contain p-4 opacity-95"
                  />
                </AnimatePresence>
                
                {/* Inner glass reflection */}
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(255,255,255,0.05)] pointer-events-none rounded-3xl" />
              </div>

              {/* Right Side: Project Info */}
              <div className="w-full lg:w-[400px] flex flex-col justify-center space-y-6 text-left shrink-0">
                <div className="space-y-2">
                  <h3 className="font-heading font-black text-4xl md:text-5xl text-white tracking-tight drop-shadow-lg">
                    {activeProject.title}
                  </h3>
                </div>
                
                <p className="font-sans text-base md:text-lg text-gray-300 leading-relaxed font-medium">
                  {activeProject.description}
                </p>

                {/* Progress Indicators and Navigation */}
                <div className="flex items-center justify-between pt-6 border-t border-border-glass/30 mt-6">
                  <div className="flex items-center gap-3">
                    {projects.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-12 bg-accent shadow-[0_0_10px_#68869C]' : 'w-4 bg-gray-600/50'}`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={prevProject} 
                      className="p-3 rounded-full border border-border-glass/60 bg-[#213344]/30 hover:bg-accent/20 hover:border-accent text-white transition-all duration-300"
                      aria-label="Previous project"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <button 
                      onClick={nextProject} 
                      className="p-3 rounded-full border border-border-glass/60 bg-[#213344]/30 hover:bg-accent/20 hover:border-accent text-white transition-all duration-300"
                      aria-label="Next project"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
