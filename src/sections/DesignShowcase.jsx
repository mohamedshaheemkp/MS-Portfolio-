import { motion, AnimatePresence, useInView } from "framer-motion"
import { useState, useEffect, useRef, useCallback } from "react"
import designs from "../data/designs"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import Magnetic from "../components/Magnetic"
import CircularGallery from "../components/CircularGallery"

const DesignShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeDesign = designs[activeIndex];
  const galleryItems = activeDesign.image.map((img, idx) => ({
    image: img,
    text: `${activeDesign.title} #${idx + 1}`
  }));

  return (
    <section id="designs" className="relative bg-black w-full overflow-hidden border-t border-white/[0.05]">
      
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      <div className="w-full flex flex-col md:flex-row relative">
        
        {/* Left Sticky Sidebar Panel */}
        <div className="w-full md:w-[32%] lg:w-[26%] md:h-screen md:sticky md:top-0 flex flex-col justify-between p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/[0.05] bg-black z-30 overflow-hidden">
          
          <div className="flex items-center gap-4 z-10 relative">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-cyan-400">04</span>
            <div className="w-8 h-px bg-cyan-400/50" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500">Creative Direction</span>
          </div>

          <div className="my-auto py-12 md:py-0 z-10 relative">
            <h2 className="font-display font-black leading-[0.85] tracking-tight mb-8">
              <span className="block text-[clamp(3.5rem,5.5vw,5.5rem)] text-white font-black select-none">VISUAL</span>
              <span className="block text-[clamp(3.5rem,5.5vw,6.5rem)] text-cyan-400 font-extrabold italic select-none">EXP.</span>
            </h2>

            {/* Menu Category Switcher */}
            <div className="flex flex-col gap-4 mt-8">
              {designs.map((design, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 group/item cursor-pointer"
                    onClick={() => setActiveIndex(idx)}
                  >
                    <AnimatePresence mode="wait">
                      {isActive ? (
                        <motion.div
                          layoutId="activeDot"
                          className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff]"
                          animate={{ scale: [1, 1.4, 1], y: [0, -3, 0] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 transition-colors group-hover/item:bg-zinc-600" />
                      )}
                    </AnimatePresence>

                    <span className={`font-mono text-xs transition-colors duration-500 ${isActive ? 'text-cyan-400 font-bold' : 'text-zinc-500 group-hover/item:text-zinc-300'}`}>
                      0{idx + 1}
                    </span>
                    <span className={`font-display text-sm md:text-[15px] tracking-wide transition-all duration-500 uppercase ${isActive ? 'text-white font-bold pl-1' : 'text-zinc-600 group-hover/item:text-zinc-400'}`}>
                      {design.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-2 font-mono text-[9px] text-[#555] border-t border-white/[0.04] pt-6 z-10 relative">
            <div className="flex justify-between items-center">
              <span>LAB STATUS</span>
              <span className="text-cyan-400 animate-pulse flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-cyan-400" /> ONLINE
              </span>
            </div>
            <div className="flex justify-between">
              <span>SYSTEM ENGINE</span>
              <span>WEBGL_OGL_SCROLL</span>
            </div>
            <div className="flex justify-between">
              <span>BEND INDEX</span>
              <span>2.80_CYLINDRICAL</span>
            </div>
          </div>

        </div>

        {/* Right Content Area displaying active CircularGallery */}
        <div className="w-full md:w-[68%] lg:w-[74%] h-screen bg-[#030303] relative z-10 flex flex-col justify-center items-center overflow-hidden">
          
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.015] blur-[150px] pointer-events-none z-0" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/[0.012] blur-[180px] pointer-events-none z-0" />

          {/* Heading overlay */}
          <div className="text-center max-w-xl mb-6 z-20 px-6">
            <motion.span 
              key={`label-${activeIndex}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[9px] text-cyan-400 tracking-[0.25em] block mb-2 uppercase"
            >
              // Showcase_Category_0{activeIndex + 1}
            </motion.span>
            <motion.h3 
              key={`title-${activeIndex}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-4"
            >
              {activeDesign.title}
            </motion.h3>
            <motion.p 
              key={`desc-${activeIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed px-4"
            >
              {activeDesign.title === "Poster Designs" ? "Crafting visual identities, experimental typography layouts, and contemporary graphic design assets."
               : activeDesign.title === "Branding" ? "Helping brands find a distinctive visual language that truly stands out."
               : "Designing minimalist, modern, and high-impact visual signatures, dynamic logos, and memorable brand marks."}
            </motion.p>
          </div>

          {/* WebGL Circular Scrolling Gallery */}
          <div className="w-full h-[320px] md:h-[450px] relative z-10 flex items-center justify-center">
            <CircularGallery
              key={activeIndex} // Force remount to re-initiate WebGL (ogl) renderer with correct images
              items={galleryItems}
              bend={2.8}
              textColor="#00f0ff"
              borderRadius={0.06}
              scrollEase={0.02}
              scrollSpeed={2.5}
            />
          </div>

        </div>

      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px w-full overflow-hidden pointer-events-none z-20">
        <div 
          className="h-px w-[65%] mx-auto bg-gradient-to-r from-transparent via-[#a855f7]/25 to-transparent" 
          style={{ boxShadow: "0 0 10px rgba(168, 85, 247, 0.4)" }}
        />
      </div>

    </section>
  );
};

export default DesignShowcase
