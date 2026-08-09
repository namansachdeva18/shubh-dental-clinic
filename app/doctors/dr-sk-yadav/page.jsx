'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, Award, GraduationCap, ArrowRight, BookOpen, ShieldCheck, HeartPulse } from 'lucide-react';
import SmartBooking from '../../components/SmartBooking';

export default function DrSKYadavPage() {
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
      <section ref={heroRef} className="doctor-profile-hero" style={{ background: 'linear-gradient(135deg, var(--bg-dark), #1A0C08)', padding: '6rem 0 5rem', overflow: 'hidden', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/doctors" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold-light)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', marginBottom: '2rem' }}>
            ← Back to All Specialists
          </Link>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <motion.div initial="hidden" animate="show" variants={staggerContainer} style={{ color: '#fff' }}>
              <motion.div variants={fadeUp} className="section-badge badge-gold" style={{ border: '1px solid rgba(214, 122, 65, 0.3)' }}>🥇 Chief Orthodontist &amp; Implantologist</motion.div>
              <motion.h1 variants={fadeUp} style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                Prof. Dr. S. K. Yadav
              </motion.h1>
              <motion.div variants={fadeUp} style={{ fontSize: '1.15rem', color: 'var(--accent-gold-light)', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.02em' }}>
                MDS (Orthodontics) · Ex-PGI Chandigarh · Fellow WFO (USA) · IOS Endorsed
              </motion.div>
              <motion.p variants={fadeUp} style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                With over 20 years of clinical and academic excellence, Prof. Dr. S. K. Yadav is Haryana's leading authority on orthodontics and dentofacial orthopaedics. He has published <strong>43 scientific papers (247+ global citations)</strong>, authored <strong>2 research books in Germany</strong>, and transformed over 20,000 smiles.
              </motion.p>
              
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '2.5rem', marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.12)', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent-gold)' }}>20+</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Years Exp.</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent-gold)' }}>247+</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Global Citations</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent-gold)' }}>43</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Publications</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent-gold)' }}>5.0★</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Google Rating</div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#book" className="btn btn-gold" style={{ boxShadow: '0 10px 30px rgba(214, 122, 65, 0.3)' }}>Book Priority Consultation</a>
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
                  <Image src="/dr-sk-yadav.webp" alt="Prof. Dr. S. K. Yadav" fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: 'cover', objectPosition: 'top' }} priority />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem' }}>
            
            {/* Bio & Academic Output */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                Academic &amp; Clinical Biography
              </motion.h2>
              <motion.div variants={fadeUp} className="prose" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  Prof. Dr. S. K. Yadav is a renowned specialist in <strong>Orthodontics &amp; Dentofacial Orthopedics</strong>. He completed his Master of Dental Surgery (MDS) from the prestigious <strong>Post Graduate Institute of Medical Education and Research (PGI), Chandigarh</strong> — India's premier medical research institution.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  As a <strong>Fellow of the World Federation of Orthodontists (WFO, USA)</strong> and an <strong>IOS Endorsed Orthodontist</strong>, Dr. Yadav's research has been published in elite global journals, including the <em>Journal of Clinical Orthodontics (JCO, USA)</em>, <em>Journal of Oral and Maxillofacial Pathology</em>, and <em>Contemporary Clinical Dentistry</em>. His innovations in miniscrew micro-implant anchorage and molar distalization are cited by researchers worldwide.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  He is also the author of <strong>2 academic textbooks</strong> published by Lambert Academic Publishing (Germany) on functional appliances and oral pathology diagnostics. In clinical practice, Dr. Yadav combines precision biomechanics with digital 3D smile planning for braces, Invisalign®, and dental implants.
                </p>
              </motion.div>

              <motion.h3 variants={fadeUp} style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', margin: '3rem 0 1.5rem', color: 'var(--text-primary)' }}>
                Specialized Treatments &amp; Clinical Focus
              </motion.h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                {[
                  'Invisalign® Clear Aligners',
                  'In-House SkyAlign™ Aligners',
                  'Damon® Self-Ligating Braces',
                  'Ceramic & Metal Braces',
                  'Dentofacial Orthopedics (Jaw Growth)',
                  'Surgico-Orthodontic Gummy Smile Tx',
                  'Micro-Implant (TAD) Anchorage',
                  'Same-Day & Dental Implants'
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
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Academic Credentials &amp; Impact</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <li style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'var(--accent-light)', padding: '0.75rem', borderRadius: '50%' }}>
                      <GraduationCap size={24} style={{ color: 'var(--accent-gold)' }} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-primary)' }}>MDS (Orthodontics)</strong>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ex-Senior Resident, PGI Chandigarh</span>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'var(--accent-light)', padding: '0.75rem', borderRadius: '50%' }}>
                      <Award size={24} style={{ color: 'var(--accent-gold)' }} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-primary)' }}>Fellow WFO (USA) &amp; IOS</strong>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>World Federation of Orthodontists</span>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'var(--accent-light)', padding: '0.75rem', borderRadius: '50%' }}>
                      <BookOpen size={24} style={{ color: 'var(--accent-gold)' }} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-primary)' }}>43 Publications &amp; 2 Books</strong>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>247+ Citations (h-index 8)</span>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} style={{ background: 'linear-gradient(135deg, var(--bg-dark), #1A0C08)', padding: '2.5rem', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(214, 122, 65, 0.2)', boxShadow: '0 20px 40px rgba(74, 37, 24, 0.15)' }}>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-gold-light)', fontWeight: 700, marginBottom: '1rem' }}>Consultations &amp; Appointments</div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Prof. Dr. S. K. Yadav provides expert Orthodontic and Dental Implant consultations at Shubh Orthodontic &amp; Dental Clinic, Rohtak.
                </p>
                <a href="tel:+918685048414" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>Call +91 86850 48414</a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      <SmartBooking />
    </>
  );
}
