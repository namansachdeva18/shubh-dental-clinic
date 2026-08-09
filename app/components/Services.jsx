'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Star, Smile, Zap, Scissors, Circle, Heart, Target } from 'lucide-react';

const FEATURED = [
  { icon: Star, name: 'Invisalign / Clear Aligners', desc: 'The world\'s leading invisible aligner system. Remove to eat, no wires, virtually undetectable. Available from Prof. Dr. S. K. Yadav — Rohtak\'s only Certified Invisalign Provider. Consultations also in Delhi, Gurgaon, Panipat, Sonepat, Fatehabad.', href: '/treatments/invisalign-clear-aligners', highlight: true },
  { icon: Shield, name: 'Dental Implants', desc: 'Permanent tooth replacement that looks, feels, and functions like a natural tooth. Titanium implant fused with jawbone. 95%+ success rate. Placed by Dr. Achita Yadav — PGI-trained Prosthodontist with 3,000+ implants.', href: '/treatments/dental-implants', highlight: true },
  { icon: Sparkles, name: 'Smile Makeover', desc: 'A personalised combination of treatments — whitening, veneers, aligners, bonding — to create your perfect smile. Includes digital smile design so you can preview your result before treatment.', href: '/treatments/smile-makeover', highlight: true },
];

const SERVICES = [
  { icon: Zap, name: 'Metal Braces', desc: 'Reliable, affordable, effective. Our most popular orthodontic option for all ages.', href: '/treatments/dental-braces' },
  { icon: Circle, name: 'Ceramic Braces', desc: 'Tooth-coloured brackets for a less visible orthodontic experience.', href: '/treatments/dental-braces' },
  { icon: Target, name: 'Lingual Braces', desc: 'Placed inside the teeth — completely hidden. The ultimate discreet orthodontic treatment.', href: '/treatments/lingual-braces' },
  { icon: Shield, name: 'Crowns & Bridges', desc: 'Restore damaged or missing teeth with durable, natural-looking porcelain crowns and bridges.', href: '/treatments/crowns-and-bridges' },
  { icon: Heart, name: 'Teeth Whitening', desc: '6–10 shades brighter in under an hour with our in-clinic professional whitening system.', href: '/treatments/teeth-whitening' },
  { icon: Sparkles, name: 'Porcelain Veneers', desc: 'Ultra-thin porcelain shells for a dramatic, permanent smile transformation.', href: '/treatments/porcelain-veneers' },
  { icon: Target, name: 'Root Canal Treatment', desc: 'Modern, virtually painless RCT to save infected teeth using rotary endodontic systems.', href: '/treatments/root-canal-treatment' },
  { icon: Scissors, name: 'Composite Bonding', desc: 'Quick, affordable repair of chips, cracks, and gaps — often in a single visit.', href: '/treatments/composite-bonding' },
  { icon: Smile, name: 'Teeth Cleaning', desc: 'Professional scaling and polishing every 6 months for healthy gums and fresh breath.', href: '/treatments/teeth-cleaning-scaling' },
];

export default function Services() {
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  };

  const scaleReveal = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show:   { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  };

  const headerStagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };

  const featuredStagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const serviceStagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
  };

  return (
    <section className="section" style={{ background: 'var(--bg-primary)' }} aria-label="Dental Services">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          className="section-header"
          variants={headerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp} className="section-badge" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent-color)' }}>
            <Sparkles size={14} style={{ marginRight: 6 }} />
            Exclusive Care
          </motion.div>
          <motion.h2 variants={fadeUp}>Comprehensive <span style={{ color: 'var(--accent-gold)' }}>Services</span></motion.h2>
          <motion.p variants={fadeUp}>Delivering an unparalleled standard of care through mastery of advanced dental sciences.</motion.p>
        </motion.div>

        {/* Featured Services — scale reveal stagger */}
        <motion.div
          className="services-featured-grid"
          variants={featuredStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {FEATURED.map(s => {
            const Icon = s.icon;
            return (
              <motion.div key={s.name} variants={scaleReveal}>
                <Link href={s.href} className="service-featured-card glass-panel">
                  <div className="sfc-top">
                    <span className="pill-badge pill-gold sfc-popular">⭐ MOST POPULAR</span>
                    <div className="sfc-icon-wrap">
                      <Icon size={24} className="sfc-icon" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="sfc-name">{s.name}</h3>
                  <p className="sfc-desc">{s.desc}</p>
                  <div className="sfc-link">Discover More →</div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Regular Services Grid — tighter stagger */}
        <motion.div
          className="services-grid"
          variants={serviceStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {SERVICES.map(s => {
            const Icon = s.icon;
            return (
              <motion.div key={s.name} variants={fadeUp}>
                <Link href={s.href} className="service-card glass-panel">
                  <div className="sc-icon-wrap">
                    <Icon size={20} className="sc-icon" aria-hidden="true" />
                  </div>
                  <h3 className="sc-name">{s.name}</h3>
                  <p className="sc-desc">{s.desc}</p>
                  <div className="sc-link">Learn More →</div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .services-featured-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .service-featured-card {
          text-decoration: none;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          background: #fff;
          border-radius: 2rem;
          border: 1px solid var(--border-color);
        }
        .service-featured-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 0 1px rgba(179, 132, 102, 0);
          transition: all 0.3s ease;
        }
        .service-featured-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-md);
          border-color: rgba(179, 132, 102, 0.4);
        }
        .service-featured-card:hover::after {
          box-shadow: inset 0 0 0 1px rgba(179, 132, 102, 0.5);
        }
        .sfc-top { display: flex; justify-content: space-between; align-items: flex-start; }
        .sfc-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          border: 1px solid var(--border-color);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .service-featured-card:hover .sfc-icon-wrap {
          background: var(--accent-gold);
          color: #fff;
          transform: scale(1.1) rotate(5deg);
          border-color: var(--accent-gold);
        }
        .sfc-name { font-family: var(--font-heading); font-size: 1.2rem; font-weight: 700; color: var(--text-primary); }
        .sfc-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7; flex: 1; }
        .sfc-link { font-size: 0.875rem; font-weight: 600; color: var(--accent-gold); transition: all 0.3s ease; }
        .service-featured-card:hover .sfc-link { transform: translateX(5px); }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.25rem;
        }
        .service-card {
          text-decoration: none;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          transition: all 0.4s ease;
          background: #fff;
          border-radius: 1.5rem;
          border: 1px solid var(--border-color);
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-sm);
          border-color: rgba(179, 132, 102, 0.4);
        }
        .sc-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .service-card:hover .sc-icon-wrap {
          background: var(--accent-gold);
          color: #fff;
          transform: scale(1.1) rotate(-5deg);
        }
        .sc-name { font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-top: 0.5rem; }
        .sc-desc { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; flex: 1; }
        .sc-link { font-size: 0.8rem; font-weight: 700; color: var(--accent-color); transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 0.05em; }
        .service-card:hover .sc-link { transform: translateX(5px); color: var(--accent-gold); }
        @media (max-width: 1024px) {
          .services-featured-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </section>
  );
}
