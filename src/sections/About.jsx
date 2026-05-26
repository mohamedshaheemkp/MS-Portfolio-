import { motion } from "framer-motion";
import { Cpu, Layers, Terminal, BookOpen, Activity } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-40 px-6 md:px-12 lg:px-20 overflow-hidden bg-black">
      
      {/* Radial glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.015] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#e8ff00]/[0.01] blur-[160px] pointer-events-none" />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-20"
      >
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>01</span>
        <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--muted)' }}>About</span>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        
        {/* ================= BLOCK 1: LARGE STATEMENT ================= */}
        <div className="max-w-5xl mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-[1.05] tracking-tight text-4xl md:text-6xl lg:text-[4.8rem] text-white"
          >
            Converting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#e8ff00] italic">Ideas </span> into  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8ff00] to-violet-500 italic">Reality</span>.
          </motion.h2>
        </div>

        {/* ================= BLOCK 2: SMALL BIOGRAPHY ================= */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start mb-32 pb-32 border-b border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-xs tracking-widest text-[#6b6860] uppercase block mb-4">// THE PERSPECTIVE</span>
            <h3 className="font-display font-black text-2xl md:text-3xl text-white group-hover:italic transition-all duration-300 leading-tight">
              Create Unique Designs , and Machine Learning Projects.
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="space-y-6 text-[#9b9892] text-base md:text-lg leading-relaxed font-sans"
          >
            <p>
              I live at the overlap of machine learning, modern frontend systems, and premium design rules. Currently Completed my Artificial Intelligence & Data Science engineering from MEA ENGG College Malappuram in Kerala
            </p>
            <p>
              I Target Achieve end user Desired design , for E-Commerce and Marketing , Using Design and Building AI Models.
            </p>
          </motion.div>
        </div>

        {/* ================= BLOCK 3: EXPERIENCE TIMELINE ================= */}
        <div className="max-w-7xl mx-auto mb-32 pb-32 border-b border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 text-left"
          >
            <span className="font-mono text-xs tracking-widest text-[#6b6860] uppercase block mb-4">// MILESTONES</span>
            <h3 className="font-display font-black text-3xl md:text-5xl text-white">Experience Timeline</h3>
          </motion.div>

          <div className="relative border-l border-white/10 pl-6 md:pl-12 ml-4 space-y-12">
            {[
              {
                year: "2025 - 2026 - Present",
                title: "AI Research & Creative Engineering",
                desc: "Training custom deep learning models (YOLOv9, PyTorch) while architecting high-end creative interfaces. Built AgriAI, a computer vision crop diagnostics dashboard for Farmers Detecting diseases,weeds,insects in crop fields."
              }
            ].map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Pulsing circular node dot */}
                <div className="absolute -left-[31px] md:-left-[55px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black border-2 border-white/20 group-hover:border-cyan-400 transition-all duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-white group-hover:bg-cyan-400 animate-pulse" />
                </div>

                {/* Timeline glass card container */}
                <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 md:p-8 hover:scale-[1.01] hover:border-white/15 hover:shadow-2xl transition-all duration-500">
                  <span className="font-mono text-xs tracking-widest uppercase text-cyan-400 block mb-2">{milestone.year}</span>
                  <h4 className="font-display font-black text-xl md:text-2xl text-white mb-4 group-hover:italic transition-all duration-300">{milestone.title}</h4>
                  <p className="text-sm leading-relaxed text-[#9b9892] font-sans">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= BLOCK 4: SKILL ECOSYSTEM ================= */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 text-left"
          >
            <span className="font-mono text-xs tracking-widest text-[#6b6860] uppercase block mb-4">// Flow </span>
            <h3 className="font-display font-black text-3xl md:text-5xl text-white">Skill Ecosystem</h3>
          </motion.div>

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
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
                  className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-cyan-400/20 rounded-2xl p-6 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group"
                >
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
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
      
      {/* Bottom Soft transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
    </section>
  );
}
