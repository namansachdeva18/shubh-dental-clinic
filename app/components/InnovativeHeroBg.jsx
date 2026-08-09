'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function InnovativeHeroBg() {
  const { scrollY } = useScroll();

  // Raw Parallax effects tied to scroll
  const rawY1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const rawY2 = useTransform(scrollY, [0, 1000], [0, 250]);
  const rawY3 = useTransform(scrollY, [0, 1000], [0, -150]);

  // Apply physics-based smoothing to completely eliminate scroll stutter on mobile
  const smoothConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y1 = useSpring(rawY1, smoothConfig);
  const y2 = useSpring(rawY2, smoothConfig);
  const y3 = useSpring(rawY3, smoothConfig);

  return (
    <div className="innovative-bg-wrapper" aria-hidden="true">

      {/* 1. Animated Liquid Gradient Blobs */}
      <div className="blob-container">
        <motion.div
          className="liquid-blob blob-1"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="liquid-blob blob-2"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -60, 0],
            y: [0, 60, 0],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* 2. Infinite Animated Grid */}
      <div className="animated-grid" />

      {/* 3. Floating 3D Glassmorphism Elements (Parallax) */}
      <motion.div className="glass-shape shape-tooth" style={{ y: y1 }}
        animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
        {/* Simple Clean Molar */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 12 22 C 10 22 9 18 9 15 C 6 15 4 12 4 8 C 4 5 6 3 8.5 3 C 10 3 11 4 12 5 C 13 4 14 3 15.5 3 C 18 3 20 5 20 8 C 20 12 18 15 15 15 C 15 18 14 22 12 22 Z M 12 15 V 10" />
        </svg>
      </motion.div>

      <motion.div className="glass-shape shape-implant" style={{ y: y2 }}
        animate={{ y: [0, 15, 0], rotate: [5, -5, 5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}>
        {/* Dental Implant with screw */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9c0-2.8 2-5 4-5 1.5 0 2.5 1 3 2 .5-1 1.5-2 3-2 2 0 4 2.2 4 5 0 3-2.5 4.5-4 6H9C7.5 13.5 6 12 6 9z" />
          <path d="M10 15v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6" />
          <path d="M9 17h6" />
          <path d="M9 19h6" />
          <path d="M10 21h4" />
        </svg>
      </motion.div>

      <motion.div className="glass-shape shape-braces" style={{ y: y3 }}
        animate={{ y: [0, 20, 0], rotate: [5, -10, 5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>
        {/* Smile with Braces */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 9c3.5 5.5 12.5 5.5 16 0" />
          <rect x="6" y="10" width="2" height="3" rx="0.5" />
          <rect x="11" y="11" width="2" height="3" rx="0.5" />
          <rect x="16" y="10" width="2" height="3" rx="0.5" />
        </svg>
      </motion.div>

      {/* 4. Falling Particles */}
      <div className="particles" suppressHydrationWarning>
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${(i * 17) % 100}%`,
            animationDuration: `${(i % 5) * 2 + 10}s`,
            animationDelay: `${(i % 3) * 1.5}s`
          }} />
        ))}
      </div>

      <style>{`
        .innovative-bg-wrapper {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
          background: #FAF9F6;
        }

        /* 1. LIQUID BLOBS */
        .blob-container {
          position: absolute;
          inset: 0;
          filter: blur(80px);
          opacity: 0.6;
        }
        .liquid-blob {
          position: absolute;
          border-radius: 50%;
          mix-blend-mode: multiply;
          will-change: transform;
        }
        .blob-1 {
          width: 650px;
          height: 650px;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.45) 0%, rgba(184, 89, 34, 0.25) 50%, transparent 80%);
          top: -100px;
          left: -150px;
        }
        .blob-2 {
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(201, 168, 76, 0.4) 0%, rgba(214, 122, 65, 0.2) 60%, transparent 80%);
          bottom: -100px;
          right: 10%;
        }

        /* 2. ANIMATED GRID */
        .animated-grid {
          position: absolute;
          inset: -100px; /* Make it slightly larger so edges don't show when moving */
          background-size: 60px 60px;
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
          mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
          transform: perspective(500px) rotateX(60deg) scale(2.5) translateY(-100px);
          animation: gridMove 5s linear infinite;
          will-change: transform;
        }
        @keyframes gridMove {
          0% { transform: perspective(500px) rotateX(60deg) scale(2.5) translateY(-100px); }
          100% { transform: perspective(500px) rotateX(60deg) scale(2.5) translateY(-40px); }
        }

        /* 3. GLASSMORPHISM SHAPES */
        .glass-shape {
          position: absolute;
          width: 120px;
          height: 120px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08), inset 0 0 20px rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(214, 122, 65, 0.6);
        }
        .glass-shape svg {
          width: 50px;
          height: 50px;
        }
        .shape-tooth {
          top: 15%;
          left: 5%;
          border-radius: 40px;
        }
        .shape-implant {
          bottom: 30%;
          left: 45%;
          width: 90px;
          height: 90px;
          border-radius: 30px;
        }
        .shape-braces {
          top: 25%;
          right: 5%;
          transform: rotate(15deg);
        }

        /* 4. PARTICLES */
        .particles {
          position: absolute;
          inset: 0;
        }
        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: linear-gradient(135deg, #D67A41, #C9A84C);
          border-radius: 50%;
          opacity: 0.3;
          animation: floatParticle linear infinite;
          will-change: transform, opacity;
        }
        @keyframes floatParticle {
          0% { transform: translateY(100vh) scale(0); opacity: 0; }
          10% { opacity: 0.5; transform: translateY(80vh) scale(1); }
          90% { opacity: 0.5; transform: translateY(20vh) scale(1); }
          100% { transform: translateY(-10vh) scale(0); opacity: 0; }
        }

        @media (max-width: 768px) {
          .glass-shape { transform: scale(0.6); }
          .shape-tooth { left: -10%; }
          .shape-braces { right: -10%; }
        }
      `}</style>
    </div>
  );
}
