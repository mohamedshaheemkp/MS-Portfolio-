import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

export default function Statement() {
  return (
    <section
      id="statement"
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "#050505",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      {/* Single contained glow — opacity max 0.07 per colour rule */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,240,255,0.055) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        className="relative z-10 w-full max-w-[900px] mx-auto px-6 md:px-12 lg:px-20"
      >
        {/* Line 1 — white */}
        <ScrollReveal variant="blur" delay={0} distance={0} duration={0.65}>
          <h2
            className="font-display font-extrabold text-white"
            style={{
              fontSize: "clamp(36px, 5.5vw, 76px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            I build things that think.
          </h2>
        </ScrollReveal>

        {/* Line 2 — italic cyan — delay 0.12s */}
        <ScrollReveal variant="blur" delay={0.12} distance={0} duration={0.65}>
          <h2
            className="font-display font-extrabold italic"
            style={{
              fontSize: "clamp(36px, 5.5vw, 76px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "var(--accent)",
            }}
          >
            I design things that feel.
          </h2>
        </ScrollReveal>

        {/* Divider — scaleX reveal at 0.3s */}
        <ScrollReveal delay={0.3} duration={0.6} distance={0}>
          <motion.div
            className="my-10 md:my-12"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, rgba(0,240,255,0.35), rgba(255,255,255,0.08), transparent)",
              transformOrigin: "left center",
            }}
          />
        </ScrollReveal>

        {/* Discipline list — mono, muted, 0.45s */}
        <ScrollReveal delay={0.45} duration={0.55} distance={0}>
          <p
            className="font-mono uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "0.25em",
              color: "var(--muted)",
              lineHeight: 2,
            }}
          >
            AI · Machine Learning · Graphic Design ·{" "}
            <br className="sm:hidden" />
            React · Python · Brand Identity
          </p>
        </ScrollReveal>
      </div>

      {/* Bottom soft transition */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(5,5,5,0.6))",
        }}
      />
    </section>
  );
}
