import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import cinemImage from "../assets/cinem.png";
import { useRef, useEffect } from "react";
import Magnetic from "../components/Magnetic";

export default function Hero() {
  const containerRef = useRef(null);
  
  // Track scroll for parallax depth
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  // Parallax transforms for cinematic depth on scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["0px", "120px"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "70px"]);

  // Smooth springs on scroll transforms
  const smoothImageY = useSpring(imageY, { stiffness: 80, damping: 20 });
  const smoothTextY = useSpring(textY, { stiffness: 80, damping: 20 });

  // Interactive Mouse Coordinates for cursor parallax
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

  // Derive subtle mouse translations exclusively for the text layer (none for background image)
  const textMouseX = useTransform(smoothMouseX, [-800, 800], [-15, 15]);
  const textMouseY = useTransform(smoothMouseY, [-400, 400], [-10, 10]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex items-center justify-center py-16 md:py-24 px-4 md:px-8 bg-black overflow-hidden select-none"
    >
      {/* Centered Framed Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full h-[85vh] min-h-[550px] max-h-[850px] max-w-7xl border border-white/[0.08] bg-[#070707] rounded-[36px] overflow-hidden flex flex-col justify-between p-6 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.9)] group"
      >
        {/* Full-width Widescreen Background Image: Scroll Parallax Only (Cinematic, not floating) */}
        <motion.div 
          style={{
            y: smoothImageY,
            willChange: "transform",
          }}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        >
          <img
            src={cinemImage}
            alt="Mohamed Shaheem Cinematic Widescreen Backdrop"
            className="w-full h-full object-cover select-none brightness-[0.78] contrast-[1.08]"
            style={{ 
              transform: "translate3d(0, 0, 0)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden"
            }}
          />
          {/* Subtle cinematic gradient overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/60 pointer-events-none" />
        </motion.div>

        {/* Top Row: Mini Nav */}
        <div className="flex justify-between items-center w-full z-20 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em]">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-text-mono select-none"
          >
            AI ENGINEER &bull; CREATIVE TECHNOLOGIST
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

        {/* Middle Row: Massive Centered Typography (Layered on top of cinematic landscape with Glassmorphism and Glass Plate) */}
        <div className="relative flex-1 flex flex-col items-center justify-center w-full my-6 z-10 overflow-hidden">
          
          {/* Parent maps the vertical Scroll Parallax */}
          <motion.div
            style={{
              y: smoothTextY,
              willChange: "transform",
            }}
            className="text-center flex flex-col items-center justify-center select-none w-full max-w-4xl relative"
          >
            {/* Child maps the interactive 3D Mouse Parallax exclusively on text */}
            <motion.div
              style={{
                x: textMouseX,
                y: textMouseY,
                willChange: "transform",
              }}
              className="text-center flex flex-col items-center justify-center w-full relative py-12"
            >
              {/* Premium Glass Plate Behind Name */}
              <div
                className="absolute inset-x-0 mx-auto w-[90%] md:w-[75%] h-[240px] md:h-[180px] rounded-[40px] bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] z-0 pointer-events-none"
              />

              {/* Giant Title Name: Center split for maximum visual balance */}
              <h1 
                className="relative text-[11vw] font-black uppercase tracking-tighter leading-[0.82] select-none font-display text-center glass-text-main z-10 block"
                style={{ letterSpacing: "-0.08em" }}
              >
                MOHAMED<br />SHAHEEM
              </h1>
              
              {/* Subtitle Roles: Centered beneath name */}
              <div className="relative mt-6 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-bold leading-normal text-center z-10">
                AI ENGINEER &bull; GRAPHIC DESIGNER
              </div>

              {/* Button Actions: Projects & Resume with Magnetic Micro-animations */}
              <div className="relative mt-8 flex gap-4 z-10">
                <Magnetic>
                  <a 
                    href="#projects" 
                    className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all font-mono text-[9px] uppercase tracking-widest text-cyan-400 font-bold cursor-pointer"
                  >
                    [Projects]
                  </a>
                </Magnetic>
                <Magnetic>
                  <a 
                    href="/resume.pdf" 
                    target="_blank" 
                    className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all font-mono text-[9px] uppercase tracking-widest text-white font-bold cursor-pointer"
                  >
                    [Resume]
                  </a>
                </Magnetic>
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* Bottom Row: Kept minimalist and clean to let widescreen landscape breathe */}
        <div className="w-full h-2 z-20" />
      </motion.div>
    </section>
  );
}
