import React, { useState, useEffect, useRef } from 'react';

const PersistentFish = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const targetPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      setPos((prev) => {
        const dx = targetPos.current.x - prev.x;
        const dy = targetPos.current.y - prev.y;

        const newX = prev.x + dx * 0.05;
        const newY = prev.y + dy * 0.05;

        // Calculate rotation based on movement
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
          setRotation(angle);
        }

        return { x: newX, y: newY };
      });

      requestAnimationFrame(animate);
    };

    const frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[100] transition-transform duration-75 ease-out"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) rotate(${rotation}deg)`,
      }}
    >
      <div className="relative">
        <svg
          width="40"
          height="20"
          viewBox="0 0 40 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10C5 0 25 0 40 10C25 20 5 20 0 10Z"
            fill="rgba(66, 153, 225, 0.8)"
          />
          <path
            d="M35 10L40 5V15L35 10Z"
            fill="rgba(66, 153, 225, 0.9)"
          />
          <circle cx="8" cy="8" r="1.5" fill="white" />
        </svg>

        <div className="absolute top-0 left-0 w-full h-full blur-md bg-blue-400/20 -z-10 rounded-full" />
      </div>
    </div>
  );
};

export default PersistentFish;
