'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, Zap, Award, Image as ImageIcon, 
  Globe2, Calendar, Smile, 
  Compass, Stethoscope, ArrowUpRight
} from 'lucide-react';

const NAV_DEPARTMENTS = [
  {
    id: 'why-choose-us',
    title: 'Why Choose Us',
    sub: '20+ Yrs & In-House Lab',
    badge: 'Legacy',
    badgeColor: 'copper',
    icon: Award,
    href: '/why-choose-us',
    isAnchor: false,
  },
  {
    id: 'specialists',
    title: 'Specialists',
    sub: 'Prof. Dr. S.K. Yadav & Team',
    badge: 'Ex-PGI MDS',
    badgeColor: 'gold',
    icon: Award,
    href: '/doctors',
    isAnchor: false,
  },
  {
    id: 'treatments',
    title: 'All Treatments',
    sub: 'Full Clinical Spectrum',
    badge: 'Explore',
    badgeColor: 'blue',
    icon: Stethoscope,
    href: '/treatments',
    isAnchor: false,
  },
  {
    id: 'centres',
    title: 'Visiting Centres',
    sub: '6 NCR & Haryana Hubs',
    badge: 'NCR Network',
    badgeColor: 'gold',
    icon: Compass,
    href: '/visiting-centres',
    isAnchor: false,
  },
  {
    id: 'tourism',
    title: 'NRI & Tourism',
    sub: 'International Patient Care',
    badge: 'Global NRI',
    badgeColor: 'emerald',
    icon: Globe2,
    href: '/dental-tourism',
    isAnchor: false,
  },
  {
    id: 'gallery',
    title: 'Smile Gallery',
    sub: 'Before & After Proof',
    badge: '2.5L+ Smiles',
    badgeColor: 'purple',
    icon: ImageIcon,
    href: '/gallery',
    isAnchor: false,
  },
];

