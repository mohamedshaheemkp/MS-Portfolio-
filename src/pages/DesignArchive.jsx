import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import { brandSystems, posterCollection, motionWorks, designDrawers } from '../data/designs'

export default function DesignArchive() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryQuery = searchParams.get('category')
  const defaultCategory = designDrawers.some((d) => d.id === categoryQuery)
    ? categoryQuery
    : 'brand-systems'

  const [activeTab, setActiveTab] = useState(defaultCategory)
  const [activePlayingVideo, setActivePlayingVideo] = useState(null)
  const [selectedPoster, setSelectedPoster] = useState(null)

  const endlessToolsItem = motionWorks.find((m) => m.id === 'endless-tools-motion')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeTab])

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    setSearchParams({ category: tabId })
  }

  // Handle ESC key for poster modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedPoster) {
        setSelectedPoster(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedPoster])

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative min-h-screen bg-[#080808] text-[#F2F2F2] selection:bg-[#FF3B30] selection:text-white pb-32"
    >
      {/* Top Navigation Header */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#222] bg-[#080808]/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-12 lg:px-24">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF3B30] animate-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white font-bold">
              DESIGN CABINET // ARCHIVE
            </span>
          </div>
          <Link
            to="/"
            className="font-mono text-xs uppercase tracking-widest text-[#A0A0A0] transition-colors hover:text-white border border-[#333] px-4 py-2 rounded-full bg-[#111]"
          >
            [ ESC × ]
          </Link>
        </div>
      </header>

      {/* Main Page Title Header */}
      <section className="px-6 pt-36 pb-16 md:px-12 lg:px-24 max-w-[1600px] mx-auto border-b border-[#1A1A1A]">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black uppercase text-white tracking-tighter leading-none">
            CREATIVE WORK
          </h1>
          <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#A0A0A0] max-w-2xl">
            Graphic design, brand systems, kinetic typography, and motion art direction.
          </p>
        </div>

        {/* Cabinet Tab Drawers */}
        <div className="mt-12 flex flex-wrap gap-4 border-t border-[#1F1F1F] pt-8">
          {designDrawers.map((drawer) => {
            const isActive = activeTab === drawer.id
            return (
              <button
                key={drawer.id}
                onClick={() => handleTabChange(drawer.id)}
                className={`font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full border transition-all cursor-pointer min-h-[44px] ${
                  isActive
                    ? 'bg-[#FF3B30] text-white border-[#FF3B30] font-bold shadow-[0_0_20px_rgba(255,59,48,0.3)]'
                    : 'bg-[#111] text-[#A0A0A0] border-[#292929] hover:border-white'
                }`}
              >
                {drawer.number} {drawer.title} ({drawer.count})
              </button>
            )
          })}
        </div>
      </section>

      {/* Drawer Contents Container */}
      <section className="px-6 py-16 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <AnimatePresence mode="wait">
          {/* TAB 01 — BRAND SYSTEMS */}
          {activeTab === 'brand-systems' && (
            <motion.div
              key="tab-brand-systems"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-20"
            >
              {brandSystems.map((item, idx) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 border-b border-[#1A1A1A] pb-16 items-center"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#FF3B30]">0{idx + 1} //</span>
                      <span className="font-mono text-xs text-[#888] uppercase tracking-widest">
                        {item.category}
                      </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tight">
                      {item.title}
                    </h2>

                    <p className="font-mono text-xs md:text-sm text-[#A0A0A0] leading-relaxed">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 border-t border-[#1F1F1F] pt-6 font-mono text-xs text-[#888]">
                      <div>
                        <span className="block text-[10px] text-[#555] uppercase">ROLE</span>
                        <span className="text-white font-bold">{item.role}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-[#555] uppercase">YEAR</span>
                        <span className="text-white font-bold">{item.year}</span>
                      </div>
                    </div>
                  </div>

                  <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#222] bg-[#0E0E0E]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* TAB 02 — POSTERS */}
          {activeTab === 'posters' && (
            <motion.div
              key="tab-posters"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {posterCollection.map((poster) => (
                <div
                  key={poster.id}
                  onClick={() => setSelectedPoster(poster)}
                  className="group border border-[#222] bg-[#0E0E0E] rounded-xl overflow-hidden cursor-pointer hover:border-[#4A7CFF]/60 transition-all duration-300"
                >
                  <div className="aspect-[3/4] w-full overflow-hidden bg-[#050505] relative">
                    <img
                      src={poster.image}
                      alt={poster.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {poster.label && (
                      <div className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-widest text-white bg-black/80 px-2.5 py-1 rounded border border-white/20">
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

          {/* TAB 03 — MOTION */}
          {activeTab === 'motion' && (
            <motion.div
              key="tab-motion"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-12"
            >
              {/* Featured Endless Tools */}
              {endlessToolsItem && (
                <div className="border border-[#4A7CFF]/40 bg-[#0E0E0E] p-8 md:p-12 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
                  <div className="flex flex-col gap-4 max-w-xl">
                    <span className="font-mono text-xs text-[#4A7CFF] uppercase tracking-widest font-bold">
                      FEATURED MOTION PIECE // 30s
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tight">
                      {endlessToolsItem.title}
                    </h2>
                    <p className="font-mono text-xs md:text-sm text-[#A0A0A0] leading-relaxed">
                      {endlessToolsItem.description}
                    </p>
                    <button
                      disabled
                      aria-disabled="true"
                      className="self-start mt-4 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-black bg-[#4A7CFF] hover:bg-white px-8 py-4 rounded font-bold transition-all min-h-[44px]"
                    >
                      <span>WATCH FULL MOTION</span>
                      <span>▶</span>
                    </button>
                  </div>
                  <div className="w-full lg:w-[45%] aspect-video bg-[#050505] rounded-xl overflow-hidden border border-[#222]">
                    <img
                      src={endlessToolsItem.poster}
                      alt="Endless Tools"
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                </div>
              )}

              {/* Logo Motion Previews */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {motionWorks
                  .filter((m) => !m.isFeatured)
                  .map((item) => {
                    const isPlaying = activePlayingVideo === item.id

                    return (
                      <div
                        key={item.id}
                        onMouseEnter={() => setActivePlayingVideo(item.id)}
                        onMouseLeave={() => setActivePlayingVideo(null)}
                        onClick={() => setActivePlayingVideo(item.id)}
                        className="group border border-[#222] bg-[#0E0E0E] rounded-xl overflow-hidden hover:border-[#4A7CFF]/50 transition-all duration-300 cursor-pointer"
                      >
                        <div className="aspect-video w-full bg-[#050505] relative overflow-hidden">
                          <img
                            src={item.poster}
                            alt={item.title}
                            className={`w-full h-full object-cover transition-all duration-500 ${
                              isPlaying ? 'scale-105 opacity-100' : 'scale-100 opacity-70'
                            }`}
                          />
                          <div className="absolute top-4 right-4 font-mono text-[9px] text-white bg-black/80 px-2 py-1 rounded">
                            {item.duration}
                          </div>
                        </div>

                        <div className="p-6 flex flex-col gap-2 border-t border-[#1F1F1F]">
                          <h3 className="font-display font-bold text-xl text-white uppercase">
                            {item.title}
                          </h3>
                          <p className="font-mono text-xs text-[#888]">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Poster Fullscreen Lightbox Modal */}
      {selectedPoster && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8">
          <div className="relative max-w-3xl max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setSelectedPoster(null)}
              className="absolute -top-12 right-0 font-mono text-xs text-white uppercase tracking-widest min-h-[44px]"
            >
              [ CLOSE × ]
            </button>
            <img
              src={selectedPoster.image}
              alt={selectedPoster.title}
              className="max-h-[80vh] w-auto object-contain rounded-lg border border-[#333]"
            />
            <div className="mt-4 font-mono text-xs text-[#A0A0A0] uppercase tracking-widest text-center">
              {selectedPoster.title} // {selectedPoster.category} ({selectedPoster.year})
            </div>
          </div>
        </div>
      )}
    </motion.main>
  )
}
