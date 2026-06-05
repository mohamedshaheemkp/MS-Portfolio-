import { motion } from "framer-motion";

// Import poster assets
import poster1 from "../assets/poster 1.webp";
import poster2 from "../assets/poster 2.webp";
import poster3 from "../assets/poster 3.webp";
import poster4 from "../assets/poster 4.webp";
import poster5 from "../assets/poster 5.webp";
import poster6 from "../assets/poster 6.webp";

export default function VisualExperiments() {
  return (
    <section className="w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-bg">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-16">
        <div className="flex items-start mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
            05 — Visual Experiments
          </span>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-8 aspect-video bg-surface border border-border flex items-center justify-center overflow-hidden group relative cursor-pointer"
          >
            <img src={poster2} alt="Poster Design 02" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105" />
            <span className="relative z-10 font-mono text-xs text-white bg-black/60 px-4 py-2 backdrop-blur-md transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 border border-white/10 uppercase tracking-widest shadow-xl">
              [ Poster Design 02 ]
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 aspect-square md:aspect-auto bg-surface border border-border flex items-center justify-center overflow-hidden group relative cursor-pointer"
          >
            <img src={poster1} alt="Poster Design 01" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105" />
            <span className="relative z-10 font-mono text-xs text-white bg-black/60 px-4 py-2 backdrop-blur-md transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 border border-white/10 uppercase tracking-widest shadow-xl">
              [ Graphic 01 ]
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 aspect-[4/3] bg-surface border border-border flex items-center justify-center overflow-hidden group relative cursor-pointer"
          >
            <img src={poster3} alt="Poster Design 03" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105" />
            <span className="relative z-10 font-mono text-xs text-white bg-black/60 px-4 py-2 backdrop-blur-md transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 border border-white/10 uppercase tracking-widest shadow-xl">
              [ Typography 03 ]
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 aspect-[4/3] bg-surface border border-border flex items-center justify-center overflow-hidden group relative cursor-pointer"
          >
            <img src={poster4} alt="Poster Design 04" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105" />
            <span className="relative z-10 font-mono text-xs text-white bg-black/60 px-4 py-2 backdrop-blur-md transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 border border-white/10 uppercase tracking-widest shadow-xl">
              [ Abstract 04 ]
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 aspect-video bg-surface border border-border flex items-center justify-center overflow-hidden group relative cursor-pointer"
          >
            <img src={poster5} alt="Poster Design 05" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105" />
            <span className="relative z-10 font-mono text-xs text-white bg-black/60 px-4 py-2 backdrop-blur-md transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 border border-white/10 uppercase tracking-widest shadow-xl">
              [ Graphic 05 ]
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 aspect-video bg-surface border border-border flex items-center justify-center overflow-hidden group relative cursor-pointer"
          >
            <img src={poster6} alt="Poster Design 06" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105" />
            <span className="relative z-10 font-mono text-xs text-white bg-black/60 px-4 py-2 backdrop-blur-md transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 border border-white/10 uppercase tracking-widest shadow-xl">
              [ Graphic 06 ]
            </span>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