export default function QuickNavBar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleAnchorClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetEl = document.querySelector(href);
      if (targetEl) {
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className="inav-wrapper" aria-label="Interactive Clinical Navigation">
      <div className="inav-dock">
        
        {/* TOP STATUS / QUICK BAR */}
        <div className="inav-top-bar">
          <div className="inav-status-pill">
            <span className="inav-live-dot" />
            <Compass size={13} className="inav-compass-icon" />
            <span className="inav-status-title">QUICK NAVIGATION</span>
            <span className="inav-status-divider">·</span>
            <span className="inav-status-sub">Explore Hospital Services &amp; Specialists</span>
          </div>

          <div className="inav-quick-cta-wrapper">
            <a 
              href="#book" 
              onClick={(e) => handleAnchorClick(e, '#book')}
              className="inav-quick-book-btn"
            >
              <Calendar size={13} />
              <span className="inav-book-btn-text">Book Appointment</span>
              <span className="inav-book-btn-text-mob">Book Slot</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        {/* DEPARTMENT TILES GRID (SYMMETRIC 6-TILE MATRIX: 3x2 on Desktop / 2x3 on Mobile) */}
        <div className="inav-grid">
          {NAV_DEPARTMENTS.map((dept) => {
            const Icon = dept.icon;
            const isSelected = activeItem === dept.id;

            const content = (
              <div 
                className={`inav-tile ${isSelected ? 'inav-tile--active' : ''}`}
                onMouseEnter={() => setActiveItem(dept.id)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <div className="inav-tile-header">
                  <div className={`inav-icon-box inav-icon-${dept.badgeColor}`}>
                    <Icon size={16} strokeWidth={2.2} />
                  </div>
                  <span className={`inav-badge inav-badge-${dept.badgeColor}`}>
                    {dept.badge}
                  </span>
                </div>

                <div className="inav-tile-body">
                  <div className="inav-tile-title font-heading">{dept.title}</div>
                  <div className="inav-tile-sub">{dept.sub}</div>
                </div>

                <div className="inav-tile-glow" />
              </div>
            );

            if (dept.isAnchor) {
              return (
                <a
                  key={dept.id}
                  href={dept.href}
                  onClick={(e) => handleAnchorClick(e, dept.href)}
                  className="inav-link-wrapper"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={dept.id}
                href={dept.href}
                className="inav-link-wrapper"
              >
                {content}
              </Link>
            );
          })}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .inav-wrapper {
          width: 100%;
          position: relative;
        }

        .inav-dock {
          background: linear-gradient(145deg, #170C08 0%, #0F0705 50%, #1A0D08 100%);
          border: 1.5px solid rgba(214, 122, 65, 0.28);
          border-radius: 24px;
          padding: 1.25rem 1.35rem 1.35rem;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28), 0 0 30px rgba(214, 122, 65, 0.08);
          position: relative;
          overflow: hidden;
        }

        .inav-dock::before {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(244, 179, 130, 0.45), transparent);
          pointer-events: none;
        }

        /* ── TOP BAR ─────────────────────────────────── */
        .inav-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          gap: 0.5rem;
          flex-wrap: nowrap;
          width: 100%;
        }

        .inav-book-btn-text-mob {
          display: none;
        }

        .inav-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(214, 122, 65, 0.2);
          padding: 0.35rem 0.85rem;
          border-radius: 99px;
          font-size: 0.74rem;
        }

        .inav-live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 8px #10B981;
          animation: inavPulse 2s infinite ease-in-out;
        }

        @keyframes inavPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        .inav-compass-icon {
          color: #F4B382;
        }

        .inav-status-title {
          font-weight: 800;
          color: #F4B382;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .inav-status-divider {
          color: rgba(255, 255, 255, 0.3);
        }

        .inav-status-sub {
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
        }

        .inav-quick-book-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          font-size: 0.78rem;
          font-weight: 800;
          padding: 0.45rem 0.95rem;
          border-radius: 99px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(214, 122, 65, 0.35);
          transition: all 0.2s ease;
        }

        .inav-quick-book-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(214, 122, 65, 0.5);
          color: #FFFFFF;
        }

        /* ── GRID TILES (SYMMETRIC 3x2 / 2x3 MATRIX) ── */
        .inav-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .inav-link-wrapper {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .inav-tile {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(214, 122, 65, 0.16);
          border-radius: 16px;
          padding: 0.9rem 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          position: relative;
          overflow: hidden;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
          box-sizing: border-box;
        }

        .inav-tile:hover, .inav-tile--active {
          background: rgba(255, 255, 255, 0.075);
          border-color: rgba(214, 122, 65, 0.45);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35), 0 0 16px rgba(214, 122, 65, 0.15);
        }

        .inav-tile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.35rem;
        }

        .inav-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .inav-tile:hover .inav-icon-box {
          transform: scale(1.08);
        }

        .inav-icon-gold {
          background: rgba(245, 158, 11, 0.15);
          color: #F59E0B;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }
        .inav-icon-copper {
          background: rgba(214, 122, 65, 0.18);
          color: #F4B382;
          border: 1px solid rgba(214, 122, 65, 0.35);
        }
        .inav-icon-teal {
          background: rgba(20, 184, 166, 0.15);
          color: #2DD4BF;
          border: 1px solid rgba(20, 184, 166, 0.3);
        }
        .inav-icon-blue {
          background: rgba(59, 130, 246, 0.15);
          color: #60A5FA;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }
        .inav-icon-purple {
          background: rgba(168, 85, 247, 0.15);
          color: #C084FC;
          border: 1px solid rgba(168, 85, 247, 0.3);
        }
        .inav-icon-emerald {
          background: rgba(16, 185, 129, 0.15);
          color: #34D399;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .inav-badge {
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          padding: 0.14rem 0.46rem;
          border-radius: 99px;
          white-space: nowrap;
        }

        .inav-badge-gold {
          background: rgba(245, 158, 11, 0.12);
          color: #FBBF24;
          border: 1px solid rgba(245, 158, 11, 0.25);
        }
        .inav-badge-copper {
          background: rgba(214, 122, 65, 0.15);
          color: #F4B382;
          border: 1px solid rgba(214, 122, 65, 0.25);
        }
        .inav-badge-teal {
          background: rgba(20, 184, 166, 0.12);
          color: #5EEAD4;
          border: 1px solid rgba(20, 184, 166, 0.25);
        }
        .inav-badge-blue {
          background: rgba(59, 130, 246, 0.12);
          color: #93C5FD;
          border: 1px solid rgba(59, 130, 246, 0.25);
        }
        .inav-badge-purple {
          background: rgba(168, 85, 247, 0.12);
          color: #E9D5FF;
          border: 1px solid rgba(168, 85, 247, 0.25);
        }
        .inav-badge-emerald {
          background: rgba(16, 185, 129, 0.12);
          color: #6EE7B7;
          border: 1px solid rgba(16, 185, 129, 0.25);
        }

        .inav-tile-body {
          display: flex;
          flex-direction: column;
          gap: 0.18rem;
        }

        .inav-tile-title {
          font-size: 0.86rem;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }

        .inav-tile-sub {
          font-size: 0.68rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.25;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .inav-tile:hover .inav-tile-sub {
          color: rgba(255, 255, 255, 0.85);
        }

        /* ── RESPONSIVE RULES ────────────────────────── */
        @media (max-width: 768px) {
          .inav-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
          }
          .inav-dock {
            padding: 0.85rem 0.9rem;
            border-radius: 20px;
          }
          .inav-status-divider,
          .inav-status-sub {
            display: none !important;
          }
          .inav-top-bar {
            flex-wrap: nowrap !important;
            margin-bottom: 0.75rem;
            gap: 0.4rem;
          }
          .inav-status-pill {
            padding: 0.28rem 0.55rem !important;
            font-size: 0.64rem !important;
            gap: 0.3rem !important;
            flex-shrink: 1;
            min-width: 0;
          }
          .inav-status-title {
            font-size: 0.62rem !important;
            letter-spacing: 0.04em !important;
          }
          .inav-quick-book-btn {
            padding: 0.28rem 0.65rem !important;
            font-size: 0.68rem !important;
            flex-shrink: 0 !important;
            gap: 0.25rem !important;
            box-shadow: 0 2px 8px rgba(214, 122, 65, 0.3) !important;
          }
          .inav-book-btn-text {
            display: none !important;
          }
          .inav-book-btn-text-mob {
            display: inline !important;
          }
        }

        @media (max-width: 580px) {
          .inav-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.45rem;
          }
          .inav-tile {
            padding: 0.7rem 0.65rem;
            border-radius: 14px;
          }
          .inav-tile-title {
            font-size: 0.8rem;
          }
          .inav-tile-sub {
            font-size: 0.64rem;
          }
        }
      `}} />
    </nav>
  );
}
