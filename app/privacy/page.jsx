export const metadata = {
  title: 'Privacy Policy | Shubh Dental Clinic Rohtak',
  description: 'Privacy policy and patient data protection guidelines for Shubh Orthodontic & Dental Clinic.',
  alternates: {
    canonical: 'https://www.shubhdental.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <div className="page-header" style={{ background: 'var(--bg-dark)', padding: '4rem 0 3rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '1rem', fontWeight: 800 }}>Privacy Policy</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
            Last updated: August 2026
          </p>
        </div>
      </div>
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="prose" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>1. Introduction</h2>
            <p>At Shubh Orthodontic & Dental Clinic, we are committed to protecting the privacy and security of our patients' personal and medical information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our clinic or use our website.</p>
            
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>2. Information We Collect</h2>
            <p>We collect personal information that you voluntarily provide to us when registering at the clinic, expressing an interest in obtaining information about our services, or booking an appointment through our website. This includes:</p>
            <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0' }}>
              <li>Name and contact details (phone number, email address)</li>
              <li>Medical history and dental records</li>
              <li>Radiographs (X-rays) and clinical photographs</li>
              <li>Payment and insurance information</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>3. How We Use Your Information</h2>
            <p>We use the information we collect or receive to:</p>
            <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0' }}>
              <li>Provide, operate, and maintain our dental services</li>
              <li>Improve, personalize, and expand our patient care</li>
              <li>Understand and analyze how you use our website</li>
              <li>Communicate with you regarding appointments, treatments, and follow-ups</li>
              <li>Process payments and coordinate with insurance providers</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>4. Data Security</h2>
            <p>We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>5. Contact Us</h2>
            <p>If you have questions or comments about this policy, you may contact us at:</p>
            <p>
              <strong>Shubh Orthodontic and Dental Clinic</strong><br />
              Tilak Nagar, Lane 9 Corner, Opposite Swami Nitanand Public School<br />
              Delhi Bypass Road, Rohtak, Haryana<br />
              Phone: +91-8685048414<br />
              Email: sky20083@gmail.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
