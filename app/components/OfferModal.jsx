'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, ArrowRight, User, Phone, Stethoscope, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { submitToWeb3Forms, WEB3FORMS_ACCESS_KEY } from '../lib/web3forms';
import { trackConversion, CONVERSION_EVENTS } from '../lib/conversionTracking';

const TREATMENTS = [
  '💡 Not Sure? Consult Doctor First (Get Tailored 20% Plan + Free 3D Scan)',
  'Invisalign® & Clear Aligners (Flat 20% OFF)',
  'Korean Osstem® Dental Implants (20% Concession)',
  'Damon® & Ceramic Braces (Anniversary Special)',
  'Smile Makeover & Porcelain Veneers (20% OFF)',
  'Single-Sitting Painless Root Canal & Crown',
  'Full Mouth Teeth Rehabilitation & Bite Care',
  'General Dental Consultation & Teeth Scaling'
];

export default function OfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: TREATMENTS[0],
    timing: 'Anytime / Earliest Specialist Slot',
    note: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleOpen = (e) => {
      if (e?.detail?.treatment) {
        setFormData(prev => ({ ...prev, treatment: e.detail.treatment }));
      }
      setIsOpen(true);
    };
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
      setFormData({ 
        name: '', 
        phone: '', 
        treatment: TREATMENTS[0], 
        timing: 'Anytime / Earliest Specialist Slot',
        note: '' 
      });
    }, 400);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);

    // Post lead to Web3Forms
    try {
      await submitToWeb3Forms({
        name: formData.name,
        phone: formData.phone,
        treatment: formData.treatment,
        timing: formData.timing,
        source: '20% OFF Privilege Pass Popup',
        voucher: 'SHUBH-20-VIP',
        message: `Unlocked 20% Privilege Offer for ${formData.treatment}. Slot: ${formData.timing}. Goal/Note: ${formData.note || 'None'}`
      });

      trackConversion(CONVERSION_EVENTS.GENERATE_LEAD, {
        treatment: formData.treatment,
        source: 'OfferModal',
        voucher: 'SHUBH-20-VIP',
      });
      trackConversion(CONVERSION_EVENTS.OFFER_LEAD, {
        treatment: formData.treatment,
        voucher: 'SHUBH-20-VIP',
      });
    } catch (err) {
      console.error('Web3Forms submit error:', err);
    }

    const msg = `Hello Shubh Dental Clinic! 🏷️ I want to UNLOCK MY 20% OFF PRIVILEGE PASS (Voucher: SHUBH-20-VIP).\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n✨ Treatment: ${formData.treatment}\n⏰ Preferred Slot: ${formData.timing}${formData.note ? `\n🎯 Goal / Note: ${formData.note}` : ''}\n📍 Location: Rohtak HQ`;
    const waUrl = `https://wa.me/918685048414?text=${encodeURIComponent(msg)}`;

    setIsSubmitting(false);
    setIsSuccess(true);
    window.open(waUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="offer-modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <motion.div
            className="clean-offer-card"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Close Button */}
            <button className="clean-close-btn" onClick={closeModal} aria-label="Close offer modal">
              <X size={18} />
            </button>

            {!isSuccess ? (
              <div className="clean-modal-inner">
                {/* 1. Header with Golden Pill Badge */}
                <div className="clean-header-block">
                  <div className="clean-pill-badge">
                    <Sparkles size={12} className="pill-sparkle" />
                    <span>CLINICAL SPECIAL · 20% OFF</span>
                  </div>

                  <h2 className="clean-main-title">
                    Unlock Your <span className="title-gold">20% Clinical Offer</span>
                  </h2>

                  <p className="clean-subtitle">
                    Enter your details to claim instant 20% Privilege Benefits &amp; a Complimentary 3D Digital Scan (Worth ₹3,500).
                  </p>
                </div>

                {/* 2. Sleek Input Form */}
                <form onSubmit={handleSubmit} className="clean-form-list">
                  <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                  
                  {/* Full Name */}
                  <div className="clean-input-box">
                    <User size={18} className="clean-field-icon" />
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {/* Phone */}
                  <div className="clean-input-box">
                    <Phone size={18} className="clean-field-icon" />
                    <input
                      type="tel"
                      required
                      placeholder="10-Digit Mobile Number *"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                    />
                  </div>

                  {/* Treatment */}
                  <div className="clean-input-box select-box">
                    <Stethoscope size={18} className="clean-field-icon" />
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    >
                      {TREATMENTS.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Time */}
                  <div className="clean-input-box select-box">
                    <Clock size={18} className="clean-field-icon" />
                    <select
                      value={formData.timing}
                      onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                    >
                      <option value="Anytime / Earliest Specialist Slot">Preferred Time: Anytime / First Available</option>
                      <option value="Morning Slot (10:00 AM – 01:00 PM)">Morning: 10:00 AM – 01:00 PM</option>
                      <option value="Evening Slot (04:00 PM – 08:00 PM)">Evening: 04:00 PM – 08:00 PM</option>
                      <option value="Virtual Video Consultation (WhatsApp / Zoom)">Virtual Video Call (NRI &amp; Outstation)</option>
                    </select>
                  </div>

                  {/* Optional Goal Note */}
                  <div className="clean-input-box">
                    <MessageSquare size={18} className="clean-field-icon" />
                    <input
                      type="text"
                      placeholder="Optional: Tell us about your goal or event date"
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    />
                  </div>

                  {/* Gold Gradient Action Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="clean-submit-gold-btn"
                  >
                    {isSubmitting ? (
                      <span>Unlocking 20% Offer...</span>
                    ) : (
                      <>
                        <Sparkles size={16} />
                        <span>Unlock My 20% Offer</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  {/* Footer Security Badges */}
                  <div className="clean-form-footer">
                    <div className="clean-confidential-tag">
                      <ShieldCheck size={14} className="shield-green" />
                      <span>100% Confidential · PGI Specialist Care in Rohtak</span>
                    </div>
                    <span className="clean-subtext">
                      By submitting, you receive an instant VIP voucher directly on WhatsApp.
                    </span>
                  </div>
                </form>
              </div>
            ) : (
              /* Success Confirmation */
              <div className="clean-success-container">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={46} color="#10B981" />
                </div>
                <h3 className="success-heading">20% Offer Pass Unlocked!</h3>
                <p className="success-sub">
                  Your VIP voucher code <strong>SHUBH-20-VIP</strong> has been activated for <strong>{formData.name}</strong>.
                </p>
                <div className="success-perk-card">
                  <span>✓ 20% Concession on {formData.treatment}</span>
                  <span>✓ Free 3D iTero® / CBCT Scan (Worth ₹3,500)</span>
                  <span>✓ Priority Slot with Prof. Dr. S. K. Yadav</span>
                </div>
                <button onClick={closeModal} className="clean-close-dialog-btn">
                  Done
                </button>
              </div>
            )}
          </motion.div>

          <style dangerouslySetInnerHTML={{ __html: `
            .offer-modal-overlay {
              position: fixed;
              inset: 0;
              background: rgba(15, 7, 4, 0.78);
              backdrop-filter: blur(8px);
              -webkit-backdrop-filter: blur(8px);
              z-index: 100000;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 1rem;
              overflow-y: auto;
            }

            /* Sleek Card Styling exactly like reference */
            .clean-offer-card {
              position: relative;
              background: #FCFAF7;
              width: 100%;
              max-width: 440px;
              border-radius: 28px;
              box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(214, 122, 65, 0.2);
              overflow: hidden;
              margin: auto;
            }

            .clean-close-btn {
              position: absolute;
              top: 1.15rem;
              right: 1.15rem;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background: rgba(0, 0, 0, 0.05);
              border: 1px solid rgba(0, 0, 0, 0.08);
              color: #4A3E39;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              z-index: 10;
              transition: all 0.2s ease;
            }
            .clean-close-btn:hover {
              background: rgba(0, 0, 0, 0.12);
              transform: scale(1.06);
            }

            .clean-modal-inner {
              padding: 2.2rem 1.85rem 1.85rem;
            }

            /* Header */
            .clean-header-block {
              text-align: center;
              margin-bottom: 1.4rem;
            }

            .clean-pill-badge {
              display: inline-flex;
              align-items: center;
              gap: 0.35rem;
              background: #1C100B;
              color: #E6B587;
              padding: 0.32rem 0.85rem;
              border-radius: 99px;
              font-size: 0.68rem;
              font-weight: 850;
              letter-spacing: 0.07em;
              text-transform: uppercase;
              margin-bottom: 0.75rem;
              border: 1px solid rgba(230, 181, 135, 0.25);
            }
            .pill-sparkle { color: #E6B587; }

            .clean-main-title {
              font-family: var(--font-heading, 'Outfit'), sans-serif;
              font-size: clamp(1.4rem, 4.5vw, 1.72rem);
              font-weight: 800;
              color: #1A0D08;
              line-height: 1.22;
              margin: 0 0 0.45rem;
              letter-spacing: -0.02em;
            }

            .title-gold {
              color: #B87333;
              background: linear-gradient(135deg, #B87333 0%, #D98845 50%, #9E5B20 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .clean-subtitle {
              font-size: 0.82rem;
              color: #6C5D56;
              line-height: 1.45;
              margin: 0 auto;
              max-width: 340px;
            }

            /* Form Fields */
            .clean-form-list {
              display: flex;
              flex-direction: column;
              gap: 0.72rem;
            }

            .clean-input-box {
              position: relative;
              display: flex;
              align-items: center;
              background: #FFFFFF;
              border: 1.5px solid rgba(184, 115, 51, 0.25);
              border-radius: 14px;
              padding: 0.2rem 0.9rem;
              transition: all 0.22s ease;
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
            }
            .clean-input-box:focus-within {
              border-color: #B87333;
              box-shadow: 0 0 0 3.5px rgba(184, 115, 51, 0.14);
              background: #FFFFFF;
            }

            .clean-field-icon {
              color: #9C6842;
              flex-shrink: 0;
              margin-right: 0.65rem;
            }

            .clean-input-box input,
            .clean-input-box select {
              width: 100%;
              border: none;
              outline: none;
              background: transparent;
              padding: 0.68rem 0;
              font-size: 0.88rem;
              font-weight: 600;
              color: #1A0D08;
              font-family: inherit;
            }

            .clean-input-box input::placeholder {
              color: #96867E;
              font-weight: 500;
            }

            .clean-input-box.select-box {
              padding-right: 0.6rem;
            }
            .clean-input-box select {
              cursor: pointer;
            }

            /* Submit Button: exact luxurious warm gold gradient */
            .clean-submit-gold-btn {
              width: 100%;
              margin-top: 0.35rem;
              padding: 0.88rem 1.2rem;
              border-radius: 14px;
              border: none;
              background: linear-gradient(135deg, #A86B38 0%, #C4854E 50%, #945B2A 100%);
              color: #FFFFFF;
              font-size: 0.96rem;
              font-weight: 800;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.45rem;
              cursor: pointer;
              box-shadow: 0 8px 22px rgba(168, 107, 56, 0.35);
              transition: all 0.22s ease;
              font-family: inherit;
            }
            .clean-submit-gold-btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 12px 28px rgba(168, 107, 56, 0.48);
              background: linear-gradient(135deg, #B5743D 0%, #D49257 50%, #9F622F 100%);
            }
            .clean-submit-gold-btn:active {
              transform: scale(0.98);
            }

            /* Footer */
            .clean-form-footer {
              text-align: center;
              margin-top: 0.6rem;
              display: flex;
              flex-direction: column;
              gap: 0.3rem;
            }

            .clean-confidential-tag {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.35rem;
              font-size: 0.74rem;
              font-weight: 700;
              color: #2D6A4F;
            }
            .shield-green { color: #10B981; }

            .clean-subtext {
              font-size: 0.68rem;
              color: #8C7C74;
              line-height: 1.35;
            }

            /* Success Container */
            .clean-success-container {
              padding: 2.5rem 1.85rem;
              text-align: center;
            }
            .success-icon-wrap { margin-bottom: 0.85rem; }
            .success-heading {
              font-size: 1.45rem;
              font-weight: 800;
              color: #1A0D08;
              margin-bottom: 0.4rem;
            }
            .success-sub {
              font-size: 0.88rem;
              color: #5C4C44;
              margin-bottom: 1.2rem;
              line-height: 1.5;
            }
            .success-perk-card {
              background: #F4EFEB;
              border: 1px dashed #B87333;
              border-radius: 12px;
              padding: 0.85rem 1rem;
              display: flex;
              flex-direction: column;
              gap: 0.4rem;
              font-size: 0.8rem;
              font-weight: 750;
              color: #1A0D08;
              margin-bottom: 1.5rem;
              text-align: left;
            }
            .clean-close-dialog-btn {
              background: #1A0D08;
              color: #FFFFFF;
              border: none;
              padding: 0.75rem 2rem;
              border-radius: 99px;
              font-weight: 800;
              cursor: pointer;
            }

            @media (max-width: 480px) {
              .clean-offer-card { border-radius: 22px; max-width: 95vw; }
              .clean-modal-inner { padding: 1.8rem 1.25rem 1.5rem; }
              .clean-main-title { font-size: 1.32rem; }
            }
          `}} />
        </div>
      )}
    </AnimatePresence>
  );
}
