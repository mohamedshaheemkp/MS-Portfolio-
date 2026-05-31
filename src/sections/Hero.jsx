import { motion } from "framer-motion";
import { useRef } from "react";
import cinemImage from "../assets/cinem.webp";
import GithubButton from "../components/GithubButton";
import { motionTiming } from "../utils/motion";

export default function Hero() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full h-screen overflow-hidden bg-black select-none"
    >
      {/* ── Full-bleed Portrait ──────────────────────────────────────────────── */}
      {/* PERFORMANCE FIX: Removed motion.div and useTransform scroll loop. 
          Static image is infinitely faster and allows About section to scroll smoothly over it. */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src={cinemImage}
          alt="Mohamed Shaheem — AI Engineer & Graphic Designer"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.78) contrast(1.06)" }}
          draggable={false}
          loading="eager"
          decoding="async"
        />

        {/* Bottom gradient: ensures name is always legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.55) 28%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0.18) 100%)",
          }}
        />

        {/* Left gradient: anchors bottom-left name */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.08) 40%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Page Content ────────────────────────────────────────────────────── */}
      <div className="relative z-10 h-full flex flex-col justify-between px-8 md:px-14 lg:px-20 py-8 md:py-12">

        {/* TOP: role badge */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionTiming.normal, delay: 0.15, ease: motionTiming.ease }}
        >
          <span className="hero-badge">AI Engineer · Graphic Designer</span>
        </motion.div>

        {/* BOTTOM: name + tagline + CTAs */}
        <div className="flex flex-col gap-5">

          {/* Name — clip reveal */}
          <div>
            <div className="overflow-hidden leading-none">
              <motion.h1
                className="hero-name block"
                data-text="MOHAMED"
                initial={{ y: "102%" }}
                animate={{ y: "0%" }}
                transition={{ duration: motionTiming.slow, delay: 0.28, ease: motionTiming.ease }}
              >
                MOHAMED
              </motion.h1>
            </div>
            <div className="overflow-hidden leading-none">
              <motion.h1
                className="hero-name block"
                data-text="SHAHEEM"
                initial={{ y: "102%" }}
                animate={{ y: "0%" }}
                transition={{ duration: motionTiming.slow, delay: 0.38, ease: motionTiming.ease }}
              >
                SHAHEEM
              </motion.h1>
            </div>
          </div>

          {/* Tagline + CTA row */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-5"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: motionTiming.normal, delay: 0.48, ease: motionTiming.ease }}
          >
            <p className="hero-tagline">
              Building intelligent software,<br />
              AI systems, and creative designs.
            </p>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-secondary hover-opacity-70"
              >
                Resume
              </a>
              <a href="#contact" className="hero-btn-primary hover-opacity-70">
                Contact
              </a>
              <GithubButton />
            </div>
          </motion.div>

          {/* Scroll indicator — CSS animation only */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: motionTiming.normal, ease: motionTiming.ease }}
          >
            <div className="hero-scroll-line" />
            <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-white/25">
              Scroll
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
