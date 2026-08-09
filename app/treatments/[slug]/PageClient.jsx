'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, Phone, Calendar, Sparkles, 
  ShieldCheck, Clock, Activity, ChevronDown, 
  ChevronUp, Stethoscope, AlertCircle, ImageIcon
} from 'lucide-react';

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className="faq-item">
      <button 
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="faq-q-text">{faq.q}</span>
        {isOpen ? <ChevronUp size={20} className="faq-icon" /> : <ChevronDown size={20} className="faq-icon" />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="faq-answer-wrapper"
          >
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function PageClient({ treatment }) {
  if (!treatment) return null;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="treatment-page-wrapper">
      <div className="treatment-container">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="breadcrumbs">
          <Link href="/">Home</Link>
          <span className="separator">/</span>
          <Link href="/#services">Treatments</Link>
          <span className="separator">/</span>
          <span className="current" aria-current="page">{treatment.title}</span>
        </nav>

        {/* Hero Banner */}
        <motion.div 
          className="treatment-hero-banner"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <div className="treatment-badge">
            <Sparkles size={14} />
            <span>Specialized Procedure</span>
          </div>

          <h1 className="treatment-title font-heading">{treatment.title}</h1>
          <p className="treatment-sub font-heading">{treatment.subtitle}</p>
          
          <div className="treatment-doctor-pill">
            <Stethoscope size={16} />
            <span>Under the expert care of <strong>{treatment.doctor}</strong></span>
          </div>

          <p className="treatment-desc">{treatment.overview}</p>

          <div className="treatment-ctas font-heading">
            <a href="tel:+918685048414" className="btn-treatment-call">
              <Phone size={16} />
              <span>Call Clinic</span>
            </a>
            <a 
              href="#book" 
              className="btn-treatment-book"
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </a>
          </div>
        </motion.div>

        {/* Treatment Snapshot */}
        {treatment.treatmentSnapshot && Object.keys(treatment.treatmentSnapshot).length > 0 && (
          <motion.div 
            className="treatment-snapshot-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <h2 className="sr-only">Treatment Overview Snapshot</h2>
            <div className="snapshot-grid">
              {Object.entries(treatment.treatmentSnapshot).map(([key, value], idx) => (
                <div key={idx} className="snapshot-item">
                  <span className="snapshot-key">{key}</span>
                  <span className="snapshot-val">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Benefits Section */}
        {treatment.benefits && treatment.benefits.length > 0 && (
          <motion.div 
            className="treatment-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <h2 className="card-section-title font-heading">
              <ShieldCheck className="title-icon icon-terracotta" />
              <span>Treatment Benefits</span>
            </h2>

            <div className="benefits-grid">
              {treatment.benefits.map((benefit, idx) => (
                <div key={idx} className="benefit-item">
                  <CheckCircle2 size={24} className="benefit-check" />
                  <div className="benefit-content">
                    <h3 className="benefit-title">{benefit.title}</h3>
                    {benefit.desc && <p className="benefit-desc">{benefit.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Phase by Phase Process */}
        {treatment.process && treatment.process.length > 0 && (
          <motion.div 
            className="treatment-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <h2 className="card-section-title font-heading">
              <Clock className="title-icon icon-gold" />
              <span>Phase-by-Phase Process</span>
            </h2>
            <p className="section-intro">Understanding exactly what to expect from your {treatment.title.toLowerCase()} journey.</p>

            <div className="process-timeline">
              {treatment.process.map((step, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-marker">
                    <span className="timeline-num">{step.step}</span>
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title font-heading">{step.title}</h3>
                    <p className="timeline-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Indications & Considerations (Symptoms, IdealFor, Limitations) */}
        <motion.div 
          className="treatment-card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <h2 className="card-section-title font-heading">
            <Activity className="title-icon icon-terracotta" />
            <span>Clinical Indications & Considerations</span>
          </h2>
          
          <div className="considerations-grid">
            {treatment.symptoms && treatment.symptoms.length > 0 && (
              <div className="consideration-box">
                <h3 className="consideration-title">Common Symptoms</h3>
                <ul className="consideration-list">
                  {treatment.symptoms.map((sym, i) => (
                    <li key={i}>{sym}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {treatment.idealFor && (
              <div className="consideration-box highlight-box">
                <h3 className="consideration-title">Ideal Candidate</h3>
                <p>{treatment.idealFor}</p>
              </div>
            )}

            {treatment.notIdealFor && (
              <div className="consideration-box alert-box">
                <h3 className="consideration-title">
                  <AlertCircle size={16} /> Not Recommended For
                </h3>
                <p>{treatment.notIdealFor}</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Before & After / Treatment Results Component (Placeholder architecture ready for CMS) */}
        <motion.div 
          className="treatment-card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <h2 className="card-section-title font-heading">
            <ImageIcon className="title-icon icon-gold" />
            <span>Treatment Results</span>
          </h2>
          <p className="section-intro">Clinical outcomes for {treatment.title.toLowerCase()}. Please note that individual results may vary based on anatomical and biological factors.</p>

          <div className="results-placeholder-box">
            {treatment.beforeAfterSlots > 0 ? (
              <div className="results-grid">
                {[...Array(treatment.beforeAfterSlots)].map((_, i) => (
                  <div key={i} className="before-after-slot">
                    <div className="image-placeholder before-img">
                      <span>Before</span>
                    </div>
                    <div className="image-placeholder after-img">
                      <span>After</span>
                    </div>
                    <div className="case-caption">Case Study {i + 1} - Typical {treatment.title} Result</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-visuals-message">
                <p>This is a functional or preventive procedure. Visual before-and-after representations are typically not applicable.</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* FAQs */}
        {treatment.faqs && treatment.faqs.length > 0 && (
          <motion.div 
            className="treatment-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <h2 className="card-section-title font-heading">
              <Sparkles className="title-icon icon-terracotta" />
              <span>Frequently Asked Questions</span>
            </h2>
            <div className="faqs-accordion">
              {treatment.faqs.map((faq, idx) => (
                <FAQItem key={idx} faq={faq} index={idx} />
              ))}
            </div>
          </motion.div>
        )}

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .treatment-page-wrapper {
          min-height: 100vh;
          padding: 3rem 1.5rem;
          background: #FAF9F6;
        }

        .treatment-container {
          max-width: 900px;
          margin: 0 auto;
        }

        /* Breadcrumbs */
        .breadcrumbs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #A09690;
          margin-bottom: 2rem;
        }
        .breadcrumbs a {
          color: #D67A41;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .breadcrumbs a:hover {
          color: #1A0C06;
        }
        .breadcrumbs .separator {
          color: #D1C5C0;
        }
        .breadcrumbs .current {
          color: #1A0C06;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Hero Banner */
        .treatment-hero-banner {
          background: linear-gradient(135deg, #1A0C06 0%, #382417 100%);
          border-radius: 24px;
          padding: 3.5rem 3rem;
          color: #FFFFFF;
          box-shadow: 0 20px 40px rgba(26, 12, 6, 0.15);
          border: 1px solid rgba(214, 122, 65, 0.2);
          margin-bottom: 2.5rem;
          position: relative;
          overflow: hidden;
        }
        .treatment-hero-banner::after {
          content: '';
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          pointer-events: none;
        }

        .treatment-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(201, 168, 76, 0.15);
          color: #C9A84C;
          padding: 0.35rem 1rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: 1px solid rgba(201, 168, 76, 0.3);
          margin-bottom: 1.5rem;
        }

        .treatment-title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.5rem;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .treatment-sub {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: #C9A84C;
          font-weight: 600;
          margin-bottom: 1.5rem;
          line-height: 1.4;
        }

        .treatment-doctor-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 12px;
          font-size: 0.9rem;
          color: #FFFFFF;
          margin-bottom: 2rem;
          backdrop-filter: blur(5px);
        }
        .treatment-doctor-pill strong {
          color: #D67A41;
        }

        .treatment-desc {
          font-size: 1.05rem;
          color: #EAE5E0;
          line-height: 1.7;
          max-width: 800px;
          margin-bottom: 2.5rem;
          font-weight: 400;
        }

        .treatment-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 2;
        }

        .btn-treatment-call, .btn-treatment-book {
          padding: 0.85rem 1.6rem;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 800;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .btn-treatment-call {
          background: linear-gradient(135deg, #D67A41 0%, #B85922 100%);
          color: #FFFFFF;
          box-shadow: 0 10px 24px rgba(214, 122, 65, 0.3);
        }
        .btn-treatment-call:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(214, 122, 65, 0.4);
        }

        .btn-treatment-book {
          background: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .btn-treatment-book:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.4);
        }

        /* Snapshot Card */
        .treatment-snapshot-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(214, 122, 65, 0.15);
          box-shadow: 0 10px 30px rgba(26, 12, 6, 0.03);
          margin-bottom: 2.5rem;
        }
        .snapshot-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1.5rem;
        }
        .snapshot-item {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          padding-right: 1rem;
          border-right: 1px solid #EAE5E0;
        }
        .snapshot-item:last-child {
          border-right: none;
        }
        .snapshot-key {
          font-size: 0.8rem;
          font-weight: 700;
          color: #A09690;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .snapshot-val {
          font-size: 1.05rem;
          font-weight: 800;
          color: #1A0C06;
        }

        /* General Card Styles */
        .treatment-card {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 3rem;
          border: 1px solid rgba(214, 122, 65, 0.12);
          box-shadow: 0 10px 40px rgba(26, 12, 6, 0.03);
          margin-bottom: 2.5rem;
          position: relative;
          overflow: hidden;
        }
        
        .card-section-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #1A0C06;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .title-icon { flex-shrink: 0; }
        .icon-terracotta { color: #D67A41; }
        .icon-gold { color: #C9A84C; }

        .section-intro {
          font-size: 1rem;
          color: #665A54;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        /* Benefits Grid */
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.25rem;
        }
        .benefit-item {
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          transition: all 0.3s ease;
        }
        .benefit-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(214, 122, 65, 0.06);
          border-color: rgba(214, 122, 65, 0.25);
        }
        .benefit-check {
          color: #C9A84C;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .benefit-title {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 800;
          color: #1A0C06;
          margin-bottom: 0.35rem;
        }
        .benefit-desc {
          font-size: 0.9rem;
          color: #665A54;
          line-height: 1.5;
        }

        /* Process Timeline */
        .process-timeline {
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .process-timeline::before {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          left: 24px;
          width: 2px;
          background: #EAE5E0;
          z-index: 1;
        }
        .timeline-item {
          display: flex;
          gap: 2rem;
          margin-bottom: 2.5rem;
          position: relative;
          z-index: 2;
        }
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        .timeline-marker {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 2px solid #D67A41;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 0 0 4px #FAF9F6;
          position: relative;
          z-index: 3;
        }
        .timeline-num {
          font-size: 1.2rem;
          font-weight: 800;
          color: #D67A41;
          font-family: var(--font-heading);
        }
        .timeline-content {
          padding-top: 0.5rem;
          background: #FAF9F6;
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid #EAE5E0;
          flex-grow: 1;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }
        .timeline-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #1A0C06;
          margin-bottom: 0.5rem;
        }
        .timeline-desc {
          font-size: 0.95rem;
          color: #665A54;
          line-height: 1.6;
        }

        /* Considerations Box */
        .considerations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .consideration-box {
          background: #FAF9F6;
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid #EAE5E0;
        }
        .consideration-title {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 800;
          color: #1A0C06;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .consideration-list {
          padding-left: 1.25rem;
          color: #665A54;
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .consideration-list li { margin-bottom: 0.4rem; }
        .highlight-box {
          background: rgba(201, 168, 76, 0.05);
          border-color: rgba(201, 168, 76, 0.2);
        }
        .alert-box {
          background: rgba(214, 122, 65, 0.05);
          border-color: rgba(214, 122, 65, 0.2);
        }
        .alert-box .consideration-title { color: #D67A41; }
        
        /* Results Section */
        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .before-after-slot {
          display: flex;
          gap: 4px;
          background: #EAE5E0;
          padding: 4px;
          border-radius: 12px;
          position: relative;
        }
        .image-placeholder {
          flex: 1;
          background: #D1C5C0;
          aspect-ratio: 1/1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: #FFF;
          font-weight: 700;
          font-size: 1.2rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .case-caption {
          position: absolute;
          bottom: -30px;
          left: 0; right: 0;
          text-align: center;
          font-size: 0.85rem;
          font-weight: 600;
          color: #665A54;
        }

        /* FAQs Accordion */
        .faqs-accordion {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item {
          background: #FAF9F6;
          border: 1px solid #EAE5E0;
          border-radius: 16px;
          overflow: hidden;
        }
        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          background: transparent;
          border: none;
          text-align: left;
          cursor: pointer;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: #1A0C06;
          transition: background 0.3s ease;
        }
        .faq-question:hover {
          background: #FFFFFF;
        }
        .faq-q-text {
          padding-right: 1rem;
          line-height: 1.4;
        }
        .faq-icon {
          color: #D67A41;
          flex-shrink: 0;
        }
        .faq-answer-wrapper {
          overflow: hidden;
        }
        .faq-answer {
          padding: 0 1.5rem 1.5rem;
          font-size: 0.95rem;
          color: #665A54;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .treatment-hero-banner {
            padding: 2.5rem 1.5rem;
            border-radius: 20px;
          }
          .treatment-card {
            padding: 2rem 1.5rem;
            border-radius: 20px;
          }
          .process-timeline::before {
            left: 20px;
          }
          .timeline-marker {
            width: 40px;
            height: 40px;
          }
          .timeline-num {
            font-size: 1rem;
          }
          .timeline-item {
            gap: 1.25rem;
          }
          .snapshot-grid {
            grid-template-columns: 1fr 1fr;
          }
          .snapshot-item {
            border-right: none;
            border-bottom: 1px solid #EAE5E0;
            padding-bottom: 1rem;
            padding-right: 0;
          }
          .snapshot-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          .before-after-slot {
            flex-direction: column;
          }
        }
      `}} />
    </div>
  );
}