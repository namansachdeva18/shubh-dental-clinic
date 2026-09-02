import VisitingCentresClient from './VisitingCentresClient';

export const metadata = {
  title: 'Visiting Centres Across Haryana & NCR | Shubh Dental Clinic',
  description: 'Prof. Dr. S. K. Yadav (Ex-PGI Chandigarh) offers expert orthodontic & dental implant consultations across 6 visiting centres — Rohtak, Delhi, Gurugram, Panipat, Sonepat & Fatehabad.',
  keywords: ['dental clinic Rohtak', 'orthodontist Delhi NCR', 'dental consultant Haryana', 'Dr SK Yadav visiting', 'Invisalign near me Haryana'],
  alternates: { canonical: 'https://www.shubhdentalclinicrohtak.in/visiting-centres' },
  openGraph: {
    title: 'Visiting Centres | Shubh Dental Clinic — Rohtak, Delhi, Gurugram & More',
    description: 'Book a consultation with Prof. Dr. S. K. Yadav at our visiting centres across Haryana & NCR.',
    url: 'https://www.shubhdentalclinicrohtak.in/visiting-centres',
  }
};

export default function VisitingCentresPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Dentist',
        name: 'Shubh Orthodontic & Dental Clinic',
        url: 'https://www.shubhdentalclinicrohtak.in',
        telephone: '+91-8685048414',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Tilak Nagar Lane 9, Delhi Bypass Road',
          addressLocality: 'Rohtak',
          postalCode: '124001',
          addressRegion: 'Haryana',
          addressCountry: 'IN'
        },
        hasMap: 'https://maps.app.goo.gl/XfWJCcvCVGZBzdHv6?g_st=aw',
        openingHours: 'Mo-Sa 09:30-20:00',
      })}} />

      <VisitingCentresClient />
    </>
  );
}
