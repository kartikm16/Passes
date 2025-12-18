import React, { useState, useEffect, useRef } from 'react';

const InteractiveFish = ({ id }) => {
  const [state, setState] = useState({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    targetX: Math.random() * window.innerWidth,
    targetY: Math.random() * window.innerHeight,
    rotation: 0
  });
  
  const mousePos = useRef({ x: -1000, y: -1000 });

  // useEffect(() => {
  //   // const handleMouseMove = (e) => {
  //   //   mousePos.current = { x: e.clientX, y: e.clientY };
  //   // };

  //   // window.addEventListener('mousemove', handleMouseMove);
  //   return () => window.removeEventListener('mousemove', handleMouseMove);
  // }, []);

  useEffect(() => {
    const move = () => {
      setState(prev => {
        let { x, y, targetX, targetY, rotation } = prev;
        
        // Calculate distance to mouse
        const distMouse = Math.sqrt(
          Math.pow(x - mousePos.current.x, 2) +
          Math.pow(y - mousePos.current.y, 2)
        );
        
        // If mouse is close, new target far away
        if (distMouse < 150) {
          targetX = x + (x - mousePos.current.x) * 2;
          targetY = y + (y - mousePos.current.y) * 2;
        } else if (Math.abs(x - targetX) < 10 && Math.abs(y - targetY) < 10) {
          // Wander randomly
          targetX = Math.random() * window.innerWidth;
          targetY = Math.random() * window.innerHeight;
        }

        const dx = targetX - x;
        const dy = targetY - y;
        const speed = distMouse < 150 ? 0.08 : 0.02;
        const newX = x + dx * speed;
        const newY = y + dy * speed;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        return {
          x: newX,
          y: newY,
          targetX,
          targetY,
          rotation: angle
        };
      });
    };

    const interval = setInterval(move, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-10 transition-transform duration-300 ease-out"
      style={{
        transform: `translate(${state.x}px, ${state.y}px) rotate(${state.rotation}deg)`,
      }}
    >
      <svg width="48" height="24" viewBox="0 0 48 24" fill="none"   style={{ transform: 'scaleX(-1)' }}
 xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <path
    d="M0 12C6 0 30 0 48 12C30 24 6 24 0 12Z"
    fill="rgba(100,255,218,0.6)"
    filter="url(#glow)"
  />
  <path
    d="M42 12L48 6V18L42 12Z"
    fill="rgba(100,255,218,0.8)"
  />
  <circle cx="10" cy="10" r="2" fill="white"/>
</svg>

    </div>
  );
};

export default InteractiveFish;
