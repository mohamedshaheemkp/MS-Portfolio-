import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const EASE = [0.16, 1, 0.3, 1]

const STATS = [
  { number: "3",  suffix: "+", label: "Years Building" },
  { number: "15", suffix: "+", label: "Projects Shipped" },
  { number: "98", suffix: "%", label: "Model Accuracy" },
]

const LINKS = [
  { label: "GitHub",   href: "https://github.com/mohamedshaheemkp" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-shaheem-91a895331" },
  { label: "Email",    href: "mailto:mohamedshaheemkp74@gmail.com" },
]

const CREDENTIALS = [
  { label: "Degree",  value: "B.Tech — AI & Data Science" },
  { label: "College", value: "MEA Engineering, Malappuram" },
  { label: "Period",  value: "2022 – 2026" },
  { label: "Focus",   value: "ML · Computer Vision · Design" },
  { label: "Status",  value: "Open to work" },
]

export default function About() {
  const sectionRef = useRef(null)

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden"
      style={{
        background: "var(--ink-raised)",
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
    >
      {/* Subtle top border */}
      <div className="rule absolute top-0 left-0 right-0" />

      <div style={{ padding: "0 var(--space-gutter)" }}>

        {/* ── Section index ───────────────────────────────────── */}
        <motion.div
          className="section-index"
          style={{ marginBottom: "clamp(40px, 6vw, 80px)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          04 / about
        </motion.div>

        {/* ── BLOCK 1: Headline + credentials ─────────────────── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{
            gap: "clamp(40px, 6vw, 96px)",
            marginBottom: "clamp(48px, 8vw, 112px)",
            alignItems: "start",
          }}
        >
          {/* Left: headline */}
          <div>
            <div style={{ overflow: "hidden", marginBottom: "clamp(12px, 1.5vw, 20px)" }}>
              <motion.h2
                className="type-headline"
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.85, ease: EASE }}
              >
                Converting
              </motion.h2>
            </div>
            <div style={{ overflow: "hidden", marginBottom: "clamp(12px, 1.5vw, 20px)" }}>
              <motion.h2
                className="type-headline"
                style={{ color: "var(--lime)", fontStyle: "italic" }}
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.85, ease: EASE, delay: 0.08 }}
              >
                Ideas
              </motion.h2>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                className="type-headline"
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.85, ease: EASE, delay: 0.16 }}
              >
                into Reality.
              </motion.h2>
            </div>
          </div>

          {/* Right: credentials list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          >
            <dl style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {CREDENTIALS.map(({ label, value }, i) => (
                <div
                  key={label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 1fr",
                    gap: "24px",
                    padding: "16px 0",
                    borderBottom: "1px solid var(--ink-border)",
                  }}
                >
                  <dt
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--text-dim)",
                      paddingTop: "2px",
                    }}
                  >
                    {label}
                  </dt>
                  <dd
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "var(--text-primary)",
                      lineHeight: 1.5,
                    }}
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Social links */}
            <div style={{ display: "flex", gap: "28px", marginTop: "28px" }}>
              {LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--text-dim)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--text-primary)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--text-dim)"}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── BLOCK 2: Stats row ───────────────────────────────── */}
        <motion.div
          className="rule"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ transformOrigin: "left", marginBottom: "clamp(40px, 6vw, 72px)" }}
        />

        <div
          className="grid grid-cols-3"
          style={{
            gap: "clamp(24px, 4vw, 64px)",
            marginBottom: "clamp(48px, 8vw, 112px)",
          }}
        >
          {STATS.map(({ number, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(48px, 8vw, 120px)",
                  letterSpacing: "-0.05em",
                  lineHeight: 0.85,
                  color: "var(--text-primary)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "2px",
                }}
              >
                {number}
                <span style={{ fontSize: "0.38em", color: "var(--lime)", marginTop: "0.18em" }}>
                  {suffix}
                </span>
              </div>
              <div className="stat-label">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* ── BLOCK 3: Bio ─────────────────────────────────────── */}
        <motion.div
          className="rule"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ transformOrigin: "left", marginBottom: "clamp(40px, 6vw, 72px)" }}
        />

        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "clamp(32px, 5vw, 80px)", alignItems: "start" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h3
              className="type-title"
              style={{ marginBottom: "20px" }}
            >
              Building AI Systems,<br />
              crafting Visual Identities.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
            className="type-body"
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              I'm an AI Engineer and Graphic Designer based in Kerala, India.
              I live at the overlap of machine learning, modern frontend systems,
              and premium visual design — completing my AI & Data Science degree
              at MEA Engineering College, Malappuram.
            </p>
            <p>
              I specialise in taking ideas from concept to production: training
              computer vision models, architecting React interfaces, and building
              brand identities — often for the same project. Real technologies,
              measurable outcomes.
            </p>

            {/* Experience entry */}
            <div
              style={{
                marginTop: "8px",
                paddingTop: "24px",
                borderTop: "1px solid var(--ink-border)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--lime)",
                  marginBottom: "8px",
                }}
              >
                2025 – Present
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "15px",
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                  marginBottom: "6px",
                }}
              >
                AI Research & Creative Engineering
              </div>
              <p style={{ fontSize: "14px" }}>
                Training YOLOv9 / PyTorch models while architecting high-end
                creative interfaces. Built AgriAI — a computer vision crop
                diagnostics system detecting diseases, weeds, and insects.
              </p>
            </div>
          </motion.div>
        </div>

      </div>

      <div className="rule absolute bottom-0 left-0 right-0" />
    </section>
  )
}
