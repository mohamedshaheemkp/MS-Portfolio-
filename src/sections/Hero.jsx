import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Download, Code, Palette, Zap } from "lucide-react";
import heroImage from "../assets/hero.webp";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen overflow-hidden flex items-center pt-32 pb-16 px-6 md:px-12 lg:px-20 bg-[#0a0a0a]"
    >
      {/* Background Giant Typography */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-[18vw] font-black text-white/[0.03] tracking-tight leading-none"
        >
          CREATE
        </motion.h1>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Typography & CTA */}
          <div className="flex flex-col justify-center">
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-zinc-300 uppercase tracking-widest shadow-xl">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* Huge Heading */}
            <div className="mb-6 relative z-20">
              <div className="overflow-hidden mb-2">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.1] text-white"
                >
                  Creative
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-2">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.1]"
                >
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                    AI Engineer
                  </span>
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                  className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.1] text-white"
                >
                  <span className="text-zinc-500 font-normal italic pr-4">&</span>
                  Graphic Designer
                </motion.h1>
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="text-lg md:text-xl text-zinc-400 max-w-xl mb-12 font-light leading-relaxed"
            >
              Building futuristic digital experiences at the intersection of artificial intelligence and premium creative design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#projects"
                className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                View Selected Work
                <ArrowDownRight size={18} className="group-hover:rotate-[-45deg] transition-transform duration-300" />
              </a>

              <a href="/resume.pdf" download
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white backdrop-blur-lg hover:bg-white/10 transition-colors duration-300"
              >
                <Download size={18} />
                Download Résumé
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Floating Visuals */}
          <div className="relative h-[450px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
            
            {/* Radial Glow Behind Image */}
            <div className="absolute w-[80%] max-w-[500px] aspect-square bg-cyan-500/20 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />

            {/* Main Floating Image */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
              style={{ y: y1, willChange: "transform" }}
              className="relative z-10 w-full max-w-[320px] lg:max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900"
            >
              <img
                src={heroImage}
                alt="Mohamed Shaheem"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(10%) contrast(1.1)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-80" />
            </motion.div>

            {/* Glass Floating Card 1: Stats */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
              style={{ y: y2, willChange: "transform" }}
              className="absolute top-[10%] lg:top-[15%] right-0 lg:-left-[5%] backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-5 shadow-2xl z-20 group hover:bg-white/10 transition-colors duration-300 w-48"
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-cyan-500/20 rounded-2xl text-cyan-400">
                  <Code size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium">AI Systems Built</p>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">12+</h3>
                </div>
              </div>
            </motion.div>

            {/* Glass Floating Card 2: Design */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
              style={{ y: y1, willChange: "transform" }}
              className="absolute bottom-[20%] lg:bottom-[25%] left-0 lg:-right-[5%] backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-5 shadow-2xl z-20 group hover:bg-white/10 transition-colors duration-300 w-48"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-purple-500/20 rounded-2xl text-purple-400">
                  <Palette size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium">Design Projects</p>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">40+</h3>
                </div>
              </div>
            </motion.div>

            {/* Glass Floating Card 3: Performance */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1 }}
              className="absolute bottom-[5%] left-[20%] lg:left-[5%] backdrop-blur-xl bg-white/5 border border-white/10 rounded-full py-3 px-6 shadow-2xl z-20 flex items-center gap-3 hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-zinc-300">99.9% Performant</span>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom Soft transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
    </section>
  );
}
