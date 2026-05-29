import { useEffect, useRef } from 'react';

const CursorParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Antigravity signature colors
    const colors = ["#00F5FF", "#8B5CF6", "#3b82f6", "#ef4444", "#eab308"];
    let particles = [];
    
    // Mouse state with a larger radius for the reveal effect
    let mouse = { x: -1000, y: -1000, radius: 250 };

    // 3D Engine Constants
    const perspective = 1000;
    let rotation = 0;
    let sphereRadius = 800;

    const initParticles = () => {
      particles = [];
      // Lower particle count for a highly refined, premium, and cinematic feel
      const numberOfParticles = window.innerWidth < 768 ? 2000 : 4000; 
      // Giant sphere to fill the full webpage
      sphereRadius = Math.max(window.innerWidth, window.innerHeight) * 0.8;
      
      // Generate particles in a spherical 3D distribution
      for (let i = 0; i < numberOfParticles; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        
        // Randomize radius slightly to create a thick shell
        const r = sphereRadius * Math.cbrt(Math.random() * 0.8 + 0.2); 

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        const color = colors[Math.floor(Math.random() * colors.length)];
        const isLarge = Math.random() > 0.95;
        const baseSize = isLarge ? Math.random() * 2 + 2 : Math.random() * 1 + 0.5;
        
        particles.push({
          x, y, z, 
          ox: x, oy: y, oz: z, 
          baseSize,
          color,
          // Subtler opacity for elegant ambient depth
          alpha: Math.random() * 0.2 + 0.1,
          currentAlpha: 0 // Start completely invisible
        });
      }
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      
      initParticles();
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      // Removed automatic rotation; the globe is now stationary until interacted with
      const sinR = Math.sin(rotation);
      const cosR = Math.cos(rotation);
      
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Rotate original 3D coordinates around Y axis
        let rotX = p.ox * cosR - p.oz * sinR;
        let rotZ = p.oz * cosR + p.ox * sinR;
        let rotY = p.oy;
        
        // Project to 2D to check mouse interaction
        const scaleBase = perspective / (perspective + rotZ);
        const screenX = centerX + rotX * scaleBase;
        const screenY = centerY + rotY * scaleBase;
        
        const dx = mouse.x - screenX;
        const dy = mouse.y - screenY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let targetX = rotX;
        let targetY = rotY;
        let targetZ = rotZ;
        let targetSize = p.baseSize;
        let targetAlpha = 0;

        // 3D Magnetic Bulge & Reveal effect
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          // Push particles outwards from mouse
          targetX += (dx / dist) * force * -80;
          targetY += (dy / dist) * force * -80;
          targetZ += force * -100; 
          targetSize += force * 3;
          targetAlpha = force; // Target full opacity when near mouse
        }

        // Elegant, slow cinematic spring easing
        p.x += (targetX - p.x) * 0.04;
        p.y += (targetY - p.y) * 0.04;
        p.z += (targetZ - p.z) * 0.04;
        p.currentAlpha += (targetAlpha - p.currentAlpha) * 0.03;
        
        // Optimization: skip drawing entirely if invisible
        if (p.currentAlpha < 0.01) continue;

        // Final 2D projection
        const scale = perspective / (perspective + p.z);
        const finalX = centerX + p.x * scale;
        const finalY = centerY + p.y * scale;
        const finalSize = Math.max(0.1, targetSize * scale);
        
        // Don't draw if behind camera
        if (p.z < -perspective) continue;

        ctx.beginPath();
        ctx.arc(finalX, finalY, finalSize, 0, Math.PI * 2);
        
        // Depth-based opacity
        const depthAlpha = Math.max(0.1, Math.min(1, 1 - (p.z / sphereRadius)));
        ctx.fillStyle = p.color;
        
        // Apply the revealing opacity
        ctx.globalAlpha = Math.min(1, p.alpha * depthAlpha * p.currentAlpha * 2); 
        
        if (dist < mouse.radius) {
          ctx.shadowBlur = 10 * scale;
          ctx.shadowColor = p.color;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[2] pointer-events-none w-full h-full"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};

export default CursorParticles;
