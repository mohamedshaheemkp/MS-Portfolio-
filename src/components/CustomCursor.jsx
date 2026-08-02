import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export default function CustomCursor() {
  const reduceMotion = useReducedMotion()
  const [cursorText, setCursorText] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isFinePointer, setIsFinePointer] = useState(() => {
    return window.matchMedia('(pointer: fine)').matches
  })

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springX = useSpring(cursorX, { damping: 30, stiffness: 250 })
  const springY = useSpring(cursorY, { damping: 30, stiffness: 250 })

  const ringX = reduceMotion ? cursorX : springX
  const ringY = reduceMotion ? cursorY : springY

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)')

    const listener = (e) => {
      setIsFinePointer(e.matches)
    }

    media.addEventListener('change', listener)

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    if (media.matches) {
      window.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      media.removeEventListener('change', listener)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible, cursorX, cursorY])

  // Add className to body or html to hide native cursor
  useEffect(() => {
    if (isFinePointer) {
      document.documentElement.classList.add('custom-cursor-active')
    } else {
      document.documentElement.classList.remove('custom-cursor-active')
    }
    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [isFinePointer])

  // Global event listener for elements with data-cursor attributes
  useEffect(() => {
    if (!isFinePointer) return

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]')
      if (target) {
        setCursorText(target.getAttribute('data-cursor'))

        // Dynamic cursor color extraction
        const color =
          target.style.getPropertyValue('--cursor-color') ||
          window.getComputedStyle(target).getPropertyValue('--cursor-color')
        if (color && color.trim()) {
          document.documentElement.style.setProperty('--cursor-color', color.trim())
        } else {
          document.documentElement.style.removeProperty('--cursor-color')
        }
      } else {
        setCursorText('')
        document.documentElement.style.removeProperty('--cursor-color')
      }
    }

    window.addEventListener('mouseover', handleMouseOver)
    return () => {
      window.removeEventListener('mouseover', handleMouseOver)
      document.documentElement.style.removeProperty('--cursor-color')
    }
  }, [isFinePointer])

  if (!isFinePointer || !isVisible) return null

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: 'var(--cursor-color, #295CFF)',
          transition: 'background-color 0.3s ease',
        }}
        animate={{
          scale: cursorText ? 0 : 1,
          opacity: cursorText ? 0 : 1,
        }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.2 }}
      />
      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9998] flex items-center justify-center overflow-hidden"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: cursorText
            ? 'color-mix(in srgb, var(--cursor-color, #295CFF) 15%, transparent)'
            : 'color-mix(in srgb, var(--cursor-color, #295CFF) 0%, transparent)',
          borderColor: cursorText
            ? 'color-mix(in srgb, var(--cursor-color, #295CFF) 40%, transparent)'
            : 'color-mix(in srgb, var(--cursor-color, #ffffff) 20%, transparent)',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
        animate={{
          width: cursorText ? 80 : 40,
          height: cursorText ? 80 : 40,
        }}
        transition={
          reduceMotion ? { duration: 0 } : { type: 'spring', damping: 30, stiffness: 200 }
        }
      >
        <AnimatePresence mode="wait">
          {cursorText && (
            <motion.span
              initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.6 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.2 }}
              className="text-[9px] font-mono font-bold tracking-widest uppercase select-none"
              style={{
                color: 'var(--cursor-color, #295CFF)',
                transition: 'color 0.3s ease',
              }}
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
