import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Systems() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen bg-bg text-text-primary overflow-x-hidden"
    >
      <motion.div layoutId="registry-container" className="absolute inset-0 z-0 bg-[#080808]" />

      <div className="relative z-10 mx-auto min-h-screen w-full max-w-[1600px] px-6 pb-32 pt-24 md:px-12 md:pt-32 lg:px-24">
        {/* Header Navigation Bar */}
        <header className="mb-20 flex items-end justify-between border-b border-[#222] pb-8 md:mb-28">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#888]">
                LAB LOG // FILE SYSTEM
              </span>
            </div>
            <h1 className="text-4xl font-display font-black tracking-tighter md:text-7xl uppercase text-white">
              Systems Archive
            </h1>
          </div>
          <Link
            to="/"
            className="font-mono text-xs uppercase tracking-widest text-[#888] transition-colors hover:text-white border border-[#333] px-4 py-2 rounded-full bg-[#111]"
          >
            [ ESC × ]
          </Link>
        </header>

        {/* Table / File System List */}
        <div className="w-full">
          {/* Table Header Row (Desktop Only) */}
          <div className="hidden md:grid grid-cols-[80px_2.5fr_2fr_1.5fr_1fr_1.2fr] items-center px-6 py-4 border-b border-[#222] font-mono text-[10px] uppercase tracking-widest text-[#666]">
            <span>NO.</span>
            <span>SYSTEM / TITLE</span>
            <span>STACK</span>
            <span>ROLE</span>
            <span>YEAR</span>
            <span className="text-right">STATUS</span>
          </div>

          {/* Rows */}
          <div className="flex flex-col border-b border-[#222]">
            {projects.map((project, index) => {
              const isAgri = project.id === 'agri-ai'
              const isHovered = hoveredIndex === index

              return (
                <Link
                  key={project.id}
                  to={project.route}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onFocus={() => setHoveredIndex(index)}
                  onBlur={() => setHoveredIndex(null)}
                  className={`group relative flex flex-col md:grid md:grid-cols-[80px_2.5fr_2fr_1.5fr_1fr_1.2fr] items-start md:items-center px-6 py-8 md:py-10 border-t border-[#222] transition-all duration-300 ${
                    isAgri ? 'bg-[#0D121B]/40 border-l-2 border-l-[#14B8C4]' : 'hover:bg-[#111]'
                  }`}
                  style={{
                    opacity: hoveredIndex !== null && !isHovered ? 0.35 : 1,
                  }}
                >
                  {/* Number */}
                  <span className="font-mono text-xs text-[#666] mb-2 md:mb-0 group-hover:text-white transition-colors">
                    {project.number || `0${index + 1}`}
                  </span>

                  {/* Title & Subtitle */}
                  <div className="flex flex-col mb-4 md:mb-0 pr-4">
                    <div className="flex items-center gap-3">
                      <h2
                        className={`font-display font-black tracking-tight transition-transform duration-300 group-hover:translate-x-2 ${
                          isAgri
                            ? 'text-3xl md:text-5xl text-white'
                            : 'text-2xl md:text-4xl text-[#E5E5E5] group-hover:text-white'
                        }`}
                      >
                        {project.title}
                      </h2>
                      {isAgri && (
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#14B8C4] bg-[#14B8C4]/10 border border-[#14B8C4]/30 px-2 py-0.5 rounded">
                          FLAGSHIP
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs text-[#777] mt-1 line-clamp-1">
                      {project.subtitle}
                    </span>
                  </div>

                  {/* Stack */}
                  <div className="font-mono text-xs text-[#888] mb-3 md:mb-0 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="bg-[#151515] border border-[#262626] px-2 py-0.5 rounded text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Role */}
                  <span className="font-mono text-xs text-[#888] mb-2 md:mb-0">
                    {project.role || project.category}
                  </span>

                  {/* Year */}
                  <span className="font-mono text-xs text-[#666] mb-4 md:mb-0">
                    {project.year || '2026'}
                  </span>

                  {/* Status */}
                  <div className="md:text-right w-full md:w-auto">
                    <span
                      className={`inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border ${
                        project.status === 'ACTIVE'
                          ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
                          : 'text-blue-400 border-blue-500/30 bg-blue-500/10'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          project.status === 'ACTIVE'
                            ? 'bg-emerald-400 animate-pulse'
                            : 'bg-blue-400'
                        }`}
                      ></span>
                      {project.status}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-24 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-xs text-[#555] gap-4">
          <div>TOTAL SYSTEMS LOADED: {projects.length}</div>
          <div>REAL EVIDENCE ONLY // NO FABRICATED METRICS</div>
        </div>
      </div>
    </motion.main>
  )
}
