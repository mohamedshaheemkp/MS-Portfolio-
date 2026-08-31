import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import VariableProximity from '../components/VariableProximity'
import bgImage from '../assets/cinem.webp'

const easeOutExpo = [0.16, 1, 0.3, 1]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: easeOutExpo,
    },
  },
}

const roles = [
  'AI DEVELOPER × GRAPHIC DESIGNER',
  'SYSTEMS THINKER',
  'CREATIVE TECHNOLOGIST',
  'AI PRODUCT BUILDER',
]

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 800], [0, 180])
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0])

  // Scroll tether animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const tetherScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])
  const finalScaleY = reduceMotion ? 1 : tetherScaleY

  // Ticker for secondary role statement
  const [roleIndex, setRoleIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-24 overflow-hidden bg-[#080808] border-b border-[#1A1A1A]"
    >
      {/* Background Texture & Subtle Noise Overlay */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={bgImage}
          alt="Background atmosphere"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/80 via-transparent to-[#080808]"></div>

        {/* Noise overlay */}
        <div className="absolute inset-0 z-10 opacity-[0.03] overflow-hidden">
          <svg className="w-full h-full">
            <filter id="heroNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#heroNoise)" />
          </svg>
        </div>
      </motion.div>

      {/* Main Editorial Hero Content */}
      <motion.div
        className="relative z-10 max-w-[1600px] w-full mx-auto pt-36 md:pt-48 pb-20 flex flex-col justify-between flex-grow"
        style={{ y: yParallax, opacity: opacityParallax }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 md:gap-10"
        >
          {/* Top Status & Availability Telemetry Line */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 md:gap-6 font-mono text-xs text-[#A0A0A0] uppercase tracking-widest"
          >
            <div className="flex items-center gap-2 bg-[#111] border border-[#222] px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-white font-bold">AVAILABLE FOR NEW INITIATIVES</span>
            </div>
            <div className="hidden sm:block text-[#666]">//</div>
            <div className="text-[#888]">LOCATION: INDIA (IST UTC+5:30)</div>
          </motion.div>

          {/* Large Primary Name Typography */}
          <div className="overflow-visible mt-4">
            <motion.div variants={itemVariants} className="overflow-visible flex">
              <VariableProximity
                label="SHAHEEM"
                fromFontVariationSettings="'wght' 300, 'wdth' 100"
                toFontVariationSettings="'wght' 900, 'wdth' 180, 'ital' 1"
                containerRef={containerRef}
                radius={200}
                falloff="linear"
                className="text-[17vw] sm:text-[14vw] md:text-[11vw] leading-[0.85] font-display font-black text-[#F2F2F2] uppercase tracking-tighter overflow-visible"
              />
            </motion.div>
          </div>

          {/* Primary Identity Descriptor Ticker */}
          <motion.div variants={itemVariants} className="mt-2 flex flex-col gap-4">
            <div className="w-16 h-[2px] bg-[#4A7CFF]"></div>
            <div className="font-mono text-sm sm:text-lg md:text-xl text-[#A0A0A0] uppercase tracking-[0.2em] relative h-10 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
                  transition={
                    reduceMotion ? { duration: 0 } : { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                  }
                  className="absolute left-0 text-white font-bold tracking-widest whitespace-nowrap"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Hero Anchor & Editorial Note */}
        <div className="mt-20 md:mt-32 pt-8 border-t border-[#1A1A1A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs text-[#888] uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#666]"></span>
            <span>SYSTEMS ENGINEERING × GRAPHIC CRAFT</span>
          </div>

          <a
            href="#core-engine"
            className="group inline-flex items-center gap-3 text-white hover:text-[#4A7CFF] transition-colors cursor-pointer"
          >
            <span>DISCOVER ENGINE</span>
            <span className="group-hover:translate-y-1 transition-transform">↓</span>
          </a>
        </div>
      </motion.div>

      {/* Vertical Scroll Tether */}
      <motion.div
        style={{ scaleY: finalScaleY, originY: 0 }}
        className="absolute bottom-0 left-6 md:left-12 lg:left-24 w-[1px] h-20 bg-gradient-to-b from-transparent to-[#4A7CFF]/60 pointer-events-none"
      />
    </section>
  )
}
