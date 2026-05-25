import { motion, useScroll } from "framer-motion"

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      style={{ scaleX: scrollYProgress, background: '#e8ff00', height: '2px', position: 'fixed', top: 0, left: 0, right: 0, transformOrigin: 'left', zIndex: 9998 }}
    />
  )
}

export default ScrollProgress
