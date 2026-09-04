'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn, Star, Sparkles, Sliders, ArrowRight, ShieldCheck, CheckCircle2, Heart, Camera, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BeforeAfterSlider from './BeforeAfterSlider';

const CLINICAL_CASES = [
  {
    id: 'case-1',
    title: 'Severe Crowding & Deep Bite Correction',
    patient: 'Rizul M.',
    age: '24 yrs',
    treatment: 'SkyAlign™ Clear Aligners',
    duration: '9 Months',
    doctor: 'Prof. Dr. S. K. Yadav',
    category: 'Aligners',
    beforeSrc: '/skyalign-before.png',
    afterSrc: '/skyalign-after.png',
    summary: 'Achieved complete dental arch expansion and crowding alignment with 100% in-house SkyAlign™ clear aligners.',
    stars: 5
  },
  {
    id: 'case-2',
    title: 'Same Day Immediate Tooth Replacement',
    patient: 'Vikramjit S.',
    age: '42 yrs',
    treatment: 'Same Day Dental Implant',
    duration: '24 Hours',
    doctor: 'Dr. Achla Bharti Yadav',
    category: 'Implants',
    beforeSrc: '/samedayimplants-before.png',
    afterSrc: '/samedayimplants-after.png',
    summary: 'Flapless 3D CBCT guided implant placement with immediate temporary crown loading within 24 hours.',
    stars: 5
  },
  {
    id: 'case-3',
    title: 'Hollywood Smile Makeover & Veneers',
    patient: 'Simran A.',
    age: '29 yrs',
    treatment: 'Porcelain E.Max Veneers',
    duration: '2 Appointments',
    doctor: 'Dr. Achla Bharti Yadav',
    category: 'Smile Makeover',
    beforeSrc: '/procelian veneers -before.png',
    afterSrc: '/procelian veneers -after.png',
    summary: 'Custom ultra-thin German porcelain veneers placed for anterior teeth alignment, shade correction, and smile line enhancement.',
    stars: 5
  },
  {
    id: 'case-4',
    title: 'Teeth Whitening Transformation',
    patient: 'Nitesh P.',
    age: '21 yrs',
    treatment: 'Laser Teeth Whitening',
    duration: '1 Hour',
    doctor: 'Dr. Achla Bharti Yadav',
    category: 'Smile Makeover',
    beforeSrc: '/teeth whitening-before.png',
    afterSrc: '/teeth whitening-after.png',
    summary: 'Professional clinical laser teeth whitening achieving 5 shades lighter enamel instantly.',
    stars: 5
  }
];

