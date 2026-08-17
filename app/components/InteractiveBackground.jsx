'use client';
import React, { useEffect, useState } from 'react';

export default function InteractiveBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Reduced from 15 to 6 particles — dramatically reduces CPU on mobile
    const newParticles = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 2, // 2–5px
      duration: Math.random() * 20 + 20, // 20s to 40s (slower = less CPU)
      delay: Math.random() * 15,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden', contain: 'strict' }}
      aria-hidden="true"
      className="interactive-bg"
    >
      {/* Deep ambient tint */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#0C0604', opacity: 0.02 }} />

      {/* Static lightweight radial gradients with GPU caching */}
      <div
        style={{
          position: 'absolute', top: '-15%', left: '-10%',
          width: '50vw', height: '50vw',
          borderRadius: '50%', opacity: 0.18,
          background: 'radial-gradient(circle, rgba(214,122,65,0.3) 0%, rgba(201,168,76,0.08) 50%, transparent 80%)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute', top: '35%', right: '-10%',
          width: '45vw', height: '45vw',
          borderRadius: '50%', opacity: 0.15,
          background: 'radial-gradient(circle, rgba(201,168,76,0.25) 0%, rgba(214,122,65,0.08) 50%, transparent 80%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}