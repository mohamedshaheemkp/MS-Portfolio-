import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import FlowingMenu from "../components/FlowingMenu";
import ProgressiveBlur from "../components/ProgressiveBlur";
import posterPreview from "../assets/Poster/poster 1.webp";
import brandPreview from "../assets/branding/brand 4.webp";
import logoPreview from "../assets/Logo/logo 3.webp";

const cabinetItems = [
  { link: "/design?category=posters", text: "POSTERS", images: [posterPreview], number: "[01]" },
  { link: "/design?category=branding", text: "BRANDING", images: [brandPreview], number: "[02]" },
  { link: "/design?category=logos", text: "LOGOS", images: [logoPreview], number: "[03]" },
];

export default function DesignCabinet() {
  const containerRef = useRef(null);

  // Track scroll progress of the section relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const reduceMotion = useReducedMotion();

  // Translate DESIGN text left-to-right, CABINET text right-to-left
  const xDesign = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-12%", "12%"]);
  const xCabinet = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["12%", "-12%"]);

  return (
    <section 
      id="design-cabinet" 
      ref={containerRef}
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-bg py-24 md:min-h-screen"
    >
      <div className="pointer-events-none absolute inset-0 z-0 flex select-none flex-col items-center justify-center overflow-hidden opacity-30 leading-[0.85] md:opacity-100">
        <motion.span 
          style={{ x: xDesign, WebkitTextStroke: "1px #1A212B" }}
          className="whitespace-nowrap bg-clip-text text-[25vw] font-black text-transparent"
        >
          DESIGN
        </motion.span>
        <motion.span 
          style={{ x: xCabinet, WebkitTextStroke: "1px #1A212B" }}
          className="whitespace-nowrap bg-clip-text text-[25vw] font-black text-transparent"
        >
          CABINET
        </motion.span>
      </div>
      <div className="relative z-10 w-full max-w-[800px] px-6">
        <div className="mb-6 flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-text-secondary"><span className="h-px w-8 bg-border" /> 05 — DESIGN CABINET</div>
        <div className="relative flex h-[400px] w-full flex-col overflow-hidden border border-border bg-bg shadow-2xl md:h-[500px]">
          <FlowingMenu items={cabinetItems} />
        </div>
      </div>
      <ProgressiveBlur position="bottom" backgroundColor="#0A0D12" height="8rem" blurAmount="8px" />
    </section>
  );
}