const COLLAGE_PATIENTS = [
  { id: 1, name: 'Aarav Sharma', treatment: 'SkyAlign™ Clear Aligners', category: 'Aligners', duration: '8 Months', age: '22', rating: 5, story: 'Absolutely loved the invisible aligner journey! Zero pain.', imgSrc: '/patient-smiles/10687C2D-7DCE-4B88-BB98-D8E93FB1D40E.PNG' },
  { id: 2, name: 'Priya Patel', treatment: 'Ceramic Braces', category: 'Braces', duration: '12 Months', age: '19', rating: 5, story: 'My confidence went from 0 to 100 after my braces treatment.', imgSrc: '/patient-smiles/1729DB6E-0AB5-4DCC-B6C3-575D502D4E9D.PNG' },
  { id: 3, name: 'Rohan Verma', treatment: 'Dental Implants', category: 'Implants', duration: '2 Visits', age: '45', rating: 5, story: 'Feels and looks like a real tooth. Outstanding aesthetic care!', imgSrc: '/patient-smiles/197AD90C-34F0-40BC-862C-919D158FC45D.jpg' },
  { id: 4, name: 'Ananya Iyer', treatment: 'Smile Makeover', category: 'Smile Makeover', duration: '1 Week', age: '28', rating: 5, story: 'The German veneers completely enhanced my smile line.', imgSrc: '/patient-smiles/302B5B65-A757-4A1F-A00C-A9FC9E42941A.jpg' },
  { id: 5, name: 'Vikram Singh', treatment: 'Self-Ligating Braces', category: 'Braces', duration: '10 Months', age: '24', rating: 5, story: 'Fast and comfortable. Best orthodontist team in Rohtak.', imgSrc: '/patient-smiles/32670C7F-2263-4B86-99A2-C998CFE5B7DB.jpg' },
  { id: 6, name: 'Sneha Reddy', treatment: 'SkyAlign™ Clear Aligners', category: 'Aligners', duration: '6 Months', age: '26', rating: 5, story: 'Highly recommend SkyAlign. Completely invisible and custom fit!', imgSrc: '/patient-smiles/39C1E038-DABE-481F-B0E6-9597D2F2E271.jpg' },
  { id: 7, name: 'Aditya Gupta', treatment: 'Dental Implants', category: 'Implants', duration: '1 Day', age: '52', rating: 5, story: 'Same day implant was a miracle. Absolutely painless process.', imgSrc: '/patient-smiles/46AD9ACF-2C1B-405B-AE35-4F5B009CD714.jpg' },
  { id: 8, name: 'Diya Malhotra', treatment: 'Smile Makeover', category: 'Smile Makeover', duration: '2 Appointments', age: '31', rating: 5, story: 'My teeth are sparkling white now. Love my custom veneers.', imgSrc: '/patient-smiles/4BA2EE7F-5199-4ABB-8C63-F8133A34F7F1.jpg' },
  { id: 9, name: 'Karan Malhotra', treatment: 'Traditional Braces', category: 'Braces', duration: '14 Months', age: '17', rating: 5, story: 'Got my braces off today! Best alignment and feeling ever.', imgSrc: '/patient-smiles/50B42443-972B-4CEE-917D-29CAD03B0186.PNG' },
  { id: 10, name: 'Meera Nair', treatment: 'SkyAlign™ Clear Aligners', category: 'Aligners', duration: '9 Months', age: '23', rating: 5, story: 'State of the art scanning and results at half the price.', imgSrc: '/patient-smiles/668F8C26-3036-4C0D-BAAE-717142F78AB7.jpg' },
  { id: 11, name: 'Arjun Rao', treatment: 'Dental Implants', category: 'Implants', duration: '3 Months', age: '60', rating: 5, story: 'Can eat solid foods again comfortably. Professional work.', imgSrc: '/patient-smiles/716914F9-C4ED-4DE2-8647-178B0D4BF3FC.PNG' },
  { id: 12, name: 'Neha Kapoor', treatment: 'Smile Makeover', category: 'Smile Makeover', duration: '3 Days', age: '27', rating: 5, story: 'Amazing results with composite bonding and clinical scaling.', imgSrc: '/patient-smiles/9250D92F-32CF-4DD5-80FC-2CC19EE8EFD5.PNG' },
  { id: 13, name: 'Kabir Sen', treatment: 'Lingual Braces', category: 'Braces', duration: '11 Months', age: '25', rating: 5, story: 'Hidden braces on the back of my teeth worked wonders.', imgSrc: '/patient-smiles/93167CE6-F77E-47E8-8AC4-F287B1D2ACF8.PNG' },
  { id: 14, name: 'Riya Sen', treatment: 'SkyAlign™ Clear Aligners', category: 'Aligners', duration: '7 Months', age: '21', rating: 5, story: 'The 3D scanning process was very advanced. 10/10.', imgSrc: '/patient-smiles/99955452-BAD9-4F3C-A527-E39A6569F67F.jpg' },
  { id: 15, name: 'Dev Bajwa', treatment: 'Self-Ligating Braces', category: 'Braces', duration: '9 Months', age: '20', rating: 5, story: 'Very few doctor visits needed compared to normal braces.', imgSrc: '/patient-smiles/99D3BA20-8C28-43A1-926C-1771895A0AFD.jpg' },
  { id: 16, name: 'Ishita Roy', treatment: 'Teeth Whitening', category: 'Smile Makeover', duration: '1 Hour', age: '29', rating: 5, story: 'In-office whitening was super quick and very bright.', imgSrc: '/patient-smiles/A431FCDA-B920-45C8-BAC0-73D3F353A460.jpg' },
  { id: 17, name: 'Yash Vardhan', treatment: 'SkyAlign™ Clear Aligners', category: 'Aligners', duration: '10 Months', age: '33', rating: 5, story: 'Best decision of my life. SkyAlign is absolutely incredible.', imgSrc: '/patient-smiles/AF133DCA-DBD8-41DF-8161-C7CC2F7774B2.jpg' },
  { id: 18, name: 'Tanvi Joshi', treatment: 'Ceramic Braces', category: 'Braces', duration: '13 Months', age: '22', rating: 5, story: 'Ceramic braces matched my teeth perfectly, invisible in photos.', imgSrc: '/patient-smiles/B39746FD-883B-4222-BBF2-AAF5CE40525E.PNG' },
  { id: 19, name: 'Rajesh Mehta', treatment: 'Full Mouth Implants', category: 'Implants', duration: '6 Months', age: '65', rating: 5, story: 'Got my full smile back. Excellent clinical team.', imgSrc: '/patient-smiles/B51D7F2D-630E-43FA-9143-D3F684BEB13A.PNG' },
  { id: 20, name: 'Shruti Desai', treatment: 'Smile Makeover', category: 'Smile Makeover', duration: '1 Week', age: '30', rating: 5, story: 'Flawless veneers. I get compliments every single day.', imgSrc: '/patient-smiles/BC82B2DF-2F6E-4198-9EFB-7E6332A25DEE.PNG' },
  { id: 21, name: 'Manish Kumar', treatment: 'Traditional Braces', category: 'Braces', duration: '15 Months', age: '18', rating: 5, story: 'My crooked teeth are now perfectly straight. Thank you!', imgSrc: '/patient-smiles/C0964D1F-439B-456C-A7F4-4A5E034B0624.jpg' },
  { id: 22, name: 'Preeti Gill', treatment: 'SkyAlign™ Clear Aligners', category: 'Aligners', duration: '8 Months', age: '25', rating: 5, story: 'Highly professional tracking. Got exactly the result promised.', imgSrc: '/patient-smiles/C5DDAEF1-442A-40F0-98A3-2FBB966520F5.PNG' },
  { id: 23, name: 'Sameer Baig', treatment: 'Dental Implants', category: 'Implants', duration: '3 Visits', age: '48', rating: 5, story: 'Very clean clinic and expert implant placement.', imgSrc: '/patient-smiles/C854A664-D8D8-4B35-91DF-96C285C0924A.PNG' },
  { id: 24, name: 'Kirti Sobti', treatment: 'Smile Makeover', category: 'Smile Makeover', duration: '2 Appointments', age: '35', rating: 5, story: 'Veneers corrected my gummy smile perfectly.', imgSrc: '/patient-smiles/C955DF82-DFC3-460B-AE16-9CFC1FDF3C14.jpg' },
  { id: 25, name: 'Pranav Bajaj', treatment: 'Lingual Braces', category: 'Braces', duration: '12 Months', age: '23', rating: 5, story: 'Amazing braces. Kept them hidden during college.', imgSrc: '/patient-smiles/CDE88C3B-ADB7-4D7E-9DEC-96C7211B2E9D.PNG' },
  { id: 26, name: 'Shweta Tiwari', treatment: 'SkyAlign™ Clear Aligners', category: 'Aligners', duration: '7 Months', age: '27', rating: 5, story: 'Super transparent, no one could tell I was wearing them.', imgSrc: '/patient-smiles/D344FB56-C621-4603-B6CF-B3261FF05680.jpg' },
  { id: 27, name: 'Harish Chawla', treatment: 'Dental Implants', category: 'Implants', duration: '1 Day', age: '55', rating: 5, story: 'Single day tooth replacement was fast and professional.', imgSrc: '/patient-smiles/DCD16229-0B97-43CA-B15B-F159E51568F4.jpg' },
  { id: 28, name: 'Vandana Rawat', treatment: 'Smile Makeover', category: 'Smile Makeover', duration: '3 Days', age: '40', rating: 5, story: 'Dr. Achla did a fantastic job with my smile line.', imgSrc: '/patient-smiles/DF72FB07-8436-4715-942F-F67920104F39.PNG' },
  { id: 29, name: 'Nikhil Saxena', treatment: 'Self-Ligating Braces', category: 'Braces', duration: '11 Months', age: '19', rating: 5, story: 'Treatment completed 3 months ahead of expected time!', imgSrc: '/patient-smiles/E5D56F78-7D59-44EB-99ED-C1C0A90EE617.jpg' },
  { id: 30, name: 'Gauri Phogat', treatment: 'SkyAlign™ Clear Aligners', category: 'Aligners', duration: '6 Months', age: '24', rating: 5, story: 'Amazing software prediction. The teeth moved exactly as shown.', imgSrc: '/patient-smiles/E9C73A97-D021-4A37-ADB0-BE85F225BBA8.jpg' },
  { id: 31, name: 'Abhishek Roy', treatment: 'Traditional Braces', category: 'Braces', duration: '16 Months', age: '21', rating: 5, story: 'Best ortho treatment in Rohtak. Very cooperative staff.', imgSrc: '/patient-smiles/EB67ADE4-2447-45EF-946A-9A6751B0853D.jpg' },
  { id: 32, name: 'Kriti Sen', treatment: 'SkyAlign™ Clear Aligners', category: 'Aligners', duration: '9 Months', age: '29', rating: 5, story: 'My bite feels much better and my front teeth are straight now.', imgSrc: '/patient-smiles/EC0F6EBF-4838-43DE-89B8-F3630194F360.jpg' },
  { id: 33, name: 'Raman Khanna', treatment: 'Dental Implants', category: 'Implants', duration: '2 Visits', age: '50', rating: 5, story: 'Very satisfied. No pain during the drill. High precision.', imgSrc: '/patient-smiles/EFD19CCB-A0B3-4AE2-AD79-BC2544C9A80D.jpg' },
  { id: 34, name: 'Pooja Bhatia', treatment: 'Smile Makeover', category: 'Smile Makeover', duration: '1 Week', age: '32', rating: 5, story: 'Veneers closed my gap. I can smile freely in pictures now.', imgSrc: '/patient-smiles/F704BC68-BC52-4FAB-84F9-46BBFE975DCF.jpg' },
  { id: 35, name: 'Vivek Oberoi', treatment: 'Smile Makeover', category: 'Smile Makeover', duration: '45 Mins', age: '37', rating: 5, story: 'Instant shade improvement. Friendly doctors and quick service.', imgSrc: '/patient-smiles/FE121650-9A9C-449D-B559-E9D11246F33A.jpg' }
];

