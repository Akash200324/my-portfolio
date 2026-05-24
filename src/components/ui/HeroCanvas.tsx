"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HeroCanvas() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure autoplay with loop on mount
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.warn("Autoplay blocked, retrying on user interaction:", err);
        const resume = () => {
          video.play().catch(() => {});
          document.removeEventListener("click", resume);
          document.removeEventListener("touchstart", resume);
        };
        document.addEventListener("click", resume, { once: true });
        document.addEventListener("touchstart", resume, { once: true });
      }
    };

    playVideo();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        src="/video/character-walking.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030A11] via-[#030A11]/30 to-transparent opacity-90 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#030A11] via-[#030A11]/20 to-transparent opacity-80 pointer-events-none z-10" />
    </motion.div>
  );
}
