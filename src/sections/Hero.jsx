import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ProgressiveBlur from "../components/ProgressiveBlur";
import VariableProximity from "../components/VariableProximity";
import bgImage from "../assets/cinem.webp";

const easeOutExpo = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easeOutExpo,
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      delay: 0.8,
      ease: easeOutExpo,
    },
  },
};

const roles = [
  "AI Engineer",
  "Systems Thinker",
  "Visual Designer",
  "Creative Technologist",
  "AI Product Builder"
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityParallax = useTransform(scrollY, [0, 600], [1, 0]);

  // Scroll tether animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const tetherScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const finalScaleY = reduceMotion ? 1 : tetherScaleY;

  // Rotating role ticker
  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative w-full h-screen flex flex-col justify-between px-6 md:px-12 lg:px-24 overflow-hidden bg-bg">
      
      {/* Cinematic Background */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
        transition={reduceMotion ? undefined : { duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <img src={bgImage} alt="Cinematic background" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/50"></div>
        
        {/* Noise Overlay */}
        <motion.div 
          className="absolute inset-0 z-10 pointer-events-none opacity-[0.035] overflow-hidden"
          animate={reduceMotion ? undefined : {
            x: ["0%", "-5%", "5%", "-2%", "3%", "-4%", "0%"],
            y: ["0%", "5%", "-3%", "4%", "-2%", "3%", "0%"]
          }}
          transition={reduceMotion ? undefined : {
            duration: 0.8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg className="absolute w-[110%] h-[110%] -top-[5%] -left-[5%]">
            <filter id="heroNoise">
              <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.75" 
                numOctaves="3" 
                stitchTiles="stitch" 
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#heroNoise)" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-[1600px] w-full mx-auto pb-24 md:pb-32 pt-32 md:pt-48"
        style={{ y: yParallax, opacity: opacityParallax }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          <h1 className="contents">
            <motion.div variants={wordVariants} className="overflow-visible flex">
              <VariableProximity
                label="MOHAMED"
                fromFontVariationSettings="'wght' 100, 'wdth' 100"
                toFontVariationSettings="'wght' 900, 'wdth' 200, 'ital' 1"
                containerRef={containerRef}
                radius={150}
                falloff="linear"
                className="text-[14vw] md:text-[9vw] leading-[0.85] font-black text-text-primary uppercase tracking-tighter overflow-visible"
              />
            </motion.div>
            <motion.div variants={wordVariants} className="overflow-visible flex ml-0 md:ml-12 lg:ml-24">
              <VariableProximity
                label="SHAHEEM"
                fromFontVariationSettings="'wght' 100, 'wdth' 100"
                toFontVariationSettings="'wght' 900, 'wdth' 200, 'ital' 1"
                containerRef={containerRef}
                radius={150}
                falloff="linear"
                className="text-[14vw] md:text-[9vw] leading-[0.85] font-black text-text-primary uppercase tracking-tighter overflow-visible"
              />
            </motion.div>
          </h1>
          
          <motion.div variants={subtitleVariants} className="mt-8 md:mt-12 flex flex-col gap-6 ml-0 md:ml-12 lg:ml-24">
            <div className="w-16 h-[2px] bg-accent-blue"></div>
            <div className="text-lg md:text-xl text-text-secondary font-mono tracking-widest uppercase relative h-8 flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.4, ease: "easeInOut" }}
                  className="absolute left-0 text-white whitespace-nowrap"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Scroll tether line connecting to Core Engine */}
      <motion.div 
        style={{ scaleY: finalScaleY, originY: 0 }}
        className="absolute bottom-0 left-6 md:left-12 lg:left-24 w-[1px] h-24 bg-gradient-to-b from-transparent to-accent-blue/50 pointer-events-none"
      />

      <ProgressiveBlur 
        position="bottom" 
        backgroundColor="#0A0D12"
        height="10rem" 
        blurAmount="8px" 
      />
    </section>
  );
}
