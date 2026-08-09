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
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}
      aria-hidden="true"
      className="interactive-bg"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        /* Optimize on small screens to save battery & prevent iOS crashes */
        @media (max-width: 768px) {
          .interactive-bg .animated-orb-1,
          .interactive-bg .animated-orb-2,
          .interactive-bg .animated-orb-3,
          .interactive-bg .bg-particles div { filter: none !important; }
        }

        @keyframes float-orb-1 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          33%       { transform: translate3d(5%, -8%, 0) scale(1.12); }
          66%       { transform: translate3d(-5%, 5%, 0) scale(0.92); }
        }
        @keyframes float-orb-2 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          33%       { transform: translate3d(-8%, 5%, 0) scale(0.92); }
          66%       { transform: translate3d(8%, -5%, 0) scale(1.08); }
        }
        @keyframes float-orb-3 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          33%       { transform: translate3d(6%, 6%, 0) scale(1.08); }
          66%       { transform: translate3d(-6%, -6%, 0) scale(0.88); }
        }
        /* Use translate3d (GPU layer) instead of translate to avoid repaint */
        .animated-orb-1 { animation: float-orb-1 25s ease-in-out infinite; will-change: transform; }
        .animated-orb-2 { animation: float-orb-2 30s ease-in-out infinite reverse; will-change: transform; }
        .animated-orb-3 { animation: float-orb-3 28s ease-in-out infinite; will-change: transform; }

        @keyframes float-particle {
          0%   { transform: translate3d(0, 0, 0) scale(1); opacity: 0; }
          20%  { opacity: 0.7; }
          80%  { opacity: 0.7; }
          100% { transform: translate3d(0, -250px, 0) scale(0.5); opacity: 0; }
        }
      `}} />

      {/* Deep ambient tint */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#0C0604', opacity: 0.04 }} />

      {/* Animated Radial Orbs — GPU accelerated */}
      <div
        className="animated-orb-1"
        style={{
          position: 'absolute', top: '-20%', left: '-10%',
          width: '45vw', height: '45vw', minWidth: '500px', minHeight: '500px',
          borderRadius: '50%', opacity: 0.35, filter: 'blur(90px)',
          background: 'radial-gradient(circle, rgba(214,122,65,0.45) 0%, rgba(201,168,76,0.15) 60%, transparent 100%)',
          willChange: 'transform',
        }}
      />
      <div
        className="animated-orb-2"
        style={{
          position: 'absolute', top: '30%', right: '-15%',
          width: '45vw', height: '45vw', minWidth: '600px', minHeight: '600px',
          borderRadius: '50%', opacity: 0.28, filter: 'blur(110px)',
          background: 'radial-gradient(circle, rgba(201,168,76,0.4) 0%, rgba(214,122,65,0.15) 60%, transparent 100%)',
          willChange: 'transform',
        }}
      />
      <div
        className="animated-orb-3"
        style={{
          position: 'absolute', bottom: '-20%', left: '15%',
          width: '38vw', height: '38vw', minWidth: '550px', minHeight: '550px',
          borderRadius: '50%', opacity: 0.24, filter: 'blur(100px)',
          background: 'radial-gradient(circle, rgba(214,122,65,0.35) 0%, rgba(201,168,76,0.12) 60%, transparent 100%)',
          willChange: 'transform',
        }}
      />

      {/* Floating Particles — reduced to 6 */}
      <div className="bg-particles" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {particles.map((p) => (
          <div
            key={p.id}
            style={{
              position: 'absolute',
              borderRadius: '50%',
              backgroundColor: '#C9A84C',
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: 0,
              filter: 'blur(1px)',
              boxShadow: '0 0 8px rgba(201, 168, 76, 0.7)',
              animation: `float-particle ${p.duration}s linear ${p.delay}s infinite`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>
    </div>
  );
}