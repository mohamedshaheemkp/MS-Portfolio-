import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const leftTextX = useTransform(scrollYProgress, [0.6, 1], ["-10%", "0%"]);
  const rightTextX = useTransform(scrollYProgress, [0.6, 1], ["10%", "0%"]);
  const coreOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const coreScale = useTransform(scrollYProgress, [0.5, 1], [0.8, 1]);

  return (
    <section ref={containerRef} className="w-full relative flex flex-col bg-[#050505] overflow-hidden">
      
      <div className="w-full flex flex-col px-6 md:px-12 lg:px-24 pt-32 pb-24 md:pb-32 z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1600px] mx-auto w-full flex flex-col gap-0"
        >
          <h2 className="text-[14vw] md:text-[11vw] font-display font-black leading-[0.85] text-text-primary uppercase tracking-tighter hover:text-white transition-colors duration-500 cursor-default">
            LET'S BUILD
          </h2>
        </motion.div>
      </div>

      {/* Lower Area: The Cinematic Footer */}
      <div className="relative w-full h-[100vh] flex flex-col bg-gradient-to-b from-[#050505] to-[#000000] border-t border-[#111] overflow-hidden">
        
        {/* Background Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '4vw 4vw' }}></div>

        {/* Central Glowing System Node */}
        <motion.div 
          style={{ opacity: coreOpacity, scale: coreScale }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          {/* Subtle desk/monitor glow ambient effect */}
          <div className="absolute bottom-0 w-full h-[40vh] bg-accent-blue/10 blur-[120px] rounded-full translate-y-1/2"></div>
          
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center mb-[10vh]">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-accent-blue rounded-full blur-[70px]"
            ></motion.div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[60%] h-[60%] border-t border-r border-accent-blue rounded-full opacity-40"
            ></motion.div>
            <motion.div 
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "stepEnd" }}
              className="w-2 h-6 md:w-3 md:h-8 bg-accent-blue"
            ></motion.div>
          </div>
        </motion.div>

        {/* TOP NAV ROW */}
        <div className="absolute top-8 md:top-12 left-0 right-0 px-6 md:px-12 flex justify-between items-center z-20">
          <div className="font-display font-bold text-sm md:text-lg text-white tracking-wide">
            Mohamed<span className="text-accent-blue mx-1.5">•</span>Shaheem
          </div>
          
          <div className="flex gap-4 md:gap-8 font-mono text-[10px] md:text-xs uppercase tracking-widest text-text-secondary">
            <a href="mailto:hello@shaheem.dev" className="hover:text-white transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/mohamed-shaheem-91a895331" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">In</a>
            <a href="https://instagram.com/mhd_shm__" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Ig</a>
            <a href="https://github.com/mohamedshaheemkp" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GH</a>
          </div>
        </div>

        {/* CENTER RIGHT STACK */}
        <div className="absolute top-[40%] right-6 md:right-12 hidden md:flex flex-col items-end gap-3 z-20">
          <span className="font-mono text-[10px] text-text-secondary mb-1 uppercase tracking-widest">Website made using:</span>
          <span className="font-display font-medium text-sm text-text-primary hover:text-white cursor-default transition-colors">React</span>
          <span className="font-display font-medium text-sm text-text-primary hover:text-white cursor-default transition-colors">Framer Motion</span>
          <span className="font-display font-medium text-sm text-text-primary hover:text-white cursor-default transition-colors">Tailwind CSS</span>
          <span className="font-display font-medium text-sm text-text-primary hover:text-white cursor-default transition-colors">Vite</span>
        </div>

        {/* BOTTOM LIVING TYPOGRAPHY & SUBTEXT */}
        <div className="absolute bottom-12 md:bottom-16 left-0 right-0 px-6 md:px-12 flex flex-col md:flex-row justify-between md:items-start z-20 gap-8 md:gap-0">
          
          {/* Left Block */}
          <div className="flex flex-col">
            <motion.div style={{ x: leftTextX }}>
              <h1 className="text-[13vw] md:text-[7.5vw] font-display font-black leading-[0.8] text-white tracking-tighter drop-shadow-2xl whitespace-nowrap">
                MOHAMED
              </h1>
            </motion.div>
            <div className="mt-3 md:mt-6 font-display font-medium text-xs md:text-base text-text-secondary pl-1">
              AI Engineer & Designer <span className="opacity-50 ml-2">2026</span>
            </div>
          </div>
          
          {/* Right Block */}
          <div className="flex flex-col items-start md:items-end">
            <motion.div style={{ x: rightTextX }}>
              <h1 className="text-[13vw] md:text-[7.5vw] font-display font-black leading-[0.8] text-white tracking-tighter drop-shadow-2xl whitespace-nowrap text-left md:text-right">
                SHAHEEM
              </h1>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
