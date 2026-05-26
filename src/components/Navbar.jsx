import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { motion, AnimatePresence } from "framer-motion"

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 lg:px-20"
        style={{
          paddingTop: scrolled ? '12px' : '22px',
          paddingBottom: scrolled ? '12px' : '22px',
          background: scrolled ? 'rgba(5,5,5,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          willChange: "padding, background"
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="home" smooth duration={800} className="cursor-pointer">
            <span className="font-display font-black text-xl tracking-tight" style={{ color: 'var(--text)' }}>
              MS<span className="text-cyan-400">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.to} className="relative py-1">
                <Link
                  to={link.to}
                  smooth duration={800} spy offset={-80}
                  onSetActive={() => setActiveSection(link.to)}
                  className="font-sans text-xs uppercase tracking-widest font-semibold cursor-pointer relative group transition-colors duration-300 text-zinc-400 hover:text-white"
                >
                  {link.name}
                  
                  {/* Sliding Underline tracking indicator */}
                  {activeSection === link.to && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-cyan-400 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      style={{
                        boxShadow: "0 0 10px rgba(0, 240, 255, 0.8)"
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Magnetic Hire Me Button */}
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="hidden md:inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-bold px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white text-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer"
          >
            Hire Me
          </motion.a>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl cursor-pointer" style={{ color: 'var(--text)' }}>
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
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-8 text-2xl cursor-pointer" style={{ color: 'var(--muted)' }}>
              <HiX />
            </button>
            <ul className="flex flex-col items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to} smooth duration={800} offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className="font-display font-black text-4xl cursor-pointer transition-all duration-500 text-zinc-400 hover:text-white hover:italic"
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
