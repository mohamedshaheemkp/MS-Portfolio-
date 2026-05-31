import { useEffect, useState } from "react";

// Spawn custom background drifting particles
const backgroundParticles = Array.from({ length: 40 });

export default function Background() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none overflow-hidden bg-[#050505]">
      
      {/* LAYER 1 & 2: Dark Base + Radial CSS Grid Overlay */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.85]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(circle at 50% 50%, black 50%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 50%, transparent 95%)"
        }}
      />

      {/* LAYER 3: Dynamic Glow Gradients (GPU-Accelerated CSS drifts) */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-60 pointer-events-none">
        
        {/* Cyan Glow (Drifting Top-Left) */}
        <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full animate-drift-cyan" style={{ background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)" }} />

        {/* Purple Glow (Drifting Bottom-Right) */}
        <div className="absolute -bottom-[15%] -right-[15%] w-[70vw] h-[70vw] rounded-full animate-drift-purple" style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)" }} />

        {/* Soft Yellow/Green Accent (Drifting Mid-Left) */}
        <div className="absolute top-[30%] left-[20%] w-[45vw] h-[45vw] rounded-full animate-drift-yellow" style={{ background: "radial-gradient(circle, rgba(232, 255, 0, 0.08) 0%, transparent 70%)" }} />
      </div>

      {/* LAYER 4: Noise Texture overlay (GPU-accelerated organic shimmer) */}
      <div 
        className="absolute -inset-[2.5%] w-[105%] h-[105%] opacity-[0.035] mix-blend-overlay pointer-events-none animate-noise"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />



      {/* LAYER 6: Floating Space Particles (Hardware-Accelerated upward drift) */}
      <div className="absolute inset-0 w-full h-full z-20 pointer-events-none overflow-hidden">
        {backgroundParticles.map((_, index) => {
          const size = Math.random() * 2 + 0.8;
          const left = Math.random() * 100;
          const duration = Math.random() * 25 + 15;
          const delay = Math.random() * -20; // negative delay ensures they are pre-populated on mount

          return (
            <span
              key={index}
              className="absolute rounded-full bg-cyan-400/20 animate-particle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `100%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

    </div>
  );
}
