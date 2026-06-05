import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import StickyCard from "../components/StickyCard";
import ProgressiveBlur from "../components/ProgressiveBlur";

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
import imgLogo1 from "../assets/logo 1.webp";
import imgLogo2 from "../assets/logo 2.webp";
import imgLogo3 from "../assets/logo 3.webp";

const categoryData = {
  posters: {
    title: "Posters",
    desc: "Editorial Poster Collection",
    year: "2024 — Present",
    images: [imgPoster1, imgPoster2, imgPoster3, imgPoster4, imgPoster5, imgPoster6]
  },
  branding: {
    title: "Branding",
    desc: "Identity & Architecture",
    year: "2023 — Present",
    images: [imgBrand1, imgBrand2, imgBrand3, imgBrand4]
  },
  logos: {
    title: "Logos",
    desc: "Aesthetic Explorations",
    year: "2022 — Present",
    images: [imgLogo1, imgLogo2, imgLogo3]
  }
};

const categoryKeys = Object.keys(categoryData);

export default function DesignArchive() {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("category") || "posters";
  
  const [activeCategory, setActiveCategory] = useState(categoryId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeCategory]);

  const activeData = categoryData[activeCategory];
  
  // Find next category for the End of Collection block
  const currentIndex = categoryKeys.indexOf(activeCategory);
  const nextCategoryKey = categoryKeys[(currentIndex + 1) % categoryKeys.length];
  const nextCategoryData = categoryData[nextCategoryKey];

  // Map raw images into the item structure required by StickyCard
  const items = activeData.images.map((img, idx) => ({
    title: `${activeData.title} 0${idx + 1}`,
    category: activeData.title,
    year: activeData.year,
    image: img
  }));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen bg-[#050505] text-text-primary"
    >
      {/* Category Intro Section */}
      <div className="w-full min-h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-16 relative z-10">
        <div className="max-w-[1600px] w-full mx-auto flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-[10vw] font-display font-black uppercase tracking-tighter text-white leading-[0.85]">
              {activeData.title}
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col gap-2 mt-4 md:mt-8"
          >
            <p className="font-display text-xl md:text-3xl text-white/80 tracking-wide uppercase">
              {activeData.desc}
            </p>
            <p className="font-mono text-sm md:text-base text-accent-blue tracking-widest uppercase">
              {activeData.year}
            </p>
          </motion.div>
        </div>

        {/* Global Close Button */}
        <Link 
          to="/" 
          className="absolute top-12 right-6 md:right-12 lg:right-24 font-mono text-xs md:text-sm uppercase tracking-widest text-text-secondary hover:text-white transition-colors"
        >
          [ Close ✕ ]
        </Link>
      </div>

      {/* Sticky Stack Gallery Container - Skiper34 Logic */}
      <main className="relative flex w-full flex-col items-center gap-[10vh] px-4 pt-[50vh] pb-[50vh]">
        
        <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
          <span className="relative max-w-[15ch] text-xs uppercase tracking-widest text-white/40 leading-tight after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white/40 after:to-transparent after:content-['']">
            scroll down to see effect
          </span>
        </div>

        {items.map((item, i) => (
          <StickyCard 
            key={`${activeCategory}-${i}`}
            item={item} 
          />
        ))}

        <ProgressiveBlur 
          position="bottom" 
          backgroundColor="#050505" 
          height="6rem" 
          blurAmount="8px" 
        />
      </main>

      {/* End Of Gallery Transition Block */}
      <div className="relative w-full min-h-[50vh] flex flex-col items-center justify-center bg-[#050505] border-t border-[#111] py-32 z-20">
        <div className="flex flex-col items-center gap-12 text-center">
          <span className="font-mono text-xs text-text-dim uppercase tracking-widest">
            End of Collection
          </span>
          
          <button 
            onClick={() => setActiveCategory(nextCategoryKey)}
            className="group flex flex-col items-center gap-4 cursor-pointer"
          >
            <span className="font-mono text-sm text-accent-blue uppercase tracking-widest">
              Next Category →
            </span>
            <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter text-white group-hover:text-accent-blue transition-colors duration-500">
              {nextCategoryData.title}
            </h2>
          </button>
        </div>
      </div>

    </motion.div>
  );
}
