'use client';

import { useEffect, useState, useCallback } from 'react';

interface Snowflake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  sway: number;
}

interface SnowParticlesProps {
  count?: number;
}

export function SnowParticles({ count = 50 }: SnowParticlesProps) {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  const createSnowflake = useCallback((id: number, startY?: number): Snowflake => ({
    id,
    x: Math.random() * 100,
    y: startY ?? Math.random() * -20,
    size: Math.random() * 4 + 2,
    speed: Math.random() * 1 + 0.5,
    opacity: Math.random() * 0.6 + 0.4,
    sway: Math.random() * 2 - 1,
  }), []);

  useEffect(() => {
    const initial = Array.from({ length: count }, (_, i) => createSnowflake(i, Math.random() * 100));
    setSnowflakes(initial);
  }, [count, createSnowflake]);

  useEffect(() => {
    let animationId: number;
    
    const animate = () => {
      setSnowflakes(prev => 
        prev.map(flake => {
          const newY = flake.y + flake.speed;
          const newX = flake.x + Math.sin(newY * 0.05) * flake.sway * 0.1;
          
          if (newY > 105) {
            return createSnowflake(flake.id, -5);
          }
          
          return {
            ...flake,
            y: newY,
            x: newX < 0 ? 100 : newX > 100 ? 0 : newX,
          };
        })
      );
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [createSnowflake]);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${flake.x}%`,
            top: `${flake.y}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </div>
  );
}
