import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useReducedMotion,
} from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import TextRoll from '../components/TextRoll'
import Cubes from '../components/Cubes'

const nodes = [
  {
    id: 'agriai',
    project: 'AGRIAI',
    subheading: '↳ AI SYSTEMS',
    category: 'AI & MACHINE LEARNING',
    color: '#22c55e',
    tech: ['TensorFlow', 'OpenCV', 'YOLO', 'FastAPI'],
    desc: 'Crop Disease Detection Platform',
    route: '/systems/agriai',
  },
  {
    id: 'smartfolder',
    project: 'SMART FOLDER ORGANIZER',
    subheading: '↳ AUTOMATION SYSTEMS',
    category: 'AUTOMATION',
    color: '#3b82f6',
    tech: ['Python', 'Watchdog', 'SQLite', 'Tkinter'],
    desc: 'Intelligent File Classification',
    route: '/systems/smart-folder',
  },
  {
    id: 'portfolio',
    project: 'PORTFOLIO',
    subheading: '↳ FRONTEND SYSTEMS',
    category: 'FRONTEND ENGINEERING',
    color: '#8b5cf6',
    tech: ['React', 'Motion', 'Tailwind', 'GSAP'],
    desc: 'Interactive Personal Portfolio',
    route: '/systems/portfolio',
  },
]

