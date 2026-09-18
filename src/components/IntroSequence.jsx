import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function IntroSequence({ onComplete }) {
  const prefersReduced = useReducedMotion()
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    if (prefersReduced) {
      onComplete()
      return
    }

    // Phase 1: Name reveal (0ms)
    // Phase 2: Role reveal (350ms)
    // Phase 3: Transition out (950ms -> finish at ~1100ms)
    const t1 = setTimeout(() => setPhase(1), 350)
    const t2 = setTimeout(() => setPhase(2), 850)
    const t3 = setTimeout(() => {
      onComplete()
    }, 1200)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [onComplete, prefersReduced])

  if (prefersReduced) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 2 ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 bg-[#080808] z-[99999] flex flex-col items-center justify-center p-6 select-none pointer-events-none"
      aria-label="Preloader"
    >
      <div className="flex flex-col items-center text-center max-w-4xl px-4">
        {/* Name Reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter uppercase text-[#F2F2F2] leading-none"
        >
          SHAHEEM
        </motion.h1>

        {/* Descriptor Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 flex items-center gap-3 font-mono text-xs sm:text-sm tracking-[0.25em] text-[#A0A0A0] uppercase"
        >
          <span>AI DEVELOPER</span>
          <span className="text-[#FF3B30]">×</span>
          <span>GRAPHIC DESIGNER</span>
        </motion.div>
      </div>

      {/* Subtle Progress Bar Line */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-[#1A1A1A] overflow-hidden rounded-full">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className="w-full h-full bg-[#F2F2F2]"
        />
      </div>
    </motion.div>
  )
}
