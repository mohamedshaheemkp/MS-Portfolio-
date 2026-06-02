import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
import Magnetic from "../components/Magnetic";

const navLinks = [
  { name: "About",   to: "about"    },
  { name: "Work",    to: "projects" },
  { name: "Contact", to: "contact"  },
];

// Blueprint marquee items
const marqueeItems = [
  "AI Engineering",
  "Creative Development",
  "Brand Identity",
  "Computer Vision",
  "Motion Design",
  "React 19",
  "Python",
  "Full Stack",
  "Graphic Design",
  "PyTorch",
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}
    >
      {/* ── Marquee ──────────────────────────────────────────────────────── */}
      <div
        className="py-5 overflow-hidden relative z-10"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-8 mx-8">
              <span
                className="font-display font-black text-xl italic whitespace-nowrap"
                style={{ color: i % 4 === 0 ? "var(--accent)" : "var(--border-hover)" }}
              >
                {item}
              </span>
              <span style={{ color: "var(--border-hover)", fontSize: "18px" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 py-20 relative z-10">
        <ScrollReveal distance={50} duration={0.9} className="grid lg:grid-cols-[2fr_1fr_1fr] gap-16">

          {/* Brand column */}
          <div>
            <Magnetic strength={0.2}>
              <h2
                className="font-display font-black leading-[0.9] mb-6 cursor-default"
                style={{ fontSize: "clamp(3rem, 5vw, 4rem)", color: "var(--text)" }}
              >
                MS<span style={{ color: "var(--accent)" }}>.</span>
              </h2>
            </Magnetic>
            <p
              className="text-sm leading-relaxed mb-8 max-w-sm font-sans"
              style={{ color: "var(--muted)" }}
            >
              AI Engineer & Graphic Designer from Kerala. Crafted with intention.
            </p>
            <div className="flex gap-4">
              {[
                { icon: FaGithub,    href: "https://github.com/mohamedshaheemkp",                    label: "GitHub"    },
                { icon: FaLinkedin,  href: "https://www.linkedin.com/in/mohamed-shaheem-91a895331",   label: "LinkedIn"  },
                { icon: FaInstagram, href: "https://instagram.com/mhd_shm__",                        label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <Magnetic key={href} strength={0.4}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="p-2 transition-all duration-500 block"
                    style={{ color: "var(--muted)", border: "1px solid var(--border)", borderRadius: "2px" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                  >
                    <Icon size={18} />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "var(--muted)" }}>
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={800}
                    offset={-80}
                    className="font-sans text-sm cursor-pointer transition-all duration-500 inline-block hover:translate-x-1.5"
                    style={{ color: "var(--muted2)", willChange: "transform, color" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--muted2)")}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="font-sans text-sm inline-flex items-center gap-1 transition-all duration-500 hover:translate-x-1.5"
                  style={{ color: "var(--muted2)", willChange: "transform, color" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted2)")}
                >
                  Resume ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "var(--muted)" }}>
              Get in touch
            </p>
            <Magnetic strength={0.25}>
              <a
                href="mailto:mohamedshaheemkp74@gmail.com"
                className="font-sans text-sm block mb-3 transition-colors duration-500"
                style={{ color: "var(--muted2)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted2)")}
              >
                mohamedshaheemkp74@gmail.com
              </a>
            </Magnetic>
            <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
              Kerala, India
            </p>
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-16 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
            © 2026 Mohamed Shaheem. All rights reserved.
          </p>
          <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
            Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
