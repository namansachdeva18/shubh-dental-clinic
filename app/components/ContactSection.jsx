'use client';
import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section-wrapper">
      
      {/* Background Vectors & Glowing Orbs */}
      <div className="contact-bg-elements" aria-hidden="true">
        <div className="contact-bg-grid" />
        <div className="contact-glow-orb orb-left" />
        <div className="contact-glow-orb orb-right" />
      </div>

      <div className="contact-container">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="contact-header text-center"
        >
          <div className="contact-badge">
            <MapPin size={14} />
            <span>Visit Our Clinic</span>
          </div>
          <h2 className="contact-title">
            Get in Touch & <span className="gold-gradient-text">Location</span>
          </h2>
          <p className="contact-subtitle">
            Conveniently located on Delhi Bypass Road, Rohtak with ample parking space and modern digital dental facilities.
          </p>
        </motion.div>

        <div className="contact-grid">
          
          {/* Details Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="contact-details-col"
          >
            
            {/* Address Box */}
            <motion.div variants={fadeUp} className="contact-info-card glass-card">
              <div className="card-icon-wrap icon-primary">
                <MapPin size={22} />
              </div>
              <div className="card-info-content">
                <h3 className="card-info-title font-heading">Clinic Address</h3>
                <p className="card-info-text">
                  Tilak Nagar, Lane 9 Corner, Opposite Swami Nitanand Public School, Delhi Bypass Road, Rohtak, Haryana 124001
                </p>
                <a
                  href="https://maps.app.goo.gl/HW4Ve1Cf2Ye728CX8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-map-directions"
                >
                  <Navigation size={13} />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>

            {/* Phone & Email Box */}
            <motion.div variants={fadeUp} className="contact-info-card glass-card">
              <div className="card-icon-wrap icon-gold">
                <Phone size={22} />
              </div>
              <div className="card-info-content">
                <h3 className="card-info-title font-heading">Phone & Appointments</h3>
                <p className="card-info-text">Mobile: <strong className="text-highlight">+91 8685048414</strong></p>
                <p className="card-info-text">Landline: <strong className="text-highlight">01262-469393</strong></p>

                <div className="email-sub-box">
                  <Mail size={16} className="email-icon" />
                  <span>sky20083@gmail.com</span>
                </div>
              </div>
            </motion.div>

            {/* Timings Box */}
            <motion.div variants={fadeUp} className="contact-info-card glass-card">
              <div className="card-icon-wrap icon-dark">
                <Clock size={22} />
              </div>
              <div className="card-info-content">
                <h3 className="card-info-title font-heading">Clinic Timings</h3>
                <p className="card-info-text"><strong>Mon – Sat:</strong> 09:30 AM – 08:00 PM</p>
                <p className="card-info-text"><strong>Sunday:</strong> By Appointment Only</p>
              </div>
            </motion.div>

            {/* Quick Action Buttons */}
            <motion.div variants={fadeUp} className="contact-actions-row">
              <a href="tel:+918685048414" className="btn-action-call premium-shadow">
                <Phone size={18} />
                <span>Call Clinic</span>
              </a>
              <a
                href="https://wa.me/918685048414"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action-wa premium-shadow"
              >
                <MessageSquare size={18} />
                <span>WhatsApp</span>
              </a>
            </motion.div>

          </motion.div>

          {/* Map Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="contact-map-col premium-shadow"
          >
            <div className="map-overlay-badge">
              <Navigation size={14} /> Shubh Dental Clinic
            </div>
            <iframe
              title="Shubh Orthodontic & Dental Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.5356910609346!2d76.6044113!3d28.8955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d8526ff0b9379%3A0xb15b60e3947148d7!2sShubh%20Orthodontic%20%26%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-section-wrapper {
          padding: 7rem 1.5rem;
          background: #FAF9F6;
          position: relative;
          overflow: hidden;
        }

        .contact-bg-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .contact-bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(214, 122, 65, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(214, 122, 65, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .contact-glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
        }
        .orb-left {
          width: 500px; height: 500px;
          bottom: -100px; left: -150px;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.15) 0%, transparent 70%);
        }
        .orb-right {
          width: 600px; height: 600px;
          top: -100px; right: -200px;
          background: radial-gradient(circle, rgba(201, 168, 76, 0.1) 0%, transparent 70%);
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(214, 122, 65, 0.1);
          color: #D67A41;
          padding: 0.5rem 1.25rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid rgba(214, 122, 65, 0.25);
          margin-bottom: 1.25rem;
          box-shadow: 0 4px 15px rgba(214, 122, 65, 0.08);
        }

        .contact-title {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 800;
          color: #110805;
          margin-bottom: 1rem;
          line-height: 1.15;
        }

        .contact-subtitle {
          font-size: 1.05rem;
          color: #554A44;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 3rem;
          align-items: stretch;
        }

        .contact-details-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-info-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border-radius: 24px;
          padding: 1.75rem;
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 15px 35px rgba(17, 8, 5, 0.04), 0 5px 15px rgba(214, 122, 65, 0.03);
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 45px rgba(17, 8, 5, 0.06), 0 10px 25px rgba(214, 122, 65, 0.05);
        }

        .card-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: inset 0 2px 4px rgba(255,255,255,0.5);
        }

        .icon-primary {
          background: linear-gradient(135deg, rgba(214, 122, 65, 0.15) 0%, rgba(214, 122, 65, 0.05) 100%);
          color: #D67A41;
          border: 1px solid rgba(214, 122, 65, 0.2);
        }

        .icon-gold {
          background: linear-gradient(135deg, rgba(201, 168, 76, 0.2) 0%, rgba(201, 168, 76, 0.05) 100%);
          color: #B88E28;
          border: 1px solid rgba(201, 168, 76, 0.25);
        }

        .icon-dark {
          background: linear-gradient(135deg, rgba(17, 8, 5, 0.1) 0%, rgba(17, 8, 5, 0.02) 100%);
          color: #110805;
          border: 1px solid rgba(17, 8, 5, 0.1);
        }

        .card-info-content {
          flex: 1;
        }

        .card-info-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #110805;
          margin-bottom: 0.4rem;
        }

        .card-info-text {
          font-size: 0.95rem;
          color: #4A3A33;
          line-height: 1.6;
        }

        .btn-map-directions {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: #D67A41;
          font-size: 0.85rem;
          font-weight: 800;
          margin-top: 0.75rem;
          text-decoration: none;
          padding: 0.35rem 0;
          border-bottom: 1.5px solid transparent;
          transition: all 0.2s ease;
        }
        .btn-map-directions:hover {
          color: #B85922;
          border-bottom-color: #B85922;
        }

        .email-sub-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px dashed rgba(214, 122, 65, 0.25);
          font-size: 0.9rem;
          color: #110805;
          font-weight: 700;
        }
        .email-icon {
          color: #D67A41;
        }

        .contact-actions-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-top: 0.5rem;
        }

        .btn-action-call, .btn-action-wa {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem 1.25rem;
          border-radius: 16px;
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: 1rem;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-action-call {
          background: linear-gradient(135deg, #2A150B 0%, #110805 100%);
          color: #FFFFFF;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .btn-action-wa {
          background: linear-gradient(135deg, #25D366 0%, #1DA851 100%);
          color: #FFFFFF;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .premium-shadow {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12), 0 4px 10px rgba(0,0,0,0.06);
        }

        .btn-action-call:hover, .btn-action-wa:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.18), 0 5px 15px rgba(0,0,0,0.1);
        }

        .contact-map-col {
          border-radius: 32px;
          overflow: hidden;
          border: 4px solid #FFFFFF;
          min-height: 500px;
          background: #FFFFFF;
          position: relative;
        }

        .map-overlay-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
          padding: 0.6rem 1.25rem;
          border-radius: 99px;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.9rem;
          color: #110805;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          z-index: 10;
          border: 1px solid rgba(255,255,255,1);
        }
        .map-overlay-badge svg {
          color: #D67A41;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .contact-map-col {
            min-height: 400px;
          }
        }
        @media (max-width: 480px) {
          .contact-actions-row {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </section>
  );
}