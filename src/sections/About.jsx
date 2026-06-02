import { motion } from "framer-motion";
import { Cpu, Layers, Terminal, BookOpen } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import Parallax from "../components/Parallax";
import Magnetic from "../components/Magnetic";

// ── Credential data ──────────────────────────────────────────────────────────
const credentials = [
  { label: "Degree",  value: "AI & Data Science" },
  { label: "College", value: "MEA Engineering, Malappuram" },
  { label: "Year",    value: "2022 – 2026" },
  { label: "Skills",  value: "ML · Vision · Design" },
  { label: "Tools",   value: "Python · React · PyTorch · Figma" },
  { label: "Status",  value: "Open to work" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-[120px] px-6 md:px-12 lg:px-20 overflow-hidden bg-black"
    >
      {/* Subtle radial glows — max opacity 0.07 */}
      <Parallax
        speed={-0.15}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)" }}
      />
      <Parallax
        speed={0.08}
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,255,0,0.04) 0%, transparent 70%)" }}
      />

      {/* ── Section label ──────────────────────────────────────────────────── */}
      <ScrollReveal
        direction="left"
        distance={30}
        duration={0.7}
        className="flex items-center gap-4 mb-20 relative z-10"
      >
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: "var(--accent)" }}>01</span>
        <div className="w-12 h-px" style={{ background: "var(--accent)" }} />
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: "var(--muted)" }}>About</span>
      </ScrollReveal>

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* ══════════════════════════════════════════════════════════════════
            BLOCK 1 — Statement + Credentials
        ══════════════════════════════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start mb-32">

          {/* Left: headline */}
          <ScrollReveal variant="skew" distance={100} duration={0.55}>
            <h2
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-0.04em", lineHeight: 1.05 }}
            >
              Converting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#e8ff00] italic">
                Ideas{" "}
              </span>
              into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8ff00] to-violet-500 italic">
                Reality
              </span>
              .
            </h2>
          </ScrollReveal>

          {/* Right: credential list */}
          <ScrollReveal delay={0.15} distance={50} duration={0.6}>
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3">
              {credentials.map(({ label, value }) => (
                <div key={label} className="contents">
                  <dt
                    className="font-mono text-[10px] uppercase tracking-widest pt-[3px]"
                    style={{ color: "var(--muted)" }}
                  >
                    {label}
                  </dt>
                  <dd
                    className="font-sans text-sm leading-snug"
                    style={{ color: "var(--text)" }}
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>

        {/* Divider */}
        <div className="relative w-full h-px mb-32" style={{ background: "rgba(255,255,255,0.05)" }}>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 origin-center"
            style={{ background: "linear-gradient(to right, transparent, rgba(0,240,255,0.18), transparent)" }}
          />
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            BLOCK 2 — Bio
        ══════════════════════════════════════════════════════════════════ */}
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start mb-32">

          <ScrollReveal distance={70} duration={0.5}>
            <h3
              className="font-display font-black text-white leading-[1.12] tracking-[-0.03em]"
              style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
            >
              Building AI Systems,<br />and Crafting Visual Identities.
            </h3>
          </ScrollReveal>

          <ScrollReveal
            delay={0.15}
            distance={70}
            duration={0.9}
            className="space-y-5 font-sans"
            style={{ color: "#9b9892", fontSize: "17px", lineHeight: 1.65 }}
          >
            <p>
              I'm an AI Engineer and Graphic Designer based in Kerala, India. I live at the
              overlap of machine learning, modern frontend systems, and premium visual design —
              currently completing my AI & Data Science degree at MEA Engineering College,
              Malappuram.
            </p>
            <p>
              I specialise in taking ideas from concept to production: training computer vision
              models, architecting React interfaces, and building brand identities — often for
              the same project. Real technologies, measurable outcomes.
            </p>
            <div
              className="flex items-center gap-6 mt-8 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
            >
              {[
                { label: "GitHub",   href: "https://github.com/mohamedshaheemkp" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-shaheem-91a895331" },
                { label: "Email",    href: "mailto:mohamedshaheemkp74@gmail.com" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="font-mono text-xs tracking-widest uppercase hover:text-white transition-colors hover-opacity-70"
                  style={{ color: "#9b9892" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Divider */}
        <div className="relative w-full h-px mb-32" style={{ background: "rgba(255,255,255,0.05)" }}>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 origin-center"
            style={{ background: "linear-gradient(to right, transparent, rgba(232,255,0,0.13), transparent)" }}
          />
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            BLOCK 3 — Experience Timeline (single entry, rescaled heading)
        ══════════════════════════════════════════════════════════════════ */}
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal distance={60} duration={0.5} className="mb-16 text-left">
            {/* heading rescaled from clamp(32px,5vw,56px) → 22px per blueprint */}
            <h3
              className="font-display font-bold text-white"
              style={{ fontSize: "22px", letterSpacing: "-0.02em" }}
            >
              AI Research & Creative Engineering
            </h3>
          </ScrollReveal>

          <div className="relative border-l pl-6 md:pl-12 ml-4 space-y-12" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <ScrollReveal variant="blur" delay={0} distance={30} duration={0.45} className="relative group">
              {/* Node dot */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 z-20">
                <Magnetic strength={0.4}>
                  <div
                    className="flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all duration-300"
                    style={{ background: "#000", borderColor: "rgba(255,255,255,0.18)" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; }}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  </div>
                </Magnetic>
              </div>

              {/* Card */}
              <div
                className="rounded-[28px] p-[28px] hover:scale-[1.015] hover:-translate-y-1 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  willChange: "transform",
                }}
              >
                <span
                  className="font-mono text-xs tracking-widest uppercase block mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  2025 – Present
                </span>
                <h4
                  className="font-display font-black text-white mb-4 leading-tight"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.45rem)", letterSpacing: "-0.02em" }}
                >
                  AI Research & Creative Engineering
                </h4>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#9b9892" }}>
                  Training custom deep learning models (YOLOv9, PyTorch) while architecting
                  high-end creative interfaces. Built AgriAI — a computer vision crop diagnostics
                  dashboard for farmers detecting diseases, weeds, and insects in crop fields.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>

      {/* Bottom soft transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px w-full overflow-hidden pointer-events-none z-20">
        <div
          className="h-px w-[65%] mx-auto"
          style={{
            background: "linear-gradient(to right, transparent, rgba(168,85,247,0.22), transparent)",
            boxShadow: "0 0 10px rgba(168,85,247,0.35)",
          }}
        />
      </div>
    </section>
  );
}
