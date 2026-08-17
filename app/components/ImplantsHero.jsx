'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Zap, CheckCircle2, Star } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import AnimatedCounter from './AnimatedCounter';

const CLINICAL_CASES = [
  {
    id: 'implant-case-1',
    label: 'Same-Day Front Tooth',
    duration: '24 Hrs',
    beforeSrc: '/front-before.webp',
    afterSrc: '/front-after.webp',
    beforeAlt: 'Immediate implant showing missing front tooth',
    afterAlt: 'Immediate implant showing missing front tooth',
  },
  {
    id: 'implant-case-2',
    label: 'Full Mouth Rehab',
    duration: 'Same Day Fixed',
    beforeSrc: '/fullarch-before.webp',
    afterSrc: '/fullarch-after.webp',
    beforeAlt: 'Full mouth rehabilitation implant treatment',
    afterAlt: 'Full mouth rehabilitation implant treatment',
  }
];

export default function ImplantsHero() {
  const [selectedCase, setSelectedCase] = useState(CLINICAL_CASES[0]);

  return (
    <section className="implants-compact-section" aria-label="Dental Implants">
      <div className="container">
        
        <div className="implants-compact-grid">
          
          {/* LEFT: Copy & Stats */}
          <div className="implants-left-col">
            <div className="section-badge badge-gold" style={{ display: 'inline-flex', gap: '0.4rem', marginBottom: '1rem' }}>
              <Zap size={14} /> Same-Day Dental Implants Rohtak — PGI-Trained Implantologist
            </div>
            
            <h2 className="implants-title">
              Replace Missing Teeth in Rohtak with <br/>
              <span className="text-gradient-copper">Same-Day Permanent Implants</span>
            </h2>
            
            <p className="implants-desc">
              Walk in with missing teeth — walk out with fixed, fully functional teeth in just 24 hours. Led by <span className="text-highlight">Dr. (Prof.) S. K. Yadav</span> (Ex-SR PGI Chandigarh).
            </p>

            {/* Compact Stats */}
            <div className="implants-mini-stats">
              <div className="mini-stat">
                <strong><AnimatedCounter target={3000} suffix="+" /></strong>
                <span>Implants Placed</span>
              </div>
              <div className="mini-stat-divider hide-mobile"></div>
              <div className="mini-stat">
                <strong><AnimatedCounter target={98} suffix=".4%" isDecimal={true} /></strong>
                <span>Success Rate</span>
              </div>
              <div className="mini-stat-divider hide-mobile"></div>
              <div className="mini-stat">
                <strong>10 Yrs</strong>
                <span>Warranty</span>
              </div>
            </div>

            <ul className="implants-features">
              <li><CheckCircle2 size={16} className="feature-icon" /> Flapless 3D Guided Surgery (No Stitches)</li>
              <li><CheckCircle2 size={16} className="feature-icon" /> 100% Metal-Free Zirconia Crowns</li>
              <li className="hide-mobile"><CheckCircle2 size={16} className="feature-icon" /> 0% EMI Available</li>
            </ul>

            <Link href="#book" className="btn btn-gold implants-cta">
              Book Implant Consultation
            </Link>
          </div>

          {/* RIGHT: Visual Proof */}
          <div className="implants-right-col">
            <div className="implants-proof-card">
              
              <div className="proof-header">
                <div className="proof-tabs">
                  {CLINICAL_CASES.map(c => (
                    <button 
                      key={c.id} 
                      onClick={() => setSelectedCase(c)}
                      className={`proof-tab ${selectedCase.id === c.id ? 'active' : ''}`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="proof-slider-container">
                <BeforeAfterSlider
                  beforeSrc={selectedCase.beforeSrc}
                  afterSrc={selectedCase.afterSrc}
                  beforeAlt={selectedCase.beforeAlt}
                  afterAlt={selectedCase.afterAlt}
                />
              </div>

              <div className="proof-footer hide-mobile">
                <div className="proof-doc">
                  <Image src="/dr-sk-yadav.webp" alt="Dr. S. K. Yadav" width={32} height={32} className="doc-avatar" />
                  <div>
                    <div className="doc-name">Dr. (Prof.) S. K. Yadav</div>
                    <div className="doc-stars">
                      {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="#F59E0B" stroke="none" />)}
                    </div>
                  </div>
                </div>
                <div className="proof-badge">Real Patient Result</div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .implants-compact-section {
          background: #0A0705;
          padding: 5rem 0;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(214, 122, 65, 0.1);
          border-bottom: 1px solid rgba(214, 122, 65, 0.1);
        }

        .implants-compact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        /* LEFT COL */
        .implants-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 3.5vw, 3rem);
          color: #fff;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1rem;
        }
        
        .implants-desc {
          color: rgba(255,255,255,0.75);
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 90%;
        }

        .implants-mini-stats {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(214, 122, 65, 0.2);
          padding: 1.2rem 1.5rem;
          border-radius: 16px;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .mini-stat {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        
        .mini-stat strong {
          font-family: var(--font-heading);
          color: var(--accent-gold-light);
          font-size: 1.5rem;
          font-weight: 800;
          line-height: 1;
        }
        
        .mini-stat span {
          color: rgba(255,255,255,0.6);
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .mini-stat-divider {
          width: 1px;
          height: 30px;
          background: rgba(255,255,255,0.1);
        }

        .implants-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .implants-features li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(255,255,255,0.85);
          font-size: 0.95rem;
        }

        .feature-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        .implants-cta {
          padding: 1rem 2rem;
          font-size: 1rem;
        }

        /* RIGHT COL */
        .implants-proof-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(214, 122, 65, 0.15);
          border-radius: 24px;
          padding: 1rem;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }

        .proof-header {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .proof-tabs {
          display: inline-flex;
          background: rgba(0,0,0,0.3);
          border-radius: 99px;
          padding: 0.3rem;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .proof-tab {
          background: transparent;
          color: rgba(255,255,255,0.6);
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 99px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .proof-tab.active {
          background: var(--accent-gold);
          color: #fff;
        }

        .proof-slider-container {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .proof-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1rem;
          padding: 0 0.5rem;
        }

        .proof-doc {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .doc-avatar {
          border-radius: 50%;
          border: 1px solid var(--accent-gold);
        }

        .doc-name {
          color: #fff;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .doc-stars {
          display: flex;
          gap: 2px;
          margin-top: 2px;
        }

        .proof-badge {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.6);
          font-size: 0.65rem;
          text-transform: uppercase;
          padding: 0.3rem 0.6rem;
          border-radius: 6px;
          letter-spacing: 0.05em;
        }

        @media (max-width: 992px) {
          .implants-compact-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .implants-desc { max-width: 100%; }
        }

        @media (max-width: 768px) {
          .implants-compact-section { padding: 2.5rem 0 !important; }
          .implants-title { font-size: 1.55rem !important; line-height: 1.25 !important; margin-bottom: 0.6rem !important; }
          .implants-desc { font-size: 0.88rem !important; line-height: 1.5 !important; margin-bottom: 1.25rem !important; }
          
          .implants-mini-stats {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 0.5rem !important;
            padding: 0.75rem 0.85rem !important;
            border-radius: 14px !important;
            margin-bottom: 1.25rem !important;
            text-align: center !important;
          }
          .mini-stat strong { font-size: 1.15rem !important; }
          .mini-stat span { font-size: 0.6rem !important; }
          .mini-stat-divider { display: none !important; }

          .implants-features { margin-bottom: 1.25rem !important; gap: 0.5rem !important; }
          .implants-features li { font-size: 0.82rem !important; gap: 0.5rem !important; }

          .implants-cta { width: 100% !important; text-align: center !important; justify-content: center !important; padding: 0.8rem 1.5rem !important; }
          
          .implants-proof-card {
            border-radius: 18px !important;
            padding: 0.75rem !important;
          }
          .proof-header { margin-bottom: 0.6rem !important; }
          .proof-tabs { width: 100% !important; display: flex !important; }
          .proof-tab { flex: 1 !important; text-align: center !important; padding: 0.45rem 0.5rem !important; font-size: 0.75rem !important; }

          .hide-mobile { display: none !important; }
        }
      `}} />
    </section>
  );
}
