import agriDash from "../assets/agri-dash.webp";
import agriLive from "../assets/agri-live.webp";
import heroImage from "../assets/hero.webp";

export const projects = [
  {
    title: "AgriAI",
    category: "AI • Agriculture • Computer Vision",
    description:
      "Designed and developed an AI-powered crop disease detection system using YOLOv9 and PyTorch, enabling real-time leaf analysis via live camera feed. Integrated a FastAPI backend with a React dashboard to surface actionable plant health insights — reducing manual inspection time for farmers by delivering instant, high-confidence disease alerts.",
    tech: ["YOLOv9", "PyTorch", "OpenCV", "React + Vite", "Python", "TensorFlow", "FastAPI"],
    images: [agriLive, agriDash],
    github: "https://github.com/mohamedshaheemkp/Agri-Ai.git",
    live: "#",
  },

  {
    title: "AI Portfolio",
    category: "Creative Development • UI Engineering",
    description:
      "Engineered a cinematic personal portfolio from the ground up using React, Tailwind, and Framer Motion — focused on immersive micro-interactions, scroll-linked parallax depth, and a premium AI-studio aesthetic. Every animation, transition, and layout decision was crafted intentionally to communicate creative and technical identity.",
    tech: ["React", "Tailwind", "Framer Motion", "Vite"],
    images: [heroImage],
    github: "https://github.com/mohamedshaheemkp/MS-Portfolio-.git",
    live: "https://ms-portfolio-fawn.vercel.app/",
  },

  {
    title: "Smart Folder Organizer",
    category: "Automation • Python • Productivity",
    description:
      "Built an intelligent file management system in Python that monitors directories in real time using Watchdog and automatically categorizes files into structured folders based on type and custom rules. Solved the challenge of recursive organization loops and large-directory performance — resulting in a stable, zero-intervention automation tool that eliminates manual file sorting entirely.",
    tech: ["Python", "Tkinter", "Watchdog", "File Handling", "Automation", "OS Module"],
    images: [],
    github: "https://github.com/mohamedshaheemkp/smart-folder-organizer",
    live: "#",
  },
];