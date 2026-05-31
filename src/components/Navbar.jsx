import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { motion, AnimatePresence } from "framer-motion"
import Magnetic from "./Magnetic"

const navLinks = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Designs", to: "designs" },
  { name: "Contact", to: "contact" },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [hoveredLink, setHoveredLink] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20"
        style={{
          paddingTop: scrolled ? '12px' : '24px',
          paddingBottom: scrolled ? '12px' : '24px',
          background: scrolled ? 'rgba(10,10,10,0.65)' : 'rgba(5,5,5,0)',
          backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(255,255,255,0)',
          boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.6)' : 'none',
          transition: "transform .34s ease, background-color .34s ease, backdrop-filter .34s ease, opacity .34s ease, padding .34s ease, border-color .34s ease, box-shadow .34s ease"
        }}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Magnetic strength={0.25}>
            <Link to="home" smooth duration={800} className="cursor-pointer">
              <span className="font-display font-black text-xl tracking-tight" style={{ color: 'var(--text)' }}>
                MS<span className="text-cyan-400">.</span>
              </span>
            </Link>
          </Magnetic>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-2 relative">
            {navLinks.map((link) => {
              const isHovered = hoveredLink === link.to
              const isActive = activeSection === link.to

              return (
                <li
                  key={link.to}
                  className="relative px-4 py-2"
                  onMouseEnter={() => setHoveredLink(link.to)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {/* Sliding hover pill backdrop capsule */}
                  {isHovered && (
                    <motion.div
                      layoutId="navHoverBg"
                      className="absolute inset-0 bg-white/[0.04] rounded-full z-0"
                      transition={{ type: "spring", stiffness: 320, damping: 25 }}
                      style={{
                        boxShadow: "0 0 15px rgba(255, 255, 255, 0.02) inset"
                      }}
                    />
                  )}

                  <Link
                    to={link.to}
                    smooth duration={800} spy offset={-80}
                    onSetActive={() => setActiveSection(link.to)}
                    className="font-sans text-xs uppercase tracking-widest font-semibold cursor-pointer relative z-10 text-zinc-400 hover:text-white block"
                    style={{
                      textShadow: isHovered ? "0 0 8px rgba(0, 240, 255, 0.3)" : "none",
                      transition: "color .3s ease, text-shadow .3s ease"
                    }}
                  >
                    {link.name}
                    
                    {/* Sliding Underline tracking indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeUnderline"
                        className="absolute -bottom-2 left-2 right-2 h-[2px] bg-cyan-400 rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        style={{
                          boxShadow: "0 0 10px rgba(0, 240, 255, 0.8)"
                        }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop Magnetic Hire Me Button changed to 'Hello!' */}
          <div className="hidden md:block">
            <Magnetic>
              <Link 
                to="contact"
                smooth duration={800} offset={-80}
                className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-bold px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white text-white hover:text-black hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer select-none"
                style={{
                  transition: "transform .3s ease, background-color .3s ease, color .3s ease, border-color .3s ease, box-shadow .3s ease"
                }}
              >
                Hello!
              </Link>
            </Magnetic>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-2xl cursor-pointer"
            style={{ color: 'var(--text)' }}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center"
            style={{ background: 'rgba(5,5,5,0.98)', backdropFilter: 'blur(20px)' }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-8 text-2xl cursor-pointer"
              style={{ color: 'var(--muted)' }}
            >
              <HiX />
            </button>
            <ul className="flex flex-col items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to} smooth duration={800} offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className="font-display font-black text-4xl cursor-pointer text-zinc-400 hover:text-white hover:-skew-x-8 inline-block origin-left"
                    style={{
                      transition: "color .3s ease, transform .3s ease"
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
