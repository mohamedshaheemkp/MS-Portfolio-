import { motion } from "framer-motion";
import { useRef } from "react";
import cinemImage from "../assets/cinem.webp";

// ─── timing constants ──────────────────────────────────────────────────────────
const T = {
  nameFirst: { delay: 0.1, duration: 1.0, ease: [0.16, 1, 0.3, 1] },
  nameSecond: { delay: 0.25, duration: 1.0, ease: [0.16, 1, 0.3, 1] },
  roles: { delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

export default function Hero() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full overflow-hidden select-none bg-[#0a0a0a]"
      style={{ height: "100svh", minHeight: "600px" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={cinemImage}
          alt="Mohamed Shaheem"
          className="w-full h-full object-cover"
          style={{
            objectPosition: "center 20%",
            filter: "brightness(0.7) contrast(1.1) saturate(1.1)",
          }}
          draggable={false}
          loading="eager"
        />
        {/* Gradients to darken edges for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 pointer-events-none mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.8)] pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-between pt-32 pb-8 md:pb-12">
        
        {/* Mid-Left Text */}
        <div className="flex-1 flex flex-col justify-center items-start mt-20 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={T.roles}
          >
            <h2 className="text-white/90 font-sans font-bold text-3xl md:text-4xl lg:text-5xl leading-tight max-w-sm" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}>
              AI Engineer &<br />Graphic Designer
            </h2>
          </motion.div>
        </div>

        {/* Bottom Text - Name Split */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-between gap-2 md:gap-0 mt-auto relative">
          
          {/* First Name */}
          <div className="leading-[0.85] w-full md:w-auto text-left relative z-20" style={{ perspective: "1000px" }}>
            <motion.h1
              className="font-display font-black"
              style={{
                fontSize: "clamp(40px, 10vw, 150px)",
                letterSpacing: "-0.04em",
                color: "rgba(255, 255, 255, 0.1)",
                background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.6) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.6))",
                WebkitTextStroke: "1.5px rgba(255,255,255,0.3)",
              }}
              initial={{ y: "100%", opacity: 0, rotateX: 20 }}
              animate={{ y: "0%", opacity: 1, rotateX: 0 }}
              transition={T.nameFirst}
            >
              Mohamed
            </motion.h1>
          </div>

          {/* Last Name */}
          <div className="flex flex-col items-center md:items-end w-full md:w-auto relative z-10 mt-2 md:mt-0">
            <div className="leading-[0.85] w-full flex justify-center md:justify-end" style={{ perspective: "1000px" }}>
              <motion.h1
                className="font-display font-black text-center md:text-right"
                style={{
                  fontSize: "clamp(40px, 10vw, 150px)",
                  letterSpacing: "-0.04em",
                  color: "rgba(255, 255, 255, 0.1)",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.6) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.6))",
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.3)",
                }}
                initial={{ y: "100%", opacity: 0, rotateX: 20 }}
                animate={{ y: "0%", opacity: 1, rotateX: 0 }}
                transition={T.nameSecond}
              >
                Shaheem
              </motion.h1>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
