import { motion } from "framer-motion";
import { Cpu, Layers, Terminal, BookOpen } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import Parallax from "../components/Parallax";
import Magnetic from "../components/Magnetic";
import MagnetLines from "../components/MagnetLines";

export default function About() {
  return (
    <section id="about" className="relative py-40 px-6 md:px-12 lg:px-20 overflow-hidden bg-black">
      
      {/* Radial glows with scrolling parallax */}
      <Parallax speed={-0.15} className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.015] blur-[150px] pointer-events-none" />
      <Parallax speed={0.08} className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#e8ff00]/[0.01] blur-[160px] pointer-events-none" />

      {/* Oversized background typography for high-end editorial feel */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
        <Parallax speed={-0.08}>
          <h1 className="text-[20vw] font-black text-white/[0.012] tracking-tighter leading-none font-display">
            CONCEPT
          </h1>
        </Parallax>
      </div>

      {/* Floating glass accent elements */}
      <motion.div
        animate={{ y: [-12, 12, -12], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-[18%] right-[8%] w-24 h-24 rounded-2xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-xl pointer-events-none z-0"
      />
      <motion.div
        animate={{ y: [15, -15, 15], rotate: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute bottom-[25%] left-[5%] w-36 h-36 rounded-full border border-cyan-400/[0.02] bg-cyan-400/[0.004] backdrop-blur-xl pointer-events-none z-0"
      />

      {/* Section label */}
      <ScrollReveal direction="left" distance={30} duration={0.7} className="flex items-center gap-4 mb-20 relative z-10">
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>01</span>
        <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--muted)' }}>About</span>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= BLOCK 1: LARGE STATEMENT + MAGNET LINES ================= */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center mb-36 relative">
          <ScrollReveal variant="skew" distance={100} duration={1.1}>
            <h2 className="font-display font-black leading-[1.05] tracking-tight text-4xl md:text-6xl lg:text-[4.8rem] text-white">
              Converting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#e8ff00] italic">Ideas </span> into  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8ff00] to-violet-500 italic">Reality</span>.
            </h2>
          </ScrollReveal>

          {/* Right blank space vector diagnostic grid */}
          <ScrollReveal variant="scale" delay={0.2} duration={1.2} className="flex justify-center lg:justify-end items-center relative pr-4">
            <div className="absolute w-72 h-72 rounded-full bg-cyan-500/[0.04] blur-3xl pointer-events-none" />
            <div className="absolute w-48 h-48 rounded-full bg-[#e8ff00]/[0.02] blur-2xl pointer-events-none" />

            <div className="relative z-10 bg-black rounded-3xl p-4">
              <MagnetLines
                rows={8}
                columns={8}
                containerSize="260px"
                lineColor="rgba(0, 240, 255, 0.28)"
                lineWidth="2px"
                lineHeight="16px"
                baseAngle={45}
              />
            </div>
          </ScrollReveal>
        </div>

        {/* ================= BLOCK 2: SMALL BIOGRAPHY ================= */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <ScrollReveal distance={70} duration={0.9}>
            <span className="font-mono text-xs tracking-widest text-[#6b6860] uppercase block mb-4">// THE PERSPECTIVE</span>
            <h3 className="font-display font-black text-2xl md:text-3xl text-white leading-tight">
              Create Unique Designs, and Machine Learning Projects.
            </h3>
          </ScrollReveal>
          
          <ScrollReveal delay={0.15} distance={70} duration={0.9} className="space-y-6 text-[#9b9892] text-base md:text-lg leading-relaxed font-sans">
            <p>
              I live at the overlap of machine learning, modern frontend systems, and premium design rules. Currently Completed my Artificial Intelligence &amp; Data Science engineering from MEA ENGG College Malappuram in Kerala
            </p>
            <p>
              I Target Achieve end user Desired design, for E-Commerce and Marketing, Using Design and Building AI Models.
            </p>
          </ScrollReveal>
        </div>

        {/* Dynamic Self-Drawing Line Divider */}
        <div className="relative w-full h-px bg-white/5 my-32">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent origin-center"
          />
        </div>


        {/* ================= BLOCK 3: EXPERIENCE TIMELINE ================= */}
        <div className="max-w-7xl mx-auto">
          <ScrollReveal distance={60} duration={0.9} className="mb-16 text-left">
            <span className="font-mono text-xs tracking-widest text-[#6b6860] uppercase block mb-4">// MILESTONES</span>
            <h3 className="font-display font-black text-3xl md:text-5xl text-white">Experience Timeline</h3>
          </ScrollReveal>

          <div className="relative border-l border-white/10 pl-6 md:pl-12 ml-4 space-y-12">
            {[
              {
                year: "2025 - 2026 - Present",
                title: "AI Research & Creative Engineering",
                desc: "Training custom deep learning models (YOLOv9, PyTorch) while architecting high-end creative interfaces. Built AgriAI, a computer vision crop diagnostics dashboard for Farmers Detecting diseases,weeds,insects in crop fields."
              }
            ].map((milestone, idx) => (
              <ScrollReveal key={idx} variant="blur" delay={idx * 0.12} distance={50} duration={1} className="relative group">
                {/* Pulsing circular node dot wrapped in Magnetic pull */}
                <div className="absolute -left-[31px] md:-left-[55px] top-1.5 z-20">
                  <Magnetic strength={0.4}>
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-black border-2 border-white/20 group-hover:border-cyan-400 transition-all duration-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-white group-hover:bg-cyan-400 animate-pulse" />
                    </div>
                  </Magnetic>
                </div>

                {/* Timeline glass card container */}
                <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 md:p-8 hover:scale-[1.015] hover:-translate-y-1.5 hover:border-white/15 hover:shadow-[0_0_30px_rgba(0,240,255,0.08)] transition-all duration-600">
                  <span className="font-mono text-xs tracking-widest uppercase text-cyan-400 block mb-2">{milestone.year}</span>
                  <h4 className="font-display font-black text-xl md:text-2xl text-white mb-4 transition-all duration-600 group-hover:-skew-x-8 inline-block origin-left">{milestone.title}</h4>
                  <p className="text-sm leading-relaxed text-[#9b9892] font-sans">{milestone.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Dynamic Self-Drawing Line Divider */}
        <div className="relative w-full h-px bg-white/5 my-32">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e8ff00]/15 to-transparent origin-center"
          />
        </div>

        {/* ================= BLOCK 4: SKILL ECOSYSTEM ================= */}
        <div className="max-w-7xl mx-auto">
          <ScrollReveal distance={60} duration={0.9} className="mb-16 text-left">
            <span className="font-mono text-xs tracking-widest text-[#6b6860] uppercase block mb-4">// Flow </span>
            <h3 className="font-display font-black text-3xl md:text-5xl text-white">Skill Ecosystem</h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI & ML",
                icon: Cpu,
                color: "text-cyan-400 border-cyan-500/10",
                skills: ["YOLOv9 ", "PyTorch ", "TensorFlow", "Computer Vision"]
              },
              {
                title: "Visual Direction",
                icon: BookOpen,
                color: "text-pink-400 border-pink-500/10",
                skills: ["Photoshop ","Illustrator ","Logo Design","Poster Design", "Vector Design"]
              },
              {
                title: "Creative",
                icon: Layers,
                color: "text-[#e8ff00] border-[#e8ff00]/10",
                skills: ["React + Hooks", "Framer Motion", "Tailwind CSS v4", "Three.js WebGL", "Vite Config"]
              },
              {
                title: "Infrastructure",
                icon: Terminal,
                color: "text-violet-400 border-violet-500/10",
                skills: ["FastAPI Engine", "Python Dev", "SQL Schema", "Docker Build", "REST APIs"]
              },
              
            ].map((eco, idx) => {
              const Icon = eco.icon;
              // Map dynamic premium glows based on index
              const glowClasses = [
                "hover:shadow-[0_0_35px_rgba(34,211,238,0.12)] hover:border-cyan-400/30",
                "hover:shadow-[0_0_35px_rgba(244,114,182,0.12)] hover:border-pink-400/30",
                "hover:shadow-[0_0_35px_rgba(232,255,0,0.12)] hover:border-[#e8ff00]/30",
                "hover:shadow-[0_0_35px_rgba(167,139,250,0.12)] hover:border-violet-400/30"
              ];
              const dynamicGlow = glowClasses[idx % glowClasses.length];

              return (
                <ScrollReveal key={idx} variant="scale" delay={idx * 0.1} distance={40} duration={0.9} className={`bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:scale-[1.03] hover:-translate-y-2.5 transition-all duration-600 flex flex-col justify-between group ${dynamicGlow}`}>
                  <div>
                    <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                      <div className={`p-2.5 rounded-lg bg-white/5 ${eco.color}`}>
                        <Icon size={18} />
                      </div>
                      <h4 className="font-mono text-xs tracking-wider font-bold text-white uppercase">{eco.title}</h4>
                    </div>
                    <div className="flex flex-col gap-2">
                      {eco.skills.map((skill) => (
                        <span key={skill} className="font-mono text-xs text-[#9b9892] py-1 border-b border-white/[0.02] last:border-0">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
      
      {/* Bottom Soft transition & Glow Divider */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black backdrop-blur-[2px] pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px w-full overflow-hidden pointer-events-none z-20">
        <div 
          className="h-px w-[65%] mx-auto bg-gradient-to-r from-transparent via-[#a855f7]/25 to-transparent" 
          style={{ boxShadow: "0 0 10px rgba(168, 85, 247, 0.4)" }}
        />
      </div>
    </section>
  );
}
