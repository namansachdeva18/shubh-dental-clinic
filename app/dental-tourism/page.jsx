'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plane, MapPin, CheckCircle, ShieldCheck, Clock, Award, ArrowRight, Video, Calendar } from 'lucide-react';

export default function DentalTourism() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 50 } }
  };

  return (
    <>
      <main ref={containerRef} style={{ background: 'var(--bg-primary)', overflow: 'hidden' }}>
        
        {/* HERO SECTION */}
        <section style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
          <motion.div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, y, zIndex: 0 }}>
            <Image 
              src="/hero/photography/clinic-exterior.webp" 
              alt="Dental Tourism India" 
              fill 
              style={{ objectFit: 'cover', opacity: 0.3 }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--bg-primary) 0%, transparent 50%, var(--bg-primary) 100%)' }} />
          </motion.div>

          <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <motion.div initial="hidden" animate="show" variants={stagger} style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <motion.div variants={fadeUp} className="section-badge badge-gold" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                <Plane size={16} style={{ marginRight: '8px' }} /> Premium Dental Tourism
              </motion.div>
              <motion.h1 variants={fadeUp} style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                World-Class Dentistry, <br/><span style={{ color: 'var(--accent-color)' }}>Closer to Home.</span>
              </motion.h1>
              <motion.p variants={fadeUp} style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                For our NRI and international patients: Experience <strong style={{ color: 'var(--accent-color)' }}>PGI-tier clinical excellence</strong>, <strong style={{ color: 'var(--accent-color)' }}>premium international materials</strong>, and <strong style={{ color: 'var(--accent-color)' }}>priority scheduling</strong> at a <strong style={{ color: 'var(--accent-color)' }}>fraction of global costs</strong>.
              </motion.p>
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="#consult" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                  <Video size={20} /> Book Virtual Consultation
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* WHY NRIs CHOOSE US */}
        <section style={{ padding: '4.5rem 0', background: '#fff', position: 'relative' }}>
          <div className="container">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Why NRIs Choose Shubh Dental
              </motion.h2>
              <motion.p variants={fadeUp} style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                We combine the highest standards of international dental care with the warmth and personalized attention you expect back home.
              </motion.p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: <Award size={32}/>, title: "Internationally Certified Specialists", desc: <>Led by Dr (Prof.) S. K. Yadav (<strong style={{ color: 'var(--accent-color)' }}>Fellow WFO, USA</strong>). Our specialists bring decades of <strong style={{ color: 'var(--accent-color)' }}>high-level academic and clinical expertise</strong>.</> },
                { icon: <ShieldCheck size={32}/>, title: "Global Premium Materials", desc: <>We use the <strong style={{ color: 'var(--accent-color)' }}>exact same genuine materials</strong>—Invisalign®, Damon® Braces, German Zirconia, and Nobel Biocare Implants—used in the <strong style={{ color: 'var(--accent-color)' }}>US, UK, and Canada</strong>.</> },
                { icon: <Clock size={32}/>, title: "Zero Wait Times & Priority Care", desc: <>We respect your travel schedule. Our overseas patients receive <strong style={{ color: 'var(--accent-color)' }}>expedited treatment plans</strong> and <strong style={{ color: 'var(--accent-color)' }}>priority fast-track appointments</strong>.</> }
              ].map((feature, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  style={{ background: '#ffffff', padding: '2rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '-20px', right: '-20px', color: 'var(--accent-light)', opacity: 0.3, transform: 'scale(3)' }}>
                    {feature.icon}
                  </div>
                  <div style={{ background: 'var(--accent-light)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                    {feature.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>{feature.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem', position: 'relative', zIndex: 1 }}>{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY ROHTAK vs DELHI */}
        <section style={{ padding: '4.5rem 0', background: 'var(--bg-primary)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="responsive-grid">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
                <motion.div variants={fadeUp} className="section-badge badge-gold" style={{ marginBottom: '1rem' }}>The Smart Choice</motion.div>
                <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                  Why Rohtak over crowded Delhi NCR clinics?
                </motion.h2>
                <motion.p variants={fadeUp} style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  As the premier medical hub of Haryana (home to PGI), Rohtak offers the <strong style={{ color: 'var(--accent-color)' }}>exact same world-class medical expertise</strong> as top clinics in South Delhi or Gurgaon, but <strong style={{ color: 'var(--accent-color)' }}>without the extreme pollution</strong>, exhausting traffic, and <strong style={{ color: 'var(--accent-color)' }}>inflated overhead costs</strong>.
                </motion.p>
                <motion.ul variants={stagger} style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    "Peaceful, stress-free healing environment.",
                    "Significantly lower cost of premium accommodation.",
                    "No endless traffic jams during your clinical visits.",
                    "Direct attention from Chief Specialists, not junior associates."
                  ].map((item, i) => (
                    <motion.li key={i} variants={fadeUp} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <CheckCircle size={20} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: 500 }}>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, x: 50, rotateY: -15, scale: 0.9 }} whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
                whileHover={{ scale: 1.02 }}
                style={{ position: 'relative', height: '500px', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', perspective: '1000px' }}>
                <Image src="/hero/photography/clinic-interior-2.webp" alt="Premium Clinic Environment" fill style={{ objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* POPULAR TREATMENTS */}
        <section style={{ padding: '4.5rem 0', background: '#fff' }}>
          <div className="container">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <motion.div variants={fadeUp} className="section-badge badge-gold" style={{ marginBottom: '1rem' }}>Expert Care</motion.div>
              <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Most Requested by International Patients
              </motion.h2>
              <motion.p variants={fadeUp} style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                High-end procedures that can be <strong style={{ color: 'var(--accent-color)' }}>expertly completed within tight travel schedules</strong>.
              </motion.p>
            </motion.div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { title: "Same-Day Dental Implants", time: "24-72 Hours", desc: <>Using advanced 3D CBCT scanning, we can often <strong style={{ color: 'var(--accent-color)' }}>extract failing teeth</strong> and place premium implants in a <strong style={{ color: 'var(--accent-color)' }}>single visit</strong>.</> },
                { title: "Invisalign® Aligners", time: "1-2 Visits", desc: <>Get your <strong style={{ color: 'var(--accent-color)' }}>digital iTero® scan</strong> on day one. We fast-track your custom aligners so you can <strong style={{ color: 'var(--accent-color)' }}>take your full set home</strong>.</> },
                { title: "Full Smile Makeovers", time: "3-5 Days", desc: <>Custom <strong style={{ color: 'var(--accent-color)' }}>porcelain veneers and crowns</strong> designed with Digital Smile Design (DSD) to <strong style={{ color: 'var(--accent-color)' }}>completely transform your smile</strong>.</> }
              ].map((t, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(214,122,65,0.08)' }}
                  style={{ background: '#ffffff', padding: '2rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', cursor: 'default' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--text-primary)', maxWidth: '70%' }}>{t.title}</h3>
                    <div style={{ background: 'var(--accent-light)', color: 'var(--accent-gold)', padding: '0.35rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, whiteSpace: 'nowrap' }}>⏱ {t.time}</div>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* YOUR JOURNEY */}
        <section style={{ padding: '4.5rem 0', background: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Your Seamless Treatment Journey
              </motion.h2>
              <motion.p variants={fadeUp} style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                We've <strong style={{ color: 'var(--accent-color)' }}>optimized every step</strong> so you can <strong style={{ color: 'var(--accent-color)' }}>focus on healing</strong> and enjoying your trip.
              </motion.p>
            </motion.div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', position: 'relative' }}>
              <motion.div initial={{ width: 0, opacity: 0 }} whileInView={{ width: '80%', opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }} className="journey-line" style={{ position: 'absolute', top: '25px', left: '10%', height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)', opacity: 0.3, zIndex: 0 }}></motion.div>
              {[
                { step: "01", title: "Virtual Consult", desc: <>Share your X-rays/photos via WhatsApp. Get a <strong style={{ color: 'var(--accent-color)' }}>custom treatment plan, exact cost, and timeline</strong> before booking flights.</> },
                { step: "02", title: "Arrival & Setup", desc: <>We <strong style={{ color: 'var(--accent-color)' }}>coordinate your airport pickup</strong> and local hotel accommodation to ensure a <strong style={{ color: 'var(--accent-color)' }}>stress-free arrival</strong>.</> },
                { step: "03", title: "Priority Treatment", desc: <><strong style={{ color: 'var(--accent-color)' }}>Skip the waiting room</strong>. Benefit from dedicated clinical time blocks <strong style={{ color: 'var(--accent-color)' }}>reserved exclusively for our international patients</strong>.</> },
                { step: "04", title: "Global Aftercare", desc: <><strong style={{ color: 'var(--accent-color)' }}>Fly home with confidence</strong>. We provide all necessary aftercare kits and remain available for <strong style={{ color: 'var(--accent-color)' }}>virtual follow-ups</strong>.</> }
              ].map((s, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.15 }} 
                  whileHover={{ y: -5, scale: 1.02 }}
                  style={{ position: 'relative', background: 'var(--bg-primary)', padding: '2rem 1.5rem', borderRadius: 'var(--radius-xl)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid var(--border-color)', cursor: 'default', zIndex: 1, textAlign: 'center' }}>
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 + (i * 0.15) }}
                    style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--accent-light)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 900, fontFamily: 'var(--font-heading)', margin: '0 auto 1.5rem', border: '3px solid #fff', boxShadow: '0 5px 15px rgba(214,122,65,0.2)' }}>
                    {s.step}
                  </motion.div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, fontSize: '0.9rem' }}>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AIRPORT & LOGISTICS */}
        <section style={{ padding: '6rem 0', background: 'linear-gradient(135deg, #1a0f0c 0%, #2a1a14 100%)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1rem', color: '#ffffff' }}>
                Seamless Connectivity from IGI Airport
              </motion.h2>
              <motion.p variants={fadeUp} style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto' }}>
                Landing in New Delhi? You're closer to us than you think.
              </motion.p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                style={{ background: 'rgba(255,255,255,0.03)', padding: '3rem 2rem', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(214, 122, 65, 0.2)', backdropFilter: 'blur(10px)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                <Plane size={40} style={{ color: 'var(--accent-gold)', margin: '0 auto 1.5rem' }} />
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#ffffff', fontFamily: 'var(--font-heading)' }}>Direct Route</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>Straight drive from IGI Airport via the modern NH9 Expressway. No navigating through inner-city Delhi traffic.</p>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                style={{ background: 'rgba(255,255,255,0.03)', padding: '3rem 2rem', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(214, 122, 65, 0.2)', backdropFilter: 'blur(10px)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                <MapPin size={40} style={{ color: 'var(--accent-gold)', margin: '0 auto 1.5rem' }} />
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#ffffff', fontFamily: 'var(--font-heading)' }}>Just 85 KM Away</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>A smooth, comfortable 1.5 to 2-hour drive drops you directly at our clinic doors in Rohtak.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                style={{ background: 'rgba(255,255,255,0.03)', padding: '3rem 2rem', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(214, 122, 65, 0.2)', backdropFilter: 'blur(10px)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                <Calendar size={40} style={{ color: 'var(--accent-gold)', margin: '0 auto 1.5rem' }} />
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#ffffff', fontFamily: 'var(--font-heading)' }}>Full Travel Support</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>We provide complimentary airport pickup/drop-off and partner with premium local hotels for a seamless stay.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="consult" style={{ padding: '6rem 0', background: 'var(--bg-primary)', textAlign: 'center' }}>
          <div className="container">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              style={{ background: '#fff', padding: '4rem 2rem', borderRadius: 'var(--radius-2xl)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', maxWidth: '800px', margin: '0 auto', border: '1px solid var(--border-color)' }}>
              <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Plan Your Dental Journey Today
              </motion.h2>
              <motion.p variants={fadeUp} style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
                Let's discuss your treatment plan, costs, and timeline over a video call before you even book your flights.
              </motion.p>
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://wa.me/918685048414" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '1rem 1.25rem', whiteSpace: 'normal', textAlign: 'center', height: 'auto', lineHeight: '1.3' }}>
                  <Video size={20} style={{ flexShrink: 0 }} /> Schedule Zoom / WhatsApp Consult
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        <style dangerouslySetInnerHTML={{ __html: `
          .responsive-grid {
            @media (max-width: 900px) {
              grid-template-columns: 1fr !important;
            }
          }
        `}} />
      </main>
    </>
  );
}
