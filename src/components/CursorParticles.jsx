import { useEffect, useRef } from 'react';

const CursorParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    
    // Antigravity-style colors (Cyan, Purple, Blue, Red, Yellow)
    const colors = ["#00F5FF", "#8B5CF6", "#3b82f6", "#ef4444", "#eab308"];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const createParticle = (x, y) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x,
        y,
        // Random explosion velocity
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        life: 1, // Alpha transparency from 1 to 0
        color,
        size: Math.random() * 3 + 1.5 // Random size
      });
    };

    const handleMouseMove = (e) => {
      // Spawn 3 particles per mouse movement
      for (let i = 0; i < 3; i++) {
        createParticle(e.clientX, e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Clear canvas on every frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Move particle
        p.x += p.vx;
        p.y += p.vy;
        
        // Friction to slow them down smoothly
        p.vx *= 0.95;
        p.vy *= 0.95;
        
        // Fade out
        p.life -= 0.015;

        // Remove if invisible
        if (p.life <= 0) {
          particles.splice(i, 1);
          i--;
          continue;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.fill();
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default CursorParticles;
