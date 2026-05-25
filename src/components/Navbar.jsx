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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          padding: scrolled ? '14px 32px' : '22px 32px',
          background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="home" smooth duration={800} className="cursor-pointer">
            <span className="font-display font-black text-xl tracking-tight" style={{ color: 'var(--text)' }}>
              MS<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth duration={800} spy offset={-80}
                  activeClass="active-nav"
                  className="font-sans text-sm tracking-wide cursor-pointer transition-all duration-300 relative group"
                  style={{ color: 'var(--muted2)', fontWeight: 500 }}
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                    style={{ background: 'var(--accent)' }} />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#contact"
            className="hidden md:inline-flex items-center gap-2 font-sans text-sm font-semibold px-5 py-2 transition-all duration-300"
            style={{ border: '1px solid var(--border-hover)', color: 'var(--text)', borderRadius: '2px' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#000'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--border-hover)'; }}
          >
            Hire Me
          </a>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl" style={{ color: 'var(--text)' }}>
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center items-center"
          style={{ background: 'rgba(8,8,8,0.97)', backdropFilter: 'blur(20px)' }}>
          <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-8 text-2xl" style={{ color: 'var(--muted)' }}>
            <HiX />
          </button>
          <ul className="flex flex-col items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to} smooth duration={800} offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="font-display font-bold text-4xl cursor-pointer transition-all duration-300 hover:italic"
                  style={{ color: 'var(--text)' }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        .active-nav { color: var(--accent) !important; }
      `}</style>
    </>
  )
}

export default Navbar
