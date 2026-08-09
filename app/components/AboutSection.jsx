'use client';
import { motion } from 'framer-motion';
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  Stethoscope, 
  Zap, 
  Heart, 
  CreditCard, 
  FileText, 
  GraduationCap 
} from 'lucide-react';
import ScrollReveal, { StaggerReveal, StaggerItem } from './ScrollReveal';

export default function AboutSection() {
  const pillars = [
    {
      id: 'pillar-pgi',
      title: 'Ex-PGI MDS Specialists',
      desc: <>Led by <span className="text-highlight">Prof. Dr. S. K. Yadav</span> (MDS Orthodontics, <span className="text-highlight">Certified Invisalign® Provider</span>) &amp; <span className="text-highlight">Dr. Achla Bharti Yadav</span>. We bring <span className="text-highlight">PGI residency standards</span> directly to Rohtak.</>,
      icon: Stethoscope,
      badge: 'Expertise'
    },
    {
      id: 'pillar-digital',
      title: 'In-House 3D Lab',
      desc: <>Equipped with <span className="text-highlight">state-of-the-art 3D intraoral scanners</span>. We design and manufacture custom <span className="text-highlight">SkyAlign™ clear aligners in-house</span> for a faster, precise fit.</>,
      icon: Sparkles,
      badge: 'Technology'
    },
    {
      id: 'pillar-painless',
      title: 'Painless Laser Care',
      desc: <>Utilizing <span className="text-highlight">Soft-Tissue Clinical Lasers</span> for bloodless, <span className="text-highlight">pain-free gum reshaping</span> &amp; <span className="text-highlight">3D CBCT guided planning</span> for flapless dental implant placements.</>,
      icon: Zap,
      badge: 'Comfort'
    },
    {
      id: 'pillar-sterilization',
      title: 'Triple-Autoclave Safety',
      desc: <>We enforce <span className="text-highlight">strict multi-stage autoclave sterilization protocols</span> matching international hospital standards to guarantee a <span className="text-highlight">100% sterile environment</span>.</>,
      icon: ShieldCheck,
      badge: 'Sterilization'
    },
    {
      id: 'pillar-emi',
      title: '0% Interest Easy EMI',
      desc: <><span className="text-highlight">Interest-free monthly installment plans (0% EMI)</span> available for clear aligners, self-ligating braces, and multi-unit dental implant surgeries.</>,
      icon: CreditCard,
      badge: 'Finance'
    },
    {
      id: 'pillar-research',
      title: '654+ Citation Citadels',
      desc: <>Our directors are <span className="text-highlight">active global researchers</span> with over <span className="text-highlight">107 peer-reviewed scientific publications</span> in leading international dentistry journals.</>,
      icon: GraduationCap,
      badge: 'Research'
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-us-wrapper" aria-label="Why Choose Shubh Dental Clinic Rohtak">
      
      {/* Background soft glowing lights */}
      <div className="why-bg-glow-1"></div>
      <div className="why-bg-glow-2"></div>

      <div className="why-container">
        
        {/* Section Header */}
        <ScrollReveal className="why-header text-center" variant="fadeUp" style={{ maxWidth: '880px', margin: '0 auto 3rem' }}>
          <div className="cool-live-badge">
            <span className="cool-pulse-dot" aria-hidden="true" />
            <span>CLINICAL EXCELLENCE &amp; TRUST PROOF</span>
          </div>
          <h2 className="cool-gallery-title">
            Rohtak&apos;s Premier
            <span className="cool-title-highlight">Orthodontic &amp; Implant Center</span>
          </h2>
          <p style={{ color: '#2A150D', fontSize: '1.1rem', maxWidth: '750px', margin: '0.8rem auto 1.5rem', lineHeight: 1.7, fontWeight: 500 }}>
            Combining <span className="text-highlight">academic mastery</span> with <span className="text-highlight">advanced 3D digital dentistry</span> to deliver <span className="text-highlight">painless, sterile, and world-class dental care</span> in Haryana.
          </p>
        </ScrollReveal>

        {/* 1. COMPACT LUXURY TRUST DASHBOARD PANEL */}
        <ScrollReveal className="luxury-dashboard-panel" variant="scaleReveal" delay={0.1}>
          <div className="panel-glow" />
          
          <div className="dashboard-content-split">
            <div className="dashboard-left">
              <h4 className="dashboard-panel-title font-heading">
                Clinic Accreditations &amp; Proof
              </h4>
              <p className="dashboard-panel-desc">
                Operating under the highest global standards of diagnostic precision and patient comfort.
              </p>

              {/* Counters Grid */}
              <div className="dashboard-counters-grid">
                <div className="dashboard-counter-card">
                  <span className="dashboard-counter-num font-heading">5000+</span>
                  <span className="dashboard-counter-label">Transformations</span>
                </div>
                <div className="dashboard-counter-card">
                  <span className="dashboard-counter-num font-heading">20+</span>
                  <span className="dashboard-counter-label">Years Exp.</span>
                </div>
                <div className="dashboard-counter-card">
                  <span className="dashboard-counter-num font-heading">107</span>
                  <span className="dashboard-counter-label">Publications</span>
                </div>
              </div>
            </div>

            <div className="dashboard-right">
              {/* Accreditation Bullet List */}
              <div className="dashboard-accreditation-list">
                <div className="dashboard-list-item">
                  <div className="dashboard-logo-wrap">
                    <img src="/invisalign-logo.png" alt="Invisalign" className="dashboard-list-logo" />
                  </div>
                  <span>Certified <strong>Invisalign®</strong> Aligner Provider</span>
                </div>
                <div className="dashboard-list-item">
                  <div className="dashboard-logo-wrap">
                    <img src="/wfo-logo.png" alt="WFO USA" className="dashboard-list-logo" />
                  </div>
                  <span>Fellow of the <strong>World Federation of Orthodontists (WFO, USA)</strong></span>
                </div>
                <div className="dashboard-list-item">
                  <div className="dashboard-logo-wrap">
                    <img src="/damon-logo.png" alt="Damon Braces" className="dashboard-list-logo" />
                  </div>
                  <span>Official <strong>Damon® Braces</strong> System Provider</span>
                </div>
                <div className="dashboard-list-item">
                  <div className="dashboard-logo-wrap">
                    <img src="/ios-logo.png" alt="IOS Endorsed" className="dashboard-list-logo" />
                  </div>
                  <span>Endorsed by the <strong>Indian Orthodontic Society (IOS)</strong></span>
                </div>
              </div>

              {/* Patient Trust Call To Action */}
              <a 
                href="#book" 
                className="dashboard-action-btn" 
                id="cta-why-choose-us"
              >
                Schedule Free Scan Consultation <ArrowRightIcon size={15} />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. COMPACT 3-COLUMN PILLAR FEATURE CARDS (DARK GLASS LUXURY THEME) */}
        <div className="why-pillars-grid">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="pillar-card"
                id={item.id}
              >
                <div className="pillar-header-row">
                  <div className="pillar-icon-box">
                    <Icon size={18} />
                  </div>
                  <span className="pillar-tag">{item.badge}</span>
                </div>
                <h3 className="pillar-title font-heading">{item.title}</h3>
                <p className="pillar-desc">{item.desc}</p>
              </motion.article>
            );
          })}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .why-choose-us-wrapper {
          padding: 5rem 1.5rem;
          background: #FAF8F5;
          position: relative;
          overflow: hidden;
        }

        /* Ambient Glow Blurs */
        .why-bg-glow-1 {
          position: absolute;
          top: -10%;
          left: -15%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.04) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .why-bg-glow-2 {
          position: absolute;
          bottom: -10%;
          right: -15%;
          width: 45vw;
          height: 45vw;
          background: radial-gradient(circle, rgba(201, 168, 76, 0.03) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
        }

        .why-container {
          max-width: 1240px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Header Styles */
        .why-header {
          max-width: 800px;
          margin: 0 auto 3rem;
          text-align: center;
        }

        /* Cool Live Badge & Heading overrides */
        .cool-live-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background: rgba(122, 52, 15, 0.06);
          border: 1.5px solid rgba(122, 52, 15, 0.25);
          color: #7A340F;
          padding: 0.45rem 1.25rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: inset 0 1px 2px rgba(122, 52, 15, 0.05);
          margin-bottom: 1.25rem;
        }
        .cool-pulse-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulseBeacon 1.8s infinite;
        }
        .cool-gallery-title {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 900;
          color: #0E0604;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .cool-title-highlight {
          background: linear-gradient(135deg, #7A340F 0%, #D67A41 50%, #B85C24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 900;
        }
        @keyframes pulseBeacon {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }

        /* 1. LUXURY DASHBOARD PANEL */
        .luxury-dashboard-panel {
          background: linear-gradient(135deg, #1A0D08 0%, #2A150B 100%);
          border-radius: 28px;
          border: 1.5px solid rgba(214, 122, 65, 0.35);
          padding: 2.5rem;
          color: #FFFFFF;
          box-shadow: 0 25px 60px rgba(17, 8, 5, 0.25);
          position: relative;
          overflow: hidden;
          margin-bottom: 3.5rem;
        }

        .panel-glow {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          background: rgba(214, 122, 65, 0.15);
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
        }

        .dashboard-content-split {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: center;
        }

        .dashboard-panel-title {
          font-size: 1.5rem;
          font-weight: 900;
          color: #FFFFFF;
          margin-bottom: 0.6rem;
          letter-spacing: -0.01em;
        }

        .dashboard-panel-desc {
          font-size: 0.9rem;
          color: #D1C5C0;
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }

        /* Counters Grid */
        .dashboard-counters-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
        }

        .dashboard-counter-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 1rem 0.5rem;
          text-align: center;
          transition: background 0.3s ease;
        }

        .dashboard-counter-card:hover {
          background: rgba(255, 255, 255, 0.07);
        }

        .counter-num {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 900;
          color: #F4B382;
          margin-bottom: 0.15rem;
        }

        .counter-label {
          font-size: 0.68rem;
          color: #B5A7A2;
          font-weight: 700;
          line-height: 1.25;
        }

        /* Right split panel */
        .dashboard-accreditation-list {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          margin-bottom: 1.75rem;
        }

        .dashboard-logo-wrap {
          width: 96px;
          height: 46px;
          border-radius: 10px;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          padding: 2px 6px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);
          border: 1px solid rgba(255, 255, 255, 0.85);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dashboard-list-item:hover .dashboard-logo-wrap {
          transform: translateY(-2px) scale(1.06);
          box-shadow: 0 8px 20px rgba(214, 122, 65, 0.2);
          border-color: rgba(214, 122, 65, 0.3);
        }

        .dashboard-list-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .dashboard-list-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.88rem;
          color: #F0E8E4;
          line-height: 1.35;
          cursor: default;
        }

        .dashboard-list-item strong {
          color: #F4B382;
        }

        .dashboard-action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.85rem 1.5rem;
          border-radius: 99px;
          background: linear-gradient(135deg, #D67A41 0%, #B85C24 100%);
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.88rem;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 10px 25px rgba(214, 122, 65, 0.25);
          transition: all 0.3s ease;
        }

        .dashboard-action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(214, 122, 65, 0.35);
        }

        /* 2. COMPACT 3-COLUMN Grid (Luxury Dark Glass) */
        .why-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .pillar-card {
          background: rgba(17, 8, 5, 0.95);
          border: 1.5px solid rgba(214, 122, 65, 0.25);
          border-radius: 20px;
          padding: 1.75rem 1.5rem;
          box-shadow: 0 10px 30px rgba(17, 8, 5, 0.08);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pillar-card:hover {
          transform: translateY(-5px);
          border-color: rgba(214, 122, 65, 0.5);
          box-shadow: 0 20px 45px rgba(214, 122, 65, 0.15);
        }

        .pillar-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.1rem;
        }

        .pillar-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(214, 122, 65, 0.2), rgba(201, 168, 76, 0.15));
          color: #F4B382;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .pillar-card:hover .pillar-icon-box {
          transform: scale(1.08) rotate(3deg);
        }

        .pillar-tag {
          font-size: 0.65rem;
          font-weight: 800;
          color: #F4B382;
          background: rgba(244, 179, 130, 0.1);
          padding: 0.2rem 0.55rem;
          border-radius: 5px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .pillar-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.6rem;
          line-height: 1.35;
        }

        .pillar-desc {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.6;
        }

        /* Responsive Layout styles */
        @media (max-width: 1024px) {
          .dashboard-content-split {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .why-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .why-choose-us-wrapper {
            padding: 3.5rem 1rem;
          }
          .why-headline {
            font-size: 1.85rem;
          }
          .dashboard-counters-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .why-pillars-grid {
            grid-template-columns: 1fr;
          }
          .luxury-dashboard-panel {
            padding: 1.75rem 1.25rem;
          }
        }
      `}} />
    </section>
  );
}

// Inline Arrow Right Icon
function ArrowRightIcon({ size = 16, className = '' }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}