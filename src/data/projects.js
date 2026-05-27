import agriDash from "../assets/agri-dash.webp";
import agriLive from "../assets/agri-live.webp";
import heroImage from "../assets/hero.webp";

export const projects = [
  {
    title: "AgriAI",
    category: "AI • Agriculture • Computer Vision",
    description:
      "AgriAI is an intelligent agriculture dashboard that combines YOLOv9 computer vision, real-time plant health monitoring, and automated disease detection to deliver actionable insights for modern farmers.",
    tech: ["YOLOv9", "PyTorch", "OpenCV", "React + Vite", "Python", "TensorFlow", "FastAPI"],
    images: [agriLive, agriDash],
    github: "https://github.com/mohamedshaheemkp/Agri-Ai.git",
    live: "#", // replace with the live AgriAI deployment URL when available
  },

  {
    title: "AI Portfolio",
    category: "Creative Development • UI Engineering",
    description:
      "A futuristic personal portfolio built with React, Tailwind, and Framer Motion, focused on immersive interactions, cinematic motion, and polished AI-inspired visuals.",
    tech: ["React", "Tailwind", "Framer Motion", "Vite"],
    images: [heroImage],
    github: "https://github.com/mohamedshaheemkp/MS-Portfolio-.git",
    live: "https://ms-portfolio-fawn.vercel.app/",
  },
];