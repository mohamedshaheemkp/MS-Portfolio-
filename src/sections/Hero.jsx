import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowDownRight, Download, Code, Palette } from "lucide-react";
import cinemImage from "../assets/cinem.png";
import { useRef, useEffect } from "react";
import Magnetic from "../components/Magnetic";

export default function Hero() {
  const containerRef = useRef(null);
  
  // Track scroll for parallax depth
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  // Parallax transforms for cinematic depth
  const bgWordY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0px", "120px"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "60px"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  // Smooth springs on scroll transforms
  const smoothImageY = useSpring(imageY, { stiffness: 80, damping: 20 });
  const smoothTextY = useSpring(textY, { stiffness: 80, damping: 20 });

  // Interactive Mouse Coordinates for cursor parallax & lighting spot
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 60, damping: 22 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 60, damping: 22 });

  const containerBounds = useRef(null);

  const updateBounds = () => {
    if (containerRef.current) {
      containerBounds.current = containerRef.current.getBoundingClientRect();
    }
  };

  useEffect(() => {
    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  const handleMouseEnter = () => {
    updateBounds();
  };

  const handleMouseMove = (e) => {
    if (!containerBounds.current) {
      updateBounds();
    }
    if (!containerBounds.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = containerBounds.current;
    
    // Convert to relative coordinates centered at 0
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Derive subtle mouse translations for deep layers
  const textMouseX = useTransform(smoothMouseX, [-800, 800], [-15, 15]);
  const textMouseY = useTransform(smoothMouseY, [-400, 400], [-10, 10]);

  const imageMouseX = useTransform(smoothMouseX, [-800, 800], [-25, 25]);
  const imageMouseY = useTransform(smoothMouseY, [-400, 400], [-15, 15]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex items-center justify-center py-16 md:py-24 px-4 md:px-8 bg-black overflow-hidden select-none"
    >
      {/* Background Soft Glow Spotlight */}
      <motion.div
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
        className="absolute w-[800px] h-[800px] bg-cyan-500/[0.015] blur-[180px] rounded-full pointer-events-none z-0"
      />

      {/* Centered Framed Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full h-[85vh] min-h-[550px] max-h-[850px] max-w-7xl border border-white/[0.08] bg-[#070707] rounded-[36px] overflow-hidden flex flex-col justify-between p-6 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.9)] group"
      >
        {/* Full-width Cinematic Widescreen Background Image with interactive parallax */}
        <motion.div 
          style={{
            x: imageMouseX,
            y: smoothImageY,
            scale: 1.08,
            willChange: "transform",
          }}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        >
          <img
            src={cinemImage}
            alt="Mohamed Shaheem Cinematic Widescreen Backdrop"
            className="w-full h-full object-cover select-none brightness-[0.48] contrast-[1.18]"
            style={{ 
              transform: "translate3d(0, 0, 0)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden"
            }}
          />
          {/* Subtle cinematic overlays for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/60 pointer-events-none" />
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />
        </motion.div>

        {/* Top Row: Mini Nav */}
        <div className="flex justify-between items-center w-full z-20 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em]">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-text-mono select-none"
          >
            © Shaheem Design & Strategy
          </motion.span>
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-6 md:gap-10 font-sans tracking-normal"
          >
            <a href="#projects" className="glass-text-link-hover font-bold text-xs cursor-pointer">// Projects</a>
            <a href="#about" className="glass-text-link-hover font-bold text-xs cursor-pointer">// About</a>
            <a href="#contact" className="glass-text-link-hover font-bold text-xs cursor-pointer">// Contact</a>
          </motion.div>
        </div>

        {/* Middle Row: Massive Centered Typography (Layered on top of cinematic landscape with Glassmorphism) */}
        <div className="relative flex-1 flex flex-col items-center justify-center w-full my-6 z-10 overflow-hidden pointer-events-none">
          
          <motion.div
            style={{
              x: textMouseX,
              y: smoothTextY,
              willChange: "transform",
            }}
            className="text-center flex flex-col items-center justify-center select-none"
          >
            {/* Giant Title Name */}
            <h1 className="text-[9vw] md:text-[6.2vw] font-black uppercase tracking-tighter leading-none select-none font-display text-center glass-text-main"
                style={{ 
                  letterSpacing: "-0.04em"
                }}
            >
              MOHAMED SHAHEEM
            </h1>
            
            {/* Interactive mini badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-4 md:mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-[8px] font-mono uppercase tracking-widest shadow-lg"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.8)] animate-pulse" />
              <span className="glass-text-mono font-bold tracking-[0.18em]" style={{ color: "rgba(34, 211, 238, 0.35)", WebkitTextStroke: "0.2px rgba(34, 211, 238, 0.7)" }}>
                Creative Technologist • AI Engineer
              </span>
            </motion.div>
          </motion.div>

        </div>

        {/* Bottom Row: Socials & Role Tags */}
        <div className="flex justify-between items-end w-full z-20">
          
          {/* Bottom Left: Social Columns */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-2 font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-left"
          >
            <a href="https://linkedin.com/in/mohamedshaheemkp" target="_blank" rel="noreferrer" className="glass-text-link-hover flex items-center gap-1.5 group">
              <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full group-hover:bg-cyan-400 transition-colors" />
              LinkedIn
            </a>
            <a href="https://github.com/mohamedshaheemkp" target="_blank" rel="noreferrer" className="glass-text-link-hover flex items-center gap-1.5 group">
              <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full group-hover:bg-purple-400 transition-colors" />
              GitHub
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="glass-text-link-hover flex items-center gap-1.5 group">
              <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full group-hover:bg-[#e8ff00] transition-colors" />
              Instagram
            </a>
          </motion.div>

          {/* Bottom Right: Role Details */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col text-right leading-tight font-display uppercase"
          >
            <span className="glass-text-mono font-mono text-[9px] tracking-widest normal-case block mb-1.5">// DESIGN & CODE</span>
            <span className="glass-text-sub font-black text-lg md:text-2xl tracking-tight">AI Developer</span>
            <span className="glass-text-sub font-serif font-medium text-lg md:text-2xl italic normal-case tracking-normal">Creative Technologist</span>
          </motion.div>
        </div>


      </motion.div>
    </section>
  );
}
