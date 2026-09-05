'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, ArrowRight, User, Phone, Stethoscope, Clock, MessageSquare, ShieldCheck, AlertCircle } from 'lucide-react';
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

/**
 * Advanced Anti-Spam Validation Engine
 * Blocks automated scrapers, keyboard mashers, dummy digits, and injection scripts.
 */
function validateIndianPhone(rawPhone) {
  const clean = (rawPhone || '').replace(/\D/g, '').replace(/^(?:91|0)/, '');
  
  if (!clean || clean.length !== 10) {
    return { valid: false, message: 'Please enter a valid 10-digit mobile number' };
  }
  if (!/^[6-9]/.test(clean)) {
    return { valid: false, message: 'Indian mobile number must begin with 6, 7, 8, or 9' };
  }
  // Check all identical digits (e.g., 9999999999, 8888888888)
  if (/^(\d)\1{9}$/.test(clean)) {
    return { valid: false, message: 'Please enter a genuine, active mobile number' };
  }
  // Check obvious sequential / test numbers
  const sequentialPatterns = [
    '1234567890', '0123456789', '9876543210', '8765432109', '2345678901',
    '9812345678', '9999900000', '9876598765', '9000000000', '9898989898'
  ];
  if (sequentialPatterns.includes(clean)) {
    return { valid: false, message: 'Please enter your actual contact number' };
  }
  // Check repeating 2-digit pairs like 9191919191, 9898989898
  if (/^(\d{2})\1{4}$/.test(clean)) {
    return { valid: false, message: 'Please enter a genuine contact number' };
  }
  // Require at least 4 distinct digits (real phone numbers have variance)
  const uniqueDigits = new Set(clean.split('')).size;
  if (uniqueDigits < 4) {
    return { valid: false, message: 'Please verify mobile number for accuracy' };
  }

  return { valid: true, cleanPhone: clean };
}

