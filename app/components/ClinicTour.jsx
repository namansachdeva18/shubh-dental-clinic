'use client';
import React, { useState } from 'react';
import { Camera, Sparkles } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function ClinicTour() {
  const images = [
    { num: 1, ext: 'webp' },
    { num: 2, ext: 'webp' },
    { num: 3, ext: 'webp' },
    { num: 4, ext: 'webp' },
    { num: 5, ext: 'webp' },
    { num: 6, ext: 'jpg' },
    { num: 7, ext: 'webp' },
    { num: 8, ext: 'webp' },
    { num: 9, ext: 'webp' },
    { num: 10, ext: 'webp' },
  ];

  const row1 = images.slice(0, 5);
  const row2 = images.slice(5, 10);

  // Reusable block for each image
  const ImageBlock = ({ item }) => {
    const [hasError, setHasError] = useState(false);

    return (
      <div className="clinic-image-card">
        {!hasError ? (
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image 
              src={`/clinic/clinic-${item.num}.${item.ext}`} 
              alt={`Clinic interior ${item.num}`}
              className="clinic-img-real"
              fill
              sizes="(max-width: 768px) 250px, 400px"
              style={{ objectFit: 'cover' }}
              onError={() => setHasError(true)}
            />
          </div>
        ) : (
          <div className="clinic-img-placeholder">
            <Camera size={36} className="placeholder-icon" />
            <div className="placeholder-text">
              <span className="placeholder-title font-heading">Image {item.num}</span>
              <span className="placeholder-path">/public/clinic/clinic-{item.num}.{item.ext}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="tour" className="clinic-tour-wrapper">
      <div id="clinic-tour" style={{ position: 'relative', top: '-80px', height: '0', pointerEvents: 'none' }} />
      {/* Background Graphic Elements */}
      <div className="tour-bg-glow-1"></div>
      <div className="tour-bg-glow-2"></div>
      
      {/* Organic Flowing Wave Lines */}
      <div className="tour-waves-container">
        <svg className="tour-wave-svg" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path className="tour-wave-line line-1" d="M -100 250 C 300 150, 600 350, 1000 200 C 1200 120, 1400 280, 1600 200" stroke="url(#wave-grad-copper)" strokeWidth="1.5" />
          <path className="tour-wave-line line-2" d="M -100 350 C 300 450, 700 200, 1100 400 C 1300 480, 1450 320, 1600 350" stroke="url(#wave-grad-gold)" strokeWidth="1" />
          <path className="tour-wave-line line-3" d="M -100 150 C 400 300, 800 100, 1200 250 C 1350 300, 1450 180, 1600 150" stroke="url(#wave-grad-copper)" strokeWidth="0.8" strokeDasharray="3 3" />
          
          <defs>
            <linearGradient id="wave-grad-copper" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(214, 122, 65, 0.45)" />
              <stop offset="50%" stopColor="rgba(214, 122, 65, 0.1)" />
              <stop offset="100%" stopColor="rgba(214, 122, 65, 0.45)" />
            </linearGradient>
            <linearGradient id="wave-grad-gold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(201, 168, 76, 0.35)" />
              <stop offset="50%" stopColor="rgba(201, 168, 76, 0.05)" />
              <stop offset="100%" stopColor="rgba(201, 168, 76, 0.35)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Twinkling Luxury Sparkles */}
      <div className="tour-sparkles-container">
        <div className="tour-sparkle sparkle-1">✦</div>
        <div className="tour-sparkle sparkle-2">✦</div>
        <div className="tour-sparkle sparkle-3">✦</div>
        <div className="tour-sparkle sparkle-4">✦</div>
        <div className="tour-sparkle sparkle-5">✦</div>
      </div>

      <ScrollReveal className="tour-header text-center" variant="fadeUp" delay={0.1}>
        <div className="tour-badge">
          <Sparkles size={14} />
          <span>Inside the Clinic</span>
        </div>
        <h2 className="tour-title">
          Experience Our <span className="gold-gradient-text">Premium Ambience</span>
        </h2>
        <p className="tour-subtitle">
          A state-of-the-art, hygienic, and comfortable environment designed for your perfect smile journey.
        </p>
      </ScrollReveal>

      <div className="marquee-container">
        
        {/* Row 1: Scrolls Left */}
        <div className="marquee-row">
          <div className="marquee-track scroll-left">
            <div className="marquee-group">
              {row1.map(item => <ImageBlock key={`r1-a-${item.num}`} item={item} />)}
            </div>
            <div className="marquee-group">
              {row1.map(item => <ImageBlock key={`r1-b-${item.num}`} item={item} />)}
            </div>
          </div>
        </div>

        {/* Row 2: Scrolls Right */}
        <div className="marquee-row mt-1">
          <div className="marquee-track scroll-right">
            <div className="marquee-group">
              {row2.map(item => <ImageBlock key={`r2-a-${item.num}`} item={item} />)}
            </div>
            <div className="marquee-group">
              {row2.map(item => <ImageBlock key={`r2-b-${item.num}`} item={item} />)}
            </div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .clinic-tour-wrapper {
          padding: 3.5rem 0;
          background: #110805;
          position: relative;
          overflow: hidden;
        }

        .tour-header {
          max-width: 800px;
          margin: 0 auto 1.75rem;
          padding: 0 1.5rem;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .tour-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(201, 168, 76, 0.15);
          color: #C9A84C;
          padding: 0.4rem 1.1rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: 1px solid rgba(201, 168, 76, 0.3);
          margin-bottom: 1.25rem;
        }

        .tour-title {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: 2.5rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        .tour-subtitle {
          font-size: 0.98rem;
          color: #A89B95;
          line-height: 1.6;
        }

        .marquee-container {
          position: relative;
          width: 100vw;
          max-width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          z-index: 2;
        }

        .marquee-container::before,
        .marquee-container::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 15vw;
          max-width: 200px;
          z-index: 3;
          pointer-events: none;
        }

        .marquee-container::before {
          left: 0;
          background: linear-gradient(to right, #110805, transparent);
        }

        .marquee-container::after {
          right: 0;
          background: linear-gradient(to left, #110805, transparent);
        }

        .marquee-row {
          display: flex;
          overflow: hidden;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          width: max-content;
        }

        .marquee-group {
          display: flex;
          gap: 1.5rem;
          padding-right: 1.5rem;
        }

        .scroll-left {
          animation: scrollLeft 35s linear infinite;
        }

        .scroll-right {
          animation: scrollRight 35s linear infinite;
        }

        .marquee-row:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* Image Cards */
        .clinic-image-card {
          height: 220px;
          width: 330px;
          border-radius: 20px;
          overflow: hidden;
          flex-shrink: 0;
          background: #1A0D08;
          border: 1px solid rgba(214, 122, 65, 0.15);
          position: relative;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          transition: transform 0.4s ease, border-color 0.4s ease;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .clinic-image-card:hover {
          transform: translateY(-5px);
          border-color: rgba(201, 168, 76, 0.5);
        }

        .clinic-img-real {
          width: auto;
          height: 100%;
          max-width: none;
          object-fit: contain;
          transition: transform 0.6s ease;
        }

        .clinic-image-card:hover .clinic-img-real {
          transform: scale(1.05);
        }

        /* Placeholder Styling */
        .clinic-img-placeholder {
          width: 100%;
          height: 100%;
          min-width: 250px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          background: repeating-linear-gradient(
            45deg,
            #150A06,
            #150A06 10px,
            #1A0D08 10px,
            #1A0D08 20px
          );
          color: #554A44;
          text-align: center;
          padding: 1.5rem;
        }

        .placeholder-icon {
          color: #D67A41;
          opacity: 0.8;
        }

        .placeholder-title {
          display: block;
          font-size: 1.1rem;
          font-weight: 800;
          color: #A89B95;
          margin-bottom: 0.25rem;
        }

        .placeholder-path {
          display: inline-block;
          font-size: 0.75rem;
          font-family: monospace;
          background: rgba(0,0,0,0.3);
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          color: #C9A84C;
          border: 1px dashed rgba(201, 168, 76, 0.3);
        }

        @media (max-width: 768px) {
          .clinic-tour-wrapper { padding: 3.5rem 0; }
          .clinic-image-card {
            height: 180px;
            width: 270px;
          }
          .tour-title {
            font-size: 2rem;
          }
        }

        /* Animated Background Graphics Styling */
        .tour-bg-glow-1 {
          position: absolute;
          top: -20%;
          left: -15%;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.22) 0%, transparent 70%);
          filter: blur(90px);
          pointer-events: none;
          z-index: 1;
          animation: pulseGlow 14s ease-in-out infinite alternate;
        }
        
        .tour-bg-glow-2 {
          position: absolute;
          bottom: -20%;
          right: -15%;
          width: 800px;
          height: 800px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201, 168, 76, 0.18) 0%, transparent 70%);
          filter: blur(110px);
          pointer-events: none;
          z-index: 1;
          animation: pulseGlow 18s ease-in-out infinite alternate-reverse;
        }

        @keyframes pulseGlow {
          0% { transform: scale(1) translate(0, 0); opacity: 0.8; }
          100% { transform: scale(1.25) translate(30px, -20px); opacity: 1; }
        }

        /* Flowing Waves styling */
        .tour-waves-container {
          position: absolute;
          inset: 0;
          opacity: 0.8;
          pointer-events: none;
          z-index: 1;
        }

        .tour-wave-svg {
          width: 100%;
          height: 100%;
        }

        @keyframes waveFloat1 {
          0%, 100% { transform: translateY(0) skewY(0deg); }
          50% { transform: translateY(-20px) skewY(0.5deg); }
        }
        @keyframes waveFloat2 {
          0%, 100% { transform: translateY(0) skewY(0deg); }
          50% { transform: translateY(20px) skewY(-0.5deg); }
        }
        @keyframes waveFloat3 {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-10px) scaleY(1.05); }
        }

        .line-1 { animation: waveFloat1 18s ease-in-out infinite; }
        .line-2 { animation: waveFloat2 24s ease-in-out infinite; }
        .line-3 { animation: waveFloat3 20s ease-in-out infinite; }

        /* Sparkles styling */
        .tour-sparkles-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .tour-sparkle {
          position: absolute;
          color: #C9A84C;
          opacity: 0;
          animation: sparkleTwinkle 5s ease-in-out infinite;
        }

        .sparkle-1 { top: 15%; left: 8%; animation-delay: 0s; font-size: 1.4rem; }
        .sparkle-2 { top: 80%; left: 12%; animation-delay: 2s; font-size: 1.1rem; }
        .sparkle-3 { top: 20%; right: 10%; animation-delay: 1s; font-size: 1.3rem; }
        .sparkle-4 { top: 85%; right: 15%; animation-delay: 3s; font-size: 1rem; }
        .sparkle-5 { top: 50%; left: 48%; animation-delay: 1.5s; font-size: 0.9rem; }

        @keyframes sparkleTwinkle {
          0%, 100% { opacity: 0; transform: scale(0.6) rotate(0deg); }
          50% { opacity: 0.7; transform: scale(1.2) rotate(180deg); text-shadow: 0 0 8px rgba(201, 168, 76, 0.6); }
        }
      `}} />
    </section>
  );
}
