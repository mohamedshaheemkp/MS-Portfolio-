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
import TextRoll from '../components/TextRoll'
import Cubes from '../components/Cubes'

const disciplines = [
  {
    id: 'ai',
    number: '01',
    title: 'AI',
    subheading: '↳ MACHINE LEARNING & VISION',
    color: '#14B8C4',
    desc: 'Engineering lightweight neural networks, YOLO object detection models, and edge-optimized computer vision pipelines.',
    details: ['PyTorch', 'YOLOv9', 'OpenCV', 'FastAPI'],
  },
  {
    id: 'code',
    number: '02',
    title: 'CODE',
    subheading: '↳ FRONTEND & API ARCHITECTURE',
    color: '#4A7CFF',
    desc: 'Building responsive frontend architectures with React 19, modern CSS, Vite, and high-performance backend microservices.',
    details: ['React 19', 'Python', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'design',
    number: '03',
    title: 'DESIGN',
    subheading: '↳ EDITORIAL & BRAND DIRECTION',
    color: '#FF3B30',
    desc: 'Crafting editorial visual identities, typography hierarchies, brand design systems, and restrained digital compositions.',
    details: ['Space Grotesk', 'Editorial Layout', 'Brand Systems', 'Visual Craft'],
  },
  {
    id: 'motion',
    number: '04',
    title: 'MOTION',
    subheading: '↳ INTERACTIVE UI MECHANICS',
    color: '#A8D5BA',
    desc: 'Designing intentional micro-interactions, spring physics, scroll choreography, and tactile interface feedback.',
    details: ['Motion', 'GSAP', 'Canvas 3D', 'Physics Springs'],
  },
  {
    id: 'systems',
    number: '05',
    title: 'SYSTEMS',
    subheading: '↳ AUTOMATION & WORKFLOWS',
    color: '#22C55E',
    desc: 'Connecting intelligent algorithms, filesystem watchdogs, and developer CLI utilities into unified workflows.',
    details: ['Watchdog', 'CLI Tooling', 'Node.js', 'System Engineering'],
  },
]

export default function CoreEngine() {
  const [activeId, setActiveId] = useState(disciplines[0].id)
  const reduceMotion = useReducedMotion()
  const sectionRef = useRef(null)

  // Viewport visibility check for Canvas GPU performance
  const [isInView, setIsInView] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const activeIndex = disciplines.findIndex((d) => d.id === activeId)
  const activeDiscipline = disciplines[activeIndex]

  // Mouse tracking for background spotlight/glow via RAF
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { damping: 50, stiffness: 200 })
  const springY = useSpring(mouseY, { damping: 50, stiffness: 200 })

  const glowX = reduceMotion ? mouseX : springX
  const glowY = reduceMotion ? mouseY : springY

  const colorMotion = useMotionValue(activeDiscipline.color)

  useEffect(() => {
    animate(colorMotion, activeDiscipline.color, {
      duration: 0.6,
      ease: 'easeOut',
    })
  }, [activeDiscipline.color, colorMotion])

  const glowBg = useTransform(colorMotion, (color) => {
    return `radial-gradient(450px circle at center, ${color} 0%, transparent 70%)`
  })

  // IntersectionObserver to pause heavy canvas/mouse tracking when outside viewport
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // High-frequency mouse movement using RAF
  const rafRef = useRef(null)
  const handleMouseMove = (e) => {
    if (!sectionRef.current || !isInView) return
    if (rafRef.current) cancelAnimationFrame(rafRef.current)

    rafRef.current = requestAnimationFrame(() => {
      const rect = sectionRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    })
  }

  const handleDisciplineSelect = (id) => {
    setActiveId(id)
  }

  return (
    <section
      id="core-engine"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full py-28 md:py-44 px-6 md:px-12 lg:px-24 bg-[#080808] overflow-hidden min-h-screen flex flex-col justify-center relative border-t border-[#1F1F1F]"
    >
      {/* Dynamic Cursor Glow Backdrop (Active only when in Viewport) */}
      {isInView && (
        <motion.div
          className="absolute pointer-events-none rounded-full blur-[90px] z-0"
          style={{
            width: '700px',
            height: '700px',
            background: glowBg,
            left: glowX,
            top: glowY,
            x: '-50%',
            y: '-50%',
          }}
          animate={{
            opacity: isHovered ? 0.12 : 0.05,
            scale: isHovered ? 1 : 0.85,
          }}
          transition={{ duration: 0.5 }}
        />
      )}

      <div className="max-w-[1600px] w-full mx-auto flex flex-col relative z-10">
        {/* Header Tag & Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6 border-b border-[#1A1A1A] pb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-12 h-[1px]"
                style={{ backgroundColor: activeDiscipline.color }}
              ></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#888]">
                02 — MULTIDISCIPLINARY ENGINE
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-white tracking-tighter">
              What I Combine
            </h2>
          </div>

          <p className="font-mono text-xs md:text-sm text-[#A0A0A0] max-w-md leading-relaxed uppercase tracking-wide">
            "I build across systems, code, and visuals — connecting artificial intelligence with
            human-centered interface design."
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-between relative gap-16 lg:gap-12">
          {/* Left Column: Gooey Node Discipline List */}
          <div className="flex flex-col w-full lg:w-[48%] z-20 relative">
            {/* SVG Defs for Gooey Filter */}
            <svg className="w-0 h-0 absolute" aria-hidden="true">
              <filter id="CoreEngineGooeyFilter">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 19 -7
                  "
                  result="gooey"
                />
              </filter>
            </svg>

            {/* Gooey Indicator Track */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[24px] pointer-events-none z-0"
              style={{ filter: 'url(#CoreEngineGooeyFilter)' }}
            >
              {/* Background Track Line */}
              <div className="absolute left-[11px] top-6 bottom-6 w-[2px] bg-[#1F1F1F]" />

              {/* Static Anchor Nodes */}
              <div className="w-full h-full flex flex-col pointer-events-none">
                {disciplines.map((d) => (
                  <div key={`anchor-${d.id}`} className="flex-1 flex items-center justify-center">
                    <div className="w-[6px] h-[6px] rounded-full bg-[#333]" />
                  </div>
                ))}
              </div>

              {/* Moving Gooey Indicator Blob */}
              <motion.div
                initial={false}
                animate={{ y: `${activeIndex * 100}%` }}
                transition={{ type: 'spring', damping: 22, stiffness: 140 }}
                className="absolute top-0 left-0 w-full h-[20%] flex items-center justify-center pointer-events-none"
              >
                <div
                  className="w-[12px] h-[28px] rounded-full transition-colors duration-500 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                  style={{ backgroundColor: activeDiscipline.color }}
                />
              </motion.div>
            </div>

            {/* Discipline Selection List */}
            <div className="w-full pl-[40px] relative z-10 flex flex-col divide-y divide-[#181818]">
              {disciplines.map((item) => {
                const isActive = activeId === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => handleDisciplineSelect(item.id)}
                    onMouseEnter={() => handleDisciplineSelect(item.id)}
                    className="group flex items-center justify-between py-6 md:py-8 text-left transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A7CFF]"
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-mono text-xs text-[#666] group-hover:text-white transition-colors">
                        {item.number}
                      </span>
                      <h3
                        className={`text-3xl md:text-5xl font-display font-bold uppercase tracking-wide transition-all duration-300 ${
                          isActive
                            ? 'text-white translate-x-2'
                            : 'text-[#555] group-hover:text-[#AAA]'
                        }`}
                      >
                        <TextRoll isActive={isActive}>{item.title}</TextRoll>
                      </h3>
                    </div>

                    <span
                      className="font-mono text-[10px] md:text-xs tracking-widest uppercase transition-colors hidden sm:block"
                      style={{ color: isActive ? item.color : '#444' }}
                    >
                      {item.subheading}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Engine Canvas & Details Panel */}
          <div className="flex flex-col w-full lg:w-[48%] z-10 relative min-h-[450px] justify-center">
            {/* Cubes 3D Canvas (Mounted only when section is in viewport for performance) */}
            {isInView && (
              <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-auto">
                <div className="w-full h-full max-w-[650px] max-h-[650px]">
                  <Cubes
                    gridSize={7}
                    maxAngle={45}
                    radius={4}
                    borderStyle={`1px solid ${activeDiscipline.color}`}
                    faceColor="#080808"
                    rippleColor={activeDiscipline.color}
                    rippleSpeed={1.2}
                    autoAnimate={false}
                    rippleOnClick={false}
                  />
                </div>
              </div>
            )}

            {/* Discipline Details Card */}
            <div className="relative z-10 w-full p-8 md:p-12 rounded-2xl bg-[#0E0E0E]/90 backdrop-blur-md border border-[#222] shadow-2xl flex flex-col justify-between gap-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex items-center justify-between border-b border-[#1F1F1F] pb-4">
                    <span className="font-mono text-xs text-[#666] uppercase tracking-widest">
                      DISCIPLINE // {activeDiscipline.number}
                    </span>
                    <span
                      className="font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded bg-black/50 border border-white/10"
                      style={{ color: activeDiscipline.color }}
                    >
                      {activeDiscipline.title}
                    </span>
                  </div>

                  <p className="font-body text-base md:text-xl text-[#F2F2F2] leading-relaxed">
                    {activeDiscipline.desc}
                  </p>

                  {/* Technology / Methodology Tags */}
                  <div className="pt-4 flex flex-wrap gap-2">
                    {activeDiscipline.details.map((tag, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs text-[#A0A0A0] bg-[#151515] border border-[#292929] px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
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
