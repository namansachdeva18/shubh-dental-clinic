'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, CheckCircle2, Phone, ArrowRight, ShieldCheck, 
  Clock, Check, BadgeCheck, AlertCircle, X, ChevronDown, 
  MapPin, Stethoscope, Award, FileText, User, Calendar,
  Smile, Gem, Crown, Heart, Layers, Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitToWeb3Forms, WEB3FORMS_ACCESS_KEY } from '../lib/web3forms';
import { trackConversion, CONVERSION_EVENTS } from '../lib/conversionTracking';
import Testimonials from '../components/Testimonials';

// ── 8 SPECIALIST DENTAL TREATMENTS (BRACES, ALIGNERS & IMPLANTS FIRST) ──
const ALL_TREATMENTS = [
  {
    id: 'braces',
    icon: Sparkles,
    badge: '★ Most Popular',
    title: 'Aesthetic Dental Braces',
    desc: 'Advanced ceramic & Damon® self-ligating brackets for fast, precise bite and smile alignment.',
    idealFor: 'Severe crowding, spacing, and forward-angled teeth',
    pageUrl: '/treatments/dental-braces',
    formValue: 'Aesthetic Dental Braces (Ceramic & Metal)'
  },
  {
    id: 'aligners',
    icon: Sparkles,
    badge: '100% Invisible',
    title: 'Invisalign® & Clear Aligners',
    desc: 'Discreet 3D digital clear trays with zero metal wires, supervised by Fellow Orthodontist Prof. Dr. S. K. Yadav.',
    idealFor: 'Crooked teeth, gaps, and professional camera confidence',
    pageUrl: '/treatments/invisalign-clear-aligners',
    formValue: 'Invisalign® & Clear Aligners'
  },
  {
    id: 'implants',
    icon: Layers,
    badge: 'Lifetime Warranty',
    title: 'Computer-Guided Dental Implants',
    desc: 'Permanent titanium tooth roots restoring natural bite force, youthful jaw volume, and chewing comfort.',
    idealFor: 'Single or multiple missing teeth before festive gatherings',
    pageUrl: '/treatments/dental-implants',
    formValue: 'Computer-Guided Dental Implants'
  },
  {
    id: 'makeover',
    icon: Gem,
    badge: 'Camera-Ready',
    title: 'Complete Smile Makeover',
    desc: 'Customized aesthetic smile transformation harmonized with your facial symmetry, lips, and milestone dates.',
    idealFor: 'Multi-concern aesthetic smile rejuvenation in fast visits',
    pageUrl: '/treatments/smile-makeover',
    formValue: 'Complete Smile Makeover'
  },
  {
    id: 'veneers',
    icon: Gem,
    badge: 'German E-max®',
    title: 'Handcrafted Porcelain Veneers',
    desc: 'Ultra-thin, lifelike ceramic shells that permanently correct chipped, uneven, or deeply discolored teeth.',
    idealFor: 'Stubborn gaps, worn edges, and permanent Hollywood shine',
    pageUrl: '/treatments/dental-veneers',
    formValue: 'Handcrafted Porcelain Veneers (E-max®)'
  },
  {
    id: 'whitening',
    icon: Smile,
    badge: 'Instant Results',
    title: 'Laser Teeth Whitening & Polish',
    desc: 'Fast in-clinic laser brightening removing stubborn tea, coffee, and turmeric stains safely in 45 minutes.',
    idealFor: 'Immediate radiant brightness before photoshoots and events',
    pageUrl: '/treatments/teeth-whitening',
    formValue: 'Laser Teeth Whitening & Polishing'
  },
  {
    id: 'crowns',
    icon: Crown,
    badge: 'Zero Metal',
    title: 'Natural Zirconia & Aesthetic Crowns',
    desc: 'High-durability, biocompatible ceramic crowns restoring damaged or root-canal treated teeth seamlessly.',
    idealFor: 'Broken, worn, or heavily filled teeth needing strength',
    pageUrl: '/treatments/dental-crowns',
    formValue: 'Natural Zirconia & Aesthetic Ceramic Crowns'
  },
  {
    id: 'cleaning',
    icon: Stethoscope,
    badge: 'Essential Baseline',
    title: 'Deep Ultrasonic Cleaning & Polish',
    desc: 'Pain-free calculus and stain removal for fresh breath, healthy pink gums, and a sparkling dental foundation.',
    idealFor: 'Essential hygienic prep for brides, grooms, and family',
    pageUrl: '/treatments/teeth-cleaning',
    formValue: 'Deep Ultrasonic Cleaning & Scaling'
  }
];

// ── 4 TARGETED AUDIENCE SEGMENTS (HIGH-CONVERSION COPY) ──
const AUDIENCE_SEGMENTS = [
  {
    id: 'bride',
    title: 'For the Bride',
    tag: 'Bridal Glow & Whitening',
    icon: Heart,
    desc: 'Be the star of your wedding album with an unblemished, luminous smile that radiates across every 4K lens and stage spotlight.',
    points: [
      'In-office instant laser teeth whitening (45 mins)',
      'Handcrafted German E-max veneers & chip repair'
    ],
    btnText: 'Claim Bridal 20% OFF Voucher',
    treatment: 'Smile Makeover / Veneers'
  },
  {
    id: 'groom',
    title: 'For the Groom',
    tag: 'Sharp & Charismatic Smile',
    icon: Smile,
    desc: 'Command every room with effortless masculine charm, clean white teeth, and sharp confidence across all wedding rituals.',
    points: [
      'Deep stain elimination (tea, coffee, smoking habits)',
      'Invisible orthodontic aligners & subtle tooth contouring'
    ],
    btnText: 'Claim Groom 20% OFF Voucher',
    treatment: 'Clear Aligners'
  },
  {
    id: 'family',
    title: 'For Parents & Family',
    tag: 'Chewing Power & Youth',
    icon: User,
    desc: 'Bless the couple with youthful warmth, comfortable laughing, and 100% natural chewing strength at every celebration feast.',
    points: [
      'Computer-guided lifetime dental implants',
      'Full mouth bite rejuvenation & metal-free caps'
    ],
    btnText: 'Claim Family 20% OFF Voucher',
    treatment: 'Dental Implants'
  },
  {
    id: 'general',
    title: 'General Patients',
    tag: 'Open to Everyone',
    badge: 'EVERYDAY OFFER',
    isHighlighted: true,
    icon: Sparkles,
    desc: 'Not getting married? You don’t have to miss out! Get the exact same Flat 20% OFF + Free 3D Scan for everyday confidence.',
    points: [
      'Ceramic braces & clear aligners with 0% EMI',
      'Painless single-sitting root canals & cosmetic caps'
    ],
    btnText: 'Claim General 20% OFF Voucher',
    treatment: 'Not Sure Yet'
  }
];

// ── 4 HIGH-CONVERTING CONCERN CARDS ──
const CONCERN_CARDS = [
  {
    icon: Sparkles,
    badge: '1-Visit Fast Fix',
    title: 'Yellowing or Coffee/Tea Stains',
    desc: 'Deep stains dull your smile in photos. Get 4–8 shades brighter with gentle in-clinic laser whitening.',
    solution: 'Laser Teeth Whitening & Polish',
    timeline: 'Immediate 45-min session',
    formValue: 'Other Dental Treatment'
  },
  {
    icon: Smile,
    badge: 'Zero Metal · Invisible',
    title: 'Crooked Teeth, Crowding or Spacing',
    desc: 'Noticeable dental misalignment in candid shots. Straighten comfortably without painful metal wires.',
    solution: 'Invisalign® & Clear Aligners',
    timeline: 'Visible results in weeks',
    formValue: 'Clear Aligners'
  },
  {
    icon: Gem,
    badge: 'Permanent Hollywood Radiance',
    title: 'Chipped, Uneven or Short Teeth',
    desc: 'Irregular edges stand out in close-ups. Handcrafted E-max ceramic veneers create symmetrical perfection.',
    solution: 'German E-max® Porcelain Veneers',
    timeline: '2 gentle appointments',
    formValue: 'Smile Makeover / Veneers'
  },
  {
    icon: Layers,
    badge: '100% Natural Chewing',
    title: 'Missing Tooth or Dark Fillings',
    desc: 'Holes in your smile when laughing. Lifetime titanium implants and metal-free Zirconia crowns restore 100% bite.',
    solution: 'Guided Dental Implants & Zirconia',
    timeline: 'Permanent lifetime solution',
    formValue: 'Dental Implants'
  }
];

// ── 48 REAL PATIENT SMILE PHOTOS FOR SIGNATURE LIVING TOOTH COLLAGE ──
const TEETH_COLLAGE_PHOTOS = [
  'IMG-20260904-WA0038.jpg',
  'IMG-20260904-WA0039.jpg',
  'IMG-20260904-WA0040.jpg',
  'IMG-20260904-WA0041.jpg',
  'IMG-20260904-WA0042.jpg',
  'IMG-20260904-WA0043.jpg',
  'IMG-20260904-WA0044.jpg',
  'IMG-20260904-WA0045.jpg',
  'IMG-20260904-WA0046.jpg',
  'IMG-20260904-WA0047.jpg',
  'IMG-20260904-WA0048.jpg',
  'IMG-20260904-WA0049.jpg',
  'IMG-20260904-WA0050.jpg',
  'IMG-20260904-WA0051.jpg',
  'IMG-20260904-WA0052.jpg',
  'IMG-20260904-WA0053.jpg',
  'IMG-20260904-WA0054.jpg',
  'IMG-20260904-WA0055.jpg',
  'IMG-20260904-WA0056.jpg',
  'IMG-20260904-WA0057.jpg',
  'IMG-20260904-WA0058.jpg',
  'IMG-20260904-WA0059.jpg',
  'IMG-20260904-WA0060.jpg',
  'IMG-20260904-WA0061.jpg',
  'IMG-20260904-WA0062.jpg',
  'IMG-20260904-WA0063.jpg',
  'IMG-20260904-WA0064.jpg',
  'IMG-20260904-WA0065.jpg',
  'IMG-20260904-WA0066.jpg',
  'IMG-20260904-WA0067.jpg',
  'IMG-20260904-WA0068.jpg',
  'IMG-20260904-WA0069.jpg',
  'IMG-20260904-WA0070.jpg',
  'IMG-20260904-WA0071.jpg',
  'IMG-20260904-WA0072.jpg',
  'IMG-20260904-WA0073.jpg',
  'IMG-20260904-WA0074.jpg',
  'IMG-20260904-WA0075.jpg',
  'IMG-20260904-WA0076.jpg',
  'IMG-20260904-WA0077.jpg',
  'IMG-20260904-WA0078.jpg',
  'IMG-20260904-WA0079.jpg',
  'IMG-20260904-WA0080.jpg',
  'IMG-20260904-WA0081.jpg',
  'IMG-20260904-WA0082.jpg',
  'IMG-20260904-WA0083.jpg',
  'IMG-20260904-WA0084.jpg',
  'IMG-20260904-WA0085.jpg'
];

