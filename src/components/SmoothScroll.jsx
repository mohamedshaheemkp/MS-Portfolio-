import { useEffect } from "react"
import Lenis from "lenis"

const SmoothScroll = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      smoothWheel: true,
      smoothTouch: false,
    })

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return null
}

export default SmoothScroll