const DENTAL_IMPLANT_FOLDER_PHOTOS = [
  'IMG-20260904-WA0167.jpg',
  'IMG-20260904-WA0168.jpg',
  'IMG-20260904-WA0169.jpg',
  'IMG-20260904-WA0170.jpg',
  'IMG-20260904-WA0171.jpg',
  'IMG-20260904-WA0172.jpg',
  'IMG-20260904-WA0173.jpg',
  'IMG-20260904-WA0174.jpg',
  'IMG-20260904-WA0175.jpg',
  'IMG-20260904-WA0176.jpg',
  'IMG-20260904-WA0177.jpg',
  'IMG-20260904-WA0178.jpg',
  'IMG-20260904-WA0179.jpg',
  'IMG-20260904-WA0180.jpg',
  'IMG-20260904-WA0181.jpg',
  'IMG-20260904-WA0182.jpg',
  'IMG-20260904-WA0183.jpg'
];

const IMPLANT_ROW_PATIENTS = DENTAL_IMPLANT_FOLDER_PHOTOS.map((file, idx) => ({
  id: `implant-row-${idx + 1}`,
  name: `Implant Case #${idx + 1}`,
  treatment: 'Dental Implant Restoration',
  category: 'Implants',
  duration: 'Fixed Placement',
  age: 'Adult',
  rating: 5,
  story: 'Permanent titanium implant procedure with natural chewing restoration and aesthetic alignment.',
  imgSrc: `/Dental Implants/${file}`
}));

const INTRA_ORAL_BRACES_FOLDER_PHOTOS = [
  'IMG-20260904-WA0122.jpg',
  'IMG-20260904-WA0123.jpg',
  'IMG-20260904-WA0124.jpg',
  'IMG-20260904-WA0125.jpg',
  'IMG-20260904-WA0126.jpg',
  'IMG-20260904-WA0127.jpg',
  'IMG-20260904-WA0128.jpg',
  'IMG-20260904-WA0129.jpg',
  'IMG-20260904-WA0130.jpg',
  'IMG-20260904-WA0131.jpg',
  'IMG-20260904-WA0132.jpg',
  'IMG-20260904-WA0133.jpg',
  'IMG-20260904-WA0134.jpg',
  'IMG-20260904-WA0135.jpg',
  'IMG-20260904-WA0136.jpg',
  'IMG-20260904-WA0137.jpg',
  'IMG-20260904-WA0138.jpg',
  'IMG-20260904-WA0139.jpg',
  'IMG-20260904-WA0140.jpg',
  'IMG-20260904-WA0141.jpg',
  'IMG-20260904-WA0142.jpg',
  'IMG-20260904-WA0143.jpg',
  'IMG-20260904-WA0144.jpg',
  'IMG-20260904-WA0145.jpg',
  'IMG-20260904-WA0146.jpg',
  'IMG-20260904-WA0147.jpg',
  'IMG-20260904-WA0148.jpg',
  'IMG-20260904-WA0149.jpg',
  'IMG-20260904-WA0150.jpg',
  'IMG-20260904-WA0151.jpg',
  'IMG-20260904-WA0152.jpg',
  'IMG-20260904-WA0153.jpg',
  'IMG-20260904-WA0154.jpg',
  'IMG-20260904-WA0155.jpg',
  'IMG-20260904-WA0156.jpg',
  'IMG-20260904-WA0157.jpg',
  'IMG-20260904-WA0158.jpg',
  'IMG-20260904-WA0159.jpg',
  'IMG-20260904-WA0160.jpg',
  'IMG-20260904-WA0161.jpg',
  'IMG-20260904-WA0162.jpg',
  'IMG-20260904-WA0163.jpg',
  'IMG-20260904-WA0164.jpg',
  'IMG-20260904-WA0165.jpg',
  'IMG-20260904-WA0166.jpg'
];

