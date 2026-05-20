"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Video, 
  Layout, 
  Layers, 
  Code2, 
  Shield, 
  Zap,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import AmbientDust from "./AmbientDust";

const services = [
  {
    id: "01",
    title: "01 // CINEMATIC 3D ANIMATION",
    description: "Engineering jaw-dropping, seamless looping 3D animation videos tailored explicitly for web backgrounds, landing pages, and interactive UI hubs. Crafted to drive user immersion and instantly elevate brand authority.",
    Icon: Video,
    colorClass: "bg-[#83F250]",
    borderClass: "border-[#83F250]",
    textClass: "text-[#83F250]",
  },
  {
    id: "02",
    title: "02 // UI/UX INTERFACE ARCHITECTURE",
    description: "Designing premium, interactive user interfaces focused on high-end layouts, glassmorphic visual depth, and mathematically optimized user flows that seamlessly convert traffic into active users.",
    Icon: Layout,
    colorClass: "bg-[#E243ED]",
    borderClass: "border-[#E243ED]",
    textClass: "text-[#E243ED]",
  },
  {
    id: "03",
    title: "03 // FIGMA SYSTEM DESIGN",
    description: "Translating abstract digital products into highly organized, interactive Figma blueprints. Building production-ready design systems, interactive prototypes, and scalable component libraries.",
    Icon: Layers,
    colorClass: "bg-[#4691EE]",
    borderClass: "border-[#4691EE]",
    textClass: "text-[#4691EE]",
  },
  {
    id: "04",
    title: "04 // RESPONSIBLE FULL-STACK DEVELOPMENT",
    description: "Deploying lightning-fast, production-ready end-to-end web applications. Bridging high-performance, responsive Next.js frontends with robust, rock-solid architectural systems tailored perfectly for any viewport size.",
    Icon: Code2,
    colorClass: "bg-[#FBBF24]",
    borderClass: "border-[#FBBF24]",
    textClass: "text-[#FBBF24]",
  },
  {
    id: "05",
    title: "05 // SECURE BACKEND & API ENGINES",
    description: "Building highly secure, ultra-scalable backend infrastructures and database relational modules using Python and Django. Developing robust RESTful and GraphQL APIs engineered to process complex data payloads at scale.",
    Icon: Shield,
    colorClass: "bg-[#A78BFA]",
    borderClass: "border-[#A78BFA]",
    textClass: "text-[#A78BFA]",
  },
  {
    id: "06",
    title: "06 // INTERACTIVE MOTION OPTIMIZATION",
    description: "Infusing interfaces with fluid, hardware-accelerated web animations and motion transitions while maintaining rigorous optimization for perfect SEO, lightweight code packages, and blazing fast page loading speeds.",
    Icon: Zap,
    colorClass: "bg-[#34D399]",
    borderClass: "border-[#34D399]",
    textClass: "text-[#34D399]",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export default function ServiceSection() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const totalPages = Math.ceil(services.length / 3);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setPage((prevPage) => {
      if (newDirection === 1) {
        return prevPage === totalPages - 1 ? 0 : prevPage + 1;
      } else {
        return prevPage === 0 ? totalPages - 1 : prevPage - 1;
      }
    });
  };

  useEffect(() => {
    if (isPaused) return;
    
    // Auto-scroll every 4 seconds
    const timer = setInterval(() => {
      paginate(1);
    }, 4000);

    return () => clearInterval(timer);
  }, [page, isPaused]);

  const currentServices = services.slice(page * 3, page * 3 + 3);

  return (
    <section id="services" className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden z-10 bg-[#030A11]">
      {/* Immersive Glowing Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />
      </div>
      
      <AmbientDust />

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col h-full justify-center">
        {/* Header and Controls */}
        <div className="mb-16 shrink-0 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col">
            <h2 className="font-heading font-bold text-2xl md:text-3xl tracking-widest text-white drop-shadow-xl mb-2">
              <span className="text-accent/60 mr-4">{"//"}</span> SERVICES
            </h2>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => paginate(-1)}
              className="p-3 rounded-full border border-white/10 bg-[#151E28] hover:bg-[#213344] transition-all text-white/70 hover:text-white"
              aria-label="Previous services"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => paginate(1)}
              className="p-3 rounded-full border border-white/10 bg-[#151E28] hover:bg-[#213344] transition-all text-white/70 hover:text-white"
              aria-label="Next services"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full h-[600px] lg:h-[450px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14"
            >
              {currentServices.map((service) => (
                <div
                  key={service.id}
                  className="group relative w-full h-full flex flex-col items-center justify-center cursor-pointer"
                >
                  {/* Main Card */}
                  <div className="relative w-full h-full bg-[#151E28]/80 backdrop-blur-md border border-white/5 rounded-3xl flex flex-col items-center p-8 z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-[#213344]/60 group-hover:border-white/10 shadow-xl overflow-hidden">
                    
                    {/* Subtle Color Tint on Hover */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${service.colorClass}`} />
                    
                    {/* Square Icon Container */}
                    <div className={`relative z-10 w-20 h-20 border-[1.5px] ${service.borderClass} bg-[#030A11]/50 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:rotate-12 shrink-0`}>
                      <service.Icon className={`w-8 h-8 ${service.textClass}`} strokeWidth={1.5} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="relative z-10 text-white text-lg font-bold mb-4 text-center tracking-wide min-h-[56px] flex items-center justify-center">
                      {service.title}
                    </h3>
                    
                    <p className="relative z-10 text-gray-400 text-sm md:text-[15px] leading-relaxed text-center font-light max-w-[280px]">
                      {service.description}
                    </p>
                    
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Pagination Dots */}
        <div className="mt-16 flex justify-center gap-3">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > page ? 1 : -1);
                setPage(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                page === idx ? "w-8 bg-white" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
