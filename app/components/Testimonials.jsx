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
  const [coverflowIndex, setCoverflowIndex] = useState(0);

  // Automated 3D Coverflow Auto-Slide (every 5 seconds if active)
  useEffect(() => {
    if (viewMode !== 'coverflow' || !isAutoPlaying) return;
    const timer = setInterval(() => {
      setCoverflowIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [viewMode, isAutoPlaying]);

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

        {/* --- 3D COVERFLOW SHOWCASE DECK MODE --- */}
        {viewMode === 'coverflow' && (
          <div className="coverflow-deck-wrapper">
            
            <div className="coverflow-deck-stage">
              
              {/* Left 3D Card */}
              {filteredReviews[prevIdx] && (
                <div 
                  className="coverflow-card card-left"
                  onClick={() => setCoverflowIndex(prevIdx)}
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
                >
                  <ReviewCard review={filteredReviews[nextIdx]} />
                </div>
              )}

            </div>

            {/* 3D Coverflow Controls */}
            <div className="coverflow-nav-bar">
              <button 
                onClick={() => setCoverflowIndex(prevIdx)}
                className="cf-nav-btn"
                title="Previous Patient Story"
              >
                <ChevronLeft size={18} /> Previous
              </button>

              <div className="cf-controls-right">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="pause-toggle-btn"
                  title={isAutoPlaying ? "Pause Auto-Rotation" : "Play Auto-Rotation"}
                >
                  {isAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
                  <span>{isAutoPlaying ? 'Auto-Rotating' : 'Paused'}</span>
                </button>
              </div>

              <button 
                onClick={() => setCoverflowIndex(nextIdx)}
                className="cf-nav-btn"
                title="Next Patient Story"
              >
                Next <ChevronRight size={18} />
              </button>
            </div>

          </div>
        )}

        {/* --- 60fps INFINITE MARQUEE STREAM MODE --- */}
        {viewMode === 'marquee' && (
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
        {viewMode === 'grid' && (
          <div className="reviews-display-area">
            <div className="desktop-masonry">
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
        {hasMore && viewMode !== 'coverflow' && (
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
          margin-top: 3rem;
          perspective: 1200px;
        }
        .coverflow-deck-stage {
          display: flex;
          align-items: stretch;
          justify-content: center;
          gap: 1.5rem;
          min-height: 460px;
          position: relative;
        }
        .coverflow-card {
          flex: 0 0 420px;
          max-width: 440px;
          display: flex;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
        }
        .card-left {
          transform: rotateY(28deg) scale(0.85) translateZ(-60px);
          opacity: 0.6;
          filter: blur(0.5px);
        }
        .card-center {
          transform: rotateY(0deg) scale(1.08) translateZ(40px);
          z-index: 10;
          opacity: 1;
        }
        .spotlight-aura-ring {
          position: absolute;
          inset: -15px;
          border-radius: 36px;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.22) 0%, rgba(201, 168, 76, 0.08) 60%, transparent 80%);
          pointer-events: none;
          z-index: -1;
          filter: blur(12px);
        }
        .card-right {
          transform: rotateY(-28deg) scale(0.85) translateZ(-60px);
          opacity: 0.6;
          filter: blur(0.5px);
        }

        /* COVERFLOW CONTROLS */
        .coverflow-nav-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 750px;
          margin: 2.5rem auto 0;
          gap: 1rem;
        }
        .cf-controls-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .pause-toggle-btn {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.25);
          border-radius: 99px;
          padding: 0.4rem 0.9rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-muted);
          cursor: pointer;
        }
        .cf-nav-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #FFFFFF;
          border: 1.5px solid rgba(214, 122, 65, 0.25);
          color: var(--text-primary);
          padding: 0.75rem 1.6rem;
          border-radius: 99px;
          font-weight: 700;
          font-size: 0.88rem;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
          transition: all 0.3s ease;
        }
        .cf-nav-btn:hover {
          background: var(--text-primary);
          color: var(--accent-gold-light);
          border-color: var(--text-primary);
        }
        .cf-index-indicator {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-secondary);
        }
        .cf-index-indicator span {
          color: var(--accent-gold-dark);
          font-size: 1.2rem;
          font-weight: 800;
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

        /* RESPONSIVE MEDIA QUERIES FOR CLEAN MOBILE LAYOUT */
        @media (max-width: 1024px) {
          .testimonials-section { padding: 3rem 0 4rem; }
          .google-review-cta-banner { padding: 2rem 1.5rem; }
          
          /* Mobile 3D Coverflow */
          .coverflow-deck-wrapper {
            perspective: none;
            margin-top: 1.25rem;
          }
          .coverflow-deck-stage {
            min-height: auto !important;
            height: auto !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
            position: relative;
            gap: 0 !important;
          }
          .coverflow-card {
            flex: none !important;
            display: flex !important;
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            transform: none !important;
          }
          .card-left, .card-right {
            display: none !important;
          }
          .card-center {
            transform: none !important;
            z-index: 10 !important;
            width: 100% !important;
            max-width: 100% !important;
            position: relative !important;
          }
          .spotlight-aura-ring {
            display: none !important;
          }
          .coverflow-nav-bar {
            gap: 0.75rem;
            margin-top: 1.25rem;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            width: 100%;
          }
          .cf-controls-right {
            order: initial;
            width: auto;
            justify-content: center;
          }
          .cf-nav-btn {
            padding: 0.55rem 1.1rem;
            font-size: 0.82rem;
          }
          
          /* Mobile Marquee & Grid */
          .desktop-masonry {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          .masonry-column:nth-child(3) {
            display: none;
          }
        }
      `}} />
    </section>
  );
}