const INTRA_ORAL_BRACES_ROW_PATIENTS = INTRA_ORAL_BRACES_FOLDER_PHOTOS.map((file, idx) => ({
  id: `braces-intra-${idx + 1}`,
  name: `Orthodontic Case #${idx + 1}`,
  treatment: 'Specialized Orthodontic Correction',
  category: 'Braces',
  duration: 'Fixed Appliance',
  age: 'Patient',
  rating: 5,
  story: 'Precision clinical orthodontic alignment and bite correction monitored by Prof. Dr. S. K. Yadav.',
  imgSrc: `/Intra oral braces/${file}`
}));

const PRE_POST_FOLDER_PHOTOS = [
  'IMG-20260904-WA0086.jpg',
  'IMG-20260904-WA0087.jpg',
  'IMG-20260904-WA0088.jpg',
  'IMG-20260904-WA0089.jpg',
  'IMG-20260904-WA0090.jpg',
  'IMG-20260904-WA0091.jpg',
  'IMG-20260904-WA0092.jpg',
  'IMG-20260904-WA0093.jpg',
  'IMG-20260904-WA0094.jpg',
  'IMG-20260904-WA0095.jpg',
  'IMG-20260904-WA0096.jpg',
  'IMG-20260904-WA0097.jpg',
  'IMG-20260904-WA0098.jpg',
  'IMG-20260904-WA0099.jpg',
  'IMG-20260904-WA0100.jpg',
  'IMG-20260904-WA0101.jpg',
  'IMG-20260904-WA0102.jpg',
  'IMG-20260904-WA0103.jpg',
  'IMG-20260904-WA0104.jpg',
  'IMG-20260904-WA0105.jpg',
  'IMG-20260904-WA0106.jpg',
  'IMG-20260904-WA0107.jpg',
  'IMG-20260904-WA0108.jpg',
  'IMG-20260904-WA0109.jpg',
  'IMG-20260904-WA0110.jpg',
  'IMG-20260904-WA0111.jpg',
  'IMG-20260904-WA0112.jpg',
  'IMG-20260904-WA0113.jpg',
  'IMG-20260904-WA0114.jpg',
  'IMG-20260904-WA0115.jpg',
  'IMG-20260904-WA0116.jpg',
  'IMG-20260904-WA0117.jpg',
  'IMG-20260904-WA0118.jpg',
  'IMG-20260904-WA0119.jpg',
  'IMG-20260904-WA0120.jpg',
  'IMG-20260904-WA0121.jpg'
];

const PRE_POST_ROW_PATIENTS = PRE_POST_FOLDER_PHOTOS.map((file, idx) => ({
  id: `prepost-row-${idx + 1}`,
  name: `Smile Transformation #${idx + 1}`,
  treatment: 'Before & After Smile Transformation',
  category: 'Smile Makeover',
  duration: 'Complete Care',
  age: 'Patient',
  rating: 5,
  story: 'Complete orthodontic and aesthetic transformation at Shubh Orthodontic & Dental Clinic.',
  imgSrc: `/Pre Post/${file}`
}));

const CATEGORIES = ['All Cases', 'Aligners', 'Braces', 'Implants', 'Smile Makeover'];

const getUnsplashUrl = (imgId) => {
  return `https://images.unsplash.com/${imgId}?auto=format&fit=crop&w=350&h=260&q=80`;
};

