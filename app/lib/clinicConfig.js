/**
 * Authoritative Single Source of Truth for Shubh Orthodontic & Dental Clinic
 * Centralizes NAP, coordinates, operating hours, doctors, and business metadata.
 */

export const clinicConfig = {
  name: 'Shubh Orthodontic & Dental Clinic',
  legalName: 'Shubh Orthodontic and Dental Clinic',
  shortName: 'Shubh Dental Clinic',
  canonicalUrl: 'https://www.shubhdental.com',
  logo: 'https://www.shubhdental.com/shubh-dental-logo-icon.png',
  image: 'https://www.shubhdental.com/clinic-front.webp',
  
  // Contact
  telephone: '+918685048414',
  telephoneFormatted: '+91-86850-48414',
  landline: '01262-469393',
  whatsapp: '+918685048414',
  whatsappUrl: 'https://wa.me/918685048414',
  email: 'sky20083@gmail.com',
  
  // Address & Physical Location
  address: {
    streetAddress: 'Tilak Nagar, Lane 9 Corner, Opposite Swami Nitanand Public School, Delhi Bypass Road',
    addressLocality: 'Rohtak',
    addressRegion: 'Haryana',
    postalCode: '124001',
    addressCountry: 'IN',
  },
  
  // Authoritative Coordinates
  geo: {
    latitude: 28.891128,
    longitude: 76.621873,
    latitudeString: '28.891128',
    longitudeString: '76.621873',
  },
  
  // Standardized Operating Hours
  operatingHours: {
    regular: 'Monday – Saturday: 09:30 – 20:00',
    sunday: 'Closed for Walk-Ins / Available by Prior VIP Appointment',
    displayText: 'Mon – Sat: 09:30 AM – 08:00 PM | Sun: By VIP Appointment',
  },
  
  // Schema.org Opening Hours (Accurate representation: Mo-Sa only, no misleading Sunday open hours)
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '20:00',
    },
  ],
  
  // Verified Specialists
  doctors: [
    {
      name: 'Prof. Dr. S. K. Yadav',
      slug: 'dr-sk-yadav',
      title: 'Senior Orthodontist & Implant Specialist',
      degrees: 'BDS, MDS (Orthodontics - Ex-PGI Chandigarh), Fellow WFO (USA)',
      councilReg: 'HN-2432-A',
      url: 'https://www.shubhdental.com/doctors/dr-sk-yadav',
    },
    {
      name: 'Dr. Achla Bharti Yadav',
      slug: 'dr-achita-yadav',
      title: 'Paediatric & Preventive Dentistry Specialist',
      degrees: 'BDS, MDS (Paedodontics)',
      url: 'https://www.shubhdental.com/doctors/dr-achita-yadav',
    },
  ],
  
  // Service Areas
  serviceArea: [
    'Rohtak', 'Bahadurgarh', 'Jhajjar', 'Bhiwani', 'Sonipat', 'Panipat', 'Hisar', 'Jind', 'Delhi NCR'
  ],
  
  // Authority links
  sameAs: [
    'https://www.facebook.com/sodcrohtak/',
    'https://www.instagram.com/dr.s.k._yadav_orthodontist',
    'https://maps.app.goo.gl/XfWJCcvCVGZBzdHv6?g_st=aw',
  ],
  hasMap: 'https://maps.app.goo.gl/XfWJCcvCVGZBzdHv6?g_st=aw',
};

export default clinicConfig;
