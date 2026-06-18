import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityParallax = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-screen flex flex-col justify-between px-6 md:px-12 lg:px-24 overflow-hidden bg-[#050505]">
      
      {/* Cinematic Background */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <img src={bgImage} alt="Cinematic background" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50"></div>
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
          {/* First Name */}
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
          {/* Last Name */}
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
          
          <motion.div variants={subtitleVariants} className="mt-8 md:mt-12 flex flex-col gap-6 ml-0 md:ml-12 lg:ml-24">
            <div className="w-16 h-[2px] bg-accent-blue"></div>
            <p className="text-lg md:text-xl text-text-secondary font-mono tracking-widest uppercase">
              <span className="text-white">AI Engineer.</span>{" "}
              <span>Designer.</span>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Scroll tether line connecting to Core Engine */}
      <div className="absolute bottom-0 left-6 md:left-12 lg:left-24 w-[1px] h-24 bg-gradient-to-b from-transparent to-accent-blue/50 pointer-events-none"></div>

      <ProgressiveBlur 
        position="bottom" 
        backgroundColor="#050505" 
        height="10rem" 
        blurAmount="8px" 
      />
    </section>
  );
}
