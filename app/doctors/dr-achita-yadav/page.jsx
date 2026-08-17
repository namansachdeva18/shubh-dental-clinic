'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, Award, GraduationCap, Sparkles, Cpu, BookOpen } from 'lucide-react';
import SmartBooking from '../../components/SmartBooking';

export default function DrAchitaYadavPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };
  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 20 } }
  };
  const slideLeft = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 20 } }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .doc-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .doc-bio-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 4rem; }
        .doc-hero-section { padding: 6rem 0 5rem; }
        @media (max-width: 1024px) {
          .doc-hero-grid, .doc-bio-grid { grid-template-columns: 1fr; gap: 3rem; }
          .doc-hero-section { padding: 6rem 0 7.5rem; } /* Extra padding for mobile sticky nav */
        }
      `}} />
      <section ref={heroRef} className="doctor-profile-hero doc-hero-section" style={{ background: 'linear-gradient(135deg, var(--bg-dark), #1A0C08)', overflow: 'hidden', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/doctors" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold-light)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', marginBottom: '2rem' }}>
            ← Back to All Specialists
          </Link>
          
          <div className="doc-hero-grid">
            <motion.div initial="hidden" animate="show" variants={staggerContainer} style={{ color: '#fff' }}>
              <motion.div variants={fadeUp} className="section-badge badge-gold" style={{ border: '1px solid rgba(214, 122, 65, 0.3)' }}>✨ Certified Cosmetic Dentist &amp; Smile Makeover Specialist</motion.div>
              <motion.h1 variants={fadeUp} style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                Dr (Prof.) Achla Yadav
              </motion.h1>
              <motion.div variants={fadeUp} style={{ fontSize: '1.15rem', color: 'var(--accent-gold-light)', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.02em' }}>
                BDS, MDS, MFOMP
              </motion.div>
              <motion.p variants={fadeUp} style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Dr. (Prof.) Achla Yadav is a premier <strong>Cosmetic Dentist &amp; Consultant Oral Pathologist</strong> with over 18 years of clinical and academic mastery. Having served as a <strong>Professor at Panjab University</strong>, <strong>Dental Surgeon at ESIC (Hisar)</strong>, and <strong>Professor at DJ Dental College</strong>, she has crafted over <strong>15,000+ cosmetic smiles</strong> and treated over <strong>3,50,000+ patients</strong> with gentle, pain-free dental care.
              </motion.p>
              
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '2.5rem', marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.12)', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent-gold)' }}>18+</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Years Exp.</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent-gold)' }}>15,000+</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Cosmetic Smiles</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent-gold)' }}>3,50,000+</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Patients Treated</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent-gold)' }}>5.0★</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Patient Rating</div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#book" className="btn btn-gold" style={{ boxShadow: '0 10px 30px rgba(214, 122, 65, 0.3)' }}>Book Consultation</a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" animate="show" variants={slideLeft}
              style={{ position: 'relative', height: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: '420px', maxHeight: '480px' }}>
                <div style={{ position: 'absolute', inset: '-20px', border: '1.5px solid var(--accent-gold-light)', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', animation: 'organicMorphHero 12s ease-in-out infinite alternate', pointerEvents: 'none', opacity: 0.8 }}>
                   <div style={{ position: 'absolute', top: '5%', left: '-2%', color: 'var(--accent-gold)', fontSize: '2rem' }}>✦</div>
                   <div style={{ position: 'absolute', bottom: '10%', right: '-5%', color: 'var(--accent-gold)', fontSize: '1.5rem' }}>✦</div>
                </div>
                <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', overflow: 'hidden', animation: 'organicMorphHero 12s ease-in-out infinite alternate-reverse', boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }}>
                  <Image src="/dr-achita-yadav.webp" alt="Dr. (Prof.) Achla Yadav" fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: 'cover', objectPosition: 'top' }} priority />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="doc-bio-grid">
            
            {/* Bio */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                Clinical &amp; Academic Biography
              </motion.h2>
              <motion.div variants={fadeUp} className="prose" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  <strong>Dr. (Prof.) Achla Yadav</strong> is a distinguished <strong>Consultant Oral Pathologist and Certified Cosmetic Dentist</strong> with over 18 years of clinical experience. She holds a Master of Dental Surgery (MDS) in Oral Pathology (MFOMP) and has dedicated her practice to precision smile aesthetics, porcelain veneers, cosmetic restorations, and gentle pediatric dentistry.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Her esteemed career spans premier academic and government institutions, having served as a <strong>Professor at Panjab University</strong>, <strong>Dental Surgeon at ESIC Hospital (Hisar)</strong>, and <strong>Professor at DJ Dental College</strong>. Her deep clinical acumen ensures every aesthetic transformation is biologically sound, durable, and natural-looking.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  In addition to crafting thousands of radiant smiles, Dr. Achla is an active researcher who has authored <strong>64 international publications</strong> and <strong>2 academic textbooks</strong> in Germany, alongside pioneering 2026 AI deep-learning diagnostic screening for oral soft-tissue health.
                </p>
              </motion.div>

              <motion.h3 variants={fadeUp} style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', margin: '3rem 0 1.5rem', color: 'var(--text-primary)' }}>
                Clinical &amp; Aesthetic Specialties
              </motion.h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                {[
                  'Porcelain E-Max Veneers',
                  'Digital Smile Makeovers',
                  'Cosmetic Teeth Whitening',
                  'Composite Aesthetic Bonding',
                  'Consultant Oral Pathology (MFOMP)',
                  'AI Oral Health & Soft-Tissue Screening',
                  'Gentle Pediatric Dentistry',
                  'Painless Aesthetic Restorations'
                ].map((skill, i) => (
                  <motion.div key={i} variants={fadeUp} whileHover={{ x: 5 }} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: '#fff', padding: '1rem', borderRadius: 'var(--radius-md)', boxShadow: '0 5px 15px rgba(74, 37, 24, 0.04)', border: '1px solid var(--border-color)' }}>
                    <CheckCircle size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                    <span style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeUp} style={{ background: '#fff', padding: '2.5rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-color)', marginBottom: '2rem', boxShadow: '0 15px 35px rgba(74, 37, 24, 0.05)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Clinical Credentials</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <li style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'var(--accent-light)', padding: '0.75rem', borderRadius: '50%' }}>
                      <CheckCircle size={24} style={{ color: 'var(--accent-gold)' }} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-primary)' }}>Certified Cosmetic Dentist</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Smile Makeovers &amp; Porcelain Veneers</span>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'var(--accent-light)', padding: '0.75rem', borderRadius: '50%' }}>
                      <CheckCircle size={24} style={{ color: 'var(--accent-gold)' }} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-primary)' }}>Consultant Oral Pathologist</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>BDS, MDS, MFOMP</span>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'var(--accent-light)', padding: '0.75rem', borderRadius: '50%' }}>
                      <GraduationCap size={24} style={{ color: 'var(--accent-gold)' }} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-primary)' }}>Ex. Professor, Panjab University</strong>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'var(--accent-light)', padding: '0.75rem', borderRadius: '50%' }}>
                      <GraduationCap size={24} style={{ color: 'var(--accent-gold)' }} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-primary)' }}>Ex. Dental Surgeon, ESIC (Hisar)</strong>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'var(--accent-light)', padding: '0.75rem', borderRadius: '50%' }}>
                      <GraduationCap size={24} style={{ color: 'var(--accent-gold)' }} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-primary)' }}>Ex. Professor, DJ Dental College</strong>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} style={{ background: 'linear-gradient(135deg, var(--bg-dark), #1A0C08)', padding: '2.5rem', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(214, 122, 65, 0.2)', boxShadow: '0 20px 40px rgba(74, 37, 24, 0.15)', textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '1rem', color: '#fff' }}>Consultation &amp; Smile Design</h3>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Schedule a smile makeover consultation with Dr. (Prof.) Achla Yadav for porcelain veneers, cosmetic dentistry, or gentle oral care.
                </p>
                <a href="#book" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>Book Appointment</a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      <SmartBooking />
    </>
  );
}
