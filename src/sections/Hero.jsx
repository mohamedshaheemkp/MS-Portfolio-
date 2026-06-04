import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import cinemImage from "../assets/cinem.webp"

const EASE = [0.16, 1, 0.3, 1]

// Wraps each word so it can clip-reveal upward from a line mask
function WordReveal({ children, delay = 0, className = "" }) {
  return (
    <span className="inline-block overflow-hidden leading-[0.95]">
      <motion.span
        className={`inline-block ${className}`}
        initial={{ y: "105%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)

  // Parallax: image drifts up slightly as user scrolls down
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const imgY      = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
  const contentY  = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const opacity   = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full overflow-hidden select-none"
      style={{ height: "100svh", minHeight: "620px", background: "var(--ink)" }}
    >

      {/* ── Background image with parallax ─────────────────────── */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: imgY, scale: 1.12 }}
      >
        <img
          src={cinemImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{
            objectPosition: "center 18%",
            filter: "brightness(0.45) contrast(1.05) saturate(0.8)",
          }}
          draggable={false}
          loading="eager"
        />
        {/* Bottom-to-top fade — reveals name against dark base */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, var(--ink) 0%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.2) 100%)",
          }}
        />
        {/* Left edge fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.7) 0%, transparent 55%)",
          }}
        />
      </motion.div>

      {/* ── Content ────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 w-full h-full flex flex-col justify-between"
        style={{ y: contentY, opacity }}
      >

        {/* TOP ROW — index label + availability */}
        <div
          className="flex items-center justify-between w-full"
          style={{ padding: "32px var(--space-gutter)", paddingTop: "96px" }}
        >
          <motion.div
            className="section-index"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4, ease: EASE }}
          >
            01 / intro
          </motion.div>

          <motion.div
            className="available-badge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5, ease: EASE }}
          >
            <span className="available-dot" />
            Available for work
          </motion.div>
        </div>

        {/* MIDDLE — role line */}
        <div style={{ padding: "0 var(--space-gutter)" }}>
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
          >
            AI Engineer · Graphic Designer
          </motion.div>
        </div>

        {/* BOTTOM — giant name + meta row */}
        <div style={{ padding: "0 var(--space-gutter) clamp(24px,4vw,48px)" }}>

          {/* Name — word-by-word clip reveal */}
          <div
            className="font-display"
            style={{
              fontWeight: 900,
              fontSize: "clamp(60px, 11.5vw, 168px)",
              lineHeight: 0.88,
              letterSpacing: "-0.055em",
              color: "var(--text-primary)",
              marginBottom: "clamp(24px, 3vw, 40px)",
            }}
          >
            <div>
              <WordReveal delay={0.05}>Mohamed</WordReveal>
            </div>
            <div>
              <WordReveal delay={0.18}>
                <span style={{ color: "var(--text-secondary)" }}>Shaheem</span>
              </WordReveal>
            </div>
          </div>

          {/* Meta row — tagline left, CTAs right */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            {/* Tagline + scroll hint */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
              className="flex flex-col gap-5"
            >
              <p className="hero-tagline">
                Building intelligent products at the<br />
                intersection of AI and design.
              </p>
              <div className="flex items-center gap-4">
                <span className="hero-scroll-line" />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--text-dim)",
                  }}
                >
                  Scroll
                </span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0, ease: EASE }}
              className="flex items-center gap-4 flex-wrap"
            >
              <a href="#projects" className="btn-primary">
                View Work
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="/resume.pdf" download className="btn-ghost">
                Résumé
              </a>
            </motion.div>

          </div>
        </div>

      </motion.div>

    </section>
  )
}
