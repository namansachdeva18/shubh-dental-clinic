'use client';
import { useState, useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingOfferBadge() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show quickly after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = () => {
    window.dispatchEvent(new CustomEvent('openOfferModal'));
  };

  const handleDismiss = (e) => {
    e.stopPropagation();
    setIsDismissed(true);
  };

  if (isDismissed || !isVisible) return null;

  return (
    <>
      <div className="elite-floater-root">
        {/* Soft Golden Ambient Glow */}
        <div className="elite-floater-glow" aria-hidden="true" />

        <motion.button
          onClick={handleOpenModal}
          className="elite-pill-btn"
          aria-label="Claim 20% Anniversary Offer"
          initial={{ scale: 0, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: 'spring', stiffness: 450, damping: 25 }}
        >
          {/* Dismiss ✕ Button */}
          <span
            className="elite-close-x"
            onClick={handleDismiss}
            title="Dismiss"
            aria-label="Dismiss offer"
          >
            <X size={10} />
          </span>

          {/* Left Circular 20% Badge with subtle shine */}
          <div className="elite-pct-circle">
            <span className="elite-pct-text">20%</span>
            <span className="elite-pct-sub">OFF</span>
          </div>

          {/* Center Text Block */}
          <div className="elite-label-block">
            <div className="elite-top-row">
              <span className="elite-word">OFFER</span>
              <Sparkles size={11} className="elite-sparkle-icon" />
            </div>
            <div className="elite-bottom-action">
              <span>CLAIM NOW</span>
              <span className="elite-arrow">›</span>
            </div>
          </div>
        </motion.button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .elite-floater-root {
          position: fixed;
          right: 18px;
          bottom: 104px;
          z-index: 9998;
          display: flex;
          align-items: center;
          user-select: none;
        }

        /* Ambient Glow Behind Pill */
        .elite-floater-glow {
          position: absolute;
          inset: -3px;
          background: radial-gradient(circle, rgba(212, 163, 115, 0.45) 0%, rgba(166, 115, 68, 0.2) 60%, transparent 80%);
          border-radius: 99px;
          filter: blur(8px);
          z-index: -1;
          pointer-events: none;
          animation: eliteGlowAnim 3s ease-in-out infinite alternate;
        }

        @keyframes eliteGlowAnim {
          0% { transform: scale(0.96); opacity: 0.5; }
          100% { transform: scale(1.08); opacity: 0.9; }
        }

        /* The Pill Button - Match exact reference: dark metallic bronze pill */
        .elite-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: linear-gradient(135deg, #1A120B 0%, #2A1D13 50%, #150E08 100%);
          color: #FFFFFF;
          border: 1.2px solid rgba(224, 182, 138, 0.45);
          padding: 0.24rem 0.65rem 0.24rem 0.28rem;
          border-radius: 99px;
          box-shadow: 
            0 8px 24px rgba(0, 0, 0, 0.45),
            0 2px 8px rgba(184, 115, 51, 0.25),
            inset 0 1px 1px rgba(255, 255, 255, 0.2);
          cursor: pointer;
          position: relative;
          text-align: left;
          font-family: var(--font-body, 'Inter'), sans-serif;
          outline: none;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: all 0.22s ease;
        }

        .elite-pill-btn:hover {
          border-color: #E5B887;
          box-shadow: 
            0 10px 28px rgba(0, 0, 0, 0.55),
            0 3px 12px rgba(214, 122, 65, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.35);
        }

        /* Tiny Close ✕ */
        .elite-close-x {
          position: absolute;
          top: -5px;
          right: -3px;
          width: 16px;
          height: 16px;
          background: #2A1D13;
          color: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(224, 182, 138, 0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 2;
          transition: all 0.2s ease;
          opacity: 0.85;
        }

        .elite-close-x:hover {
          background: #A86B38;
          color: #FFFFFF;
          transform: scale(1.15);
        }

        /* Left Golden Circle */
        .elite-pct-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #F5CE9F 0%, #C48E55 50%, #8A5726 100%);
          border: 1px solid rgba(255, 235, 205, 0.4);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
          flex-shrink: 0;
          line-height: 1;
        }

        .elite-pct-text {
          font-family: var(--font-heading, 'Outfit'), sans-serif;
          font-size: 0.76rem;
          font-weight: 900;
          color: #1A1008;
          letter-spacing: -0.03em;
        }

        .elite-pct-sub {
          font-size: 0.44rem;
          font-weight: 850;
          color: #2D1A0A;
          letter-spacing: 0.04em;
          margin-top: -1px;
        }

        /* Label Block on Right */
        .elite-label-block {
          display: flex;
          flex-direction: column;
          gap: 1px;
          padding-right: 0.15rem;
        }

        .elite-top-row {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          line-height: 1;
        }

        .elite-word {
          font-family: var(--font-heading, 'Outfit'), sans-serif;
          font-size: 0.72rem;
          font-weight: 850;
          color: #E8BF92;
          letter-spacing: 0.06em;
        }

        .elite-sparkle-icon {
          color: #E8BF92;
          animation: eliteTwinkle 2.4s ease-in-out infinite alternate;
        }

        @keyframes eliteTwinkle {
          0% { transform: rotate(0deg) scale(0.9); opacity: 0.7; }
          100% { transform: rotate(20deg) scale(1.15); opacity: 1; }
        }

        .elite-bottom-action {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          font-size: 0.58rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.85);
          letter-spacing: 0.05em;
          line-height: 1;
        }

        .elite-arrow {
          font-size: 0.72rem;
          color: #E8BF92;
          font-weight: 900;
          line-height: 1;
          transition: transform 0.2s ease;
        }

        .elite-pill-btn:hover .elite-arrow {
          transform: translateX(2px);
        }

        /* Mobile Optimization */
        @media (max-width: 768px) {
          .elite-floater-root {
            right: 14px;
            bottom: 82px; /* Positioned nicely above the bottom app nav bar */
          }
        }
      `}} />
    </>
  );
}
