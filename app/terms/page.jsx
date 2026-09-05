export const metadata = {
  title: 'Terms of Service | Shubh Dental Clinic Rohtak',
  description: 'Terms and conditions for using the Shubh Orthodontic & Dental Clinic website and services.',
  alternates: {
    canonical: 'https://www.shubhdental.com/terms',
  },
};

export default function TermsPage() {
  return (
    <>
      <div className="page-header" style={{ background: 'var(--bg-dark)', padding: '4rem 0 3rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '1rem', fontWeight: 800 }}>Terms of Service</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
            Last updated: August 2026
          </p>
        </div>
      </div>
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="prose" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>1. Agreement to Terms</h2>
            <p>By accessing our website and utilizing our dental services at Shubh Orthodontic & Dental Clinic, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.</p>
            
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>2. Medical Disclaimer</h2>
            <p>The information provided on our website is for educational and informational purposes only and does not constitute medical or dental advice. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness or accuracy of this information.</p>
            <p>Any reliance you place on such information is strictly at your own risk. You should always consult with our qualified dental professionals regarding any specific dental conditions or treatment plans.</p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>3. Appointments & Cancellations</h2>
            <p>We value your time and ours. When you book an appointment, we reserve that time exclusively for you. We kindly request that you provide at least 24 hours notice if you need to cancel or reschedule your appointment.</p>
            
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>4. Treatment Outcomes</h2>
            <p>While we use the highest standard of care and advanced materials, biological responses to dental treatments vary from person to person. As such, we cannot guarantee specific outcomes or results. Treatment durations (such as for braces or Invisalign) are estimates and may change based on biological response and patient compliance.</p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>5. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>
              <strong>Shubh Orthodontic and Dental Clinic</strong><br />
              Tilak Nagar, Lane 9 Corner, Opposite Swami Nitanand Public School<br />
              Delhi Bypass Road, Rohtak, Haryana<br />
              Phone: +91-8685048414
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
