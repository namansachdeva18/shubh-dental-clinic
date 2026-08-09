'use client';
import { useState, useEffect } from 'react';
import { Star, Sparkles, Volume2, Square, ShieldCheck, ThumbsUp } from 'lucide-react';

const highlightTrustWords = (text) => {
  if (!text) return null;
  const keywords = ['amazing', 'perfect', 'painless', 'best', 'highly recommend', 'friendly', 'professional', 'comfortable', 'great', 'excellent', 'gentle', 'care', 'smooth', 'brilliant', 'clean', 'hygienic', 'safe', 'trust', 'beautiful', 'smile', 'expert', 'affordable', 'happy', 'thank you', '5 star', 'five star', 'awesome', 'superb', 'outstanding', 'fantastic', 'recommended'];
  const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) => {
    if (keywords.some(k => k.toLowerCase() === part.toLowerCase())) {
      return <span key={i} className="highlight-trust-word">{part}</span>;
    }
    return part;
  });
};

export default function ReviewCard({ review }) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  if (!review) return null;

  const initials = review.name
    ? review.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'U';

  const handleToggleSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel();
      const textToSpeak = `${review.name} review for ${review.treatment || 'treatment'}. ${review.review}`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 0.95;
      utterance.pitch = 1;
      
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  return (
    <article className={`google-review-card ${review.featured ? 'featured-card' : ''}`}>
      {/* Dynamic Background Tooth Watermark SVG */}
      <svg className="card-watermark-svg" viewBox="0 0 100 100" fill="none">
        <path d="M50 15 C35 15 25 25 25 40 C25 55 35 75 42 85 C45 90 48 90 50 85 C52 90 55 90 58 85 C65 75 75 55 75 40 C75 25 65 15 50 15 Z" stroke="url(#goldGrad)" strokeWidth="2" strokeDasharray="4 4" opacity="0.12" />
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D67A41" />
            <stop offset="100%" stopColor="#C9A84C" />
          </linearGradient>
        </defs>
      </svg>

      {/* Diagonal Gleaming Light Beam */}
      <div className="card-shine-beam" />

      {/* Top Metallic Gold Accent Bar */}
      <div className="card-top-accent" />

      {/* Featured Star Badge */}
      {review.featured && (
        <div className="featured-badge-tag">
          <Sparkles size={12} style={{ color: '#D67A41' }} />
          <span>Featured Review</span>
        </div>
      )}

      {/* Card Header */}
      <div className="review-header">
        <div className="reviewer-avatar-wrap">
          <div className="reviewer-avatar">{initials}</div>
          <div className="avatar-ring-pulse" />
        </div>

        <div className="reviewer-info">
          <h4 className="reviewer-name">{review.name}</h4>
          <span className="treatment-tag-pill">{review.treatment || 'Dental Care'}</span>
        </div>

        {/* AI Voice Narration Button */}
        <button
          onClick={handleToggleSpeech}
          className={`ai-speech-btn ${isPlayingAudio ? 'speech-active' : ''}`}
          title={isPlayingAudio ? "Stop Audio" : "Listen to Patient Review (AI Audio)"}
        >
          {isPlayingAudio ? (
            <>
              <Square size={12} fill="currentColor" />
              <span className="audio-wave-anim">
                <span /><span /><span />
              </span>
            </>
          ) : (
            <>
              <Volume2 size={14} />
              <span className="listen-label">Listen</span>
            </>
          )}
        </button>

        {/* Verified Google Badge */}
        {review.isVerifiedGoogle && (
          <div className="google-verified-badge" title="Verified Google Business Profile Review">
            <svg className="google-g-svg" viewBox="0 0 24 24" width="16" height="16">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span className="g-verified-text">Verified</span>
          </div>
        )}
      </div>

      {/* Stars & AI Sentiment Bar */}
      <div className="review-meta-row">
        <div className="stars-row" aria-label={`Rating: ${review.rating} out of 5 stars`}>
          {[...Array(review.rating || 5)].map((_, i) => (
            <Star key={i} size={15} fill="#F59E0B" stroke="none" />
          ))}
        </div>
        <span className="review-date-text">{review.date}</span>
      </div>

      {/* Review Text Quote */}
      <blockquote className="review-text-quote">
        &ldquo;{highlightTrustWords(review.review)}&rdquo;
      </blockquote>

      {/* Doctor Reference & Sentiment Badge */}
      <div className="review-footer-meta">
        {review.doctor && (
          <div className="review-doctor-ref">
            Treated by <strong>{review.doctor}</strong>
          </div>
        )}
        <div className="ai-sentiment-badge">
          <ThumbsUp size={11} style={{ color: '#10B981' }} />
          <span>99.8% Delight Score</span>
        </div>
      </div>

      {/* Tags Chips Row */}
      {review.tags && review.tags.length > 0 && (
        <div className="review-tags-container">
          {review.tags.map((tag, idx) => (
            <span key={idx} className="review-tag-chip">
              #{tag}
            </span>
          ))}
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .google-review-card {
          background: #FFFFFF;
          border-radius: 26px;
          padding: 1.85rem;
          border: 1.5px solid rgba(214, 122, 65, 0.18);
          box-shadow: 0 12px 35px rgba(74, 37, 24, 0.05);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 0.95rem;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease;
          width: 100%;
        }

        .card-watermark-svg {
          position: absolute;
          right: -10px;
          bottom: -10px;
          width: 130px;
          height: 130px;
          pointer-events: none;
          z-index: 0;
        }

        .card-shine-beam {
          position: absolute;
          top: -50%; left: -60%;
          width: 50%; height: 200%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
          transform: rotate(25deg);
          pointer-events: none;
          transition: left 0.75s ease;
          z-index: 2;
        }

        .google-review-card:hover .card-shine-beam {
          left: 130%;
        }

        .featured-card {
          border-color: rgba(214, 122, 65, 0.4);
          background: linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%);
          box-shadow: 0 18px 40px rgba(214, 122, 65, 0.09);
        }

        .google-review-card:hover {
          transform: translateY(-7px) scale(1.01);
          box-shadow: 0 25px 55px rgba(74, 37, 24, 0.13);
          border-color: rgba(214, 122, 65, 0.5);
        }

        .card-top-accent {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3.5px;
          background: linear-gradient(90deg, var(--accent-gold), var(--text-primary), var(--accent-gold-dark));
        }

        .featured-badge-tag {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.68rem;
          font-weight: 800;
          color: #7A340F;
          background: rgba(122, 52, 15, 0.08);
          padding: 0.22rem 0.7rem;
          border-radius: 99px;
          border: 1px solid rgba(122, 52, 15, 0.25);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .review-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          position: relative;
          z-index: 1;
        }

        .reviewer-avatar-wrap {
          position: relative;
          flex-shrink: 0;
        }

        .reviewer-avatar {
          width: 46px; height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, #110805, #2A150B);
          color: var(--accent-gold-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1rem;
          font-family: var(--font-heading);
          box-shadow: 0 4px 14px rgba(17, 8, 5, 0.2);
          border: 1.5px solid var(--accent-gold);
        }

        .avatar-ring-pulse {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          border: 1px solid rgba(214, 122, 65, 0.35);
          animation: avatarPulse 2.5s infinite;
        }
        @keyframes avatarPulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.12); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.8; }
        }

        .reviewer-info {
          flex-grow: 1;
        }

        .reviewer-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.08rem;
          color: #110805;
          line-height: 1.2;
          margin-bottom: 0.2rem;
        }

        .treatment-tag-pill {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          color: #7A340F;
          background: rgba(122, 52, 15, 0.08);
          padding: 0.18rem 0.6rem;
          border-radius: 99px;
          border: 1px solid rgba(122, 52, 15, 0.2);
        }

        /* AI SPEECH BUTTON */
        .ai-speech-btn {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(122, 52, 15, 0.08);
          border: 1px solid rgba(122, 52, 15, 0.25);
          color: #7A340F;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.3rem 0.75rem;
          border-radius: 99px;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .ai-speech-btn:hover {
          background: #D67A41;
          color: #fff;
        }
        .speech-active {
          background: #110805 !important;
          color: #F4B382 !important;
          border-color: #110805 !important;
        }

        .audio-wave-anim {
          display: flex;
          align-items: flex-end;
          gap: 2px;
          height: 10px;
        }
        .audio-wave-anim span {
          width: 2px;
          height: 100%;
          background: var(--accent-gold-light);
          animation: waveBar 0.6s ease-in-out infinite alternate;
        }
        .audio-wave-anim span:nth-child(2) { animation-delay: 0.2s; }
        .audio-wave-anim span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes waveBar {
          0% { height: 3px; }
          100% { height: 10px; }
        }

        .google-verified-badge {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: #FAF8F5;
          border: 1px solid #DADCE0;
          padding: 0.25rem 0.55rem;
          border-radius: 99px;
          flex-shrink: 0;
        }

        .g-verified-text {
          font-size: 0.68rem;
          font-weight: 700;
          color: #5F6368;
        }

        .review-meta-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          position: relative;
          z-index: 1;
        }

        .stars-row {
          display: flex;
          gap: 0.2rem;
        }

        .review-date-text {
          font-size: 0.78rem;
          color: #6B5244;
          font-weight: 500;
        }

        .review-text-quote {
          font-size: 0.96rem;
          color: #110805 !important;
          font-weight: 500;
          line-height: 1.65;
          margin: 0;
          flex-grow: 1;
          position: relative;
          z-index: 1;
        }

        .review-footer-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
          position: relative;
          z-index: 1;
        }

        .review-doctor-ref {
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .review-doctor-ref strong {
          color: var(--accent-gold-dark);
        }

        .ai-sentiment-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.7rem;
          font-weight: 700;
          color: #065F46;
          background: rgba(16, 185, 129, 0.08);
          padding: 0.2rem 0.55rem;
          border-radius: 99px;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .review-tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.2rem;
          padding-top: 0.65rem;
          border-top: 1px dashed rgba(0, 0, 0, 0.08);
          position: relative;
          z-index: 1;
        }

        .review-tag-chip {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-muted);
          background: #FAF9F6;
          padding: 0.2rem 0.55rem;
          border-radius: 6px;
        }
        
        .highlight-trust-word {
          background: linear-gradient(120deg, rgba(214, 122, 65, 0.15) 0%, rgba(201, 168, 76, 0.25) 100%);
          color: var(--accent-gold-dark);
          font-weight: 800;
          padding: 0.05rem 0.25rem;
          border-radius: 4px;
        }

        /* MOBILE OPTIMIZATIONS TO FIT FULL CARD ON SCREEN */
        @media (max-width: 1024px) {
          .google-review-card {
            padding: 1.25rem !important;
            gap: 0.75rem !important;
            border-radius: 20px !important;
            height: auto !important;
            max-height: none !important;
            overflow: visible !important;
          }
          .review-text-quote {
            font-size: 0.9rem !important;
            line-height: 1.55 !important;
            height: auto !important;
            overflow: visible !important;
          }
          .reviewer-avatar {
            width: 40px !important;
            height: 40px !important;
            font-size: 0.9rem !important;
          }
          .card-watermark-svg {
            width: 100px !important;
            height: 100px !important;
          }
          .ai-speech-btn {
            padding: 0.25rem 0.6rem !important;
            font-size: 0.68rem !important;
          }
          .reviewer-name {
            font-size: 0.95rem !important;
          }
          .treatment-tag-pill {
            font-size: 0.65rem !important;
            padding: 0.15rem 0.5rem !important;
          }
        }
      `}} />
    </article>
  );
}
