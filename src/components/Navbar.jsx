import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { motion, AnimatePresence } from "framer-motion"
import Magnetic from "./Magnetic"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16"
        style={{
          paddingTop: scrolled ? '16px' : '32px',
          paddingBottom: scrolled ? '16px' : '32px',
          transition: "all .4s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          
          {/* Left - Name/Logo */}
          <div className="w-1/3 flex justify-start">
            <Magnetic strength={0.15}>
              <Link to="home" smooth duration={800} className="cursor-pointer group flex items-center gap-1.5">
                <span className="font-sans font-semibold text-sm tracking-tight text-[#FFD1BA] group-hover:text-white transition-colors drop-shadow-md">
                  Mohamed
                </span>
                <span className="text-[#FFD1BA] text-xs">●</span>
                <span className="font-sans font-semibold text-sm tracking-tight text-[#FFD1BA] group-hover:text-white transition-colors drop-shadow-md">
                  Shaheem
                </span>
              </Link>
            </Magnetic>
          </div>

          {/* Center - Pill Navigation */}
          <div className="hidden md:flex w-1/3 justify-center">
            <div 
              className="flex items-center gap-8 px-8 py-2 rounded-full"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)"
              }}
            >
              <Link to="about" smooth duration={800} offset={-80} className="cursor-pointer font-sans text-xs font-semibold text-white/80 hover:text-white transition-colors">
                About
              </Link>
              
              <Link to="home" smooth duration={800} className="cursor-pointer">
                <Magnetic strength={0.2}>
                  <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
                    <span className="font-display font-black text-[#FFD1BA] text-xl italic tracking-tighter" style={{ lineHeight: 1 }}>ms</span>
                  </div>
                </Magnetic>
              </Link>
              
              <Link to="projects" smooth duration={800} offset={-80} className="cursor-pointer font-sans text-xs font-semibold text-white/80 hover:text-white transition-colors">
                Work
              </Link>
            </div>
          </div>

          {/* Right - Social Links */}
          <div className="hidden md:flex w-1/3 justify-end items-center gap-6">
             <a href="#contact" className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#FFD1BA] hover:text-white transition-colors drop-shadow-md">Email</a>
             <a href="https://github.com" target="_blank" rel="noreferrer" className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#FFD1BA] hover:text-white transition-colors drop-shadow-md">Github</a>
             <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#FFD1BA] hover:text-white transition-colors drop-shadow-md">In</a>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden w-1/3 justify-end">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-[#FFD1BA] cursor-pointer"
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>

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
            className="fixed inset-0 z-40 flex flex-col justify-center items-center bg-[#050505]/95 backdrop-blur-xl"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-8 text-2xl text-white cursor-pointer"
            >
              <HiX />
            </button>
            <ul className="flex flex-col items-center gap-10">
              {['About', 'Skills', 'Projects', 'Designs', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()} smooth duration={800} offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className="font-display font-black text-4xl cursor-pointer text-zinc-400 hover:text-white hover:-skew-x-8 inline-block origin-left transition-all"
                  >
                    {item}
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
