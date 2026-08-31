import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function MagneticLink({ children, className, href, target, rel }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth springs for magnetic attraction
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const [isDesktop, setIsDesktop] = useState(() => {
    return window.matchMedia('(pointer: fine)').matches
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)')
    const handler = (e) => setIsDesktop(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const handleMouseMove = (e) => {
    if (!isDesktop || !ref.current) return
    const { clientX, clientY } = e
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = clientX - centerX
    const distanceY = clientY - centerY

    // Pull factor is 0.35, clamped to maximum 10px radius
    const pullFactor = 0.35
    const targetX = Math.max(-10, Math.min(10, distanceX * pullFactor))
    const targetY = Math.max(-10, Math.min(10, distanceY * pullFactor))

    x.set(targetX)
    y.set(targetY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.a>
  )
}

export default function Contact() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })

  // Parallax for blueprint grid
  const gridY = useTransform(scrollYProgress, [0, 1], ['-20%', '0%'])

  // Massive Living Name Typography Parallax
  const leftTextX = useTransform(scrollYProgress, [0, 1], ['-30%', '0%'])
  const rightTextX = useTransform(scrollYProgress, [0, 1], ['30%', '0%'])
  const textOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 1])
  const textScale = useTransform(scrollYProgress, [0.3, 1], [0.8, 1])

  // Ambient glow scale and opacity
  const glowScale = useTransform(scrollYProgress, [0.5, 1], [0.5, 1.2])
  const glowOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 0.4])

  return (
    <>
      <section
        id="contact"
        ref={containerRef}
        className="w-full relative h-[100vh] min-h-[700px] flex flex-col bg-bg overflow-hidden justify-end"
      >
        {/* Section Label */}
        <div className="absolute top-24 left-0 right-0 px-6 md:px-12 lg:px-24 pointer-events-none z-20">
          <div className="max-w-[1600px] mx-auto flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#333]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
              06 — CONTACT
            </span>
          </div>
        </div>
        {/* 1. Architecture Blueprint Grid */}
        <div className="absolute inset-0 perspective-[1000px] pointer-events-none overflow-hidden flex items-center justify-center">
          <motion.div style={{ y: gridY }} className="w-[200%] h-[200%] opacity-[0.03]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '4vw 4vw',
                transform: 'rotateX(60deg) translateY(-100px)',
                transformOrigin: 'top center',
              }}
            />
          </motion.div>
        </div>

        {/* Gradient Mask for Grid */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg pointer-events-none z-0" />

        {/* 2. Cinematic Ambient Glow */}
        <motion.div
          style={{ scale: glowScale, opacity: glowOpacity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[40vh] bg-accent-blue rounded-[100%] blur-[100px] pointer-events-none z-0"
        />

        {/* 3. Living Name Typography (Massive Scale) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 gap-0 leading-none">
          <motion.div
            style={{ x: leftTextX, opacity: textOpacity, scale: textScale }}
            className="w-full text-center"
          >
            <h1 className="text-[18vw] md:text-[15vw] font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#333] tracking-tighter select-none drop-shadow-2xl">
              MOHAMED
            </h1>
          </motion.div>
          <motion.div
            style={{ x: rightTextX, opacity: textOpacity, scale: textScale }}
            className="w-full text-center mt-[-4vw] md:mt-[-5vw]"
          >
            <h1 className="text-[18vw] md:text-[15vw] font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#333] tracking-tighter select-none drop-shadow-2xl">
              SHAHEEM
            </h1>
          </motion.div>
        </div>

        {/* 4. Terminal UI & Links (Absolute Bottom) */}
        <div className="relative z-20 w-full px-6 md:px-12 pb-8 md:pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0 bg-gradient-to-t from-bg via-bg/80 to-transparent pt-32">
          {/* Initiate Sequence (Contact) */}
          <div className="flex flex-col gap-2 md:gap-4 group cursor-pointer pointer-events-auto">
            <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest transition-colors duration-300 group-hover:text-accent-blue">
              [ INITIATE SEQUENCE ]
            </span>
            <MagneticLink
              href="mailto:hello@shaheem.dev"
              className="relative flex items-center font-display font-medium text-2xl md:text-4xl text-white transition-colors duration-500"
            >
              hello@shaheem.dev
              <motion.span
                className="absolute -bottom-2 left-0 h-[2px] bg-accent-blue"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </MagneticLink>
          </div>

          {/* Archive Log (Socials) */}
          <div className="flex flex-col gap-3 md:gap-4 items-start md:items-end pointer-events-auto">
            <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">
              [ ARCHIVE LOG ]
            </span>
            <div className="flex gap-6 font-mono text-xs md:text-sm uppercase tracking-widest text-text-primary">
              <MagneticLink
                href="https://github.com/mohamedshaheemkp"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
              >
                GH
              </MagneticLink>
              <MagneticLink
                href="https://www.linkedin.com/in/mohamed-shaheem-91a895331"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
              >
                IN
              </MagneticLink>
              <MagneticLink
                href="https://instagram.com/mhd_shm__"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
              >
                IG
              </MagneticLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#292929] bg-[#080808] px-6 py-20 md:px-12 md:py-28 lg:px-24">
        <div className="mx-auto max-w-[1600px]">
          <a
            href="mailto:hello@shaheem.dev"
            className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A7CFF] focus-visible:ring-offset-8 focus-visible:ring-offset-[#080808]"
          >
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[#FF3B30]">
              07 — Start a conversation
            </p>
            <h2 className="max-w-6xl font-display text-[13vw] font-black uppercase leading-[0.78] tracking-tighter text-[#F2F2F2] md:text-[9vw]">
              Let&apos;s turn
              <br />
              ideas into
              <br />
              <span className="text-[#4A7CFF] group-hover:text-[#FF3B30]">intelligent</span>
              <br />
              experiences.
            </h2>
            <span className="mt-10 inline-flex min-h-11 items-center border border-[#F2F2F2] px-5 font-mono text-xs font-bold uppercase tracking-widest text-white transition-colors group-hover:border-[#FF3B30] group-hover:bg-[#FF3B30]">
              Get in touch →
            </span>
          </a>

          <footer className="mt-24 grid gap-10 border-t border-[#292929] pt-8 font-mono text-xs uppercase tracking-widest text-[#A0A0A0] md:grid-cols-3 md:items-end">
            <div>
              <p className="font-display text-2xl font-black tracking-tight text-white">SHAHEEM</p>
              <p className="mt-2 leading-relaxed">
                AI Developer
                <br />× Graphic Designer
              </p>
            </div>
            <div className="flex gap-5 md:justify-self-center">
              <a href="mailto:hello@shaheem.dev" className="hover:text-white">
                Email
              </a>
              <a
                href="https://github.com/mohamedshaheemkp"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-shaheem-91a895331"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </div>
            <p className="md:justify-self-end">© 2026</p>
          </footer>
        </div>
      </section>
    </>
  )
}
