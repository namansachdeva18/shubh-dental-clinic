import SpecialOfferPageClient from './PageClient';

export const metadata = {
  title: 'Wedding Smile Special Offer | Flat 20% OFF | Shubh Dental Clinic Rohtak',
  description: 'Limited-Period Wedding Smile Festival at Shubh Orthodontic & Dental Clinic Rohtak! Get Flat 20% OFF on Clear Aligners, Ceramic Braces, Smile Makeovers & Dental Implants + Free OPD & 3D Intraoral Scan (Worth ₹2,000). Serving Rohtak, Bahadurgarh, Jhajjar, Sonipat, Panipat, Bhiwani, Hisar & Delhi NCR. Claim your VIP voucher now!',
  keywords: [
    'wedding smile offer Rohtak',
    'dental clinic special offer Rohtak',
    'clear aligners discount Rohtak',
    'invisalign offer Rohtak Haryana',
    'dental braces concession Rohtak',
    'dental implants offer Jhajjar Sonipat',
    'smile makeover discount Delhi NCR',
    'teeth whitening wedding offer Rohtak',
    'best dentist near me Rohtak',
    'orthodontist discount Haryana'
  ],
  alternates: {
    canonical: 'https://www.shubhdental.com/special-offer',
    languages: {
      'en-IN': 'https://www.shubhdental.com/special-offer',
      'en': 'https://www.shubhdental.com/special-offer',
    },
  },
  openGraph: {
    title: '💍 Wedding Smile Festival — Flat 20% OFF All Major Treatments | Shubh Dental Clinic',
    description: 'Special Wedding Season Concession on Clear Aligners, Braces, Smile Makeovers & Implants + Free OPD & 3D Scan. Open for everyone in Rohtak & Haryana NCR!',
    url: 'https://www.shubhdental.com/special-offer',
    images: [{ url: 'https://www.shubhdental.com/wedding-smile-banner.webp', width: 1200, height: 630, alt: 'Wedding Smile Makeover Special Offer at Shubh Dental Clinic Rohtak' }],
    type: 'website',
    locale: 'en_IN',
    siteName: 'Shubh Orthodontic & Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    title: '💍 Wedding Smile Offer: Flat 20% OFF | Shubh Dental Clinic Rohtak',
    description: 'Flat 20% Concession on Aligners, Braces, Smile Makeovers & Implants + Free 3D Scan.',
    images: ['https://www.shubhdental.com/wedding-smile-banner.webp'],
  },
  other: {
    'geo.region': 'IN-HR',
    'geo.placename': 'Rohtak, Haryana',
    'geo.position': '28.8955;76.6066',
    'ICBM': '28.8955, 76.6066',
  }
};

const SCHEMA_LOCAL_DENTIST = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': 'https://www.shubhdental.com/#dentist',
  name: 'Shubh Orthodontic & Dental Clinic',
  image: 'https://www.shubhdental.com/wedding-smile-banner.webp',
  url: 'https://www.shubhdental.com',
  telephone: '+918685048414',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Opposite Agro Mall, Near Delhi Bypass, Tilak Nagar',
    addressLocality: 'Rohtak',
    addressRegion: 'Haryana',
    postalCode: '124001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.8955,
    longitude: 76.6066,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Rohtak' },
    { '@type': 'AdministrativeArea', name: 'Bahadurgarh' },
    { '@type': 'AdministrativeArea', name: 'Jhajjar' },
    { '@type': 'AdministrativeArea', name: 'Sonipat' },
    { '@type': 'AdministrativeArea', name: 'Panipat' },
    { '@type': 'AdministrativeArea', name: 'Bhiwani' },
    { '@type': 'AdministrativeArea', name: 'Hisar' },
    { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '20:00',
    },
  ],
  medicalSpecialty: [
    'Orthodontics',
    'Cosmetic Dentistry',
    'Implantology',
    'General Dentistry',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '300',
    bestRating: '5',
    worstRating: '1',
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'MDS Orthodontics & Dentofacial Orthopedics — PGI Chandigarh',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'fellowship',
      name: 'Fellow — World Federation of Orthodontists (WFO), USA',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'Certified Invisalign® Provider',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'Certified Clinical Implantologist',
    },
  ],
  knowsAbout: [
    'Orthodontics', 'Invisalign', 'Clear Aligners', 'Dental Implants',
    'Smile Makeover', 'Porcelain Veneers', 'Teeth Whitening',
    'Dental Braces', 'Root Canal Treatment', 'Cosmetic Dentistry'
  ],
  sameAs: [
    'https://www.instagram.com/dr.s.k._yadav_orthodontist',
    'https://www.facebook.com/sodcrohtak/',
    'https://maps.app.goo.gl/XfWJCcvCVGZBzdHv6'
  ],
};

