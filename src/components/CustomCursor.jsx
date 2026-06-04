import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX  = 0, ringY  = 0
    let raf    = null

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX + "px"
      dot.style.top  = mouseY + "px"
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const tick = () => {
      ringX = lerp(ringX, mouseX, 0.12)
      ringY = lerp(ringY, mouseY, 0.12)
      ring.style.left = ringX + "px"
      ring.style.top  = ringY + "px"
      raf = requestAnimationFrame(tick)
    }

    const addHover = () => {
      dot.classList.add("is-hovering")
      ring.classList.add("is-hovering")
    }
    const removeHover = () => {
      dot.classList.remove("is-hovering")
      ring.classList.remove("is-hovering")
    }

    const bindHoverables = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach(el => {
        el.addEventListener("mouseenter", addHover)
        el.addEventListener("mouseleave", removeHover)
      })
    }

    window.addEventListener("mousemove", onMove)
    raf = requestAnimationFrame(tick)
    bindHoverables()

    // Re-bind on DOM changes
    const observer = new MutationObserver(bindHoverables)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
