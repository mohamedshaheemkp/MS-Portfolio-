import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mohamed Shaheem"
          className="w-full h-full object-cover"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CYAN GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Small Intro */}
          <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm mb-8">
            AI Developer • Creative Technologist
          </p>

          {/* Main Heading */}
          <h1 className="text-white font-bold leading-[0.9] tracking-tight text-[3.5rem] sm:text-[5rem] lg:text-[7rem]">
            Building
            <br />

            <span className="text-cyan-400">
              intelligent
            </span>

            <br />
            digital
            <br />
            experiences.
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mt-10 max-w-2xl">
            I create AI-powered applications and Designs.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 mt-12">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              Explore Work
            </a>

            <a
              href="#contact"
              className="group flex items-center gap-3 text-white"
            >
              Contact Me

              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition">
                <ArrowDownRight className="group-hover:text-black transition" />
              </div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"></div>
    </section>
  );
}