import { motion, useReducedMotion } from 'framer-motion'
import { useState, useEffect } from 'react'
import heroArtwork from '../assets/hero-artwork.webp'

const easeOutExpo = [0.16, 1, 0.3, 1]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: easeOutExpo,
    },
  },
}

export default function Hero() {
  const reduceMotion = useReducedMotion()

  // Synchronize animation with IntroSequence completion so entrance animation is visibly observed
  const [hasEntered, setHasEntered] = useState(() => {
    return sessionStorage.getItem('intro_complete') === 'true'
  })

  useEffect(() => {
    if (hasEntered) return

    // Check periodically for intro completion in sessionStorage
    const interval = setInterval(() => {
      if (sessionStorage.getItem('intro_complete') === 'true') {
        setHasEntered(true)
        clearInterval(interval)
      }
    }, 80)

    // Fallback safety trigger (max 1.5s)
    const timeout = setTimeout(() => {
      setHasEntered(true)
      clearInterval(interval)
    }, 1500)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [hasEntered])

  // Live digital clock updating every 1000ms
  const [timeString, setTimeString] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      setTimeString(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-start px-4 sm:px-8 md:px-12 lg:px-16 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 overflow-hidden bg-[#050505] text-white select-none border-b border-[#141414]"
    >
      {/* Background Checkered Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* Ambient Edge Glows (Pure CSS, performant) */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Vertical Coordinate Grid Lines (1480px matching Framer) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 flex justify-between max-w-[1480px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16"
        aria-hidden="true"
      >
        <div className="w-[1px] h-full bg-white/[0.03]" />
        <div className="w-[1px] h-full bg-white/[0.03]" />
        <div className="w-[1px] h-full bg-white/[0.03]" />
        <div className="w-[1px] h-full bg-white/[0.03]" />
      </div>

      {/* Main Hero Container */}
      <motion.div
        variants={containerVariants}
        initial={reduceMotion ? 'visible' : 'hidden'}
        animate={hasEntered || reduceMotion ? 'visible' : 'hidden'}
        className="relative z-10 max-w-[1480px] w-full mx-auto flex flex-col items-center"
      >
        {/* 1. Framer In-Flow Utility Strip */}
        <motion.div
          variants={itemVariants}
          className="w-full flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#888888] mb-3 sm:mb-5 md:mb-6"
        >
          {/* Left: Digital Clock */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="hidden sm:inline text-[#555555]">LOCAL/</span>
            <span className="text-white font-medium">{timeString || '00:00:00'}</span>
          </div>

          {/* Center: 6-Dot Matrix Symbol (:::) */}
          <div
            className="grid grid-cols-3 gap-1 opacity-70 p-1 select-none"
            aria-hidden="true"
          >
            <span className="w-1 h-1 rounded-full bg-white" />
            <span className="w-1 h-1 rounded-full bg-white" />
            <span className="w-1 h-1 rounded-full bg-white" />
            <span className="w-1 h-1 rounded-full bg-white" />
            <span className="w-1 h-1 rounded-full bg-white" />
            <span className="w-1 h-1 rounded-full bg-white" />
          </div>

          {/* Right: Contact Pill Button */}
          <motion.a
            href="#contact"
            whileHover={reduceMotion ? {} : { scale: 1.04 }}
            whileTap={reduceMotion ? {} : { scale: 0.96 }}
            className="border border-white/30 hover:border-white/80 bg-black/60 hover:bg-white/10 backdrop-blur-sm px-3.5 sm:px-4 py-1.5 rounded-full text-white text-[11px] font-medium tracking-wider transition-colors cursor-pointer"
          >
            CONTACT<span className="hidden sm:inline"> NOW</span>
          </motion.a>
        </motion.div>

        {/* 2. Hero Primary Display Title (Clash Display Semibold, 80% line-height, -3px tracking) */}
        <motion.div
          variants={itemVariants}
          className="w-full text-center overflow-hidden my-2 sm:my-3 md:my-5"
        >
          <h1 className="font-clash font-semibold text-[50px] min-[480px]:text-[72px] sm:text-[100px] md:text-[116px] lg:text-[clamp(116px,14.5vw,222.65px)] tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px] text-white leading-[0.8] select-none uppercase w-full text-center whitespace-nowrap">
            MHD SHM KP
          </h1>
        </motion.div>

        {/* 3. Three-Column Status & Metadata Row */}
        <motion.div
          variants={itemVariants}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5 md:gap-8 my-4 sm:my-6 md:my-8"
        >
          {/* Column 1: Location */}
          <div className="flex flex-col items-center text-center gap-1 md:gap-1.5">
            <div className="text-[#22c55e]">
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="flex flex-col items-center font-mono">
              <span className="text-[11px] md:text-sm font-bold text-white uppercase tracking-wider">
                BASED IN INDIA,
              </span>
              <span className="text-[10px] md:text-xs text-[#888888] uppercase tracking-wider">
                KERALA
              </span>
            </div>
          </div>

          {/* Column 2: Availability */}
          <div className="flex flex-col items-center text-center gap-1 md:gap-1.5">
            <div className="text-[#38bdf8]">
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="flex flex-col items-center font-mono">
              <span className="text-[11px] md:text-sm font-bold text-white uppercase tracking-wider">
                AVAILABLE ALL AROUND
              </span>
              <span className="text-[10px] md:text-xs text-[#888888] uppercase tracking-wider">
                WORLDWIDE
              </span>
            </div>
          </div>

          {/* Column 3: Discipline */}
          <div className="flex flex-col items-center text-center gap-1 md:gap-1.5">
            <div className="text-[#0066ff]">
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <div className="flex flex-col items-center font-mono">
              <span className="text-[11px] md:text-sm font-bold text-white uppercase tracking-wider">
                AI ENGINEER & DEV
              </span>
              <span className="text-[10px] md:text-xs text-[#888888] uppercase tracking-wider">
                GRAPHIC DESIGNER
              </span>
            </div>
          </div>
        </motion.div>

        {/* 4. Hero Media Card with Embedded Resume CTA */}
        <motion.div
          variants={itemVariants}
          data-cursor="PORTFOLIO"
          style={{ '--cursor-color': '#FF5500' }}
          className="relative w-full rounded-2xl md:rounded-[28px] overflow-hidden border border-white/10 bg-[#0A0A0A] aspect-[16/10] sm:aspect-[16/9] md:aspect-[2/1] lg:aspect-[2.35/1] max-h-[580px] shadow-2xl"
        >
          {/* Blue Wavy Distorted Portrait Artwork */}
          <img
            src={heroArtwork}
            alt="MHD SHM KP creative visual artwork"
            className="w-full h-full object-cover object-[center_18%] select-none pointer-events-none"
          />

          {/* 5. Resume Floating CTA Button with Energetic Orange Hover Fill */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduceMotion ? {} : { scale: 1.05 }}
            whileTap={reduceMotion ? {} : { scale: 0.95 }}
            className="group absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 bg-white text-black hover:bg-[#FF5500] hover:text-white font-mono font-bold text-xs uppercase px-4 sm:px-5 py-2.5 rounded-full flex items-center gap-2 shadow-xl transition-all duration-300 cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>RESUME</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

