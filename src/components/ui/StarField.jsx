import React, { useEffect, useRef } from 'react';

export function StarField() {
  const canvasRef = useRef(null);
  let stars = [];
  let shootingStars = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full screen and declare numberOfStars before it's used
    let numberOfStars;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Update numberOfStars based on new dimensions
      numberOfStars = Math.max(canvas.width, canvas.height) / 2;
      
      // Recreate stars when resized
      createStars();
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Create initial stars
    function createStars() {
      stars = [];
      for (let i = 0; i < numberOfStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          opacity: Math.random(),
          speed: Math.random() * 0.05
        });
      }
    }
    
    function createShootingStar() {
      const x = Math.random() * canvas.width * 0.8;
      const y = Math.random() * canvas.height * 0.3;
      
      shootingStars.push({
        x: x,
        y: y,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 10 + 10,
        angle: Math.PI / 4, // 45 degrees
        opacity: 1
      });
    }
    
    // Create a shooting star every few seconds
    const shootingStarInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        createShootingStar();
      }
    }, 2000);
    
    // Animation function
    function animate() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0a0a2a');
      gradient.addColorStop(1, '#1a1a4a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw stars
      stars.forEach(star => {
        // Make stars twinkle
        star.opacity += Math.random() * 0.01 - 0.005;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Slight movement of stars for parallax effect
        star.y += star.speed;
        
        // Reset stars that go off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Update and draw shooting stars
      shootingStars = shootingStars.filter(star => star.opacity > 0);
      
      shootingStars.forEach(star => {
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        
        const endX = star.x + Math.cos(star.angle) * star.length;
        const endY = star.y + Math.sin(star.angle) * star.length;
        
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Update position
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        
        // Fade out as it moves
        star.opacity -= 0.01;
        
        // Add a small trail
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - Math.cos(star.angle) * 20, star.y - Math.sin(star.angle) * 20);
        ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * 0.5})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(shootingStarInterval);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full z-0"
    />
  );
}