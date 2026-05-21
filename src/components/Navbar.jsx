import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { HiMenuAlt3, HiX } from "react-icons/hi"

const navLinks = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Designs", to: "designs" },
  { name: "Contact", to: "contact" },
]

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto z-50 px-6 py-3 md:py-4 rounded-full border border-white/10 bg-black/30 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-all duration-300">

      <div className="flex items-center justify-between gap-8 md:gap-16">

        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={800}
          className="cursor-pointer inline-block transition-transform duration-300 hover:scale-105"
        >
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            <span className="text-cyan-400">S</span>haheem
          </h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10 text-sm text-gray-300">

          {navLinks.map((link, index) => (

            <li key={index}>

              <Link
                to={link.to}
                smooth={true}
                duration={800}
                spy={true}
                offset={-100}
                activeClass="!text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] underline decoration-cyan-400/50 underline-offset-[6px]"
                className="inline-block cursor-pointer text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
              >
                {link.name}
              </Link>

            </li>

          ))}

        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-white transition-transform duration-300 hover:scale-105"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="absolute top-full left-0 w-full mt-4 md:hidden bg-black/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">

          <ul className="flex flex-col items-center gap-8 py-10 text-gray-300">

            {navLinks.map((link, index) => (

              <li key={index}>

                <Link
                  to={link.to}
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-100}
                  onClick={() => setMenuOpen(false)}
                  activeClass="!text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] underline decoration-cyan-400/50 underline-offset-[6px]"
                  className="inline-block cursor-pointer text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105 text-lg"
                >
                  {link.name}
                </Link>

              </li>

            ))}

          </ul>

        </div>

      )}

    </nav>
  )
}

export default Navbar