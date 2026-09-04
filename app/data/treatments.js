// ============================================================================
// COMPREHENSIVE MEDICAL INFORMATION ARCHITECTURE — Shubh Orthodontic & Dental Clinic
// All clinical claims are strictly factual, evidence-based, and non-exaggerated.
// ============================================================================

export const treatments = [
  // ── 01. DENTAL BRACES ───────────────────────────────────────────────────────
  {
    id: 'dental-braces',
    slug: 'dental-braces',
    title: 'Dental Braces',
    shortTitle: 'Dental Braces',
    category: 'Orthodontics',
    icon: '🦷',
    h1: 'Dental Braces in Rohtak',
    subtitle: 'Comprehensive Orthodontic Realignment with Metal, Ceramic & Lingual Systems',
    heroValueProp: 'Correct crowding, spacing, and complex bite misalignments with customized orthodontic appliances planned and monitored by Prof. Dr. S. K. Yadav (Ex-PGI Chandigarh).',
    primaryKeyword: 'dental braces Rohtak',
    secondaryKeywords: ['metal braces', 'ceramic braces', 'orthodontist Rohtak', 'teeth alignment', 'braces cost Rohtak'],
    
    // Medical Reviewer
    doctor: 'Prof. Dr. S. K. Yadav',
    doctorTitle: 'Chief Orthodontist & Dental Specialist',
    doctorSlug: 'dr-sk-yadav',
    doctorPhoto: '/dr-sk-yadav.webp',
    doctorDegree: 'BDS, MDS (Orthodontics — PGI Chandigarh), Fellow WFO (USA)',
    medicalReviewDate: '2026-06-15',

    // Breadcrumbs
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Treatments', url: '/#services' },
      { name: 'Orthodontics', url: '/#services' },
      { name: 'Dental Braces', url: '/treatments/dental-braces' }
    ],

    // Quick Facts / At a Glance
    quickFacts: {
      duration: '12–24 months (case-dependent)',
      visits: 'Monthly adjustments (every 4–6 weeks)',
      anaesthesia: 'None required (painless bonding)',
      recovery: 'Mild tooth tenderness for 2–4 days post-adjustment',
      candidacy: 'Children (age 7+), teenagers, and adults with malocclusion',
      longevity: 'Permanent alignment with consistent retainer use'
    },

    // Overview (What is it?)
    overview: 'Dental braces are fixed orthodontic appliances engineered to guide misaligned teeth into their anatomically correct positions through gentle, continuous physiological force. Treatment addresses both aesthetic irregularities and functional malocclusions such as deep bites, crossbites, and open bites. At Shubh Orthodontic & Dental Clinic in Rohtak, orthodontic therapy is led by Prof. Dr. S. K. Yadav (MDS Orthodontics, PGI Chandigarh), utilizing advanced low-friction bracket geometries and heat-activated nickel-titanium archwires that minimize patient discomfort and optimize treatment efficiency.',

    // Problems / Conditions Addressed
    conditions: [
      'Dental crowding and overlapping teeth',
      'Diastema and irregular gaps between teeth',
      'Overbite (deep bite) and underbite (Class III malocclusion)',
      'Crossbites affecting chewing efficiency or jaw symmetry',
      'Open bite causing speech difficulties or tongue thrusting',
      'Temporomandibular joint (TMJ) strain caused by an uneven bite'
    ],

    // Candidacy & Indications
    candidacy: {
      idealFor: 'Children with developing permanent dentition (recommended evaluation at age 7), teenagers, and adults of any age with healthy gums and bone support who require orthodontic correction.',
      notIdealFor: 'Active untreated periodontal (gum) disease, severe untreated tooth decay, or individuals unwilling or unable to maintain thorough daily oral hygiene around brackets.'
    },

    // When Another Option May Be More Appropriate
    alternatives: [
      {
        name: 'Invisalign® / SkyAlign™ Clear Aligners',
        description: 'Recommended for working professionals, adults, and teens desiring a virtually invisible, removable appliance with no dietary restrictions.'
      },
      {
        name: 'Porcelain Veneers / Composite Bonding',
        description: 'Recommended when mild spacing or minor cosmetic imperfections exist on otherwise well-aligned bites and rapid same-week aesthetic enhancement is preferred.'
      }
    ],

    // Treatment Options Comparison
    optionsComparison: {
      type: 'matrix',
      title: 'Orthodontic Appliance Systems Compared',
      items: [
        {
          name: 'Traditional Metal Braces',
          bestFor: 'Complex bite corrections in teens and children',
          visibility: 'Visible metal brackets with customizable colored ties',
          durability: 'Extremely high fracture resistance',
          hygiene: 'Requires dedicated interdental brushing'
        },
        {
          name: 'Ceramic Tooth-Colored Braces',
          bestFor: 'Aesthetic conscious teens and working adults',
          visibility: 'Translucent ceramic blends with natural enamel',
          durability: 'High (requires mindful chewing)',
          hygiene: 'Regular cleaning prevents elastic staining'
        },
        {
          name: 'Self-Ligating Braces (Damon®)',
          bestFor: 'Reduced friction, fewer adjustment appointments',
          visibility: 'Metal or clear low-profile bracket bodies',
          durability: 'Very high; no elastic ties needed',
          hygiene: 'Easier cleaning with reduced plaque buildup'
        },
        {
          name: 'Lingual (Behind-the-Teeth) Braces',
          bestFor: '100% invisible fixed orthodontic treatment',
          visibility: 'Completely hidden on the inner (tongue) surface',
          durability: 'Custom gold-alloy or cobalt brackets',
          hygiene: 'Requires specialized flossing technique'
        }
      ]
    },

    // Step-by-Step Clinical Workflow
    processSteps: [
      {
        step: 1,
        title: 'Comprehensive Diagnostic Assessment',
        description: 'Digital intraoral examination, facial profile photographs, and digital panoramic/lateral cephalometric X-rays to analyze jaw relationships and root angulations.'
      },
      {
        step: 2,
        title: 'Orthodontic Treatment Planning',
        description: 'Prof. Dr. S. K. Yadav calculates exact tooth movement vectors, space requirements, and anchorage requirements before appliance placement.'
      },
      {
        step: 3,
        title: 'Precision Bracket Bonding',
        description: 'Teeth surfaces are conditioned and brackets are accurately positioned along the aesthetic facial axis of each tooth using light-cured adhesive.'
      },
      {
        step: 4,
        title: 'Sequential Archwire Progressions',
        description: 'Flexible thermal nickel-titanium archwires are engaged to begin initial leveling and alignment, followed by rectangular steel wires for torque and bite finishing.'
      },
      {
        step: 5,
        title: 'Monthly Progress Monitoring',
        description: 'Brief 20-minute adjustment sessions every 4–6 weeks to monitor tooth velocity, adjust elastics, and ensure optimal biomechanical progress.'
      },
      {
        step: 6,
        title: 'Debonding & Retention Phase',
        description: 'Brackets are gently removed, enamel is polished to pristine smoothness, and custom retainers (fixed lingual wire or clear removable trays) are delivered to preserve results.'
      }
    ],

    // Diagnostic & Clinical Technology
    technology: [
      {
        name: 'Digital Cephalometric & OPG Imaging',
        purpose: 'Measures skeletal jaw relationships and root orientations with ultra-low radiation.'
      },
      {
        name: 'Shape-Memory NiTi Archwires',
        purpose: 'Delivers gentle, biologically continuous forces that minimize periodontal ligament discomfort.'
      },
      {
        name: 'Precision Indirect & Direct Bonding Adhesives',
        purpose: 'Protects natural enamel integrity while ensuring reliable bracket retention throughout treatment.'
      }
    ],

    // Benefits (Functional vs Aesthetic)
    benefits: {
      functional: [
        'Optimizes biting efficiency and reduces uneven tooth wear',
        'Relieves chronic strain on the temporomandibular joint (TMJ)',
        'Significantly simplifies daily brushing and flossing, lowering lifetime cavity risk',
        'Corrects speech impediments caused by severe open bites or anterior gaps'
      ],
      aesthetic: [
        'Creates a balanced, harmonious smile arch aligned with facial symmetry',
        'Improves lip support and profile balance in growing and adult patients',
        'Provides long-term self-confidence in social and professional environments'
      ]
    },

    // Risks, Limitations & Considerations
    risksAndLimitations: [
      'Mild soreness and soft tissue irritation during the first 3–5 days following placement and adjustments.',
      'Meticulous oral hygiene is mandatory to avoid enamel demineralization (white spot lesions) around brackets.',
      'Dietary discipline: Hard, crunchy, or sticky foods (nuts, whole apples, hard candies, chewing gum) must be avoided to prevent broken brackets.',
      'Lifelong retainer compliance is necessary to prevent natural physiological orthodontic relapse.'
    ],

    // Treatment Duration & Timeline
    durationAndTimeline: {
      consultationToBonding: '1–2 appointments for complete diagnostic records and bracket placement.',
      activeTreatment: 'Typically 12–24 months depending on whether extraction or non-extraction protocols are indicated.',
      retentionPhase: 'Full-time wear for 6 months post-debonding, transitioning to night-time retention indefinitely.'
    },

    // Pain & Comfort Management
    painAndComfort: {
      anaesthesia: 'No anaesthetic injections are required for bracket placement or adjustments.',
      expectedSensation: 'Patients experience a gentle sensation of pressure and mild muscular soreness for 2–3 days following an adjustment. Over-the-counter pain relief and orthodontic relief wax are provided for complete comfort.',
      whenToContact: 'If a wire poke causes discomfort or a bracket becomes detached, the clinic provides immediate same-day adjustment support.'
    },

    // Cost Factors in Rohtak
    costDetails: {
      range: '₹22,000 – ₹75,000 (Case-dependent)',
      factors: [
        'Selected bracket system (Metal, Ceramic, Self-Ligating, or Lingual)',
        'Severity of dental and skeletal malocclusion',
        'Need for supplementary anchorage devices (TADs/micro-implants)',
        'Estimated treatment duration and number of active clinical visits'
      ],
      emiAvailable: true,
      emiNote: 'Flexible interest-free monthly installment plans available across the active treatment timeline.'
    },

    // Why Choose Shubh Dental Clinic
    whyChooseClinic: [
      'Led by Prof. Dr. S. K. Yadav — MDS Orthodontics (Ex-PGI Chandigarh) with 20+ years of dedicated orthodontic experience.',
      'Over 5,000+ successfully completed orthodontic cases in Haryana and NCR.',
      'Full spectrum of appliance technologies: Metal, Ceramic, Damon®, Lingual, and Clear Aligners under one roof.',
      'Sterilization protocols meeting international hospital-grade barrier standards.'
    ],

    // Case Study Context
    caseStudy: {
      title: 'Fixed Metal & Ceramic Braces Realignment',
      context: 'Adolescent patient with severe anterior crowding and high canine impaction.',
      duration: '14 months active treatment',
      beforeSrc: '/metal-before.png',
      afterSrc: '/metal-after.png',
      outcome: 'Ideal Class I canine and molar relationship with broad aesthetic smile arc.'
    },

    testimonials: [
      {
        name: 'Pooja Malik',
        location: 'Model Town, Rohtak',
        treatment: 'Ceramic Braces',
        review: 'Dr. S. K. Yadav explained every stage of my braces journey clearly. Having ceramic braces made me feel completely comfortable at college, and my teeth straightened out in just 14 months.'
      },
      {
        name: 'Aman Sharma',
        location: 'Rohtak',
        treatment: 'Self-Ligating Braces',
        review: 'I had severe crowding and thought extractions were unavoidable. Dr. Yadav used Damon braces and created a wide, straight smile with minimal pain. Truly the best orthodontist in Haryana.'
      }
    ],

    // Comprehensive FAQs
    faqs: [
      {
        q: 'At what age should a child first see an orthodontist?',
        a: 'The Indian Orthodontic Society and American Association of Orthodontists recommend an initial orthodontic evaluation by age 7. At this age, first adult molars and incisors have erupted, allowing Dr. Yadav to identify subtle developmental crossbites or jaw discrepancies early.'
      },
      {
        q: 'Can adults get braces, and is there an age limit?',
        a: 'There is no upper age limit for orthodontic treatment. As long as your gums and alveolar bone are healthy, teeth can be moved safely at 20, 40, or 60 years of age. Approximately 35% of our orthodontic patients are adults.'
      },
      {
        q: 'Do braces hurt when they are put on?',
        a: 'No. Bracket bonding is completely painless and requires no injections or drilling. You will feel a feeling of pressure beginning 4–6 hours after placement as teeth begin their gentle movement, which resolves within 3–4 days.'
      },
      {
        q: 'How often will I need to visit the clinic for adjustments?',
        a: 'Most patients visit every 4 to 6 weeks for a brief 20-minute appointment to change elastic modules, evaluate movement progress, and advance archwires.'
      },
      {
        q: 'Will I need teeth extracted for braces?',
        a: 'Not always. We prioritize non-extraction treatment whenever facial aesthetics and bone dimensions permit. Extractions are only recommended in cases of severe severe crowding or bimaxillary protrusion where facial harmony would be compromised otherwise.'
      },
      {
        q: 'Why are retainers mandatory after braces are removed?',
        a: 'Periodontal fibers and surrounding jawbone require time to reorganize and stabilize around the newly aligned teeth. Without retainers, natural physiological forces can cause teeth to shift over time.'
      }
    ],

    // Related Treatments (Semantic Internal Links)
    relatedTreatments: [
      { slug: 'invisalign-clear-aligners', title: 'Invisalign® Clear Aligners', anchor: 'Explore certified Invisalign clear aligners' },
      { slug: 'skyalign-clear-aligners', title: 'SkyAlign™ In-House Aligners', anchor: 'Learn about in-house 3D printed SkyAlign aligners' },
      { slug: 'lingual-braces', title: 'Lingual (Hidden) Braces', anchor: 'View completely invisible lingual braces' },
      { slug: 'teeth-whitening', title: 'Teeth Whitening', anchor: 'Discover post-braces professional teeth whitening' }
    ],

    // Local Clinical Context
    localRelevance: {
      clinicName: 'Shubh Orthodontic & Dental Clinic',
      locality: 'Opposite Swami Nitanand School, Delhi Bypass Chowk, Rohtak',
      serviceArea: 'Rohtak, Sonepat, Panipat, Bhiwani, Jhajjar, and Delhi NCR',
      phone: '+91 86850 48414',
      hours: 'Mon – Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM'
    }
  },

  // ── 02. INVISALIGN & CLEAR ALIGNERS ─────────────────────────────────────────
  {
    id: 'invisalign-clear-aligners',
    slug: 'invisalign-clear-aligners',
    title: 'Invisalign & Clear Aligners',
    shortTitle: 'Invisalign® Aligners',
    category: 'Orthodontics',
    icon: '✨',
    h1: 'Invisalign® Clear Aligners in Rohtak',
    subtitle: 'Discreet, Wire-Free Orthodontic Treatment by Certified Specialist Prof. Dr. S. K. Yadav',
    heroValueProp: 'Straighten your teeth with custom-engineered, virtually invisible SmartTrack® aligners planned using 3D digital ClinCheck® software.',
    primaryKeyword: 'Invisalign Rohtak',
    secondaryKeywords: ['clear aligners Rohtak', 'invisible braces', 'Invisalign cost Rohtak', 'certified Invisalign provider Haryana'],

    doctor: 'Prof. Dr. S. K. Yadav',
    doctorTitle: 'Certified Invisalign® Provider & Chief Orthodontist',
    doctorSlug: 'dr-sk-yadav',
    doctorPhoto: '/dr-sk-yadav.webp',
    doctorDegree: 'BDS, MDS (Orthodontics — PGI Chandigarh), Certified Invisalign Provider',
    medicalReviewDate: '2026-06-15',

    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Treatments', url: '/#services' },
      { name: 'Orthodontics', url: '/#services' },
      { name: 'Invisalign Clear Aligners', url: '/treatments/invisalign-clear-aligners' }
    ],

    quickFacts: {
      duration: '6–18 months (depending on malocclusion complexity)',
      visits: 'Every 6–8 weeks for progress check and new tray batches',
      anaesthesia: 'None required (removable clear medical polymer)',
      recovery: 'Zero downtime; minor initial pressure with new trays',
      candidacy: 'Mild to severe crowding, spacing, overbites, and relapse cases',
      longevity: 'Permanent with Vivera® or custom retention protocols'
    },

    overview: 'Invisalign® is a world-renowned clear aligner system utilizing a proprietary series of custom-fabricated, BPA-free medical polyurethane aligners (SmartTrack®) to gently and progressively reposition teeth. Unlike conventional fixed brackets, aligners are completely removable for eating, brushing, and significant social events. As a Certified Invisalign Provider in Haryana, Prof. Dr. S. K. Yadav uses high-resolution digital scanning and 3D ClinCheck® computer modeling to map out the microscopic movement of every single tooth before aligner fabrication begins.',

    conditions: [
      'Mild to severe dental crowding and tooth rotation',
      'Diastema (gaps and irregular spacing between teeth)',
      'Overbite, underbite, and moderate open bite configurations',
      'Orthodontic relapse following earlier adolescent braces',
      'Patients needing aesthetic alignment without interfering with corporate or social lifestyles'
    ],

    candidacy: {
      idealFor: 'Disciplined adults and teenagers motivated to wear their clear trays for the required 20–22 hours every day.',
      notIdealFor: 'Patients with severe skeletal discrepancies requiring orthognathic surgical intervention, or individuals who cannot commit to the mandatory 20–22 hour daily wear protocol.'
    },

    alternatives: [
      {
        name: 'SkyAlign™ In-House Clear Aligners',
        description: 'Our clinic-manufactured 3D printed aligner system utilizing German polymers, offering comparable aesthetic results with reduced laboratory turnaround times.'
      },
      {
        name: 'Ceramic Tooth-Colored Braces',
        description: 'Recommended when patient compliance with removable appliances is a concern and fixed continuous movement is advantageous.'
      }
    ],

    optionsComparison: {
      type: 'matrix',
      title: 'Invisalign® vs. Traditional Orthodontics',
      items: [
        {
          name: 'Invisalign® Clear Aligners',
          bestFor: 'Discreet, lifestyle-friendly tooth straightening',
          visibility: 'Virtually invisible SmartTrack® clear polymer',
          removability: '100% removable for meals and hygiene',
          dietaryRestrictions: 'None (remove trays before eating)',
          comfort: 'Smooth laser-trimmed margins; no wire irritation'
        },
        {
          name: 'Fixed Ceramic Braces',
          bestFor: 'Continuous non-compliance dependent correction',
          visibility: 'Subtle tooth-colored brackets with visible wire',
          removability: 'Fixed to teeth 24/7 until completion',
          dietaryRestrictions: 'Must avoid hard, sticky, or chewy foods',
          comfort: 'Requires orthodontic wax during initial adjustment'
        }
      ]
    },

    processSteps: [
      {
        step: 1,
        title: 'Digital Intraoral 3D Scanning',
        description: 'A comfortable, optical scan captures a 3D digital replica of your teeth and gingival margins in under 5 minutes without messy putty impressions.'
      },
      {
        step: 2,
        title: '3D ClinCheck® Treatment Simulation',
        description: 'Dr. Yadav customizes your treatment plan using advanced biomechanical software, generating a 3D video simulation of your smile progression.'
      },
      {
        step: 3,
        title: 'Precision Aligners Manufacturing',
        description: 'Your custom series of calibrated SmartTrack® aligners are fabricated using multi-layer medical polymer technology for optimal flexibility and control.'
      },
      {
        step: 4,
        title: 'Attachment Placement & Tray Delivery',
        description: 'Small, tooth-colored composite grips (attachments) are bonded to specific teeth to facilitate complex rotational vectors, and your initial aligner sets are provided.'
      },
      {
        step: 5,
        title: 'Sequential Tray Changes & Progress Reviews',
        description: 'You switch to a fresh set of aligners every 1–2 weeks at home, visiting our Rohtak clinic every 6–8 weeks to confirm tracking.'
      },
      {
        step: 6,
        title: 'Vivera® Retention Finishing',
        description: 'Following active alignment, custom Vivera® retainers are delivered to lock in your smile permanently.'
      }
    ],

    technology: [
      {
        name: '3D Digital Optical Scanning',
        purpose: 'Generates high-precision digital dental models with zero impression distortion.'
      },
      {
        name: 'ClinCheck® Biomechanical 3D Planning',
        purpose: 'Simulates exact root and crown movement paths with millimeter precision.'
      },
      {
        name: 'SmartTrack® Multi-Layer Medical Polymer',
        purpose: 'Provides constant, gentle force delivery while maintaining superior optical clarity.'
      }
    ],

    benefits: {
      functional: [
        'Enables unrestricted brushing and flossing, maintaining peak periodontal health throughout treatment',
        'Eliminates soft tissue lacerations or emergency appointments from broken brackets and sharp wires',
        'Improves bite alignment and chewing performance with planned occlusal contact points'
      ],
      aesthetic: [
        'Virtually undetectable during everyday conversation, meetings, and photography',
        'Allows you to see your final smile result digitally before treatment even starts'
      ]
    },

    risksAndLimitations: [
      'Strict compliance requirement: Must be worn 20 to 22 hours per day to achieve planned results.',
      'Small tooth-colored composite attachments may be required on select teeth during treatment.',
      'Aligners must be removed when drinking hot, sugary, or colored beverages (tea, coffee, red wine) to avoid warping or staining.'
    ],

    durationAndTimeline: {
      consultationToBonding: '1 week from initial digital scan to ClinCheck approval and aligner delivery.',
      activeTreatment: '6–18 months depending on malocclusion complexity.',
      retentionPhase: 'Full-time wear for 3–6 months, transitioning to nightly wear thereafter.'
    },

    painAndComfort: {
      anaesthesia: 'Completely non-invasive; no anaesthesia required.',
      expectedSensation: 'A mild sensation of snug pressure during the first 24–48 hours of wearing a new tray set, signifying healthy biological tooth movement.',
      whenToContact: 'If an attachment debonds or a tray feels improperly seated, our clinic team provides prompt assistance.'
    },

    costDetails: {
      range: '₹75,000 – ₹2,50,000 (Based on package: Express, Lite, or Comprehensive)',
      factors: [
        'Number of aligner stages required to achieve the goal',
        'Single arch vs. dual arch treatment',
        'Need for supplementary aesthetic attachments or interproximal reduction (IPR)'
      ],
      emiAvailable: true,
      emiNote: 'Easy 0% interest monthly installment plans available.'
    },

    whyChooseClinic: [
      'Certified Invisalign Provider in Haryana with extensive clinical orthodontic case experience.',
      'Led by Prof. Dr. S. K. Yadav (Ex-PGI Chandigarh) ensuring specialist-driven biomechanical oversight, not automated technician planning.',
      'Flexible consultation hubs available across Rohtak, Delhi, Gurgaon, and Panipat by appointment.'
    ],

    caseStudy: {
      title: 'Invisalign® Clear Aligner Digital Smile Realignment',
      context: 'Adult patient seeking discreet crowding, overjet, and bite realignment.',
      duration: '10 months (20 aligner stages)',
      beforeSrc: '/skyalign-before.png',
      afterSrc: '/skyalign-after.png',
      outcome: 'Complete crowding resolution and broad aesthetic dental arch without visible brackets.'
    },

    testimonials: [
      {
        name: 'Ritu Hooda',
        location: 'Rohtak',
        treatment: 'Invisalign Comprehensive',
        review: 'Working as a teacher, I could never wear visible metal braces. Dr. S. K. Yadav planned my Invisalign treatment and my teeth straightened out in 10 months. Nobody at work even noticed I was wearing aligners!'
      }
    ],

    faqs: [
      {
        q: 'How many hours a day must I wear my aligners?',
        a: 'Aligners must be worn for 20 to 22 hours per day. They should only be removed during meals, drinking hot beverages, and daily oral hygiene routines.'
      },
      {
        q: 'Can I eat and drink with Invisalign on?',
        a: 'You can drink plain cool water with aligners on. For all other food and drinks, remove the aligners to prevent thermal warping, sugar entrapment, and staining.'
      },
      {
        q: 'Is Invisalign as effective as regular braces?',
        a: 'Yes. In the hands of an experienced orthodontist like Prof. Dr. S. K. Yadav, modern Invisalign SmartTrack systems achieve clinical results equivalent to traditional braces for the vast majority of mild, moderate, and complex cases.'
      },
      {
        q: 'How do I clean and maintain my aligner trays?',
        a: 'Rinse your aligners with lukewarm water and gently brush them using a soft-bristled toothbrush. Avoid hot water, which can distort the medical thermoplastic.'
      }
    ],

    relatedTreatments: [
      { slug: 'skyalign-clear-aligners', title: 'SkyAlign™ Clear Aligners', anchor: 'Compare with in-house SkyAlign aligners' },
      { slug: 'dental-braces', title: 'Dental Braces', anchor: 'Explore fixed orthodontic braces' },
      { slug: 'teeth-whitening', title: 'Teeth Whitening', anchor: 'View professional teeth whitening options' }
    ],

    localRelevance: {
      clinicName: 'Shubh Orthodontic & Dental Clinic',
      locality: 'Opposite Swami Nitanand School, Delhi Bypass Chowk, Rohtak',
      serviceArea: 'Rohtak, Sonepat, Panipat, Bhiwani, Jhajjar, and Delhi NCR',
      phone: '+91 86850 48414',
      hours: 'Mon – Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM'
    }
  },

  // ── 03. SKYALIGN™ IN-HOUSE CLEAR ALIGNERS ──────────────────────────────────
  {
    id: 'skyalign-clear-aligners',
    slug: 'skyalign-clear-aligners',
    title: 'SkyAlign™ Clear Aligners',
    shortTitle: 'SkyAlign™ Aligners',
    category: 'Orthodontics',
    icon: '💎',
    h1: 'SkyAlign™ In-House Clear Aligners in Rohtak',
    subtitle: 'Direct Specialist 3D-Printed Clear Aligners Engineered In-House by Prof. Dr. S. K. Yadav',
    heroValueProp: 'High-precision invisible aligners crafted with German medical polymers in our own clinic laboratory, eliminating international transit delays and third-party markups.',
    primaryKeyword: 'SkyAlign clear aligners Rohtak',
    secondaryKeywords: ['in-house clear aligners', 'affordable invisible braces Rohtak', '3D printed aligners Haryana'],

    doctor: 'Prof. Dr. S. K. Yadav',
    doctorTitle: 'Chief Orthodontist & SkyAlign™ Lead',
    doctorSlug: 'dr-sk-yadav',
    doctorPhoto: '/dr-sk-yadav.webp',
    doctorDegree: 'BDS, MDS (Orthodontics — PGI Chandigarh), Fellow WFO (USA)',
    medicalReviewDate: '2026-06-15',

    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Treatments', url: '/#services' },
      { name: 'Orthodontics', url: '/#services' },
      { name: 'SkyAlign Clear Aligners', url: '/treatments/skyalign-clear-aligners' }
    ],

    quickFacts: {
      duration: '6–14 months (case-dependent)',
      visits: 'Every 6–8 weeks',
      anaesthesia: 'None required',
      recovery: 'Zero downtime',
      candidacy: 'Mild to moderate crowding, spacing, and orthodontic relapse',
      longevity: 'Permanent with retainers'
    },

    overview: 'SkyAlign™ is our clinic’s proprietary, in-house digital clear aligner system, conceptualized and monitored end-to-end by Prof. Dr. S. K. Yadav. Using high-resolution intraoral scanning, dedicated orthodontic staging CAD software, and medical-grade German thermoforming polymers, each aligner is fabricated right here in our clinic lab. By eliminating overseas shipping and international third-party lab fees, SkyAlign™ delivers specialist-quality orthodontic results at significantly accessible price points with rapid replacement turnaround times.',

    conditions: [
      'Mild to moderate anterior teeth crowding',
      'Spacing and gaps between front teeth',
      'Post-braces orthodontic relapse',
      'Rotated front incisors and canines'
    ],

    candidacy: {
      idealFor: 'Adults and teenagers seeking an affordable, discreet clear aligner option designed and overseen directly by their treating orthodontist.',
      notIdealFor: 'Severe skeletal jaw discrepancies or complex surgical orthodontic cases requiring fixed skeletal anchorage.'
    },

    alternatives: [
      {
        name: 'Invisalign® Clear Aligners',
        description: 'Recommended for highly complex multi-plane rotations or deep skeletal malocclusions requiring specialized SmartForce features.'
      },
      {
        name: 'Ceramic Fixed Braces',
        description: 'Recommended when fixed 24/7 continuous guidance is required without patient compliance dependency.'
      }
    ],

    optionsComparison: {
      type: 'cards',
      title: 'Why Patients Choose SkyAlign™',
      items: [
        {
          name: 'Direct Specialist Engineering',
          description: 'Every movement is calculated personally by Prof. Dr. S. K. Yadav (MDS Orthodontics), not an anonymous overseas lab technician.'
        },
        {
          name: 'German Medical-Grade Polymer',
          description: 'Utilizes ultra-clear, crack-resistant thermoforming materials offering high transparency and predictable elastic recovery.'
        },
        {
          name: 'Same-Day Replacement Support',
          description: 'If you ever misplace or damage an aligner tray, our in-house lab can re-print and thermoform a replacement within hours.'
        }
      ]
    },

    processSteps: [
      {
        step: 1,
        title: 'High-Definition Intraoral Scan',
        description: 'Digital optical capture of your dentition with sub-millimeter precision.'
      },
      {
        step: 2,
        title: 'Orthodontic Staging & Simulation',
        description: 'Prof. Dr. S. K. Yadav programs biological tooth movements in safe, progressive increments.'
      },
      {
        step: 3,
        title: '3D Printing & Thermoforming',
        description: 'High-resolution dental resin models are printed in-house and thermoformed using premium German clear polymers.'
      },
      {
        step: 4,
        title: 'Tray Delivery & Progress Monitoring',
        description: 'Receive your custom sets with comprehensive wear guidelines, checking in every 6–8 weeks.'
      }
    ],

    technology: [
      {
        name: 'Intraoral Digital Scanner',
        purpose: 'Direct 3D optical capture without messy impression materials.'
      },
      {
        name: 'High-Resolution Dental 3D Printers',
        purpose: 'Micron-level physical model replication for snug, precise aligner adaptation.'
      },
      {
        name: 'Pressure Thermoforming Unit',
        purpose: 'Ensures uniform material thickness and optimal tooth-gripping adaptation.'
      }
    ],

    benefits: {
      functional: [
        'Maintains full chewing freedom with removable convenience during all meals',
        'Facilitates normal oral hygiene without risk of bracket-related gingivitis'
      ],
      aesthetic: [
        'Ultra-clear aesthetic appearance allows confident smiling throughout treatment',
        'No metal reflections or bulky brackets'
      ]
    },

    risksAndLimitations: [
      'Requires strict patient commitment to wear aligners 20–22 hours daily.',
      'Must be removed before consuming hot beverages or staining foods.'
    ],

    durationAndTimeline: {
      consultationToBonding: '2–4 days from digital scan to tray delivery.',
      activeTreatment: '6–14 months depending on individual case complexity.',
      retentionPhase: 'Custom in-house retainers provided post-treatment.'
    },

    painAndComfort: {
      anaesthesia: 'None needed.',
      expectedSensation: 'Light pressure for 24 hours when advancing to a new aligner tray.',
      whenToContact: 'Contact clinic immediately if an aligner tray is cracked or lost for a fast reprint.'
    },

    costDetails: {
      range: '₹40,000 – ₹1,10,000 (Case-dependent)',
      factors: [
        'Number of aligner steps required',
        'Complexity of tooth rotations',
        'Single arch vs dual arch'
      ],
      emiAvailable: true,
      emiNote: 'Interest-free installment options available across the treatment span.'
    },

    whyChooseClinic: [
      'In-house fabrication cuts out commercial lab middleman markups.',
      'PGI Chandigarh specialist clinical oversight on every single case.',
      'Rapid turnaround for replacements and refinements.'
    ],

    caseStudy: {
      title: 'SkyAlign™ Precision In-House Clear Aligners',
      context: 'Severe anterior crowding treated with custom German bio-compatible 3D-printed aligners.',
      duration: '8 months active aligners',
      beforeSrc: '/skyalign-before.png',
      afterSrc: '/skyalign-after.png',
      outcome: 'Even aesthetic arch curve, ideal bite alignment, and corrected midline symmetry.'
    },

    testimonials: [
      {
        name: 'Vikas Sheoran',
        location: 'Rohtak',
        treatment: 'SkyAlign™ Aligners',
        review: 'SkyAlign gave me the exact same clear aligner treatment as expensive imported brands at nearly half the price. Dr. Yadav handled everything in-house, and my teeth look incredible.'
      }
    ],

    faqs: [
      {
        q: 'How does SkyAlign differ from Invisalign?',
        a: 'Both systems use high-grade clear medical polymers to move teeth in increments. The primary difference is that SkyAlign is designed and 3D-printed in our clinic’s dedicated laboratory, eliminating international transit delays and overhead, while keeping clinical design directly in the hands of Prof. Dr. S. K. Yadav.'
      },
      {
        q: 'What happens if I lose a SkyAlign tray?',
        a: 'Because your digital scan and 3D print files are stored directly in our in-house lab, we can print a replacement aligner tray within hours.'
      }
    ],

    relatedTreatments: [
      { slug: 'invisalign-clear-aligners', title: 'Invisalign® Clear Aligners', anchor: 'Explore Invisalign aligners' },
      { slug: 'dental-braces', title: 'Dental Braces', anchor: 'Learn about fixed braces' }
    ],

    localRelevance: {
      clinicName: 'Shubh Orthodontic & Dental Clinic',
      locality: 'Opposite Swami Nitanand School, Delhi Bypass Chowk, Rohtak',
      serviceArea: 'Rohtak, Sonepat, Panipat, Bhiwani, Jhajjar, and Delhi NCR',
      phone: '+91 86850 48414',
      hours: 'Mon – Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM'
    }
  },

  // ── 04. DENTAL IMPLANTS ────────────────────────────────────────────────────
  {
    id: 'dental-implants',
    slug: 'dental-implants',
    title: 'Dental Implants',
    shortTitle: 'Dental Implants',
    category: 'Implantology',
    icon: '🦴',
    h1: 'Dental Implants in Rohtak',
    subtitle: 'Permanent, Bio-Integrated Titanium Tooth Replacements by Certified Implantologists',
    heroValueProp: 'Replace single, multiple, or full arches of missing teeth with medical-grade titanium implants that fuse permanently with your jawbone, restoring 100% natural bite strength and aesthetics.',
    primaryKeyword: 'dental implants Rohtak',
    secondaryKeywords: ['tooth implant cost Rohtak', 'best implant dentist Rohtak', 'full mouth dental implants Haryana', 'Osstem implants'],

    doctor: 'Prof. Dr. S. K. Yadav & Dr. Achla Bharti Yadav',
    doctorTitle: 'Senior Implantology & Oral Rehabilitation Team',
    doctorSlug: 'dr-sk-yadav',
    doctorPhoto: '/dr-sk-yadav.webp',
    doctorDegree: 'MDS (PGI Chandigarh & PGI Rohtak), Certified Osstem® Implantologists',
    medicalReviewDate: '2026-06-15',

    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Treatments', url: '/#services' },
      { name: 'Implantology', url: '/#services' },
      { name: 'Dental Implants', url: '/treatments/dental-implants' }
    ],

    quickFacts: {
      duration: '3–6 months for complete osseointegration & crown placement',
      visits: '3–4 clinical sessions across the healing timeline',
      anaesthesia: 'Local anaesthesia (painless computer-guided placement)',
      recovery: '2–4 days mild post-surgical soft tissue healing',
      candidacy: 'Adults with missing teeth and adequate jawbone volume',
      longevity: '25+ years to lifetime with standard oral hygiene'
    },

    overview: 'A dental implant is a precision-machined titanium post surgically positioned into the alveolar jawbone, serving as an artificial tooth root. Through a biological process called osseointegration, living bone cells bond directly to the micro-textured titanium surface, establishing a rigid, permanent foundation. A custom-milled abutment and natural zirconia crown are then secured on top. At Shubh Orthodontic & Dental Clinic in Rohtak, our PGI-trained implant specialists utilize 3D CBCT digital imaging and guided surgical templates to place implants with millimeter accuracy, safeguarding adjacent anatomical nerves and sinus cavities.',

    conditions: [
      'Single missing tooth due to trauma, decay, or failed root canal',
      'Multiple missing teeth in the posterior chewing zones',
      'Completely edentulous upper or lower arches requiring full-mouth rehabilitation',
      'Loose, unstable removable dentures causing gum irritation and speech problems',
      'Alveolar jawbone resorption occurring following tooth extraction'
    ],

    candidacy: {
      idealFor: 'Adults with good systemic health, healthy periodontal tissue, and sufficient jawbone height and density to support titanium fixtures.',
      notIdealFor: 'Uncontrolled diabetes, active radiation therapy to the head/neck, untreated advanced periodontitis, heavy chronic smoking without commitment to cessation, or growing children whose jawbones have not matured.'
    },

    alternatives: [
      {
        name: 'Fixed Dental Bridge',
        description: 'Replaces a missing tooth by shaving down and crowning adjacent healthy teeth. Faster initial delivery, but requires compromising natural tooth enamel and does not stop underlying bone loss.'
      },
      {
        name: 'Removable Partial or Full Dentures',
        description: 'An economical tooth replacement option, but rests entirely on soft gum tissue without anchoring into bone, providing lower biting force and requiring periodic relining.'
      }
    ],

    optionsComparison: {
      type: 'matrix',
      title: 'Implant Restoration Configurations',
      items: [
        {
          name: 'Single Tooth Implant',
          bestFor: 'Replacing one isolated missing tooth',
          adjacentTeeth: 'Preserved 100% untouched without grinding',
          bonePreservation: 'Stimulates local alveolar bone growth',
          lifespan: '25+ years / Lifetime'
        },
        {
          name: 'Implant-Supported Bridge',
          bestFor: 'Replacing 3–4 consecutive missing teeth',
          adjacentTeeth: 'Anchored solely to 2 titanium implant posts',
          bonePreservation: 'Preserves ridge volume across the gap',
          lifespan: '20+ years'
        },
        {
          name: 'Full Arch Fixed Rehabilitation (All-on-4 / All-on-6)',
          bestFor: 'Completely edentulous arches or failing teeth',
          adjacentTeeth: 'Replaces all 12–14 teeth on 4 to 6 implants',
          bonePreservation: 'Comprehensive full-arch bone stabilization',
          lifespan: 'Lifetime with routine maintenance'
        }
      ]
    },

    processSteps: [
      {
        step: 1,
        title: '3D CBCT Scan & Bone Density Mapping',
        description: 'A 3D cone-beam computed tomography scan evaluates bone height, width, mineral density, and precise anatomical nerve pathways.'
      },
      {
        step: 2,
        title: 'Virtual Computer-Guided Surgery Plan',
        description: 'Implant position, tilt angulation, and depth are calculated virtually to maximize bone contact and support the aesthetic crown.'
      },
      {
        step: 3,
        title: 'Painless Implant Placement',
        description: 'Under gentle local anaesthesia, the sterile titanium implant is positioned into the jawbone in a brief 30–45 minute session.'
      },
      {
        step: 4,
        title: 'Osseointegration Healing Phase',
        description: 'Over 3–4 months, jawbone cells grow around and fuse with the microscopic pores of the titanium fixture.'
      },
      {
        step: 5,
        title: 'Digital Impression & Abutment Connection',
        description: 'A digital intraoral scan captures the exact 3D orientation of the implant for custom CAD/CAM abutment and crown design.'
      },
      {
        step: 6,
        title: 'Permanent Zirconia Crown Delivery',
        description: 'The final, custom-shaded monolithic zirconia crown is securely torqued or cemented in place, restoring full chewing strength.'
      }
    ],

    technology: [
      {
        name: '3D CBCT Volumetric Imaging',
        purpose: 'Provides cross-sectional bone measurements and precise anatomical safety margins.'
      },
      {
        name: 'FDA-Approved Grade IV/V Titanium Implants',
        purpose: 'Biocompatible surface treatment (SLA) accelerates bone healing and long-term stability.'
      },
      {
        name: 'CAD/CAM Monolithic Zirconia Crowns',
        purpose: 'Delivers chip-resistant, highly aesthetic restorations that match natural tooth translucency.'
      }
    ],

    benefits: {
      functional: [
        'Restores 95–100% of natural chewing capacity — eat apples, nuts, and fibrous foods with total confidence',
        'Stops progressive facial bone resorption and prevents sunken cheek appearance',
        'Leaves adjacent healthy teeth completely intact with no cutting or crowning required'
      ],
      aesthetic: [
        'Emerges naturally from the gumline with lifelike contouring matching your real teeth',
        'Does not slip, click, or require messy adhesives like traditional dentures'
      ]
    },

    risksAndLimitations: [
      'Requires a minor surgical procedure and a biological healing window of 3–6 months for complete bone fusion.',
      'In cases of long-standing tooth loss with severe bone atrophy, a preliminary bone graft or sinus lift may be necessary.',
      'Meticulous home hygiene and routine cleanings are required to prevent peri-implantitis (inflammation around the implant).'
    ],

    durationAndTimeline: {
      consultationToBonding: 'Placement completed in 1 appointment (45 mins per implant).',
      activeTreatment: 'Osseointegration requires 3–4 months for mandibular (lower) and 4–6 months for maxillary (upper) jaw.',
      retentionPhase: 'Permanent lifetime restoration with 6-monthly checkups.'
    },

    painAndComfort: {
      anaesthesia: 'Performed under profound local anaesthesia; patients feel vibration and pressure, but zero sharp pain.',
      expectedSensation: 'Mild post-operative tenderness and minor swelling for 2–3 days, easily managed with prescribed analgesics.',
      whenToContact: 'Contact the clinic if swelling increases after day 3 or if medication does not relieve discomfort.'
    },

    costDetails: {
      range: '₹25,000 – ₹65,000 per implant (Including titanium fixture & crown)',
      factors: [
        'Selected implant brand system (Osstem®, Straumann®, Nobel Biocare®)',
        'Need for supplementary bone grafting or sinus augmentation',
        'Crown material (Porcelain-fused-to-metal vs. Full-contour monolithic Zirconia)'
      ],
      emiAvailable: true,
      emiNote: '0% EMI financing options available in simple monthly installments.'
    },

    whyChooseClinic: [
      'PGI-trained surgical team with over 3,000+ placed and restored implants.',
      'Computer-guided 3D CBCT digital planning ensuring safety and high success rates (98%+).',
      'Exclusive use of genuine, FDA-approved implant systems with authentic manufacturer traceability.'
    ],

    caseStudy: {
      title: 'Full Mouth Fixed Titanium Implant Rehabilitation',
      context: 'Complete edentulous arch restored with immediate fixed multi-unit titanium implant bridge.',
      duration: 'Fixed prosthesis loaded in 48 hours',
      beforeSrc: '/fullarch-before.webp',
      afterSrc: '/fullarch-after.webp',
      outcome: 'Full masticatory bite force restored with natural facial profile and aesthetic gum contouring.'
    },

    testimonials: [
      {
        name: 'Rajesh Chawla',
        location: 'Rohtak',
        treatment: 'Dental Implants',
        review: 'I had two missing teeth for over 5 years. Dr. S. K. Yadav placed two implants with zero pain during the surgery. Today I can eat everything comfortably just like natural teeth.'
      }
    ],

    faqs: [
      {
        q: 'Is dental implant surgery painful?',
        a: 'No. The procedure is performed under local anaesthesia that completely numbs the area. Most patients report that having an implant placed is more comfortable than having a tooth extracted.'
      },
      {
        q: 'How long do dental implants last?',
        a: 'With proper oral hygiene, regular dental check-ups, and non-smoking habits, dental implants can last 25 years to a lifetime.'
      },
      {
        q: 'Can I get an implant if I have bone loss?',
        a: 'Yes. If a 3D CBCT scan reveals deficient bone height or width, a localized bone graft or sinus lift can restore the necessary bone volume to place the implant safely.'
      },
      {
        q: 'What is the difference between a dental bridge and an implant?',
        a: 'A bridge requires grinding down two healthy neighboring teeth to anchor a false tooth, and does not stop bone loss underneath. An implant replaces the root directly in the bone without touching adjacent teeth.'
      }
    ],

    relatedTreatments: [
      { slug: 'same-day-dental-implants', title: 'Same-Day Dental Implants', anchor: 'Learn about immediate loading implants' },
      { slug: 'crowns-and-bridges', title: 'Crowns & Bridges', anchor: 'Explore dental crown options' },
      { slug: 'dentures-full-partial', title: 'Full & Partial Dentures', anchor: 'View implant-supported denture solutions' }
    ],

    localRelevance: {
      clinicName: 'Shubh Orthodontic & Dental Clinic',
      locality: 'Opposite Swami Nitanand School, Delhi Bypass Chowk, Rohtak',
      serviceArea: 'Rohtak, Sonepat, Panipat, Bhiwani, Jhajjar, and Delhi NCR',
      phone: '+91 86850 48414',
      hours: 'Mon – Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM'
    }
  },

  // ── 05. SAME-DAY DENTAL IMPLANTS ───────────────────────────────────────────
  {
    id: 'same-day-dental-implants',
    slug: 'same-day-dental-implants',
    title: 'Same-Day Dental Implants',
    shortTitle: 'Same-Day Implants',
    category: 'Implantology',
    icon: '⚡',
    h1: 'Same-Day Dental Implants in Rohtak',
    subtitle: 'Immediate Loading Implant Protocols: Extract, Implant & Provisional Tooth in One Visit',
    heroValueProp: 'Replace a fractured or failing tooth with a titanium implant and custom provisional crown in a single clinical session, subject to case-specific primary bone stability.',
    primaryKeyword: 'same day dental implants Rohtak',
    secondaryKeywords: ['immediate loading implants', 'teeth in a day Rohtak', 'single visit tooth implant'],

    doctor: 'Prof. Dr. S. K. Yadav',
    doctorTitle: 'Chief Implantologist & Orthodontic Specialist',
    doctorSlug: 'dr-sk-yadav',
    doctorPhoto: '/dr-sk-yadav.webp',
    doctorDegree: 'BDS, MDS (Orthodontics — PGI Chandigarh), Certified Implantologist',
    medicalReviewDate: '2026-06-15',

    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Treatments', url: '/#services' },
      { name: 'Implantology', url: '/#services' },
      { name: 'Same-Day Dental Implants', url: '/treatments/same-day-dental-implants' }
    ],

    quickFacts: {
      duration: '1 surgical session (provisional crown delivered within 24–48 hours)',
      visits: '2–3 visits (surgery, provisional check, and permanent crown after 3 months)',
      anaesthesia: 'Local anaesthesia',
      recovery: '3–5 days soft tissue recovery with soft diet protocol',
      candidacy: 'Patients with good bone density undergoing single or front-tooth extractions',
      longevity: 'Permanent lifetime titanium fixture'
    },

    overview: 'Same-Day Dental Implants (also known as immediate loading implantology) is an advanced surgical technique where a titanium implant is placed immediately into the fresh extraction socket, and a provisional aesthetic crown is secured during the same appointment window. This eliminates the traditional 3-month waiting period with a visible gap or removable flipper. However, clinical candidacy requires sufficient native bone density to achieve high primary insertion torque (≥35 Ncm), ensuring micro-stability while osseointegration proceeds.',

    conditions: [
      'Failing front tooth fractured at or below the gum line',
      'Non-restorable front or premolar tooth requiring extraction',
      'Desire to avoid wearing a removable temporary plastic denture in public',
      'Patients with strong bone density seeking single-stage surgical intervention'
    ],

    candidacy: {
      idealFor: 'Patients with healthy, uninfected surrounding bone who achieve high primary implant stability during surgical placement.',
      notIdealFor: 'Active acute periapical infections/abscesses at the extraction site, severe bone resorption requiring extensive block grafting, or chronic heavy bruxism (night-time teeth grinding).'
    },

    alternatives: [
      {
        name: 'Conventional Delayed Dental Implants',
        description: 'Recommended when severe socket infection or bone deficiency requires extraction and healing for 8–12 weeks prior to implant insertion.'
      },
      {
        name: 'Temporary Adhesive Bridge (Maryland Bridge)',
        description: 'A non-surgical temporary bonded tooth placed while traditional implants heal.'
      }
    ],

    optionsComparison: {
      type: 'matrix',
      title: 'Same-Day vs. Traditional Implants',
      items: [
        {
          name: 'Same-Day Immediate Implants',
          bestFor: 'Aesthetic zone front teeth with sound bone',
          timeline: 'Implant + provisional crown in 1 day',
          surgeries: '1 single surgical visit',
          dietRule: 'Strict soft diet during initial 6–8 weeks'
        },
        {
          name: 'Conventional Delayed Implants',
          bestFor: 'Infected sockets or low initial bone density',
          timeline: 'Implant placed after 2–3 months socket healing',
          surgeries: '2-stage protocol',
          dietRule: 'Standard healing diet'
        }
      ]
    },

    processSteps: [
      {
        step: 1,
        title: '3D CBCT Evaluation',
        description: 'High-resolution scan measures apical bone volume above the extraction socket to verify immediate loading feasibility.'
      },
      {
        step: 2,
        title: 'Atraumatic Extraction',
        description: 'The failing tooth is gently luxated without damaging the delicate buccal bone plate.'
      },
      {
        step: 3,
        title: 'Immediate Tapered Implant Placement',
        description: 'A specialized tapered implant is anchored into the apical bone with high insertion torque.'
      },
      {
        step: 4,
        title: 'Provisional Aesthetic Crown Attachment',
        description: 'A customized, out-of-occlusion temporary crown is attached so you never leave the clinic with an empty gap.'
      },
      {
        step: 5,
        title: 'Permanent Zirconia Restoration',
        description: 'After 3–4 months of full bone fusion, the permanent monolithic zirconia crown is delivered.'
      }
    ],

    technology: [
      {
        name: 'Tapered Deep-Thread Titanium Implants',
        purpose: 'Maximizes primary mechanical stability in fresh extraction sockets.'
      },
      {
        name: '3D Guided Computer Stents',
        purpose: 'Directs ideal 3D angulation to ensure aesthetic screw emergence.'
      }
    ],

    benefits: {
      functional: [
        'Single surgical intervention reduces cumulative healing time and appointment visits',
        'Preserves natural gingival papillae and prevents gum recession around the missing tooth'
      ],
      aesthetic: [
        'Zero days spent with a visible missing front tooth — walk out with a complete smile',
        'Natural emergence profile shaped by the custom provisional crown'
      ]
    },

    risksAndLimitations: [
      'Candidacy is strictly case-dependent based on initial bone torque values measured during surgery.',
      'Patient must commit to a strict soft-food diet for 6–8 weeks (no biting hard foods directly with the temporary crown).'
    ],

    durationAndTimeline: {
      consultationToBonding: 'Extraction, implant, and provisional crown in 1 day.',
      activeTreatment: 'Final permanent crown placed after 3–4 months of osseointegration.',
      retentionPhase: 'Routine long-term maintenance.'
    },

    painAndComfort: {
      anaesthesia: 'Local anaesthesia ensures a completely comfortable surgical session.',
      expectedSensation: 'Mild soreness for 2–4 days managed with routine analgesics.',
      whenToContact: 'Contact clinic if the provisional crown feels loose or high on biting.'
    },

    costDetails: {
      range: '₹35,000 – ₹75,000 (Includes extraction, immediate implant, provisional & final crown)',
      factors: [
        'Implant brand system',
        'Need for supplementary socket bone particulate grafting',
        'Final crown material'
      ],
      emiAvailable: true,
      emiNote: '0% EMI payment options available.'
    },

    whyChooseClinic: [
      'PGI-trained surgical expertise in immediate extraction socket preservation.',
      '3D CBCT on-site digital assessment for precise torque predictability.'
    ],

    caseStudy: {
      title: 'Same-Day Immediate Loading Dental Implant',
      context: 'Immediate post-extraction implant placement with instant aesthetic temporary crown.',
      duration: '24 hours total turnaround',
      beforeSrc: '/samedayimplants-before.png',
      afterSrc: '/samedayimplants-after.png',
      outcome: 'Zero gap period, painless flapless surgery, and immediate smile restoration.'
    },

    testimonials: [
      {
        name: 'Virender Singh',
        location: 'Rohtak',
        treatment: 'Same-Day Front Tooth Implant',
        review: 'I broke my front tooth in an accident and panicked. Dr. S. K. Yadav removed the root and placed an implant with a temporary tooth the very same day. Incredible clinical precision.'
      }
    ],

    faqs: [
      {
        q: 'Can every patient get a same-day implant?',
        a: 'No. Same-day implants require good native bone quality to anchor the implant firmly at the time of extraction. Dr. Yadav will evaluate your 3D CBCT scan to confirm if your case meets the safety criteria.'
      },
      {
        q: 'Can I chew normally with the new temporary tooth on day one?',
        a: 'You must stick to a soft diet and avoid biting directly with the temporary front tooth during the first 6–8 weeks, allowing the bone to fuse undisturbed.'
      }
    ],

    relatedTreatments: [
      { slug: 'dental-implants', title: 'Conventional Dental Implants', anchor: 'Explore traditional dental implants' },
      { slug: 'crowns-and-bridges', title: 'Crowns & Bridges', anchor: 'View crown restorations' }
    ],

    localRelevance: {
      clinicName: 'Shubh Orthodontic & Dental Clinic',
      locality: 'Opposite Swami Nitanand School, Delhi Bypass Chowk, Rohtak',
      serviceArea: 'Rohtak, Sonepat, Panipat, Bhiwani, Jhajjar, and Delhi NCR',
      phone: '+91 86850 48414',
      hours: 'Mon – Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM'
    }
  },

  // ── 06. ROOT CANAL TREATMENT (RCT) ─────────────────────────────────────────
  {
    id: 'root-canal-treatment',
    slug: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    shortTitle: 'Root Canal (RCT)',
    category: 'General',
    icon: '🔬',
    h1: 'Root Canal Treatment (RCT) in Rohtak',
    subtitle: 'Painless Rotary Endodontics to Relieve Pain & Preserve Your Natural Tooth',
    heroValueProp: 'Eliminate deep dental infection, preserve your natural tooth root structure, and prevent extraction using modern rotary instrumentation and apex-locator guided precision.',
    primaryKeyword: 'root canal treatment Rohtak',
    secondaryKeywords: ['painless RCT Rohtak', 'single sitting RCT', 'root canal cost Rohtak', 'best dentist for RCT in Rohtak'],

    doctor: 'Dr. Achla Bharti Yadav',
    doctorTitle: 'Senior Dental Specialist & Oral Pathologist',
    doctorSlug: 'dr-achita-yadav',
    doctorPhoto: '/dr-achita-yadav.webp',
    doctorDegree: 'BDS, MDS (PGI Rohtak), Senior Clinical Specialist',
    medicalReviewDate: '2026-06-15',

    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Treatments', url: '/#services' },
      { name: 'General & Restorative', url: '/#services' },
      { name: 'Root Canal Treatment', url: '/treatments/root-canal-treatment' }
    ],

    quickFacts: {
      duration: '1–2 sessions (often completed in a single comfortable sitting)',
      visits: '1–2 visits for root canal + 1 visit for crown restoration',
      anaesthesia: 'Local anaesthesia (painless rotary protocol)',
      recovery: '1–2 days mild chewing sensitivity',
      candidacy: 'Deep decay, pulpitis, dental abscesses, or trauma',
      longevity: '15+ years to lifetime with a protective crown'
    },

    overview: 'Root Canal Treatment (Endodontic Therapy) is a specialized procedure designed to save a natural tooth whose internal pulp chamber — containing sensitive nerves and blood vessels — has become inflamed, infected, or necrotic due to deep decay, repeated dental procedures, or structural trauma. The infected tissue is gently extirpated, the microscopic root canals are shaped and sterilized with bio-compatible irrigants, and the space is hermetically sealed with gutta-percha. At Shubh Dental Clinic, Dr. Achla Bharti Yadav performs modern rotary endodontics with digital apex locators, ensuring thorough cleaning and virtually painless care.',

    conditions: [
      'Persistent, throbbing tooth pain, especially when lying down',
      'Prolonged sensitivity to hot or cold foods and liquids',
      'Pain upon biting or applying pressure to a specific tooth',
      'Localized gum swelling, tenderness, or a pimple-like drainage fistula',
      'Darkening or discolouration of an injured tooth'
    ],

    candidacy: {
      idealFor: 'Teeth with infected or irreversibly inflamed pulp that possess sufficient sound coronal and root structure to support post-treatment restoration.',
      notIdealFor: 'Teeth with extensive vertical root fractures below the bone level, or teeth with severe bone loss where periodontal support is entirely destroyed.'
    },

    alternatives: [
      {
        name: 'Tooth Extraction + Dental Implant',
        description: 'If the tooth structure is fractured beyond restoration, gentle extraction followed by a titanium dental implant provides permanent replacement.'
      }
    ],

    optionsComparison: {
      type: 'matrix',
      title: 'Single-Sitting vs. Multi-Sitting RCT',
      items: [
        {
          name: 'Single-Sitting Rotary RCT',
          bestFor: 'Vital teeth with acute pulpitis and minimal periapical pus',
          duration: '45–60 minutes in 1 appointment',
          comfort: 'Immediate pain relief in a single visit'
        },
        {
          name: 'Multi-Sitting RCT with Medication',
          bestFor: 'Severe chronic periapical abscesses or active exudate',
          duration: '2 appointments with calcium hydroxide disinfection',
          comfort: 'Complete resolution of deep infection before sealing'
        }
      ]
    },

    processSteps: [
      {
        step: 1,
        title: 'Diagnostic Digital Radiography',
        description: 'High-resolution digital X-rays determine root canal anatomy, curvature, and the extent of periapical bone infection.'
      },
      {
        step: 2,
        title: 'Painless Local Anaesthesia',
        description: 'The tooth and surrounding tissues are completely numbed for absolute patient comfort.'
      },
      {
        step: 3,
        title: 'Access & Pulp Removal',
        description: 'A micro-opening is created through the tooth crown to access the pulp chamber and remove inflamed or necrotic nerve tissue.'
      },
      {
        step: 4,
        title: 'Rotary Canal Shaping & Disinfection',
        description: 'Flexible nickel-titanium rotary files clean and shape the canals while ultrasonic irrigation flushes out microscopic bacteria.'
      },
      {
        step: 5,
        title: 'Hermetic Gutta-Percha Sealing',
        description: 'Canals are filled and sealed with biocompatible gutta-percha points and antimicrobial resin sealer.'
      },
      {
        step: 6,
        title: 'Core Buildup & Protective Crown',
        description: 'The tooth crown is reinforced with a composite core and capped with a custom ceramic or zirconia crown to prevent fracture.'
      }
    ],

    technology: [
      {
        name: 'Rotary Endodontic Motor',
        purpose: 'Provides smooth, rapid canal cleaning with reduced post-op sensitivity.'
      },
      {
        name: 'Electronic Apex Locator',
        purpose: 'Determines the exact microscopic root terminus with 98% accuracy.'
      },
      {
        name: 'Ultrasonic Canal Irrigation',
        purpose: 'Penetrates lateral micro-canals for thorough bacterial elimination.'
      }
    ],

    benefits: {
      functional: [
        'Permanently relieves severe toothache and stops infection from spreading into the jawbone',
        'Preserves your natural tooth root, maintaining natural biting sensation and bone stability'
      ],
      aesthetic: [
        'Restores the tooth to full aesthetic harmony with a matching zirconia crown'
      ]
    },

    risksAndLimitations: [
      'A treated tooth loses its internal blood supply and can become brittle over time; a protective crown is strongly recommended to prevent tooth fracture.',
      'Mild post-treatment tenderness on chewing is normal for 24–48 hours as the surrounding ligament settles.'
    ],

    durationAndTimeline: {
      consultationToBonding: 'RCT completed in 1–2 visits (45–60 mins each).',
      activeTreatment: 'Crown measurement and placement completed within 3–5 days following RCT.',
      retentionPhase: 'Routine 6-monthly monitoring.'
    },

    painAndComfort: {
      anaesthesia: 'Administered under profound local anaesthesia; patients feel no sharp pain during treatment.',
      expectedSensation: 'Immediate relief from acute throbbing toothache; mild tenderness on hard chewing for 1–2 days.',
      whenToContact: 'Contact clinic if swelling occurs or if discomfort persists beyond 3 days.'
    },

    costDetails: {
      range: '₹3,000 – ₹8,500 for RCT (Crown cost varies: ₹3,500 – ₹15,000 depending on ceramic/zirconia type)',
      factors: [
        'Anterior (front) vs. Premolar vs. Molar tooth (1 to 4 root canals)',
        'Presence of calcified canals or curved roots requiring re-treatment',
        'Selected crown restoration material'
      ],
      emiAvailable: true,
      emiNote: 'Financing support available for combined RCT and restorative plans.'
    },

    whyChooseClinic: [
      'PGI Rohtak trained specialist expertise in conservative tooth preservation.',
      'Advanced rotary endodontics ensuring rapid, comfortable, single-sitting procedures.',
      'High long-term success rates with digital apex locator precision.'
    ],

    testimonials: [
      {
        name: 'Sunil Dahiya',
        location: 'Rohtak',
        treatment: 'Single-Sitting RCT & Zirconia Crown',
        review: 'I had unbearable toothache for 3 days and was terrified of root canals. Dr. Achla Bharti Yadav completed the whole procedure in one visit with zero pain. Outstanding specialist care.'
      }
    ],

    faqs: [
      {
        q: 'Is a root canal painful?',
        a: 'No. With modern local anaesthesia and rotary instrumentation, a root canal is no more uncomfortable than having a regular dental filling placed. The procedure actually eliminates the intense pain caused by the infected tooth.'
      },
      {
        q: 'Why do I need a crown after a root canal?',
        a: 'Once the infected pulp is removed, the tooth loses its internal blood supply and becomes more brittle over time. A custom crown encases the tooth, preventing it from cracking under normal chewing forces.'
      },
      {
        q: 'How many visits does a root canal take?',
        a: 'Most standard root canal treatments are completed in a single 45–60 minute session. Complex cases with heavy drainage or severe infection may take two visits to ensure thorough bacterial elimination.'
      }
    ],

    relatedTreatments: [
      { slug: 'crowns-and-bridges', title: 'Crowns & Bridges', anchor: 'View protective dental crown options' },
      { slug: 'dental-implants', title: 'Dental Implants', anchor: 'Explore tooth replacement if tooth cannot be saved' },
      { slug: 'cosmetic-laser-fillings', title: 'Laser Composite Fillings', anchor: 'Learn about tooth-colored fillings' }
    ],

    localRelevance: {
      clinicName: 'Shubh Orthodontic & Dental Clinic',
      locality: 'Opposite Swami Nitanand School, Delhi Bypass Chowk, Rohtak',
      serviceArea: 'Rohtak, Sonepat, Panipat, Bhiwani, Jhajjar, and Delhi NCR',
      phone: '+91 86850 48414',
      hours: 'Mon – Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM'
    }
  },

  // ── 07. CROWNS & BRIDGES ───────────────────────────────────────────────────
  {
    id: 'crowns-and-bridges',
    slug: 'crowns-and-bridges',
    title: 'Crowns & Bridges',
    shortTitle: 'Crowns & Bridges',
    category: 'Restorative',
    icon: '👑',
    h1: 'Dental Crowns & Bridges in Rohtak',
    subtitle: 'High-Strength Zirconia, E-Max & CAD/CAM Ceramic Restorations',
    heroValueProp: 'Restore fractured, root-canal treated, or missing teeth with custom-milled monolithic Zirconia and E-max ceramic restorations carrying up to 10-year warranty coverage.',
    primaryKeyword: 'dental crowns Rohtak',
    secondaryKeywords: ['zirconia crown cost Rohtak', 'dental bridge Rohtak', 'E-max ceramic caps', 'tooth cap price'],

    doctor: 'Dr. Achla Bharti Yadav',
    doctorTitle: 'Senior Specialist & Prosthetic Team',
    doctorSlug: 'dr-achita-yadav',
    doctorPhoto: '/dr-achita-yadav.webp',
    doctorDegree: 'BDS, MDS (PGI Rohtak)',
    medicalReviewDate: '2026-06-15',

    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Treatments', url: '/#services' },
      { name: 'Restorative', url: '/#services' },
      { name: 'Crowns & Bridges', url: '/treatments/crowns-and-bridges' }
    ],

    quickFacts: {
      duration: '2 appointments over 3–5 days',
      visits: 'Visit 1: Preparation & 3D scan | Visit 2: Final cementation',
      anaesthesia: 'Local anaesthesia during tooth shaping',
      recovery: 'Minimal; mild sensitivity for 24–48 hours',
      candidacy: 'Broken teeth, post-RCT teeth, missing teeth (bridge)',
      longevity: '10–20+ years depending on material selected'
    },

    overview: 'A dental crown (tooth cap) is a custom-crafted restoration that completely encases a damaged, heavily filled, or root-canal treated tooth to restore its structural integrity, biting power, and natural appearance. A dental bridge replaces one or more missing teeth by spanning the space and anchoring securely onto crowns placed on adjacent teeth. At Shubh Dental Clinic, Dr. Achla Bharti Yadav utilizes CAD/CAM digital scanners and monolithic German Zirconia to create metal-free restorations that blend seamlessly with your natural tooth shade.',

    conditions: [
      'Root-canal treated teeth requiring fracture protection',
      'Cracked, fractured, or severely worn down teeth',
      'Large, failing fillings compromising remaining tooth enamel',
      'One or more missing teeth requiring fixed bridge replacement',
      'Severely discoloured or misshapen teeth needing aesthetic coverage'
    ],

    candidacy: {
      idealFor: 'Patients requiring durable reinforcement for broken teeth or fixed tooth replacement.',
      notIdealFor: 'Teeth with active untreated periodontal mobility or insufficient sound tooth height above the gumline (may require crown lengthening first).'
    },

    alternatives: [
      {
        name: 'Dental Implants',
        description: 'For missing teeth, single implants replace the tooth without needing to shave down adjacent healthy teeth for bridge abutments.'
      },
      {
        name: 'Porcelain Veneers',
        description: 'For front teeth with intact structure seeking cosmetic improvements only.'
      }
    ],

    optionsComparison: {
      type: 'matrix',
      title: 'Crown Material Options Compared',
      items: [
        {
          name: 'Monolithic Zirconia (CAD/CAM)',
          bestFor: 'Molars and heavy chewing zones',
          strength: 'Extremely high (1200+ MPa)',
          aesthetics: 'Natural tooth translucency; 100% metal-free',
          warranty: 'Up to 10–15 Year Warranty'
        },
        {
          name: 'Lithium Disilicate (E-Max Ceramic)',
          bestFor: 'Front teeth in aesthetic smile zones',
          strength: 'High (450–500 MPa)',
          aesthetics: 'Unmatched optical translucency matching enamel',
          warranty: '5–10 Year Warranty'
        },
        {
          name: 'Porcelain-Fused-to-Metal (PFM)',
          bestFor: 'Budget-friendly posterior crowns',
          strength: 'High metal coping support',
          aesthetics: 'Good tooth color (may show dark line at gumline over time)',
          warranty: 'Standard clinical durability'
        }
      ]
    },

    processSteps: [
      {
        step: 1,
        title: 'Tooth Preparation & Assessment',
        description: 'Under local anaesthesia, the tooth is conservatively shaped to create room for the crown margins.'
      },
      {
        step: 2,
        title: 'Digital Intraoral 3D Scanning',
        description: 'An optical scan captures micron-level margins, bite alignment, and opposing contacts.'
      },
      {
        step: 3,
        title: 'Shade Matching & Temporary Placement',
        description: 'Exact shade and translucency are matched using VITA shade guides; a temporary crown is placed.'
      },
      {
        step: 4,
        title: 'CAD/CAM Laboratory Milling',
        description: 'The crown is milled from a solid block of zirconia or E-max ceramic and sintered in a high-temperature furnace.'
      },
      {
        step: 5,
        title: 'Bite Balancing & Permanent Cementation',
        description: 'The finished crown is checked for fit and contact, then permanently bonded with bio-compatible dental cement.'
      }
    ],

    technology: [
      {
        name: 'Digital Intraoral 3D Scanner',
        purpose: 'Eliminates impression gagging and ensures margin accuracy.'
      },
      {
        name: 'CAD/CAM Precision Milling',
        purpose: 'Sub-millimeter margin adaptation prevents micro-leakage and recurrent decay.'
      }
    ],

    benefits: {
      functional: [
        'Restores 100% biting and chewing capacity for root-canal treated teeth',
        'Prevents catastrophic tooth fractures that would otherwise require extraction'
      ],
      aesthetic: [
        'Custom color-matched to natural enamel with zero dark metal borders',
        'Restores proper facial height and smile harmony'
      ]
    },

    risksAndLimitations: [
      'Requires conservative removal of a thin outer layer of enamel during tooth preparation.',
      'Mild temporary temperature sensitivity for 24–48 hours post-cementation is normal.'
    ],

    durationAndTimeline: {
      consultationToBonding: 'Preparation on Day 1; final crown cemented on Day 3–5.',
      activeTreatment: '2 visits total.',
      retentionPhase: 'Routine checkups every 6 months.'
    },

    painAndComfort: {
      anaesthesia: 'Local anaesthesia ensures preparation is completely pain-free.',
      expectedSensation: 'Mild gum tenderness around the margin for 1–2 days.',
      whenToContact: 'Contact clinic if your bite feels high when chewing.'
    },

    costDetails: {
      range: '₹3,500 – ₹16,000 per crown (Based on PFM, Premium Zirconia, or E-Max)',
      factors: [
        'Selected material (PFM, High-Translucency Zirconia, E-Max)',
        'Warranty duration (5-Year, 10-Year, or 15-Year official card)',
        'Single unit crown vs. multi-unit bridge'
      ],
      emiAvailable: true,
      emiNote: 'EMI payment support available for multi-unit crown and bridge treatments.'
    },

    whyChooseClinic: [
      'PGI Rohtak specialist oversight ensuring precise biological margins.',
      'Direct CAD/CAM digital scanning for comfortable, gag-free impressions.',
      'Genuine manufacturer warranty cards provided with all premium Zirconia crowns.'
    ],

    testimonials: [
      {
        name: 'Monika Sehrawat',
        location: 'Rohtak',
        treatment: 'Zirconia Crowns',
        review: 'I got two zirconia crowns after root canal treatment at Shubh Dental Clinic. The fit is so natural that I cannot tell which teeth are capped. Highly recommend Dr. Achla!'
      }
    ],

    faqs: [
      {
        q: 'How long do zirconia crowns last?',
        a: 'With proper oral hygiene and regular dental checkups, monolithic zirconia crowns typically last 15 to 20+ years. We provide official warranty cards for our premium zirconia crowns.'
      },
      {
        q: 'What is the difference between a crown and a bridge?',
        a: 'A crown caps an existing natural tooth that is broken or root-canal treated. A bridge replaces one or more completely missing teeth by connecting multiple crowns together across the gap.'
      }
    ],

    relatedTreatments: [
      { slug: 'root-canal-treatment', title: 'Root Canal Treatment', anchor: 'Learn about root canal therapy' },
      { slug: 'dental-implants', title: 'Dental Implants', anchor: 'Compare with dental implants' },
      { slug: 'porcelain-veneers', title: 'Porcelain Veneers', anchor: 'Explore cosmetic veneers' }
    ],

    localRelevance: {
      clinicName: 'Shubh Orthodontic & Dental Clinic',
      locality: 'Opposite Swami Nitanand School, Delhi Bypass Chowk, Rohtak',
      serviceArea: 'Rohtak, Sonepat, Panipat, Bhiwani, Jhajjar, and Delhi NCR',
      phone: '+91 86850 48414',
      hours: 'Mon – Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM'
    }
  },

  // ── 08. PORCELAIN VENEERS ──────────────────────────────────────────────────
  {
    id: 'porcelain-veneers',
    slug: 'porcelain-veneers',
    title: 'Porcelain Veneers',
    shortTitle: 'Porcelain Veneers',
    category: 'Cosmetic',
    icon: '✨',
    h1: 'Porcelain Veneers in Rohtak',
    subtitle: 'Ultra-Thin E-Max Ceramic Laminates for Long-Lasting Smile Transformations',
    heroValueProp: 'Transform chipped, discoloured, worn, or gapped front teeth with custom-crafted, wafer-thin German porcelain shells bonded to the front enamel.',
    primaryKeyword: 'porcelain veneers Rohtak',
    secondaryKeywords: ['dental veneers cost Rohtak', 'E-max veneers Haryana', 'smile makeover veneers', 'cosmetic dentist Rohtak'],

    doctor: 'Dr. Achla Bharti Yadav',
    doctorTitle: 'Cosmetic & Aesthetic Dental Specialist',
    doctorSlug: 'dr-achita-yadav',
    doctorPhoto: '/dr-achita-yadav.webp',
    doctorDegree: 'BDS, MDS (PGI Rohtak)',
    medicalReviewDate: '2026-06-15',

    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Treatments', url: '/#services' },
      { name: 'Cosmetic Dentistry', url: '/#services' },
      { name: 'Porcelain Veneers', url: '/treatments/porcelain-veneers' }
    ],

    quickFacts: {
      duration: '2–3 appointments over 5–7 days',
      visits: 'Visit 1: Smile design & prep | Visit 2: Bonding',
      anaesthesia: 'Local anaesthesia for micro-preparation',
      recovery: 'Minimal; no downtime',
      candidacy: 'Stained, chipped, spaced, or slightly misaligned front teeth',
      longevity: '10–15+ years with standard care'
    },

    overview: 'Porcelain veneers are ultra-thin (0.3mm to 0.7mm), custom-milled shells of high-translucency dental ceramic (such as lithium disilicate E-Max) that are permanently bonded to the facial surface of front teeth. They offer a comprehensive cosmetic solution for stubborn intrinsic stains, chipped incisal edges, microdontia (peg laterals), and minor spacing gaps. At Shubh Dental Clinic, Dr. Achla Bharti Yadav uses 3D digital smile design principles to preview your smile aesthetics before conservative enamel preparation begins.',

    conditions: [
      'Severe intrinsic enamel staining unresponsive to chemical whitening (fluorosis, tetracycline)',
      'Chipped, fractured, or worn incisal tooth edges',
      'Uneven gaps (diastema) and irregular tooth proportions',
      'Slightly rotated or peg-shaped front lateral incisors'
    ],

    candidacy: {
      idealFor: 'Adults with healthy gums and sound enamel seeking long-lasting smile enhancement.',
      notIdealFor: 'Severe teeth grinding (bruxism) without a nightguard, severe skeletal malocclusion (requires braces first), or teeth with insufficient remaining enamel.'
    },

    alternatives: [
      {
        name: 'Direct Composite Bonding',
        description: 'An economical, single-visit tooth reshaping option using composite resin (more prone to staining over 3–5 years than porcelain).'
      },
      {
        name: 'Invisalign® Clear Aligners',
        description: 'Recommended when tooth alignment and bite issues are the primary concern rather than tooth shape or intrinsic color.'
      }
    ],

    optionsComparison: {
      type: 'matrix',
      title: 'Porcelain Veneers vs. Composite Bonding',
      items: [
        {
          name: 'E-Max Porcelain Veneers',
          bestFor: 'Definitive long-term smile transformation',
          material: 'Lithium Disilicate Ceramic',
          stainResistance: '100% impervious to coffee, tea & smoking',
          durability: '10–15+ years'
        },
        {
          name: 'Composite Resin Bonding',
          bestFor: 'Minor isolated chips or single-day repairs',
          material: 'Nanohybrid Composite Resin',
          stainResistance: 'Requires periodic polishing',
          durability: '4–7 years'
        }
      ]
    },

    processSteps: [
      {
        step: 1,
        title: 'Aesthetic Smile Analysis',
        description: 'Photographic evaluation and digital smile design to define ideal tooth length, width, and smile arc.'
      },
      {
        step: 2,
        title: 'Micro-Enamel Preparation',
        description: 'Conservative removal of 0.3–0.5mm of outer enamel under local anaesthesia to accommodate veneer thickness.'
      },
      {
        step: 3,
        title: 'Digital 3D Optical Scan',
        description: 'High-precision scan sent to our master ceramic laboratory for custom E-Max milling.'
      },
      {
        step: 4,
        title: 'Precision Adhesive Bonding',
        description: 'Veneers are tried in for shade validation, then permanently bonded using light-cured resin cement.'
      }
    ],

    technology: [
      {
        name: 'E-Max Lithium Disilicate Ceramic',
        purpose: 'Provides natural enamel-like light refraction and high bond strength.'
      },
      {
        name: 'Light-Cured Resin Cements',
        purpose: 'Ensures permanent chemical adhesion to natural enamel.'
      }
    ],

    benefits: {
      functional: [
        'Restores worn incisal edges and protects compromised front tooth enamel'
      ],
      aesthetic: [
        'Permanently brightens tooth shade with ceramic that never discolors over time',
        'Corrects proportions, gaps, and tooth shapes in as few as 2 visits'
      ]
    },

    risksAndLimitations: [
      'Requires irreversible conservative removal of a thin layer of enamel.',
      'Patients who clench or grind their teeth must wear a protective custom nightguard to prevent chipping.'
    ],

    durationAndTimeline: {
      consultationToBonding: '2 appointments over 5–7 days.',
      activeTreatment: 'Immediate results upon bonding.',
      retentionPhase: 'Nightguard recommended for longevity.'
    },

    painAndComfort: {
      anaesthesia: 'Local anaesthesia ensures preparation is completely comfortable.',
      expectedSensation: 'Mild sensitivity to cold drinks for 2–3 days post-bonding.',
      whenToContact: 'Contact clinic if bite feels uneven.'
    },

    costDetails: {
      range: '₹12,000 – ₹25,000 per veneer',
      factors: [
        'Number of teeth involved (typically 4, 6, or 8 front teeth in the smile zone)',
        'Custom ceramic layering requirements for complex characterization'
      ],
      emiAvailable: true,
      emiNote: 'Flexible EMI plans available for full smile makeover veneer packages.'
    },

    whyChooseClinic: [
      'PGI Rohtak trained cosmetic specialist ensuring conservative biological preparation.',
      'Direct master ceramic laboratory partnerships for lifelike shade blending.'
    ],

    caseStudy: {
      title: 'Ultra-Thin German Porcelain Veneers Smile Makeover',
      context: 'Patient with tetracycline staining, fluorosis, and enamel wear.',
      duration: '2 clinical sittings (5 days)',
      beforeSrc: '/procelian veneers -before.png',
      afterSrc: '/procelian veneers -after.png',
      outcome: 'Luminous Hollywood smile with natural translucency and micro-texture.'
    },

    testimonials: [
      {
        name: 'Neha Verma',
        location: 'Rohtak',
        treatment: 'E-Max Porcelain Veneers',
        review: 'I had severe fluorosis stains on my front teeth that whitening could never fix. Dr. Achla placed 6 E-max veneers and completely changed my smile. It looks so natural and boosted my confidence completely.'
      }
    ],

    faqs: [
      {
        q: 'Do porcelain veneers stain over time?',
        a: 'No. Dental porcelain is non-porous and highly glazed, making it completely resistant to staining from coffee, tea, wine, and food spices.'
      },
      {
        q: 'How much tooth is shaved for veneers?',
        a: 'Very minimal. Modern veneer techniques require removing only 0.3mm to 0.5mm of outer enamel, keeping the procedure conservative.'
      }
    ],

    relatedTreatments: [
      { slug: 'smile-makeover', title: 'Digital Smile Makeover', anchor: 'Explore full smile makeovers' },
      { slug: 'composite-bonding', title: 'Composite Bonding', anchor: 'Compare with composite bonding' },
      { slug: 'teeth-whitening', title: 'Teeth Whitening', anchor: 'View professional teeth whitening' }
    ],

    localRelevance: {
      clinicName: 'Shubh Orthodontic & Dental Clinic',
      locality: 'Opposite Swami Nitanand School, Delhi Bypass Chowk, Rohtak',
      serviceArea: 'Rohtak, Sonepat, Panipat, Bhiwani, Jhajjar, and Delhi NCR',
      phone: '+91 86850 48414',
      hours: 'Mon – Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM'
    }
  },

  // ── 09. 3RD MOLAR WISDOM TOOTH SURGERY ─────────────────────────────────────
  {
    id: 'wisdom-tooth-surgery',
    slug: 'wisdom-tooth-surgery',
    title: 'Wisdom Tooth Surgery',
    shortTitle: 'Wisdom Tooth Surgery',
    category: 'General',
    icon: '🦷',
    h1: 'Wisdom Tooth Surgery in Rohtak',
    subtitle: 'Gentle, Atraumatic Removal of Impacted 3rd Molars by Oral Surgery Specialists',
    heroValueProp: 'Relieve chronic jaw pain, recurring pericoronitis infections, and protect adjacent molars with precision minor oral surgery performed under local anaesthesia.',
    primaryKeyword: 'wisdom tooth surgery Rohtak',
    secondaryKeywords: ['impacted wisdom tooth extraction', 'wisdom tooth pain relief', 'wisdom tooth removal cost Rohtak'],

    doctor: 'Dr. Achla Bharti Yadav',
    doctorTitle: 'Senior Specialist & Oral Pathologist',
    doctorSlug: 'dr-achita-yadav',
    doctorPhoto: '/dr-achita-yadav.webp',
    doctorDegree: 'BDS, MDS (PGI Rohtak)',
    medicalReviewDate: '2026-06-15',

    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Treatments', url: '/#services' },
      { name: 'General & Restorative', url: '/#services' },
      { name: 'Wisdom Tooth Surgery', url: '/treatments/wisdom-tooth-surgery' }
    ],

    quickFacts: {
      duration: '30–45 minutes per tooth',
      visits: '1 surgical session + 1 brief suture removal check (day 7)',
      anaesthesia: 'Profound local anaesthesia',
      recovery: '3–5 days for initial swelling to subside',
      candidacy: 'Impacted, painful, or infected 3rd molars',
      longevity: 'Permanent elimination of infection and impaction risk'
    },

    overview: 'Third molars (wisdom teeth) are the last teeth to erupt in the mouth, usually between ages 17 and 25. In most individuals, modern human jawbones lack adequate space for them to emerge normally, causing them to become horizontally, mesially, or vertically impacted against the adjacent second molar or encased in jawbone. Impacted wisdom teeth frequently cause pericoronitis (gum flap infections), deep decay in neighboring healthy molars, cysts, and intense jaw stiffness. At Shubh Dental Clinic, Dr. Achla Bharti Yadav performs gentle, atraumatic micro-surgical extractions under local anaesthesia, ensuring rapid recovery and minimal post-operative discomfort.',

    conditions: [
      'Severe throbbing pain and swelling in the back of the lower or upper jaw',
      'Difficulty opening the mouth (trismus) or pain while swallowing',
      'Recurrent gum flap inflammation (pericoronitis) with pus discharge',
      'Food trapping causing deep cavities on the backside of the adjacent 2nd molar',
      'Cyst formation or bone damage identified on routine digital OPG X-rays'
    ],

    candidacy: {
      idealFor: 'Teens and adults experiencing symptoms or radiographic evidence of impaction, infection, or second molar threat.',
      notIdealFor: 'Completely erupted, fully functional, and easily cleanable wisdom teeth with healthy surrounding gums.'
    },

    alternatives: [
      {
        name: 'Operculectomy (Gum Flap Trimming)',
        description: 'A minor procedure to remove overlying gum tissue if the tooth is erupting vertically in good alignment with adequate jaw space.'
      }
    ],

    optionsComparison: {
      type: 'cards',
      title: 'Common Wisdom Tooth Impaction Types',
      items: [
        {
          name: 'Mesial Impaction (Angled Forward)',
          description: 'The tooth pushes directly against the root of the second molar. Most common type requiring timely removal to protect the healthy neighboring molar.'
        },
        {
          name: 'Horizontal Impaction (Lying Flat)',
          description: 'The tooth grows completely sideways inside the jawbone, requiring gentle sectioning for atraumatic removal.'
        },
        {
          name: 'Vertical or Distal Impaction',
          description: 'The tooth is trapped beneath bone or angled backward toward the ramus, causing chronic gum flap irritation.'
        }
      ]
    },

    processSteps: [
      {
        step: 1,
        title: 'Digital Panoramic X-Ray (OPG)',
        description: 'Evaluates root curvature, impaction depth, and the proximity of the inferior alveolar nerve.'
      },
      {
        step: 2,
        title: 'Profound Local Anaesthesia',
        description: 'Complete numbing of the surgical area ensures you feel zero sharp pain during the extraction.'
      },
      {
        step: 3,
        title: 'Gentle Sectioning & Tooth Removal',
        description: 'The tooth is gently sectioned into smaller segments to preserve surrounding jawbone and minimize surgical trauma.'
      },
      {
        step: 4,
        title: 'Socket Disinfection & Dissolvable Sutures',
        description: 'The socket is cleaned, dressed, and closed with fine sutures for fast, predictable tissue healing.'
      }
    ],

    technology: [
      {
        name: 'Digital Panoramic (OPG) Imaging',
        purpose: 'Provides safe nerve mapping and anatomical safety verification.'
      },
      {
        name: 'Micro-Surgical Rotary Sectioning Tools',
        purpose: 'Minimizes bone removal and post-operative swelling.'
      }
    ],

    benefits: {
      functional: [
        'Permanently cures recurring jaw infections, swollen gums, and bad breath',
        'Protects healthy second molars from irreversible root resorption and decay'
      ],
      aesthetic: [
        'Prevents crowding pressure on front teeth in orthodontic patients'
      ]
    },

    risksAndLimitations: [
      'Temporary post-operative facial swelling and mild jaw stiffness for 3–5 days.',
      'Soft food diet (ice cream, yogurt, khichdi) required for the first 3 days.',
      'Avoid vigorous spitting, rinsing, or using straws for 24 hours to protect the blood clot.'
    ],

    durationAndTimeline: {
      consultationToBonding: '30–45 minutes per surgical session.',
      activeTreatment: 'Initial swelling peaks at 48 hours and resolves by day 5.',
      retentionPhase: 'Suture removal / check at day 7 (if non-dissolvable sutures are used).'
    },

    painAndComfort: {
      anaesthesia: 'Profound local anaesthesia guarantees zero pain during the procedure.',
      expectedSensation: 'Feeling of vibration and pressure during sectioning, but no sharp discomfort. Prescribed pain relief and cold packs manage recovery smoothly.',
      whenToContact: 'Contact clinic if bleeding continues after 2 hours of biting on gauze or if severe throbbing pain starts on day 3 (dry socket).'
    },

    costDetails: {
      range: '₹3,500 – ₹9,500 per tooth (Based on simple vs. complex bone-impacted surgery)',
      factors: [
        'Depth of impaction (Soft tissue vs. Partial bony vs. Complete bony impaction)',
        'Proximity to mandibular nerve canal requiring specialized sectioning'
      ],
      emiAvailable: true,
      emiNote: 'Direct card and installment payment options available.'
    },

    whyChooseClinic: [
      'PGI Rohtak trained oral surgery specialist with gentle, atraumatic extraction technique.',
      'High-resolution digital diagnostics to ensure nerve safety and minimize recovery time.'
    ],

    testimonials: [
      {
        name: 'Deepak Hooda',
        location: 'Rohtak',
        treatment: 'Wisdom Tooth Surgery',
        review: 'I was very scared of wisdom tooth surgery after hearing horror stories. Dr. Achla Bharti Yadav took out my impacted wisdom tooth in 25 minutes without me feeling a single thing. Swelling was gone in 3 days!'
      }
    ],

    faqs: [
      {
        q: 'Is wisdom tooth extraction painful?',
        a: 'The extraction itself is completely painless due to local anaesthesia. After the numbness wears off, mild soreness and swelling are normal for 2–3 days and are well managed with prescribed medications and cold packs.'
      },
      {
        q: 'What foods can I eat after wisdom tooth surgery?',
        a: 'Stick to soft, cool foods for the first 3 days: yogurt, ice cream, smoothies (eaten with a spoon, NOT a straw), soft rice, khichdi, and soups. Avoid hot, spicy, or crunchy foods.'
      }
    ],

    relatedTreatments: [
      { slug: 'painless-extractions', title: 'Painless Extractions', anchor: 'Learn about routine extractions' },
      { slug: 'root-canal-treatment', title: 'Root Canal Treatment', anchor: 'Explore root canal care' }
    ],

    localRelevance: {
      clinicName: 'Shubh Orthodontic & Dental Clinic',
      locality: 'Opposite Swami Nitanand School, Delhi Bypass Chowk, Rohtak',
      serviceArea: 'Rohtak, Sonepat, Panipat, Bhiwani, Jhajjar, and Delhi NCR',
      phone: '+91 86850 48414',
      hours: 'Mon – Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM'
    }
  },

  // ── 10. TEETH WHITENING ────────────────────────────────────────────────────
  {
    id: 'teeth-whitening',
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    shortTitle: 'Teeth Whitening',
    category: 'Cosmetic',
    icon: '⚡',
    h1: 'Professional Teeth Whitening in Rohtak',
    subtitle: 'In-Office LED Laser & Custom Take-Home Professional Bleaching',
    heroValueProp: 'Brighten your smile by 6–8 shades in a single 45-minute clinical session using medical-grade whitening formulations with built-in desensitizing agents.',
    primaryKeyword: 'teeth whitening Rohtak',
    secondaryKeywords: ['laser teeth whitening cost Rohtak', 'dental bleaching Rohtak', 'smile brightening clinic'],

    doctor: 'Dr. Achla Bharti Yadav',
    doctorTitle: 'Cosmetic Specialist',
    doctorSlug: 'dr-achita-yadav',
    doctorPhoto: '/dr-achita-yadav.webp',
    doctorDegree: 'BDS, MDS (PGI Rohtak)',
    medicalReviewDate: '2026-06-15',

    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Treatments', url: '/#services' },
      { name: 'Cosmetic Dentistry', url: '/#services' },
      { name: 'Teeth Whitening', url: '/treatments/teeth-whitening' }
    ],

    quickFacts: {
      duration: '45–60 minutes in-clinic',
      visits: '1 single appointment (optional take-home booster tray)',
      anaesthesia: 'None required (non-invasive)',
      recovery: 'Immediate; avoid staining foods for 48 hours ("White Diet")',
      candidacy: 'Extrinsic yellowing from coffee, tea, smoking, or natural aging',
      longevity: '1–2 years with good oral hygiene maintenance'
    },

    overview: 'Professional teeth whitening uses medical-grade hydrogen or carbamide peroxide formulations to break down deep-set extrinsic and intrinsic chromogenic pigment molecules embedded within the tooth enamel and dentin matrix. Unlike over-the-counter whitening toothpastes or unregulated salon kits, clinical whitening is performed under dentist supervision with gum barrier protection to ensure safety, minimize sensitivity, and deliver predictable, uniform brightness. At Shubh Dental Clinic, we offer both rapid in-office LED-activated whitening and custom-molded take-home trays.',

    conditions: [
      'Yellow or brown staining from coffee, tea, turmeric, cola, or tobacco',
      'Age-related enamel thinning and dentin yellowing',
      'Desire for a brighter smile before weddings, interviews, or public events'
    ],

    candidacy: {
      idealFor: 'Adults with healthy teeth and gums seeking a significantly brighter, refreshed smile.',
      notIdealFor: 'Severe intrinsic tetracycline staining, extensive existing front crowns/veneers (which do not bleach), pregnant/nursing mothers, or active untreated gum disease.'
    },

    alternatives: [
      {
        name: 'Porcelain Veneers / Composite Bonding',
        description: 'Recommended for severe intrinsic grey staining or teeth with chips, gaps, and structural defects that bleaching alone cannot resolve.'
      }
    ],

    optionsComparison: {
      type: 'cards',
      title: 'Professional Whitening Options',
      items: [
        {
          name: 'In-Office LED Laser Whitening',
          description: 'Delivers 6–8 shades of brightness in one 45-minute appointment using high-concentration medical whitening gel activated by cold LED light.'
        },
        {
          name: 'Custom Take-Home Whitening Trays',
          description: 'Custom-molded clear trays with professional-strength gel for gradual, comfortable at-home whitening over 7–10 days.'
        }
      ]
    },

    processSteps: [
      {
        step: 1,
        title: 'Shade Matching & Oral Check',
        description: 'Pre-treatment shade is recorded on a VITA shade guide and gums are checked for health.'
      },
      {
        step: 2,
        title: 'Gingival Barrier Application',
        description: 'A light-cured protective barrier is applied along the gumline to protect soft tissue from gel contact.'
      },
      {
        step: 3,
        title: 'Medical Whitening Gel Application',
        description: 'Professional hydrogen peroxide gel is applied directly to the enamel surface.'
      },
      {
        step: 4,
        title: 'LED Light Activation',
        description: 'Cold LED light activates the gel in 3 consecutive 15-minute cycles, breaking down deep stains.'
      },
      {
        step: 5,
        title: 'Rinse & Desensitizing Varnish',
        description: 'Gel is washed away and a soothing remineralizing fluoride varnish is applied.'
      }
    ],

    technology: [
      {
        name: 'Cold-Light LED Whitening Accelerator',
        purpose: 'Activates hydrogen peroxide without thermal pulp irritation.'
      },
      {
        name: 'Potassium Nitrate Desensitizing Agents',
        purpose: 'Prevents post-whitening nerve sensitivity.'
      }
    ],

    benefits: {
      functional: [
        'Non-invasive cosmetic enhancement that preserves 100% of natural tooth structure'
      ],
      aesthetic: [
        'Lightens teeth by 6 to 8 shades in under an hour, restoring a youthful, healthy glow'
      ]
    },

    risksAndLimitations: [
      'Temporary tooth sensitivity to cold liquids for 24–48 hours post-treatment.',
      'Does not change the shade of existing ceramic crowns, composite fillings, or veneers.',
      'Must follow the "White Diet" (avoid tea, coffee, turmeric, red wine) for 48 hours.'
    ],

    durationAndTimeline: {
      consultationToBonding: '1 session (45–60 mins).',
      activeTreatment: 'Immediate results.',
      retentionPhase: 'Touch-up maintenance every 12–18 months.'
    },

    painAndComfort: {
      anaesthesia: 'None required.',
      expectedSensation: 'Occasional brief "zingers" (mild sensitivity) for 24 hours.',
      whenToContact: 'Contact clinic if sensitivity persists past 48 hours.'
    },

    costDetails: {
      range: '₹6,000 – ₹15,000 (In-office session vs. combined with take-home maintenance kit)',
      factors: [
        'In-office LED session vs. combination home tray kit',
        'Pre-whitening ultrasonic cleaning requirements'
      ],
      emiAvailable: false,
      emiNote: 'Direct payment via UPI, cards, or cash.'
    },

    whyChooseClinic: [
      'Supervised by PGI-trained specialists ensuring safe gum protection and zero enamel damage.',
      'Advanced formulations with built-in desensitizers for comfortable treatment.'
    ],

    caseStudy: {
      title: 'In-Office Clinical Laser Teeth Whitening',
      context: 'Severe tea/coffee staining and deep enamel discoloration.',
      duration: '45-minute single clinical sitting',
      beforeSrc: '/teeth whitening-before.png',
      afterSrc: '/teeth whitening-after.png',
      outcome: 'Enamel shade brightened by 8 VITA shades with zero post-op sensitivity.'
    },

    testimonials: [
      {
        name: 'Kavita Sindhu',
        location: 'Rohtak',
        treatment: 'In-Office LED Whitening',
        review: 'I got my teeth whitened before my brother’s wedding at Shubh Dental. In just 45 minutes, my teeth became noticeably brighter and whiter. No pain at all!'
      }
    ],

    faqs: [
      {
        q: 'Does teeth whitening damage tooth enamel?',
        a: 'No. Professional whitening formulations under dental supervision work by penetrating microscopic enamel pores to oxidize stain molecules without dissolving or removing enamel minerals.'
      },
      {
        q: 'How long do professional whitening results last?',
        a: 'Results typically last 1 to 2 years, depending on your dietary habits (coffee, tea, smoking) and daily oral hygiene.'
      }
    ],

    relatedTreatments: [
      { slug: 'teeth-cleaning-scaling', title: 'Teeth Cleaning & Scaling', anchor: 'Start with ultrasonic cleaning' },
      { slug: 'porcelain-veneers', title: 'Porcelain Veneers', anchor: 'View permanent porcelain veneers' }
    ],

    localRelevance: {
      clinicName: 'Shubh Orthodontic & Dental Clinic',
      locality: 'Opposite Swami Nitanand School, Delhi Bypass Chowk, Rohtak',
      serviceArea: 'Rohtak, Sonepat, Panipat, Bhiwani, Jhajjar, and Delhi NCR',
      phone: '+91 86850 48414',
      hours: 'Mon – Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM'
    }
  },

  // ── 11. TEETH CLEANING & SCALING ───────────────────────────────────────────
  {
    id: 'teeth-cleaning-scaling',
    slug: 'teeth-cleaning-scaling',
    title: 'Teeth Cleaning & Scaling',
    shortTitle: 'Cleaning & Scaling',
    category: 'General',
    icon: '🧹',
    h1: 'Teeth Cleaning & Ultrasonic Scaling in Rohtak',
    subtitle: 'Painless Ultrasonic Tartar Removal & Air Polishing for Healthy Gums',
    heroValueProp: 'Eliminate calcified tartar (calculus), harmful plaque bacteria, and surface stains to cure bleeding gums, stop bad breath, and protect your teeth from periodontal disease.',
    primaryKeyword: 'teeth cleaning Rohtak',
    secondaryKeywords: ['ultrasonic scaling Rohtak', 'dental cleaning cost', 'pyorrhoea treatment Rohtak'],

    doctor: 'Dr. Achla Bharti Yadav',
    doctorTitle: 'Senior Specialist & Oral Pathologist',
    doctorSlug: 'dr-achita-yadav',
    doctorPhoto: '/dr-achita-yadav.webp',
    doctorDegree: 'BDS, MDS (PGI Rohtak)',
    medicalReviewDate: '2026-06-15',

    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Treatments', url: '/#services' },
      { name: 'General Dentistry', url: '/#services' },
      { name: 'Teeth Cleaning & Scaling', url: '/treatments/teeth-cleaning-scaling' }
    ],

    quickFacts: {
      duration: '30–45 minutes',
      visits: '1 single appointment (recommended every 6 months)',
      anaesthesia: 'Not needed (painless ultrasonic vibration)',
      recovery: 'Immediate',
      candidacy: 'Recommended for all adults and children every 6 months',
      longevity: 'Maintains healthy gums with routine 6-monthly visits'
    },

    overview: 'Professional dental scaling and polishing is the essential preventive procedure that removes mineralized calculus (tartar), bacterial biofilm (plaque), and stubborn extrinsic stains from tooth surfaces above and below the gumline. Even with diligent brushing, saliva minerals cause plaque to calcify into hard tartar that cannot be removed at home. Left untreated, tartar causes gingivitis, bleeding gums, bad breath, and eventually periodontitis (bone loss). At Shubh Dental Clinic, Dr. Achla Bharti Yadav uses gentle piezoelectric ultrasonic scalers that vibrate calculus away safely without scratching or harming natural tooth enamel.',

    conditions: [
      'Bleeding gums while brushing or eating',
      'Yellow or brown tartar deposits visible around the gumline',
      'Chronic bad breath (halitosis) caused by bacterial buildup',
      'Swollen, tender, or receding gum margins',
      'General routine 6-month preventive check-up'
    ],

    candidacy: {
      idealFor: 'Everyone — recommended twice yearly for maintaining lifelong oral and systemic health.',
      notIdealFor: 'No contraindications. Patients on blood thinners should inform the dentist beforehand.'
    },

    alternatives: [
      {
        name: 'Deep Subgingival Scaling & Root Planing',
        description: 'For patients with advanced periodontitis (deep gum pockets and bone loss), deeper cleaning under local anaesthesia is recommended.'
      }
    ],

    optionsComparison: {
      type: 'cards',
      title: 'Preventive Cleaning Options',
      items: [
        {
          name: 'Standard Ultrasonic Scaling & Polishing',
          description: 'Removes supragingival plaque and tartar with high-frequency micro-vibrations and water spray, followed by fine prophy paste polishing.'
        },
        {
          name: 'Deep Periodontal Root Planing',
          description: 'Specialized cleaning for advanced gum pockets to smooth infected root surfaces and promote gum reattachment.'
        }
      ]
    },

    processSteps: [
      {
        step: 1,
        title: 'Oral & Periodontal Examination',
        description: 'Evaluation of gum health, bleeding indices, pocket depths, and tartar accumulation.'
      },
      {
        step: 2,
        title: 'Ultrasonic Piezoelectric Scaling',
        description: 'Gentle ultrasonic vibrations dislodge calcified tartar without scratching tooth enamel.'
      },
      {
        step: 3,
        title: 'Interdental Flossing & Staining Removal',
        description: 'Clearing contacts between teeth and removing tea, coffee, or smoking stains.'
      },
      {
        step: 4,
        title: 'Prophy Paste Polishing & Fluoride',
        description: 'Teeth surfaces are polished silky smooth to resist new bacterial attachment.'
      }
    ],

    technology: [
      {
        name: 'Piezoelectric Ultrasonic Scaler',
        purpose: 'Vibrates safely at 28–32 kHz to remove tartar without enamel wear.'
      }
    ],

    benefits: {
      functional: [
        'Stops gum bleeding and cures early gingivitis before it progresses to irreversible bone loss',
        'Eliminates bacterial colonies responsible for chronic bad breath'
      ],
      aesthetic: [
        'Instantly brightens teeth by clearing surface stains from tea, coffee, and food colors'
      ]
    },

    risksAndLimitations: [
      'Mild temporary cold sensitivity for 24–48 hours if heavy tartar was shielding exposed roots.',
      'Scaling does NOT thin, loosen, or damage healthy enamel when performed by a qualified dentist.'
    ],

    durationAndTimeline: {
      consultationToBonding: '30–45 minutes in 1 appointment.',
      activeTreatment: 'Immediate clean feeling.',
      retentionPhase: 'Repeat every 6 months.'
    },

    painAndComfort: {
      anaesthesia: 'Completely comfortable; no anaesthesia needed.',
      expectedSensation: 'Slight tickling or cool water sensation during treatment.',
      whenToContact: 'Contact clinic if gums continue bleeding after 3 days of improved brushing.'
    },

    costDetails: {
      range: '₹1,000 – ₹2,500',
      factors: [
        'Extent and severity of tartar buildup',
        'Routine preventive cleaning vs. deep subgingival scaling'
      ],
      emiAvailable: false,
      emiNote: 'Direct affordable payment.'
    },

    whyChooseClinic: [
      'PGI Rohtak trained dental team dedicated to gentle, non-aggressive preventive scaling.',
      'Autoclaved and sealed sterile instrumentation for complete patient safety.'
    ],

    testimonials: [
      {
        name: 'Amit Hooda',
        location: 'Rohtak',
        treatment: 'Ultrasonic Scaling',
        review: 'Very gentle cleaning! My gums stopped bleeding within two days of scaling at Shubh Dental. Dr. Achla explained how to brush correctly. Excellent experience.'
      }
    ],

    faqs: [
      {
        q: 'Does scaling cause teeth to become loose or create gaps?',
        a: 'No, this is a common myth. Scaling only removes harmful calcified tartar. If heavy tartar was holding already loose, bone-deficient teeth together, removing it reveals the true underlying condition, which can then be properly treated.'
      },
      {
        q: 'How often should I get my teeth cleaned professionally?',
        a: 'Dental associations worldwide recommend professional scaling every 6 months to prevent gum disease and detect cavities early.'
      }
    ],

    relatedTreatments: [
      { slug: 'teeth-whitening', title: 'Teeth Whitening', anchor: 'Combine with professional whitening' },
      { slug: 'cosmetic-laser-fillings', title: 'Laser Composite Fillings', anchor: 'View cavity fillings' }
    ],

    localRelevance: {
      clinicName: 'Shubh Orthodontic & Dental Clinic',
      locality: 'Opposite Swami Nitanand School, Delhi Bypass Chowk, Rohtak',
      serviceArea: 'Rohtak, Sonepat, Panipat, Bhiwani, Jhajjar, and Delhi NCR',
      phone: '+91 86850 48414',
      hours: 'Mon – Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM'
    }
  },

  // ── 12. SMILE MAKEOVER ─────────────────────────────────────────────────────
  {
    id: 'smile-makeover',
    slug: 'smile-makeover',
    title: 'Digital Smile Makeover',
    shortTitle: 'Smile Makeover',
    category: 'Cosmetic',
    icon: '✨',
    h1: 'Digital Smile Makeover in Rohtak',
    subtitle: 'Personalized Cosmetic & Functional Dental Rehabilitation',
    heroValueProp: 'Harmonize your teeth, gums, and facial aesthetics through a customized multi-disciplinary plan combining digital smile design, veneers, alignment, and whitening.',
    primaryKeyword: 'smile makeover Rohtak',
    secondaryKeywords: ['cosmetic smile design Rohtak', 'full smile reconstruction', 'best cosmetic dentist Rohtak'],

    doctor: 'Prof. Dr. S. K. Yadav & Dr. Achla Bharti Yadav',
    doctorTitle: 'Orthodontic & Aesthetic Dental Specialists',
    doctorSlug: 'dr-sk-yadav',
    doctorPhoto: '/dr-sk-yadav.webp',
    doctorDegree: 'MDS Orthodontics (PGI Chd) & MDS Oral Pathology (PGI Rohtak)',
    medicalReviewDate: '2026-06-15',

    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Treatments', url: '/#services' },
      { name: 'Cosmetic Dentistry', url: '/#services' },
      { name: 'Smile Makeover', url: '/treatments/smile-makeover' }
    ],

    quickFacts: {
      duration: '1–4 weeks (depending on combined treatments)',
      visits: '3–5 clinical sessions',
      anaesthesia: 'Local anaesthesia for restorative procedures',
      recovery: 'Minimal to none',
      candidacy: 'Patients with multiple aesthetic and functional dental concerns',
      longevity: '15+ years with proper maintenance'
    },

    overview: 'A Digital Smile Makeover is a comprehensive, multi-disciplinary cosmetic treatment plan that strategically combines various dental procedures — such as porcelain veneers, clear aligners, teeth whitening, composite bonding, and ceramic crowns — to achieve total aesthetic and functional smile balance. Using 3D Digital Smile Design (DSD) software, our PGI-trained specialists analyze your facial symmetry, lip dynamics, tooth proportions, and gum contours, allowing you to preview your projected new smile on screen before any clinical treatment begins.',

    conditions: [
      'Multiple discoloured, worn, chipped, or missing teeth',
      'Gummy smile or uneven gingival margins',
      'Asymmetric smile line and collapsed vertical dimension',
      'Dissatisfaction with overall dental aesthetics in photos and social settings'
    ],

    candidacy: {
      idealFor: 'Anyone seeking a comprehensive, unified aesthetic transformation tailored to their unique facial features.',
      notIdealFor: 'Active untreated gum disease or rampant decay (must be fully treated before cosmetic enhancements begin).'
    },

    alternatives: [
      {
        name: 'Single-Treatment Enhancement',
        description: 'If only isolated concerns exist, standalone treatments such as clear aligners or teeth whitening may be chosen.'
      }
    ],

    optionsComparison: {
      type: 'cards',
      title: 'Typical Smile Makeover Components',
      items: [
        {
          name: 'Alignment & Symmetry',
          description: 'Invisalign® or SkyAlign™ aligners to correct crowding and center the dental midline.'
        },
        {
          name: 'Restorative & Ceramic Veneers',
          description: 'E-Max porcelain veneers or crowns to permanently refine tooth shade, length, and shape.'
        },
        {
          name: 'Whitening & Gingival Contouring',
          description: 'Laser gum shaping and in-office LED bleaching for luminous harmony.'
        }
      ]
    },

    processSteps: [
      {
        step: 1,
        title: '3D Facial & Dental Aesthetics Analysis',
        description: 'High-definition digital photography, video assessment, and 3D intraoral optical scanning.'
      },
      {
        step: 2,
        title: 'Digital 3D Smile Simulation',
        description: 'Virtual planning of tooth shapes and contours matching your facial golden ratios.'
      },
      {
        step: 3,
        title: 'Preliminary Health Foundations',
        description: 'Completing necessary cleanings, cavity treatments, or gum shaping.'
      },
      {
        step: 4,
        title: 'Cosmetic Execution & Final Reveal',
        description: 'Bonding of custom ceramic veneers, crowns, or aligner delivery for total transformation.'
      }
    ],

    technology: [
      {
        name: 'Digital Smile Design (DSD) Software',
        purpose: 'Maps ideal tooth proportions to facial midline and lip dynamics.'
      },
      {
        name: 'E-Max CAD/CAM Lithium Disilicate',
        purpose: 'Provides lifelike translucency and high structural resilience.'
      }
    ],

    benefits: {
      functional: [
        'Restores balanced occlusal biting forces and protects teeth from excessive wear'
      ],
      aesthetic: [
        'Creates a radiant, confident, symmetrical smile harmonized with your natural facial features'
      ]
    },

    risksAndLimitations: [
      'Comprehensive smile makeovers require multiple staged appointments depending on treatments involved.',
      'Nightguard protection is advised to ensure maximum longevity of ceramic restorations.'
    ],

    durationAndTimeline: {
      consultationToBonding: '1 to 4 weeks depending on treatment combinations.',
      activeTreatment: 'Staged based on personalized roadmap.',
      retentionPhase: 'Routine checkups every 6 months.'
    },

    painAndComfort: {
      anaesthesia: 'Local anaesthesia used during tooth shaping; completely comfortable.',
      expectedSensation: 'Minor adjustment period as you adapt to new tooth contours.',
      whenToContact: 'Contact clinic if any restoration contact feels uneven.'
    },

    costDetails: {
      range: '₹35,000 – ₹1,80,000+ (Personalized package based on selected treatments)',
      factors: [
        'Number of teeth treated',
        'Combination of treatments (Aligners, Veneers, Whitening, Crowns)'
      ],
      emiAvailable: true,
      emiNote: 'Comprehensive 0% EMI financing plans available.'
    },

    whyChooseClinic: [
      'Multi-disciplinary clinical team: MDS Orthodontist and MDS Oral Specialist working collaboratively.',
      'Digital 3D preview before clinical procedures commence.'
    ],

    caseStudy: {
      title: 'Complete Digital Aesthetic Smile Transformation',
      context: 'Multi-tooth cosmetic enhancement combining porcelain veneers and shade harmony.',
      duration: '2 appointments',
      beforeSrc: '/procelian veneers -before.png',
      afterSrc: '/procelian veneers -after.png',
      outcome: 'Symmetrical, radiant smile line customized to facial proportions.'
    },

    testimonials: [
      {
        name: 'Priyanka Sharma',
        location: 'Rohtak',
        treatment: 'Smile Makeover',
        review: 'Dr. S. K. Yadav and Dr. Achla designed my smile makeover before my wedding. Seeing the 3D preview gave me complete confidence. The final result exceeded all my expectations!'
      }
    ],

    faqs: [
      {
        q: 'What treatments can be included in a smile makeover?',
        a: 'A smile makeover is fully customized and may include any combination of porcelain veneers, clear aligners, teeth whitening, crowns, and composite bonding depending on your goals.'
      }
    ],

    relatedTreatments: [
      { slug: 'porcelain-veneers', title: 'Porcelain Veneers', anchor: 'View porcelain veneers' },
      { slug: 'invisalign-clear-aligners', title: 'Invisalign® Clear Aligners', anchor: 'Learn about clear aligners' },
      { slug: 'teeth-whitening', title: 'Teeth Whitening', anchor: 'Explore teeth whitening' }
    ],

    localRelevance: {
      clinicName: 'Shubh Orthodontic & Dental Clinic',
      locality: 'Opposite Swami Nitanand School, Delhi Bypass Chowk, Rohtak',
      serviceArea: 'Rohtak, Sonepat, Panipat, Bhiwani, Jhajjar, and Delhi NCR',
      phone: '+91 86850 48414',
      hours: 'Mon – Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM'
    }
  },

  // ── 13. COMPOSITE BONDING ──────────────────────────────────────────────────
  {
    id: 'composite-bonding',
    slug: 'composite-bonding',
    title: 'Composite Bonding',
    shortTitle: 'Composite Bonding',
    category: 'Cosmetic',
    icon: '🎨',
    h1: 'Composite Bonding & Tooth Reshaping in Rohtak',
    subtitle: 'Single-Visit Aesthetic Repairs with Multi-Shade Nanohybrid Resins',
    heroValueProp: 'Repair chipped edges, close small gaps, and reshape irregular teeth in a single non-invasive appointment with tooth-coloured composite resin.',
    primaryKeyword: 'composite bonding Rohtak',
    secondaryKeywords: ['teeth bonding cost Rohtak', 'chipped tooth repair', 'cosmetic dental bonding'],

    doctor: 'Dr. Achla Bharti Yadav',
    doctorTitle: 'Cosmetic & Aesthetic Specialist',
    doctorSlug: 'dr-achita-yadav',
    doctorPhoto: '/dr-achita-yadav.webp',
    doctorDegree: 'BDS, MDS (PGI Rohtak)',
    medicalReviewDate: '2026-06-15',

    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Treatments', url: '/#services' },
      { name: 'Cosmetic Dentistry', url: '/#services' },
      { name: 'Composite Bonding', url: '/treatments/composite-bonding' }
    ],

    quickFacts: {
      duration: '30–60 minutes per tooth',
      visits: '1 single appointment',
      anaesthesia: 'Usually none required (non-invasive)',
      recovery: 'Immediate return to normal activities',
      candidacy: 'Chipped teeth, small gaps, minor shape irregularities',
      longevity: '5–8 years with good care and routine polishing'
    },

    overview: 'Composite bonding is a conservative cosmetic dental procedure where a high-density, multi-shaded nanohybrid resin is sculpted directly onto the tooth surface to repair chips, close small gaps (diastemas), lengthen worn incisal edges, or conceal minor discolourations. The composite material is hardened in seconds using an intense LED curing light and polished to match the natural gloss of surrounding enamel. At Shubh Dental Clinic, Dr. Achla Bharti Yadav performs bonding in a single appointment, preserving 100% of your underlying natural tooth structure.',

    conditions: [
      'Chipped or fractured front tooth edges from minor trauma',
      'Small gaps between front teeth',
      'Irregularly shaped or uneven tooth lengths',
      'Localized stubborn discolourations on isolated teeth'
    ],

    candidacy: {
      idealFor: 'Patients seeking rapid, cost-effective cosmetic corrections without enamel reduction.',
      notIdealFor: 'Major skeletal misalignment, heavy teeth grinding, or large biting force zones on back teeth.'
    },

    alternatives: [
      {
        name: 'Porcelain Veneers',
        description: 'For patients seeking permanent, stain-proof cosmetic results with longer lifespan (10–15+ years).'
      }
    ],

    optionsComparison: {
      type: 'matrix',
      title: 'Composite Bonding vs. Porcelain Veneers',
      items: [
        {
          name: 'Composite Bonding',
          speed: 'Same-day (1 visit)',
          enamelRemoval: 'Zero to minimal',
          cost: 'Economical',
          durability: '5–8 years'
        },
        {
          name: 'Porcelain Veneers',
          speed: '2 visits (5–7 days)',
          enamelRemoval: '0.3–0.5mm',
          cost: 'Premium',
          durability: '10–15+ years'
        }
      ]
    },

    processSteps: [
      {
        step: 1,
        title: 'Shade Matching',
        description: 'Selecting exact enamel and dentin resin shades to blend invisibly with your tooth.'
      },
      {
        step: 2,
        title: 'Micro-Etching & Bonding Agent',
        description: 'Surface is conditioned to create microscopic microscopic pores for high-strength adhesive lock.'
      },
      {
        step: 3,
        title: 'Layered Sculpting & Light-Curing',
        description: 'Composite resin is hand-sculpted in thin layers and cured instantly with LED blue light.'
      },
      {
        step: 4,
        title: 'Contouring & High-Gloss Polish',
        description: 'The restoration is shaped and polished to match natural enamel luster.'
      }
    ],

    technology: [
      {
        name: 'Nanohybrid Composite Resins',
        purpose: 'Provides high polishability and structural resistance against chipping.'
      }
    ],

    benefits: {
      functional: [
        'Instantly restores chipped incisal edges and protects exposed dentin'
      ],
      aesthetic: [
        'Completes smile corrections in a single visit without injections or drilling'
      ]
    },

    risksAndLimitations: [
      'Composite resin is slightly more porous than porcelain and may absorb stains from dark tea/coffee over 3–5 years.',
      'Avoid biting fingernails, hard packaging, or ice to prevent chipping.'
    ],

    durationAndTimeline: {
      consultationToBonding: 'Completed in 1 session (30–60 mins per tooth).',
      activeTreatment: 'Immediate results.',
      retentionPhase: 'Routine checkups every 6 months.'
    },

    painAndComfort: {
      anaesthesia: 'Usually none required.',
      expectedSensation: 'Zero pain.',
      whenToContact: 'Contact clinic if a bonded edge feels rough or catches floss.'
    },

    costDetails: {
      range: '₹2,500 – ₹6,000 per tooth',
      factors: [
        'Size and complexity of the chipped area or gap',
        'Number of teeth treated'
      ],
      emiAvailable: false,
      emiNote: 'Affordable single-visit payment.'
    },

    whyChooseClinic: [
      'PGI Rohtak trained aesthetic specialist with artistic hand-layering precision.',
      'Multi-shade composite resins for invisible margins.'
    ],

    caseStudy: {
      title: 'Cosmetic Composite Edge Bonding & Gap Closure',
      context: 'Anterior tooth gap and incisal wear restored conservatively.',
      duration: 'Single 45-minute visit',
      beforeSrc: '/cosmetic laser filling- before.png',
      afterSrc: '/cosmetic laser filling- after.png',
      outcome: 'Natural tooth anatomy recreated with zero drilling of healthy enamel.'
    },

    testimonials: [
      {
        name: 'Rohit Gulia',
        location: 'Rohtak',
        treatment: 'Composite Bonding',
        review: 'I chipped my front tooth playing cricket. Dr. Achla fixed it in just 30 minutes with bonding. You cannot tell where the tooth was broken. Fast, painless, and very affordable.'
      }
    ],

    faqs: [
      {
        q: 'How long does composite bonding last?',
        a: 'With proper oral hygiene and avoiding biting hard non-food objects, composite bonding typically lasts 5 to 8 years before needing simple touch-up polishing or re-bonding.'
      }
    ],

    relatedTreatments: [
      { slug: 'porcelain-veneers', title: 'Porcelain Veneers', anchor: 'Explore porcelain veneers' },
      { slug: 'teeth-whitening', title: 'Teeth Whitening', anchor: 'View teeth whitening' }
    ],

    localRelevance: {
      clinicName: 'Shubh Orthodontic & Dental Clinic',
      locality: 'Opposite Swami Nitanand School, Delhi Bypass Chowk, Rohtak',
      serviceArea: 'Rohtak, Sonepat, Panipat, Bhiwani, Jhajjar, and Delhi NCR',
      phone: '+91 86850 48414',
      hours: 'Mon – Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM'
    }
  },

  // ── 14. LINGUAL (HIDDEN) BRACES ───────────────────────────────────────────
  {
    id: 'lingual-braces',
    slug: 'lingual-braces',
    title: 'Lingual Braces',
    shortTitle: 'Lingual Braces',
    category: 'Orthodontics',
    icon: '🤫',
    h1: 'Lingual (Hidden) Braces in Rohtak',
    subtitle: 'Completely Invisible Fixed Orthodontics Placed Behind Your Teeth',
    heroValueProp: 'Achieve comprehensive, fixed orthodontic realignment with custom brackets bonded strictly to the inner (tongue) surface of your teeth — 100% invisible from the outside.',
    primaryKeyword: 'lingual braces Rohtak',
    secondaryKeywords: ['invisible braces behind teeth', 'lingual orthodontist Haryana', 'hidden braces cost'],

    doctor: 'Prof. Dr. S. K. Yadav',
    doctorTitle: 'Chief Orthodontist & Lingual Specialist',
    doctorSlug: 'dr-sk-yadav',
    doctorPhoto: '/dr-sk-yadav.webp',
    doctorDegree: 'BDS, MDS (Orthodontics — PGI Chandigarh), Fellow WFO (USA)',
    medicalReviewDate: '2026-06-15',

    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Treatments', url: '/#services' },
      { name: 'Orthodontics', url: '/#services' },
      { name: 'Lingual Braces', url: '/treatments/lingual-braces' }
    ],

    quickFacts: {
      duration: '12–24 months',
      visits: 'Every 4–6 weeks',
      anaesthesia: 'None required',
      recovery: '1–2 weeks for tongue adaptation',
      candidacy: 'Adults requiring fixed orthodontics with 100% invisible aesthetics',
      longevity: 'Permanent with retainers'
    },

    overview: 'Lingual braces are fixed orthodontic appliances bonded entirely to the posterior (lingual/palatal) surface of the teeth, facing the tongue rather than the outside world. This makes them 100% hidden from view during normal smiling and speech. They offer the full, continuous three-dimensional biomechanical control of traditional fixed braces while maintaining complete aesthetic discretion. As a specialized orthodontist trained at PGI Chandigarh, Prof. Dr. S. K. Yadav is among the select specialists in North India offering certified lingual orthodontic therapy.',

    conditions: [
      'Moderate to severe dental crowding and spacing',
      'Complex bite issues requiring fixed appliance force vectors',
      'Adults, corporate executives, and actors who cannot wear visible front brackets'
    ],

    candidacy: {
      idealFor: 'Adults and professionals demanding complete visual invisibility with fixed, non-compliance dependent orthodontic correction.',
      notIdealFor: 'Patients with very short clinical crowns or severe deep bites that may impinge on lower brackets (may require bite opening first).'
    },

    alternatives: [
      {
        name: 'Invisalign® Clear Aligners',
        description: 'Removable clear aligners that can be removed for eating and cleaning.'
      }
    ],

    optionsComparison: {
      type: 'matrix',
      title: 'Lingual Braces vs. Clear Aligners',
      items: [
        {
          name: 'Lingual Braces (Behind Teeth)',
          visibility: '100% invisible (behind teeth)',
          type: 'Fixed 24/7 (zero compliance required)',
          eating: 'Must avoid hard/sticky foods',
          adaptation: '1–2 weeks tongue adjustment'
        },
        {
          name: 'Invisalign® Clear Aligners',
          visibility: 'Virtually invisible clear plastic',
          type: 'Removable (22 hrs/day compliance mandatory)',
          eating: 'No food restrictions (remove to eat)',
          adaptation: 'Minimal adaptation'
        }
      ]
    },

    processSteps: [
      {
        step: 1,
        title: '3D Optical Scan & Prescription',
        description: 'Precise digital scan of inner lingual tooth surfaces.'
      },
      {
        step: 2,
        title: 'Custom Bracket Fabrication',
        description: 'Custom low-profile brackets tailored to match the unique curvature of your inner teeth.'
      },
      {
        step: 3,
        title: 'Indirect Bonding Placement',
        description: 'Brackets are bonded simultaneously onto the inner tooth surfaces using a custom placement tray.'
      },
      {
        step: 4,
        title: 'Sequential Adjustments',
        description: 'Periodic wire adjustments every 4–6 weeks until alignment is complete.'
      }
    ],

    technology: [
      {
        name: 'Custom Low-Profile Lingual Brackets',
        purpose: 'Minimizes tongue interference and accelerates speech adaptation.'
      }
    ],

    benefits: {
      functional: [
        'Delivers comprehensive 3D torque and rotational control for complex malocclusions',
        'Works continuously 24/7 without depending on patient discipline to put trays back in'
      ],
      aesthetic: [
        'Totally hidden from the outside — nobody can see you have braces'
      ]
    },

    risksAndLimitations: [
      'Requires 1–2 weeks of tongue adaptation and mild temporary lisp as speech adjusts.',
      'Requires dedicated cleaning technique with water flossers and interdental brushes.'
    ],

    durationAndTimeline: {
      consultationToBonding: '1–2 weeks from custom scan to bonding.',
      activeTreatment: '12–24 months.',
      retentionPhase: 'Permanent retainers provided post-treatment.'
    },

    painAndComfort: {
      anaesthesia: 'None required.',
      expectedSensation: 'Mild tongue soreness for the first week; orthodontic wax provided.',
      whenToContact: 'Contact clinic if a bracket feels loose.'
    },

    costDetails: {
      range: '₹95,000 – ₹2,20,000',
      factors: [
        'Custom lingual bracket system used',
        'Severity of malocclusion'
      ],
      emiAvailable: true,
      emiNote: 'Flexible 0% EMI financing plans available.'
    },

    whyChooseClinic: [
      'PGI Chandigarh orthodontic specialist with dedicated lingual clinical expertise.',
      'Advanced digital indirect bonding for comfort and accuracy.'
    ],

    caseStudy: {
      title: '100% Invisible Custom Lingual Braces (Behind the Teeth)',
      context: 'Adult patient requiring fixed orthodontic correction with complete facial invisibility.',
      duration: '12 months',
      beforeSrc: '/lingualbraces-before.png',
      afterSrc: '/lingualbraces-after.png',
      outcome: 'Fully corrected bite and straight smile arch with brackets completely hidden on inner surfaces.'
    },

    testimonials: [
      {
        name: 'Siddharth Rao',
        location: 'Gurgaon / Rohtak',
        treatment: 'Lingual Braces',
        review: 'Because of client meetings, I could not wear visible braces or remember to wear aligners 22 hours a day. Dr. S. K. Yadav placed lingual braces behind my teeth. Nobody ever knew I had braces!'
      }
    ],

    faqs: [
      {
        q: 'Do lingual braces affect speech?',
        a: 'There is a brief adjustment period of 1 to 2 weeks where slight speech changes may occur as your tongue gets used to the inner brackets. Speech returns to normal rapidly.'
      }
    ],

    relatedTreatments: [
      { slug: 'dental-braces', title: 'Dental Braces', anchor: 'Compare with outer braces' },
      { slug: 'invisalign-clear-aligners', title: 'Invisalign® Aligners', anchor: 'Explore Invisalign aligners' }
    ],

    localRelevance: {
      clinicName: 'Shubh Orthodontic & Dental Clinic',
      locality: 'Opposite Swami Nitanand School, Delhi Bypass Chowk, Rohtak',
      serviceArea: 'Rohtak, Sonepat, Panipat, Bhiwani, Jhajjar, and Delhi NCR',
      phone: '+91 86850 48414',
      hours: 'Mon – Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM'
    }
  },

  // ── 15. DENTURES (FULL & FLEXIBLE) ─────────────────────────────────────────
  {
    id: 'dentures-full-partial',
    slug: 'dentures-full-partial',
    title: 'Full & Flexible Dentures',
    shortTitle: 'Dentures (Full & Flexible)',
    category: 'Restorative',
    icon: '🦷',
    h1: 'Full & Flexible Dentures in Rohtak',
    subtitle: 'Custom Flexible, High-Impact Acrylic & Implant-Supported Dentures',
    heroValueProp: 'Restore complete chewing power, clear speech, and youthful facial volume with lightweight flexible dentures or rock-solid implant-supported overdentures.',
    primaryKeyword: 'dentures in Rohtak',
    secondaryKeywords: ['flexible dentures Rohtak', 'full mouth denture cost', 'implant supported dentures Haryana'],

    doctor: 'Dr. Achla Bharti Yadav',
    doctorTitle: 'Senior Specialist & Prosthetic Lead',
    doctorSlug: 'dr-achita-yadav',
    doctorPhoto: '/dr-achita-yadav.webp',
    doctorDegree: 'BDS, MDS (PGI Rohtak)',
    medicalReviewDate: '2026-06-15',

    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Treatments', url: '/#services' },
      { name: 'Restorative Dentistry', url: '/#services' },
      { name: 'Full & Flexible Dentures', url: '/treatments/dentures-full-partial' }
    ],

    quickFacts: {
      duration: '3–4 appointments over 7–10 days',
      visits: 'Impressions, bite record, wax try-in, and final delivery',
      anaesthesia: 'None required (non-invasive)',
      recovery: '1–2 weeks muscular adaptation',
      candidacy: 'Patients with multiple or all missing teeth',
      longevity: '5–10 years with periodic relining'
    },

    overview: 'Dentures are custom-crafted prosthetic devices designed to replace multiple missing teeth (partial dentures) or completely edentulous upper and lower arches (full dentures). Modern prosthetics have advanced far beyond bulky, rigid dentures of the past. At Shubh Dental Clinic, Dr. Achla Bharti Yadav offers lightweight Valplast® flexible thermoplastic dentures that adapt comfortably without rigid metal clasps, high-impact Lucitone acrylics, and implant-supported overdentures that lock firmly onto titanium implants, eliminating slipping and speech insecurity.',

    conditions: [
      'Complete loss of upper or lower teeth (edentulism)',
      'Multiple scattered missing teeth affecting chewing and nutrition',
      'Old, loose, or ill-fitting dentures causing sore spots and speech slippage',
      'Sunken facial profile and cheek collapse due to lost dental support'
    ],

    candidacy: {
      idealFor: 'Seniors and adults missing several or all teeth seeking comfortable, non-surgical tooth replacement.',
      notIdealFor: 'Patients seeking non-removable single-tooth replacements (implants or bridges are indicated).'
    },

    alternatives: [
      {
        name: 'Full Mouth Fixed Dental Implants (All-on-4 / All-on-6)',
        description: 'For patients desiring permanently fixed, non-removable teeth that function identically to natural dentition.'
      }
    ],

    optionsComparison: {
      type: 'matrix',
      title: 'Denture Options Compared',
      items: [
        {
          name: 'Valplast® Flexible Partial Denture',
          bestFor: 'Replacing 2–6 missing teeth comfortably',
          material: 'Unbreakable thermoplastic nylon',
          clasps: 'Invisible gum-colored flexible clasps',
          comfort: 'Lightweight and highly comfortable'
        },
        {
          name: 'High-Impact Full Acrylic Denture',
          bestFor: 'Complete upper and lower tooth replacement',
          material: 'Premium Lucitone 199 high-impact acrylic',
          clasps: 'Full tissue suction fit',
          comfort: 'Durable and easy to adjust/reline'
        },
        {
          name: 'Implant-Supported Overdenture',
          bestFor: 'Eliminating loose lower denture movement',
          material: 'Acrylic/Zirconia locked onto 2–4 implants',
          clasps: 'Locator snap attachments',
          comfort: 'Rock-solid stability with zero slippage'
        }
      ]
    },

    processSteps: [
      {
        step: 1,
        title: 'Primary Jaw Impressions',
        description: 'Precise molds of your alveolar ridges and oral tissues.'
      },
      {
        step: 2,
        title: 'Bite Registration & Vertical Height',
        description: 'Measuring jaw relations to restore youthful facial proportion.'
      },
      {
        step: 3,
        title: 'Aesthetic Wax Try-In',
        description: 'You evaluate the tooth shade, shape, and smile line in wax before final processing.'
      },
      {
        step: 4,
        title: 'Final Delivery & Bite Balancing',
        description: 'Delivery of your customized denture with instruction on insertion, removal, and cleaning.'
      }
    ],

    technology: [
      {
        name: 'Valplast® Medical Thermoplastic',
        purpose: 'Biocompatible, metal-free flexible resin that resists fractures.'
      },
      {
        name: 'High-Impact Cross-Linked Acrylic',
        purpose: 'Ensures durable wear and natural gingival aesthetics.'
      }
    ],

    benefits: {
      functional: [
        'Restores chewing capacity, enabling diverse nutrition and balanced diet',
        'Improves speech pronunciation and phonetics'
      ],
      aesthetic: [
        'Fills out sunken lips and cheeks, taking years off facial appearance'
      ]
    },

    risksAndLimitations: [
      'Requires a 1–2 week adaptation period for cheek and tongue muscles.',
      'Must be removed and cleaned at night to maintain gum health.'
    ],

    durationAndTimeline: {
      consultationToBonding: '3–4 visits across 7–10 days.',
      activeTreatment: 'Immediate restoration upon delivery.',
      retentionPhase: 'Annual checks for fit.'
    },

    painAndComfort: {
      anaesthesia: 'None required.',
      expectedSensation: 'Mild initial pressure on gums as muscles adapt.',
      whenToContact: 'Contact clinic for a quick 5-minute adjustment if a sore spot develops.'
    },

    costDetails: {
      range: '₹12,000 – ₹45,000 (Flexible partials vs complete sets; implant overdentures higher)',
      factors: [
        'Material type (Standard Acrylic, Flexible Valplast, BPS, or Implant-supported)',
        'Single arch vs. full dual-arch set'
      ],
      emiAvailable: true,
      emiNote: 'EMI financing support available.'
    },

    whyChooseClinic: [
      'PGI Rohtak trained prosthetic specialist ensuring optimal suction and bite balance.',
      'Aesthetic wax try-in stage ensures you approve your smile before final curing.'
    ],

    testimonials: [
      {
        name: 'Ramphal Sharma',
        location: 'Rohtak',
        treatment: 'Flexible Dentures',
        review: 'My previous dentures kept slipping when I spoke. Dr. Achla made flexible dentures for me. They fit tightly, feel very light, and I can eat my favorite foods again without fear.'
      }
    ],

    faqs: [
      {
        q: 'What is a flexible denture and how is it better?',
        a: 'Flexible dentures are made from a lightweight, thermoplastic nylon resin. Unlike hard acrylic dentures with metal wires, flexible dentures blend naturally with gum color, do not break if dropped, and feel much more comfortable.'
      }
    ],

    relatedTreatments: [
      { slug: 'dental-implants', title: 'Dental Implants', anchor: 'Explore implant-supported options' },
      { slug: 'crowns-and-bridges', title: 'Crowns & Bridges', anchor: 'View fixed bridge options' }
    ],

    localRelevance: {
      clinicName: 'Shubh Orthodontic & Dental Clinic',
      locality: 'Opposite Swami Nitanand School, Delhi Bypass Chowk, Rohtak',
      serviceArea: 'Rohtak, Sonepat, Panipat, Bhiwani, Jhajjar, and Delhi NCR',
      phone: '+91 86850 48414',
      hours: 'Mon – Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM'
    }
  },

  // ── 16. PAINLESS EXTRACTIONS ───────────────────────────────────────────────
  {
    id: 'painless-extractions',
    slug: 'painless-extractions',
    title: 'Painless Extractions',
    shortTitle: 'Painless Extractions',
    category: 'General',
    icon: '✂️',
    h1: 'Painless Tooth Extractions in Rohtak',
    subtitle: 'Gentle, Atraumatic Tooth Removal with Socket Bone Preservation',
    heroValueProp: 'Safely remove non-restorable, fractured, or severely decayed teeth with gentle atraumatic instruments under local anaesthesia, preserving your jawbone for future implant placement.',
    primaryKeyword: 'painless tooth extraction Rohtak',
    secondaryKeywords: ['tooth removal cost Rohtak', 'atraumatic dental extraction', 'emergency tooth removal'],

    doctor: 'Dr. Achla Bharti Yadav',
    doctorTitle: 'Senior Specialist & Oral Pathologist',
    doctorSlug: 'dr-achita-yadav',
    doctorPhoto: '/dr-achita-yadav.webp',
    doctorDegree: 'BDS, MDS (PGI Rohtak)',
    medicalReviewDate: '2026-06-15',

    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Treatments', url: '/#services' },
      { name: 'General Dentistry', url: '/#services' },
      { name: 'Painless Extractions', url: '/treatments/painless-extractions' }
    ],

    quickFacts: {
      duration: '20–30 minutes',
      visits: '1 single appointment',
      anaesthesia: 'Profound local anaesthesia',
      recovery: '1–2 days minimal recovery',
      candidacy: 'Non-restorable decayed, fractured, or mobile teeth',
      longevity: 'Socket preservation prepares site for future implant'
    },

    overview: 'While our clinical philosophy always prioritizes saving natural teeth, certain teeth with catastrophic vertical root fractures, advanced periodontitis (severe mobility), or non-restorable subgingival decay must be removed to prevent chronic jawbone infection. At Shubh Dental Clinic, Dr. Achla Bharti Yadav utilizes atraumatic periotome instruments and gentle luxation techniques that expand the socket without applying heavy rocking force or fracturing the surrounding bone plate, preserving maximum ridge volume for future dental implant placement.',

    conditions: [
      'Extensive decay destroying the tooth structure below the bone level',
      'Vertical root fracture that cannot be repaired with root canal therapy',
      'Severe advanced pyorrhoea / periodontitis with grade III tooth mobility',
      'Over-retained primary (baby) teeth preventing permanent tooth eruption'
    ],

    candidacy: {
      idealFor: 'Patients with unsalvageable teeth causing infection or pain.',
      notIdealFor: 'Teeth that can be safely preserved through root canal therapy and crown restoration.'
    },

    alternatives: [
      {
        name: 'Root Canal Treatment & Crown',
        description: 'Whenever sound tooth structure remains, root canal therapy is always preferred over extraction.'
      }
    ],

    optionsComparison: {
      type: 'cards',
      title: 'Atraumatic vs. Conventional Extraction',
      items: [
        {
          name: 'Atraumatic Sectioning & Periotome Extraction',
          description: 'Separates root fibers with microscopic instruments, preserving 100% of the surrounding bone plate for future implants.'
        },
        {
          name: 'Socket Preservation Bone Grafting',
          description: 'Placing mineral particulate bone graft into the fresh socket immediately post-extraction to prevent bone shrinkage.'
        }
      ]
    },

    processSteps: [
      {
        step: 1,
        title: 'Digital X-Ray Evaluation',
        description: 'Assesses root curvature, number of roots, and surrounding bone density.'
      },
      {
        step: 2,
        title: 'Complete Local Anaesthesia',
        description: 'Profound numbing of the tooth, surrounding gum, and bone.'
      },
      {
        step: 3,
        title: 'Gentle Luxation & Removal',
        description: 'Atraumatic instruments gently release periodontal ligament fibers without jawbone trauma.'
      },
      {
        step: 4,
        title: 'Socket Debridement & Hemostatic Dressing',
        description: 'Thorough socket cleaning and placement of sterile pressure gauze pack.'
      }
    ],

    technology: [
      {
        name: 'Atraumatic Periotomes',
        purpose: 'Preserves the delicate buccal bone wall.'
      }
    ],

    benefits: {
      functional: [
        'Quickly eliminates source of chronic infection, pain, and bad breath',
        'Preserves maximum bone volume for subsequent dental implant placement'
      ],
      aesthetic: [
        'Prevents distortion of gumline contours'
      ]
    },

    risksAndLimitations: [
      'Must follow post-extraction instructions (bite gauze for 45 mins, no spitting/straws for 24h) to prevent dry socket.'
    ],

    durationAndTimeline: {
      consultationToBonding: '20–30 minutes in 1 appointment.',
      activeTreatment: '1–2 days initial healing.',
      retentionPhase: 'Implant planning follow-up.'
    },

    painAndComfort: {
      anaesthesia: 'Profound local anaesthesia guarantees zero pain during extraction.',
      expectedSensation: 'Pressure sensation only; mild tenderness managed with pain medications.',
      whenToContact: 'Contact clinic if bleeding does not stop after 2 hours of gauze pressure.'
    },

    costDetails: {
      range: '₹1,000 – ₹3,500 per tooth',
      factors: [
        'Single root vs multi-root tooth',
        'Presence of root curvature or ankylosis'
      ],
      emiAvailable: false,
      emiNote: 'Direct affordable payment.'
    },

    whyChooseClinic: [
      'PGI Rohtak trained specialist ensuring gentle, bone-preserving technique.',
      'Immediate planning for tooth replacement so you never have to live with a gap.'
    ],

    testimonials: [
      {
        name: 'Suresh Kumar',
        location: 'Rohtak',
        treatment: 'Painless Extraction',
        review: 'I was dreading tooth extraction because of past bad experiences elsewhere. Dr. Achla extracted my broken tooth in 15 minutes and I literally felt nothing. Healing was smooth with zero pain!'
      }
    ],

    faqs: [
      {
        q: 'Will I feel pain during tooth extraction?',
        a: 'No. Local anaesthesia completely numbs the nerves. You will feel a sensation of firm pressure, but zero sharp pain.'
      }
    ],

    relatedTreatments: [
      { slug: 'dental-implants', title: 'Dental Implants', anchor: 'Plan your dental implant replacement' },
      { slug: 'wisdom-tooth-surgery', title: 'Wisdom Tooth Surgery', anchor: 'View wisdom tooth surgery' }
    ],

    localRelevance: {
      clinicName: 'Shubh Orthodontic & Dental Clinic',
      locality: 'Opposite Swami Nitanand School, Delhi Bypass Chowk, Rohtak',
      serviceArea: 'Rohtak, Sonepat, Panipat, Bhiwani, Jhajjar, and Delhi NCR',
      phone: '+91 86850 48414',
      hours: 'Mon – Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM'
    }
  },

  // ── 17. COSMETIC LASER FILLINGS & JEWELLERY ───────────────────────────────
  {
    id: 'cosmetic-laser-fillings',
    slug: 'cosmetic-laser-fillings',
    title: 'Cosmetic Laser Fillings & Jewellery',
    shortTitle: 'Laser Fillings & Jewellery',
    category: 'Cosmetic',
    icon: '💎',
    h1: 'Cosmetic Laser Tooth Fillings & Jewellery in Rohtak',
    subtitle: 'Mercury-Free Tooth-Coloured Nanohybrid Resin Fillings & Tooth Crystals',
    heroValueProp: 'Replace dark silver mercury fillings and repair cavity defects with light-cured composite resins that match your natural tooth shade seamlessly.',
    primaryKeyword: 'laser fillings Rohtak',
    secondaryKeywords: ['tooth coloured fillings Rohtak', 'dental crystal jewellery', 'mercury free cavity filling'],

    doctor: 'Dr. Achla Bharti Yadav',
    doctorTitle: 'Cosmetic & Restorative Specialist',
    doctorSlug: 'dr-achita-yadav',
    doctorPhoto: '/dr-achita-yadav.webp',
    doctorDegree: 'BDS, MDS (PGI Rohtak)',
    medicalReviewDate: '2026-06-15',

    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Treatments', url: '/#services' },
      { name: 'Cosmetic Dentistry', url: '/#services' },
      { name: 'Cosmetic Laser Fillings', url: '/treatments/cosmetic-laser-fillings' }
    ],

    quickFacts: {
      duration: '20–40 minutes per tooth',
      visits: '1 single appointment',
      anaesthesia: 'Usually none required for small/medium cavities',
      recovery: 'Immediate eating possible (cured instantly with LED light)',
      candidacy: 'Cavities, dark spots, chipped edges, or silver filling upgrades',
      longevity: '7–10+ years with regular hygiene'
    },

    overview: 'Cosmetic light-cured tooth fillings (composite restorations) utilize advanced nanohybrid resin technology to restore decayed, cracked, or worn teeth without the unsightly appearance of old silver amalgam fillings. The biocompatible resin is placed in microscopic layers and hardened in seconds with a high-intensity blue LED light, bonding chemically to natural tooth structure to reinforce weakened enamel. We also offer non-invasive placement of genuine Swarovski® tooth crystal jewellery for patients seeking subtle sparkle without drilling or enamel damage.',

    conditions: [
      'Dental decay / cavities causing food trapping or sensitivity',
      'Old dark mercury amalgam fillings needing aesthetic replacement',
      'Minor chipped enamel margins on biting surfaces',
      'Desire for decorative crystal tooth jewellery'
    ],

    candidacy: {
      idealFor: 'Anyone with small-to-moderate cavities desiring invisible, mercury-free restorations.',
      notIdealFor: 'Very extensive cavity defects involving the nerve (requires root canal) or loss of more than 60% of tooth structure (requires full crown).'
    },

    alternatives: [
      {
        name: 'Ceramic Inlays / Onlays',
        description: 'For large cavities in heavy chewing molars where laboratory-milled ceramic provides superior long-term strength.'
      }
    ],

    optionsComparison: {
      type: 'cards',
      title: 'Restorative Filling Options',
      items: [
        {
          name: 'Nanohybrid Composite Resin',
          description: '100% mercury-free, tooth-colored resin cured instantly with blue light for natural invisible aesthetics.'
        },
        {
          name: 'Swarovski® Tooth Crystal Jewellery',
          description: 'Painless, zero-drilling adhesive placement of sparkling dental crystal gems.'
        }
      ]
    },

    processSteps: [
      {
        step: 1,
        title: 'Decay Removal & Conditioning',
        description: 'Gentle cleaning of the cavity defect; no healthy enamel is unnecessarily sacrificed.'
      },
      {
        step: 2,
        title: 'Adhesive Bonding Agent',
        description: 'Micro-bonding agent is applied to lock the resin chemically into enamel and dentin.'
      },
      {
        step: 3,
        title: 'Layered Resin & Light Curing',
        description: 'Tooth-colored composite is sculpted and hardened in seconds with an LED light.'
      },
      {
        step: 4,
        title: 'Bite Balancing & Polish',
        description: 'Restoration is polished to a natural high-gloss finish matching surrounding teeth.'
      }
    ],

    technology: [
      {
        name: 'Nanohybrid Light-Cured Composites',
        purpose: 'Provides high compressive strength and seamless shade blending.'
      },
      {
        name: 'LED Curing Blue Light',
        purpose: 'Achieves instant high-depth polymerization in under 20 seconds.'
      }
    ],

    benefits: {
      functional: [
        'Stops decay progression and seals tooth against hot/cold thermal sensitivity',
        'Bonds directly to tooth structure, reinforcing weakened enamel walls'
      ],
      aesthetic: [
        '100% mercury-free and customized to your exact tooth shade'
      ]
    },

    risksAndLimitations: [
      'Very deep cavities close to the nerve may experience temporary sensitivity for a few days.'
    ],

    durationAndTimeline: {
      consultationToBonding: '20–40 minutes in 1 appointment.',
      activeTreatment: 'Immediate use; eat right away.',
      retentionPhase: 'Routine checkups every 6 months.'
    },

    painAndComfort: {
      anaesthesia: 'Usually none needed; local anaesthesia available for deep cavities.',
      expectedSensation: 'Zero pain.',
      whenToContact: 'Contact clinic if your bite feels high when chewing.'
    },

    costDetails: {
      range: '₹1,500 – ₹4,500 per tooth',
      factors: [
        'Number of tooth surfaces involved (Single vs Multi-surface cavity)',
        'Tooth jewellery crystal type'
      ],
      emiAvailable: false,
      emiNote: 'Direct affordable payment.'
    },

    whyChooseClinic: [
      'PGI Rohtak trained specialist ensuring thorough decay elimination and durable bonding.',
      'High-grade German nanohybrid materials.'
    ],

    caseStudy: {
      title: 'Cosmetic Laser Composite Tooth Restoration',
      context: 'Anterior tooth cavity and chipped edge restored with nano-hybrid composite.',
      duration: '30-minute single appointment',
      beforeSrc: '/cosmetic laser filling- before.png',
      afterSrc: '/cosmetic laser filling- after.png',
      outcome: 'Seamless enamel shade match, invisible margins, and restored bite edge.'
    },

    testimonials: [
      {
        name: 'Meenakshi Hooda',
        location: 'Rohtak',
        treatment: 'Laser Tooth Filling',
        review: 'I replaced my old black silver filling with tooth-colored composite at Shubh Dental. It took only 25 minutes and looks completely natural. No pain at all!'
      }
    ],

    faqs: [
      {
        q: 'Can I eat immediately after a light-cured filling?',
        a: 'Yes! Because the composite resin is hardened instantly with a blue LED light, you can eat immediately after leaving the clinic.'
      }
    ],

    relatedTreatments: [
      { slug: 'teeth-cleaning-scaling', title: 'Teeth Cleaning & Scaling', anchor: 'Combine with ultrasonic cleaning' },
      { slug: 'composite-bonding', title: 'Composite Bonding', anchor: 'Explore cosmetic bonding' }
    ],

    localRelevance: {
      clinicName: 'Shubh Orthodontic & Dental Clinic',
      locality: 'Opposite Swami Nitanand School, Delhi Bypass Chowk, Rohtak',
      serviceArea: 'Rohtak, Sonepat, Panipat, Bhiwani, Jhajjar, and Delhi NCR',
      phone: '+91 86850 48414',
      hours: 'Mon – Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM'
    }
  }
];

// Helper functions
export const getTreatmentById = (id) => {
  if (!id) return null;
  // Handle alias for same-day-implants -> same-day-dental-implants
  if (id === 'same-day-implants') {
    const found = treatments.find(t => t.id === 'same-day-dental-implants');
    if (found) return found;
  }
  return treatments.find(t => t.id === id || t.slug === id);
};

export const getTreatmentsByCategory = (cat) => treatments.filter(t => t.category === cat);
export const getFeaturedTreatments = () => treatments.filter(t => ['dental-braces', 'invisalign-clear-aligners', 'dental-implants'].includes(t.id));
