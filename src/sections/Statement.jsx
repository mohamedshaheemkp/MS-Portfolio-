import { motion } from "framer-motion"
import { useRef } from "react"

const EASE = [0.16, 1, 0.3, 1]

// Line-mask reveal for each statement line
function LineReveal({ children, delay = 0, className = "" }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className={className}
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.85, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default function Statement() {
  return (
    <section
      id="statement"
      className="relative w-full overflow-hidden"
      style={{
        background: "var(--ink)",
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
    >
      {/* Lime accent line — left edge */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ background: "var(--lime)", originY: 0 }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}
      />

      <div
        className="relative z-10 w-full"
        style={{ padding: "0 var(--space-gutter)" }}
      >
        {/* Section index */}
        <motion.div
          className="section-index mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          02 / statement
        </motion.div>

        {/* Statement lines */}
        <div
          style={{
            maxWidth: "980px",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(4px, 0.8vw, 12px)",
          }}
        >
          <LineReveal delay={0}>
            <h2
              className="font-display"
              style={{
                fontWeight: 900,
                fontSize: "clamp(36px, 5.8vw, 80px)",
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
                color: "var(--text-primary)",
              }}
            >
              I build things that think.
            </h2>
          </LineReveal>

          <LineReveal delay={0.1}>
            <h2
              className="font-display"
              style={{
                fontWeight: 900,
                fontSize: "clamp(36px, 5.8vw, 80px)",
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
                color: "var(--lime)",
                fontStyle: "italic",
              }}
            >
              I design things that feel.
            </h2>
          </LineReveal>
        </div>

        {/* Divider */}
        <motion.div
          style={{
            height: "1px",
            background: "var(--ink-border)",
            transformOrigin: "left",
            margin: "clamp(32px, 5vw, 64px) 0",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
        />

        {/* Discipline tags + brief bio */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <motion.p
            className="type-label"
            style={{ lineHeight: 2.2, maxWidth: "480px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            AI · Machine Learning · Graphic Design · React · Python · Brand Identity
          </motion.p>

          <motion.p
            className="type-body"
            style={{ maxWidth: "340px" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
          >
            Kerala-based developer and designer crafting AI-powered
            products with a sharp eye for visual craft.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
