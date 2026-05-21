import agriDash from "../assets/agri-dash.png";
import agriLive from "../assets/agri-live.png";
import heroImage from "../assets/hero.png";

export const projects = [
  {
    title: "AgriAI",
    category: "AI • Agriculture • Computer Vision",
    description: "AgriAI is an intelligent agriculture platform...",
    tech: ["YOLOv9", "PyTorch", "OpenCV", "React + Vite", "Python", "TensorFlow", "FastAPI"],

    // Replace the unsplash links with your imported images
    images: [
      agriDash,
      agriLive,
    ],

    github: "https://github.com/mohamedshaheemkp",
    live: "#",
  },

  {
    title: "AI Portfolio",
    category: "Creative Development • UI Engineering",
    description:
      "A futuristic personal portfolio focused on immersive interactions, cinematic motion, and modern AI-inspired visual experiences.",

    tech: [
      "React",
      "Tailwind",
      "Framer Motion",
      "Vite",
    ],

    images: [
      heroImage
    ],

    github:
      "https://github.com/mohamedshaheemkp",

    live: "#",
  },
];