function validateName(rawName) {
  const name = (rawName || '').trim();
  if (name.length < 2) {
    return { valid: false, message: 'Please enter your full name (minimum 2 letters)' };
  }
  if (name.length > 50) {
    return { valid: false, message: 'Name is too long (maximum 50 characters)' };
  }
  // Reject scripts, HTML tags, links or special characters
  if (/[<>{}[\]\\\/|@$%^*+=~`]|\b(?:http|https|www|\.com|\.org|\.net|\.in|\.xyz)\b/i.test(name)) {
    return { valid: false, message: 'Special characters, URLs or symbols are not allowed in name' };
  }
  // Reject numbers in personal names
  if (/\d/.test(name)) {
    return { valid: false, message: 'Name cannot contain numeric digits' };
  }
  // Require at least one vowel (English & Indian names always contain vowels, catches keyboard mash like "dfghjkl")
  if (!/[aeiouyAEIOUY]/.test(name)) {
    return { valid: false, message: 'Please enter a genuine readable name' };
  }
  // Block 4+ repeated characters like "Aaaaaaaa"
  if (/(.)\1{3,}/i.test(name)) {
    return { valid: false, message: 'Please avoid repeated characters in name' };
  }
  // Block common bot/fake names
  const spamKeywords = [
    'test', 'testing', 'tester', 'admin', 'administrator', 'fake', 'dummy', 'asdf', 
    'asdfgh', 'qwerty', 'zxcvbnm', 'sample', 'null', 'undefined', 'anonymous', 
    'unknown', 'nobody', 'user', 'guest', 'demo'
  ];
  if (spamKeywords.includes(name.toLowerCase())) {
    return { valid: false, message: 'Please enter your real name for clinical doctor reservation' };
  }

  return { valid: true, cleanName: name };
}

function validateNote(rawNote) {
  const note = (rawNote || '').trim();
  if (!note) return { valid: true, cleanNote: '' };
  
  // Block URL injection
  if (/(?:https?:\/\/|www\.|ftp:\/\/|[a-z0-9-]+\.(?:com|ru|top|xyz|biz|info|site|online|link|click|win|club|icu|cc))/i.test(note)) {
    return { valid: false, message: 'External links are strictly prohibited' };
  }
  // Block promotional or adult/gambling spam
  const spamTerms = [
    'casino', 'poker', 'crypto', 'bitcoin', 'usdt', 'forex', 'viagra', 'cialis',
    'backlink', 'seo service', 'guest post', 'ranking service', 'telegram:', 'whatsapp blast'
  ];
  const lower = note.toLowerCase();
  if (spamTerms.some(term => lower.includes(term))) {
    return { valid: false, message: 'Promotional content is not accepted' };
  }

  return { valid: true, cleanNote: note.slice(0, 300) };
}

export default function OfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: TREATMENTS[0],
    timing: 'Anytime / Earliest Specialist Slot',
    note: ''
  });
  
  // Anti-Spam Security States
  const [honeypot, setHoneypot] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formOpenedTime, setFormOpenedTime] = useState(0);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const modalRef = useRef(null);

  // 1. AUTO-POPUP ON INITIAL SITE ENTRY (Gentle 2.2s delay, session guarded)
  useEffect(() => {
    try {
      // Don't auto-popup on special-offer page since that page already has its own dedicated voucher form
      if (typeof window !== 'undefined' && window.location.pathname.includes('/special-offer')) {
        return;
      }

      const hasAutoOpened = sessionStorage.getItem('shubh_lead_offer_opened_session_v4');
      if (!hasAutoOpened) {
        const timer = setTimeout(() => {
          setIsOpen(true);
          setFormOpenedTime(Date.now());
          setErrorMessage('');
          sessionStorage.setItem('shubh_lead_offer_opened_session_v4', 'true');
        }, 2200);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      // Handle private browsing mode safely
    }
  }, []);

  // 2. UNIFORM CLICK & EVENT DELEGATION ACROSS ENTIRE WEBSITE
  useEffect(() => {
    const handleOpen = (e) => {
      if (e?.detail?.treatment) {
        setFormData(prev => ({ ...prev, treatment: e.detail.treatment }));
      }
      setFormOpenedTime(Date.now());
      setErrorMessage('');
      setIsOpen(true);
    };

    const handleHash = () => {
      if (
        window.location.hash === '#book' || 
        window.location.hash === '#booking' || 
        window.location.hash === '#offer' || 
        window.location.hash === '#claim-offer'
      ) {
        setFormOpenedTime(Date.now());
        setErrorMessage('');
        setIsOpen(true);
      }
    };

    window.addEventListener('openOfferModal', handleOpen);
    window.addEventListener('hashchange', handleHash);
    if (window.location.hash === '#book' || window.location.hash === '#offer') {
      handleHash();
    }

    // Capture phase listener ensures NO component's stopPropagation prevents the modal from opening
    const handleClick = (e) => {
      // A. Match explicit booking selectors
      const trigger = e.target.closest(
        'a[href="#book"], a[href="#booking"], a[href="#offer"], a[href="#claim-offer"], ' +
        '[data-open-offer], [data-open-book], [data-open-modal], ' +
        '.sticky-btn-wa, .tc-claim-btn, .btn-header-reserve, .mobile-bar-btn, .inav-quick-book-btn, ' +
        '.hs-btn-primary, .btn-doc-primary, .btn-kids-primary, .case-cta-btn, .case-action-btn, .btn-sky-cta'
      );

      if (trigger) {
        e.preventDefault();
        e.stopPropagation();
        const customTreatment = trigger.getAttribute('data-treatment') || trigger.dataset?.treatment;
        if (customTreatment) {
          setFormData(prev => ({ ...prev, treatment: customTreatment }));
        }
        setFormOpenedTime(Date.now());
        setErrorMessage('');
        setIsOpen(true);
        return;
      }

      // B. Dynamic intent check on any button or anchor text
      const clickable = e.target.closest('button, a');
      if (clickable) {
        // IMPORTANT: Never intercept actual form submit buttons!
        if (clickable.getAttribute('type') === 'submit' || clickable.closest('form')) {
          return;
        }

        const href = clickable.getAttribute('href') || '';
        // Skip telephone, direct whatsapp, and maps
        if (
          href.startsWith('tel:') || 
          href.startsWith('mailto:') || 
          href.includes('wa.me') || 
          href.includes('whatsapp.com') ||
          href.includes('maps.google')
        ) {
          return;
        }

        const text = (clickable.innerText || clickable.textContent || '').trim().toLowerCase();
        const isBookingIntent = 
          (text.includes('book') && (text.includes('appointment') || text.includes('consultation') || text.includes('slot') || text.includes('priority') || text.includes('now') || text === 'book' || text === 'book slot')) ||
          (text.includes('claim') && (text.includes('offer') || text.includes('20%') || text.includes('pass') || text.includes('voucher') || text.includes('concession')));

        const isInternalNavWithoutHash = href.startsWith('/') && !href.includes('#book') && !href.includes('#offer');

        if (isBookingIntent && !isInternalNavWithoutHash) {
          e.preventDefault();
          e.stopPropagation();
          setFormOpenedTime(Date.now());
          setErrorMessage('');
          setIsOpen(true);
        }
      }
    };

    document.addEventListener('click', handleClick, true);

    // ESC key accessibility
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('openOfferModal', handleOpen);
      window.removeEventListener('hashchange', handleHash);
      document.removeEventListener('click', handleClick, true);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setErrorMessage('');
    if (
      window.location.hash === '#book' || 
      window.location.hash === '#booking' || 
      window.location.hash === '#offer' || 
      window.location.hash === '#claim-offer'
    ) {
      try {
        history.pushState(null, '', window.location.pathname + window.location.search);
      } catch (e) {}
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
      setIsPhoneValid(false);
      setHoneypot('');
    }, 350);
  };

  // Real-time phone input formatting & validation
  const handlePhoneChange = (e) => {
    const raw = e.target.value;
    const cleanDigits = raw.replace(/\D/g, '').replace(/^(?:91|0)/, '').slice(0, 10);
    setFormData(prev => ({ ...prev, phone: cleanDigits }));
    setErrorMessage('');

    if (cleanDigits.length === 10) {
      const check = validateIndianPhone(cleanDigits);
      setIsPhoneValid(check.valid);
    } else {
      setIsPhoneValid(false);
    }
  };

  const handleNameChange = (e) => {
    setFormData(prev => ({ ...prev, name: e.target.value }));
    setErrorMessage('');
  };

  const handleNoteChange = (e) => {
    setFormData(prev => ({ ...prev, note: e.target.value }));
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // ── ADVANCED SPAM FILTER 1: HONEYPOT TRAP ──
    if (honeypot && honeypot.trim().length > 0) {
      // Bot detected! Silently drop without sending spam to clinic
      setIsSubmitting(false);
      setIsSuccess(true);
      return;
    }

    // ── ADVANCED SPAM FILTER 2: SUBMISSION VELOCITY CHECK ──
    // Humans take at least 1.8 seconds to fill out this form
    if (formOpenedTime > 0 && (Date.now() - formOpenedTime) < 1800) {
      setErrorMessage('Form submitted unusually fast. Please verify your details.');
      return;
    }

    // ── ADVANCED SPAM FILTER 3: NAME QUALITY VALIDATION ──
    const nameCheck = validateName(formData.name);
    if (!nameCheck.valid) {
      setErrorMessage(nameCheck.message);
      return;
    }

    // ── ADVANCED SPAM FILTER 4: INDIAN PHONE STRICT VALIDATION ──
    const phoneCheck = validateIndianPhone(formData.phone);
    if (!phoneCheck.valid) {
      setErrorMessage(phoneCheck.message);
      return;
    }

    // ── ADVANCED SPAM FILTER 5: NOTE / INJECTION SANITIZATION ──
    const noteCheck = validateNote(formData.note);
    if (!noteCheck.valid) {
      setErrorMessage(noteCheck.message);
      return;
    }

    // ── ADVANCED SPAM FILTER 6: RATE LIMITING / DUPLICATE PREVENTION ──
    try {
      const lastSubmitTs = localStorage.getItem('shubh_last_lead_timestamp');
      if (lastSubmitTs && (Date.now() - Number(lastSubmitTs)) < 45000) {
        setErrorMessage('Your 20% Privilege Pass is already active! Our team is contacting you directly.');
        return;
      }
    } catch (err) {}

    setIsSubmitting(true);

    const cleanPayload = {
      name: nameCheck.cleanName,
      phone: phoneCheck.cleanPhone,
      treatment: formData.treatment,
      timing: formData.timing,
      note: noteCheck.cleanNote,
      voucher: 'SHUBH-20-VIP',
      source: '20% OFF Privilege Pass Popup (Calibrated Lead Engine)'
    };

    // 1. Post verified clean lead to Web3Forms with full attribution
    try {
      await submitToWeb3Forms({
        name: cleanPayload.name,
        phone: cleanPayload.phone,
        treatment: cleanPayload.treatment,
        timing: cleanPayload.timing,
        source: cleanPayload.source,
        voucher: cleanPayload.voucher,
        message: `Unlocked 20% Privilege Offer for ${cleanPayload.treatment}. Slot: ${cleanPayload.timing}. Goal/Note: ${cleanPayload.note || 'None'}`
      });

      // Record rate limit timestamp
      try {
        localStorage.setItem('shubh_last_lead_timestamp', String(Date.now()));
      } catch (err) {}

      // Fire conversion tracking
      trackConversion(CONVERSION_EVENTS.GENERATE_LEAD, {
        treatment: cleanPayload.treatment,
        source: 'OfferModal',
        voucher: cleanPayload.voucher,
      });
      trackConversion(CONVERSION_EVENTS.OFFER_LEAD, {
        treatment: cleanPayload.treatment,
        voucher: cleanPayload.voucher,
      });
    } catch (err) {
      console.error('Web3Forms submit error:', err);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="offer-modal-overlay" 
          onClick={closeModal} 
          role="dialog" 
          aria-modal="true"
          aria-labelledby="offer-modal-title"
        >
          <motion.div
            ref={modalRef}
            className="clean-offer-card"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Close Button */}
            <button 
              className="clean-close-btn" 
              onClick={closeModal} 
              aria-label="Close offer modal"
              type="button"
            >
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

                  <h2 className="clean-main-title" id="offer-modal-title">
                    Unlock Your <span className="title-gold">20% Clinical Offer</span>
                  </h2>

                  <p className="clean-subtitle">
                    Enter your details to claim instant 20% Privilege Benefits &amp; a Complimentary 3D Digital Scan (Worth ₹3,500).
                  </p>
                </div>

                {/* Inline Error Alert if Spam/Validation Fails */}
                {errorMessage && (
                  <motion.div 
                    className="clean-alert-box"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle size={15} className="alert-icon" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {/* 2. Sleek Input Form */}
                <form onSubmit={handleSubmit} className="clean-form-list" noValidate>
                  <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                  
                  {/* Invisible Honeypot Field for Bot Detection */}
                  <div style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', left: '-9999px', height: 0, width: 0, overflow: 'hidden' }} aria-hidden="true">
                    <label htmlFor="modal_clinic_hp">Do not fill this</label>
                    <input
                      id="modal_clinic_hp"
                      type="text"
                      name="website_url_hp"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Full Name */}
                  <div className="clean-input-box">
                    <User size={18} className="clean-field-icon" />
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      autoComplete="name"
                      maxLength={50}
                      value={formData.name}
                      onChange={handleNameChange}
                    />
                  </div>

                  {/* Phone with Indian Prefix & Live Verification */}
                  <div className={`clean-input-box ${isPhoneValid ? 'input-valid' : ''}`}>
                    <Phone size={18} className="clean-field-icon" />
                    <span className="clean-country-code">🇮🇳 +91</span>
                    <input
                      type="tel"
                      required
                      placeholder="10-Digit Mobile Number *"
                      autoComplete="tel-national"
                      maxLength={10}
                      inputMode="numeric"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                    />
                    {isPhoneValid && (
                      <CheckCircle2 size={16} className="clean-field-valid-icon" />
                    )}
                  </div>

                  {/* Treatment Selection */}
                  <div className="clean-input-box select-box">
                    <Stethoscope size={18} className="clean-field-icon" />
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      aria-label="Select Treatment"
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
                      aria-label="Select Preferred Time"
                    >
                      <option value="Anytime / Earliest Specialist Slot">Preferred Time: Anytime / First Available</option>
                      <option value="Morning Slot (10:00 AM – 01:00 PM)">Morning: 10:00 AM – 01:00 PM</option>
                      <option value="Evening Slot (04:00 PM – 08:00 PM)">Evening: 04:00 PM – 08:00 PM</option>
                      <option value="Virtual Video Consultation (WhatsApp / Zoom)">Virtual Video Call (NRI &amp; Outstation)</option>
                    </select>
                  </div>

                  {/* Optional Goal / Concern */}
                  <div className="clean-input-box">
                    <MessageSquare size={18} className="clean-field-icon" />
                    <input
                      type="text"
                      placeholder="Optional: Tell us about your goal or event date"
                      maxLength={160}
                      value={formData.note}
                      onChange={handleNoteChange}
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
                      By submitting, your 20% privilege benefits are locked and our team will contact you.
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
                <button onClick={closeModal} className="clean-close-dialog-btn" type="button">
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
              margin-bottom: 1.3rem;
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

            /* Inline Alert Banner */
            .clean-alert-box {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              background: #FEF2F2;
              border: 1px solid #FCA5A5;
              color: #991B1B;
              font-size: 0.78rem;
              font-weight: 600;
              padding: 0.55rem 0.85rem;
              border-radius: 10px;
              margin-bottom: 0.85rem;
            }
            .alert-icon {
              color: #DC2626;
              flex-shrink: 0;
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
            .clean-input-box.input-valid {
              border-color: rgba(16, 185, 129, 0.5);
            }

            .clean-country-code {
              font-size: 0.82rem;
              font-weight: 700;
              color: #7A5B43;
              margin-right: 0.45rem;
              letter-spacing: 0.02em;
            }

            .clean-field-valid-icon {
              color: #10B981;
              flex-shrink: 0;
              margin-left: 0.4rem;
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
