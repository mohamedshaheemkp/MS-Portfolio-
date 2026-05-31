import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiGithub, FiExternalLink, FiLayers, FiStar, FiCpu } from "react-icons/fi";
import { projects } from "../data/projects";
import ProjectTimeline from "../components/ProjectTimeline";

export default function PortfolioPage() {
  const project = projects.find(p => p.id === "ai-portfolio");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30">
      
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">
            <FiArrowLeft size={16} /> Back to Portfolio
          </Link>
          <div className="flex items-center gap-4">
            <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-bold uppercase">
              <FiExternalLink size={16} /> Live Site
            </a>
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors text-sm font-bold">
              <FiGithub size={16} /> Source Code
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6 inline-block">
              {project.category} Case Study
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              {project.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
          {project.metrics.map((m, i) => (
            <div key={i} className="px-6 text-center">
              <div className="text-4xl font-display font-bold text-white mb-2">{m.value}{m.suffix}</div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
          <div className="px-6 text-center">
            <div className="text-xl font-display font-bold text-white mb-2 flex items-center justify-center gap-2 flex-wrap">
              {project.tech.slice(0, 3).map(t => <span key={t} className="text-sm bg-white/10 px-2 py-1 rounded">{t}</span>)}
            </div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mt-3">Core Stack</div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-display font-bold mb-6 text-cyan-400">The Challenge</h3>
            <p className="text-zinc-400 leading-relaxed">
              In a sea of standard portfolio templates, establishing a unique personal brand requires going beyond basic layouts. The goal was to build a site that feels less like a document and more like a high-end, interactive software product, proving technical UI/UX capabilities instantly.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-display font-bold mb-6 text-purple-400">The Solution</h3>
            <p className="text-zinc-400 leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-[21/9] rounded-2xl border border-white/[0.08] overflow-hidden bg-black/60 shadow-2xl z-10 group">
            <img src={project.images[0]} alt="Portfolio Hero" loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
              <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-5 max-w-[300px]">
                <div className="font-mono text-[9px] text-[#6b6860] uppercase mb-2 flex items-center gap-2"><FiStar size={12} className="text-cyan-400"/> UI PHYSICS ENGINE</div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Utilizing Framer Motion's useScroll and useTransform hooks mapped to a virtual scroll context for fluid 60fps parallax depth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">System Architecture</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">{project.architecture}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {project.features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl">
                <div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 flex items-center justify-center rounded-xl mb-6">
                  {i === 0 ? <FiLayers size={24} /> : i === 1 ? <FiStar size={24} /> : <FiCpu size={24} />}
                </div>
                <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Development Timeline</h2>
        </div>
        <ProjectTimeline steps={project.timeline} />
      </section>

      <section className="py-24 px-6 bg-cyan-900/10 border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-6 text-white">The Results</h2>
          <p className="text-xl text-cyan-200/70 leading-relaxed mb-12">
            {project.results}
          </p>
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95">
            <FiGithub size={20} /> Explore the React code
          </a>
        </div>
      </section>

    </div>
  );
}
