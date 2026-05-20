import { useState } from "react"
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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={800}
          className="cursor-pointer"
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
                activeClass="text-cyan-400"
                className="cursor-pointer hover:text-cyan-400 transition duration-300"
              >
                {link.name}
              </Link>

            </li>

          ))}

        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-white"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">

          <ul className="flex flex-col items-center gap-8 py-10 text-gray-300">

            {navLinks.map((link, index) => (

              <li key={index}>

                <Link
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={-100}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer hover:text-cyan-400 transition duration-300 text-lg"
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