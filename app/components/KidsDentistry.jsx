'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, ShieldCheck, Smile, CheckCircle2, Sparkles, Image as ImageIcon } from 'lucide-react';

const AnimatedToothVector = () => {
  return (
    <div className="kids-vector-wrapper" style={{ width: '100%', height: '100%' }}>
      <svg width="100%" height="100%" viewBox="0 0 400 400" className="animated-tooth-svg">

        {/* Floating Bubbles / Sparkles */}
        <motion.g animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
          <circle cx="70" cy="120" r="18" fill="rgba(214, 122, 65, 0.1)" stroke="#D67A41" strokeWidth="2" />
          <circle cx="80" cy="115" r="5" fill="#D67A41" />
        </motion.g>

        <motion.g animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeInOut" }}>
          <circle cx="320" cy="90" r="12" fill="rgba(201, 168, 76, 0.1)" stroke="#C9A84C" strokeWidth="2" />
          <circle cx="325" cy="87" r="3" fill="#C9A84C" />
        </motion.g>

        {/* The Tooth Character */}
        <motion.g animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
          {/* Main Body - Drop Shadow */}
          <path
            d="M130,140 C130,70 180,70 200,105 C220,70 270,70 270,140 C270,190 245,230 245,280 C245,310 225,320 210,300 Q200,285 190,300 C175,320 155,310 155,280 C155,230 130,190 130,140 Z"
            fill="rgba(214, 122, 65, 0.15)"
            transform="translate(5, 15)"
          />
          {/* Main Body */}
          <path
            d="M130,140 C130,70 180,70 200,105 C220,70 270,70 270,140 C270,190 245,230 245,280 C245,310 225,320 210,300 Q200,285 190,300 C175,320 155,310 155,280 C155,230 130,190 130,140 Z"
            fill="#FFFFFF"
            stroke="#2A150B"
            strokeWidth="8"
            strokeLinejoin="round"
          />

          {/* Eyes */}
          <circle cx="175" cy="160" r="10" fill="#2A150B" />
          <circle cx="178" cy="156" r="3" fill="#ffffff" />
          <circle cx="225" cy="160" r="10" fill="#2A150B" />
          <circle cx="228" cy="156" r="3" fill="#ffffff" />

          {/* Rosy Cheeks */}
          <ellipse cx="155" cy="180" rx="12" ry="8" fill="#D67A41" opacity="0.3" />
          <ellipse cx="245" cy="180" rx="12" ry="8" fill="#D67A41" opacity="0.3" />

          {/* Smile */}
          <path d="M185,185 Q200,210 215,185" fill="none" stroke="#2A150B" strokeWidth="6" strokeLinecap="round" />
        </motion.g>

        {/* The Toothbrush */}
        <motion.g
          animate={{ x: [0, -20, 0, -15, 0], y: [0, 10, 0, 5, 0], rotate: [0, -5, 0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          style={{ originX: "280px", originY: "150px" }}
        >
          <g transform="translate(180, 90) rotate(35)">
            {/* Toothpaste */}
            <path d="M5, -25 C-5,-45 25,-45 30,-25 C35,-5 0,-5 5,-25 Z" fill="#FAF9F6" stroke="#D67A41" strokeWidth="4" />
            <path d="M20, -35 Q25,-40 30,-30" fill="none" stroke="#D67A41" strokeWidth="3" strokeLinecap="round" />

            {/* Bristles */}
            <rect x="0" y="-20" width="45" height="20" fill="#FFFFFF" stroke="#2A150B" strokeWidth="4" />
            <line x1="15" y1="-20" x2="15" y2="0" stroke="#2A150B" strokeWidth="3" />
            <line x1="30" y1="-20" x2="30" y2="0" stroke="#2A150B" strokeWidth="3" />

            {/* Brush Head */}
            <rect x="-5" y="0" width="55" height="18" rx="8" fill="#C9A84C" stroke="#2A150B" strokeWidth="4" />

            {/* Brush Handle */}
            <rect x="40" y="2" width="110" height="14" rx="7" fill="#D67A41" stroke="#2A150B" strokeWidth="4" />
          </g>
        </motion.g>

        {/* Star Sparkles */}
        <motion.g animate={{ scale: [0, 1, 0], rotate: [0, 90, 180] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }} style={{ originX: "130px", originY: "80px" }}>
          <path d="M130,60 L133,77 L150,80 L133,83 L130,100 L127,83 L110,80 L127,77 Z" fill="#C9A84C" />
        </motion.g>

      </svg>
    </div>
  );
};

export default function KidsDentistry() {
  const features = [
    "Painless & Gentle Cavity Fillings",
    "Fluoride & Protective Sealants",
    "Habit Breaking Appliances (Thumb Sucking)",
    "Fear-Free, Calming Environment",
    "Early Orthodontic Assessment"
  ];

  return (
    <section id="kids-dentistry" className="premium-kids-section">

      {/* Subtle Background Pattern */}
      <div className="kids-bg-pattern" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>

        <div className="kids-grid">

          {/* Content Column */}
          <div className="kids-content-col">
            <div className="section-badge badge-gold" style={{ display: 'inline-flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <Smile size={15} />
              <span>Pediatric Dentistry</span>
            </div>

            <h2 className="kids-title">
              Gentle Dental Care for <br /><span className="text-gradient-copper">Little Smiles</span>
            </h2>

            <div className="kids-intro-content">
              <p className="kids-subtitle">
                We believe every child deserves a beautiful, healthy smile without the fear of visiting the dentist. Our pediatric care is designed to be engaging, stress-free, and delivered with the utmost <span className="text-highlight-copper">clinical excellence</span>.
              </p>
              <div className="kids-divider"></div>
              <p className="kids-info-text">
                We focus heavily on <strong className="text-gradient-copper">preventative care</strong>, <strong className="text-gradient-copper">interceptive orthodontics (Phase 1)</strong>, and building a lifelong positive relationship with oral health. By using specialized <strong className="text-gradient-copper">child-friendly techniques</strong> and <strong className="text-gradient-copper">calming communication</strong>, we ensure your child's visit is a <strong className="text-gradient-copper">fun and rewarding experience</strong>.
              </p>
            </div>

            <div className="kids-features-card-dark">
              {features.map((feat, index) => (
                <motion.div 
                  key={index}
                  className="dark-feature-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                >
                  <div className="dark-feature-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>{feat}</span>
                </motion.div>
              ))}
            </div>

            <div className="kids-cta-banner">
              <div className="kids-cta-content">
                <h3>Ready for a fun visit?</h3>
                <a href="#contact" className="btn-kids-premium">
                  Book Kid's Appointment
                </a>
              </div>
            </div>
          </div>

          {/* Animated Photo Gallery Column */}
          <div className="kids-photo-col">
            <div className="kids-photo-gallery">

              {/* Photo Frame 1 */}
              <motion.div
                className="kids-photo-frame frame-1"
                initial={{ opacity: 0, y: 50, rotate: -15 }}
                whileInView={{ opacity: 1, y: 0, rotate: -5 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                whileHover={{ scale: 1.05, rotate: -2, zIndex: 20 }}
              >
                <div className="photo-placeholder" style={{ padding: 0, overflow: 'hidden', position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/kids/kids-brave.png" alt="Brave Smiles" fill sizes="(max-width: 768px) 150px, 200px" style={{ objectFit: 'cover' }} />
                </div>
                <div className="photo-caption">Brave Smiles</div>
              </motion.div>

              {/* Photo Frame 2 */}
              <motion.div
                className="kids-photo-frame frame-2"
                initial={{ opacity: 0, y: 50, rotate: 15 }}
                whileInView={{ opacity: 1, y: 0, rotate: 8 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
                whileHover={{ scale: 1.05, rotate: 4, zIndex: 20 }}
              >
                <div className="photo-placeholder" style={{ padding: 0, overflow: 'hidden', position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/kids/kids-cavity-free.png" alt="Cavity Free Club" fill sizes="(max-width: 768px) 150px, 200px" style={{ objectFit: 'cover' }} />
                </div>
                <div className="photo-caption">Cavity Free Club</div>
              </motion.div>

              {/* Photo Frame 3 (Center) */}
              <motion.div
                className="kids-photo-frame frame-3"
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.4 }}
                whileHover={{ scale: 1.08, zIndex: 20 }}
              >
                <div className="photo-placeholder" style={{ padding: 0, overflow: 'hidden', position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/kids/kids-happy.png" alt="Happy Patients" fill sizes="(max-width: 768px) 150px, 200px" style={{ objectFit: 'cover' }} />
                </div>
                <div className="photo-caption">Happy Patients</div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div className="floating-sparkle sp-1" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}><Sparkles color="#D67A41" size={24} /></motion.div>
              <motion.div className="floating-sparkle sp-2" animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}><Sparkles color="#C9A84C" size={32} /></motion.div>

              {/* The Tooth Animation moved to free space */}
              <div className="gallery-tooth-animation">
                <AnimatedToothVector />
              </div>

            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .premium-kids-section {
          padding: 5rem 1.5rem;
          background: #FAF9F6;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(214, 122, 65, 0.1);
        }

        .kids-bg-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(214, 122, 65, 0.08) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        .kids-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: center;
        }

        .kids-title {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: clamp(2.4rem, 4vw, 3.6rem);
          font-weight: 800;
          color: #110805;
          margin-bottom: 1.25rem;
          line-height: 1.1;
        }

        .kids-intro-content {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 2rem;
          margin-bottom: 2.5rem;
          border: 1px solid rgba(214, 122, 65, 0.15);
          box-shadow: 0 10px 30px rgba(17, 8, 5, 0.04);
          position: relative;
          max-width: 580px;
          text-align: left; /* Keep left aligned for readability in card */
        }

        .kids-intro-content::before {
          content: '"';
          position: absolute;
          top: -10px;
          left: 20px;
          font-family: serif;
          font-size: 5rem;
          color: rgba(214, 122, 65, 0.1);
          line-height: 1;
        }

        .text-gradient-copper {
          background: linear-gradient(135deg, #D67A41 0%, #A04A18 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .text-highlight-copper {
          background: rgba(214, 122, 65, 0.1);
          color: #B85922;
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          font-weight: 700;
        }

        .kids-subtitle {
          font-size: 1.15rem;
          color: #110805;
          line-height: 1.7;
          font-weight: 500;
          margin-bottom: 1.25rem;
          position: relative;
          z-index: 1;
        }

        .kids-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #D67A41, transparent);
          margin-bottom: 1.25rem;
          border-radius: 2px;
        }

        .kids-info-text {
          font-size: 1rem;
          color: #7A6F69;
          line-height: 1.8;
          margin: 0;
        }

        .kids-features-card-dark {
          background: linear-gradient(145deg, #1A0D08 0%, #110805 100%);
          border-radius: 24px;
          padding: 1.5rem;
          box-shadow: 0 15px 35px rgba(17, 8, 5, 0.15), inset 0 1px 1px rgba(255,255,255,0.05);
          border: 1px solid rgba(214, 122, 65, 0.2);
          width: 100%;
          max-width: 580px;
          margin-bottom: 3rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          position: relative;
          overflow: hidden;
        }

        .kids-features-card-dark::before {
          content: '';
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: radial-gradient(circle, rgba(214,122,65,0.08) 0%, transparent 60%);
          animation: rotateGlow 15s linear infinite;
          pointer-events: none;
        }

        @keyframes rotateGlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .dark-feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem 1rem;
          border-radius: 12px;
          background: rgba(255,255,255, 0.02);
          border: 1px solid transparent;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          color: #E8E3DF;
          font-weight: 500;
          font-size: 1rem;
          position: relative;
          z-index: 1;
        }

        .dark-feature-item:hover {
          background: rgba(214, 122, 65, 0.1);
          border-color: rgba(214, 122, 65, 0.2);
          transform: translateX(8px);
          color: #FFFFFF;
        }

        .dark-feature-icon {
          color: #D67A41;
          background: rgba(214, 122, 65, 0.15);
          border-radius: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .dark-feature-item:hover .dark-feature-icon {
          background: #D67A41;
          color: #FFFFFF;
          box-shadow: 0 0 15px rgba(214, 122, 65, 0.4);
        }

        .kids-cta-banner {
          background: linear-gradient(135deg, #F4ECE6 0%, #FFFFFF 100%);
          border: 1px solid rgba(214, 122, 65, 0.2);
          border-radius: 24px;
          padding: 2rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 0 10px 30px rgba(17, 8, 5, 0.05);
          width: 100%;
        }

        .kids-cta-content {
          position: relative;
          z-index: 2;
        }

        .kids-cta-content h3 {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          color: #110805;
          margin-bottom: 1.25rem;
          font-weight: 800;
        }

        .btn-kids-premium {
          display: inline-block;
          background: linear-gradient(135deg, #D67A41 0%, #B85922 100%);
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.05rem;
          padding: 1rem 2rem;
          border-radius: 99px;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(214, 122, 65, 0.25);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .btn-kids-premium:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 15px 35px rgba(214, 122, 65, 0.35);
        }

        .kids-cta-graphic {
          position: absolute;
          right: -20px;
          bottom: -40px;
          width: 180px;
          height: 180px;
          z-index: 1;
          opacity: 0.9;
        }

        /* Animated Photo Gallery Styles */
        .kids-photo-col {
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1000px;
        }

        .kids-photo-gallery {
          position: relative;
          width: 100%;
          height: 450px;
          max-width: 500px;
        }

        .kids-photo-frame {
          position: absolute;
          background: #FFFFFF;
          padding: 0.75rem 0.75rem 2.5rem 0.75rem;
          border-radius: 8px;
          box-shadow: 0 15px 35px rgba(17, 8, 5, 0.1), 0 5px 15px rgba(214, 122, 65, 0.05);
          border: 1px solid rgba(214, 122, 65, 0.1);
          width: 220px;
          height: 240px;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
          cursor: pointer;
        }

        .photo-placeholder {
          width: 100%;
          height: 100%;
          background: #F4F1EC;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: #A3968F;
          font-size: 0.85rem;
          font-weight: 600;
          text-align: center;
          border: 2px dashed rgba(214, 122, 65, 0.2);
        }

        .photo-caption {
          position: absolute;
          bottom: 0.75rem;
          left: 0;
          width: 100%;
          text-align: center;
          font-family: 'Caveat', cursive, sans-serif;
          font-size: 1.1rem;
          color: #554A44;
          font-weight: 700;
        }

        .frame-1 {
          top: 20px;
          left: 0;
          z-index: 2;
        }

        .frame-2 {
          top: 40px;
          right: 0;
          z-index: 1;
        }

        .frame-3 {
          bottom: 20px;
          left: 50%;
          margin-left: -120px; /* center it (width 240 / 2) */
          width: 240px;
          height: 260px;
          z-index: 3;
        }

        .floating-sparkle {
          position: absolute;
          z-index: 0;
          opacity: 0.5;
        }
        .sp-1 { top: 0; left: 50%; }
        .sp-2 { bottom: 50px; left: 10px; } /* Moved left to avoid tooth */

        .gallery-tooth-animation {
          position: absolute;
          bottom: -20px;
          left: 50%;
          margin-left: 100px;
          width: 160px;
          height: 160px;
          z-index: 25; /* above frames */
        }

        @media (max-width: 992px) {
          .premium-kids-section {
            padding: 4rem 1rem 3rem 1rem;
          }
          .kids-grid {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1.5rem;
          }
          .kids-content-col {
            display: contents;
          }
          .section-badge { order: 1; margin-bottom: 0 !important; }
          .kids-title { order: 2; margin-bottom: 0.5rem; font-size: 2.2rem; }
          
          .kids-intro-content {
            order: 3;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            padding: 1.5rem;
            margin-top: 0.5rem;
            box-shadow: 0 15px 35px rgba(17, 8, 5, 0.06);
            transform: translateY(-5px); /* Cool overlap effect */
          }
          .kids-intro-content::before {
            left: 50%;
            margin-left: -15px;
          }
          .kids-divider {
            margin-left: auto;
            margin-right: auto;
            background: linear-gradient(90deg, transparent, #D67A41, transparent);
          }
          
          .kids-photo-col {
            order: 5;
            margin-top: 1rem;
            margin-bottom: 3rem;
          }

          .kids-features-card-dark {
            order: 6;
            margin-left: auto;
            margin-right: auto;
            text-align: left; /* Keep items left aligned inside */
          }
          
          .kids-cta-banner {
            order: 7;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 2rem 1.5rem;
            margin-top: 0.5rem;
            margin-left: auto;
            margin-right: auto;
            max-width: 580px;
          }

          .kids-cta-content {
            padding-right: 0;
          }

          .kids-cta-content h3 {
            font-size: 1.15rem;
            margin-bottom: 0.75rem;
          }
          
          .btn-kids-premium {
            padding: 0.75rem 1.5rem;
            font-size: 0.95rem;
          }

          .gallery-tooth-animation {
            width: 130px;
            height: 130px;
            bottom: -30px;
            left: 50%;
            margin-left: 65px;
          }
        }
      `}} />
    </section>
  );
}
