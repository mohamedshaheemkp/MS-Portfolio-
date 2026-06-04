import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import imgPoster from "../assets/poster 1.webp";
import imgBranding from "../assets/brand 3.webp";
import imgSocial from "../assets/cinem.webp";
import imgExp from "../assets/poster 4.webp";

const drawers = [
  { id: "posters", label: "Posters", num: "01", image: imgPoster },
  { id: "branding", label: "Branding", num: "02", image: imgBranding },
  { id: "social", label: "Social Media", num: "03", image: imgSocial },
  { id: "experiments", label: "Experiments", num: "04", image: imgExp },
];

export default function DesignCabinet() {
  const [hoveredDrawer, setHoveredDrawer] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen py-24 flex items-center justify-center bg-bg border-t border-border overflow-hidden">
      
      {/* Massive Background Typography */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden opacity-30 md:opacity-100 leading-[0.85] z-0">
        <span className="text-[25vw] font-display font-black text-transparent bg-clip-text whitespace-nowrap" style={{ WebkitTextStroke: "1px #1E1E1E" }}>
          DESIGN
        </span>
        <span className="text-[25vw] font-display font-black text-transparent bg-clip-text whitespace-nowrap" style={{ WebkitTextStroke: "1px #1E1E1E" }}>
          CABINET
        </span>
      </div>

      <div className="relative z-10 w-full max-w-[800px] px-6">
        <div className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-6 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-border"></span> Visual Archive
        </div>

        {/* The Cabinet Object */}
        <div className="w-full bg-bg border border-border shadow-2xl flex flex-col relative overflow-hidden">
          
          {drawers.map((drawer, idx) => {
            const isHovered = hoveredDrawer === drawer.id;
            
            return (
              <div 
                key={drawer.id}
                className="relative h-24 md:h-32 w-full border-b border-border last:border-b-0 cursor-pointer overflow-hidden group bg-[#0A0A0A]"
                onMouseEnter={() => setHoveredDrawer(drawer.id)}
                onMouseLeave={() => setHoveredDrawer(null)}
                onClick={() => navigate(`/design?category=${drawer.id}`)}
              >
                {/* The "Inside" of the Drawer (Image Sliver) */}
                <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-[#050505] border-r border-accent-blue/30 overflow-hidden">
                  <img src={drawer.image} alt={drawer.label} className="w-full h-full object-cover opacity-60 grayscale scale-110" />
                </div>

                {/* The Drawer Face (Slides Right) */}
                <motion.div 
                  layoutId={`cabinet-drawer-${drawer.id}`}
                  animate={{ x: isHovered ? 80 : 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-surface flex items-center px-6 md:px-12 border-l border-border z-10"
                >
                  <span className="font-mono text-xs md:text-sm text-text-secondary w-12 md:w-16 transition-colors duration-300 group-hover:text-accent-blue">
                    [{drawer.num}]
                  </span>
                  <span className="text-xl md:text-3xl font-display font-bold uppercase tracking-wide transition-colors duration-300 group-hover:text-white text-text-primary">
                    {drawer.label}
                  </span>
                  
                  {/* Handle indicator */}
                  <div className="ml-auto w-12 md:w-16 h-1 bg-border rounded-full opacity-50 group-hover:bg-white/20 transition-colors"></div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Mobile-only subtle pulse indicator */}
        <motion.div 
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-8 font-mono text-xs text-accent-blue uppercase tracking-widest md:hidden text-center pointer-events-none"
        >
          Tap a drawer to open
        </motion.div>
      </div>

    </section>
  );
}
