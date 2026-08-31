import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { brandSystems, posterCollection, motionWorks, designDrawers } from '../data/designs'
import MotionPreview from '../components/MotionPreview'

export default function DesignCabinet() {
  const [activeDrawer, setActiveDrawer] = useState('brand-systems')
  const [activePlayingVideo, setActivePlayingVideo] = useState(null)

  const endlessToolsItem = motionWorks.find((m) => m.id === 'endless-tools-motion')

  const handleVideoHover = (id) => {
    // Single active video rule: only 1 video preview can be active
    setActivePlayingVideo(id)
  }

  const handleVideoLeave = () => {
    setActivePlayingVideo(null)
  }

  return (
    <section
      id="design-cabinet"
      className="relative w-full py-28 md:py-44 px-6 md:px-12 lg:px-24 bg-[#080808] overflow-hidden border-t border-[#1F1F1F]"
    >
      <div className="max-w-[1600px] mx-auto flex flex-col relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#1A1A1A] pb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[1px] bg-[#FF3B30]"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#888]">
                05 — CREATIVE ARCHIVE
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-white tracking-tighter">
              Design Cabinet
            </h2>
          </div>

          <Link
            to="/design"
            className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#F2F2F2] hover:text-[#FF3B30] border border-[#292929] hover:border-[#FF3B30] px-6 py-3 rounded-full bg-[#111] transition-all"
          >
            <span>EXPLORE FULL ARCHIVE</span>
            <span>→</span>
          </Link>
        </div>

        {/* Cabinet Drawer Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#222] bg-[#0E0E0E] rounded-xl p-2 gap-2 mb-16">
          {designDrawers.map((drawer) => {
            const isActive = activeDrawer === drawer.id
            return (
              <button
                key={drawer.id}
                onClick={() => setActiveDrawer(drawer.id)}
                className={`flex items-center justify-between p-5 rounded-lg transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#181818] border border-[#FF3B30]/40 text-white shadow-lg'
                    : 'bg-transparent border border-transparent text-[#666] hover:text-[#AAA]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs font-bold text-[#FF3B30]">
                    {drawer.number}
                  </span>
                  <span className="font-display font-bold uppercase tracking-wider text-sm md:text-base">
                    {drawer.title}
                  </span>
                </div>
                <span className="font-mono text-xs text-[#555] bg-[#111] px-2.5 py-1 rounded">
                  {drawer.count} ITEMS
                </span>
              </button>
            )
          })}
        </div>

        {/* Drawer Contents */}
        <div className="min-h-[500px] w-full">
          <AnimatePresence mode="wait">
            {/* DRAWER 01 — BRAND SYSTEMS */}
            {activeDrawer === 'brand-systems' && (
              <motion.div
                key="brand-systems"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-16"
              >
                {/* Tier A Featured Systems Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {brandSystems
                    .filter((b) => b.tier === 'TIER_A')
                    .map((item) => (
                      <div
                        key={item.id}
                        className="group relative flex flex-col border border-[#222] bg-[#0E0E0E] rounded-2xl overflow-hidden hover:border-[#FF3B30]/50 transition-all duration-500 shadow-2xl"
                      >
                        <div className="aspect-[16/10] w-full overflow-hidden bg-[#050505] relative">
                          <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                          />
                          <div className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-widest text-black bg-white px-2.5 py-1 rounded font-bold">
                            FEATURED SYSTEM
                          </div>
                        </div>

                        <div className="p-8 flex flex-col gap-4">
                          <div className="flex items-center justify-between border-b border-[#1F1F1F] pb-4">
                            <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight">
                              {item.title}
                            </h3>
                            <span className="font-mono text-xs text-[#888]">{item.year}</span>
                          </div>
                          <p className="font-mono text-xs text-[#A0A0A0] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Tier B Supporting Systems */}
                <div className="border-t border-[#1F1F1F] pt-12">
                  <span className="font-mono text-xs text-[#666] uppercase tracking-widest block mb-6">
                    SUPPORTING IDENTITIES & COLLATERAL
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {brandSystems
                      .filter((b) => b.tier === 'TIER_B')
                      .map((item) => (
                        <div
                          key={item.id}
                          className="border border-[#222] bg-[#0E0E0E] p-6 rounded-xl flex flex-col gap-4 hover:border-[#444] transition-colors"
                        >
                          <div className="aspect-video w-full overflow-hidden rounded bg-[#050505]">
                            <img
                              src={item.image}
                              alt={item.title}
                              loading="lazy"
                              className="w-full h-full object-cover opacity-80"
                            />
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-lg text-white uppercase">
                              {item.title}
                            </h4>
                            <span className="font-mono text-[10px] text-[#666] uppercase block mt-1">
                              {item.category} // {item.year}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* DRAWER 02 — POSTERS */}
            {activeDrawer === 'posters' && (
              <motion.div
                key="posters"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
              >
                {posterCollection.map((poster) => (
                  <div
                    key={poster.id}
                    className="group relative flex flex-col border border-[#222] bg-[#0E0E0E] rounded-xl overflow-hidden hover:border-[#4A7CFF]/50 transition-all duration-300"
                  >
                    <div className="aspect-[3/4] w-full overflow-hidden bg-[#050505] relative">
                      <img
                        src={poster.image}
                        alt={poster.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                      {poster.label && (
                        <div className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-widest text-white bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/20">
                          {poster.label}
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex items-center justify-between border-t border-[#1F1F1F]">
                      <h3 className="font-display font-bold text-base text-white uppercase">
                        {poster.title}
                      </h3>
                      <span className="font-mono text-xs text-[#666]">{poster.year}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* DRAWER 03 — MOTION */}
            {activeDrawer === 'motion' && (
              <motion.div
                key="motion"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-12"
              >
                {/* Featured Motion Piece: Endless Tools */}
                {endlessToolsItem && (
                  <div className="border border-[#4A7CFF]/40 bg-[#0A0D14] p-8 md:p-12 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
                    <div className="flex flex-col gap-4 max-w-xl z-10">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#4A7CFF] animate-pulse"></span>
                        <span className="font-mono text-xs text-[#4A7CFF] uppercase tracking-widest font-bold">
                          FEATURED MOTION PIECE // 30s
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight">
                        {endlessToolsItem.title}
                      </h3>

                      <p className="font-mono text-xs md:text-sm text-[#A0A0A0] leading-relaxed">
                        {endlessToolsItem.description}
                      </p>

                      <button
                        disabled
                        aria-disabled="true"
                        className="self-start mt-4 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-black bg-[#4A7CFF] hover:bg-white px-8 py-4 rounded font-bold transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(74,124,255,0.3)] min-h-[44px]"
                      >
                        <span>WATCH MOTION PIECE</span>
                        <span className="text-base">▶</span>
                      </button>
                    </div>

                    <div className="w-full lg:w-[45%] aspect-video bg-[#050505] rounded-xl overflow-hidden border border-[#222] relative group">
                      <img
                        src={endlessToolsItem.poster}
                        alt="Endless Tools Poster"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xl">
                          ▶
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Short Logo Motion Loops */}
                <div>
                  <span className="font-mono text-xs text-[#666] uppercase tracking-widest block mb-6">
                    LOGO MOTION PREVIEWS (HOVER / TAP TO PLAY)
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {motionWorks
                      .filter((m) => !m.isFeatured)
                      .map((item) => {
                        const isPlaying = activePlayingVideo === item.id

                        return (
                          <MotionPreview
                            key={item.id}
                            item={item}
                            isActive={isPlaying}
                            onActivate={() => handleVideoHover(item.id)}
                            onDeactivate={handleVideoLeave}
                          />
                        )
                      })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