export default function SpecialOfferPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'Aesthetic Dental Braces (Ceramic & Metal)',
    timing: 'Flexible / Earliest Available',
    consent: true
  });
  const [honeypot, setHoneypot] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formOpenedTime, setFormOpenedTime] = useState(0);
  const [activePhoto, setActivePhoto] = useState(null);

  const modalRef = useRef(null);

  // Auto-open modal on first site/page open (appears first)
  useEffect(() => {
    try {
      const alreadyOpened = sessionStorage.getItem('shubh_wedding_modal_v6');
      if (!alreadyOpened && !hasAutoOpened) {
        const timer = setTimeout(() => {
          setIsModalOpen(true);
          setFormOpenedTime(Date.now());
          sessionStorage.setItem('shubh_wedding_modal_v6', 'true');
          setHasAutoOpened(true);
          trackConversion('offer_form_opened', { trigger: 'auto_entry' });
        }, 500);
        return () => clearTimeout(timer);
      }
    } catch (e) {}
  }, [hasAutoOpened]);

  const openOfferModal = (treatmentValue = null, source = 'cta_button') => {
    if (treatmentValue) {
      setFormData(prev => ({ ...prev, treatment: treatmentValue }));
    }
    setErrorMessage('');
    setIsSuccess(false);
    setFormOpenedTime(Date.now());
    setIsModalOpen(true);
    trackConversion('offer_form_opened', { trigger: source, treatment: treatmentValue || formData.treatment });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage('');
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const handlePhoneChange = (e) => {
    const clean = e.target.value.replace(/\D/g, '').replace(/^(?:91|0)/, '').slice(0, 10);
    setFormData(prev => ({ ...prev, phone: clean }));
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (honeypot && honeypot.trim().length > 0) {
      setIsSuccess(true);
      return;
    }

    const name = (formData.name || '').trim();
    if (name.length < 2) {
      setErrorMessage('Please enter your full name (minimum 2 letters)');
      return;
    }
    if (/\d/.test(name) || /[<>{}[\]\\\/|@$%^*+=~`]/.test(name)) {
      setErrorMessage('Please enter a genuine name without numbers or special symbols');
      return;
    }

    const cleanPhone = (formData.phone || '').replace(/\D/g, '').replace(/^(?:91|0)/, '');
    if (cleanPhone.length !== 10 || !/^[6-9]/.test(cleanPhone)) {
      setErrorMessage('Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9');
      return;
    }

    if (!formData.consent) {
      setErrorMessage('Please agree to be contacted regarding your consultation enquiry');
      return;
    }

    if (formOpenedTime > 0 && (Date.now() - formOpenedTime) < 1200) {
      setErrorMessage('Form submitted unusually fast. Please review your details.');
      return;
    }

    setIsSubmitting(true);
    const voucherCode = 'SHUBH-WEDDING-20';

    try {
      const res = await submitToWeb3Forms({
        name: name,
        phone: cleanPhone,
        treatment: formData.treatment,
        timing: formData.timing,
        source: 'Wedding Smile Campaign Landing Page (/special-offer)',
        voucher: voucherCode,
        message: `Patient requested Wedding Consultation for ${formData.treatment}. Preferred time: ${formData.timing}. 20% Concession applied.`
      });

      if (res && (res.success || res.ok)) {
        setIsSuccess(true);
        trackConversion(CONVERSION_EVENTS.GENERATE_LEAD, {
          treatment: formData.treatment,
          source: 'WeddingSpecialOffer_Modal',
          voucher: voucherCode
        });
      } else {
        setErrorMessage(res?.message || 'Submission unsuccessful. Please call +91 86850 48414 directly.');
      }
    } catch (err) {
      setErrorMessage('Connection issue. Please call our clinic at +91 86850 48414.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="wedding-campaign-page">

      {/* ── 1. LUXURY EARTHY BROWN HERO SECTION (ANIMATED & COMPACT ON MOBILE) ── */}
      <section className="campaign-hero-section">
        {/* Luxury Animated Background Ambient Elements */}
        <div className="hero-bg-fx" aria-hidden="true">
          <div className="fx-orb fx-orb-1" />
          <div className="fx-orb fx-orb-2" />
          <div className="fx-orb fx-orb-3" />
          <div className="fx-aurora-beam" />
          <div className="fx-shimmer-grid" />
          
          {/* Luminous Wedding Sparkle Particles */}
          <span className="fx-sparkle p1" />
          <span className="fx-sparkle p2" />
          <span className="fx-sparkle p3" />
          <span className="fx-sparkle p4" />
          <span className="fx-sparkle p5" />
          <span className="fx-sparkle p6" />
          <span className="fx-sparkle p7" />
          <span className="fx-sparkle p8" />
        </div>

        <div className="hero-shell">
          
          {/* Eyebrow Pill */}
          <motion.div 
            className="hero-pill-badge"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles size={13} className="pill-star" />
            <span className="pill-highlight-text">💍 WEDDING SPECIAL</span>
            <span className="pill-sep">•</span>
            <span className="pill-white-text">FLAT 20% OFF</span>
            <span className="pill-sep">•</span>
            <span className="pill-date-badge">TILL 15 NOV</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="hero-main-h1"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            Get a Flawless, Camera-Ready Smile <span className="highlight-copper">With Flat 20% OFF</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="hero-main-sub"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            Don&apos;t hide your teeth in wedding photos or videos. Walk down the aisle with total confidence — treated by <strong>Ex-PGI Chandigarh Specialists</strong> at Rohtak&apos;s highest-rated clinic. Includes <strong>Free OPD Consultation &amp; 3D Smile Scan</strong>.
          </motion.p>

          {/* Trust Badges Strip (Consistent 2-in-1st-line, 1-in-2nd-line, 1-in-3rd-line across iPhone & Android) */}
          <motion.div 
            className="hero-badges-strip"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            {/* Line 1: 2 items side-by-side */}
            <div className="badge-row badge-row-duo">
              <div className="h-badge-item">
                <ShieldCheck size={14} className="badge-ico gold" />
                <span><strong>Ex-PGI Chandigarh</strong> Doctors</span>
              </div>
              <div className="h-badge-item">
                <span className="star-rating">★ 5.0</span>
                <span><strong>300+ Verified</strong> Reviews</span>
              </div>
            </div>

            {/* Line 2: 3rd item centered on its own line */}
            <div className="badge-row badge-row-single">
              <div className="h-badge-item">
                <Award size={14} className="badge-ico gold" />
                <span><strong>WFO (USA) Fellow</strong> Orthodontist</span>
              </div>
            </div>

            {/* Line 3: 4th item open to everyone */}
            <div className="badge-row badge-row-single">
              <div className="h-badge-item open-to-all">
                <Sparkles size={13} className="badge-ico green" />
                <span><strong>Open to Everyone:</strong> Weddings, Grooms &amp; General Patients</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Couple Image Frame with Clean Below-Banner Strip */}
          <motion.div 
            className="hero-photo-banner-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="hero-img-container">
              <Image 
                src="/wedding-smile-banner.webp" 
                alt="Radiant bride, groom and family smiling with confidence" 
                width={800} 
                height={460} 
                className="hero-main-img"
                priority
              />
            </div>
            
            {/* Sleek Dedicated Bar Placed Below Image — 0% Face Overlap */}
            <div className="hero-floating-glass-bar">
              <div className="glass-text-part">
                <Sparkles size={16} className="glass-sparkle" />
                <span className="glass-headline">Your Smile is Forever in Every Wedding Photo.</span>
              </div>
              <button 
                type="button" 
                onClick={() => openOfferModal(null, 'hero_glass_cta')}
                className="btn-glass-claim pulse-glow"
              >
                <Sparkles size={14} />
                <div>
                  <span className="g-btn-txt">Claim 20% OFF Voucher</span>
                  <span className="g-btn-sub">FREE OPD + 3D SCAN TODAY</span>
                </div>
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── 2. "YOUR SMILE WILL BE IN ALMOST EVERY WEDDING PHOTO" ── */}
      <section className="wedding-confidence-section" id="wedding-confidence">
        <div className="confidence-shell">
          
          <div className="confidence-pill-tag">
            <Sparkles size={12} className="tag-sparkle-inline" />
            <span>UNFILTERED WEDDING-READY SMILE PERFECTION</span>
          </div>

          <h2 className="confidence-h2">
            Your Smile Will Be In <span className="highlight-copper-text">Every Wedding Photo</span>.
          </h2>

          <p className="confidence-sub">
            Bridal lehengas &amp; groom sherwanis are worn for one day, but your 4K wedding photos and video reels last forever. Don&apos;t cover your laughter — fix smile concerns painlessly in Rohtak before your big day.
          </p>

          {/* 4 Compact Interactive Concern Cards */}
          <div className="concerns-grid">
            {CONCERN_CARDS.map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <div 
                  key={idx} 
                  className="concern-item-card"
                  onClick={() => openOfferModal(card.formValue, `concern_card_${idx}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openOfferModal(card.formValue, `concern_card_${idx}`); }}
                  aria-label={`Claim offer for ${card.title}`}
                >
                  <div className="concern-card-top-row">
                    <div className="concern-icon-bubble">
                      <CardIcon size={18} />
                    </div>
                    <span className="concern-badge-pill">{card.badge}</span>
                  </div>

                  <div className="concern-card-content">
                    <h3 className="concern-title">{card.title}</h3>
                    <p className="concern-desc">{card.desc}</p>
                    
                    <div className="concern-solution-box">
                      <span className="sol-label">Recommended Fix:</span>
                      <strong className="sol-name">{card.solution}</strong>
                      <span className="sol-timeline">⏱ {card.timeline}</span>
                    </div>

                    <div className="concern-cta-row">
                      <span className="concern-cta-text">
                        Fix With 20% OFF <ArrowRight size={13} className="concern-arrow-icon" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Urgency Reassurance Bar below concerns */}
          <div className="confidence-reassurance-bar">
            <div className="reassurance-item">
              <CheckCircle2 size={15} className="reassurance-icon" />
              <span><strong>0% EMI Available</strong> on Aligners &amp; Braces</span>
            </div>
            <div className="reassurance-item">
              <ShieldCheck size={15} className="reassurance-icon" />
              <span><strong>Ex-PGI Chandigarh</strong> Specialist Care</span>
            </div>
            <div className="reassurance-item">
              <Sparkles size={15} className="reassurance-icon gold" />
              <span><strong>Free 3D Intraoral Scan</strong> Included</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. 8 SPECIALIST DENTAL TREATMENTS (BRACES, ALIGNERS, IMPLANTS TOP) ── */}
      <section className="treatments-catalogue-section" id="all-treatments">
        <div className="catalogue-shell">
          
          <div className="catalogue-header text-center">
            <div className="catalogue-pill-tag">
              <Sparkles size={12} className="tag-sparkle-inline" />
              <span>SPECIALIST ORTHODONTIC &amp; COSMETIC PROCEDURES</span>
            </div>
            <h2 className="catalogue-h2">
              Popular Smile Treatments · <span className="highlight-copper-text">Flat 20% OFF</span>
            </h2>
            <p className="catalogue-sub">
              Every procedure is personally diagnosed &amp; performed by Ex-PGI Specialists using digital 3D scans, painless techniques, and zero-compromise clinical materials in Rohtak.
            </p>
          </div>

          {/* "Not attending a wedding?" Callout Banner */}
          <div className="not-attending-banner">
            <Sparkles size={18} className="not-attending-star" />
            <div className="not-attending-copy">
              <strong>Not attending a wedding?</strong> You can still claim this Flat 20% OFF discount! All braces, clear aligners, dental implants, and whitening treatments are <strong>open to everyone</strong>.
            </div>
          </div>

          {/* Compact 2-per-Row Treatments Grid */}
          <div className="treatments-catalogue-grid">
            {ALL_TREATMENTS.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div 
                  key={item.id} 
                  className={`treatment-catalogue-card ${idx < 3 ? 't-card-priority' : ''}`}
                >
                  <div className="t-card-top-bar">
                    <div className="t-bubble-icon">
                      <ItemIcon size={18} />
                    </div>
                    {item.badge && <span className="t-card-badge">{item.badge}</span>}
                  </div>

                  <h3 className="t-card-name">{item.title}</h3>
                  <p className="t-card-info">{item.desc}</p>
                  
                  <div className="t-ideal-box">
                    <span><strong>Ideal for:</strong> {item.idealFor}</span>
                  </div>

                  {/* Dual Action Row: Claim 20% OFF (Lead-Gen) + Learn More (Dedicated Page) */}
                  <div className="t-card-actions-row">
                    <button 
                      type="button" 
                      onClick={() => openOfferModal(item.formValue, `treatment_card_${item.id}`)}
                      className="btn-t-claim-offer"
                      aria-label={`Claim 20% OFF on ${item.title}`}
                    >
                      <Sparkles size={13} />
                      <span>Claim 20% OFF</span>
                    </button>

                    <Link 
                      href={item.pageUrl} 
                      className="btn-t-learn-more"
                      title={`Read detailed procedure about ${item.title}`}
                    >
                      <span>Learn More</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 4. 4 SEGMENTED AUDIENCE CARDS (COMPACT 2-IN-A-ROW) ── */}
      <section className="treatment-guidance-section" id="treatment-guidance">
        <div className="guidance-shell">
          
          <div className="guidance-pill-tag">
            <Sparkles size={12} className="tag-sparkle-inline" />
            <span>PERSONALIZED WEDDING SMILE PATHWAYS</span>
          </div>

          <h2 className="guidance-h2 text-center">
            Not Sure What You Need? <span className="highlight-copper-text">Choose Your Role</span>
          </h2>
          <p className="guidance-sub text-center">
            Targeted clinical smile solutions designed for brides, grooms, families, and everyday general patients with Flat 20% OFF.
          </p>

          <div className="audience-segments-grid">
            {AUDIENCE_SEGMENTS.map((seg) => {
              const SegIcon = seg.icon;
              return (
                <div 
                  key={seg.id} 
                  className={`segment-card ${seg.isHighlighted ? 'segment-highlighted' : ''}`}
                >
                  <div className="segment-card-head">
                    <div className="segment-icon-box">
                      <SegIcon size={16} />
                    </div>
                    <div className="seg-titles-wrap">
                      <div className="seg-tags-row">
                        {seg.badge && <span className="seg-badge-chip">{seg.badge}</span>}
                        {seg.tag && <span className="seg-sub-tag">{seg.tag}</span>}
                      </div>
                      <h3 className="segment-title">{seg.title}</h3>
                    </div>
                  </div>

                  <p className="segment-desc">{seg.desc}</p>

                  <ul className="segment-points-list">
                    {seg.points.map((pt, pidx) => (
                      <li key={pidx}>
                        <CheckCircle2 size={13} className="pt-check" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    type="button" 
                    onClick={() => openOfferModal(seg.treatment, `segment_${seg.id}`)}
                    className={`btn-segment-action ${seg.isHighlighted ? 'btn-highlighted' : ''}`}
                    aria-label={`Claim offer for ${seg.title}`}
                  >
                    <Sparkles size={13} />
                    <span>{seg.btnText}</span>
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 5. DOCTOR AUTHORITY & CLINICAL EXCELLENCE (RICH DUAL-SPECIALIST SHOWCASE) ── */}
      <section className="doctor-authority-strip" id="doctors-authority">
        <div className="doctor-strip-shell">
          
          <div className="doctors-scrub-card-custom">
            <div className="card-ambient-glow" aria-hidden="true" />
            
            <div className="doctors-scrub-grid-custom">
              
              {/* LEFT: DOCTORS SCRUB PHOTOGRAPH WITH WARM GLOW BORDER */}
              <div className="doctors-photo-column-custom">
                <div className="doctors-photo-frame-custom">
                  <Image
                    src="/doctors_scrubs.jpeg"
                    alt="Prof. Dr. S. K. Yadav and Dr. Achla Yadav in clinical scrubs at Shubh Dental Clinic Rohtak"
                    width={480}
                    height={520}
                    className="doctors-scrub-img"
                    priority
                  />
                  <div className="photo-verified-seal">
                    <Award size={13} />
                    <span>Ex-PGI Chandigarh Specialists</span>
                  </div>
                </div>
              </div>

              {/* RIGHT: CREDENTIALS TILES FOR DR. S. K. YADAV & DR. ACHLA YADAV */}
              <div className="doctors-content-column-custom">
                
                {/* Header Pill */}
                <div className="doctors-mini-badge-custom">
                  <Sparkles size={12} className="sparkle-gold" />
                  <span>MEET YOUR SENIOR SPECIALISTS · ROHTAK</span>
                </div>

                <h2 className="doctors-main-heading-custom">
                  Decades of PGI Mastery &amp; <span className="copper-gradient-text">World-Class Care</span>
                </h2>

                <p className="doctors-intro-desc-custom">
                  Personally planned &amp; treated by Haryana&apos;s leading dental academic leaders — never delegated to junior trainees.
                </p>

                {/* 2 COMPACT PROFILE TILES */}
                <div className="doctor-tiles-container-custom">
                  
                  {/* DOCTOR 1: DR. S. K. YADAV */}
                  <div className="doctor-tile-custom">
                    <div className="doctor-tile-header-custom">
                      <div>
                        <h3 className="doc-tile-name-custom">Dr. (Prof.) S. K. Yadav</h3>
                        <div className="doc-tile-degrees-custom">BDS, MDS (Orthodontics) · Fellow WFO (USA)</div>
                      </div>
                      <span className="doc-tag-gold-custom">Chief Orthodontist</span>
                    </div>

                    <div className="doc-specs-list-custom">
                      <div className="doc-spec-item-custom">
                        <CheckCircle2 size={13} className="check-gold-custom" />
                        <span><strong>Braces &amp; Implants Specialist</strong> · 5,000+ Cases · Invisalign® Provider</span>
                      </div>
                      <div className="doc-experience-row-custom">
                        <span>Ex. SR PGI Chandigarh · Ex. Consultant ESI Bhiwani · Ex. Prof. DJ Dental</span>
                      </div>
                    </div>

                    <div className="doc-tile-action-row-custom">
                      <button
                        type="button"
                        onClick={() => openOfferModal('Braces / Orthodontics', 'dr_sk_yadav_tile')}
                        className="btn-doc-tile-book"
                      >
                        <Sparkles size={12} />
                        <span>Book Dr. Yadav (20% OFF)</span>
                      </button>
                      <Link href="/doctors#dr-sk-yadav" className="btn-doc-tile-profile" target="_blank">
                        Profile &amp; Research →
                      </Link>
                    </div>
                  </div>

                  {/* DOCTOR 2: DR. ACHLA YADAV */}
                  <div className="doctor-tile-custom">
                    <div className="doctor-tile-header-custom">
                      <div>
                        <h3 className="doc-tile-name-custom">Dr. (Prof.) Achla Yadav</h3>
                        <div className="doc-tile-degrees-custom">BDS, MDS, MIAOMP</div>
                      </div>
                      <span className="doc-tag-green-custom">Cosmetic &amp; Oral Pathologist</span>
                    </div>

                    <div className="doc-specs-list-custom">
                      <div className="doc-spec-item-custom">
                        <CheckCircle2 size={13} className="check-gold-custom" />
                        <span><strong>Cosmetic Dentist &amp; Smile Design</strong> · Veneers &amp; Laser Dentistry</span>
                      </div>
                      <div className="doc-experience-row-custom">
                        <span>Ex. Asst. Professor PGI Rohtak · Ex. Dental Surgeon ECHS Rewari</span>
                      </div>
                    </div>

                    <div className="doc-tile-action-row-custom">
                      <button
                        type="button"
                        onClick={() => openOfferModal('Smile Makeover / Veneers', 'dr_achla_yadav_tile')}
                        className="btn-doc-tile-book"
                      >
                        <Sparkles size={12} />
                        <span>Book Dr. Achla (20% OFF)</span>
                      </button>
                      <Link href="/doctors#dr-achita-yadav" className="btn-doc-tile-profile" target="_blank">
                        Profile &amp; Research →
                      </Link>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 6. SIGNATURE LIVING TOOTH COLLAGE & CLINIC DESK ── */}
      <section className="section campaign-tooth-collage-section" aria-label="5,000+ Real Patient Smiles">
        <div className="section-shell">
          
          {/* Sculpture Header */}
          <div className="tooth-collage-header text-center">
            <div className="tooth-crown-pill">
              <Sparkles size={12} className="crown-icon" />
              <span>SIGNATURE CLINICAL SCULPTURE · 5,000+ CASES</span>
            </div>
            <h2 className="tooth-mosaic-heading">
              The Living Tooth of <span className="tooth-title-highlight">Happy Smiles</span>
            </h2>
            <p className="tooth-mosaic-subtext">
              Real smiling brides, grooms, teenagers &amp; families personally transformed by Dr. (Prof.) S. K. Yadav &amp; Dr. (Prof.) Achla Yadav in Rohtak.
            </p>
          </div>

          {/* Living Tooth Organic Sculpture */}
          <div className="tooth-mosaic-stage">
            {/* Background Anatomical Molar Tooth SVG Outline with Glowing Aura */}
            <div className="tooth-backdrop-aura" aria-hidden="true">
              <svg viewBox="0 0 620 540" className="tooth-backdrop-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="campaignToothFill" x1="310" y1="0" x2="310" y2="540" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <stop offset="45%" stopColor="#FAF7F2" stopOpacity="0.88" />
                    <stop offset="75%" stopColor="#F5ECE0" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#EAD8C2" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="campaignToothBorder" x1="0" y1="0" x2="620" y2="540" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#E5A93C" />
                    <stop offset="30%" stopColor="#D67A41" />
                    <stop offset="70%" stopColor="#C9A84C" />
                    <stop offset="100%" stopColor="#E5A93C" />
                  </linearGradient>
                  <filter id="campaignToothGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="14" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                <path 
                  d="M 310 32 C 265 8, 195 5, 140 35 C 85 65, 45 120, 35 180 C 25 240, 35 295, 60 340 C 85 375, 110 405, 120 420 C 130 445, 140 485, 155 520 C 165 540, 195 540, 205 520 C 215 485, 230 440, 310 395 C 390 440, 405 485, 415 520 C 425 540, 455 540, 465 520 C 480 485, 490 445, 500 420 C 510 405, 535 375, 560 340 C 585 295, 595 240, 585 180 C 575 120, 535 65, 480 35 C 425 5, 355 8, 310 32 Z" 
                  fill="url(#campaignToothFill)"
                  stroke="url(#campaignToothBorder)"
                  strokeWidth="2.5"
                  filter="url(#campaignToothGlow)"
                  className="tooth-silhouette-path"
                />
              </svg>
            </div>

            {/* Tooth Mosaic Grid - 7 Precision Rows */}
            <div className="tooth-mosaic-grid">
              {/* Row 1: Cusps (3 left + Center Jewel + 3 right = 6) */}
              <div className="tooth-mosaic-row tooth-row-1">
                <div className="tooth-cusp-group tooth-cusp-left">
                  {TEETH_COLLAGE_PHOTOS.slice(0, 3).map((f, i) => (
                    <div 
                      key={`t-r1-l-${i}`} 
                      className="tooth-tile-card"
                      onClick={() => setActivePhoto(`/Collage/${f}`)}
                      title="Tap to view smiling patient"
                    >
                      <div className="tooth-tile-inner">
                        <Image 
                          src={`/Collage/${f}`} 
                          alt="Patient smile"
                          fill
                          sizes="(max-width: 600px) 42px, 56px"
                          className="tooth-tile-img"
                        />
                        <div className="tooth-tile-glow" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="tooth-cusp-fissure">
                  <div className="tooth-fissure-emblem" title="5,000+ Happy Smiles">
                    <Sparkles size={16} />
                  </div>
                </div>
                <div className="tooth-cusp-group tooth-cusp-right">
                  {TEETH_COLLAGE_PHOTOS.slice(3, 6).map((f, i) => (
                    <div 
                      key={`t-r1-r-${i}`} 
                      className="tooth-tile-card"
                      onClick={() => setActivePhoto(`/Collage/${f}`)}
                      title="Tap to view smiling patient"
                    >
                      <div className="tooth-tile-inner">
                        <Image 
                          src={`/Collage/${f}`} 
                          alt="Patient smile"
                          fill
                          sizes="(max-width: 600px) 42px, 56px"
                          className="tooth-tile-img"
                        />
                        <div className="tooth-tile-glow" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2: Upper Crown (8 continuous tiles) */}
              <div className="tooth-mosaic-row tooth-row-2">
                {TEETH_COLLAGE_PHOTOS.slice(6, 14).map((f, i) => (
                  <div 
                    key={`t-r2-${i}`} 
                    className="tooth-tile-card"
                    onClick={() => setActivePhoto(`/Collage/${f}`)}
                    title="Tap to view smiling patient"
                  >
                    <div className="tooth-tile-inner">
                      <Image 
                        src={`/Collage/${f}`} 
                        alt="Patient smile"
                        fill
                        sizes="(max-width: 600px) 42px, 56px"
                        className="tooth-tile-img"
                      />
                      <div className="tooth-tile-glow" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 3: Crown Equator - Widest (9 continuous tiles) */}
              <div className="tooth-mosaic-row tooth-row-3">
                {TEETH_COLLAGE_PHOTOS.slice(14, 23).map((f, i) => (
                  <div 
                    key={`t-r3-${i}`} 
                    className="tooth-tile-card"
                    onClick={() => setActivePhoto(`/Collage/${f}`)}
                    title="Tap to view smiling patient"
                  >
                    <div className="tooth-tile-inner">
                      <Image 
                        src={`/Collage/${f}`} 
                        alt="Patient smile"
                        fill
                        sizes="(max-width: 600px) 42px, 56px"
                        className="tooth-tile-img"
                      />
                      <div className="tooth-tile-glow" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 4: Cervical Line / Waist (7 continuous tiles) */}
              <div className="tooth-mosaic-row tooth-row-4">
                {TEETH_COLLAGE_PHOTOS.slice(23, 30).map((f, i) => (
                  <div 
                    key={`t-r4-${i}`} 
                    className="tooth-tile-card"
                    onClick={() => setActivePhoto(`/Collage/${f}`)}
                    title="Tap to view smiling patient"
                  >
                    <div className="tooth-tile-inner">
                      <Image 
                        src={`/Collage/${f}`} 
                        alt="Patient smile"
                        fill
                        sizes="(max-width: 600px) 42px, 56px"
                        className="tooth-tile-img"
                      />
                      <div className="tooth-tile-glow" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 5: Upper Roots Bifurcation (4 left + Furcation Arch + 4 right = 8) */}
              <div className="tooth-mosaic-row tooth-row-5">
                <div className="tooth-root-branch tooth-root-left">
                  {TEETH_COLLAGE_PHOTOS.slice(30, 34).map((f, i) => (
                    <div 
                      key={`t-r5-l-${i}`} 
                      className="tooth-tile-card"
                      onClick={() => setActivePhoto(`/Collage/${f}`)}
                      title="Tap to view smiling patient"
                    >
                      <div className="tooth-tile-inner">
                        <Image 
                          src={`/Collage/${f}`} 
                          alt="Patient smile"
                          fill
                          sizes="(max-width: 600px) 42px, 56px"
                          className="tooth-tile-img"
                        />
                        <div className="tooth-tile-glow" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="tooth-furcation-gap" />
                <div className="tooth-root-branch tooth-root-right">
                  {TEETH_COLLAGE_PHOTOS.slice(34, 38).map((f, i) => (
                    <div 
                      key={`t-r5-r-${i}`} 
                      className="tooth-tile-card"
                      onClick={() => setActivePhoto(`/Collage/${f}`)}
                      title="Tap to view smiling patient"
                    >
                      <div className="tooth-tile-inner">
                        <Image 
                          src={`/Collage/${f}`} 
                          alt="Patient smile"
                          fill
                          sizes="(max-width: 600px) 42px, 56px"
                          className="tooth-tile-img"
                        />
                        <div className="tooth-tile-glow" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 6: Mid Roots (3 left + Gap + 3 right = 6) */}
              <div className="tooth-mosaic-row tooth-row-6">
                <div className="tooth-root-branch tooth-root-left">
                  {TEETH_COLLAGE_PHOTOS.slice(38, 41).map((f, i) => (
                    <div 
                      key={`t-r6-l-${i}`} 
                      className="tooth-tile-card"
                      onClick={() => setActivePhoto(`/Collage/${f}`)}
                      title="Tap to view smiling patient"
                    >
                      <div className="tooth-tile-inner">
                        <Image 
                          src={`/Collage/${f}`} 
                          alt="Patient smile"
                          fill
                          sizes="(max-width: 600px) 42px, 56px"
                          className="tooth-tile-img"
                        />
                        <div className="tooth-tile-glow" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="tooth-furcation-gap wide" />
                <div className="tooth-root-branch tooth-root-right">
                  {TEETH_COLLAGE_PHOTOS.slice(41, 44).map((f, i) => (
                    <div 
                      key={`t-r6-r-${i}`} 
                      className="tooth-tile-card"
                      onClick={() => setActivePhoto(`/Collage/${f}`)}
                      title="Tap to view smiling patient"
                    >
                      <div className="tooth-tile-inner">
                        <Image 
                          src={`/Collage/${f}`} 
                          alt="Patient smile"
                          fill
                          sizes="(max-width: 600px) 42px, 56px"
                          className="tooth-tile-img"
                        />
                        <div className="tooth-tile-glow" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 7: Root Apices (2 left + Gap + 2 right = 4) */}
              <div className="tooth-mosaic-row tooth-row-7">
                <div className="tooth-root-branch tooth-root-left">
                  {TEETH_COLLAGE_PHOTOS.slice(44, 46).map((f, i) => (
                    <div 
                      key={`t-r7-l-${i}`} 
                      className="tooth-tile-card"
                      onClick={() => setActivePhoto(`/Collage/${f}`)}
                      title="Tap to view smiling patient"
                    >
                      <div className="tooth-tile-inner">
                        <Image 
                          src={`/Collage/${f}`} 
                          alt="Patient smile"
                          fill
                          sizes="(max-width: 600px) 42px, 56px"
                          className="tooth-tile-img"
                        />
                        <div className="tooth-tile-glow" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="tooth-furcation-gap extra-wide" />
                <div className="tooth-root-branch tooth-root-right">
                  {TEETH_COLLAGE_PHOTOS.slice(46, 48).map((f, i) => (
                    <div 
                      key={`t-r7-r-${i}`} 
                      className="tooth-tile-card"
                      onClick={() => setActivePhoto(`/Collage/${f}`)}
                      title="Tap to view smiling patient"
                    >
                      <div className="tooth-tile-inner">
                        <Image 
                          src={`/Collage/${f}`} 
                          alt="Patient smile"
                          fill
                          sizes="(max-width: 600px) 42px, 56px"
                          className="tooth-tile-img"
                        />
                        <div className="tooth-tile-glow" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Badge / Action below Sculpture */}
            <div className="tooth-action-bar-wrap">
              <button
                type="button"
                onClick={() => openOfferModal('Smile Makeover / Veneers', 'living_tooth_sculpture')}
                className="btn-tooth-consult"
              >
                <Sparkles size={14} />
                <span>Claim 20% OFF Your Dream Smile Consultation</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Real Patient 5-Star Testimonials Section */}
      <Testimonials />

      {/* ── 6. LOCAL REGIONAL ACCESSIBILITY & GOOGLE ADS TRUST SECTION (ROHTAK + NEARBY CITIES) ── */}
      <section className="campaign-geo-trust-section" aria-label="Location and Nearby City Accessibility">
        <div className="geo-trust-shell">
          <div className="geo-trust-header text-center">
            <div className="geo-pill">
              <MapPin size={13} className="geo-pin-icon" />
              <span>DELHI BYPASS · TILAK NAGAR, ROHTAK</span>
            </div>
            <h2 className="geo-h2">
              Serving Patients Across <span className="highlight-copper-text">Rohtak &amp; Haryana NCR</span>
            </h2>
            <p className="geo-sub">
              Located conveniently opposite Agro Mall, near Delhi Bypass, Rohtak with ample dedicated parking and smooth highway access.
            </p>
          </div>

          <div className="nearby-cities-grid">
            <div className="city-chip-card">
              <span className="city-name">📍 Rohtak Local</span>
              <span className="city-time">5–15 Mins</span>
              <span className="city-note">Tilak Nagar, Model Town, D-Park, Medical Mor</span>
            </div>
            <div className="city-chip-card">
              <span className="city-name">📍 Bahadurgarh</span>
              <span className="city-time">~30 Mins</span>
              <span className="city-note">Direct via Rohtak-Delhi NH-9 Express</span>
            </div>
            <div className="city-chip-card">
              <span className="city-name">📍 Jhajjar &amp; Beri</span>
              <span className="city-time">~35 Mins</span>
              <span className="city-note">Smooth State Highway link to Rohtak</span>
            </div>
            <div className="city-chip-card">
              <span className="city-name">📍 Sonipat &amp; Gohana</span>
              <span className="city-time">~40 Mins</span>
              <span className="city-note">Direct bypass connection, zero city traffic</span>
            </div>
            <div className="city-chip-card">
              <span className="city-name">📍 Panipat &amp; Samalkha</span>
              <span className="city-time">~55 Mins</span>
              <span className="city-note">Direct 4-lane highway route</span>
            </div>
            <div className="city-chip-card">
              <span className="city-name">📍 Bhiwani &amp; Kalanaur</span>
              <span className="city-time">~45 Mins</span>
              <span className="city-note">Comfortable state highway drive</span>
            </div>
          </div>

          <div className="geo-action-callout">
            <div className="callout-left">
              <span className="c-badge">FREE PARKING &amp; HIGHWAY ACCESSIBILITY</span>
              <strong className="c-title">Visiting from outside Rohtak? We offer Priority Same-Day Appointments.</strong>
              <p className="c-sub">Get your Complete Examination + 3D Scan + Treatment Plan finished in one comfortable visit.</p>
            </div>
            <div className="callout-right">
              <button 
                type="button" 
                onClick={() => openOfferModal('Full Mouth Dental Checkup & Scan', 'geo_trust_banner')}
                className="btn-geo-claim"
              >
                <Sparkles size={14} />
                <span>Claim 20% OFF Voucher</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. OFFICIAL OFFER TERMS & CONDITIONS (TRANSPARENCY & CONFLICT-FREE GUARANTEE) ── */}
      <section className="campaign-terms-section" aria-label="Offer Terms and Conditions">
        <div className="terms-shell">
          <div className="terms-header">
            <div className="terms-badge">
              <ShieldCheck size={14} />
              <span>OFFICIAL OFFER POLICY · ZERO HIDDEN CLAUSES</span>
            </div>
            <h3 className="terms-title">Special Wedding Season Offer — Terms &amp; Conditions</h3>
            <p className="terms-note">
              To ensure complete transparency and maintain the highest clinical standards for every patient, please note the following guidelines:
            </p>
          </div>

          <div className="terms-grid">
            <div className="term-item">
              <span className="term-num">1</span>
              <div>
                <strong>Eligibility &amp; Open Enrollment</strong>
                <p>The Flat 20% OFF concession is open to brides, grooms, family members, and all general patients residing in Rohtak and surrounding regions. No minimum purchase required to redeem the voucher.</p>
              </div>
            </div>

            <div className="term-item">
              <span className="term-num">2</span>
              <div>
                <strong>Applicable Treatments</strong>
                <p>Discount applies to professional clinic fees for Braces (Ceramic, Metal &amp; Self-Ligating), Clear Aligners (Invisalign® &amp; SkyAlign™), Computer-Guided Dental Implants, Porcelain Veneers, Smile Makeovers, Laser Teeth Whitening, and Zirconia Crowns.</p>
              </div>
            </div>

            <div className="term-item">
              <span className="term-num">3</span>
              <div>
                <strong>Free OPD &amp; 3D Scan Inclusions</strong>
                <p>Every confirmed booking through this campaign includes a Complimentary Doctor OPD Consultation (Worth ₹500) and 3D Digital Intraoral Scan (Worth ₹1,500). Digital scan simulation is complimentary during consultation.</p>
              </div>
            </div>

            <div className="term-item">
              <span className="term-num">4</span>
              <div>
                <strong>Validity Period &amp; Prior Appointment</strong>
                <p>This special festival offer is <strong>strictly valid till 15 November</strong>. Vouchers must be claimed and registered online prior to clinic visit. Treatment may be started immediately or scheduled within 60 days of voucher reservation to lock in promotional pricing.</p>
              </div>
            </div>

            <div className="term-item">
              <span className="term-num">5</span>
              <div>
                <strong>Flexible 0% EMI Terms</strong>
                <p>0% interest monthly installment schemes are available through partner banking facilities on select Clear Aligner and Implant packages subject to standard verification.</p>
              </div>
            </div>

            <div className="term-item">
              <span className="term-num">6</span>
              <div>
                <strong>Clinical Autonomy &amp; Ethical Care</strong>
                <p>All medical treatment decisions are subject to comprehensive clinical assessment by Prof. Dr. S. K. Yadav or Dr. Achla Yadav to ensure patient health, bone safety, and long-term biological stability.</p>
              </div>
            </div>
          </div>

          <div className="terms-footer-contact">
            <span>Questions about this offer? Call our Rohtak Clinic Coordinator directly at <a href="tel:+918685048414" className="terms-phone-link">+91 86850 48414</a> or <a href="tel:01262469393" className="terms-phone-link">01262-469393</a></span>
          </div>
        </div>
      </section>

      {/* Lightbox for tapped patient smile photos */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div 
            className="photo-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
          >
            <motion.div 
              className="photo-lightbox-box"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                type="button" 
                className="photo-lightbox-close" 
                onClick={() => setActivePhoto(null)}
                aria-label="Close photo"
              >
                <X size={18} />
              </button>
              <div className="photo-lightbox-img-wrap">
                <Image 
                  src={activePhoto} 
                  alt="Real patient smile at Shubh Dental" 
                  width={600} 
                  height={500} 
                  className="photo-lightbox-img" 
                />
              </div>
              <div className="photo-lightbox-footer">
                <span className="photo-lightbox-badge">Verified Shubh Dental Case</span>
                <button 
                  type="button" 
                  onClick={() => {
                    setActivePhoto(null);
                    openOfferModal(null, 'lightbox_cta');
                  }} 
                  className="photo-lightbox-cta"
                >
                  Claim 20% OFF Treatment →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 7. STICKY FLOATING QUICK ACTIONS BAR (MOBILE ONLY — CLEAN, UNIFIED & BEAUTIFULLY ALIGNED) ── */}
      <div className="floating-action-capsule-bar">
        {/* 4-Item Capsule Bar (Call, WhatsApp, Directions, Book Button) */}
        <div className="capsule-bar-body">
          <a 
            href="tel:+918685048414" 
            className="capsule-action-item"
            onClick={() => trackConversion(CONVERSION_EVENTS.PHONE_CLICK, { location: 'capsule_bar' })}
            aria-label="Call clinic"
          >
            <div className="action-circle">
              <Phone size={15} />
            </div>
            <span className="action-label">Call</span>
          </a>

          <a 
            href="https://wa.me/918685048414?text=Hello%20Shubh%20Dental%20Clinic,%20I%20want%20to%20enquire%20about%20the%2020%25%20OFF%20Wedding%20Smile%20Offer." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="capsule-action-item whatsapp"
            onClick={() => trackConversion(CONVERSION_EVENTS.WHATSAPP_CLICK, { location: 'capsule_bar' })}
            aria-label="Chat on WhatsApp"
          >
            <div className="action-circle green">
              <Smile size={15} />
            </div>
            <span className="action-label green-txt">WhatsApp</span>
          </a>

          <a 
            href="https://maps.google.com/?q=Shubh+Orthodontic+%26+Dental+Clinic+Rohtak" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="capsule-action-item"
            aria-label="Get Directions"
          >
            <div className="action-circle">
              <MapPin size={15} />
            </div>
            <span className="action-label">Directions</span>
          </a>

          {/* Primary Book CTA with cleanly integrated Flat 20% OFF tag */}
          <div className="capsule-book-container">
            <button 
              type="button" 
              onClick={() => openOfferModal(null, 'capsule_book_btn')}
              className="btn-capsule-book"
            >
              <div className="btn-book-tag">
                <Sparkles size={10} /> 20% OFF
              </div>
              <div className="btn-book-main">
                <Calendar size={14} />
                <span>Book VIP</span>
                <ArrowRight size={13} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ── 8. LEAD GENERATION MODAL FORM ── */}
      <AnimatePresence>
        {isModalOpen && (
          <div 
            className="modal-backdrop-wrap" 
            onClick={closeModal} 
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="offer-modal-heading"
          >
            <motion.div 
              ref={modalRef}
              className="modal-box-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <button 
                type="button" 
                onClick={closeModal} 
                className="modal-close-round"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {!isSuccess ? (
                <div className="modal-inner-padding">
                  <div className="modal-head text-center">
                    <div className="modal-badge-row">
                      <span className="m-pill">
                        <span className="m-pulse-dot" /> LIMITED SLOTS · ROHTAK
                      </span>
                      <span className="m-pill-urgent">🔥 4 SLOTS LEFT TODAY</span>
                    </div>
                    <h3 id="offer-modal-heading" className="m-h3">
                      Claim Your <span className="m-hl">Flat 20% OFF</span> &amp; Free 3D Scan
                    </h3>
                    <p className="m-sub">
                      Specialist doctor consultation with priority zero waiting time at Shubh Dental Clinic.
                    </p>
                  </div>

                  {/* 20% OFF Animated VIP Voucher Banner */}
                  <div className="form-discount-banner animated-shimmer">
                    <div className="banner-left">
                      <span className="b-top">✨ FREE OPD (₹500) + 3D SCAN (₹1500) FREE · VALID TILL 15 NOV</span>
                      <strong className="b-bot">Flat 20% OFF on All Treatments</strong>
                    </div>
                    <div className="banner-badge pulse-badge">
                      <span>20% OFF</span>
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="form-alert-msg" role="alert">
                      <AlertCircle size={15} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="modal-form-fields" noValidate>
                    <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                    
                    {/* Bot Trap */}
                    <div style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', left: '-9999px', height: 0, width: 0, overflow: 'hidden' }} aria-hidden="true">
                      <label htmlFor="bot_input">Leave empty</label>
                      <input id="bot_input" type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
                    </div>

                    <div className="field-row">
                      <label htmlFor="m-name">Full Name <span className="req">*</span></label>
                      <input 
                        id="m-name"
                        type="text" 
                        required 
                        placeholder="e.g. Jasleen Kaur / Vikram Sharma" 
                        value={formData.name}
                        onChange={(e) => {
                          setFormData(prev => ({ ...prev, name: e.target.value }));
                          setErrorMessage('');
                        }}
                      />
                    </div>

                    <div className="field-row">
                      <label htmlFor="m-phone">Mobile Number <span className="req">*</span></label>
                      <div className="phone-input-wrap">
                        <span className="phone-flag">🇮🇳 +91</span>
                        <input 
                          id="m-phone"
                          type="tel" 
                          required 
                          maxLength={10}
                          placeholder="10-digit mobile number" 
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          inputMode="numeric"
                        />
                      </div>
                    </div>

                    <div className="field-row">
                      <label htmlFor="m-treatment">Preferred Treatment <span className="req">*</span></label>
                      <select 
                        id="m-treatment"
                        value={formData.treatment}
                        onChange={(e) => setFormData(prev => ({ ...prev, treatment: e.target.value }))}
                      >
                        <optgroup label="🌟 Priority Orthodontics &amp; Invisible Braces">
                          <option value="Aesthetic Dental Braces (Ceramic & Metal)">Aesthetic Dental Braces — Ceramic &amp; Self-Ligating (20% OFF)</option>
                          <option value="Invisalign® & Clear Aligners">Invisalign® &amp; 3D Clear Aligners (20% OFF)</option>
                          <option value="Lingual Invisible Braces">Lingual Invisible Braces (Behind Teeth) (20% OFF)</option>
                        </optgroup>
                        
                        <optgroup label="💎 Cosmetic Smile Makeovers &amp; Restorations">
                          <option value="Complete Smile Makeover">Complete Smile Makeover (20% OFF)</option>
                          <option value="Handcrafted Porcelain Veneers (E-max®)">Handcrafted Porcelain Veneers — German E-max® (20% OFF)</option>
                          <option value="Composite Bonding & Chip Repair">Composite Bonding &amp; Gap/Chip Closure (20% OFF)</option>
                          <option value="Laser Teeth Whitening & Polishing">Laser Teeth Whitening &amp; Polish (45-Min Glow) (20% OFF)</option>
                          <option value="Natural Zirconia & Aesthetic Ceramic Crowns">Natural Zirconia &amp; Aesthetic Ceramic Crowns (20% OFF)</option>
                        </optgroup>

                        <optgroup label="🦷 Implant &amp; Surgical Care">
                          <option value="Computer-Guided Dental Implants">Computer-Guided Dental Implants — Lifetime Warranty (20% OFF)</option>
                          <option value="Same-Day Single / Full Mouth Implants">Same-Day Dental Implants (All-on-4/6) (20% OFF)</option>
                          <option value="Painless Root Canal & Crown">Microscopic / Painless Root Canal Treatment (20% OFF)</option>
                          <option value="Deep Ultrasonic Cleaning & Scaling">Deep Ultrasonic Cleaning &amp; Polishing (20% OFF)</option>
                        </optgroup>

                        <optgroup label="🩺 General &amp; Doctor Consultation">
                          <option value="Full Mouth Dental Checkup & Scan">Full Mouth Comprehensive Checkup + 3D Scan (20% OFF)</option>
                          <option value="Not Sure Yet (Free Doctor Advice)">Not Sure Yet — Need Free Doctor Diagnosis &amp; Advice</option>
                        </optgroup>
                      </select>
                    </div>

                    {/* Wedding Concession reminder tag in form */}
                    <div className="form-sub-reminder">
                      <span className="sub-rem-badge">20% OFF ACTIVATED</span>
                      <span className="sub-rem-text">Free OPD + 3D Scan (₹2,000) · <strong>Valid Till 15 Nov</strong></span>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-submit-wedding animated-btn-glow"
                    >
                      {isSubmitting ? 'Reserving Your VIP Slot...' : (
                        <>
                          <Sparkles size={16} />
                          <span>Claim 20% OFF &amp; Reserve VIP Slot</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>

                    <div className="form-micro-perks">
                      <span>✓ Zero Waiting Time</span>
                      <span>✓ No Advance Payment</span>
                      <span>✓ Free Cancellation</span>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="modal-success-box text-center">
                  <div className="success-icon-ring">
                    <CheckCircle2 size={46} color="#10B981" />
                  </div>
                  <h3 className="success-heading">Consultation Reserved!</h3>
                  <p className="success-paragraph">
                    Thank you, <strong>{formData.name}</strong>. Your <strong>20% OFF Wedding Offer</strong> consultation for <strong>{formData.treatment}</strong> has been received.
                  </p>
                  <div className="active-voucher-pill">
                    <span>VOUCHER:</span>
                    <strong>SHUBH-WEDDING-20</strong>
                  </div>
                  <p className="success-coordinator-note">
                    Our patient coordinator will contact you at <strong>+91 {formData.phone}</strong> shortly to confirm your clinical time slot.
                  </p>
                  <button type="button" onClick={closeModal} className="btn-success-close">
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── STYLING: LUXURY EARTHY BROWN & COPPER ACCENTS (SHUBH DENTAL BRAND PALETTE) ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hide global floating badge on this page */
        body:has(.wedding-campaign-page) .inav-wrapper,
        body:has(.wedding-campaign-page) .whatsapp-fab,
        body:has(.wedding-campaign-page) .floating-offer-badge-wrap,
        body:has(.wedding-campaign-page) .floating-badge-btn,
        body:has(.wedding-campaign-page) .mobile-bottom-bar {
          display: none !important;
        }

        .wedding-campaign-page {
          background-color: #FAF8F5;
          color: #1F100B;
          font-family: var(--font-body, 'Plus Jakarta Sans'), sans-serif;
          line-height: 1.5;
          padding-bottom: 0;
        }

        /* ── HERO SECTION (RICH EARTHY CHOCOLATE / ESPRESSO BROWN) ── */
        .campaign-hero-section {
          background: linear-gradient(155deg, #1A0D08 0%, #2E170F 50%, #20100A 100%);
          color: #FFFFFF;
          padding: 2.25rem 0 2.75rem;
          border-bottom: 1px solid rgba(214, 122, 65, 0.25);
          position: relative;
          overflow: hidden;
        }

        /* ── LUXURY AMBIENT BACKGROUND ANIMATION (IMPACTFUL & ELEGANT) ── */
        .hero-bg-fx {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }

        .fx-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
          mix-blend-mode: screen;
          will-change: transform, opacity;
        }

        .fx-orb-1 {
          width: 440px;
          height: 440px;
          background: radial-gradient(circle, rgba(230, 106, 31, 0.75) 0%, rgba(214, 122, 65, 0.35) 45%, transparent 70%);
          top: -15%;
          left: 5%;
          animation: floatOrbOne 10s ease-in-out infinite alternate;
        }

        .fx-orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.65) 0%, rgba(214, 122, 65, 0.3) 50%, transparent 70%);
          bottom: -5%;
          right: 2%;
          animation: floatOrbTwo 12s ease-in-out infinite alternate;
        }

        .fx-orb-3 {
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(255, 138, 76, 0.6) 0%, rgba(184, 89, 34, 0.25) 50%, transparent 70%);
          top: 30%;
          right: 20%;
          animation: floatOrbThree 14s ease-in-out infinite alternate;
        }

        /* Luminous Aurora Beam drifting diagonally */
        .fx-aurora-beam {
          position: absolute;
          top: -40%;
          left: -20%;
          width: 140%;
          height: 120%;
          background: linear-gradient(115deg, transparent 20%, rgba(255, 180, 120, 0.08) 45%, rgba(255, 215, 0, 0.12) 50%, rgba(230, 106, 31, 0.08) 55%, transparent 80%);
          transform: rotate(-15deg);
          animation: auroraWave 8s ease-in-out infinite alternate;
          filter: blur(30px);
        }

        .fx-shimmer-grid {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(rgba(255, 255, 255, 0.09) 1.5px, transparent 1.5px);
          background-size: 30px 30px;
          opacity: 0.8;
          animation: subtleDrift 20s linear infinite;
        }

        /* Twinkling Golden Wedding Sparkles */
        .fx-sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #FFF;
          border-radius: 50%;
          box-shadow: 0 0 10px 3px rgba(255, 215, 0, 0.9), 0 0 20px 6px rgba(230, 106, 31, 0.6);
          animation: sparkleTwinkle 3.5s ease-in-out infinite;
        }
        .fx-sparkle.p1 { top: 18%; left: 14%; animation-delay: 0s; }
        .fx-sparkle.p2 { top: 28%; right: 18%; animation-delay: 0.7s; }
        .fx-sparkle.p3 { top: 55%; left: 8%; animation-delay: 1.4s; }
        .fx-sparkle.p4 { top: 72%; right: 12%; animation-delay: 2.1s; }
        .fx-sparkle.p5 { top: 40%; left: 24%; animation-delay: 0.4s; width: 5px; height: 5px; }
        .fx-sparkle.p6 { top: 15%; right: 30%; animation-delay: 1.8s; width: 3px; height: 3px; }
        .fx-sparkle.p7 { top: 82%; left: 20%; animation-delay: 2.6s; }
        .fx-sparkle.p8 { top: 62%; right: 28%; animation-delay: 1.1s; width: 5px; height: 5px; }

        @keyframes sparkleTwinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.6) translateY(0); }
          50% { opacity: 1; transform: scale(1.4) translateY(-8px); }
        }

        @keyframes auroraWave {
          0% { transform: rotate(-15deg) translateY(-20px) scale(0.98); opacity: 0.6; }
          100% { transform: rotate(-10deg) translateY(25px) scale(1.05); opacity: 1; }
        }

        @keyframes floatOrbOne {
          0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(45px, 50px) scale(1.25); opacity: 0.95; }
          100% { transform: translate(-35px, 30px) scale(0.9); opacity: 0.55; }
        }

        @keyframes floatOrbTwo {
          0% { transform: translate(0, 0) scale(1); opacity: 0.65; }
          50% { transform: translate(-60px, -45px) scale(1.3); opacity: 1; }
          100% { transform: translate(30px, -60px) scale(0.85); opacity: 0.5; }
        }

        @keyframes floatOrbThree {
          0% { transform: translate(0, 0) scale(0.9); opacity: 0.5; }
          50% { transform: translate(50px, -35px) scale(1.2); opacity: 0.85; }
          100% { transform: translate(-30px, 45px) scale(1); opacity: 0.45; }
        }

        @keyframes subtleDrift {
          0% { background-position: 0 0; }
          100% { background-position: 30px 30px; }
        }

        .hero-shell {
          max-width: 880px;
          margin: 0 auto;
          padding: 0 1.25rem;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .hero-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(30, 15, 9, 0.7);
          border: 1px solid rgba(214, 122, 65, 0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          font-size: 0.72rem;
          font-weight: 850;
          letter-spacing: 0.04em;
          padding: 0.35rem 0.9rem;
          border-radius: 99px;
          margin-bottom: 0.95rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
          flex-wrap: wrap;
          justify-content: center;
        }
        .pill-star { color: #F59E0B; }
        .pill-highlight-text { color: #FEF08A; }
        .pill-sep { color: rgba(255, 255, 255, 0.35); font-size: 0.65rem; }
        .pill-white-text { color: #FFFFFF; font-weight: 900; }
        .pill-date-badge {
          background: #E66A1F;
          color: #FFFFFF;
          font-size: 0.62rem;
          font-weight: 900;
          padding: 0.12rem 0.45rem;
          border-radius: 99px;
          letter-spacing: 0.05em;
        }

        .hero-main-h1 {
          font-family: var(--font-heading, 'Outfit'), sans-serif;
          font-size: clamp(1.85rem, 3.8vw, 2.7rem);
          font-weight: 900;
          line-height: 1.18;
          letter-spacing: -0.025em;
          margin: 0 0 0.85rem;
          color: #FFFFFF;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
        .highlight-copper {
          background: linear-gradient(135deg, #FFDD55 0%, #FFA826 40%, #FF5500 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 16px rgba(255, 170, 0, 0.7)) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.8));
          font-weight: 950;
          display: inline-block;
        }

        .hero-main-sub {
          font-size: 0.94rem;
          color: #F5EEE9;
          line-height: 1.6;
          max-width: 680px;
          margin: 0 auto 1.35rem;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
        }
        .hero-main-sub strong {
          color: #FFD4B2;
          font-weight: 750;
        }

        /* Hero Badges Strip (Organized 3-tier structure) */
        .hero-badges-strip {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.65rem;
          width: 100%;
        }
        .badge-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
        }
        .badge-row-duo {
          flex-wrap: nowrap;
        }
        .badge-row-single {
          justify-content: center;
        }
        .h-badge-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          font-size: 0.74rem;
          color: #FFFFFF;
          background: rgba(26, 13, 8, 0.72);
          border: 1px solid rgba(214, 122, 65, 0.45);
          padding: 0.32rem 0.8rem;
          border-radius: 99px;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
          white-space: nowrap;
        }
        .h-badge-item.open-to-all {
          background: rgba(6, 78, 59, 0.72);
          border-color: rgba(52, 211, 153, 0.7);
          color: #D1FAE5;
        }
        .badge-ico.gold { color: #F59E0B; }
        .badge-ico.green { color: #34D399; }
        .star-rating {
          color: #FBBF24;
          font-weight: 900;
        }

        /* Hero Photo Banner with Overlay Bar */
        .hero-photo-banner-card {
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(214, 122, 65, 0.28);
          background: #000;
        }
        .hero-img-container {
          position: relative;
        }
        .hero-main-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }
        .hero-floating-glass-bar {
          position: relative;
          background: linear-gradient(135deg, rgba(30, 15, 9, 0.96) 0%, rgba(42, 21, 13, 0.96) 100%);
          border-top: 1px solid rgba(214, 122, 65, 0.4);
          padding: 0.75rem 1.15rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.85rem;
        }
        .glass-text-part {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .glass-sparkle { color: #EAA77C; flex-shrink: 0; }
        .glass-headline {
          font-family: var(--font-heading, 'Outfit'), sans-serif;
          font-weight: 800;
          font-size: 0.94rem;
          color: #FFFFFF;
        }
        .btn-glass-claim {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: linear-gradient(135deg, #D67A41 0%, #B85922 100%);
          color: #FFFFFF;
          padding: 0.5rem 0.95rem;
          border-radius: 9px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(214, 122, 65, 0.45);
          text-align: left;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-glass-claim:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(214, 122, 65, 0.6);
        }
        .pulse-glow {
          animation: subtlePulse 2.4s infinite;
        }
        @keyframes subtlePulse {
          0%, 100% { box-shadow: 0 4px 14px rgba(214, 122, 65, 0.45); }
          50% { box-shadow: 0 4px 22px rgba(214, 122, 65, 0.8); }
        }
        .g-btn-txt {
          display: block;
          font-size: 0.78rem;
          font-weight: 850;
          line-height: 1.1;
        }
        .g-btn-sub {
          display: block;
          font-size: 0.58rem;
          font-weight: 750;
          letter-spacing: 0.05em;
          opacity: 0.85;
        }

        /* ── SECTION 2: WEDDING CONFIDENCE (COMPACT & LEAD GENERATING) ── */
        .wedding-confidence-section {
          padding: 2.25rem 0 2.5rem;
          background: #FAF8F5;
          position: relative;
          overflow: hidden;
        }
        .wedding-confidence-section::before {
          content: '';
          position: absolute;
          top: -15%;
          left: -8%;
          width: 550px;
          height: 550px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(230, 106, 31, 0.14) 0%, rgba(251, 191, 36, 0.08) 40%, rgba(250, 248, 245, 0) 70%);
          pointer-events: none;
          animation: floatOrbOne 15s ease-in-out infinite alternate;
        }
        .wedding-confidence-section::after {
          content: '';
          position: absolute;
          bottom: -10%;
          right: -5%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.12) 0%, rgba(254, 215, 170, 0.08) 45%, rgba(250, 248, 245, 0) 70%);
          pointer-events: none;
          animation: floatOrbTwo 17s ease-in-out infinite alternate;
        }
        .confidence-shell {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.25rem;
          position: relative;
          z-index: 1;
          text-align: center;
        }
        .confidence-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #F4EBE1;
          border: 1px solid rgba(214, 122, 65, 0.3);
          color: #B85922;
          font-size: 0.68rem;
          font-weight: 850;
          letter-spacing: 0.08em;
          padding: 0.25rem 0.8rem;
          border-radius: 99px;
          margin-bottom: 0.65rem;
        }
        .tag-sparkle-inline { color: #D67A41; }
        .confidence-h2 {
          font-family: var(--font-heading, 'Outfit'), sans-serif;
          font-size: clamp(1.45rem, 2.8vw, 2.05rem);
          font-weight: 900;
          color: #1F100B;
          margin: 0 0 0.55rem;
          line-height: 1.22;
          letter-spacing: -0.02em;
        }
        .highlight-copper-text {
          color: #B85922;
          background: linear-gradient(135deg, #B85922 0%, #D67A41 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .confidence-sub {
          font-size: 0.86rem;
          color: #55443D;
          line-height: 1.52;
          max-width: 680px;
          margin: 0 auto 1.4rem;
        }

        .concerns-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.95rem;
          text-align: left;
        }
        .concern-item-card {
          background: #FFFFFF;
          border: 1px solid rgba(74, 37, 24, 0.12);
          border-radius: 14px;
          padding: 1.05rem 1.15rem;
          box-shadow: 0 3px 12px rgba(74, 37, 24, 0.04);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease, border-color 0.22s ease;
        }
        .concern-item-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(214, 122, 65, 0.16);
          border-color: #D67A41;
        }
        .concern-item-card:active {
          transform: scale(0.99);
        }
        .concern-card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.55rem;
        }
        .concern-icon-bubble {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: #FAF4EE;
          color: #D67A41;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(214, 122, 65, 0.2);
        }
        .concern-badge-pill {
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #B85922;
          background: #FBF4EE;
          border: 1px solid rgba(214, 122, 65, 0.25);
          padding: 0.15rem 0.5rem;
          border-radius: 99px;
        }
        .concern-card-content {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .concern-title {
          font-family: var(--font-heading, 'Outfit'), sans-serif;
          font-size: 0.98rem;
          font-weight: 850;
          color: #1F100B;
          margin: 0 0 0.3rem;
          line-height: 1.25;
        }
        .concern-desc {
          font-size: 0.79rem;
          color: #6C5A52;
          line-height: 1.45;
          margin: 0 0 0.7rem;
        }
        .concern-solution-box {
          background: #FAF8F5;
          border-left: 3px solid #D67A41;
          border-radius: 0 6px 6px 0;
          padding: 0.45rem 0.65rem;
          margin-bottom: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .sol-label {
          font-size: 0.62rem;
          font-weight: 700;
          color: #8C776E;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .sol-name {
          font-size: 0.78rem;
          color: #1F100B;
          font-weight: 800;
        }
        .sol-timeline {
          font-size: 0.68rem;
          color: #B85922;
          font-weight: 750;
        }
        .concern-cta-row {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .concern-cta-text {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.76rem;
          font-weight: 850;
          color: #B85922;
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .concern-item-card:hover .concern-cta-text {
          color: #D67A41;
          transform: translateX(2px);
        }
        .concern-arrow-icon {
          transition: transform 0.2s ease;
        }
        .concern-item-card:hover .concern-arrow-icon {
          transform: translateX(3px);
        }

        /* Quick Urgency Reassurance Bar */
        .confidence-reassurance-bar {
          margin-top: 1.5rem;
          background: #FFFFFF;
          border: 1px dashed rgba(214, 122, 65, 0.4);
          border-radius: 12px;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .reassurance-item {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          color: #382922;
        }
        .reassurance-icon {
          color: #10B981;
          flex-shrink: 0;
        }
        .reassurance-icon.gold {
          color: #D67A41;
        }

        /* ── SECTION 3: 8 TREATMENTS CATALOGUE (2-PER-ROW COMPACT DESIGN) ── */
        .treatments-catalogue-section {
          padding: 2.5rem 0 2.75rem;
          background: #FFFFFF;
          border-top: 1px solid rgba(74, 37, 24, 0.08);
          border-bottom: 1px solid rgba(74, 37, 24, 0.08);
        }
        .catalogue-shell {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        .catalogue-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #F4EBE1;
          border: 1px solid rgba(214, 122, 65, 0.3);
          color: #B85922;
          font-size: 0.68rem;
          font-weight: 850;
          letter-spacing: 0.08em;
          padding: 0.25rem 0.8rem;
          border-radius: 99px;
          margin-bottom: 0.65rem;
        }
        .catalogue-h2 {
          font-family: var(--font-heading, 'Outfit'), sans-serif;
          font-size: clamp(1.45rem, 2.8vw, 2.05rem);
          font-weight: 900;
          color: #1F100B;
          margin: 0 0 0.45rem;
          letter-spacing: -0.02em;
        }
        .catalogue-sub {
          font-size: 0.86rem;
          color: #55443D;
          max-width: 680px;
          margin: 0 auto 1.35rem;
          line-height: 1.5;
        }

        /* "Not attending a wedding?" Banner */
        .not-attending-banner {
          background: #FAF4EE;
          border: 1.5px solid rgba(214, 122, 65, 0.3);
          border-radius: 12px;
          padding: 0.75rem 1.05rem;
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          margin-bottom: 1.5rem;
          color: #3E2D26;
          font-size: 0.82rem;
          line-height: 1.48;
        }
        .not-attending-star {
          color: #D67A41;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .not-attending-banner strong {
          color: #B85922;
        }

        /* Strictly 2 Cards in One Row */
        .treatments-catalogue-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.95rem;
        }
        .treatment-catalogue-card {
          background: #FAF8F5;
          border: 1px solid rgba(74, 37, 24, 0.12);
          border-radius: 14px;
          padding: 1.05rem 1.15rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 3px 12px rgba(74, 37, 24, 0.03);
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.22s ease, box-shadow 0.22s ease;
          position: relative;
        }
        .treatment-catalogue-card:hover {
          transform: translateY(-3px);
          border-color: #D67A41;
          box-shadow: 0 10px 24px rgba(214, 122, 65, 0.15);
        }
        .t-card-priority {
          border-color: rgba(214, 122, 65, 0.35);
          background: linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%);
        }
        .t-card-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.55rem;
        }
        .t-bubble-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: #FAF4EE;
          color: #B85922;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(214, 122, 65, 0.25);
        }
        .t-card-badge {
          font-size: 0.62rem;
          font-weight: 850;
          letter-spacing: 0.04em;
          color: #B85922;
          background: #FBF4EE;
          border: 1px solid rgba(214, 122, 65, 0.3);
          padding: 0.15rem 0.5rem;
          border-radius: 99px;
        }
        .t-card-name {
          font-family: var(--font-heading, 'Outfit'), sans-serif;
          font-size: 0.98rem;
          font-weight: 850;
          color: #1F100B;
          margin: 0 0 0.3rem;
          line-height: 1.25;
        }
        .t-card-info {
          font-size: 0.79rem;
          color: #55443D;
          line-height: 1.45;
          margin: 0 0 0.65rem;
          flex-grow: 1;
        }
        .t-ideal-box {
          background: #FFFFFF;
          border-radius: 6px;
          padding: 0.35rem 0.55rem;
          font-size: 0.71rem;
          color: #2C1610;
          line-height: 1.35;
          margin-bottom: 0.85rem;
          border: 1px solid rgba(74, 37, 24, 0.08);
        }
        .t-ideal-box strong { color: #B85922; }

        /* Dual Action Buttons Row */
        .t-card-actions-row {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin-top: auto;
        }
        .btn-t-claim-offer {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.3rem;
          background: linear-gradient(135deg, #D67A41 0%, #B85922 100%);
          color: #FFFFFF;
          border: none;
          font-size: 0.76rem;
          font-weight: 850;
          padding: 0.5rem 0.75rem;
          border-radius: 7px;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(214, 122, 65, 0.35);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .btn-t-claim-offer:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(214, 122, 65, 0.5);
        }
        .btn-t-learn-more {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          background: #FFFFFF;
          border: 1px solid rgba(74, 37, 24, 0.18);
          color: #2C1610;
          font-size: 0.74rem;
          font-weight: 750;
          padding: 0.5rem 0.65rem;
          border-radius: 7px;
          text-decoration: none;
          transition: all 0.18s ease;
          white-space: nowrap;
        }
        .btn-t-learn-more:hover {
          background: #FAF4EE;
          border-color: #D67A41;
        }

        /* ── SECTION 4: 4 SEGMENTED AUDIENCES (COMPACT 2-IN-A-ROW) ── */
        .treatment-guidance-section {
          padding: 2.25rem 0 2.5rem;
          background: #FAF8F5;
          border-bottom: 1px solid rgba(74, 37, 24, 0.08);
        }
        .guidance-shell {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        .guidance-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #F4EBE1;
          border: 1px solid rgba(214, 122, 65, 0.3);
          color: #B85922;
          font-size: 0.68rem;
          font-weight: 850;
          letter-spacing: 0.08em;
          padding: 0.25rem 0.8rem;
          border-radius: 99px;
          margin-bottom: 0.65rem;
        }
        .guidance-h2 {
          font-family: var(--font-heading, 'Outfit'), sans-serif;
          font-size: clamp(1.45rem, 2.8vw, 2.05rem);
          font-weight: 900;
          color: #1F100B;
          margin: 0 0 0.4rem;
          letter-spacing: -0.02em;
        }
        .guidance-sub {
          font-size: 0.86rem;
          color: #55443D;
          max-width: 660px;
          margin: 0 auto 1.35rem;
          line-height: 1.5;
        }

        /* Strictly 2 Columns on Desktop & Tablet */
        .audience-segments-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.95rem;
          text-align: left;
        }
        .segment-card {
          background: #FFFFFF;
          border: 1px solid rgba(74, 37, 24, 0.12);
          border-radius: 14px;
          padding: 1.05rem 1.15rem;
          box-shadow: 0 3px 12px rgba(74, 37, 24, 0.03);
          display: flex;
          flex-direction: column;
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease, border-color 0.22s ease;
        }
        .segment-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(214, 122, 65, 0.14);
          border-color: #D67A41;
        }
        .segment-card.segment-highlighted {
          border: 1.5px solid #10B981;
          background: linear-gradient(180deg, #FFFFFF 0%, #F5FBF7 100%);
        }
        .segment-card-head {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          margin-bottom: 0.45rem;
        }
        .segment-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: #FAF4EE;
          color: #D67A41;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .seg-titles-wrap {
          flex: 1;
        }
        .seg-tags-row {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin-bottom: 0.15rem;
        }
        .seg-badge-chip {
          display: inline-block;
          font-size: 0.6rem;
          font-weight: 850;
          letter-spacing: 0.04em;
          color: #0E854B;
          background: #E8F7EE;
          padding: 0.1rem 0.45rem;
          border-radius: 99px;
        }
        .seg-sub-tag {
          font-size: 0.62rem;
          font-weight: 750;
          color: #B85922;
        }
        .segment-title {
          font-family: var(--font-heading, 'Outfit'), sans-serif;
          font-size: 0.98rem;
          font-weight: 850;
          color: #1F100B;
          margin: 0;
          line-height: 1.25;
        }
        .segment-desc {
          font-size: 0.78rem;
          color: #55443D;
          line-height: 1.42;
          margin: 0 0 0.55rem;
        }
        .segment-points-list {
          list-style: none;
          padding: 0;
          margin: 0 0 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          flex-grow: 1;
        }
        .segment-points-list li {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.76rem;
          color: #382922;
          line-height: 1.35;
        }
        .pt-check { color: #10B981; flex-shrink: 0; }

        .btn-segment-action {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          background: linear-gradient(135deg, #D67A41 0%, #B85922 100%);
          color: #FFFFFF;
          border: none;
          font-size: 0.78rem;
          font-weight: 850;
          padding: 0.55rem 0.85rem;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(214, 122, 65, 0.3);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .btn-segment-action:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(214, 122, 65, 0.5);
        }
        .btn-segment-action.btn-highlighted {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
        }
        .btn-segment-action.btn-highlighted:hover {
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.5);
        }

        /* ── DOCTOR AUTHORITY (DARK LUXURY DUAL-SPECIALIST SHOWCASE) ── */
        .doctor-authority-strip {
          padding: 2.75rem 0;
          background: #FAF8F5;
        }
        .doctor-strip-shell {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        .doctors-scrub-card-custom {
          background: linear-gradient(155deg, #1A0D08 0%, #2A140B 50%, #1A0D08 100%);
          border: 1px solid rgba(214, 122, 65, 0.35);
          border-radius: 20px;
          padding: 1.5rem 1.65rem;
          color: #FFFFFF;
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.35);
          position: relative;
          overflow: hidden;
        }
        .card-ambient-glow {
          position: absolute;
          top: -30%;
          left: 20%;
          width: 50%;
          height: 80%;
          background: radial-gradient(circle, rgba(214, 122, 65, 0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .doctors-scrub-grid-custom {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 1.65rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .doctors-photo-frame-custom {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(214, 122, 65, 0.4);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
          background: #000;
        }
        .doctors-scrub-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          object-position: center 15%;
        }
        .photo-verified-seal {
          position: absolute;
          bottom: 0.5rem;
          left: 0.5rem;
          right: 0.5rem;
          background: rgba(26, 13, 8, 0.92);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(214, 122, 65, 0.4);
          color: #FCD34D;
          font-size: 0.65rem;
          font-weight: 850;
          padding: 0.3rem 0.5rem;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.3rem;
        }

        /* Content Column */
        .doctors-content-column-custom {
          display: flex;
          flex-direction: column;
        }
        .doctors-mini-badge-custom {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(214, 122, 65, 0.18);
          border: 1px solid rgba(214, 122, 65, 0.45);
          color: #FCD34D;
          font-size: 0.65rem;
          font-weight: 850;
          letter-spacing: 0.08em;
          padding: 0.22rem 0.65rem;
          border-radius: 99px;
          margin-bottom: 0.55rem;
          align-self: flex-start;
        }
        .sparkle-gold { color: #FCD34D; }
        .doctors-main-heading-custom {
          font-family: var(--font-heading, 'Outfit'), sans-serif;
          font-size: clamp(1.35rem, 2.4vw, 1.75rem);
          font-weight: 900;
          color: #FFFFFF;
          margin: 0 0 0.35rem;
          line-height: 1.25;
        }
        .copper-gradient-text {
          background: linear-gradient(135deg, #FFB380 0%, #D67A41 50%, #FF924A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .doctors-intro-desc-custom {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.45;
          margin: 0 0 1rem;
        }

        /* 2 Profile Tiles */
        .doctor-tiles-container-custom {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .doctor-tile-custom {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 0.85rem 0.95rem;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .doctor-tile-custom:hover {
          border-color: rgba(214, 122, 65, 0.45);
          background: rgba(255, 255, 255, 0.06);
        }
        .doctor-tile-header-custom {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 0.45rem;
        }
        .doc-tile-name-custom {
          font-family: var(--font-heading, 'Outfit'), sans-serif;
          font-size: 0.98rem;
          font-weight: 850;
          color: #FFFFFF;
          margin: 0;
        }
        .doc-tile-degrees-custom {
          font-size: 0.68rem;
          color: #D67A41;
          font-weight: 700;
        }
        .doc-tag-gold-custom {
          font-size: 0.6rem;
          font-weight: 850;
          color: #FCD34D;
          background: rgba(214, 122, 65, 0.2);
          border: 1px solid rgba(214, 122, 65, 0.35);
          padding: 0.12rem 0.45rem;
          border-radius: 99px;
          white-space: nowrap;
        }
        .doc-tag-green-custom {
          font-size: 0.6rem;
          font-weight: 850;
          color: #6EE7B7;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 0.12rem 0.45rem;
          border-radius: 99px;
          white-space: nowrap;
        }
        .doc-specs-list-custom {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-bottom: 0.65rem;
        }
        .doc-spec-item-custom {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.74rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.35;
        }
        .check-gold-custom {
          color: #D67A41;
          flex-shrink: 0;
        }
        .doc-experience-row-custom {
          font-size: 0.68rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.35;
        }

        .doc-tile-action-row-custom {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin-top: 0.45rem;
        }
        .btn-doc-tile-book {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: linear-gradient(135deg, #D67A41 0%, #B85922 100%);
          color: #FFFFFF;
          border: none;
          font-size: 0.74rem;
          font-weight: 850;
          padding: 0.42rem 0.75rem;
          border-radius: 6px;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(214, 122, 65, 0.35);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .btn-doc-tile-book:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(214, 122, 65, 0.55);
        }
        .btn-doc-tile-profile {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          transition: color 0.18s ease;
        }
        .btn-doc-tile-profile:hover {
          color: #D67A41;
        }

        /* ── 6. SIGNATURE LIVING TOOTH COLLAGE & CLINIC FOOTER CARD ── */
        .campaign-tooth-collage-section {
          background: #FAF8F5;
          padding: 3rem 0 3.5rem;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(74, 37, 24, 0.08);
        }

        .tooth-collage-header {
          max-width: 680px;
          margin: 0 auto 1.5rem;
          padding: 0 1rem;
        }

        .tooth-crown-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(214, 122, 65, 0.12);
          border: 1px solid rgba(214, 122, 65, 0.28);
          color: #B85922;
          font-size: 0.68rem;
          font-weight: 850;
          letter-spacing: 0.06em;
          padding: 0.28rem 0.75rem;
          border-radius: 99px;
          margin-bottom: 0.65rem;
        }

        .crown-icon {
          color: #D67A41;
        }

        .tooth-mosaic-heading {
          font-family: var(--font-heading, 'Outfit'), sans-serif;
          font-size: clamp(1.45rem, 3.2vw, 2.25rem);
          font-weight: 900;
          color: #1A0D08;
          margin: 0 0 0.5rem 0;
          line-height: 1.18;
          letter-spacing: -0.02em;
        }

        .tooth-title-highlight {
          background: linear-gradient(135deg, #7A340F 0%, #C4682E 40%, #D67A41 70%, #9E4516 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .tooth-mosaic-subtext {
          font-size: 0.88rem;
          color: #55443D;
          line-height: 1.55;
          margin: 0 auto;
        }

        /* Seamless Organic Stage */
        .tooth-mosaic-stage {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem 0.5rem 2rem;
          margin: 0 auto;
          max-width: 680px;
        }

        /* SVG Glow Aura */
        .tooth-backdrop-aura {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 1;
        }

        .tooth-backdrop-svg {
          width: 100%;
          max-width: 580px;
          height: auto;
          filter: drop-shadow(0 0 30px rgba(214, 122, 65, 0.28));
          animation: toothAuraBreathe 5s ease-in-out infinite alternate;
        }

        @keyframes toothAuraBreathe {
          0% { transform: scale(0.99); filter: drop-shadow(0 0 20px rgba(214, 122, 65, 0.22)); }
          100% { transform: scale(1.015); filter: drop-shadow(0 0 36px rgba(214, 122, 65, 0.4)); }
        }

        /* 7-Row Precision Grid */
        .tooth-mosaic-grid {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--tooth-gap, 5px);
          --tile-size: clamp(34px, 4.4vw, 52px);
          --tooth-gap: clamp(3px, 0.5vw, 5px);
        }

        .tooth-mosaic-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--tooth-gap, 5px);
          width: 100%;
          flex-wrap: nowrap !important;
        }

        .tooth-cusp-group {
          display: flex;
          align-items: center;
          gap: var(--tooth-gap, 5px);
          flex-shrink: 0 !important;
        }

        .tooth-cusp-fissure {
          width: calc(var(--tile-size) * 2.8 + var(--tooth-gap) * 2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0 !important;
        }

        .tooth-fissure-emblem {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FDE68A 0%, #D67A41 60%, #B85922 100%);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 16px rgba(214, 122, 65, 0.6);
          animation: emblemPulse 2.2s ease-in-out infinite;
          border: 2px solid #FFFFFF;
        }

        @keyframes emblemPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 12px rgba(214, 122, 65, 0.5); }
          50% { transform: scale(1.12); box-shadow: 0 0 22px rgba(214, 122, 65, 0.85); }
        }

        .tooth-root-branch {
          display: flex;
          align-items: center;
          gap: var(--tooth-gap, 5px);
          flex-shrink: 0 !important;
        }

        .tooth-furcation-gap {
          width: calc(var(--tile-size) * 0.9 + var(--tooth-gap) * 1);
          flex-shrink: 0 !important;
        }

        .tooth-furcation-gap.wide {
          width: calc(var(--tile-size) * 2.2 + var(--tooth-gap) * 2);
        }

        .tooth-furcation-gap.extra-wide {
          width: calc(var(--tile-size) * 3.6 + var(--tooth-gap) * 3);
        }

        /* Living Photo Tile */
        .tooth-tile-card {
          width: var(--tile-size);
          height: var(--tile-size);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(17, 8, 5, 0.12), 0 0 6px rgba(214, 122, 65, 0.15);
          border: 1.5px solid #FFFFFF;
          background: #FAF6F0;
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s ease, border-color 0.28s ease;
          flex-shrink: 0;
          animation: toothTileFloat 4s ease-in-out infinite alternate;
        }

        @keyframes toothTileFloat {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-3px); }
        }

        .tooth-tile-card:hover {
          transform: translateY(-6px) scale(1.22) rotate(0.8deg) !important;
          z-index: 100 !important;
          border-color: #D67A41 !important;
          box-shadow: 0 12px 24px rgba(17, 8, 5, 0.3), 0 0 18px rgba(214, 122, 65, 0.5) !important;
        }

        .tooth-tile-inner {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .tooth-tile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }

        .tooth-tile-card:hover .tooth-tile-img {
          transform: scale(1.1);
        }

        .tooth-tile-glow {
          position: absolute;
          inset: 0;
          border-radius: 9px;
          box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.6);
          pointer-events: none;
        }

        /* Action below Sculpture */
        .tooth-action-bar-wrap {
          margin-top: 1.75rem;
          position: relative;
          z-index: 5;
        }

        .btn-tooth-consult {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #D67A41 0%, #B85922 100%);
          color: #FFFFFF;
          border: none;
          padding: 0.65rem 1.25rem;
          border-radius: 99px;
          font-size: 0.84rem;
          font-weight: 850;
          cursor: pointer;
          box-shadow: 0 6px 18px rgba(214, 122, 65, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn-tooth-consult:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(214, 122, 65, 0.5);
        }

        /* ── COMPACT LUXURY CLINIC CARD ── */
        .campaign-clean-footer-card {
          margin-top: 2rem;
          background: #FFFFFF;
          border-radius: 18px;
          border: 1px solid rgba(74, 37, 24, 0.1);
          box-shadow: 0 8px 24px rgba(26, 13, 8, 0.05);
          padding: 1.5rem 1.65rem;
          position: relative;
          z-index: 4;
        }

        .footer-shell {
          max-width: 1160px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .f-title-row {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          margin-bottom: 0.35rem;
        }

        .f-live-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 8px rgba(16, 185, 129, 0.7);
        }

        .f-clinic-name {
          font-family: var(--font-heading, 'Outfit'), sans-serif;
          font-size: 1rem;
          font-weight: 850;
          color: #1A0D08;
          display: block;
        }

        .f-address {
          font-style: normal;
          font-size: 0.78rem;
          color: #55443D;
          line-height: 1.5;
          margin-bottom: 0.45rem;
        }

        .f-landmark {
          color: #B85922;
          font-weight: 600;
        }

        .f-hours-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #FAF8F5;
          border: 1px solid rgba(74, 37, 24, 0.08);
          padding: 0.22rem 0.55rem;
          border-radius: 6px;
          font-size: 0.72rem;
          color: #55443D;
        }

        .footer-links-col {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-start;
        }

        .f-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 800;
          padding: 0.45rem 0.9rem;
          border-radius: 8px;
          text-decoration: none;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }

        .f-link-call {
          background: #1A0D08;
          color: #FDFBF7;
        }

        .f-link-call:hover {
          background: #2E170F;
          transform: translateY(-1px);
        }

        .f-link-wa {
          background: rgba(37, 211, 102, 0.12);
          color: #128C7E;
          border: 1px solid rgba(37, 211, 102, 0.3);
        }

        .f-link-wa:hover {
          background: rgba(37, 211, 102, 0.2);
          transform: translateY(-1px);
        }

        .f-privacy {
          font-size: 0.72rem;
          color: #8A756D;
          text-decoration: underline;
          padding-left: 0.25rem;
        }

        /* ── FULL PHOTO LIGHTBOX ── */
        .photo-lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(10, 5, 3, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .photo-lightbox-box {
          position: relative;
          max-width: 480px;
          width: 100%;
          background: #1A0D08;
          border: 1px solid rgba(214, 122, 65, 0.4);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
        }

        .photo-lightbox-close {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 2;
        }

        .photo-lightbox-img-wrap {
          position: relative;
          width: 100%;
          height: 340px;
          background: #000;
        }

        .photo-lightbox-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .photo-lightbox-footer {
          padding: 0.85rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #1A0D08;
          border-top: 1px solid rgba(214, 122, 65, 0.2);
        }

        .photo-lightbox-badge {
          color: #FCD34D;
          font-size: 0.72rem;
          font-weight: 800;
        }

        .photo-lightbox-cta {
          background: linear-gradient(135deg, #D67A41 0%, #B85922 100%);
          color: #FFFFFF;
          border: none;
          padding: 0.4rem 0.85rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 850;
          cursor: pointer;
        }

        /* ── FLOATING QUICK ACTIONS BAR (MOBILE ONLY — CLEAN, UNIFIED & BEAUTIFULLY ALIGNED) ── */
        .floating-action-capsule-bar {
          display: none;
          position: fixed;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          width: calc(100% - 1.5rem);
          max-width: 410px;
        }

        /* Capsule Body */
        .capsule-bar-body {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(214, 122, 65, 0.28);
          border-radius: 99px;
          padding: 0.35rem 0.5rem;
          box-shadow: 0 10px 32px rgba(26, 13, 8, 0.22), 0 2px 8px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.25rem;
        }
        .capsule-action-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.15rem;
          text-decoration: none;
          color: #4A3A33;
          padding: 0.2rem 0.4rem;
          flex: 1;
          min-width: 0;
          transition: transform 0.15s ease;
        }
        .capsule-action-item:active {
          transform: scale(0.94);
        }
        .action-circle {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #F5EEE6;
          color: #2C1610;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }
        .action-circle.green {
          background: #E6F7ED;
          color: #0E854B;
        }
        .action-label {
          font-size: 0.65rem;
          font-weight: 750;
          line-height: 1;
        }
        .action-label.green-txt { color: #0E854B; }

        /* Integrated VIP Book Button */
        .capsule-book-container {
          flex: 1.4;
          display: flex;
        }
        .btn-capsule-book {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #E66A1F 0%, #D67A41 100%);
          color: #FFFFFF;
          border-radius: 99px;
          border: none;
          cursor: pointer;
          padding: 0.4rem 0.75rem;
          box-shadow: 0 4px 14px rgba(230, 106, 31, 0.45);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .btn-capsule-book:active {
          transform: scale(0.96);
        }
        .btn-book-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.58rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          color: #FEF08A;
          line-height: 1;
          margin-bottom: 0.15rem;
          text-transform: uppercase;
        }
        .btn-book-main {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          font-weight: 850;
          line-height: 1;
        }

        /* ── MODAL DIALOG ── */
        .modal-backdrop-wrap {
          position: fixed;
          inset: 0;
          background: rgba(31, 16, 11, 0.72);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          overflow-y: auto;
        }
        .modal-box-card {
          background: #FFFFFF;
          border-radius: 22px;
          width: 100%;
          max-width: 440px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
          position: relative;
          overflow: hidden;
          margin: auto;
        }
        .modal-close-round {
          position: absolute;
          top: 0.85rem;
          right: 0.85rem;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #F4EBE1;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4A3A33;
          cursor: pointer;
        }
        .modal-inner-padding {
          padding: 1.85rem 1.5rem 1.5rem;
        }
        /* Modal Header Badge Row */
        .modal-badge-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 0.55rem;
          flex-wrap: wrap;
        }
        .m-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.65rem;
          font-weight: 850;
          letter-spacing: 0.08em;
          background: #2C1610;
          color: #FCD34D;
          padding: 0.25rem 0.65rem;
          border-radius: 99px;
        }
        .m-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10B981;
          display: inline-block;
          animation: dotBlink 1.4s ease-in-out infinite;
        }
        @keyframes dotBlink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.7); }
        }
        .m-pill-urgent {
          font-size: 0.65rem;
          font-weight: 850;
          letter-spacing: 0.05em;
          background: #FEF2F2;
          border: 1px solid #FCA5A5;
          color: #B91C1C;
          padding: 0.25rem 0.65rem;
          border-radius: 99px;
          animation: badgePulse 2s infinite ease-in-out;
        }
        @keyframes badgePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
        .m-h3 {
          font-family: var(--font-heading, 'Outfit'), sans-serif;
          font-size: 1.35rem;
          font-weight: 900;
          color: #1F100B;
          margin: 0 0 0.35rem;
          line-height: 1.2;
        }
        .m-hl { 
          background: linear-gradient(135deg, #B85922 0%, #D67A41 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .m-sub {
          font-size: 0.8rem;
          color: #6C5A52;
          margin: 0 0 1rem;
          line-height: 1.4;
        }

        /* 20% OFF Shimmer VIP Banner */
        .form-discount-banner {
          background: linear-gradient(135deg, #24110A 0%, #3D1C12 100%);
          color: #FFFFFF;
          border-radius: 12px;
          padding: 0.75rem 0.95rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          border: 1.5px solid rgba(214, 122, 65, 0.4);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 18px rgba(36, 17, 10, 0.25);
        }
        .animated-shimmer::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -60%;
          width: 50%;
          height: 200%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: rotate(25deg);
          animation: bannerShimmer 3.2s infinite ease-in-out;
          pointer-events: none;
        }
        @keyframes bannerShimmer {
          0% { left: -70%; }
          100% { left: 160%; }
        }
        .banner-left {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .b-top {
          font-size: 0.62rem;
          font-weight: 850;
          letter-spacing: 0.05em;
          color: #FCD34D;
        }
        .b-bot {
          font-size: 0.86rem;
          font-weight: 850;
          color: #FFFFFF;
        }
        .pulse-badge {
          background: linear-gradient(135deg, #D67A41 0%, #C46026 100%);
          color: #FFFFFF;
          font-size: 0.82rem;
          font-weight: 900;
          padding: 0.4rem 0.75rem;
          border-radius: 8px;
          box-shadow: 0 3px 10px rgba(214, 122, 65, 0.5);
          animation: badgePulse 2.2s infinite ease-in-out;
        }

        .form-alert-msg {
          background: #FEF2F2;
          border: 1px solid #FCA5A5;
          color: #991B1B;
          font-size: 0.76rem;
          font-weight: 600;
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          margin-bottom: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .modal-form-fields {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .field-row {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          text-align: left;
        }
        .field-row label {
          font-size: 0.74rem;
          font-weight: 750;
          color: #382922;
        }
        .req { color: #DC2626; }
        .modal-form-fields input,
        .modal-form-fields select {
          width: 100%;
          background: #FAF8F5;
          border: 1.5px solid rgba(74, 37, 24, 0.16);
          border-radius: 10px;
          padding: 0.65rem 0.8rem;
          font-size: 0.86rem;
          font-weight: 600;
          color: #1F100B;
          font-family: inherit;
          outline: none;
          transition: all 0.25s ease;
        }
        .phone-input-wrap {
          display: flex;
          align-items: center;
          position: relative;
        }
        .phone-flag {
          position: absolute;
          left: 0.75rem;
          font-size: 0.8rem;
          font-weight: 800;
          color: #1F100B;
          pointer-events: none;
        }
        .phone-input-wrap input {
          padding-left: 4.1rem;
        }
        .modal-form-fields input:focus,
        .modal-form-fields select:focus {
          background: #FFFFFF;
          border-color: #D67A41;
          box-shadow: 0 0 0 3px rgba(214, 122, 65, 0.18);
          transform: translateY(-1px);
        }

        .form-sub-reminder {
          background: #2C1610;
          color: #FFFFFF;
          padding: 0.55rem 0.85rem;
          border-radius: 9px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border: 1px solid rgba(214, 122, 65, 0.3);
        }
        .sub-rem-badge {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          color: #FFFFFF;
          font-size: 0.68rem;
          font-weight: 900;
          padding: 0.2rem 0.5rem;
          border-radius: 5px;
          flex-shrink: 0;
          letter-spacing: 0.04em;
        }
        .sub-rem-text {
          font-size: 0.72rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.3;
        }

        /* Animated High-Converting Submit Button */
        .btn-submit-wedding {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #D67A41 0%, #B85922 100%);
          color: #FFFFFF;
          font-size: 0.92rem;
          font-weight: 850;
          padding: 0.85rem 1.2rem;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(214, 122, 65, 0.45);
          transition: all 0.25s ease;
          margin-top: 0.25rem;
        }
        .animated-btn-glow {
          animation: buttonBreathing 2.4s infinite ease-in-out;
        }
        @keyframes buttonBreathing {
          0%, 100% {
            box-shadow: 0 6px 20px rgba(214, 122, 65, 0.45);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 8px 28px rgba(214, 122, 65, 0.7);
            transform: scale(1.02);
          }
        }
        .btn-submit-wedding:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(214, 122, 65, 0.55);
        }
        .btn-submit-wedding:active {
          transform: translateY(0);
        }

        .form-micro-perks {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          font-size: 0.68rem;
          font-weight: 700;
          color: #6C5A52;
          margin-top: 0.35rem;
        }

        /* Success box */
        .modal-success-box {
          padding: 2rem 1.5rem;
        }
        .success-icon-ring {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #E8F7EE;
          border: 2px solid #10B981;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.85rem;
        }
        .success-heading {
          font-family: var(--font-heading, 'Outfit'), sans-serif;
          font-size: 1.25rem;
          font-weight: 850;
          color: #1F100B;
          margin: 0 0 0.35rem;
        }
        .success-paragraph {
          font-size: 0.84rem;
          color: #4A3A33;
          line-height: 1.45;
          margin: 0 0 0.75rem;
        }
        .active-voucher-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #FEF3C7;
          border: 1.5px dashed #D97706;
          padding: 0.3rem 0.85rem;
          border-radius: 99px;
          margin-bottom: 0.75rem;
        }
        .active-voucher-pill span {
          font-size: 0.68rem;
          color: #92400E;
          font-weight: 750;
        }
        .active-voucher-pill strong {
          font-size: 0.84rem;
          color: #B45309;
        }
        .success-coordinator-note {
          font-size: 0.76rem;
          color: #6C5A52;
          margin: 0 0 1.15rem;
        }
        .btn-success-close {
          background: #2C1610;
          color: #FFFFFF;
          border: none;
          font-size: 0.82rem;
          font-weight: 750;
          padding: 0.6rem 1.6rem;
          border-radius: 7px;
          cursor: pointer;
        }

        /* ── REGIONAL ACCESSIBILITY & GOOGLE ADS TRUST SECTION ── */
        .campaign-geo-trust-section {
          background: #FCFAF7;
          border-top: 1px solid rgba(74, 37, 24, 0.08);
          border-bottom: 1px solid rgba(74, 37, 24, 0.08);
          padding: 3rem 1.25rem 2.5rem;
        }
        .geo-trust-shell {
          max-width: 1040px;
          margin: 0 auto;
        }
        .geo-trust-header {
          margin-bottom: 1.85rem;
        }
        .geo-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #2C1610;
          color: #E6B587;
          padding: 0.28rem 0.85rem;
          border-radius: 99px;
          font-size: 0.68rem;
          font-weight: 850;
          letter-spacing: 0.06em;
          margin-bottom: 0.65rem;
        }
        .geo-pin-icon { color: #D67A41; }
        .geo-h2 {
          font-family: var(--font-heading, 'Outfit'), sans-serif;
          font-size: clamp(1.4rem, 3.2vw, 2rem);
          font-weight: 850;
          color: #1F100B;
          margin: 0 0 0.5rem;
          line-height: 1.25;
        }
        .geo-sub {
          font-size: 0.88rem;
          color: #6C5A52;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.5;
        }
        .nearby-cities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.95rem;
          margin-bottom: 1.5rem;
        }
        .city-chip-card {
          background: #FFFFFF;
          border: 1px solid rgba(74, 37, 24, 0.12);
          border-radius: 12px;
          padding: 0.95rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .city-chip-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(214, 122, 65, 0.12);
          border-color: rgba(214, 122, 65, 0.4);
        }
        .city-name {
          font-size: 0.88rem;
          font-weight: 850;
          color: #1F100B;
        }
        .city-time {
          font-size: 0.72rem;
          font-weight: 800;
          color: #B85922;
          background: #FFF4EC;
          padding: 0.12rem 0.5rem;
          border-radius: 99px;
          align-self: flex-start;
          margin: 0.15rem 0;
        }
        .city-note {
          font-size: 0.74rem;
          color: #7A6960;
          line-height: 1.35;
        }
        .geo-action-callout {
          background: linear-gradient(135deg, #24110A 0%, #3D1C12 100%);
          color: #FFFFFF;
          border-radius: 16px;
          padding: 1.25rem 1.65rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          border: 1px solid rgba(214, 122, 65, 0.35);
          box-shadow: 0 8px 24px rgba(36, 17, 10, 0.2);
        }
        .callout-left {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .c-badge {
          font-size: 0.62rem;
          font-weight: 850;
          color: #FCD34D;
          letter-spacing: 0.06em;
        }
        .c-title {
          font-size: 1rem;
          font-weight: 850;
          color: #FFFFFF;
        }
        .c-sub {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
        }
        .btn-geo-claim {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: linear-gradient(135deg, #D67A41 0%, #B85922 100%);
          color: #FFFFFF;
          font-size: 0.88rem;
          font-weight: 850;
          padding: 0.75rem 1.35rem;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 4px 14px rgba(214, 122, 65, 0.4);
          transition: transform 0.2s ease;
        }
        .btn-geo-claim:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(214, 122, 65, 0.6);
        }

        /* ── OFFICIAL OFFER TERMS & CONDITIONS ── */
        .campaign-terms-section {
          background: #FAF8F5;
          padding: 2.75rem 1.25rem 2.25rem;
          border-top: 1px solid rgba(74, 37, 24, 0.08);
        }
        .terms-shell {
          max-width: 980px;
          margin: 0 auto;
        }
        .terms-header {
          margin-bottom: 1.5rem;
        }
        .terms-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: #10B981;
          font-size: 0.72rem;
          font-weight: 850;
          letter-spacing: 0.06em;
          margin-bottom: 0.45rem;
        }
        .terms-title {
          font-family: var(--font-heading, 'Outfit'), sans-serif;
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          font-weight: 850;
          color: #1F100B;
          margin: 0 0 0.35rem;
        }
        .terms-note {
          font-size: 0.82rem;
          color: #6C5A52;
          margin: 0;
          line-height: 1.45;
        }
        .terms-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .term-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: #FFFFFF;
          border: 1px solid rgba(74, 37, 24, 0.1);
          border-radius: 12px;
          padding: 0.95rem 1.1rem;
        }
        .term-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #2C1610;
          color: #FCD34D;
          font-size: 0.74rem;
          font-weight: 900;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }
        .term-item strong {
          display: block;
          font-size: 0.85rem;
          color: #1F100B;
          margin-bottom: 0.25rem;
          font-weight: 800;
        }
        .term-item p {
          font-size: 0.76rem;
          color: #6C5A52;
          line-height: 1.45;
          margin: 0;
        }
        .terms-footer-contact {
          text-align: center;
          font-size: 0.78rem;
          color: #7A6960;
          padding-top: 0.75rem;
          border-top: 1px dashed rgba(74, 37, 24, 0.15);
        }
        .terms-phone-link {
          color: #B85922;
          font-weight: 800;
          text-decoration: underline;
        }

        /* ── RESPONSIVE RULES ── */
        @media (max-width: 992px) {
          .nearby-cities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .treatments-catalogue-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .audience-segments-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.85rem;
          }
          .doctor-strip-shell {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .doc-portrait-frame {
            max-width: 190px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .nearby-cities-grid {
            grid-template-columns: 1fr;
          }
          .geo-action-callout {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.15rem 1.25rem;
          }
          .btn-geo-claim {
            width: 100%;
            justify-content: center;
          }
          .terms-grid {
            grid-template-columns: 1fr;
          }
          .floating-action-capsule-bar {
            display: flex;
          }
          .wedding-campaign-page {
            padding-bottom: 95px;
          }
          .campaign-hero-section {
            padding: 1.25rem 0 1.75rem;
          }
          .hero-pill-badge {
            font-size: 0.65rem;
            padding: 0.28rem 0.65rem;
            gap: 0.35rem;
            margin-bottom: 0.75rem;
          }
          .pill-date-badge {
            font-size: 0.58rem;
            padding: 0.1rem 0.38rem;
          }
          .hero-main-h1 {
            font-size: 1.75rem;
            line-height: 1.22;
            margin-bottom: 0.7rem;
          }
          .hero-main-sub {
            font-size: 0.88rem;
            line-height: 1.5;
            margin-bottom: 1.15rem;
            padding: 0 0.25rem;
          }
          .hero-badges-strip {
            gap: 0.35rem;
            margin-bottom: 1.25rem;
          }
          .badge-row {
            gap: 0.35rem;
          }
          .badge-row-duo .h-badge-item {
            font-size: 0.65rem;
            padding: 0.22rem 0.45rem;
            flex: 1;
            max-width: 175px;
          }
          .badge-row-single .h-badge-item {
            font-size: 0.68rem;
            padding: 0.22rem 0.65rem;
          }
          .hero-floating-glass-bar {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.55rem;
            padding: 0.65rem 0.85rem;
          }
          .btn-glass-claim {
            width: 100%;
            justify-content: center;
          }
          .wedding-confidence-section {
            padding: 1.65rem 0 1.85rem;
          }
          .confidence-h2 {
            font-size: 1.4rem;
            margin-bottom: 0.4rem;
          }
          .confidence-sub {
            font-size: 0.8rem;
            margin-bottom: 1.15rem;
          }
          .concerns-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
          .concern-item-card {
            padding: 0.85rem 0.95rem;
          }
          .concern-title {
            font-size: 0.92rem;
          }
          .concern-desc {
            font-size: 0.76rem;
            margin-bottom: 0.5rem;
          }
          .concern-solution-box {
            padding: 0.35rem 0.55rem;
            margin-bottom: 0.55rem;
          }
          .sol-name {
            font-size: 0.75rem;
          }
          .confidence-reassurance-bar {
            padding: 0.6rem 0.75rem;
            flex-direction: column;
            gap: 0.45rem;
            align-items: flex-start;
          }
          .treatments-catalogue-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.65rem;
          }
          .treatment-catalogue-card {
            padding: 0.75rem 0.65rem;
          }
          .t-card-name {
            font-size: 0.88rem;
          }
          .t-card-info {
            font-size: 0.73rem;
            margin-bottom: 0.45rem;
          }
          .t-ideal-box {
            font-size: 0.67rem;
            padding: 0.25rem 0.4rem;
            margin-bottom: 0.55rem;
          }
          .t-card-actions-row {
            flex-direction: column;
            gap: 0.35rem;
          }
          .btn-t-claim-offer {
            width: 100%;
            padding: 0.42rem 0.55rem;
            font-size: 0.72rem;
          }
          .btn-t-learn-more {
            width: 100%;
            justify-content: center;
            padding: 0.38rem 0.55rem;
            font-size: 0.7rem;
          }
          .treatment-guidance-section {
            padding: 1.65rem 0 1.85rem;
          }
          .guidance-h2 {
            font-size: 1.4rem;
            margin-bottom: 0.35rem;
          }
          .guidance-sub {
            font-size: 0.8rem;
            margin-bottom: 1.15rem;
          }
          .audience-segments-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.65rem;
          }
          .segment-card {
            padding: 0.75rem 0.65rem;
          }
          .segment-title {
            font-size: 0.88rem;
          }
          .segment-desc {
            font-size: 0.72rem;
            margin-bottom: 0.45rem;
          }
          .segment-points-list {
            margin-bottom: 0.65rem;
            gap: 0.25rem;
          }
          .segment-points-list li {
            font-size: 0.7rem;
            gap: 0.25rem;
          }
          .btn-segment-action {
            padding: 0.45rem 0.55rem;
            font-size: 0.72rem;
          }
          .doctor-authority-strip {
            padding: 1.75rem 0 2rem;
          }
          .doctors-scrub-card-custom {
            padding: 1.15rem 1rem;
            border-radius: 16px;
          }
          .doctors-scrub-grid-custom {
            grid-template-columns: 1fr;
            gap: 1.15rem;
          }
          .doctors-photo-frame-custom {
            max-width: 320px;
            margin: 0 auto;
          }
          .doctors-main-heading-custom {
            font-size: 1.35rem;
          }
          .doctor-tile-custom {
            padding: 0.75rem 0.8rem;
          }
          .campaign-tooth-collage-section {
            padding: 2.25rem 0 2.75rem;
          }
          .tooth-mosaic-heading {
            font-size: 1.45rem;
          }
          .tooth-mosaic-grid {
            --tile-size: clamp(30px, 8.8vw, 38px);
            --tooth-gap: 3px;
          }
          .tooth-tile-card {
            border-radius: 8px;
            border-width: 1px;
          }
          .tooth-fissure-emblem {
            width: 24px;
            height: 24px;
          }
          .campaign-clean-footer-card {
            padding: 1.15rem 1rem;
            border-radius: 14px;
            margin-top: 1.5rem;
          }
          .footer-shell {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.15rem;
          }
          .footer-links-col {
            width: 100%;
          }
          .f-link {
            width: 100%;
            justify-content: center;
          }
        }
        @media (max-width: 380px) {
          .tooth-mosaic-grid {
            --tile-size: clamp(26px, 8.4vw, 32px);
            --tooth-gap: 2.5px;
          }
          .treatments-catalogue-grid {
            grid-template-columns: 1fr;
          }
          .audience-segments-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />

    </div>
  );
}
