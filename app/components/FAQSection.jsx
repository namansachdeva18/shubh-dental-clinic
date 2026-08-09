'use client';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { accordionContent } from '../lib/motion';
import ScrollReveal, { StaggerReveal, StaggerItem } from './ScrollReveal';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Why should I choose Prof. Dr. S. K. Yadav for my braces or clear aligners?',
      a: <><span className="text-highlight">Prof. Dr. S. K. Yadav</span> holds an MDS in Orthodontics from PGI Chandigarh with <span className="text-highlight">over 20 years of clinical experience</span>. He is a <span className="text-highlight">Certified Invisalign &amp; SkyAlign Provider</span> and a Fellow of the World Federation of Orthodontists (WFO, USA). With <span className="text-highlight">over 5,000+ completed braces and aligners cases</span>, you receive elite, specialized orthodontic care.</>
    },
    {
      q: 'What is the difference between Clear Aligners and traditional metal braces?',
      a: <>Clear aligners (like Invisalign &amp; SkyAlign) are <span className="text-highlight">transparent, removable, and virtually invisible plastic trays</span>. They allow you to eat whatever you like and maintain easy oral hygiene. Traditional braces use <span className="text-highlight">metal or ceramic brackets bonded to teeth</span>. Both effectively straighten teeth, and Dr. Yadav will recommend the best fit for your lifestyle.</>
    },
    {
      q: 'Is root canal treatment (RCT) painful at Shubh Dental Clinic?',
      a: <>Not at all! We use modern rotary endodontics and gentle local anesthesia techniques that make Root Canal Treatment <span className="text-highlight">100% painless and fast</span>, usually completed in just <span className="text-highlight">1 or 2 comfortable visits</span>.</>
    },
    {
      q: 'Are dental implants safe and long-lasting?',
      a: <>Yes, dental implants have a <span className="text-highlight">success rate of over 98%</span>. They act as <span className="text-highlight">permanent natural root replacements</span> for missing teeth. Made of biocompatible titanium, implants can <span className="text-highlight">last a lifetime</span> with proper care.</>
    },
    {
      q: 'Do you offer 0% Interest EMI options for treatments?',
      a: <>Yes! We offer <span className="text-highlight">flexible, interest-free (0% EMI) payment options</span> for clear aligners, orthodontic braces, dental implants, and full smile makeovers to <span className="text-highlight">make premium care accessible</span>.</>
    },
    {
      q: 'Where is Shubh Orthodontic & Dental Clinic located in Rohtak?',
      a: <>We are located at Tilak Nagar, Lane 9 Corner, Opposite Swami Nitanand Public School, Delhi Bypass Road, Rohtak, Haryana. You can search <span className="text-highlight">"Shubh Orthodontic &amp; Dental Clinic" on Google Maps</span> for easy direct navigation.</>
    }
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
            const isOpen = openIndex === idx;
            return (
              <StaggerItem
                key={idx}
                className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
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

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .faq-section-wrapper {
          padding: 6rem 1.5rem;
          background: #FFFFFF;
          position: relative;
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 3.5rem;
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
          .faq-section-wrapper { padding: 3.5rem 1.5rem; }
          .faq-title {
            font-size: 1.85rem;
          }
          .faq-q-text {
            font-size: 0.95rem;
          }
        }
      `}} />
    </section>
  );
}