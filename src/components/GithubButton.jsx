import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function GithubButton() {
  return (
    <motion.a
      href="https://github.com/mohamedshaheemkp"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-10 w-10 items-center justify-center"
      whileHover={{ y: -2 }}
      transition={{
        duration: 0.34,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Rotating Background */}
      <div
        className="
          absolute inset-0
          rounded-xl
          bg-zinc-900
          transition-transform duration-300
          group-hover:rotate-[18deg]
        "
      />

      {/* Foreground */}
      <div
        className="
          relative z-10
          flex h-full w-full items-center justify-center
          rounded-xl
          border border-white/10
          bg-black/20
          backdrop-blur-sm
          transition-colors duration-300
          group-hover:bg-white/5
        "
      >
        <Github
          size={18}
          className="
            text-white
            transition-opacity duration-300
            group-hover:opacity-90
          "
        />
      </div>
    </motion.a>
  );
}
