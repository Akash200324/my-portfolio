"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TOTAL_FRAMES = 64;

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      // Format: ezgif-frame-001.jpg
      const frameNum = i.toString().padStart(3, "0");
      img.src = `/image/ezgif-frame-${frameNum}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImages(loadedImages);
          setLoaded(true);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  // Animation Loop
  useEffect(() => {
    if (!loaded || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Make canvas responsive and sharp
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let frame = 0;
    let animationFrameId: number;
    let lastDrawTime = 0;
    const FPS = 12; // 0.8x playback speed
    const frameInterval = 1000 / FPS;

    const draw = (timestamp: number) => {
      if (timestamp - lastDrawTime >= frameInterval) {
        // High quality rendering
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        // We use window.innerWidth/innerHeight because we scaled the context by dpr
        const rectWidth = window.innerWidth;
        const rectHeight = window.innerHeight;

        ctx.clearRect(0, 0, rectWidth, rectHeight);
        
        // Use "cover" logic to fully stretch the video and eliminate borders.
        const img = images[frame];
        const canvasRatio = rectWidth / rectHeight;
        const imgRatio = img.width / img.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
          drawWidth = rectWidth;
          drawHeight = rectWidth / imgRatio;
          offsetX = 0;
          offsetY = (rectHeight - drawHeight) / 2;
        } else {
          drawWidth = rectHeight * imgRatio;
          drawHeight = rectHeight;
          offsetX = (rectWidth - drawWidth) / 2;
          offsetY = 0;
        }

        // Apply a cinematic enhancement filter to make the upscaled image look punchier and hide some compression artifacts
        ctx.filter = "contrast(1.15) saturate(1.2)";
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        ctx.filter = "none"; // Reset filter

        frame = (frame + 1) % TOTAL_FRAMES;
        lastDrawTime = timestamp;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [loaded, images]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black"
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-accent text-sm animate-pulse bg-[#030A11]/80 z-20">
          INITIALIZING CORE...
        </div>
      )}

      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover opacity-80"
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030A11] via-[#030A11]/30 to-transparent opacity-90 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#030A11] via-[#030A11]/20 to-transparent opacity-80 pointer-events-none z-10" />
    </motion.div>
  );
}
