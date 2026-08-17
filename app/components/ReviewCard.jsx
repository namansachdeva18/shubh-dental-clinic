'use client';
import { useState, useEffect } from 'react';
import { Star, Sparkles, Volume2, Square, ThumbsUp, Heart, CheckCircle2 } from 'lucide-react';

const highlightTrustWords = (text) => {
  if (!text) return null;
  const keywords = [
    'amazing', 'perfect', 'painless', 'best', 'highly recommend', 'friendly', 
    'professional', 'comfortable', 'great', 'excellent', 'gentle', 'care', 
    'smooth', 'brilliant', 'clean', 'hygienic', 'safe', 'trust', 'beautiful', 
    'smile', 'expert', 'affordable', 'happy', 'thank you', '5 star', 'five star', 
    'awesome', 'superb', 'outstanding', 'fantastic', 'recommended'
  ];
  const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) => {
    if (keywords.some(k => k.toLowerCase() === part.toLowerCase())) {
      return <span key={i} className="cute-highlight-word">{part}</span>;
    }
    return part;
  });
};

// Fun and cute avatar palette generator based on patient name
const getAvatarTheme = (name = '') => {
  const themes = [
    { bg: 'linear-gradient(135deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)', text: '#FFFFFF', emoji: '🌸', pillBg: '#FFF0F3', pillColor: '#D9386E' },
    { bg: 'linear-gradient(135deg, #F6D365 0%, #FDA085 100%)', text: '#FFFFFF', emoji: '✨', pillBg: '#FFF8E7', pillColor: '#B85C00' },
    { bg: 'linear-gradient(135deg, #84FAB0 0%, #8FD3F4 100%)', text: '#0A3D2F', emoji: '🌿', pillBg: '#EDFCF4', pillColor: '#0E7A53' },
    { bg: 'linear-gradient(135deg, #A18CD1 0%, #FBC2EB 100%)', text: '#FFFFFF', emoji: '💜', pillBg: '#F7EEFD', pillColor: '#6B3AA6' },
    { bg: 'linear-gradient(135deg, #FFE29F 0%, #FFA99F 100%)', text: '#592000', emoji: '🌟', pillBg: '#FFF5EB', pillColor: '#B84500' },
    { bg: 'linear-gradient(135deg, #96FBC4 0%, #F9F586 100%)', text: '#194D33', emoji: '🍀', pillBg: '#F0FDF4', pillColor: '#15803D' },
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash += name.charCodeAt(i);
  return themes[hash % themes.length];
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
    : 'SP';

  const theme = getAvatarTheme(review.name || '');

  const handleToggleSpeech = (e) => {
    e.stopPropagation();
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel();
      const textToSpeak = `${review.name} shared: ${review.review}`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 0.95;
      utterance.pitch = 1.05; // Slightly warmer, friendlier pitch
      
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  return (
    <article className="cute-review-card">
      {/* Cute Smiling Tooth & Sparkles SVG Watermark */}
      <svg className="cute-card-watermark" viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <path
          d="M60 20C40 20 28 32 28 50C28 68 40 92 48 104C52 110 56 110 60 104C64 110 68 110 72 104C80 92 92 68 92 50C92 32 80 20 60 20Z"
          fill="url(#toothCuteGrad)"
          opacity="0.09"
        />
        {/* Smiling curve */}
        <path d="M48 56 Q60 68 72 56" stroke="#D67A41" strokeWidth="2.5" strokeLinecap="round" opacity="0.18" />
        {/* Rosy cheeks */}
        <circle cx="44" cy="54" r="3" fill="#FF8A80" opacity="0.25" />
        <circle cx="76" cy="54" r="3" fill="#FF8A80" opacity="0.25" />
        {/* Sparkles */}
        <path d="M96 28L98 34L104 36L98 38L96 44L94 38L88 36L94 34Z" fill="#F59E0B" opacity="0.3" />
        <defs>
          <linearGradient id="toothCuteGrad" x1="0" y1="0" x2="120" y2="120">
            <stop offset="0%" stopColor="#FF9A8B" />
            <stop offset="100%" stopColor="#D67A41" />
          </linearGradient>
        </defs>
      </svg>

      {/* Top Cute Ribbon Header */}
      <div className="cute-card-top-ribbon">
        <div className="cute-verified-pill" title="Verified Google Business Profile Review">
          <svg className="google-g-svg" viewBox="0 0 24 24" width="14" height="14">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
          <span>Google Verified</span>
        </div>

        {/* Listen AI voice narration button */}
        <button
          onClick={handleToggleSpeech}
          className={`cute-speech-btn hide-mobile ${isPlayingAudio ? 'speech-active' : ''}`}
          title={isPlayingAudio ? "Stop Audio" : "Listen to patient review"}
        >
          {isPlayingAudio ? (
            <>
              <Square size={10} fill="currentColor" />
              <span className="cute-audio-bars">
                <span /><span /><span />
              </span>
            </>
          ) : (
            <>
              <Volume2 size={13} />
              <span>Listen</span>
            </>
          )}
        </button>
      </div>

      {/* Patient Avatar & Profile Row */}
      <div className="cute-profile-row">
        <div className="cute-avatar-container">
          <div className="cute-avatar" style={{ background: theme.bg, color: theme.text }}>
            <span>{initials}</span>
          </div>
          <span className="cute-avatar-badge" title="Happy Patient">{theme.emoji}</span>
        </div>

        <div className="cute-profile-info">
          <h4 className="cute-patient-name">{review.name}</h4>
          <span className="cute-treatment-tag" style={{ background: theme.pillBg, color: theme.pillColor }}>
            ✨ {review.treatment || 'Smile Transformation'}
          </span>
        </div>
      </div>

      {/* 5 Shiny Golden Stars & Date */}
      <div className="cute-rating-row">
        <div className="cute-stars-cluster" aria-label={`5 out of 5 stars rating`}>
          {[...Array(review.rating || 5)].map((_, i) => (
            <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" strokeWidth={0} />
          ))}
        </div>
        <span className="cute-review-date">{review.date || 'Verified Patient'}</span>
      </div>

      {/* Review Text Quote */}
      <blockquote className="cute-quote-body">
        <span className="cute-quote-mark">“</span>
        <div className="cute-quote-text">
          {highlightTrustWords(review.review)}
        </div>
      </blockquote>

      {/* Doctor Attribution & Joy Delight Score Footer */}
      <div className="cute-card-footer">
        <div className="cute-doctor-attribution">
          <CheckCircle2 size={13} color="#D67A41" />
          <span>{review.doctor ? `Treated by ${review.doctor}` : 'Shubh Dental Specialist Care'}</span>
        </div>

        <div className="cute-delight-badge">
          <Heart size={11} fill="#EF4444" color="#EF4444" />
          <span>100% Delight</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .cute-review-card {
          position: relative;
          background: linear-gradient(165deg, #FFFFFF 0%, #FFFDFB 60%, #FFF8F0 100%);
          border-radius: 30px;
          padding: 1.75rem 1.85rem;
          border: 1.8px solid rgba(214, 122, 65, 0.18);
          box-shadow: 
            0 12px 35px rgba(74, 37, 24, 0.06),
            0 2px 8px rgba(214, 122, 65, 0.04);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 0.95rem;
          width: 100%;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }

        .cute-review-card:hover {
          transform: translateY(-8px) scale(1.015);
          box-shadow: 
            0 24px 50px rgba(74, 37, 24, 0.12),
            0 6px 18px rgba(214, 122, 65, 0.15);
          border-color: rgba(214, 122, 65, 0.45);
        }

        /* WATERMARK */
        .cute-card-watermark {
          position: absolute;
          right: -15px;
          bottom: -15px;
          width: 135px;
          height: 135px;
          pointer-events: none;
          z-index: 0;
          transition: transform 0.5s ease;
        }
        .cute-review-card:hover .cute-card-watermark {
          transform: scale(1.1) rotate(-5deg);
        }

        /* TOP RIBBON */
        .cute-card-top-ribbon {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }

        .cute-verified-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(66, 133, 244, 0.08);
          border: 1px solid rgba(66, 133, 244, 0.22);
          padding: 0.22rem 0.65rem;
          border-radius: 99px;
          font-size: 0.7rem;
          font-weight: 800;
          color: #1A73E8;
          letter-spacing: 0.02em;
        }

        .cute-speech-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #FAF8F5;
          border: 1px solid rgba(122, 52, 15, 0.2);
          color: #7A340F;
          padding: 0.25rem 0.7rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .cute-speech-btn:hover {
          background: #D67A41;
          color: #FFFFFF;
          border-color: #D67A41;
          transform: scale(1.05);
        }
        .cute-speech-btn.speech-active {
          background: #110805;
          color: #F4B382;
          border-color: #110805;
        }
        .cute-audio-bars {
          display: flex;
          align-items: flex-end;
          gap: 2px;
          height: 10px;
        }
        .cute-audio-bars span {
          width: 2px;
          background: currentColor;
          animation: barJump 0.6s ease-in-out infinite alternate;
        }
        .cute-audio-bars span:nth-child(1) { height: 4px; }
        .cute-audio-bars span:nth-child(2) { height: 10px; animation-delay: 0.2s; }
        .cute-audio-bars span:nth-child(3) { height: 6px; animation-delay: 0.4s; }
        @keyframes barJump {
          0% { height: 3px; }
          100% { height: 10px; }
        }

        /* PROFILE ROW */
        .cute-profile-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          position: relative;
          z-index: 1;
        }

        .cute-avatar-container {
          position: relative;
          flex-shrink: 0;
        }

        .cute-avatar {
          width: 48px;
          height: 48px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.05rem;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }
        .cute-review-card:hover .cute-avatar {
          transform: rotate(-4deg) scale(1.06);
        }

        .cute-avatar-badge {
          position: absolute;
          bottom: -4px;
          right: -4px;
          font-size: 0.8rem;
          background: #FFFFFF;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .cute-profile-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          flex-grow: 1;
        }

        .cute-patient-name {
          font-family: var(--font-heading);
          font-size: 1.08rem;
          font-weight: 900;
          color: #0E0604;
          line-height: 1.2;
          margin: 0;
        }

        .cute-treatment-tag {
          align-self: flex-start;
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.15rem 0.6rem;
          border-radius: 99px;
          letter-spacing: 0.01em;
        }

        /* RATING ROW */
        .cute-rating-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }

        .cute-stars-cluster {
          display: flex;
          gap: 3px;
        }

        .cute-review-date {
          font-size: 0.74rem;
          font-weight: 700;
          color: #8A7063;
        }

        /* QUOTE BODY */
        .cute-quote-body {
          position: relative;
          margin: 0.1rem 0;
          padding: 0;
          z-index: 1;
          flex-grow: 1;
        }

        .cute-quote-mark {
          font-family: Georgia, serif;
          font-size: 2.2rem;
          line-height: 1;
          color: #D67A41;
          opacity: 0.35;
          position: absolute;
          top: -6px;
          left: -4px;
          pointer-events: none;
        }

        .cute-quote-text {
          font-size: 0.94rem;
          line-height: 1.65;
          color: #1A0D08;
          font-weight: 500;
          padding-left: 0.85rem;
        }

        .cute-highlight-word {
          background: linear-gradient(120deg, rgba(255, 183, 77, 0.28) 0%, rgba(255, 213, 79, 0.4) 100%);
          color: #8A3B00;
          font-weight: 800;
          padding: 0.05rem 0.3rem;
          border-radius: 6px;
          display: inline;
        }

        /* FOOTER */
        .cute-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          padding-top: 0.75rem;
          border-top: 1.5px dashed rgba(214, 122, 65, 0.18);
          position: relative;
          z-index: 1;
          flex-wrap: wrap;
        }

        .cute-doctor-attribution {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #6E5448;
        }
        .cute-doc-icon {
          font-size: 0.9rem;
        }

        .cute-delight-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: #FFF1F2;
          color: #E11D48;
          border: 1px solid rgba(225, 29, 72, 0.2);
          padding: 0.18rem 0.55rem;
          border-radius: 99px;
          font-size: 0.68rem;
          font-weight: 800;
        }

        @media (max-width: 768px) {
          .cute-review-card {
            padding: 1.1rem 1.15rem !important;
            border-radius: 20px !important;
          }
          .cute-avatar {
            width: 38px !important;
            height: 38px !important;
            font-size: 0.85rem !important;
          }
          .cute-patient-name {
            font-size: 0.95rem !important;
          }
          .cute-treatment-tag {
            font-size: 0.68rem !important;
            padding: 0.15rem 0.5rem !important;
          }
          .cute-quote-body {
            margin: 0.5rem 0 !important;
          }
          .cute-quote-text {
            font-size: 0.85rem !important;
            line-height: 1.45 !important;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .cute-card-footer {
            padding-top: 0.5rem !important;
          }
        }
      `}} />
    </article>
  );
}
