import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EndlessToolsModal({ isOpen, onClose, motionItem }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const modalRef = useRef(null)

  // Auto-play timeline simulation for 30s Endless Tools video
  useEffect(() => {
    if (!isOpen || !isPlaying) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsPlaying(false)
          return 0
        }
        return prev + 1
      })
    }, 300) // 300ms * 100 = 30 seconds

    return () => clearInterval(interval)
  }, [isOpen, isPlaying])

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8">
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#080808] border border-[#292929] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#222] bg-[#111]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#FF3B30] animate-pulse"></span>
              <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
                {motionItem?.title || 'ENDLESS TOOLS'} // FEATURED MOTION
              </span>
            </div>
            <button
              onClick={onClose}
              className="font-mono text-xs uppercase tracking-widest text-[#A0A0A0] hover:text-white border border-[#333] px-3 py-1.5 rounded bg-[#181818] min-h-[44px] min-w-[44px]"
            >
              [ CLOSE × ]
            </button>
          </div>

          {/* Player Viewport */}
          <div className="relative aspect-video w-full bg-[#050505] flex items-center justify-center overflow-hidden group">
            <img
              src={motionItem?.poster}
              alt={motionItem?.title}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isPlaying ? 'scale-105 opacity-90' : 'scale-100 opacity-60 grayscale-[30%]'
              }`}
            />

            {/* Simulated Motion Kinetic Overlay */}
            {isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="font-display font-black text-6xl md:text-8xl text-white/10 uppercase tracking-tighter animate-pulse">
                  ENDLESS TOOLS
                </div>
              </div>
            )}

            {/* Play/Pause Overlay Indicator */}
            {!isPlaying && (
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-2xl font-bold shadow-2xl hover:scale-110 transition-transform">
                  ▶
                </div>
              </button>
            )}
          </div>

          {/* Player Controls Bar */}
          <div className="p-6 border-t border-[#222] bg-[#0E0E0E] flex flex-col gap-4">
            {/* Timeline Scrubber */}
            <div className="w-full flex items-center gap-4">
              <span className="font-mono text-[10px] text-[#666]">
                {Math.floor((progress / 100) * 30)}s
              </span>
              <div className="flex-1 h-1.5 bg-[#222] rounded-full overflow-hidden cursor-pointer">
                <div
                  className="h-full bg-[#4A7CFF] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="font-mono text-[10px] text-[#666]">30s</span>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="font-mono text-xs uppercase tracking-widest text-white bg-[#1A1A1A] border border-[#333] px-4 py-2 rounded hover:border-[#4A7CFF] transition-colors min-h-[44px]"
                >
                  {isPlaying ? 'PAUSE ||' : 'PLAY ▶'}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="font-mono text-xs uppercase tracking-widest text-[#A0A0A0] hover:text-white min-h-[44px] px-2"
                >
                  {isMuted ? 'MUTE [OFF]' : 'SOUND [ON]'}
                </button>
              </div>

              <div className="font-mono text-[10px] text-[#666] uppercase tracking-widest hidden sm:block">
                30-SECOND TYPOGRAPHIC MOTION // SHAHEEM STUDIO
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
