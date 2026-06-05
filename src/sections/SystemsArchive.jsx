import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SystemsArchive() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-bg overflow-hidden">

      <div className="flex items-center justify-center cursor-pointer group w-full px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate("/systems")}
      >
        {/* W */}
        <span className="text-[30vw] font-display font-black text-text-primary leading-[0.75] tracking-tighter mr-2 md:mr-6 drop-shadow-2xl">
          W
        </span>

        {/* The Folder Wrapper (Stationary) */}
        <div className="relative w-[22vw] h-[18vw] min-w-[140px] min-h-[110px] flex items-end justify-center z-10">
          {/* Shared Layout Element */}
          <motion.div 
            layoutId="registry-container"
            className="absolute inset-x-0 bottom-0 h-[100%] z-0"
          >
            {/* Back Plate of Folder */}
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-[#0F0F0F] to-[#1A1A1A] border-t border-l border-[#222] shadow-2xl"
              style={{ 
                clipPath: "polygon(0 0, 35% 0, 40% 15%, 100% 15%, 100% 100%, 0 100%)",
                borderRadius: "8px" 
              }}
            ></div>
          </motion.div>

          {/* Files / Projects (Inside) */}
          <div className="absolute inset-x-2 md:inset-x-4 bottom-2 h-[80%] z-10 flex flex-col items-center justify-end pointer-events-none">
            
            {/* File 3 (Back) */}
            <motion.div 
              animate={{ 
                y: isHovered ? "-45%" : "0%", 
                rotate: isHovered ? -6 : 0,
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 w-[95%] h-full bg-[#111] border border-[#333] shadow-md flex items-start p-3 overflow-hidden rounded-t-md"
            >
              <span className="font-mono text-[8px] md:text-[10px] text-text-secondary uppercase">03 Portfolio V2</span>
            </motion.div>

            {/* File 2 (Middle) */}
            <motion.div 
              animate={{ 
                y: isHovered ? "-25%" : "0%", 
                rotate: isHovered ? 3 : 0,
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 w-[90%] h-full bg-surface border border-[#444] shadow-md flex items-start p-3 overflow-hidden rounded-t-md"
            >
              <span className="font-mono text-[8px] md:text-[10px] text-text-secondary uppercase">02 Smart Folder</span>
            </motion.div>

            {/* File 1 (Front) */}
            <motion.div 
              animate={{ 
                y: isHovered ? "-10%" : "0%", 
                rotate: isHovered ? -2 : 0,
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 w-[85%] h-full bg-accent-blue border border-accent-blue/50 shadow-xl flex items-start p-3 overflow-hidden rounded-t-md"
            >
              <span className="font-mono text-[8px] md:text-[10px] text-white uppercase font-bold tracking-wider">01 AgriAI</span>
            </motion.div>
          </div>

          {/* Front Plate of Folder */}
          <motion.div 
            animate={{ 
              rotateX: isHovered ? -25 : 0,
              transformPerspective: 1000
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "bottom center" }}
            className="absolute inset-x-0 bottom-0 h-[85%] bg-gradient-to-bl from-[#1a1a1a] to-[#080808] border border-[#333] rounded-md shadow-[0_-5px_25px_rgba(0,0,0,0.8)] z-20 flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Subtle design element on folder front */}
            <div className="w-full flex justify-between items-center px-4 md:px-6 absolute top-4 opacity-50">
              <div className="w-2 h-2 rounded-full border border-text-dim"></div>
              <div className="w-12 h-[1px] bg-text-dim"></div>
            </div>
            
            <div className="flex flex-col items-center mt-4 md:mt-8">
              <span className="font-display font-black text-[#222] text-[3vw] md:text-[2vw] tracking-tighter">MS</span>
            </div>
            
            {/* Inner shadow/shine for 3D depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </motion.div>

        </div>

        {/* rk */}
        <span className="text-[30vw] font-display font-black text-text-primary leading-[0.75] tracking-tighter ml-2 md:ml-6 drop-shadow-2xl">
          rk
        </span>
      </div>
      
      {/* Instructional text below */}
      <motion.div 
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-24 font-mono text-xs uppercase tracking-widest text-text-secondary pointer-events-none"
      >
        Click to open archive
      </motion.div>

    </section>
  );
}
