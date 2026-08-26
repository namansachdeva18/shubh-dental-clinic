'use client';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Award, ShieldCheck, GraduationCap, CheckCircle2, 
  Sparkles, Star, ChevronRight
} from 'lucide-react';

export default function DoctorsCardIntro() {
  return (
    <section className="doctors-scrub-section" aria-label="Chief Specialists">
      <div className="container">
        
        <div className="doctors-scrub-card">
          {/* Subtle Ambient Background Gradients */}
          <div className="card-ambient-glow" aria-hidden="true" />
          
          <div className="doctors-scrub-grid">
            
            {/* LEFT: DOCTORS SCRUB PHOTOGRAPH WITH ELEGANT FRAME */}
            <div className="doctors-photo-column">
              <div className="doctors-photo-frame">
                <Image
                  src="/doctors_scrubs.jpeg"
                  alt="Dr. (Prof.) S. K. Yadav and Dr. (Prof.) Achla Yadav in clinic scrubs at Shubh Dental Clinic"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                  priority
                />
              </div>
            </div>

            {/* RIGHT: DETAILED CREDENTIALS CARDS FOR BOTH DOCTORS */}
            <div className="doctors-content-column">
              
              {/* Header Pill */}
              <div className="doctors-mini-badge">
                <Sparkles size={13} className="sparkle-icon" />
                <span>Meet Your Senior Specialists</span>
              </div>

              <h2 className="doctors-main-heading font-heading">
                Decades of PGI Mastery &amp; <span className="copper-gradient">World-Class Clinical Care</span>
              </h2>

              <p className="doctors-intro-desc">
                Personally planned and treated by Haryana&apos;s leading dental academic leaders and senior specialists — never delegated to junior trainees.
              </p>

              {/* 2 COMPACT PROFILE TILES */}
              <div className="doctor-tiles-container">
                
                {/* DOCTOR 1: DR. S. K. YADAV */}
                <div className="doctor-tile">
                  <div className="doctor-tile-header">
                    <div>
                      <h3 className="doc-tile-name font-heading">Dr. (Prof.) S. K. Yadav</h3>
                      <div className="doc-tile-degrees">BDS, MDS · Fellow WFO (USA)</div>
                    </div>
                    <span className="doc-tag-gold">Chief Orthodontist</span>
                  </div>

                  <div className="doc-specs-list">
                    <div className="doc-spec-item">
                      <CheckCircle2 size={15} className="check-gold" />
                      <span><strong>Braces &amp; Implants Specialist</strong> · 5,000+ Braces Cases · Consultant Invisalign® Provider</span>
                    </div>
                    <div className="doc-spec-item">
                      <CheckCircle2 size={15} className="check-gold" />
                      <span><strong>Certified Implantologist</strong> · 3,000+ Implants Placed</span>
                    </div>
                    <div className="doc-experience-row">
                      <GraduationCap size={14} className="grad-icon" />
                      <span>Ex. SR PGI Chandigarh · Ex. Consultant ESI Hospital Bhiwani · Ex. Dental Surgeon ECHS Rewari · Ex. Prof. DJ Dental College</span>
                    </div>
                  </div>
                </div>

                {/* DOCTOR 2: DR. ACHLA YADAV */}
                <div className="doctor-tile">
                  <div className="doctor-tile-header">
                    <div>
                      <h3 className="doc-tile-name font-heading">Dr. (Prof.) Achla Yadav</h3>
                      <div className="doc-tile-degrees">BDS, MDS, MIAOMP</div>
                    </div>
                    <span className="doc-tag-green">Oral Pathologist &amp; Cosmetic Dentist</span>
                  </div>

                  <div className="doc-specs-list">
                    <div className="doc-spec-item">
                      <CheckCircle2 size={15} className="check-gold" />
                      <span><strong>Consultant Oral Pathologist</strong> · Pre-Cancer &amp; Biopsy Screening</span>
                    </div>
                    <div className="doc-spec-item">
                      <CheckCircle2 size={15} className="check-gold" />
                      <span><strong>Certified Cosmetic Dentist</strong> · Porcelain Veneers &amp; Smile Design</span>
                    </div>
                    <div className="doc-experience-row">
                      <GraduationCap size={14} className="grad-icon" />
                      <span>Ex. Asst. Professor PGI Rohtak · Ex. Dental Surgeon ECHS Rewari · Ex. Prof. DJ Dental College</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* ACTION BUTTONS */}
              <div className="doctors-cta-bar">
                <Link href="/doctors" className="btn-scrubs-link">
                  <span>Full Detailed Bios</span>
                  <ChevronRight size={14} />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .doctors-scrub-section {
          padding: 1.5rem 0 2.5rem;
          position: relative;
          width: 100%;
        }

        .doctors-scrub-card {
          background: linear-gradient(145deg, #170C08 0%, #0F0705 50%, #1A0D08 100%);
          border: 1.5px solid rgba(214, 122, 65, 0.3);
          border-radius: 28px;
          padding: 2rem;
          color: #FFFFFF;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
        }

        .card-ambient-glow {
          position: absolute;
          top: -30%;
          right: -10%;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .doctors-scrub-grid {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 2.25rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* ── PHOTO FRAME ─────────────────────────────── */
        .doctors-photo-column {
          width: 100%;
        }

        .doctors-photo-frame {
          position: relative;
          width: 100%;
          height: 520px;
          border-radius: 22px;
          overflow: hidden;
          border: 2px solid rgba(214, 122, 65, 0.35);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
        }

        .photo-trust-badge {
          position: absolute;
          bottom: 14px;
          left: 14px;
          right: 14px;
          background: rgba(13, 7, 5, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(214, 122, 65, 0.4);
          border-radius: 14px;
          padding: 0.65rem 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 8px 20px rgba(0,0,0,0.4);
        }

        .trust-badge-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: linear-gradient(135deg, #D67A41, #B85D26);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .trust-badge-text strong {
          display: block;
          font-size: 0.82rem;
          color: #FFFFFF;
          line-height: 1.2;
        }
        .trust-badge-text span {
          display: block;
          font-size: 0.7rem;
          color: #F4B382;
          margin-top: 1px;
        }

        /* ── CONTENT COLUMN ──────────────────── */
        .doctors-content-column {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .doctors-mini-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(214, 122, 65, 0.15);
          color: #F4B382;
          border: 1px solid rgba(214, 122, 65, 0.3);
          padding: 0.25rem 0.8rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          width: fit-content;
        }
        .sparkle-icon { color: #D67A41; }

        .doctors-main-heading {
          font-size: clamp(1.5rem, 2.6vw, 2.1rem);
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1.2;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .copper-gradient {
          background: linear-gradient(135deg, #D67A41 0%, #F4B382 50%, #EAA77C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .doctors-intro-desc {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.5;
          margin: 0 0 0.4rem;
        }

        /* ── DOCTOR TILES ────────────────────────────── */
        .doctor-tiles-container {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .doctor-tile {
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(214, 122, 65, 0.22);
          border-radius: 18px;
          padding: 1rem 1.2rem;
          transition: all 0.2s ease;
        }
        .doctor-tile:hover {
          border-color: rgba(214, 122, 65, 0.45);
          background: rgba(0, 0, 0, 0.45);
        }

        .doctor-tile-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 0.6rem;
          flex-wrap: wrap;
        }

        .doc-tile-name {
          font-size: 1.22rem;
          font-weight: 900;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.2;
        }

        .doc-tile-degrees {
          font-size: 0.78rem;
          font-weight: 700;
          color: #F4B382;
          margin-top: 2px;
          letter-spacing: 0.02em;
        }

        .doc-tag-gold {
          font-size: 0.7rem;
          font-weight: 800;
          background: rgba(214, 122, 65, 0.2);
          border: 1px solid rgba(214, 122, 65, 0.4);
          color: #F4B382;
          padding: 0.2rem 0.65rem;
          border-radius: 99px;
        }

        .doc-tag-green {
          font-size: 0.7rem;
          font-weight: 800;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34D399;
          padding: 0.2rem 0.65rem;
          border-radius: 99px;
        }

        .doc-specs-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .doc-spec-item {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.35;
        }
        .doc-spec-item strong {
          color: #FFFFFF;
        }
        .check-gold {
          color: #D67A41;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .doc-experience-row {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          font-size: 0.73rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.4;
          margin-top: 0.25rem;
          padding-top: 0.45rem;
          border-top: 1px dashed rgba(214, 122, 65, 0.18);
        }
        .grad-icon {
          color: #F4B382;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* ── CTA BAR ─────────────────────────────────── */
        .doctors-cta-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
        }

        .btn-scrubs-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: linear-gradient(135deg, #D67A41 0%, #B85D26 100%);
          color: #FFFFFF;
          padding: 0.65rem 1.15rem;
          border-radius: 12px;
          font-weight: 800;
          font-size: 0.82rem;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(214, 122, 65, 0.35);
          transition: all 0.2s ease;
        }
        .btn-scrubs-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(214, 122, 65, 0.5);
        }

        .btn-scrubs-wa {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(37, 211, 102, 0.15);
          color: #25D366;
          border: 1px solid rgba(37, 211, 102, 0.3);
          padding: 0.65rem 1rem;
          border-radius: 12px;
          font-weight: 800;
          font-size: 0.82rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .btn-scrubs-wa:hover {
          background: rgba(37, 211, 102, 0.25);
        }

        .btn-scrubs-link {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          color: #F4B382;
          font-size: 0.82rem;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .btn-scrubs-link:hover {
          color: #FFFFFF;
        }

        /* ── RESPONSIVE ──────────────────────────────── */
        @media (max-width: 1024px) {
          .doctors-scrub-grid {
            grid-template-columns: 340px 1fr;
            gap: 1.5rem;
          }
          .doctors-photo-frame {
            height: 460px;
          }
        }

        @media (max-width: 860px) {
          .doctors-scrub-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .doctors-photo-frame {
            height: 380px;
          }
          .doctors-scrub-card {
            padding: 1.25rem;
            border-radius: 20px;
          }
          .btn-scrubs-link {
            margin-left: 0;
            width: 100%;
            justify-content: center;
          }
          .doctors-cta-bar {
            flex-direction: column;
          }
          .btn-scrubs-primary, .btn-scrubs-wa {
            width: 100%;
            justify-content: center;
          }
        }
      `}} />
    </section>
  );
}
