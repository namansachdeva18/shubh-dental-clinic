'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Tag, ShieldCheck, CheckCircle2, Sparkles, Send, Phone, ArrowRight, User, Stethoscope, Clock } from 'lucide-react';

const TREATMENTS = [
  'Invisalign & Clear Aligners',
  'Dental Implants',
  'Damon & Aesthetic Braces',
  'Smile Makeover & Porcelain Veneers',
  'Root Canal Treatment (RCT)',
  'Full Mouth Rehabilitation',
  'Other Dental Care'
];

export default function OfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'Invisalign & Clear Aligners',
    timing: 'Morning (10 AM - 1 PM)'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleHash = () => {
      if (
        window.location.hash === '#book' || 
        window.location.hash === '#booking' || 
        window.location.hash === '#offer' || 
        window.location.hash === '#claim-offer'
      ) {
        setIsOpen(true);
      }
    };

    window.addEventListener('openOfferModal', handleOpen);
    window.addEventListener('hashchange', handleHash);
    handleHash();

    // Delegate click on ANY book button, [data-open-offer], or href="#book"
    const handleClick = (e) => {
      const target = e.target.closest(
        'a[href="#book"], a[href="#booking"], a[href="#offer"], a[href="#claim-offer"], [data-open-offer], [data-open-book]'
      );
      if (target) {
        e.preventDefault();
        window.history.pushState(null, '', '#book');
        setIsOpen(true);
      }
    };
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('openOfferModal', handleOpen);
      window.removeEventListener('hashchange', handleHash);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    if (
      window.location.hash === '#book' || 
      window.location.hash === '#booking' || 
      window.location.hash === '#offer' || 
      window.location.hash === '#claim-offer'
    ) {
      history.pushState(null, '', window.location.pathname + window.location.search);
    }
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', phone: '', treatment: 'Invisalign & Clear Aligners', timing: 'Morning (10 AM - 1 PM)' });
    }, 400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);

    const msg = `Hello Shubh Dental Clinic! 🏷️ I would like to CLAIM THE LIMITED-TIME OFFER (Up to 20% OFF + Complimentary Consultation).\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n✨ Treatment of Interest: ${formData.treatment}\n⏰ Preferred Slot: ${formData.timing}\n📍 Location: Tilak Nagar, Rohtak`;
    const waUrl = `https://wa.me/918685048414?text=${encodeURIComponent(msg)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="offer-modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <motion.div
            className="offer-modal-card"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close Button */}
            <button className="offer-close-btn" onClick={closeModal} aria-label="Close offer modal">
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="offer-modal-header">
              <div className="offer-pill-badge">
                <Tag size={13} />
                <span>LIMITED-TIME OFFER</span>
              </div>

              <h2 className="offer-modal-title font-heading">
                Limited-Time Dental Care Offer
              </h2>

              <p className="offer-modal-highlight">
                Up to 20% OFF Selected Premium Dental Treatments
              </p>

              <span className="offer-modal-consult">
                Plus a Complimentary 3D Digital Scan &amp; Consultation
              </span>
            </div>

            {/* Modal Body */}
            <div className="offer-modal-body">
              {!isSuccess ? (
                <>
                  <p className="offer-eligibility-note">
                    Submit your enquiry online to check your eligibility for selected premium dental treatments. Valid for limited slots this month.
                  </p>

                  <div className="offer-trust-tag">
                    <ShieldCheck size={16} className="trust-shield-icon" />
                    <span>PGI Chandigarh &amp; Rohtak-trained specialists · Rohtak</span>
                  </div>

                  <div className="offer-form-header">
                    <h3 className="offer-form-title font-heading">Claim My Offer</h3>
                    <p className="offer-form-desc">
                      Submit your details and our team will contact you to confirm treatment eligibility and consultation availability.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="offer-form">
                    <div className="offer-input-group">
                      <label htmlFor="offer-name">Full Name *</label>
                      <div className="offer-input-wrap">
                        <User size={17} className="input-icon" />
                        <input
                          id="offer-name"
                          type="text"
                          required
                          placeholder="e.g., Rajesh Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="offer-input-group">
                      <label htmlFor="offer-phone">Mobile Number *</label>
                      <div className="offer-input-wrap">
                        <Phone size={17} className="input-icon" />
                        <input
                          id="offer-phone"
                          type="tel"
                          required
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="offer-input-group">
                      <label htmlFor="offer-treatment">Treatment of Interest *</label>
                      <div className="offer-input-wrap select-wrap">
                        <Stethoscope size={17} className="input-icon" />
                        <select
                          id="offer-treatment"
                          value={formData.treatment}
                          onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        >
                          {TREATMENTS.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="offer-input-group">
                      <label htmlFor="offer-timing">Preferred Consultation Slot</label>
                      <div className="offer-input-wrap select-wrap">
                        <Clock size={17} className="input-icon" />
                        <select
                          id="offer-timing"
                          value={formData.timing}
                          onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                        >
                          <option value="In-Clinic Morning (10 AM - 1 PM)">🏥 In-Clinic Morning (10:00 AM – 01:00 PM)</option>
                          <option value="In-Clinic Evening (4 PM - 8 PM)">🏥 In-Clinic Evening (04:00 PM – 08:00 PM)</option>
                          <option value="Online Video Consultation (Zoom / WhatsApp)">📹 Online Video Consultation (Zoom / WhatsApp)</option>
                          <option value="Earliest Available Slot">Earliest Available Specialist Slot</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="offer-submit-btn"
                    >
                      {isSubmitting ? (
                        <span>Checking Eligibility...</span>
                      ) : (
                        <>
                          <span>Claim My Offer Now</span>
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>

                    <p className="offer-disclaimer">
                      🔒 Your details are 100% confidential. No spam guaranteed.
                    </p>
                  </form>
                </>
              ) : (
                /* Success View */
                <div className="offer-success-view">
                  <div className="success-icon-badge">
                    <CheckCircle2 size={48} color="#10B981" />
                  </div>
                  <h3 className="success-title font-heading">Offer Claim Submitted!</h3>
                  <p className="success-desc">
                    Thank you, <strong>{formData.name}</strong>! We have received your enquiry for <strong>{formData.treatment}</strong> with the limited-time discount.
                  </p>
                  <p className="success-sub">
                    Our consultation coordinator will contact you on <strong>{formData.phone}</strong> shortly to confirm your time slot and applicable savings.
                  </p>
                  <div className="success-actions">
                    <a
                      href={`https://wa.me/918685048414?text=Hi!+I+just+claimed+the+offer+for+${encodeURIComponent(formData.treatment)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-success-wa"
                    >
                      Chat Directly on WhatsApp
                    </a>
                    <button onClick={closeModal} className="btn-success-close">
                      Back to Website
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <style dangerouslySetInnerHTML={{ __html: `
            .offer-modal-overlay {
              position: fixed;
              inset: 0;
              background: rgba(10, 5, 3, 0.78);
              backdrop-filter: blur(8px);
              -webkit-backdrop-filter: blur(8px);
              z-index: 100000;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 1rem;
              overflow-y: auto;
            }

            .offer-modal-card {
              position: relative;
              background: #FFFFFF;
              width: 100%;
              max-width: 520px;
              border-radius: 28px;
              overflow: hidden;
              box-shadow: 0 25px 70px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(214, 122, 65, 0.2);
              margin: auto;
            }

            .offer-close-btn {
              position: absolute;
              top: 1rem;
              right: 1rem;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.2);
              border: none;
              color: #FFFFFF;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              z-index: 10;
              transition: all 0.2s ease;
            }
            .offer-close-btn:hover {
              background: rgba(255, 255, 255, 0.35);
              transform: scale(1.05);
            }

            .offer-modal-header {
              background: linear-gradient(145deg, #110805 0%, #2A150B 50%, #1A0B06 100%);
              padding: 2.25rem 2rem 1.75rem;
              color: #FFFFFF;
              text-align: center;
              position: relative;
              border-bottom: 1px solid rgba(214, 122, 65, 0.25);
            }

            .offer-pill-badge {
              display: inline-flex;
              align-items: center;
              gap: 0.4rem;
              background: rgba(214, 122, 65, 0.22);
              border: 1px solid rgba(214, 122, 65, 0.5);
              color: #F8B482;
              padding: 0.35rem 0.9rem;
              border-radius: 99px;
              font-size: 0.74rem;
              font-weight: 800;
              letter-spacing: 0.08em;
              margin-bottom: 0.85rem;
              text-transform: uppercase;
            }

            .offer-modal-title {
              font-size: clamp(1.4rem, 4vw, 1.85rem);
              font-weight: 800;
              color: #FFFFFF;
              line-height: 1.2;
              margin-bottom: 0.6rem;
              letter-spacing: -0.02em;
            }

            .offer-modal-highlight {
              font-size: 1.05rem;
              font-weight: 800;
              color: #FF8F4D;
              line-height: 1.35;
              margin-bottom: 0.4rem;
            }

            .offer-modal-consult {
              display: block;
              font-size: 0.85rem;
              color: rgba(255, 255, 255, 0.82);
              font-weight: 500;
            }

            .offer-modal-body {
              padding: 1.75rem 2rem 2rem;
              background: #FFFFFF;
              max-height: 75vh;
              overflow-y: auto;
            }

            .offer-eligibility-note {
              font-size: 0.88rem;
              color: #4A3E39;
              line-height: 1.55;
              text-align: center;
              margin-bottom: 0.85rem;
            }

            .offer-trust-tag {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.45rem;
              font-size: 0.78rem;
              font-weight: 700;
              color: #B85922;
              background: #FFF3EB;
              border: 1px solid rgba(214, 122, 65, 0.3);
              padding: 0.45rem 0.85rem;
              border-radius: 99px;
              margin-bottom: 1.5rem;
              text-align: center;
            }

            .offer-form-header {
              text-align: center;
              margin-bottom: 1.25rem;
            }
            .offer-form-title {
              font-size: 1.35rem;
              font-weight: 800;
              color: #110805;
              margin-bottom: 0.25rem;
            }
            .offer-form-desc {
              font-size: 0.82rem;
              color: #6E5C54;
              line-height: 1.45;
            }

            .offer-form {
              display: flex;
              flex-direction: column;
              gap: 1rem;
            }

            .offer-input-group {
              display: flex;
              flex-direction: column;
              gap: 0.35rem;
            }
            .offer-input-group label {
              font-size: 0.82rem;
              font-weight: 700;
              color: #2D1D16;
            }

            .offer-input-wrap {
              position: relative;
              display: flex;
              align-items: center;
            }
            .offer-input-wrap .input-icon {
              position: absolute;
              left: 1rem;
              color: #D67A41;
              pointer-events: none;
            }
            .offer-input-wrap input,
            .offer-input-wrap select {
              width: 100%;
              padding: 0.85rem 1rem 0.85rem 2.75rem;
              border-radius: 14px;
              border: 1.5px solid rgba(74, 37, 24, 0.16);
              background: #FAF8F5;
              font-size: 0.92rem;
              font-weight: 600;
              color: #110805;
              outline: none;
              transition: all 0.2s ease;
              font-family: inherit;
            }
            .offer-input-wrap input:focus,
            .offer-input-wrap select:focus {
              border-color: #D67A41;
              background: #FFFFFF;
              box-shadow: 0 0 0 3px rgba(214, 122, 65, 0.15);
            }

            .offer-submit-btn {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
              width: 100%;
              padding: 1rem 1.5rem;
              border-radius: 14px;
              border: none;
              background: linear-gradient(135deg, #D67A41 0%, #B85922 100%);
              color: #FFFFFF;
              font-size: 1.05rem;
              font-weight: 800;
              cursor: pointer;
              box-shadow: 0 8px 24px rgba(214, 122, 65, 0.35);
              transition: all 0.25s ease;
              margin-top: 0.5rem;
              font-family: inherit;
            }
            .offer-submit-btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 12px 30px rgba(214, 122, 65, 0.45);
            }
            .offer-submit-btn:active {
              transform: scale(0.98);
            }

            .offer-disclaimer {
              font-size: 0.74rem;
              color: #8C7A70;
              text-align: center;
              margin: 0;
            }

            /* Success State */
            .offer-success-view {
              text-align: center;
              padding: 1.5rem 0.5rem;
            }
            .success-icon-badge {
              margin-bottom: 1rem;
            }
            .success-title {
              font-size: 1.6rem;
              color: #0E241B;
              margin-bottom: 0.75rem;
            }
            .success-desc {
              font-size: 0.95rem;
              color: #2D1D16;
              line-height: 1.6;
              margin-bottom: 0.5rem;
            }
            .success-sub {
              font-size: 0.85rem;
              color: #6E5C54;
              line-height: 1.5;
              margin-bottom: 1.5rem;
            }
            .success-actions {
              display: flex;
              flex-direction: column;
              gap: 0.75rem;
            }
            .btn-success-wa {
              display: flex;
              align-items: center;
              justify-content: center;
              background: #25D366;
              color: #FFFFFF;
              font-weight: 800;
              padding: 0.9rem 1.5rem;
              border-radius: 12px;
              text-decoration: none;
              box-shadow: 0 6px 20px rgba(37, 211, 102, 0.3);
            }
            .btn-success-close {
              background: #FAF8F5;
              border: 1px solid rgba(74, 37, 24, 0.15);
              color: #4A3E39;
              font-weight: 700;
              padding: 0.75rem 1.25rem;
              border-radius: 12px;
              cursor: pointer;
            }

            @media (max-width: 480px) {
              .offer-modal-header { padding: 1.75rem 1.25rem 1.25rem; }
              .offer-modal-body { padding: 1.25rem 1.25rem 1.5rem; }
              .offer-modal-title { font-size: 1.35rem; }
              .offer-modal-highlight { font-size: 0.95rem; }
            }
          `}} />
        </div>
      )}
    </AnimatePresence>
  );
}
