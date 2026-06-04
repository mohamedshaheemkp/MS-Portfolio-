import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const EASE = [0.16, 1, 0.3, 1]

export default function PageLoader() {
  const [loading, setLoading]   = useState(true)
  const [counter, setCounter]   = useState(0)

  useEffect(() => {
    // Count 0 → 100 over ~1.4s
    let start = null
    const duration = 1400

    const step = (ts) => {
      if (!start) start = ts
      const prog = Math.min((ts - start) / duration, 1)
      setCounter(Math.floor(prog * 100))
      if (prog < 1) requestAnimationFrame(step)
      else setTimeout(() => setLoading(false), 200)
    }
    requestAnimationFrame(step)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {/* Counter */}
          <motion.div
            className="loader-counter"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            {String(counter).padStart(2, "0")}
          </motion.div>

          {/* Bar */}
          <div className="loader-bar-track">
            <motion.div
              className="loader-bar-fill"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: counter / 100 }}
              transition={{ duration: 0.05, ease: "linear" }}
            />
          </div>

          {/* Label */}
          <motion.p
            className="loader-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Mohamed Shaheem · Portfolio
          </motion.p>

          {/* Exit wipe — lime line sweeps up */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "var(--lime)", transformOrigin: "bottom" }}
            initial={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.55, ease: EASE }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