const SCHEMA_OFFERS = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Shubh Dental Clinic — Grand Wedding Season 20% OFF Offer Catalog',
  description: 'Limited period wedding season smile makeover & dental treatment offers with Flat 20% Concession + Free OPD & 3D Scan at Shubh Orthodontic & Dental Clinic, Rohtak',
  url: 'https://www.shubhdental.com/special-offer',
  provider: {
    '@type': 'Dentist',
    '@id': 'https://www.shubhdental.com/#dentist',
    name: 'Shubh Orthodontic and Dental Clinic',
    url: 'https://www.shubhdental.com',
  },
  itemListElement: [
    {
      '@type': 'Offer',
      name: 'Aesthetic Dental Braces (Ceramic & Metal) — Flat 20% OFF',
      description: 'Advanced ceramic & Damon self-ligating brackets for precise bite and alignment with Flat 20% Concession and Free 3D Scan.',
      priceCurrency: 'INR',
      availability: 'https://schema.org/LimitedAvailability',
    },
    {
      '@type': 'Offer',
      name: 'Clear Aligners (Invisalign® & SkyAlign™) — Flat 20% OFF',
      description: 'Discreet 100% invisible teeth alignment with Flat 20% Concession, Free 3D Digital Intraoral Scan and 0% EMI options.',
      priceCurrency: 'INR',
      availability: 'https://schema.org/LimitedAvailability',
    },
    {
      '@type': 'Offer',
      name: 'Complete Wedding Smile Makeover & Porcelain Veneers — Flat 20% OFF',
      description: 'Camera-ready bridal and groom smile redesign with German E-Max porcelain veneers and 3D digital simulation.',
      priceCurrency: 'INR',
      availability: 'https://schema.org/LimitedAvailability',
    },
    {
      '@type': 'Offer',
      name: 'Permanent Computer-Guided Dental Implants — Flat 20% OFF',
      description: 'Lifetime titanium dental implants with computer-guided placement and lifetime warranty.',
      priceCurrency: 'INR',
      availability: 'https://schema.org/LimitedAvailability',
    },
    {
      '@type': 'Offer',
      name: 'Laser Teeth Whitening & Polishing — Flat 20% OFF',
      description: '45-minute in-clinic instant laser brightening removing deep stains safely before weddings and photo events.',
      priceCurrency: 'INR',
      availability: 'https://schema.org/LimitedAvailability',
    },
  ],
};

const SCHEMA_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who can claim the Flat 20% OFF Wedding Offer at Shubh Dental Clinic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 20% OFF concession is open to everyone! While designed for wedding brides, grooms, and family members getting camera-ready, it is also fully valid for any patient in Rohtak and surrounding Haryana regions requiring braces, aligners, implants, smile makeovers, or general dental care.',
      },
    },
    {
      '@type': 'Question',
      name: 'What free benefits are included with the 20% OFF Voucher?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every claimed voucher includes a Free Doctor OPD Consultation (Worth ₹500) and a Complimentary 3D Digital Intraoral Scan (Worth ₹1,500), giving you ₹2,000 in immediate free clinical value.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Shubh Dental Clinic located and how can patients from outside Rohtak visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shubh Orthodontic & Dental Clinic is centrally located in Tilak Nagar, Rohtak, Haryana, right off the Delhi Bypass. It is easily accessible within 30-60 minutes from Bahadurgarh, Jhajjar, Sonipat, Panipat, Bhiwani, and Delhi NCR with direct highway connectivity and free parking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are 0% Interest EMI options available on Braces & Clear Aligners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Flexible 0% interest monthly installment (EMI) plans are available on all major treatments including Invisalign, SkyAlign Clear Aligners, Damon Braces, and Dental Implants.',
      },
    },
  ],
};

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.shubhdental.com' },
    { '@type': 'ListItem', position: 2, name: 'Wedding Smile Special Offer', item: 'https://www.shubhdental.com/special-offer' },
  ],
};

const SCHEMA_EVENT = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Wedding Smile Festival — Flat 20% OFF at Shubh Dental Clinic Rohtak',
  description: 'Limited-period wedding season special offer: Flat 20% OFF on Clear Aligners, Braces, Implants, Smile Makeovers + Free OPD & 3D Scan. Valid till 15 November. Open to everyone in Rohtak & Haryana NCR.',
  startDate: '2026-10-01',
  endDate: '2026-11-15',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Shubh Orthodontic & Dental Clinic',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Opposite Agro Mall, Near Delhi Bypass, Tilak Nagar',
      addressLocality: 'Rohtak',
      addressRegion: 'Haryana',
      postalCode: '124001',
      addressCountry: 'IN',
    },
  },
  image: 'https://www.shubhdental.com/wedding-smile-banner.webp',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '2500',
    highPrice: '200000',
    offerCount: 10,
    availability: 'https://schema.org/LimitedAvailability',
    url: 'https://www.shubhdental.com/special-offer',
    validFrom: '2026-10-01',
  },
  organizer: {
    '@type': 'Dentist',
    name: 'Shubh Orthodontic & Dental Clinic',
    url: 'https://www.shubhdental.com',
  },
  performer: {
    '@type': 'Person',
    name: 'Prof. Dr. S. K. Yadav',
    jobTitle: 'MDS Orthodontics, Ex-PGI Chandigarh, Fellow WFO USA',
  },
};

const SCHEMA_SPEAKABLE = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Wedding Smile Special Offer | Flat 20% OFF | Shubh Dental Clinic Rohtak',
  url: 'https://www.shubhdental.com/special-offer',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.hero-main-h1', '.hero-main-sub', '.confidence-h2', '.geo-h2'],
  },
  mainEntity: {
    '@type': 'Dentist',
    '@id': 'https://www.shubhdental.com/#dentist',
  },
};

export default function SpecialOfferPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_LOCAL_DENTIST) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_OFFERS) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_EVENT) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_SPEAKABLE) }} />
      <SpecialOfferPageClient />
    </>
  );
}
