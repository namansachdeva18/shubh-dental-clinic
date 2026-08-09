'use client';
import Link from 'next/link';
import { Phone, MapPin, Mail, Sparkles, ChevronRight, Heart } from 'lucide-react';
import ScrollReveal, { StaggerReveal, StaggerItem } from './ScrollReveal';

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        
        <StaggerReveal className="footer-top-grid" stagger={0.08} delay={0.1}>
          
          {/* Brand Info */}
          <StaggerItem className="footer-brand-col" variant="fadeUp">
            <div className="footer-brand-header">
              <img src="/logo.webp?v=2" alt="Shubh Dental Clinic Logo" style={{ width: '45px', height: '45px', objectFit: 'contain', background: '#fff', borderRadius: '8px', padding: '4px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Dr. S.K. Yadav's</span>
                <span style={{ fontFamily: '"Dancing Script", cursive', fontSize: '1.75rem', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap', lineHeight: '1' }}>Shubh Orthodontic & Dental Clinic</span>
                <span style={{ fontStyle: 'italic', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginTop: '2px' }}>A Multi Speciality Dental Care Center</span>
              </div>
            </div>

            <p className="footer-brand-desc">
              Rohtak&apos;s premier specialized orthodontic & dental care center led by <strong>Prof. Dr. S. K. Yadav</strong> (MDS Orthodontics, Ex-PGI Chandigarh). Over 20+ years of transforming smiles with braces, Invisalign, and implants.
            </p>

            <div className="footer-open-pill">
              <span className="open-dot" />
              <span>Open Mon – Sat: 09:30 AM – 08:00 PM</span>
            </div>
 
            <div className="footer-logos-row">
              <img src="/ios-logo.png" alt="Indian Orthodontic Society Endorsed" className="footer-logo-img" />
              <img src="/wfo-logo.png" alt="World Federation of Orthodontists" className="footer-logo-img" />
              <img src="/invisalign-logo.png" alt="Certified Invisalign Provider" className="footer-logo-img" />
              <img src="/damon-logo.png" alt="Damon Braces Provider" className="footer-logo-img" />
            </div>
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem className="footer-links-col" variant="fadeUp">
            <h4 className="footer-col-title font-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#about"><ChevronRight size={13} className="link-arrow" />About Doctors</a></li>
              <li><Link href="/dental-tourism"><ChevronRight size={13} className="link-arrow" />Dental Tourism (NRI)</Link></li>
              <li><a href="#booking"><ChevronRight size={13} className="link-arrow" />Book Appointment</a></li>
              <li><a href="#testimonials"><ChevronRight size={13} className="link-arrow" />Patient Reviews</a></li>
              <li><a href="#faq"><ChevronRight size={13} className="link-arrow" />FAQs</a></li>
              <li><a href="#contact"><ChevronRight size={13} className="link-arrow" />Contact Us</a></li>
            </ul>
          </StaggerItem>

          {/* Treatments */}
          <StaggerItem className="footer-links-col" variant="fadeUp">
            <h4 className="footer-col-title font-heading">Specialized Care</h4>
            <ul className="footer-links-list">
              <li><span>Clear Aligners & Invisalign</span></li>
              <li><span>Metal & Ceramic Braces</span></li>
              <li><span>SkyAlign Clear Aligners</span></li>
              <li><span>Dental Implants & Prosthetics</span></li>
              <li><span>Painless Root Canal Treatment</span></li>
              <li><span>Smile Makeovers & Veneers</span></li>
            </ul>
          </StaggerItem>

          {/* Contact Details */}
          <StaggerItem className="footer-contact-col" variant="fadeUp">
            <h4 className="footer-col-title font-heading">Contact</h4>
            <div className="footer-contact-items">
              <div className="contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>Tilak Nagar, Lane 9 Corner, Opp. Swami Nitanand Public School, Delhi Bypass Road, Rohtak, HR 124001</span>
              </div>
              <div className="contact-item">
                <Phone size={16} className="contact-icon" />
                <a href="tel:+918685048414">+91 8685048414 | 01262-469393</a>
              </div>
              <div className="contact-item">
                <Mail size={16} className="contact-icon" />
                <span>sky20083@gmail.com</span>
              </div>
            </div>
          </StaggerItem>

        </StaggerReveal>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Shubh Orthodontic & Dental Clinic. All Rights Reserved.</p>
          <p className="credit-text">
            <span>Crafted with</span>
            <Heart size={13} className="heart-icon" />
            <span>for Healthy Smiles</span>
          </p>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-root {
          background: #110805;
          color: #FFFFFF;
          padding: 4.5rem 1.5rem 2.5rem;
          border-top: 1px solid rgba(214, 122, 65, 0.2);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.8fr 1fr 1.1fr;
          gap: 2.5rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1rem;
        }

        .footer-brand-logo {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(135deg, #D67A41 0%, #C9A84C 100%);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          font-weight: 900;
        }

        .footer-brand-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.2;
        }

        .footer-brand-sub {
          font-size: 0.68rem;
          color: #C9A84C;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .footer-brand-desc {
          font-size: 0.85rem;
          color: #A89B95;
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }

        .footer-open-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: #A89B95;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.35rem 0.85rem;
          border-radius: 99px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .open-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10B981;
        }

        .footer-logos-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 1.8rem;
          flex-wrap: wrap;
        }

        .footer-logo-img {
          height: 42px;
          width: auto;
          object-fit: contain;
          background: #FFFFFF;
          padding: 4px 6px;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
        }

        .footer-logo-img:hover {
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 6px 12px rgba(214, 122, 65, 0.25);
        }

        .footer-col-title {
          font-size: 0.8rem;
          font-weight: 800;
          color: #C9A84C;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 1.25rem;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-links-list a, .footer-links-list span {
          font-size: 0.88rem;
          color: #D1C5C0;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: color 0.2s ease;
        }

        .footer-links-list a:hover {
          color: #D67A41;
        }

        .link-arrow {
          color: #D67A41;
        }

        .footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.82rem;
          color: #D1C5C0;
          line-height: 1.5;
        }

        .contact-item a {
          color: #D1C5C0;
          text-decoration: none;
        }
        .contact-item a:hover {
          color: #D67A41;
          text-decoration: underline;
        }

        .contact-icon {
          color: #D67A41;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .footer-bottom-bar {
          padding-top: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.78rem;
          color: #776B66;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .credit-text {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .heart-icon {
          color: #D67A41;
          fill: #D67A41;
        }

        @media (max-width: 992px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 576px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </footer>
  );
}