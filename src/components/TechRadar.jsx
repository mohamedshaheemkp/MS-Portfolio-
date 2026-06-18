import { motion } from "framer-motion";

const techNodes = {
  default: ["React", "Python", "FastAPI", "TensorFlow"],
  ai: ["OpenCV", "YOLO", "TensorFlow", "FastAPI"],
  auto: ["Watchdog", "Python", "SQLite", "Tkinter"],
  frontend: ["React", "Vite", "Motion", "Tailwind"],
  design: ["Figma", "Illustrator", "Photoshop", "Brand Design"]
};

const projectNames = {
  default: "CORE STACK",
  ai: "AGRIAI",
  auto: "SMART ORGANIZER",
  frontend: "PORTFOLIO V2",
  design: "DESIGN CABINET"
};

export default function TechRadar({ activeProject }) {
  const projectKey = activeProject || "default";
  const nodes = techNodes[projectKey] || techNodes.default;
  const projectName = projectNames[projectKey] || projectNames.default;

  const radius = 130; 
  
  const getPosition = (index, projKey) => {
    // Add a slight rotation offset per project to trigger a rearrange animation
    const offsetAngles = {
      default: 0,
      ai: Math.PI / 4,
      auto: -Math.PI / 4,
      frontend: Math.PI / 6,
      design: -Math.PI / 6
    };
    const offset = offsetAngles[projKey] || 0;
    // Top-left, top-right, bottom-right, bottom-left
    const baseAngles = [-3*Math.PI/4, -Math.PI/4, Math.PI/4, 3*Math.PI/4];
    const angle = baseAngles[index % baseAngles.length] + offset;
    
    // Vary distance slightly to make it feel more organic
    const distanceOffset = (index % 2 === 0) ? 0 : 20;
    const finalRadius = radius + distanceOffset;

    return {
      x: Math.cos(angle) * finalRadius,
      y: Math.sin(angle) * finalRadius
    };
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-[400px]">
      {/* SVG Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
        {nodes.map((_, i) => {
          const pos = getPosition(i, projectKey);
          return (
            <motion.line
              key={`line-${i}`}
              x1="50%"
              y1="50%"
              stroke="#333"
              strokeWidth="1"
              animate={{ 
                x2: `calc(50% + ${pos.x}px)`, 
                y2: `calc(50% + ${pos.y}px)`,
                opacity: 1 
              }}
              initial={{ x2: "50%", y2: "50%", opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          );
        })}
      </svg>

      {/* Central Node */}
      <motion.div 
        className="absolute z-20 flex items-center justify-center bg-[#0a0a0a] border border-accent-blue/50 rounded-full w-28 h-28 md:w-36 md:h-36 text-center shadow-[0_0_30px_rgba(77,124,254,0.15)] shadow-accent-blue/20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [-3, 3] }}
        transition={{
          scale: { duration: 0.6, ease: "backOut" },
          opacity: { duration: 0.5 },
          y: { duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
        }}
      >
        <span className="font-mono text-[10px] md:text-[11px] text-white uppercase tracking-wider font-bold p-2">
          {projectName}
        </span>
      </motion.div>

      {/* Outer Nodes */}
      {nodes.map((tech, i) => {
        const pos = getPosition(i, projectKey);
        return (
          <motion.div
            key={`node-${i}`}
            className="absolute z-10 flex items-center justify-center bg-[#050505] border border-[#222] rounded-full px-4 py-2 md:px-6 md:py-3 whitespace-nowrap shadow-lg shadow-black"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ 
              x: pos.x, 
              y: pos.y, 
              opacity: 1 
            }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ y: [-3, 3] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: i * 0.2 }}
            >
              <span className="font-mono text-[9px] md:text-[11px] uppercase text-text-secondary tracking-widest transition-colors duration-300">
                {tech}
              </span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
