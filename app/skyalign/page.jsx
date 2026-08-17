import dynamic from 'next/dynamic';
import SmartBooking from '../components/SmartBooking';

const SkyAlignSection = dynamic(() => import('../components/SkyAlignSection'));

export const metadata = {
  title: 'SkyAlign™ In-House Aligners | Shubh Dental Clinic Rohtak',
  description: 'Experience high-definition clear aligner therapy produced 100% in-house at Shubh Orthodontic & Dental Clinic. Custom made for you with 3D precision by Prof. Dr. S. K. Yadav.',
  alternates: {
    canonical: 'https://www.shubhdentalclinicrohtak.in/skyalign',
  },
};

export default function SkyAlignPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <SkyAlignSection />
      <SmartBooking />
    </main>
  );
}
