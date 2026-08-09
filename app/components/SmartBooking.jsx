'use client';
import { useState } from 'react';
import { Calendar, Clock, User, Phone, CheckCircle, MessageSquare, ShieldCheck, Sparkles, Send } from 'lucide-react';
import ScrollReveal, { StaggerReveal, StaggerItem } from './ScrollReveal';

export default function SmartBooking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'Clear Aligners / Invisalign',
    doctor: 'Prof. Dr. S. K. Yadav',
    date: '',
    time: '10:00 AM'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    const msg = `Hello Shubh Dental Clinic! I would like to book an appointment.\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n🦷 Treatment: ${formData.treatment}\n👨‍⚕️ Doctor: ${formData.doctor}\n📅 Preferred Date: ${formData.date || 'Earliest Available'}\n⏰ Time: ${formData.time}`;
    const url = `https://wa.me/918685048414?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="booking" className="smart-booking-section">
      <div className="smart-booking-container">
        
        <div className="booking-card-wrapper">
          <div className="booking-grid">
            
            {/* Left Info Column */}
            <StaggerReveal className="booking-info" stagger={0.1} delay={0.1}>
              <StaggerItem className="booking-tag" variant="fadeUp">
                <Sparkles size={14} />
                <span>Instant Consultation</span>
              </StaggerItem>

              <StaggerItem className="booking-headline" variant="fadeUp">
                Schedule Your <span className="gold-text">Smile Consultation</span>
              </StaggerItem>

              <StaggerItem className="booking-sub" variant="fadeUp">
                Book directly with our senior specialists. Receive a personalized treatment roadmap with 0% interest EMI options.
              </StaggerItem>

              <StaggerItem className="booking-perks" variant="fadeUp">
                <div className="perk-item">
                  <div className="perk-icon">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <h4 className="perk-title">Priority Consultation</h4>
                    <p className="perk-desc">Scheduled patients skip waiting room delays.</p>
                  </div>
                </div>

                <div className="perk-item">
                  <div className="perk-icon">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="perk-title">3D Digital Assessment</h4>
                    <p className="perk-desc">Includes visual smile preview for clear aligners.</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem className="booking-direct-actions" variant="fadeUp">
                <a href="tel:+918685048414" className="btn-direct-call">
                  <Phone size={15} />
                  <span>Call: +91 8685048414</span>
                </a>
                <a 
                  href="https://wa.me/918685048414" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-direct-whatsapp"
                >
                  <MessageSquare size={15} />
                  <span>WhatsApp Booking</span>
                </a>
              </StaggerItem>
            </StaggerReveal>

            {/* Right Form Column */}
            <ScrollReveal className="booking-form-wrap" variant="slideRight" delay={0.2} duration={0.6}>
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon-wrap">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="success-title font-heading">Booking Request Received!</h3>
                  <p className="success-desc">
                    Thank you, <strong>{formData.name}</strong>. WhatsApp has opened to confirm your appointment. Our reception desk will contact you shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-reset-form">
                    Book Another Slot
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="booking-form">
                  <div className="form-header">
                    <h3 className="form-header-title font-heading">Online Slot Reservation</h3>
                    <span className="form-header-[#badge]">Instant Confirmation</span>
                  </div>

                  <div className="form-row">
                    <div className="input-group">
                      <label>Your Name *</label>
                      <div className="input-box">
                        <User size={16} className="input-icon" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <label>Phone Number *</label>
                      <div className="input-box">
                        <Phone size={16} className="input-icon" />
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9812345678"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="input-group">
                      <label>Select Treatment</label>
                      <select
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      >
                        <option>Clear Aligners / Invisalign</option>
                        <option>Metal & Ceramic Braces</option>
                        <option>Dental Implants</option>
                        <option>Root Canal Treatment</option>
                        <option>Smile Makeover & Veneers</option>
                        <option>General Dental Checkup</option>
                      </select>
                    </div>

                    <div className="input-group">
                      <label>Specialist Doctor</label>
                      <select
                        value={formData.doctor}
                        onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                      >
                        <option>Prof. Dr. S. K. Yadav (Orthodontics)</option>
                        <option>Dr. Achla Bharti Yadav (Cosmetic)</option>
                        <option>Any Available Specialist</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="input-group">
                      <label>Preferred Date</label>
                      <div className="input-box">
                        <Calendar size={16} className="input-icon" />
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <label>Preferred Slot</label>
                      <div className="input-box">
                        <Clock size={16} className="input-icon" />
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        >
                          <option>10:00 AM - 01:00 PM (Morning)</option>
                          <option>04:00 PM - 08:00 PM (Evening)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn-submit-booking">
                    <Send size={18} />
                    <span>Confirm & Book on WhatsApp</span>
                  </button>
                </form>
              )}
            </ScrollReveal>

          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .smart-booking-section {
          padding: 6rem 1.5rem;
          background: linear-gradient(180deg, #FAF9F6 0%, #FFFFFF 100%);
          position: relative;
        }

        .smart-booking-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .booking-card-wrapper {
          background: linear-gradient(135deg, #110805 0%, #2A150B 100%);
          border-radius: 32px;
          padding: 3.5rem 3rem;
          color: #FFFFFF;
          box-shadow: 0 30px 70px rgba(17, 8, 5, 0.25);
          border: 1px solid rgba(214, 122, 65, 0.25);
        }

        .booking-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3.5rem;
          align-items: center;
        }

        .booking-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(214, 122, 65, 0.15);
          color: #D67A41;
          padding: 0.35rem 1rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: 1px solid rgba(214, 122, 65, 0.3);
          margin-bottom: 1.25rem;
          box-shadow: 0 0 15px rgba(214, 122, 65, 0.15);
          animation: pulseBadge 3s infinite alternate ease-in-out;
        }

        @keyframes pulseBadge {
          0% { box-shadow: 0 0 10px rgba(214, 122, 65, 0.1); }
          100% { box-shadow: 0 0 25px rgba(214, 122, 65, 0.3); }
        }

        .booking-headline {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: 2.3rem;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.25;
          margin-bottom: 1rem;
        }

        .gold-text {
          background: linear-gradient(135deg, #D67A41 0%, #C9A84C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .booking-sub {
          font-size: 0.95rem;
          color: #D1C5C0;
          line-height: 1.65;
          margin-bottom: 2rem;
        }

        .booking-perks {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .perk-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .perk-icon {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(214, 122, 65, 0.2), rgba(214, 122, 65, 0.05));
          color: #D67A41;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
          border: 1px solid rgba(214, 122, 65, 0.3);
          box-shadow: 0 4px 15px rgba(214, 122, 65, 0.15);
        }

        .perk-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.1rem;
        }

        .perk-desc {
          font-size: 0.78rem;
          color: #A89B95;
        }

        .booking-direct-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-direct-call, .btn-direct-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.1rem;
          border-radius: 12px;
          font-size: 0.82rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-direct-call {
          background: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .btn-direct-call:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .btn-direct-whatsapp {
          background: rgba(37, 211, 102, 0.15);
          color: #25D366;
          border: 1px solid rgba(37, 211, 102, 0.3);
        }
        .btn-direct-whatsapp:hover {
          background: rgba(37, 211, 102, 0.25);
        }

        /* FORM */
        .booking-form-wrap {
          background: #FFFCF9;
          border-radius: 24px;
          padding: 2.25rem 2rem;
          color: #110805;
          box-shadow: 0 25px 60px rgba(17, 8, 5, 0.4), 0 0 0 1px rgba(214, 122, 65, 0.1) inset;
          position: relative;
        }

        .form-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .form-header-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #110805;
        }

        .form-header-[#badge] {
          font-size: 0.72rem;
          color: #888;
        }

        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .input-group label {
          font-size: 0.72rem;
          font-weight: 800;
          color: #554A44;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .input-box {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 0.85rem;
          color: #D67A41;
          opacity: 0.8;
          pointer-events: none;
          transition: opacity 0.2s ease;
        }

        .input-box input, .input-box select {
          padding-left: 2.4rem;
        }

        .input-group input, .input-group select {
          width: 100%;
          padding: 0.75rem 0.85rem;
          border-radius: 12px;
          border: 1px solid rgba(214, 122, 65, 0.2);
          font-size: 0.9rem;
          outline: none;
          transition: all 0.3s ease;
          background: #FDFBF9;
          color: #110805;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
        }

        .input-group input:focus, .input-group select:focus {
          border-color: #D67A41;
          background: #FFFFFF;
          box-shadow: 0 0 0 4px rgba(214, 122, 65, 0.15), inset 0 2px 4px rgba(0,0,0,0.02);
        }
        
        .input-group input:focus + .input-icon, .input-box:focus-within .input-icon {
          opacity: 1;
        }

        .btn-submit-booking {
          margin-top: 0.75rem;
          width: 100%;
          background: linear-gradient(135deg, #D67A41 0%, #C9A84C 100%);
          color: #FFFFFF;
          padding: 1rem 1.5rem;
          border-radius: 14px;
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: 1.05rem;
          font-weight: 800;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          box-shadow: 0 10px 25px rgba(214, 122, 65, 0.35);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .btn-submit-booking::after {
          content: '';
          position: absolute;
          top: 0;
          left: -150%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.4), transparent);
          transform: skewX(-25deg);
          animation: buttonShimmer 4s infinite;
        }

        @keyframes buttonShimmer {
          0% { left: -150%; }
          15% { left: 150%; }
          100% { left: 150%; }
        }

        .btn-submit-booking:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(214, 122, 65, 0.45);
        }

        .form-success {
          text-align: center;
          padding: 2rem 1rem;
        }

        .success-icon-wrap {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          color: #10B981;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem auto;
        }

        .success-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.5rem;
        }

        .success-desc {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .btn-reset-form {
          background: #D67A41;
          color: #FFFFFF;
          border: none;
          padding: 0.65rem 1.4rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
        }

        @media (max-width: 992px) {
          .booking-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
          .booking-card-wrapper {
            padding: 2.5rem 1.5rem;
          }
        }
      `}} />
    </section>
  );
}