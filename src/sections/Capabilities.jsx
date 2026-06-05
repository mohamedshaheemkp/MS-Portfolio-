import { useState } from "react";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "AI & Machine Learning",
    description: "Computer Vision, Predictive Modeling, and NLP.",
  },
  {
    title: "Frontend Engineering",
    description: "React, Framer Motion, and complex state management.",
  },
  {
    title: "Backend Systems",
    description: "Scalable APIs, automated workflows, and robust databases.",
  },
  {
    title: "Graphic Design",
    description: "Branding, Logo, Posters, and more.",
  },
];

export default function Capabilities() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-bg">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">


        <div className="flex flex-col w-full border-t border-border">
          {capabilities.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
            
            return (
              <motion.div
                key={item.id}
                role="button"
                tabIndex={0}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative border-b border-border py-8 md:py-12 cursor-pointer overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors duration-500"
                style={{
                  opacity: isOtherHovered ? 0.3 : 1,
                }}
              >
                {/* Background Hover Effect */}
                <div 
                  className="absolute inset-0 bg-surface origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: isHovered ? "scaleX(1)" : "scaleX(0)"
                  }}
                />

                <div className="relative z-10 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 pointer-events-none">
                  <span className="font-mono text-sm text-text-secondary transition-colors duration-300 group-hover:text-accent-blue">
                    {item.id}
                  </span>
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-text-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4">
                    {item.title}
                  </h3>
                </div>

                <div className="relative z-10 md:text-right pointer-events-none">
                  <p className="font-body text-text-secondary md:text-lg max-w-xs transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
