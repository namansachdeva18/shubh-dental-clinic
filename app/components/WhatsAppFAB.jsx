'use client';
import { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, ChevronUp } from 'lucide-react';

export default function WhatsAppFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Remove pulse after 6 seconds
    const t = setTimeout(() => setPulse(false), 6000);
    return () => { window.removeEventListener('scroll', handleScroll); clearTimeout(t); };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const WA_MSG = encodeURIComponent("Hi! I'd like to book a consultation at Shubh Orthodontic & Dental Clinic.");
  const WA_URL = `https://wa.me/918685048414?text=${WA_MSG}`;

  return (
    <>
      {/* Floating Group */}
      <div className="fab-group" aria-label="Quick contact options">

        {/* Scroll to Top */}
        {showScrollTop && (
          <button
            className="fab-scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        )}

        {/* Quick Action Panel */}
        {isOpen && (
          <div className="fab-panel">
            <div className="fab-panel-header">
              <div className="fab-panel-avatar">
                <span style={{ fontSize: '1.4rem' }}>🦷</span>
              </div>
              <div>
                <div className="fab-panel-name">Shubh Dental Clinic</div>
                <div className="fab-panel-status">
                  <span className="fab-online-dot" />
                  Usually replies within minutes
                </div>
              </div>
            </div>

            <div className="fab-panel-body">
              <div className="fab-chat-bubble">
                👋 Hi there! Book a <strong>free consultation</strong> with our specialists today.
              </div>
            </div>

            <div className="fab-panel-actions">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="fab-action-wa"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
              <a href="tel:+918685048414" className="fab-action-call">
                <Phone size={18} />
                Call: +91 86850 48414
              </a>
            </div>
          </div>
        )}

        {/* Main FAB Button */}
        <button
          className={`fab-main${pulse && !isOpen ? ' fab-pulse' : ''}`}
          onClick={() => { setIsOpen(v => !v); setPulse(false); }}
          aria-label={isOpen ? 'Close contact panel' : 'Contact us on WhatsApp'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={26} />}
          {!isOpen && <span className="fab-badge">Chat</span>}
        </button>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .fab-group {
          position: fixed;
          bottom: 28px;
          right: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
        }

        /* SCROLL TO TOP */
        .fab-scroll-top {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.95);
          border: 1.5px solid rgba(214,122,65,0.25);
          color: #D67A41;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
          transition: all 0.3s ease;
          animation: fabFadeIn 0.3s ease;
        }
        .fab-scroll-top:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.18);
          background: #D67A41;
          color: #fff;
        }

        /* PANEL */
        .fab-panel {
          background: #FFFFFF;
          border-radius: 20px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.18), 0 8px 25px rgba(0,0,0,0.1);
          width: 300px;
          overflow: hidden;
          animation: fabSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255,255,255,0.6);
        }

        @keyframes fabSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .fab-panel-header {
          background: linear-gradient(135deg, #25D366 0%, #1DA851 100%);
          padding: 1.25rem 1.25rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }
        .fab-panel-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(255,255,255,0.4);
          flex-shrink: 0;
        }
        .fab-panel-name {
          color: #FFFFFF;
          font-family: var(--font-heading, sans-serif);
          font-size: 0.95rem;
          font-weight: 800;
        }
        .fab-panel-status {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: rgba(255,255,255,0.85);
          font-size: 0.75rem;
          margin-top: 2px;
        }
        .fab-online-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ADFFC0;
          box-shadow: 0 0 6px rgba(173,255,192,0.8);
          animation: onlinePulse 2s infinite;
        }
        @keyframes onlinePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .fab-panel-body {
          padding: 1.25rem;
          background: #F0F4F3;
        }
        .fab-chat-bubble {
          background: #FFFFFF;
          border-radius: 0 14px 14px 14px;
          padding: 0.85rem 1rem;
          font-size: 0.88rem;
          color: #2A150D;
          line-height: 1.5;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .fab-chat-bubble strong { color: #25D366; }

        .fab-panel-actions {
          padding: 1rem 1.25rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .fab-action-wa {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #25D366 0%, #1DA851 100%);
          color: #FFFFFF;
          padding: 0.85rem;
          border-radius: 12px;
          font-family: var(--font-heading, sans-serif);
          font-size: 0.92rem;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(37,211,102,0.3);
        }
        .fab-action-wa:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(37,211,102,0.45);
        }
        .fab-action-call {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: #F5F0EB;
          color: #110805;
          border: 1.5px solid rgba(214,122,65,0.2);
          padding: 0.75rem;
          border-radius: 12px;
          font-family: var(--font-heading, sans-serif);
          font-size: 0.88rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .fab-action-call:hover {
          background: #D67A41;
          color: #fff;
          border-color: #D67A41;
          transform: translateY(-1px);
        }

        /* MAIN FAB */
        .fab-main {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366 0%, #1DA851 100%);
          color: #FFFFFF;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          cursor: pointer;
          box-shadow: 0 12px 30px rgba(37,211,102,0.45), 0 4px 12px rgba(0,0,0,0.15);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          animation: fabFadeIn 0.5s ease;
        }

        @keyframes fabFadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        .fab-main:hover {
          transform: scale(1.1);
          box-shadow: 0 18px 40px rgba(37,211,102,0.55), 0 6px 16px rgba(0,0,0,0.2);
        }

        .fab-badge {
          font-size: 0.52rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.9);
          line-height: 1;
          display: block;
        }

        /* PULSE ANIMATION */
        .fab-pulse::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: rgba(37,211,102,0.4);
          animation: fabPulseAnim 2s ease infinite;
          z-index: -1;
        }
        @keyframes fabPulseAnim {
          0% { transform: scale(1); opacity: 0.8; }
          70% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        @media (max-width: 480px) {
          .fab-group { bottom: 20px; right: 16px; }
          .fab-panel { width: 270px; }
        }
      `}} />
    </>
  );
}
