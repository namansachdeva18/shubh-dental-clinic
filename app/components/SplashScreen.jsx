'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if user already saw splash in this session
    try {
      const alreadySeen = sessionStorage.getItem('shubh_splash_seen');
      if (alreadySeen) {
        setShowSplash(false);
        return;
      }
      setShowSplash(true);
      sessionStorage.setItem('shubh_splash_seen', '1');
    } catch {
      setShowSplash(true);
    }

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!isMounted || !showSplash) return null;

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="splash-overlay"
          onClick={() => setShowSplash(false)}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.35, ease: [0.2, 0.9, 0.3, 1] }}
        >
          {/* Animated background particles / aura */}
          <div className="splash-aura splash-aura-1" />
          <div className="splash-aura splash-aura-2" />

          {/* Content */}
          <div className="splash-content">

            {/* Logo image — pops in with a bouncy scale */}
            <motion.div
              className="splash-logo-wrap"
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275], delay: 0.15 }}
            >
              <div className="splash-logo-glow" />
              <Image
                src="/logo.webp?v=2"
                alt="Shubh Orthodontic & Dental Clinic Logo"
                width={110}
                height={110}
                priority
                className="splash-logo-img"
              />
            </motion.div>

            {/* Dr. S.K. Yadav's label */}
            <motion.p
              className="splash-doctor-label font-heading"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Dr. S.K. Yadav&apos;s
            </motion.p>

            {/* Main clinic name — whole string slide-up to preserve cursive ligatures */}
            <motion.div
              className={`splash-clinic-name ${dancingScript.className}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Shubh Orthodontic &amp; Dental Clinic
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="splash-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.7 }}
            >
              A Multi Speciality Dental Care Center
            </motion.p>

            {/* Animated loading bar */}
            <motion.div
              className="splash-bar-track"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="splash-bar-fill"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.4, delay: 0.6, ease: 'easeInOut' }}
              />
            </motion.div>

          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            .splash-overlay {
              position: fixed;
              inset: 0;
              z-index: 999999;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #FDFAF7;
              overflow: hidden;
            }

            /* Soft warm aura blobs */
            .splash-aura {
              position: absolute;
              border-radius: 50%;
              filter: blur(80px);
              pointer-events: none;
            }
            .splash-aura-1 {
              width: 500px; height: 500px;
              top: -120px; left: -120px;
              background: radial-gradient(circle, rgba(214,122,65,0.12) 0%, transparent 70%);
              animation: aura-float 5s ease-in-out infinite alternate;
            }
            .splash-aura-2 {
              width: 400px; height: 400px;
              bottom: -100px; right: -80px;
              background: radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%);
              animation: aura-float 6s 1s ease-in-out infinite alternate;
            }
            @keyframes aura-float {
              from { transform: scale(1) translate(0, 0); }
              to   { transform: scale(1.15) translate(20px, -20px); }
            }

            /* Content stack */
            .splash-content {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 0;
              position: relative;
              z-index: 2;
              user-select: none;
            }

            /* Logo */
            .splash-logo-wrap {
              position: relative;
              margin-bottom: 1.4rem;
            }
            .splash-logo-glow {
              position: absolute;
              inset: -18px;
              border-radius: 50%;
              background: radial-gradient(circle, rgba(214,122,65,0.2) 0%, transparent 70%);
              animation: logo-pulse 2.5s ease-in-out infinite;
            }
            @keyframes logo-pulse {
              0%, 100% { transform: scale(1); opacity: 0.7; }
              50%       { transform: scale(1.15); opacity: 1; }
            }
            .splash-logo-img {
              border-radius: 20px;
              position: relative;
              z-index: 1;
              display: block;
            }

            /* Doctor label */
            .splash-doctor-label {
              font-size: 0.85rem;
              font-weight: 700;
              color: #A08570;
              letter-spacing: 0.05em;
              margin-bottom: 0.35rem;
              font-style: italic;
            }

            /* Clinic name — Dancing Script cursive matching header exactly */
            .splash-clinic-name {
              font-size: clamp(1.8rem, 5vw, 3rem);
              font-weight: 700;
              color: #4A2518;
              line-height: 1.1;
              white-space: nowrap;
              margin-bottom: 0.1rem;
            }
            @media (max-width: 480px) {
              .splash-clinic-name { white-space: normal; text-align: center; font-size: 1.7rem; }
            }

            /* Tagline */
            .splash-tagline {
              font-size: 0.8rem;
              font-weight: 600;
              color: #8C7A70;
              letter-spacing: 0.07em;
              text-transform: uppercase;
              margin-top: 0.7rem;
              margin-bottom: 2.2rem;
            }

            /* Progress bar */
            .splash-bar-track {
              width: 180px;
              height: 3px;
              background: rgba(26, 12, 6, 0.08);
              border-radius: 8px;
              overflow: hidden;
            }
            .splash-bar-fill {
              height: 100%;
              background: linear-gradient(90deg, #D67A41, #C9A84C, #D67A41);
              background-size: 200% 100%;
              animation: shimmer 1.5s linear infinite;
              border-radius: 8px;
            }
            @keyframes shimmer {
              0%   { background-position: 200% center; }
              100% { background-position: -200% center; }
            }

            @media (max-width: 480px) {
              .splash-title-row { font-size: 1.6rem; }
              .splash-logo-img { width: 80px !important; height: 80px !important; }
            }
          `}} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
