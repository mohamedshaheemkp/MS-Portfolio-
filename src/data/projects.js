import agriDash from "../assets/agri-dash.webp";
import agriLive from "../assets/agri-live.webp";
import heroImage from "../assets/hero.webp";

export const projects = [
  {
    id: "agri-ai",
    title: "AgriAI",
    category: "AI",
    subtitle: "Real-time Crop Disease Detection System",
    description: "Designed and developed an AI-powered crop disease detection system using YOLOv9 and PyTorch, enabling real-time leaf analysis via live camera feed. Integrated a FastAPI backend with a React dashboard to surface actionable plant health insights — reducing manual inspection time for farmers by delivering instant, high-confidence disease alerts.",
    tech: ["YOLOv9", "PyTorch", "OpenCV", "React + Vite", "Python", "TensorFlow", "FastAPI"],
    images: [agriLive, agriDash],
    github: "https://github.com/mohamedshaheemkp/Agri-Ai.git",
    live: "#",
    featured: true,
    metrics: [
      { label: "Accuracy", value: "98.4", suffix: "%" },
      { label: "Inference Time", value: "12", suffix: "ms" },
      { label: "Diseases Detected", value: "15", suffix: "+" }
    ],
    timeline: [
      { step: "Idea & Planning", desc: "Identified the need for real-time crop analysis to prevent yield loss." },
      { step: "Dataset Collection", desc: "Curated and augmented a dataset of 50,000+ diseased leaf images." },
      { step: "Model Training", desc: "Trained YOLOv9 on a customized PyTorch pipeline for high-speed edge inference." },
      { step: "Deployment", desc: "Deployed the model via FastAPI to stream analysis directly to a React frontend." }
    ],
    features: [
      { title: "Live Camera Stream", desc: "Processes 30fps video feeds to detect diseases dynamically." },
      { title: "High Precision Alerts", desc: "Generates push alerts immediately when a threshold of disease is met." },
      { title: "Historical Analytics", desc: "Stores detection data in a timeseries DB for seasonal trend analysis." }
    ],
    architecture: "The core engine runs a compiled YOLOv9 instance using PyTorch on GPU hardware. Video feeds from edge devices are processed by OpenCV, passed to the model, and the bounding box outputs are streamed via WebSockets to a React client dashboard.",
    results: "Reduced average response time to disease outbreaks by 7 days. Demonstrated 98.4% accuracy across 15 distinct crop diseases in real-world testing environments."
  },
  {
    id: "smart-folder-organizer",
    title: "Smart Folder Organizer",
    category: "Automation",
    subtitle: "Intelligent File Management System",
    description: "Built an intelligent file management system in Python that monitors directories in real time using Watchdog and automatically categorizes files into structured folders based on type and custom rules. Solved the challenge of recursive organization loops and large-directory performance.",
    tech: ["Python", "Tkinter", "Watchdog", "File Handling", "Automation", "OS Module"],
    images: [],
    github: "https://github.com/mohamedshaheemkp/smart-folder-organizer",
    live: "#",
    featured: true,
    metrics: [
      { label: "Files Sorted", value: "∞", suffix: "" },
      { label: "Detection Speed", value: "<1", suffix: "s" },
      { label: "Supported Types", value: "40", suffix: "+" }
    ],
    timeline: [
      { step: "Problem Identification", desc: "Downloads folders constantly getting cluttered, wasting hours of manual sorting." },
      { step: "Watchdog Integration", desc: "Implemented cross-platform file system event monitoring without polling overhead." },
      { step: "Rule Engine Setup", desc: "Created dynamic routing algorithms based on regex and extension matching." },
      { step: "GUI Development", desc: "Built a Tkinter dashboard for users to define custom routing rules." }
    ],
    features: [
      { title: "Zero Intervention", desc: "Runs silently in the background catching file events instantly." },
      { title: "Duplicate Handling", desc: "Smartly prevents overwriting by appending unique hashes to duplicates." },
      { title: "Custom Mapping", desc: "Route any file extension to any specific directory on your drive." }
    ],
    architecture: "A multithreaded Python application utilizing the Watchdog library to bind to OS-level filesystem events (FSEvents/inotify). Event handlers queue file paths which are processed by an asynchronous router to prevent locking the main thread.",
    results: "Completely eliminated manual file sorting for daily operations. Currently tracking over 10,000 file movements with 0% data corruption or loss."
  },
  {
    id: "ai-portfolio",
    title: "AI Portfolio",
    category: "Web Development",
    subtitle: "Cinematic Personal Branding",
    description: "Engineered a cinematic personal portfolio from the ground up using React, Tailwind, and Framer Motion — focused on immersive micro-interactions, scroll-linked parallax depth, and a premium AI-studio aesthetic. Every animation and layout decision was crafted intentionally.",
    tech: ["React", "Tailwind", "Framer Motion", "Vite"],
    images: [heroImage],
    github: "https://github.com/mohamedshaheemkp/MS-Portfolio-.git",
    live: "https://ms-portfolio-fawn.vercel.app/",
    featured: true,
    metrics: [
      { label: "Lighthouse Score", value: "98", suffix: "" },
      { label: "Animation Nodes", value: "120", suffix: "+" },
      { label: "Load Time", value: "<1", suffix: "s" }
    ],
    timeline: [
      { step: "Concept Design", desc: "Studied Linear, Vercel, and modern AI startups to establish a dark-mode visual language." },
      { step: "Architecture", desc: "Set up a Vite + React scaffolding with Lenis for smooth scrolling." },
      { step: "Animation Implementation", desc: "Used Framer Motion to map scroll progress to complex 3D transforms." },
      { step: "Optimization", desc: "Lazy-loaded heavy assets and reduced reflows to maintain 60fps." }
    ],
    features: [
      { title: "Scroll Parallax", desc: "Layers move at independent speeds to simulate true depth." },
      { title: "Magnetic Interactions", desc: "Buttons and links dynamically attract the cursor using spring physics." },
      { title: "Custom Routing", desc: "Seamless page transitions via Framer Motion AnimatePresence." }
    ],
    architecture: "Built on a modern React 19 stack powered by Vite. The UI is exclusively styled with Tailwind CSS v4. Animation orchestration relies heavily on Framer Motion's useScroll and useSpring hooks attached to a Lenis virtual scroll instance.",
    results: "Achieved a premium, stutter-free experience across desktop and mobile, resulting in increased engagement and significantly higher perceived technical competency."
  }
];