export default function CoreEngine() {
  const [activeNode, setActiveNode] = useState(nodes[0].id) // Default to first
  const navigate = useNavigate()
  const reduceMotion = useReducedMotion()

  const activeIndex = nodes.findIndex((n) => n.id === activeNode)
  const activeProject = nodes[activeIndex]

  // Mouse tracking for background spotlight/glow
  const sectionRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth springs for mouse movement
  const springX = useSpring(mouseX, { damping: 50, stiffness: 200 })
  const springY = useSpring(mouseY, { damping: 50, stiffness: 200 })

  const glowX = reduceMotion ? mouseX : springX
  const glowY = reduceMotion ? mouseY : springY

  // Color motion value to transition colors smoothly
  const colorMotion = useMotionValue(activeProject.color)

  useEffect(() => {
    animate(colorMotion, activeProject.color, {
      duration: 0.8,
      ease: 'easeOut',
    })
  }, [activeProject.color, colorMotion])

  // Create the dynamic background radial gradient
  const glowBg = useTransform(colorMotion, (color) => {
    return `radial-gradient(400px circle at center, ${color} 0%, transparent 70%)`
  })

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const handleProjectClick = (node) => {
    if (activeNode === node.id) {
      navigate(node.route)
    } else {
      setActiveNode(node.id)
    }
  }

  return (
    <section
      id="core-engine"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-bg overflow-hidden min-h-screen flex items-center relative group"
    >
      {/* Dynamic Cursor Glow Backdrop */}
      <motion.div
        className="absolute pointer-events-none rounded-full blur-[80px] z-0"
        style={{
          width: '800px',
          height: '800px',
          background: glowBg,
          left: glowX,
          top: glowY,
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          opacity: isHovered ? 0.15 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="max-w-[1600px] w-full mx-auto flex flex-col relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16 md:mb-32">
          <span className="w-12 h-[1px] bg-[#333]"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
            02 — CORE ENGINE
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-between relative gap-16 lg:gap-8">
          {/* Left Column: Projects */}
          <div className="flex flex-col w-full lg:w-[45%] z-20 relative pt-8">
            {/* SVG Defs for Gooey Filter */}
            <svg className="w-0 h-0 absolute" aria-hidden="true">
              <filter id="SkiperGooeyFilter">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4.4" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 20 -7
                  "
                  result="gooey"
                />
              </filter>
            </svg>

            {/* Gooey Indicator Column */}
            <div
              className="absolute left-0 top-8 bottom-0 w-[30px] pointer-events-none z-0"
              style={{ filter: 'url(#SkiperGooeyFilter)' }}
            >
              {/* Background Track Line (Low visual noise) */}
              <div className="absolute left-[14px] top-8 bottom-8 w-[2px] bg-[#1a1a1a]" />

              {/* Static Anchors (Data nodes) */}
              <div className="w-full h-full flex flex-col pointer-events-none">
                {nodes.map((node) => (
                  <div
                    key={`anchor-${node.id}`}
                    className="h-40 md:h-48 flex items-center justify-center"
                  >
                    <div className="w-[8px] h-[8px] rounded-full bg-[#333]" />
                  </div>
                ))}
              </div>

              {/* Moving Gooey Blob (Neural data flow) */}
              <motion.div
                initial={false}
                animate={{ y: `${activeIndex * 100}%` }}
                transition={{ type: 'spring', damping: 20, stiffness: 120 }}
                className="absolute top-0 left-0 w-full h-40 md:h-48 flex items-center justify-center pointer-events-none"
              >
                <div
                  className="w-[14px] h-[32px] rounded-full drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] transition-colors duration-500"
                  style={{ backgroundColor: activeProject.color }}
                />
              </motion.div>
            </div>

            {/* Project List */}
            <div className="w-full pl-[50px] relative z-10 flex flex-col">
              {nodes.map((node) => {
                const isActive = activeNode === node.id
                return (
                  <div
                    key={node.id}
                    className="group relative flex flex-col justify-center h-40 md:h-48 cursor-pointer border-b border-[#111] last:border-0"
                    onMouseEnter={() => setActiveNode(node.id)}
                    onClick={() => handleProjectClick(node)}
                    data-cursor="VIEW"
                    style={{ '--cursor-color': node.color }}
                  >
                    <div className="flex flex-col gap-2 w-full">
                      {/* Project Title */}
                      <div
                        className={`text-3xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-wide transition-colors duration-500 ${isActive ? 'text-white' : 'text-[#444]'}`}
                      >
                        <TextRoll isActive={isActive}>{node.project}</TextRoll>
                      </div>

                      {/* Subheading */}
                      <div
                        className={`font-mono text-xs md:text-sm tracking-widest pl-2 transition-colors duration-500`}
                        style={{ color: isActive ? node.color : '#333' }}
                      >
                        {node.subheading}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: The Core */}
          <div className="flex w-full lg:w-[45%] lg:justify-end z-10 relative min-h-[500px]">
            {/* Background Cubes */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 md:opacity-50 pointer-events-auto">
              <div className="w-[120%] h-[120%] max-w-[800px] max-h-[800px]">
                <Cubes
                  gridSize={8}
                  maxAngle={60}
                  radius={5}
                  borderStyle={`1px solid ${activeProject.color}`}
                  faceColor="#0A0D12"
                  rippleColor={activeProject.color}
                  rippleSpeed={1.4}
                  autoAnimate={false}
                  rippleOnClick={false}
                />
              </div>
            </div>

            {/* Rich Text Overlay */}
            <div className="relative z-10 w-full flex flex-col justify-center py-12 px-6 lg:px-12 pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full justify-between gap-12"
                >
                  {/* Top Section */}
                  <div className="inline-flex flex-col self-start backdrop-blur-md bg-black/30 p-6 rounded-2xl border border-white/5">
                    <h3 className="font-mono text-xs text-[#666] tracking-[0.2em] mb-4">
                      ACTIVE SYSTEM
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                      {activeProject.project}
                    </h2>
                    <p
                      className="font-mono text-sm tracking-wider"
                      style={{ color: activeProject.color }}
                    >
                      {activeProject.category}
                    </p>
                  </div>

                  {/* Middle Section: Tech List */}
                  <div className="inline-flex flex-col gap-3 self-start backdrop-blur-md bg-black/30 p-6 rounded-2xl border border-white/5">
                    {activeProject.tech.map((t, idx) => (
                      <div
                        key={idx}
                        className="font-mono text-sm md:text-base text-[#888] tracking-widest flex items-center gap-4"
                      >
                        <span
                          className="w-4 h-[1px]"
                          style={{ backgroundColor: activeProject.color, opacity: 0.5 }}
                        ></span>
                        <span className="text-white">{t}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Section */}
                  <div className="inline-flex flex-col self-start backdrop-blur-md bg-black/30 p-6 rounded-2xl border border-white/5">
                    <p className="font-sans text-lg md:text-xl text-[#aaa] font-light">
                      {activeProject.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
