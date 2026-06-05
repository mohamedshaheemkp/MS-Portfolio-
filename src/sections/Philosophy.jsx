import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const capabilities = [
  {
    title: "AI & Machine Learning",
    items: ["Computer Vision", "Deep Learning", "machine Learning Models", "AgriAI"]
  },
  {
    title: "Automation",
    items: [ "Workflow Systems", "Python Automation", "AI Agents"]
  },
  {
    title: "Backend Systems",
    items: ["Node.js", "System Architecture", "API Design", "Database Modeling"]
  },
  {
    title: "Graphic Design",
    items: ["Brand Systems", "Logo design", "UI Design", "Poster design"]
  },
  {
    title: "Frontend Engineering",
    items: ["React", "Framer Motion", "Tailwind CSS", "Interactive Experiences"]
  }
];

function CapabilityBlock({ title, items }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)} // Mobile toggle
      className="bg-surface border border-border p-8 md:p-12 cursor-pointer flex flex-col justify-end transition-colors duration-500 hover:border-white/20 hover:bg-[#111]"
      style={{ minHeight: "200px" }}
    >
      <motion.h3 layout className="text-2xl md:text-3xl font-display font-bold text-text-primary uppercase tracking-wide">
        {title}
      </motion.h3>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-8 mt-8 border-t border-white/5 flex flex-col gap-4">
              {items.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="font-mono text-xs md:text-sm uppercase tracking-widest text-text-secondary transition-colors duration-300 hover:text-white"
                >
                  <span className="text-accent-blue mr-3 opacity-50">↓</span> {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Philosophy() {
  return (
    <section className="w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-bg">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        
        {/* Right Column Grid */}
        <div className="md:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {capabilities.map((cap, idx) => (
              <div 
                key={idx} 
                // Make the last item span full width to anchor the grid beautifully
                className={idx === capabilities.length - 1 ? "md:col-span-2" : ""}
              >
                <CapabilityBlock title={cap.title} items={cap.items} />
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
