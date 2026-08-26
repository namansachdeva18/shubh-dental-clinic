'use client';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { accordionContent } from '../lib/motion';
import ScrollReveal, { StaggerReveal, StaggerItem } from './ScrollReveal';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      q: 'Who is the best orthodontist in Rohtak?',
      a: <><span className="text-highlight">Prof. Dr. S. K. Yadav</span> at Shubh Orthodontic &amp; Dental Clinic is widely regarded as the best orthodontist in Rohtak, Haryana. He holds an <span className="text-highlight">MDS in Orthodontics from PGI Chandigarh</span>, is a Certified Invisalign® Provider and a Fellow of the World Federation of Orthodontists (WFO, USA). With over 5,000+ completed braces and aligner cases, 3,000+ implants, and a 5.0-star Google rating, you are in the most trusted hands in Haryana.</>
    },
    {
      q: 'How much do braces cost in Rohtak?',
      a: <>At Shubh Dental Clinic Rohtak, braces cost ranges from <span className="text-highlight">₹25,000 for standard metal braces</span> to <span className="text-highlight">₹55,000–₹1,20,000 for Damon® self-ligating ceramic braces</span>. Clear aligners (SkyAlign™) start from ₹45,000. Invisalign® comprehensive starts from ₹1,50,000. <span className="text-highlight">0% interest EMI is available</span> on all treatments to make premium care accessible.</>
    },
    {
      q: 'Do you offer Online Video Consultations for outstation or NRI patients?',
      a: <>Yes! We provide <span className="text-highlight">1-on-1 Online Video Consultations</span> with <span className="text-highlight">Prof. Dr. S. K. Yadav</span> and our senior specialists via WhatsApp Video and Zoom. Patients from across Haryana, NCR, outstation states, and international NRIs (USA, UK, UAE, Australia) can discuss smile concerns, review X-rays/photos, receive a customized treatment plan, and book prior slots before travelling to Rohtak.</>
    },
    {
      q: 'Why should I choose Prof. Dr. S. K. Yadav for my braces or clear aligners?',
      a: <><span className="text-highlight">Prof. Dr. S. K. Yadav</span> holds an MDS in Orthodontics from PGI Chandigarh with <span className="text-highlight">over 20 years of clinical experience</span>. He is a <span className="text-highlight">Certified Invisalign® &amp; SkyAlign™ Provider</span> and a Fellow of the World Federation of Orthodontists (WFO, USA). With <span className="text-highlight">5,000+ completed braces and aligners cases</span>, you receive elite, specialized orthodontic care.</>
    },
    {
      q: 'What is SkyAlign™ and how is it different from Invisalign®?',
      a: <><span className="text-highlight">SkyAlign™</span> is our exclusive in-house clear aligner system manufactured at Shubh Dental Clinic under direct supervision of Prof. Dr. S. K. Yadav. Made from <span className="text-highlight">ultra-clear German medical polymer</span>, SkyAlign™ delivers the same clinical results as international brands at <span className="text-highlight">up to 40% lower cost</span>, with faster turnaround and no third-party delays. Invisalign® is the global gold standard for complex cases and uses patented SmartTrack® material.</>
    },
    {
      q: 'What is the difference between Clear Aligners and traditional metal braces?',
      a: <>Clear aligners (like Invisalign® &amp; SkyAlign™) are <span className="text-highlight">transparent, removable, and virtually invisible plastic trays</span>. They allow you to eat whatever you like and maintain easy oral hygiene. Traditional braces use <span className="text-highlight">metal or ceramic brackets bonded to teeth</span>. Both effectively straighten teeth, and Dr. Yadav will recommend the best fit for your lifestyle and case complexity.</>
    },
    {
      q: 'Is root canal treatment (RCT) painful at Shubh Dental Clinic?',
      a: <>Not at all! We use modern rotary endodontics and gentle local anesthesia techniques that make Root Canal Treatment <span className="text-highlight">100% painless and fast</span>, usually completed in just <span className="text-highlight">1 or 2 comfortable visits</span>. Most patients are surprised by how stress-free the procedure is at our clinic.</>
    },
    {
      q: 'Are dental implants safe and long-lasting?',
      a: <>Yes, dental implants have a <span className="text-highlight">success rate of over 98.4%</span> at our clinic. We use 3D CBCT-guided flapless surgery for pin-point precision. All implants use <span className="text-highlight">biocompatible titanium with 10-year warranty metal-free Zirconia crowns</span>, and can <span className="text-highlight">last a lifetime</span> with proper care. Walk in with missing teeth — walk out with fixed teeth in 24 hours.</>
    },
    {
      q: 'Do you offer same-day dental implants in Rohtak?',
      a: <>Yes! Shubh Orthodontic &amp; Dental Clinic offers <span className="text-highlight">immediate loading same-day dental implants</span> in Rohtak. Using advanced flapless 3D CBCT-guided surgery, patients can walk in with missing teeth and walk out with fixed, fully functional temporary teeth <span className="text-highlight">within 24 hours</span> — no stitches, minimal discomfort.</>
    },
    {
      q: 'Do you offer 0% Interest EMI options for treatments?',
      a: <>Yes! We offer <span className="text-highlight">flexible, interest-free (0% EMI) payment options</span> for clear aligners, orthodontic braces, dental implants, and full smile makeovers to <span className="text-highlight">make premium international-quality care accessible</span> to every patient in Rohtak and across Haryana.</>
    },
    {
      q: 'Is the clinic suitable for children?',
      a: <><span className="text-highlight">Dr. Achla Bharti Yadav</span> specialises in gentle, pain-free paediatric dentistry for children aged 3–16 years. We offer anxiety-free milk tooth treatments, <span className="text-highlight">preventive sealants, fluoride therapy</span>, and early orthodontic interceptive treatment in a <span className="text-highlight">completely child-friendly and calm environment</span>.</>
    },
    {
      q: 'Do you serve NRI or overseas patients for dental treatment?',
      a: <>Absolutely. We have served patients from <span className="text-highlight">UAE, UK, USA, Canada, Australia, and 18+ countries</span>. Our team can coordinate your treatment plan by email or WhatsApp before your arrival in India, and schedule all appointments within your stay. We also have <span className="text-highlight">visiting centres in Delhi and Gurugram</span> for added convenience.</>
    },
    {
      q: 'What technology does Shubh Dental Clinic use?',
      a: <>Shubh Dental Clinic is equipped with <span className="text-highlight">3D CBCT Digital X-Ray Scanner, iTero® 3D digital impressions, AI-powered Digital Smile Design (DSD), Diode laser for gum contouring</span>, hospital-grade autoclave sterilization, and rotary endodontic systems for painless RCTs. Our in-house SkyAlign™ aligner lab also provides same-day aligner fabrication.</>
    },
    {
      q: 'Where is Shubh Orthodontic &amp; Dental Clinic located in Rohtak?',
      a: <>We are located at <span className="text-highlight">Tilak Nagar, Lane 9 Corner, Opposite Swami Nitanand Public School, Delhi Bypass Road, Rohtak, Haryana 124001</span>. You can search <span className="text-highlight">"Shubh Orthodontic &amp; Dental Clinic" on Google Maps</span> for easy direct navigation. Ample parking is available on premises.</>
    },
    {
      q: 'Do you see patients on Sundays?',
      a: <>The clinic is open <span className="text-highlight">Monday through Saturday, 9:30 AM – 8:00 PM</span>. Sunday appointments are available <span className="text-highlight">by prior scheduling only</span>. WhatsApp us on +91 8685048414 to book a Sunday slot with advance notice.</>
    },
  ];

  return (
    <section id="faq" className="faq-section-wrapper">
      <div className="faq-container">
        
        {/* Header */}
        <ScrollReveal className="faq-header text-center">
          <div className="faq-badge">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="faq-title">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>
          <p className="faq-subtitle">
            Find answers to common questions regarding orthodontic aligners, braces, implants, and clinic visits.
          </p>
        </ScrollReveal>

        {/* Accordion List */}
        <StaggerReveal className="faq-list" stagger={0.08} delay={0.1}>
          {faqs.map((faq, idx) => {
            // On mobile, hide FAQs beyond index 4 if not showAll
            const isHiddenMobile = !showAll && idx > 4;
            
            const isOpen = openIndex === idx;
            return (
              <StaggerItem
                key={idx}
                className={`faq-item ${isOpen ? 'faq-item-open' : ''} ${isHiddenMobile ? 'mobile-hidden' : ''}`}
                variant="fadeUp"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text font-heading">{faq.q}</span>
                  <div className="faq-chevron-wrap">
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-body"
                      variants={accordionContent}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </StaggerItem>
            );
          })}
        </StaggerReveal>

        {/* Mobile Show More Button */}
        {!showAll && faqs.length > 5 && (
          <div className="mobile-faq-show-more">
            <button onClick={() => setShowAll(true)} className="btn-show-more-faq">
              Show All {faqs.length} FAQs <ChevronDown size={14} />
            </button>
          </div>
        )}



      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .faq-section-wrapper {
          padding: 3rem 1.5rem;
          background: #FFFFFF;
          position: relative;
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 1.75rem;
        }

        .faq-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(214, 122, 65, 0.1);
          color: #D67A41;
          padding: 0.4rem 1.1rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: 1px solid rgba(214, 122, 65, 0.25);
          margin-bottom: 1.25rem;
        }

        .faq-title {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: 2.3rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.75rem;
        }

        .faq-subtitle {
          font-size: 0.98rem;
          color: #665A54;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          border-radius: 18px;
          border: 1px solid #EAE5E0;
          background: #FFFFFF;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .faq-item-open {
          border-color: rgba(214, 122, 65, 0.4);
          background: #FAF8F5;
          box-shadow: 0 10px 25px rgba(74, 37, 24, 0.05);
        }

        .faq-question-btn {
          width: 100%;
          text-align: left;
          padding: 1.35rem 1.5rem;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          cursor: pointer;
        }

        .faq-q-text {
          font-size: 1.05rem;
          font-weight: 700;
          color: #110805;
          line-height: 1.35;
        }

        .faq-chevron-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #F0ECE8;
          color: #666;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
        }

        .faq-item-open .faq-chevron-wrap {
          transform: rotate(180deg);
          background: #D67A41;
          color: #FFFFFF;
        }

        .faq-answer-body {
          padding: 0 1.5rem 1.5rem 1.5rem;
          border-top: 1px dashed rgba(214, 122, 65, 0.15);
          margin-top: 0.25rem;
          padding-top: 1rem;
        }

        .faq-answer-body p {
          font-size: 0.95rem;
          color: #554A44;
          line-height: 1.65;
        }

        @media (max-width: 768px) {
          .faq-section-wrapper { padding: 1.25rem 0.85rem !important; }
          .faq-header { margin-bottom: 1rem !important; }
          .faq-badge {
            padding: 0.25rem 0.75rem !important;
            font-size: 0.68rem !important;
            margin-bottom: 0.5rem !important;
          }
          .faq-title {
            font-size: 1.45rem !important;
            margin-bottom: 0.35rem !important;
          }
          .faq-subtitle {
            font-size: 0.78rem !important;
            line-height: 1.4 !important;
          }
          .faq-list {
            gap: 0.5rem !important;
          }
          .faq-item {
            border-radius: 14px !important;
          }
          .faq-question-btn {
            padding: 0.85rem 0.95rem !important;
            gap: 0.6rem !important;
          }
          .faq-q-text {
            font-size: 0.86rem !important;
            line-height: 1.3 !important;
          }
          .faq-chevron-wrap {
            width: 26px !important;
            height: 26px !important;
          }
          .faq-chevron-wrap svg {
            width: 14px !important;
            height: 14px !important;
          }
          .faq-answer-body {
            padding: 0 0.95rem 0.95rem !important;
            padding-top: 0.65rem !important;
          }
          .faq-answer-body p {
            font-size: 0.78rem !important;
            line-height: 1.5 !important;
          }
          .text-highlight {
            padding: 0.1rem 0.35rem !important;
            border-radius: 5px !important;
            font-size: 0.76rem !important;
          }
          .faq-cta-bar { 
            margin-top: 1.25rem !important;
            padding: 1rem 0.85rem !important;
            border-radius: 14px !important;
            flex-direction: column !important; 
            text-align: center !important; 
            gap: 0.85rem !important; 
          }
          .faq-cta-emoji { font-size: 1.5rem !important; }
          .faq-cta-title { font-size: 0.95rem !important; }
          .faq-cta-sub { font-size: 0.76rem !important; }
          .faq-cta-actions { 
            justify-content: center !important; 
            width: 100% !important;
            gap: 0.5rem !important;
          }
          .faq-btn-wa, .faq-btn-call {
            padding: 0.6rem 1rem !important;
            font-size: 0.78rem !important;
            border-radius: 10px !important;
            flex: 1 !important;
            justify-content: center !important;
          }
        }

        /* FAQ CTA BAR */
        .faq-cta-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          margin-top: 3rem;
          background: linear-gradient(135deg, #110805 0%, #2A150B 100%);
          border-radius: 20px;
          padding: 1.75rem 2rem;
          border: 1px solid rgba(214, 122, 65, 0.25);
          box-shadow: 0 20px 50px rgba(17,8,5,0.15);
          flex-wrap: wrap;
        }
        .faq-cta-text {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
          min-width: 200px;
        }
        .faq-cta-emoji { font-size: 2rem; flex-shrink: 0; }
        .faq-cta-title {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.2rem;
        }
        .faq-cta-sub {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.65);
        }
        .faq-cta-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          flex-shrink: 0;
        }
        .faq-btn-wa {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #25D366 0%, #1DA851 100%);
          color: #fff;
          padding: 0.85rem 1.5rem;
          border-radius: 12px;
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(37,211,102,0.3);
        }
        .faq-btn-wa:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(37,211,102,0.45); }
        .faq-btn-call {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.1);
          color: #FFFFFF;
          border: 1.5px solid rgba(255,255,255,0.2);
          padding: 0.85rem 1.5rem;
          border-radius: 12px;
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .faq-btn-call:hover { background: rgba(255,255,255,0.2); transform: translateY(-2px); }

        /* Mobile Show More Logic */
        .mobile-hidden { display: none !important; }
        .mobile-faq-show-more {
          text-align: center;
          margin: 1.5rem 0 2rem;
        }
        .btn-show-more-faq {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(214, 122, 65, 0.08);
          border: 1px solid rgba(214, 122, 65, 0.2);
          color: #B85922;
          padding: 0.75rem 1.5rem;
          border-radius: 99px;
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-show-more-faq:hover {
          background: rgba(214, 122, 65, 0.15);
        }
      `}} />
    </section>
  );
}