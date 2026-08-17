'use client';
import { Tag, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function OfferBanner() {
  return (
    <aside className="top-offer-announcement-bar" aria-label="Limited Time Special Offer">
      <div className="container offer-bar-inner">
        
        <Link href="/special-offer" className="offer-bar-content" style={{ textDecoration: 'none' }}>
          <div className="offer-tag-capsule">
            <Tag size={11} className="offer-tag-icon" />
            <span>SPECIAL OFFER</span>
          </div>

          <span className="offer-dot-separator hide-mobile">•</span>

          <span className="offer-headline-text">
            <strong>Up to 20% OFF</strong> Selected Dental Treatments + Free 3D Scan
          </span>

          <span className="offer-dot-separator hide-mobile">•</span>

          <span className="offer-validity-text hide-mobile">
            Valid This Month
          </span>
        </Link>

        <div className="offer-bar-actions">
          <Link 
            href="/special-offer" 
            className="btn-claim-offer"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
            aria-label="Claim Limited Time Dental Offer"
          >
            <span>Claim Offer</span>
            <ArrowRight size={12} style={{ marginLeft: 3 }} />
          </Link>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .top-offer-announcement-bar {
          background: linear-gradient(90deg, #110805 0%, #2A150B 50%, #1A0B06 100%);
          color: #FFFFFF;
          padding: 0.42rem 0.75rem;
          border-bottom: 1px solid rgba(214, 122, 65, 0.35);
          position: relative;
          z-index: 1001;
          font-family: var(--font-body, 'Plus Jakarta Sans'), sans-serif;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
        }

        .offer-bar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          max-width: 1300px;
          margin: 0 auto;
        }

        .offer-bar-content {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          cursor: pointer;
          flex-wrap: nowrap;
          font-size: 0.82rem;
          overflow: hidden;
        }

        .offer-tag-capsule {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(214, 122, 65, 0.25);
          border: 1px solid rgba(214, 122, 65, 0.5);
          color: #FFB380;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          padding: 0.2rem 0.55rem;
          border-radius: 99px;
          text-transform: uppercase;
          flex-shrink: 0;
        }

        .offer-headline-text {
          color: #FFFFFF;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .offer-headline-text strong {
          color: #FF9F59;
          font-weight: 800;
        }

        .offer-dot-separator {
          color: rgba(255, 255, 255, 0.35);
        }

        .offer-validity-text {
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.78rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .offer-bar-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .btn-claim-offer {
          background: linear-gradient(135deg, #E66A1F 0%, #D67A41 100%);
          color: #FFFFFF;
          border: none;
          font-size: 0.74rem;
          font-weight: 800;
          padding: 0.3rem 0.85rem;
          border-radius: 99px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 10px rgba(230, 106, 31, 0.4);
          white-space: nowrap;
        }
        .btn-claim-offer:hover {
          transform: scale(1.04);
          background: linear-gradient(135deg, #FF7E33 0%, #E66A1F 100%);
        }

        @media (max-width: 768px) {
          .top-offer-announcement-bar {
            padding: 0.35rem 0.6rem;
          }
          .offer-bar-content {
            font-size: 0.72rem;
            gap: 0.45rem;
          }
          .offer-tag-capsule {
            font-size: 0.62rem;
            padding: 0.15rem 0.45rem;
          }
          .offer-headline-text {
            font-size: 0.72rem;
          }
          .btn-claim-offer {
            font-size: 0.68rem;
            padding: 0.22rem 0.65rem;
          }
        }
      `}} />
    </aside>
  );
}
