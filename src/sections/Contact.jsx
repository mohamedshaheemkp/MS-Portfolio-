import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Parallax for blueprint grid
  const gridY = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
  
  // Massive Living Name Typography Parallax
  const leftTextX = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);
  const rightTextX = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0.3, 1], [0.8, 1]);
  
  // Ambient glow scale and opacity
  const glowScale = useTransform(scrollYProgress, [0.5, 1], [0.5, 1.2]);
  const glowOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 0.4]);

  return (
    <section 
      ref={containerRef} 
      className="w-full relative h-[100vh] min-h-[700px] flex flex-col bg-[#050505] overflow-hidden justify-end"
    >
      {/* 1. Architecture Blueprint Grid */}
      <div className="absolute inset-0 perspective-[1000px] pointer-events-none overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ y: gridY }}
          className="w-[200%] h-[200%] opacity-[0.03]"
        >
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '4vw 4vw',
              transform: 'rotateX(60deg) translateY(-100px)',
              transformOrigin: 'top center'
            }}
          />
        </motion.div>
      </div>

      {/* Gradient Mask for Grid */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] pointer-events-none z-0" />

      {/* 2. Cinematic Ambient Glow */}
      <motion.div 
        style={{ scale: glowScale, opacity: glowOpacity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[40vh] bg-accent-blue rounded-[100%] blur-[100px] pointer-events-none z-0"
      />

      {/* 3. Command Center UI - Top Bar */}
      <div className="absolute top-8 left-0 right-0 px-6 md:px-12 flex justify-between items-center z-20">
        <div className="flex items-center gap-3 text-text-secondary font-mono text-[10px] md:text-xs uppercase tracking-widest">
          <motion.span 
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent-blue"
          ></motion.span>
          [ SYSTEM STATUS: LIVE ]
        </div>
        <div className="flex items-center gap-3 text-text-secondary font-mono text-[10px] md:text-xs uppercase tracking-widest">
          NODE // END OF LINE
        </div>
      </div>

      {/* 4. Living Name Typography (Massive Scale) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 gap-0 leading-none">
        <motion.div style={{ x: leftTextX, opacity: textOpacity, scale: textScale }} className="w-full text-center">
          <h1 className="text-[18vw] md:text-[15vw] font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#333] tracking-tighter select-none drop-shadow-2xl">
            MOHAMED
          </h1>
        </motion.div>
        <motion.div style={{ x: rightTextX, opacity: textOpacity, scale: textScale }} className="w-full text-center mt-[-4vw] md:mt-[-5vw]">
          <h1 className="text-[18vw] md:text-[15vw] font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#333] tracking-tighter select-none drop-shadow-2xl">
            SHAHEEM
          </h1>
        </motion.div>
      </div>

      {/* 5. Terminal UI & Links (Absolute Bottom) */}
      <div className="relative z-20 w-full px-6 md:px-12 pb-8 md:pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pt-32">
        
        {/* Initiate Sequence (Contact) */}
        <div className="flex flex-col gap-2 md:gap-4 group cursor-pointer pointer-events-auto">
          <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest transition-colors duration-300 group-hover:text-accent-blue">
            [ INITIATE SEQUENCE ]
          </span>
          <a 
            href="mailto:hello@shaheem.dev" 
            className="relative flex items-center font-display font-medium text-2xl md:text-4xl text-white transition-colors duration-500"
          >
            hello@shaheem.dev
            <motion.span 
              className="absolute -bottom-2 left-0 h-[2px] bg-accent-blue" 
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </a>
        </div>

        {/* Archive Log (Socials) */}
        <div className="flex flex-col gap-3 md:gap-4 items-start md:items-end pointer-events-auto">
          <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">
            [ ARCHIVE LOG ]
          </span>
          <div className="flex gap-6 font-mono text-xs md:text-sm uppercase tracking-widest text-text-primary">
            <a href="https://github.com/mohamedshaheemkp" target="_blank" rel="noreferrer" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">GH</a>
            <a href="https://www.linkedin.com/in/mohamed-shaheem-91a895331" target="_blank" rel="noreferrer" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">IN</a>
            <a href="https://instagram.com/mhd_shm__" target="_blank" rel="noreferrer" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">IG</a>
          </div>
        </div>

      </div>
    </section>
  );
}
