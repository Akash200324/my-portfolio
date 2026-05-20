"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// If utils doesn't exist yet, we'll create it later. For now, basic cn can just be a template literal or we'll define it.
// Actually, it's better to just use clsx/tailwindMerge directly here if utils is not set up.
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("HOME");

  const links = [
    { name: "HOME", href: "#hero" },
    { name: "ABOUT", href: "#about" },
    { name: "EDUCATION", href: "#education" },
    { name: "PROJECTS", href: "#projects" },
    { name: "SERVICES", href: "#services" },
    { name: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = [
        { id: "hero", name: "HOME" },
        { id: "about", name: "ABOUT" },
        { id: "education", name: "EDUCATION" },
        { id: "projects", name: "PROJECTS" },
        { id: "services", name: "SERVICES" },
        { id: "contact", name: "CONTACT" },
      ];

      let current = "HOME";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
            current = section.name;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollEvent);
    handleScrollEvent(); // initial check
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50"
    >
      <div className="glass-panel flex items-center justify-between px-8 py-4 rounded-full border border-border-glass/40 shadow-[inset_0_0_20px_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.5)]">
        
        {/* Brand */}
        <div className="font-heading font-bold text-xl tracking-widest text-white">
          AKASH
        </div>

        {/* Links */}
        <ul className="flex items-center space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={cn(
                  "text-sm font-medium tracking-wider transition-all duration-300 cursor-pointer",
                  activeSection === link.name 
                    ? "text-accent text-glow shadow-accent-glow drop-shadow-[0_0_10px_rgba(104,134,156,0.6)]" 
                    : "text-gray-400 hover:text-white"
                )}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
