import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"

const NAV_LINKS = [
  { label: "About",    to: "about" },
  { label: "Work",     to: "projects" },
  { label: "Design",   to: "designs" },
  { label: "Contact",  to: "contact" },
]

const EASE = [0.16, 1, 0.3, 1]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastY, setLastY]     = useState(0)

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setVisible(y < lastY || y < 60)
      setLastY(y)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [lastY])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[1000]"
        style={{ padding: "28px var(--space-gutter)" }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="home" smooth duration={800} className="nav-logo" style={{ cursor: "none" }}>
            MS<span style={{ color: "var(--lime)" }}>.</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: EASE }}
              >
                <Link
                  to={l.to}
                  smooth
                  duration={800}
                  offset={-80}
                  className="nav-link"
                  style={{ cursor: "none" }}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right — availability + mobile toggle */}
          <div className="flex items-center gap-6">
            <motion.a
              href="#contact"
              className="hidden md:inline-flex btn-primary"
              style={{ padding: "10px 20px", fontSize: "10px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              Hire me
            </motion.a>

            {/* Mobile burger */}
            <button
              onClick={() => setOpen(!open)}
              className="flex md:hidden flex-col gap-[5px] p-1"
              style={{ cursor: "none", background: "none", border: "none" }}
              aria-label="Toggle menu"
            >
              <motion.span
                style={{ display: "block", width: 22, height: 1, background: "var(--text-primary)", transformOrigin: "center" }}
                animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                style={{ display: "block", width: 22, height: 1, background: "var(--text-primary)" }}
                animate={{ opacity: open ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                style={{ display: "block", width: 22, height: 1, background: "var(--text-primary)", transformOrigin: "center" }}
                animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] flex flex-col justify-center"
            style={{ background: "var(--ink-deep)" }}
          >
            {/* Lime line */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-px"
              style={{ background: "var(--lime)", transformOrigin: "top" }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            />

            <ul
              className="flex flex-col"
              style={{ padding: "0 var(--space-gutter)", gap: "clamp(12px, 3vw, 24px)" }}
            >
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ x: -32, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -32, opacity: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.45, ease: EASE }}
                >
                  <Link
                    to={l.to}
                    smooth
                    duration={800}
                    offset={-80}
                    onClick={() => setOpen(false)}
                    style={{ cursor: "none" }}
                  >
                    <span
                      className="font-display"
                      style={{
                        fontWeight: 900,
                        fontSize: "clamp(40px, 10vw, 80px)",
                        letterSpacing: "-0.04em",
                        color: "var(--text-primary)",
                        display: "inline-block",
                        lineHeight: 1.0,
                      }}
                    >
                      {l.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Bottom meta */}
            <div
              className="absolute bottom-8 flex items-center justify-between w-full"
              style={{ padding: "0 var(--space-gutter)" }}
            >
              <span className="type-label">Mohamed Shaheem</span>
              <span className="available-badge">
                <span className="available-dot" />
                Available
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
