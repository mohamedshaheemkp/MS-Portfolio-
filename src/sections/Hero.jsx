import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowDownRight, Download, Code, Palette } from "lucide-react";
import heroImage from "../assets/hero.webp";
import { useRef, useEffect } from "react";
import Magnetic from "../components/Magnetic";

export default function Hero() {
  const containerRef = useRef(null);
  
  // Track scroll for parallax depth
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  // Parallax transforms for cinematic depth
  const bgWordY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0px", "120px"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "60px"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const card1YScroll = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);
  const card2YScroll = useTransform(scrollYProgress, [0, 1], ["0px", "90px"]);
  const card3YScroll = useTransform(scrollYProgress, [0, 1], ["0px", "30px"]);

  // Smooth springs on all scroll transforms
  const smoothImageY = useSpring(imageY, { stiffness: 80, damping: 20 });
  const smoothTextY = useSpring(textY, { stiffness: 80, damping: 20 });
  const smoothCard1Y = useSpring(card1YScroll, { stiffness: 80, damping: 20 });
  const smoothCard2Y = useSpring(card2YScroll, { stiffness: 80, damping: 20 });
  const smoothCard3Y = useSpring(card3YScroll, { stiffness: 80, damping: 20 });

  // Interactive Mouse Coordinates for cursor parallax & lighting spot
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 60, damping: 22 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 60, damping: 22 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
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

  const card1MouseX = useTransform(smoothMouseX, [-800, 800], [-35, 35]);
  const card1MouseY = useTransform(smoothMouseY, [-400, 400], [-20, 20]);

  const card2MouseX = useTransform(smoothMouseX, [-800, 800], [30, -30]);
  const card2MouseY = useTransform(smoothMouseY, [-400, 400], [15, -15]);

  const card3MouseX = useTransform(smoothMouseX, [-800, 800], [-20, 20]);
  const card3MouseY = useTransform(smoothMouseY, [-400, 400], [25, -25]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden flex items-center pt-32 pb-16 px-6 md:px-12 lg:px-20 bg-[#0a0a0a]"
    >
      {/* Background Giant Typography — moves slower than foreground (parallax) */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
        <motion.div
          style={{ y: bgWordY, willChange: "transform" }}
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 0.03, scale: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[18vw] font-black text-white tracking-tight leading-none"
          >
            CREATE
          </motion.h1>
        </motion.div>
      </div>

      {/* Floating Camera Blur Layers (Orbs) for cinematic depth-of-field */}
      <motion.div
        animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] w-48 h-48 rounded-full bg-cyan-500/[0.04] blur-3xl pointer-events-none z-0"
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [15, -15, 15] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute bottom-[25%] right-[8%] w-64 h-64 rounded-full bg-purple-500/[0.03] blur-3xl pointer-events-none z-0"
      />

      {/* Mouse Reactive Radial Glow Spotlight */}
      <motion.div
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          transform: "translate3d(-50%, -50%, 0)",
          willChange: "transform",
        }}
        className="absolute w-[700px] h-[700px] bg-cyan-500/[0.025] blur-[160px] rounded-full pointer-events-none z-0"
      />

      <div className="container mx-auto relative z-30">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Typography & CTA — subtle upward parallax & mouse drift */}
          <motion.div 
            style={{ 
              y: smoothTextY, 
              x: textMouseX, 
              rotateY: textMouseY,
              willChange: "transform" 
            }}
            className="flex flex-col justify-center"
          >
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs font-mono text-zinc-300 uppercase tracking-widest shadow-xl">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse" />
                AI Developer • Designer • Creative Technologist
              </span>
            </motion.div>

            {/* Huge Heading — staggered line-by-line reveal */}
            <div className="mb-6 relative z-20">
              <div className="overflow-hidden mb-2">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.1] text-white"
                >
                  Creative
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-2">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
                  className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.1]"
                >
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                    AI Engineer
                  </span>
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.44 }}
                  className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.1] text-white"
                >
                  <span className="text-zinc-500 font-normal italic pr-4">&amp;</span>
                  Graphic Designer
                </motion.h1>
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
              className="text-zinc-400 text-lg max-w-xl leading-relaxed mb-12 font-light"
            >
              Building futuristic AI systems, immersive interfaces, and cinematic digital experiences.
            </motion.p>

            {/* CTA Buttons — reveal last */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
              className="flex flex-wrap items-center gap-4 relative z-20"
            >
              <Magnetic>
                <a href="#projects"
                  className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-all duration-600 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  View Selected Work
                  <ArrowDownRight size={18} className="group-hover:rotate-[-45deg] transition-transform duration-600" />
                </a>
              </Magnetic>

              <Magnetic>
                <a href="/resume.pdf" download
                  className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-600 text-white"
                >
                  <Download size={18} />
                  Download Résumé
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Floating Visuals — deeper parallax & rotating tech indicators */}
          <div className="relative h-[450px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
            
            {/* Radial Glow Behind Image — tracks with slow parallax */}
            <motion.div 
              style={{ y: glowY, willChange: "transform" }}
              className="absolute w-[80%] max-w-[500px] aspect-square bg-cyan-500/20 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
            />

            {/* Concentric Rotating Holographic Tech Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 scale-[1.2] lg:translate-x-[15%]">
              {/* Outer dashed ring */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
                className="absolute w-[75%] h-[75%] text-cyan-400/[0.04]"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="4 6" />
              </motion.svg>
              {/* Mid tech ring with varying segment lengths */}
              <motion.svg
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
                className="absolute w-[65%] h-[65%] text-purple-400/[0.05]"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="15 10 5 10" />
              </motion.svg>
              {/* Inner dotted tracking ring */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
                className="absolute w-[55%] h-[55%] text-cyan-400/[0.05]"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 8" />
              </motion.svg>
            </div>

            {/* Main Floating Image — scroll-linked scale + y-drift, plus mouse shift with Z-axis depth */}
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
              style={{ 
                y: smoothImageY, 
                x: imageMouseX,
                rotateX: useTransform(smoothMouseY, [-400, 400], [5, -5]),
                rotateY: useTransform(smoothMouseX, [-800, 800], [-5, 5]),
                scale: imageScale, 
                opacity: imageOpacity, 
                willChange: "transform, opacity",
                transformStyle: "preserve-3d",
                perspective: 1200
              }}
              className="relative z-10 w-full max-w-[320px] lg:max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,255,255,0.08)] bg-zinc-900"
              data-cursor="view"
            >
              <div className="w-full h-full" style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}>
                <img
                  src={heroImage}
                  alt="Mohamed Shaheem"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(10%) contrast(1.1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-80" />
              </div>
            </motion.div>

            {/* Glass Floating Card 1: Stats — floats slowly, reacts to scroll & cursor */}
            <motion.div
              initial={{ opacity: 0, y: 60, x: -20 }}
              animate={{ 
                opacity: 1,
                y: [-5, 5, -5],
              }}
              transition={{
                initial: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.85 },
                y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
              }}
              style={{ 
                y: smoothCard1Y,
                x: card1MouseX,
                z: 65,
                willChange: "transform" 
              }}
              className="absolute top-[10%] lg:top-[15%] right-0 lg:-left-[5%] backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-5 shadow-2xl z-20 group hover:bg-white/10 hover:border-cyan-400/25 hover:shadow-[0_0_40px_rgba(0,240,255,0.12)] transition-all duration-600 w-48"
              whileHover={{ scale: 1.05, rotate: -2, y: -12 }}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-cyan-500/20 rounded-2xl text-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all">
                  <Code size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium">AI Systems Built</p>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">12+</h3>
                </div>
              </div>
            </motion.div>

            {/* Glass Floating Card 2: Design */}
            <motion.div
              initial={{ opacity: 0, y: 60, x: 20 }}
              animate={{ 
                opacity: 1,
                y: [5, -5, 5],
              }}
              transition={{
                initial: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.95 },
                y: { repeat: Infinity, duration: 7, ease: "easeInOut" }
              }}
              style={{ 
                y: smoothCard2Y,
                x: card2MouseX,
                z: 65,
                willChange: "transform" 
              }}
              className="absolute bottom-[20%] lg:bottom-[25%] left-0 lg:-right-[5%] backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-5 shadow-2xl z-20 group hover:bg-white/10 hover:border-purple-400/25 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)] transition-all duration-600 w-48"
              whileHover={{ scale: 1.05, rotate: 2, y: -12 }}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-purple-500/20 rounded-2xl text-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all">
                  <Palette size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium">Design Projects</p>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">40+</h3>
                </div>
              </div>
            </motion.div>

            {/* Glass Floating Card 3: Availability */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ 
                opacity: 1,
                y: [-4, 4, -4],
              }}
              transition={{
                initial: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.05 },
                y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
              }}
              style={{ 
                y: smoothCard3Y,
                x: card3MouseX,
                z: 45,
                willChange: "transform" 
              }}
              className="absolute bottom-[5%] left-[20%] lg:left-[5%] backdrop-blur-xl bg-white/5 border border-white/10 rounded-full py-3 px-6 shadow-2xl z-20 flex items-center gap-3 hover:bg-white/10 hover:border-emerald-400/20 hover:shadow-[0_0_25px_rgba(52,211,153,0.15)] transition-all duration-600"
              whileHover={{ scale: 1.05, y: -6 }}
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-zinc-300">99.9% Performant</span>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom Soft transition & Glow Divider */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black backdrop-blur-[2px] pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px w-full overflow-hidden pointer-events-none z-20">
        <div 
          className="h-px w-[65%] mx-auto bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" 
          style={{ boxShadow: "0 0 10px rgba(0, 240, 255, 0.4)" }}
        />
      </div>
    </section>
  );
}
