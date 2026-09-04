'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Phone, Stethoscope, ChevronRight, Sparkles } from 'lucide-react';
import { submitToWeb3Forms, WEB3FORMS_ACCESS_KEY } from '../lib/web3forms';

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: '',
    date: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Listen for hash changes to open the modal
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#standard-book') {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    // Check on mount
    checkHash();

    // Listen for hash changes
    window.addEventListener('hashchange', checkHash);
    
    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    // Remove hash without scrolling
    history.pushState(null, '', window.location.pathname + window.location.search);
    
    // Reset form after animation
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', phone: '', treatment: '', date: '' });
    }, 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);
    
    // Submit to Web3Forms
    try {
      await submitToWeb3Forms({
        name: formData.name,
        phone: formData.phone,
        treatment: formData.treatment,
        date: formData.date,
        source: 'Standard Booking Modal (#standard-book)',
        message: `Consultation requested for ${formData.treatment} on ${formData.date}`
      });
    } catch (err) {
      console.error('Web3Forms submit error:', err);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (e) => {
    if (e.target.name === 'phone') {
      // Only allow numbers and max 10 digits
      const val = e.target.value.replace(/\D/g, '');
      if (val.length <= 10) {
        setFormData({ ...formData, phone: val });
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 400 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="booking-modal-overlay">
          <motion.div 
            className="booking-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          />
          
          <div className="booking-modal-container">
            <motion.div 
              className="booking-modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Close Button */}
              <button className="bm-close-btn" onClick={closeModal} aria-label="Close modal">
                <X size={20} />
              </button>

              {!isSuccess ? (
                <>
                  <div className="bm-header">
                    <div className="bm-badge">
                      <Sparkles size={14} /> Priority Booking · In-Clinic &amp; Online
                    </div>
                    <h2>Reserve Your <span className="text-gradient-copper">Consultation</span></h2>
                    <p>In-Clinic Visit (Rohtak) &amp; <strong>Online Video Consultations</strong> available with senior MDS specialists.</p>
                  </div>

                  <motion.form 
                    className="bm-form" 
                    onSubmit={handleSubmit}
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                  >
                    <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                    <input type="hidden" name="subject" value="New Consultation Request from Booking Modal" />
                    <input type="hidden" name="from_name" value="Shubh Dental Clinic Website" />
                    <motion.div className="bm-input-group" variants={itemVariants}>
                      <div className="bm-input-wrapper">
                        <User className="bm-icon" size={18} />
                        <input 
                          type="text" 
                          name="name" 
                          placeholder="Full Name *" 
                          required 
                          autoFocus
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </motion.div>

                    <motion.div className="bm-input-group" variants={itemVariants}>
                      <div className="bm-input-wrapper">
                        <Phone className="bm-icon" size={18} />
                        <input 
                          type="tel" 
                          name="phone" 
                          placeholder="10-Digit Mobile Number *" 
                          required 
                          pattern="[0-9]{10}"
                          title="Please enter a valid 10-digit mobile number"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </motion.div>

                    <motion.div className="bm-input-group" variants={itemVariants}>
                      <div className="bm-input-wrapper">
                        <Stethoscope className="bm-icon" size={18} />
                        <select 
                          name="treatment" 
                          required 
                          value={formData.treatment}
                          onChange={handleChange}
                          className={formData.treatment === "" ? "placeholder-active" : ""}
                        >
                          <option value="" disabled>Select Consultation / Treatment *</option>
                          <option value="online-video-consult">📹 Online Video Consultation (All Treatments)</option>
                          <option value="invisalign">Invisalign® Clear Aligners (In-Clinic / Online)</option>
                          <option value="damon">Damon® System Braces</option>
                          <option value="airway-orthodontics">Airway Orthodontics & Maxillary Expansion</option>
                          <option value="sleep-apnea">Sleep Apnea & Anti-Snoring Oral Appliance</option>
                          <option value="tmj-care">TMJ Specialist & Jaw Joint Care</option>
                          <option value="tongue-tie">Laser Tongue Tie Release (Frenectomy)</option>
                          <option value="implants">Dental Implants</option>
                          <option value="smile-makeover">Smile Makeover / Veneers</option>
                          <option value="general">In-Clinic Dental Checkup (Rohtak)</option>
                        </select>
                      </div>
                    </motion.div>

                    <motion.div className="bm-input-group" variants={itemVariants}>
                      <div className="bm-input-wrapper">
                        <Calendar className="bm-icon" size={18} />
                        <input 
                          type="date" 
                          name="date" 
                          required 
                          value={formData.date}
                          onChange={handleChange}
                          onClick={(e) => { try { e.target.showPicker(); } catch(err) {} }}
                          className={formData.date === "" ? "placeholder-active" : ""}
                        />
                      </div>
                    </motion.div>

                    <motion.button 
                      type="submit" 
                      className="bm-submit-btn" 
                      disabled={isSubmitting}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <span className="bm-loader"></span>
                      ) : (
                        <>
                          Confirm Request
                          <ChevronRight size={18} />
                        </>
                      )}
                    </motion.button>
                    
                    <motion.p className="bm-footer-note" variants={itemVariants}>
                      By submitting, you agree to our privacy policy. Your data is secure and will only be used to contact you regarding your appointment.
                    </motion.p>
                  </motion.form>
                </>
              ) : (
                <motion.div 
                  className="bm-success-state"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="bm-success-icon-wrapper">
                    <motion.div
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <svg viewBox="0 0 50 50" className="bm-success-svg">
                        <motion.path 
                          d="M14 27 l 7 7 l 16 -16" 
                          fill="none" 
                          stroke="var(--accent-gold)" 
                          strokeWidth="4" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        />
                      </svg>
                    </motion.div>
                  </div>
                  <h3>Request Received!</h3>
                  <p>Thank you, <strong>{formData.name}</strong>. Our care coordinator will call you at <strong>{formData.phone}</strong> shortly to confirm your {formData.date ? `appointment for ${new Date(formData.date).toLocaleDateString()}` : 'appointment'}.</p>
                  <button type="button" className="bm-done-btn" onClick={closeModal}>
                    Close
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            .booking-modal-overlay {
              position: fixed;
              inset: 0;
              z-index: 99999;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 16px;
            }
            .booking-modal-backdrop {
              position: absolute;
              inset: 0;
              background: rgba(17, 8, 5, 0.7);
              backdrop-filter: blur(16px);
              -webkit-backdrop-filter: blur(16px);
            }
            .booking-modal-container {
              position: relative;
              z-index: 1;
              width: 100%;
              max-width: 480px;
            }
            .booking-modal-content {
              background: #FFFFFF;
              border-radius: 32px;
              padding: 48px 36px 40px;
              box-shadow: 0 30px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(214, 122, 65, 0.2);
              position: relative;
              overflow: hidden;
            }
            
            /* Decorative Background Elements */
            .booking-modal-content::before {
              content: '';
              position: absolute;
              top: -20%; left: -50%; width: 200%; height: 100%;
              background: radial-gradient(ellipse at 50% 0%, rgba(214, 122, 65, 0.15) 0%, rgba(201, 168, 76, 0.05) 50%, rgba(255,255,255,0) 80%);
              z-index: 0;
              pointer-events: none;
            }
            
            .bm-close-btn {
              position: absolute;
              top: 24px;
              right: 24px;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: rgba(255,255,255,0.9);
              border: 1px solid rgba(214, 122, 65, 0.2);
              color: var(--text-primary);
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              z-index: 10;
              transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
              box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            }
            .bm-close-btn:hover {
              background: #FFF;
              transform: scale(1.1) rotate(90deg);
              box-shadow: 0 8px 20px rgba(214, 122, 65, 0.15);
              color: var(--accent-gold-dark);
              border-color: rgba(214, 122, 65, 0.4);
            }

            .bm-header {
              position: relative;
              z-index: 1;
              text-align: center;
              margin-bottom: 36px;
            }
            .bm-badge {
              display: inline-flex;
              align-items: center;
              gap: 6px;
              background: linear-gradient(120deg, rgba(214, 122, 65, 0.15), rgba(201, 168, 76, 0.05));
              color: #D67A41;
              padding: 8px 16px;
              border-radius: 99px;
              font-size: 0.78rem;
              font-weight: 800;
              text-transform: uppercase;
              letter-spacing: 0.08em;
              margin-bottom: 18px;
              border: 1px solid rgba(214, 122, 65, 0.25);
              box-shadow: 0 4px 10px rgba(214, 122, 65, 0.08);
            }
            .bm-header h2 {
              font-family: var(--font-heading);
              font-size: 2.2rem;
              font-weight: 800;
              color: #1A0C06;
              margin-bottom: 12px;
              line-height: 1.1;
              letter-spacing: -0.02em;
            }
            .bm-header p {
              font-size: 0.95rem;
              color: #5A4D46;
              line-height: 1.6;
              font-weight: 500;
            }

            .bm-form {
              position: relative;
              z-index: 1;
              display: flex;
              flex-direction: column;
              gap: 20px;
            }
            .bm-input-wrapper {
              position: relative;
              display: flex;
              align-items: center;
            }
            .bm-icon {
              position: absolute;
              left: 20px;
              color: #D67A41;
              pointer-events: none;
            }
            .bm-input-wrapper input,
            .bm-input-wrapper select {
              width: 100%;
              padding: 18px 20px 18px 52px;
              background: #FFFFFF;
              border: 1px solid rgba(0,0,0,0.1);
              border-radius: 16px;
              font-family: var(--font-body);
              font-size: 1rem;
              color: #1A0C06;
              font-weight: 600;
              transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
              appearance: none;
              box-shadow: inset 0 2px 5px rgba(0,0,0,0.02);
            }
            .bm-input-wrapper select {
              cursor: pointer;
            }
            .bm-input-wrapper input:focus,
            .bm-input-wrapper select:focus {
              outline: none;
              border-color: #D67A41;
              background: #FFFFFF;
              box-shadow: 0 0 0 4px rgba(214, 122, 65, 0.15), inset 0 2px 5px rgba(0,0,0,0.02);
            }
            .bm-input-wrapper input::placeholder {
              color: #A09690;
              font-weight: 500;
            }
            .placeholder-active {
              color: #A09690 !important;
              font-weight: 500 !important;
            }
            
            .bm-submit-btn {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
              background: linear-gradient(135deg, #D67A41 0%, #B85922 100%) !important;
              color: #FFFFFF !important;
              border: none;
              padding: 20px;
              border-radius: 16px;
              font-size: 1.15rem;
              font-weight: 800;
              cursor: pointer;
              margin-top: 12px;
              transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
              box-shadow: 0 10px 24px rgba(214, 122, 65, 0.4) !important;
              position: relative;
              overflow: hidden;
              letter-spacing: 0.02em;
            }
            .bm-submit-btn::before {
              content: '';
              position: absolute;
              top: 0; left: -100%; width: 50%; height: 100%;
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
              transition: all 0.5s ease;
            }
            .bm-submit-btn:hover:not(:disabled)::before {
              left: 150%;
            }
            .bm-submit-btn:hover:not(:disabled) {
              transform: translateY(-3px);
              box-shadow: 0 15px 30px rgba(214, 122, 65, 0.4);
            }
            .bm-submit-btn:disabled {
              opacity: 0.7;
              cursor: not-allowed;
            }

            .bm-loader {
              width: 24px;
              height: 24px;
              border: 3px solid rgba(255,255,255,0.3);
              border-radius: 50%;
              border-top-color: #FFF;
              animation: spin 1s ease-in-out infinite;
            }
            @keyframes spin {
              to { transform: rotate(360deg); }
            }

            .bm-footer-note {
              text-align: center;
              font-size: 0.78rem;
              color: #A09690;
              margin-top: 12px;
              line-height: 1.6;
              font-weight: 500;
            }

            .bm-success-state {
              text-align: center;
              padding: 24px 0;
            }
            .bm-success-icon-wrapper {
              width: 88px;
              height: 88px;
              background: #FDFBFA;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 28px;
              border: 2px solid rgba(214, 122, 65, 0.2);
              box-shadow: 0 10px 30px rgba(214, 122, 65, 0.15);
            }
            .bm-success-svg {
              width: 44px;
              height: 44px;
            }
            .bm-success-state h3 {
              font-family: var(--font-heading);
              font-size: 2rem;
              font-weight: 800;
              color: #1A0C06;
              margin-bottom: 16px;
            }
            .bm-success-state p {
              color: #5A4D46;
              line-height: 1.7;
              margin-bottom: 36px;
              font-size: 1.05rem;
              font-weight: 500;
            }
            .bm-success-state strong {
              color: #1A0C06;
              font-weight: 700;
            }
            .bm-done-btn {
              background: #FFFFFF;
              color: #1A0C06;
              border: 2px solid #E5DFD9;
              padding: 16px 48px;
              border-radius: 99px;
              font-weight: 800;
              font-size: 1.05rem;
              cursor: pointer;
              transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .bm-done-btn:hover {
              background: #1A0C06;
              color: #FFF;
              border-color: #1A0C06;
              transform: translateY(-2px);
              box-shadow: 0 10px 24px rgba(26, 12, 6, 0.2);
            }

            /* Custom Calendar Icon fix for input type="date" */
            input[type="date"]::-webkit-calendar-picker-indicator {
              opacity: 0;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              cursor: pointer;
            }
            .bm-input-wrapper::after {
              content: '';
              position: absolute;
              right: 20px;
              pointer-events: none;
              width: 18px;
              height: 18px;
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23C9A84C'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
              background-repeat: no-repeat;
              background-position: center;
              opacity: 0;
            }
            .bm-input-wrapper:has(select)::after {
              opacity: 1;
            }
          `}} />
        </div>
      )}
    </AnimatePresence>
  );
}
