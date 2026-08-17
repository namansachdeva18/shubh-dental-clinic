'use client';
import { Phone, MessageCircle } from 'lucide-react';

export default function StickyMobileActionBar() {
  return (
    <>
      <div className="sticky-mobile-action-bar hide-desktop">
        <a
          href="https://wa.me/918685048414?text=Hi! I want to book a consultation at Shubh Dental Clinic."
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-action-btn btn-whatsapp"
        >
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </a>
        <a href="#book" className="sticky-action-btn btn-book">
          <span>Book Now</span>
        </a>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .sticky-mobile-action-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-top: 1px solid rgba(214, 122, 65, 0.15);
          display: flex;
          padding: 12px 16px;
          padding-bottom: max(12px, env(safe-area-inset-bottom));
          gap: 12px;
          z-index: 9999;
          box-shadow: 0 -10px 30px rgba(17, 8, 5, 0.08);
          transform: translateY(0);
          transition: transform 0.3s ease;
        }

        .sticky-action-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px;
          border-radius: 12px;
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-weight: 800;
          font-size: 1rem;
          text-decoration: none;
          transition: transform 0.2s active;
        }

        .sticky-action-btn:active {
          transform: scale(0.96);
        }

        .btn-whatsapp {
          background: #25D366;
          color: white;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
        }

        .btn-book {
          background: linear-gradient(135deg, #D67A41 0%, #B85922 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(214, 122, 65, 0.3);
        }

        @media (min-width: 769px) {
          .hide-desktop {
            display: none !important;
          }
        }
      `}} />
    </>
  );
}
