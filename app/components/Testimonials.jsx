'use client';
import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, Search, ChevronDown, Sparkles, Pause, Play, Zap, ChevronLeft, ChevronRight, Layers, Grid, ExternalLink } from 'lucide-react';
import reviews from '../data/reviews';
import ReviewCard from './ReviewCard';
import ScrollReveal from './ScrollReveal';

const EXACT_FILTERS = [
  'All Reviews',
  'Braces',
  'Invisible Aligners',
  'Dental Implants',
  'Root Canal Treatment',
  'Cosmetic Dentistry',
  'General Dentistry',
  'Patient Care',
  'Pain-Free Treatment',
  'Smile Transformation'
];

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState('All Reviews');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(12);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [viewMode, setViewMode] = useState('coverflow'); // 'coverflow' | 'marquee' | 'grid'
  const effectiveViewMode = activeFilter === 'All Reviews' ? viewMode : 'grid';
  const [coverflowIndex, setCoverflowIndex] = useState(0);

  // Automated 3D Coverflow Auto-Slide (every 5 seconds if active)
  useEffect(() => {
    if (effectiveViewMode !== 'coverflow' || !isAutoPlaying) return;
    const timer = setInterval(() => {
      setCoverflowIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [effectiveViewMode, isAutoPlaying]);

  // Filter & Search Logic
  const filteredReviews = useMemo(() => {
    return reviews.filter((r) => {
      const matchesFilter =
        activeFilter === 'All Reviews' ||
        (r.treatment && r.treatment.toLowerCase() === activeFilter.toLowerCase()) ||
        r.tags.some((t) => t.toLowerCase() === activeFilter.toLowerCase());

      const matchesSearch =
        !searchQuery ||
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.review.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (r.treatment && r.treatment.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesFilter && matchesSearch;
    }).sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [activeFilter, searchQuery]);

  const displayedReviews = filteredReviews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredReviews.length;

  // 3D Coverflow Triplet Calculation
  const coverflowCount = filteredReviews.length;
  const prevIdx = (coverflowIndex - 1 + coverflowCount) % coverflowCount;
  const nextIdx = (coverflowIndex + 1) % coverflowCount;

  return (
    <section className="section testimonials-section" aria-label="Patient Testimonials & Google Reviews">
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <ScrollReveal className="section-header text-center" variant="fadeUp" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div className="cool-live-badge">
            <span className="cool-pulse-dot" aria-hidden="true" />
            <span>LIVE VERIFIED GOOGLE REVIEWS</span>
          </div>

          <h2 className="cool-gallery-title">
            Real Patient
            <span className="cool-title-highlight">5-Star Testimonials</span>
          </h2>
          
          <p style={{ color: '#2A150D', fontSize: '1.1rem', maxWidth: '750px', margin: '0.8rem auto 1.5rem', lineHeight: 1.7, fontWeight: 500 }}>
            Read authentic, unedited Google Reviews from patients who achieved their dream smile at <strong style={{ color: '#0E0604', fontWeight: 800 }}>Shubh Orthodontic &amp; Dental Clinic</strong>.
          </p>
        </ScrollReveal>



        {/* Touch Category Filter Pills */}
        <div className="testimonials-filter-bar-wrapper">
          <div className="testimonials-filter-bar">
            {EXACT_FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setVisibleCount(12);
                  setCoverflowIndex(0);
                }}
                className={`filter-pill ${activeFilter === filter ? 'filter-pill-active' : ''}`}
              >
                {filter}
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeReviewFilter"
                    className="filter-pill-bg"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* --- DESKTOP 3D COVERFLOW / MARQUEE / GRID (HIDDEN ON MOBILE) --- */}
        <div className="hide-mobile">
          {/* --- 3D COVERFLOW SHOWCASE DECK MODE --- */}
          {effectiveViewMode === 'coverflow' && (
            <div className="coverflow-deck-wrapper">
              
              <div className="coverflow-deck-stage">
                
                {/* Left 3D Card */}
                {filteredReviews[prevIdx] && (
                  <div 
                    className="coverflow-card card-left"
                    onClick={() => setCoverflowIndex(prevIdx)}
                    title="Click to view previous patient story"
                  >
                    <ReviewCard review={filteredReviews[prevIdx]} />
                  </div>
                )}

                {/* Center Active Card */}
                {filteredReviews[coverflowIndex] && (
                  <div className="coverflow-card card-center">
                    <div className="spotlight-aura-ring" />
                    <ReviewCard review={filteredReviews[coverflowIndex]} />
                  </div>
                )}

                {/* Right 3D Card */}
                {filteredReviews[nextIdx] && (
                  <div 
                    className="coverflow-card card-right"
                    onClick={() => setCoverflowIndex(nextIdx)}
                    title="Click to view next patient story"
                  >
                    <ReviewCard review={filteredReviews[nextIdx]} />
                  </div>
                )}

              </div>

              {/* 3D Coverflow Controls - Cute Glass Capsule */}
              <div className="coverflow-nav-bar">
                <button 
                  onClick={() => setCoverflowIndex(prevIdx)}
                  className="cf-nav-btn"
                  title="Previous Patient Story"
                >
                  <ChevronLeft size={17} />
                  <span>Previous</span>
                </button>

                <div className="cf-story-dots-wrap">
                  <div className="cf-story-counter">
                    <span className="cf-counter-current">{coverflowIndex + 1}</span>
                    <span className="cf-counter-slash">/</span>
                    <span className="cf-counter-total">{filteredReviews.length}</span>
                  </div>

                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className={`cute-pause-toggle ${isAutoPlaying ? 'is-playing' : ''}`}
                    title={isAutoPlaying ? "Pause Auto-Slide" : "Play Auto-Slide"}
                  >
                    <span className="cute-play-dot" />
                    <span>{isAutoPlaying ? 'Auto-Flowing' : 'Paused'}</span>
                  </button>
                </div>

                <button 
                  onClick={() => setCoverflowIndex(nextIdx)}
                  className="cf-nav-btn"
                  title="Next Patient Story"
                >
                  <span>Next</span>
                  <ChevronRight size={17} />
                </button>
              </div>

            </div>
          )}

          {/* --- 60fps INFINITE MARQUEE STREAM MODE --- */}
          {effectiveViewMode === 'marquee' && (
            <div className="reviews-display-area auto-scroll-enabled">
              <div className="desktop-masonry">
                <div className="masonry-column col-scroll-up">
                  {[...displayedReviews.filter((_, i) => i % 3 === 0), ...displayedReviews.filter((_, i) => i % 3 === 0)].map((r, i) => (
                    <ReviewCard key={`mq1-${r.id}-${i}`} review={r} />
                  ))}
                </div>
                <div className="masonry-column col-scroll-down">
                  {[...displayedReviews.filter((_, i) => i % 3 === 1), ...displayedReviews.filter((_, i) => i % 3 === 1)].map((r, i) => (
                    <ReviewCard key={`mq2-${r.id}-${i}`} review={r} />
                  ))}
                </div>
                <div className="masonry-column col-scroll-up">
                  {[...displayedReviews.filter((_, i) => i % 3 === 2), ...displayedReviews.filter((_, i) => i % 3 === 2)].map((r, i) => (
                    <ReviewCard key={`mq3-${r.id}-${i}`} review={r} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* --- FULL GALLERY GRID MODE --- */}
          {effectiveViewMode === 'grid' && (
            <div className="reviews-display-area">
              <div className="desktop-masonry" style={displayedReviews.length < 3 ? { display: 'flex', justifyContent: 'center', flexWrap: 'wrap' } : {}}>
                <div className="masonry-column">
                  {displayedReviews.filter((_, i) => i % 3 === 0).map((r) => (
                    <ReviewCard key={`gr1-${r.id}`} review={r} />
                  ))}
                </div>
                <div className="masonry-column">
                  {displayedReviews.filter((_, i) => i % 3 === 1).map((r) => (
                    <ReviewCard key={`gr2-${r.id}`} review={r} />
                  ))}
                </div>
                <div className="masonry-column">
                  {displayedReviews.filter((_, i) => i % 3 === 2).map((r) => (
                    <ReviewCard key={`gr3-${r.id}`} review={r} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Load More Button */}
          {hasMore && effectiveViewMode !== 'coverflow' && (
            <div className="text-center" style={{ marginTop: '3rem' }}>
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="btn btn-gold load-more-btn"
              >
                Load More Verified Reviews ({filteredReviews.length - visibleCount} remaining)
                <ChevronDown size={18} />
              </button>
            </div>
          )}
        </div>

        {/* --- MOBILE NATIVE SWIPEABLE CAROUSEL (SHOWN ONLY ON MOBILE) --- */}
        <div className="show-mobile mobile-testimonials-container">
          <div className="mobile-reviews-track">
            {filteredReviews.slice(0, 10).map((r, idx) => (
              <div key={`mob-${r.id || idx}`} className="mobile-review-item">
                <ReviewCard review={r} />
              </div>
            ))}
          </div>

          <div className="mobile-carousel-hint">
            <span className="swipe-arrow">←</span> Swipe to explore real patient stories <span className="swipe-arrow">→</span>
          </div>

          {/* Quick Google Review Link */}
          <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
            <a 
              href="https://maps.app.goo.gl/HW4Ve1Cf2Ye728CX8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="google-trust-cta-btn"
            >
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Read All 114+ Reviews on Google</span>
              <ExternalLink size={14} style={{ opacity: 0.7 }} />
            </a>
          </div>
        </div>





      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .testimonials-section {
          background: #FAF9F6;
          position: relative;
          overflow: hidden;
          padding: 4rem 0 6rem;
        }

        /* LIVE MARQUEE STREAM TICKER */
        .reviews-marquee-bar {
          width: 100%;
          background: #110805;
          border-top: 1px solid rgba(214, 122, 65, 0.3);
          border-bottom: 1px solid rgba(214, 122, 65, 0.3);
          overflow: hidden;
          padding: 0.75rem 0;
          position: relative;
          z-index: 5;
        }
        .marquee-content-track {
          display: flex;
          gap: 2.5rem;
          width: max-content;
          animation: marqueeScroll 180s linear infinite;
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
          gap: 0.5rem;
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.85);
          white-space: nowrap;
        }
        .marquee-dot { font-size: 0.65rem; }
        .marquee-name { font-weight: 700; color: var(--accent-gold-light); }
        .marquee-quote { font-style: italic; color: rgba(255, 255, 255, 0.75); }
        .marquee-stars { display: flex; gap: 0.1rem; }

        /* LIVE PULSE BEACON */
        .live-pulse-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulseBeacon 1.8s infinite;
        }

        /* AGGREGATE BADGE */
        .testimonials-agg-card {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: #FFFFFF;
          border: 1.5px solid rgba(122, 52, 15, 0.3);
          border-radius: 99px;
          padding: 0.6rem 1.4rem;
          box-shadow: 0 8px 25px rgba(74, 37, 24, 0.06);
          margin-top: 0.5rem;
        }
        .google-symbol {
          width: 24px; height: 24px;
          border-radius: 50%;
          background: #4285F4;
          color: #fff;
          font-weight: 900;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
        }
        .agg-score {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.05rem;
          color: #110805;
        }
        .agg-label {
          font-size: 0.85rem;
          color: #2A150D;
          font-weight: 700;
        }

        /* VIEW MODE TABS SWITCHER */
        .view-mode-tabs-wrapper {
          overflow-x: auto;
          scrollbar-width: none;
          margin-top: 1.5rem;
          padding: 0.5rem 1rem;
          width: 100%;
          text-align: center;
        }
        .view-mode-tabs-wrapper::-webkit-scrollbar { display: none; }
        .view-mode-tabs {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #FFFFFF;
          border: 1.5px solid rgba(214, 122, 65, 0.2);
          border-radius: 99px;
          padding: 0.35rem 0.5rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);
          white-space: nowrap;
        }
        .vm-tab {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1.25rem;
          border-radius: 99px;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-secondary);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .vm-tab-active {
          background: linear-gradient(135deg, #110805, #2A150B);
          color: var(--accent-gold-light);
          box-shadow: 0 4px 15px rgba(17, 8, 5, 0.2);
        }

        /* SEARCH BAR (HIGH CONTRAST & ELEGANT) */
        .search-filter-wrap {
          position: relative;
          max-width: 580px;
          margin: 2rem auto 1.5rem;
        }
        .search-icon {
          position: absolute;
          left: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          color: #B85C24;
        }
        .review-search-input {
          width: 100%;
          padding: 0.9rem 2.8rem 0.9rem 3.2rem;
          border-radius: 99px;
          border: 1.5px solid rgba(122, 52, 15, 0.35);
          background: #FFFFFF;
          font-size: 0.94rem;
          font-weight: 500;
          color: #110805;
          box-shadow: 0 4px 18px rgba(74, 37, 24, 0.05);
          outline: none;
          transition: all 0.3s ease;
        }
        .review-search-input::placeholder {
          color: #6B5244;
          opacity: 0.85;
        }
        .review-search-input:focus {
          border-color: #D67A41;
          box-shadow: 0 8px 25px rgba(214, 122, 65, 0.2);
        }
        .clear-search-btn {
          position: absolute;
          right: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 1rem;
          color: #8A3D14;
          cursor: pointer;
        }

        /* FILTER BAR TOUCH WRAPPER */
        .testimonials-filter-bar-wrapper {
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-bottom: 0.5rem;
          padding-left: 1rem;
          padding-right: 1rem;
          width: 100%;
        }
        .testimonials-filter-bar-wrapper::-webkit-scrollbar {
          display: none;
        }
        .testimonials-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          width: max-content;
          margin: 1.5rem auto 0;
        }
        .filter-pill {
          position: relative;
          padding: 0.55rem 1.25rem;
          border-radius: 99px;
          font-size: 0.84rem;
          font-weight: 800;
          color: #1A0C06 !important;
          background: #FFFFFF;
          border: 1.5px solid rgba(122, 52, 15, 0.3);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          outline: none;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(122, 52, 15, 0.04);
        }
        .filter-pill:hover {
          color: #7A340F !important;
          border-color: #D67A41;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(214, 122, 65, 0.15);
        }
        .filter-pill-active {
          color: #F4B382 !important;
          border-color: #110805 !important;
          box-shadow: 0 8px 20px rgba(17, 8, 5, 0.25) !important;
        }
        .filter-pill-bg {
          position: absolute;
          inset: 0;
          border-radius: 99px;
          background: linear-gradient(135deg, #110805 0%, #2A150B 100%);
          z-index: -1;
        }

        /* 3D COVERFLOW SHOWCASE DECK STAGE */
        .coverflow-deck-wrapper {
          margin-top: 2.75rem;
          perspective: 1400px;
        }
        .coverflow-deck-stage {
          display: flex;
          align-items: stretch;
          justify-content: center;
          gap: 1.5rem;
          min-height: 480px;
          position: relative;
        }
        .coverflow-card {
          flex: 0 0 430px;
          max-width: 450px;
          display: flex;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          position: relative;
        }
        .card-left {
          transform: rotateY(22deg) scale(0.88) translateZ(-40px);
          opacity: 0.65;
          filter: blur(0.3px);
        }
        .card-left:hover {
          opacity: 0.9;
          transform: rotateY(16deg) scale(0.92) translateZ(-10px);
        }
        .card-center {
          transform: rotateY(0deg) scale(1.06) translateZ(50px);
          z-index: 10;
          opacity: 1;
        }
        .spotlight-aura-ring {
          position: absolute;
          inset: -20px;
          border-radius: 44px;
          background: radial-gradient(circle, rgba(255, 154, 139, 0.25) 0%, rgba(214, 122, 65, 0.18) 50%, transparent 75%);
          pointer-events: none;
          z-index: -1;
          filter: blur(16px);
          animation: cuteGlowPulse 4s ease-in-out infinite alternate;
        }
        @keyframes cuteGlowPulse {
          0% { transform: scale(0.96); opacity: 0.7; }
          100% { transform: scale(1.04); opacity: 1; }
        }
        .card-right {
          transform: rotateY(-22deg) scale(0.88) translateZ(-40px);
          opacity: 0.65;
          filter: blur(0.3px);
        }
        .card-right:hover {
          opacity: 0.9;
          transform: rotateY(-16deg) scale(0.92) translateZ(-10px);
        }

        /* COVERFLOW CONTROLS - CUTE CAPSULE */
        .coverflow-nav-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 650px;
          margin: 2.5rem auto 0;
          background: #FFFFFF;
          border: 1.5px solid rgba(214, 122, 65, 0.2);
          border-radius: 99px;
          padding: 0.5rem 0.65rem;
          box-shadow: 0 10px 30px rgba(74, 37, 24, 0.06);
          gap: 1rem;
        }
        .cf-story-dots-wrap {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .cf-story-counter {
          font-family: var(--font-heading);
          font-size: 0.92rem;
          font-weight: 800;
          color: #7A340F;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .cf-counter-current {
          font-size: 1.15rem;
          color: #D67A41;
          font-weight: 900;
        }
        .cf-counter-slash {
          color: rgba(122, 52, 15, 0.3);
        }
        .cf-counter-total {
          color: #8A7063;
        }
        .cute-pause-toggle {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.2);
          border-radius: 99px;
          padding: 0.3rem 0.75rem;
          font-size: 0.74rem;
          font-weight: 800;
          color: #7A340F;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .cute-pause-toggle:hover {
          background: #FFF1E8;
          border-color: #D67A41;
        }
        .cute-play-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6);
          animation: cuteDotPulse 1.8s infinite;
        }
        @keyframes cuteDotPulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6); }
          70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        .cf-nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: linear-gradient(135deg, #110805 0%, #2A150B 100%);
          color: #FFFDF9;
          border: none;
          padding: 0.65rem 1.4rem;
          border-radius: 99px;
          font-weight: 800;
          font-size: 0.84rem;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(17, 8, 5, 0.18);
          transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .cf-nav-btn:hover {
          transform: scale(1.05);
          background: linear-gradient(135deg, #D67A41 0%, #B85C24 100%);
          box-shadow: 0 8px 20px rgba(214, 122, 65, 0.35);
        }
        .cf-nav-btn:active {
          transform: scale(0.97);
        }

        /* REVIEWS DISPLAY AREA */
        .reviews-display-area {
          position: relative;
          width: 100%;
          margin-top: 3rem;
        }
        
        .auto-scroll-enabled {
          height: 750px;
          overflow: hidden;
          mask-image: linear-gradient(to bottom, transparent, black 3%, black 97%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 3%, black 97%, transparent);
        }

        /* MASONRY & MARQUEE COLUMNS */
        .desktop-masonry {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          align-items: start;
        }
        .masonry-column {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .auto-scroll-enabled .col-scroll-up {
          animation: vertScrollUp 130s linear infinite;
        }
        .auto-scroll-enabled .col-scroll-down {
          animation: vertScrollDown 150s linear infinite;
        }
        .auto-scroll-enabled .masonry-column:hover {
          animation-play-state: paused;
        }

        @keyframes vertScrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes vertScrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }

        /* MOBILE TESTIMONIALS CAROUSEL STYLES */
        .mobile-testimonials-container {
          margin-top: 1.5rem;
          width: 100%;
        }
        .mobile-reviews-track {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          gap: 1rem;
          padding: 0.5rem 1rem 1rem;
          margin: 0 -1rem;
        }
        .mobile-reviews-track::-webkit-scrollbar {
          display: none;
        }
        .mobile-review-item {
          flex: 0 0 calc(100vw - 3.5rem);
          max-width: 350px;
          scroll-snap-align: center;
          display: flex;
        }
        .mobile-review-item .google-review-card {
          padding: 1.25rem !important;
          border-radius: 20px !important;
          box-shadow: 0 8px 25px rgba(74, 37, 24, 0.06) !important;
        }
        .mobile-carousel-hint {
          text-align: center;
          font-size: 0.72rem;
          font-weight: 700;
          color: #7A340F;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-top: 0.25rem;
        }
        .mobile-carousel-hint .swipe-arrow {
          color: var(--accent-gold);
          font-size: 0.85rem;
          display: inline-block;
          margin: 0 0.2rem;
        }
        .google-trust-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #FFFFFF;
          border: 1.5px solid rgba(122, 52, 15, 0.25);
          color: #110805;
          padding: 0.65rem 1.25rem;
          border-radius: 99px;
          font-size: 0.82rem;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(74, 37, 24, 0.04);
          transition: all 0.25s ease;
        }
        .google-trust-cta-btn:active {
          transform: scale(0.97);
          background: #FAF8F5;
        }

        /* RESPONSIVE MEDIA QUERIES FOR CLEAN MOBILE LAYOUT */
        @media (max-width: 1024px) {
          .testimonials-section { padding: 3rem 0 4rem; }
          .google-review-cta-banner { padding: 2rem 1.5rem; }
          .desktop-masonry {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          .masonry-column:nth-child(3) {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 2.25rem 0 3rem !important;
          }
          .cool-gallery-title {
            font-size: clamp(1.6rem, 6vw, 2.2rem) !important;
          }
          .testimonials-filter-bar-wrapper {
            padding: 0 0.5rem 0.5rem !important;
          }
          .testimonials-filter-bar {
            margin: 1rem auto 0 !important;
            gap: 0.45rem !important;
          }
          .filter-pill {
            padding: 0.45rem 1rem !important;
            font-size: 0.78rem !important;
          }
          .hide-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        .show-mobile { display: none; }
      `}} />
    </section>
  );
}
