'use client';
import { Star } from 'lucide-react';
import reviews from '../data/reviews';

const TRUST_KEYWORDS = [
  'best dentist',
  'best orthodontist',
  'best experience',
  'best treatment',
  'pain-free',
  'painless',
  'highly recommend',
  'highly recommended',
  'personally recommend',
  'humble',
  'trustworthy',
  'life-changing',
  'world-class',
  'stunning',
  'exceptional',
  'atraumatic',
  'skyalign',
  'invisalign',
  'braces',
  'implants',
  'zirconia'
];

function highlightTrustText(text) {
  if (!text) return null;
  // Create case-insensitive regex for all keywords
  const regex = new RegExp(`(${TRUST_KEYWORDS.join('|')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, i) => {
    if (TRUST_KEYWORDS.some((kw) => kw.toLowerCase() === part.toLowerCase())) {
      return (
        <span key={i} className="marquee-trust-highlight">
          {part}
        </span>
      );
    }
    return part;
  });
}

export default function ReviewsTicker() {
  return (
    <div className="reviews-marquee-bar">
      <div className="marquee-content-track">
        {[...reviews, ...reviews].map((r, idx) => (
          <div key={`${r.id}-${idx}`} className="marquee-item">
            <span className="marquee-dot">🟢</span>
            <span className="marquee-name">{r.name}:</span>
            <span className="marquee-quote">&ldquo;{highlightTrustText(r.review.slice(0, 95))}&rdquo;</span>
            <div className="marquee-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} fill="#F59E0B" stroke="none" />
              ))}
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .reviews-marquee-bar {
          width: 100%;
          background: #110805;
          border-top: 1px solid rgba(214, 122, 65, 0.35);
          border-bottom: 1px solid rgba(214, 122, 65, 0.35);
          overflow: hidden;
          padding: 0.85rem 0;
          position: relative;
          z-index: 20;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }
        .marquee-content-track {
          display: flex;
          gap: 3.5rem;
          width: max-content;
          animation: marqueeScroll 240s linear infinite;
        }
        .reviews-marquee-bar:hover .marquee-content-track {
          animation-play-state: paused;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.88);
          white-space: nowrap;
        }
        .marquee-dot { font-size: 0.65rem; }
        .marquee-name { font-weight: 700; color: var(--accent-gold-light); }
        .marquee-quote { font-style: italic; color: rgba(255, 255, 255, 0.8); }
        .marquee-stars { display: flex; gap: 0.12rem; margin-left: 0.2rem; }

        /* TRUST KEYWORD HIGHLIGHT BADGE */
        .marquee-trust-highlight {
          background: rgba(245, 158, 11, 0.22);
          color: #FCD34D;
          font-weight: 800;
          font-style: normal;
          padding: 0.1rem 0.45rem;
          border-radius: 4px;
          border: 1px solid rgba(245, 158, 11, 0.4);
          box-shadow: 0 0 10px rgba(245, 158, 11, 0.15);
        }
      `}} />
    </div>
  );
}