export default function PatientGallery() {
  const [activeCategory, setActiveCategory] = useState('All Cases');
  const [activeTab, setActiveTab] = useState('collage'); // 'collage' | 'sliders'
  const [selectedPatient, setSelectedPatient] = useState(null);

  const filteredCases = CLINICAL_CASES.filter((c) => {
    if (activeCategory === 'All Cases') return true;
    return c.category === activeCategory;
  });

  const filteredCollage = COLLAGE_PATIENTS.filter((p) => {
    if (activeCategory === 'All Cases') return true;
    return p.category === activeCategory;
  });

  // Row 1: ONLY photos from public/Dental Implants folder
  const row1 = IMPLANT_ROW_PATIENTS;
  // Row 2: ONLY photos from public/Intra oral braces folder (clean, no text written)
  const row2 = INTRA_ORAL_BRACES_ROW_PATIENTS;
  // Row 3: ONLY photos from public/Pre Post folder
  const row3 = PRE_POST_ROW_PATIENTS;

  const CompactCard = ({ item, hideOverlay = false }) => (
    <div 
      className="compact-patient-card"
      onClick={() => setSelectedPatient(item)}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image 
          src={item.imgSrc || getUnsplashUrl(item.imgId)} 
          alt={item.name} 
          className="compact-card-img" 
          fill
          sizes="(max-width: 768px) 150px, 200px"
          style={{ objectFit: 'cover' }}
        />
      </div>
      {!hideOverlay && (
        <div className="compact-card-overlay">
          <span className="compact-card-treatment">{item.category}</span>
        </div>
      )}
    </div>
  );

  return (
    <section id="gallery" className="section patient-gallery-section" aria-label="Patient Smile Transformations">
      {/* Background Vectors & Subtle Animations */}
      <div className="patient-bg-vectors" aria-hidden="true">
        <div className="patient-vector-grid" />
        <div className="patient-glow-orb orb-gold-top" />
        <div className="patient-glow-orb orb-gold-bottom" />
        <div className="patient-vector-ring ring-1" />
        <div className="patient-vector-ring ring-2" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Cool Improvised Section Header */}
        <div className="section-header text-center" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div className="cool-live-badge">
            <span className="cool-pulse-dot" aria-hidden="true" />
            <span>REAL PATIENT SMILES VERIFIED</span>
          </div>
          
          <h2 className="cool-gallery-title">
            Shubh Dental Clinic
            <span className="cool-title-highlight">Wall of Happy Smiles</span>
          </h2>

          <p style={{ color: '#2A150D', fontSize: '1.1rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.7, fontWeight: 500 }}>
            Browse authentic photos of happy patients treated by <strong style={{ color: '#0E0604', fontWeight: 800 }}>Prof. Dr. S. K. Yadav</strong> &amp; <strong style={{ color: '#0E0604', fontWeight: 800 }}>Dr. Achla Bharti Yadav</strong>.
          </p>

          <div className="cool-chips-row">
            <div className="cool-chip">
              <div className="chip-icon-orb">
                <Star size={13} fill="#D67A41" stroke="none" />
              </div>
              <span>5.0★ Rated</span>
            </div>

            <div className="cool-chip">
              <div className="chip-icon-orb">
                <Camera size={13} />
              </div>
              <span>100% Real Photos</span>
            </div>

            <div className="cool-chip">
              <div className="chip-icon-orb">
                <Award size={13} />
              </div>
              <span>PGI Specialists</span>
            </div>
          </div>
        </div>

        {/* SEO & Educational Smile Makeover Intro (Animated) */}
        <AnimatePresence mode="wait">
          {activeCategory === 'Smile Makeover' && (
            <motion.div 
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
              className="seo-smile-makeover-intro"
            >
              <div className="seo-intro-content">
                <h3 className="seo-intro-title">What is a Digital Smile Makeover?</h3>
                <p className="seo-intro-desc">
                  A Smile Makeover at Shubh Dental Clinic Rohtak is a highly personalized, comprehensive cosmetic dentistry procedure. Led by <strong>Prof. Dr. S. K. Yadav</strong> and <strong>Dr. Achla Bharti Yadav</strong>, we utilize advanced <strong>Digital Smile Design (DSD)</strong> to mathematically architect your perfect smile. 
                </p>
                <p className="seo-intro-desc">
                  Whether addressing chipped teeth, discoloration, or misalignment, our non-invasive approach combines <strong>Custom Porcelain E.Max Veneers</strong>, in-house <strong>SkyAlign™ Clear Aligners</strong>, and laser gum contouring to deliver a flawless, natural-looking, and permanent aesthetic transformation.
                </p>
                <div className="seo-intro-badges">
                  <span><CheckCircle2 size={14} /> Stain-Resistant Veneers</span>
                  <span><CheckCircle2 size={14} /> 3D Digital Previews</span>
                  <span><CheckCircle2 size={14} /> Painless & Non-Invasive</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic Display based on activeTab */}
        <AnimatePresence mode="wait">
          {activeTab === 'collage' ? (
            /* COMPACT COLLAGE VIEW (35 Patients via moving marquees) */
            <motion.div 
              key="collage-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="collage-marquees-wrapper"
            >
              {activeCategory === 'All Cases' ? (
                /* Infinite Scrolling Marquee for All cases (Extremely compact layout) */
                <div className="collage-marquees-container">
                  {/* Row 1: Left */}
                  <div className="collage-marquee-row">
                    <div className="collage-marquee-track scroll-left-slow">
                      <div className="collage-marquee-group">
                        {row1.map(item => <CompactCard key={`r1-a-${item.id}`} item={item} />)}
                      </div>
                      <div className="collage-marquee-group">
                        {row1.map(item => <CompactCard key={`r1-b-${item.id}`} item={item} />)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Row 2: Right */}
                  <div className="collage-marquee-row">
                    <div className="collage-marquee-track scroll-right-slow">
                      <div className="collage-marquee-group">
                        {row2.map(item => <CompactCard key={`r2-a-${item.id}`} item={item} hideOverlay={true} />)}
                      </div>
                      <div className="collage-marquee-group">
                        {row2.map(item => <CompactCard key={`r2-b-${item.id}`} item={item} hideOverlay={true} />)}
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Left */}
                  <div className="collage-marquee-row">
                    <div className="collage-marquee-track scroll-left-slow">
                      <div className="collage-marquee-group">
                        {row3.map(item => <CompactCard key={`r3-a-${item.id}`} item={item} />)}
                      </div>
                      <div className="collage-marquee-group">
                        {row3.map(item => <CompactCard key={`r3-b-${item.id}`} item={item} />)}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Static flex row for filtered cases (Fewer cards, fits on single view) */
                <div className="collage-static-grid">
                  {filteredCollage.map(item => (
                    <CompactCard key={`static-${item.id}`} item={item} />
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            /* INTERACTIVE SLIDER CASES VIEW */
            <motion.div 
              key="sliders-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="cases-interactive-grid"
            >
              {filteredCases.map((item) => (
                <div key={item.id} className="case-study-card">
                  
                  {/* Top Meta Bar */}
                  <div className="case-card-header">
                    <span className="case-treatment-pill">{item.treatment}</span>
                    <span className="case-duration-badge">⏱️ {item.duration}</span>
                  </div>

                  {/* Interactive Drag Slider */}
                  <div className="slider-wrapper">
                    <BeforeAfterSlider
                      beforeSrc={item.beforeSrc}
                      afterSrc={item.afterSrc}
                      beforeAlt={`${item.title} Before`}
                      afterAlt={`${item.title} After`}
                    />
                  </div>

                  {/* Case Info Body */}
                  <div className="case-card-body">
                    <div className="case-patient-row">
                      <div>
                        <h3 className="case-title">{item.title}</h3>
                        <span className="case-patient-name">{item.patient} ({item.age})</span>
                      </div>
                      <div className="stars-row">
                        {[...Array(item.stars)].map((_, i) => (
                          <Star key={i} size={14} fill="#F59E0B" stroke="none" />
                        ))}
                      </div>
                    </div>

                    <p className="case-summary">&ldquo;{item.summary}&rdquo;</p>

                    <div className="case-footer">
                      <span className="case-doctor-tag">Doctor: <strong>{item.doctor}</strong></span>
                      <a href="#book" className="case-cta-btn">
                        Get Similar Result <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Patient Success Story Lightbox / Modal */}
      <AnimatePresence>
        {selectedPatient && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setSelectedPatient(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="patient-modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button className="modal-close-btn" onClick={() => setSelectedPatient(null)}>
                <X size={20} />
              </button>

              <div className="modal-content-grid">
                
                {/* Left Side: Photo Frame */}
                <div className="modal-photo-pane">
                  <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '350px' }}>
                    <Image 
                      src={selectedPatient.imgSrc || getUnsplashUrl(selectedPatient.imgId)} 
                      alt={selectedPatient.name} 
                      className="modal-patient-img"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="smile-heart-badge">
                    <Heart size={16} fill="currentColor" />
                    <span>Happy Patient</span>
                  </div>
                </div>

                {/* Right Side: Detailed Story & Metrics */}
                <div className="modal-info-pane">
                  <div className="modal-badge-row">
                    <span className="modal-treatment-tag">{selectedPatient.treatment}</span>
                    <span className="modal-verified-badge">✓ Verified Case</span>
                  </div>

                  <h3 className="modal-patient-title">
                    {selectedPatient.name} <span className="modal-patient-age">({selectedPatient.age} yrs)</span>
                  </h3>

                  <div className="stars-row" style={{ display: 'flex', gap: '3px', margin: '0.5rem 0 1.25rem' }}>
                    {[...Array(selectedPatient.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" stroke="none" />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <div className="modal-quote-box">
                    <span className="quote-mark-icon">&ldquo;</span>
                    <p className="modal-quote-text">{selectedPatient.story}</p>
                  </div>

                  {/* Clinical Specs */}
                  <div className="clinical-specs-table">
                    <div className="spec-row">
                      <span className="spec-label">Treatment Area</span>
                      <span className="spec-val font-heading">{selectedPatient.category}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">Time Duration</span>
                      <span className="spec-val font-heading">{selectedPatient.duration}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">Clinical Provider</span>
                      <span className="spec-val font-heading">Shubh Dental Specialists</span>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <a 
                    href="#book" 
                    className="modal-action-cta btn-gold" 
                    onClick={() => setSelectedPatient(null)}
                  >
                    Start Your Transformation <ArrowRight size={16} />
                  </a>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .patient-gallery-section {
          background: linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 50%, #FAF6F0 100%);
          padding: 3rem 0;
          position: relative;
          overflow: hidden;
        }

        .patient-bg-vectors {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .patient-vector-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(214, 122, 65, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(214, 122, 65, 0.04) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.6;
        }

        .patient-glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
          opacity: 0.4;
          animation: orbPulse 8s ease-in-out infinite alternate;
        }
        .orb-gold-top {
          width: 450px; height: 450px;
          top: -10%; left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(214, 122, 65, 0.12) 0%, rgba(201, 168, 76, 0.04) 60%, transparent 75%);
        }
        .orb-gold-bottom {
          width: 350px; height: 350px;
          bottom: 5%; right: -5%;
          background: radial-gradient(circle, rgba(201, 168, 76, 0.1) 0%, transparent 70%);
        }
        @keyframes orbPulse {
          0% { opacity: 0.3; transform: translateX(-50%) scale(0.95); }
          100% { opacity: 0.6; transform: translateX(-50%) scale(1.05); }
        }

        .patient-vector-ring {
          position: absolute;
          border-radius: 50%;
          transform-style: preserve-3d;
        }
        .ring-1 {
          width: 700px; height: 700px;
          top: 5%; left: 50%;
          transform: translate(-50%, 0) perspective(1000px) rotateX(65deg);
          border: 1px dashed rgba(214, 122, 65, 0.12);
          animation: ringSpin 35s linear infinite;
        }
        .ring-2 {
          width: 450px; height: 450px;
          top: 15%; left: 50%;
          transform: translate(-50%, 0) perspective(1000px) rotateX(65deg);
          border: 1px solid rgba(201, 168, 76, 0.1);
          animation: ringSpinReverse 25s linear infinite;
        }
        @keyframes ringSpin {
          0% { transform: translate(-50%, 0) perspective(1000px) rotateX(65deg) rotateZ(0deg); }
          100% { transform: translate(-50%, 0) perspective(1000px) rotateX(65deg) rotateZ(360deg); }
        }
        @keyframes ringSpinReverse {
          0% { transform: translate(-50%, 0) perspective(1000px) rotateX(65deg) rotateZ(360deg); }
          100% { transform: translate(-50%, 0) perspective(1000px) rotateX(65deg) rotateZ(0deg); }
        }

        /* Tabs Toggle */
        .gallery-view-tabs {
          display: inline-flex;
          background: #EFE9E0;
          padding: 0.35rem;
          border-radius: 99px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(214, 122, 65, 0.1);
        }

        .gallery-view-tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1.25rem;
          border-radius: 99px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.35s ease;
        }

        .tab-active {
          background: #FFFFFF;
          color: var(--accent-color) !important;
          box-shadow: 0 4px 12px rgba(17, 8, 5, 0.08);
        }

        .gallery-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        /* COOL IMPROVISED HEADER AREA (DARK HIGH-CONTRAST) */
        .cool-live-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(122, 52, 15, 0.09);
          border: 1.5px solid rgba(122, 52, 15, 0.35);
          color: #7A340F;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          padding: 0.45rem 1.1rem;
          border-radius: 99px;
          margin-bottom: 1.25rem;
          box-shadow: 0 4px 15px rgba(122, 52, 15, 0.08);
        }
        .cool-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 8px #10B981;
          animation: coolPulse 2s infinite;
        }
        @keyframes coolPulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        .cool-gallery-title {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          color: #0E0604;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }
        .cool-title-highlight {
          display: block;
          background: linear-gradient(135deg, #7A340F 0%, #A84D1C 45%, #B85C24 70%, #8A3D14 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 5px rgba(122, 52, 15, 0.22));
        }
        .cool-chips-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
          margin: 1.5rem 0 2rem;
        }
        .cool-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background: linear-gradient(135deg, #FFFFFF 0%, #FAF6F0 100%);
          border: 1.5px solid rgba(122, 52, 15, 0.35);
          color: #110805;
          font-size: 0.84rem;
          font-weight: 800;
          padding: 0.45rem 1.05rem;
          border-radius: 99px;
          box-shadow: 0 4px 15px rgba(74, 37, 24, 0.05);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cool-chip:hover {
          transform: translateY(-3px);
          border-color: var(--accent-gold);
          box-shadow: 0 8px 22px rgba(214, 122, 65, 0.2);
        }
        .chip-icon-orb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(214, 122, 65, 0.2) 0%, rgba(201, 168, 76, 0.12) 100%);
          border: 1px solid rgba(214, 122, 65, 0.35);
          color: #D67A41;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .gallery-filter-pill {
          padding: 0.5rem 1.15rem;
          border-radius: 99px;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-secondary);
          background: #FFFFFF;
          border: 1.5px solid rgba(214, 122, 65, 0.15);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pill-active {
          background: linear-gradient(135deg, #110805, #2A150B) !important;
          color: var(--accent-gold-light) !important;
          border-color: var(--text-primary) !important;
          box-shadow: 0 8px 20px rgba(17, 8, 5, 0.15);
        }

        /* SEO Intro Block */
        .seo-smile-makeover-intro {
          overflow: hidden;
          margin-bottom: 2rem;
        }
        .seo-intro-content {
          background: linear-gradient(145deg, #FFFFFF 0%, #FAF8F5 100%);
          border: 1px solid rgba(214, 122, 65, 0.25);
          border-radius: 20px;
          padding: 2.5rem;
          max-width: 900px;
          margin: 0 auto;
          box-shadow: 0 15px 45px rgba(214, 122, 65, 0.08);
          position: relative;
        }
        .seo-intro-content::before {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 4px; height: 100%;
          background: linear-gradient(to bottom, #D67A41, #C9A84C);
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }
        .seo-intro-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: #1A0C06;
          margin-bottom: 1rem;
        }
        .seo-intro-desc {
          font-size: 0.98rem;
          color: #4A3A33;
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        .seo-intro-desc strong {
          color: #D67A41;
          font-weight: 700;
        }
        .seo-intro-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px dashed rgba(214, 122, 65, 0.2);
        }
        .seo-intro-badges span {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: #2A150B;
        }
        .seo-intro-badges span svg {
          color: #10B981;
        }

        /* COMPACT MARQUEES COLLAGE */
        .collage-marquees-wrapper {
          margin-top: 2rem;
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 100%;
        }

        .collage-marquees-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .collage-marquee-row {
          display: flex;
          overflow: hidden;
          width: 100%;
        }

        .collage-marquee-track {
          display: flex;
          gap: 0.75rem;
          width: max-content;
        }

        .collage-marquee-group {
          display: flex;
          gap: 0.75rem;
          padding-right: 0.75rem;
        }

        .scroll-left-slow {
          animation: scrollLeftMarquee 45s linear infinite;
        }

        .scroll-right-slow {
          animation: scrollRightMarquee 45s linear infinite;
        }

        .collage-marquee-row:hover .collage-marquee-track {
          animation-play-state: paused;
        }

        @keyframes scrollLeftMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRightMarquee {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* COMPACT CARD STYLING */
        .compact-patient-card {
          width: 190px;
          height: 140px;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(214, 122, 65, 0.15);
          cursor: pointer;
          flex-shrink: 0;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.03);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .compact-patient-card:hover {
          transform: translateY(-5px) scale(1.03);
          border-color: rgba(214, 122, 65, 0.4);
          box-shadow: 0 15px 30px rgba(214, 122, 65, 0.12);
        }

        .compact-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .compact-patient-card:hover .compact-card-img {
          transform: scale(1.08);
        }

        .compact-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(26, 13, 8, 0.9) 0%, rgba(26, 13, 8, 0.2) 65%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0.85rem;
          transition: all 0.3s ease;
        }

        .compact-patient-card:hover .compact-card-overlay {
          background: linear-gradient(to top, rgba(26, 13, 8, 0.95) 0%, rgba(26, 13, 8, 0.4) 65%, transparent 100%);
        }

        .compact-card-treatment {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--accent-gold-light);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .compact-card-name {
          font-size: 0.9rem;
          font-weight: 750;
          color: #FFFFFF;
          margin-top: 0.1rem;
        }

        /* STATIC GRID (FILTERED CASES) */
        .collage-static-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
          margin-top: 2rem;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        /* CASES GRID (SLIDERS) */
        .cases-interactive-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
          margin-top: 3.5rem;
        }

        /* Premium Card Styling */
        .case-study-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 28px;
          padding: 1.5rem;
          border: 1px solid rgba(214, 122, 65, 0.15);
          box-shadow: 0 20px 40px rgba(17, 8, 5, 0.04);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .case-study-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(214, 122, 65, 0.12);
          border-color: rgba(214, 122, 65, 0.4);
        }
        .case-study-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(214, 122, 65, 0.05), transparent 70%);
          pointer-events: none;
        }

        .case-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }

        .case-treatment-pill {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--accent-gold-dark);
          background: rgba(214, 122, 65, 0.1);
          padding: 0.3rem 0.85rem;
          border-radius: 99px;
          border: 1px solid rgba(214, 122, 65, 0.25);
        }

        .case-duration-badge {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .slider-wrapper {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          margin-bottom: 1.25rem;
        }

        .case-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .case-patient-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .case-title {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.25;
        }

        .case-patient-name {
          font-size: 0.82rem;
          color: var(--accent-gold-dark);
          font-weight: 700;
        }

        .case-summary {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          font-style: italic;
        }

        .case-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.85rem;
          border-top: 1px dashed rgba(0, 0, 0, 0.08);
          font-size: 0.82rem;
        }

        .case-doctor-tag {
          color: var(--text-muted);
        }
        .case-doctor-tag strong {
          color: var(--accent-gold-dark);
        }

        .case-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-weight: 800;
          color: var(--text-primary);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .case-cta-btn:hover {
          color: var(--accent-gold);
        }

        /* MODAL / LIGHTBOX WINDOW */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(17, 8, 5, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .patient-modal-card {
          width: 100%;
          max-width: 900px;
          background: #FAF8F5;
          border: 1px solid rgba(214, 122, 65, 0.3);
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.4);
          position: relative;
        }

        .modal-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid rgba(214, 122, 65, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .modal-close-btn:hover {
          background: #D67A41;
          color: #FFFFFF;
          transform: rotate(90deg);
        }

        .modal-content-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.3fr;
          min-height: 500px;
        }

        .modal-photo-pane {
          position: relative;
          background: #1A0D08;
          min-height: 400px;
        }

        .modal-patient-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .smile-heart-badge {
          position: absolute;
          top: 1.25rem;
          left: 1.25rem;
          background: rgba(214, 122, 65, 0.9);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #FFFFFF;
          padding: 0.45rem 1rem;
          border-radius: 99px;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .modal-info-pane {
          padding: 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .modal-badge-row {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .modal-treatment-tag {
          font-size: 0.78rem;
          font-weight: 800;
          color: #D67A41;
          background: rgba(214, 122, 65, 0.1);
          padding: 0.3rem 0.85rem;
          border-radius: 99px;
          border: 1px solid rgba(214, 122, 65, 0.25);
        }

        .modal-verified-badge {
          font-size: 0.78rem;
          font-weight: 700;
          color: #10B981;
        }

        .modal-patient-title {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.15;
        }

        .modal-patient-age {
          font-size: 1.2rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .modal-quote-box {
          position: relative;
          background: #FFFFFF;
          padding: 1.5rem 1.75rem;
          border-radius: 20px;
          border: 1px solid rgba(214, 122, 65, 0.15);
          margin-bottom: 1.5rem;
        }

        .quote-mark-icon {
          position: absolute;
          top: -0.25rem;
          left: 0.5rem;
          font-size: 3rem;
          color: rgba(214, 122, 65, 0.15);
          font-family: serif;
          line-height: 1;
        }

        .modal-quote-text {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          font-style: italic;
          position: relative;
          z-index: 2;
        }

        .clinical-specs-table {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px dashed rgba(214, 122, 65, 0.2);
        }

        .spec-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
        }

        .spec-label {
          color: var(--text-muted);
        }

        .spec-val {
          font-weight: 700;
          color: var(--text-primary);
        }

        .modal-action-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          border-radius: 99px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.4s ease;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-align: center;
        }

        @media (max-width: 992px) {
          .cases-interactive-grid {
            grid-template-columns: 1fr;
          }
          .modal-content-grid {
            grid-template-columns: 1fr;
          }
          .modal-photo-pane {
            min-height: 300px;
          }
          .modal-info-pane {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .patient-gallery-section {
            padding: 2.75rem 1rem !important;
          }
          .cool-gallery-title {
            font-size: 1.75rem !important;
            margin-bottom: 0.65rem !important;
          }
          .cool-chips-row {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            justify-content: center !important;
            gap: 0.35rem !important;
            margin: 0.85rem auto 1.25rem !important;
            width: 100% !important;
          }
          .cool-chip {
            padding: 0.28rem 0.55rem !important;
            font-size: 0.68rem !important;
            gap: 0.3rem !important;
            white-space: nowrap !important;
            border-radius: 99px !important;
          }
          .chip-icon-orb {
            width: 18px !important;
            height: 18px !important;
          }
          .chip-icon-orb svg {
            width: 10px !important;
            height: 10px !important;
          }
          .gallery-filter-pill {
            padding: 0.4rem 0.85rem;
            font-size: 0.76rem;
          }
          .collage-marquees-wrapper {
            margin-top: 1rem !important;
          }
          .collage-marquees-container {
            gap: 0.5rem !important;
          }
          .compact-patient-card {
            width: 115px !important;
            height: 85px !important;
            border-radius: 12px !important;
          }
          .compact-card-overlay {
            padding: 0.4rem !important;
          }
          .compact-card-treatment {
            font-size: 0.52rem !important;
          }
          .collage-marquee-track {
            gap: 0.45rem;
          }
          .collage-marquee-group {
            gap: 0.45rem;
            padding-right: 0.45rem;
          }
          .scroll-left-slow, .scroll-right-slow {
            animation-duration: 25s;
          }
          /* Hide 3rd row on mobile so the whole gallery fits effortlessly in 1 viewport */
          .collage-marquee-row:nth-child(3) {
            display: none !important;
          }
        }
        @media (max-width: 420px) {
          .cool-chips-row {
            gap: 0.25rem !important;
          }
          .cool-chip {
            padding: 0.22rem 0.45rem !important;
            font-size: 0.62rem !important;
          }
          .compact-patient-card {
            width: 105px !important;
            height: 78px !important;
          }
        }
      `}} />
    </section>
  );
}
