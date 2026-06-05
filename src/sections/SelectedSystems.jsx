import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Smart Folder Organizer",
    role: "Automation & System Design",
    tech: "Python / Watchdog / OS",
    image: "Smart Folder UI placeholder",
  },
  {
    id: "02",
    title: "Portfolio V2 System",
    role: "Frontend Architecture",
    tech: "React / Motion / Tailwind",
    image: "Portfolio visual placeholder",
  },
  {
    id: "03",
    title: "Cyberpunk Weather",
    role: "Experimental UI",
    tech: "WebGL / React",
    image: "Weather app placeholder",
  }
];

export default function SelectedSystems() {
  const [hoveredProject, setHoveredProject] = useState(null);
  
  // Mouse position for trailing image
  const mouseX = useSpring(0, { stiffness: 150, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 150, damping: 25 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      // Offset by half of image width/height
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 100);
    };
    
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <section className="w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-bg relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex items-start mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
            04 — Selected Systems
          </span>
        </div>

        <div className="w-full flex flex-col border-t border-border">
          {projects.map((project, idx) => (
            <div 
              key={project.id}
              role="button"
              tabIndex={0}
              className="group relative border-b border-border py-8 md:py-16 flex flex-col md:flex-row items-baseline gap-6 md:gap-12 cursor-pointer focus:outline-none focus:bg-surface"
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
              onFocus={() => setHoveredProject(idx)}
              onBlur={() => setHoveredProject(null)}
            >
              <div className="font-mono text-sm text-text-secondary w-8 transition-colors duration-300 group-hover:text-accent-blue">
                {project.id}
              </div>
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight text-text-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4">
                {project.title}
              </h3>
              <div className="md:ml-auto flex flex-col items-start md:items-end font-mono text-xs text-text-secondary uppercase tracking-widest gap-2">
                <span>{project.role}</span>
                <span className="text-text-dim">{project.tech}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trailing Image for Desktop */}
      <motion.div 
        className="fixed top-0 left-0 w-[300px] h-[200px] pointer-events-none z-50 overflow-hidden hidden md:block border border-border"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: hoveredProject !== null ? 1 : 0,
          scale: hoveredProject !== null ? 1 : 0.8,
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.3 } }}
      >
        <div className="w-full h-full bg-surface flex items-center justify-center p-4 text-center">
          <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">
            [ {hoveredProject !== null ? projects[hoveredProject].image : ""} ]
          </span>
        </div>
      </motion.div>
    </section>
  );
}
