import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";

import imgPoster1 from "../assets/poster 1.webp";
import imgPoster2 from "../assets/poster 2.webp";
import imgPoster3 from "../assets/poster 3.webp";
import imgPoster4 from "../assets/poster 4.webp";
import imgPoster5 from "../assets/poster 5.webp";
import imgPoster6 from "../assets/poster 6.webp";
import imgBrand1 from "../assets/brand 1.webp";
import imgBrand2 from "../assets/brand 2.webp";
import imgBrand3 from "../assets/brand 3.webp";
import imgBrand4 from "../assets/brand 4.webp";
import imgCinem from "../assets/cinem.webp";

const categoryData = {
  posters: {
    num: "01",
    title: "Posters",
    desc: "A collection of editorial poster designs focusing on typographic hierarchy and abstract compositions.",
    images: [imgPoster1, imgPoster2, imgPoster3, imgPoster4, imgPoster5, imgPoster6]
  },
  branding: {
    num: "02",
    title: "Branding",
    desc: "Identity systems and brand architectures built for scalability and modern digital presence.",
    images: [imgBrand1, imgBrand2, imgBrand3, imgBrand4]
  },
  social: {
    num: "03",
    title: "Social Media",
    desc: "High-impact visual creatives engineered for engagement and platform-specific constraints.",
    images: [imgCinem, imgBrand4, imgPoster3]
  },
  experiments: {
    num: "04",
    title: "Experiments",
    desc: "Unrestrained visual studies, creative coding outputs, and aesthetic explorations.",
    images: [imgPoster4, imgPoster5, imgBrand2, imgBrand1]
  }
};

export default function DesignArchive() {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("category") || "posters";
  
  const [activeCategory, setActiveCategory] = useState(categoryId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeCategory]);

  const activeData = categoryData[activeCategory];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen bg-bg text-text-primary overflow-x-hidden"
    >
      {/* The Expanded Drawer Header (Shared Element) */}
      <motion.div 
        layoutId={`cabinet-drawer-${activeCategory}`}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-surface border-b border-border py-24 md:py-32 px-6 md:px-12 lg:px-24 flex flex-col relative z-10 shadow-2xl"
      >
        <div className="flex justify-between items-start w-full max-w-[1600px] mx-auto">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-sm text-accent-blue uppercase tracking-widest flex items-center gap-4">
              <span className="w-8 h-[1px] bg-accent-blue/50"></span>
              [{activeData.num}] Design Cabinet
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tight text-text-primary">
              {activeData.title}
            </h1>
            <p className="max-w-xl text-text-secondary mt-4 font-body text-lg md:text-xl leading-relaxed">
              {activeData.desc}
            </p>
          </div>

          <Link to="/" className="font-mono text-sm uppercase tracking-widest text-text-secondary hover:text-white transition-colors flex items-center gap-2 mt-2">
            <span>[ Close ✕ ]</span>
          </Link>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-0 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-24 flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Sticky Index Navigation */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-12 flex flex-col gap-6">
            <span className="font-mono text-xs uppercase tracking-widest text-text-secondary mb-6 border-b border-border pb-6">
              Index / Navigate
            </span>
            {Object.entries(categoryData).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`text-left font-mono text-sm uppercase tracking-widest transition-colors ${activeCategory === key ? 'text-accent-blue' : 'text-text-secondary hover:text-white'}`}
              >
                [{cat.num}] {cat.title}
              </button>
            ))}
          </div>
        </aside>

        {/* Editorial Image Composition */}
        <div className="flex-1 flex flex-col gap-32 md:gap-48 pb-32">
          {activeData.images.map((img, idx) => {
            // Create a pseudo-random editorial rhythm
            const isHero = idx === 0 || idx === 3;
            const isOffsetLeft = idx === 1 || idx === 4;
            const isOffsetRight = idx === 2 || idx === 5;

            return (
              <motion.div 
                key={`${activeCategory}-${idx}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`flex w-full ${isHero ? 'justify-center' : isOffsetLeft ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`relative overflow-hidden border border-border bg-[#0A0A0A] shadow-2xl group cursor-pointer ${isHero ? 'w-full md:w-[90%]' : 'w-full md:w-[65%]'}`}>
                  <img 
                    src={img} 
                    alt={`${activeData.title} Fig ${idx + 1}`} 
                    className="w-full h-auto object-cover opacity-60 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" 
                  />
                  
                  {/* Subtle metadata tag */}
                  <div className="absolute bottom-6 left-6 font-mono text-[10px] text-white bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl">
                    Fig. 0{idx + 1} // {activeData.title}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.div>
  );
}
