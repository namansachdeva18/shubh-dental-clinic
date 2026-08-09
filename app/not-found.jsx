import Link from 'next/link';

export const metadata = {
  title: '404 — Page Not Found | Shubh Dental Clinic Rohtak',
  description: 'The page you are looking for does not exist. Return to Shubh Orthodontic & Dental Clinic homepage.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-primary)',
      padding: '4rem 1.5rem',
      textAlign: 'center',
    }}>
      <div style={{
        fontSize: '6rem',
        fontWeight: 900,
        fontFamily: 'var(--font-heading)',
        color: 'var(--accent-gold)',
        lineHeight: 1,
        marginBottom: '1rem',
      }}>
        404
      </div>
      <h1 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
        color: 'var(--text-primary)',
        fontWeight: 800,
        marginBottom: '1rem',
      }}>
        Page Not Found
      </h1>
      <p style={{
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        maxWidth: '500px',
        lineHeight: 1.7,
        marginBottom: '2.5rem',
      }}>
        The page you are looking for may have been moved or doesn't exist.
        Let us help you find what you need.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          href="/"
          className="btn btn-gold"
          style={{ textDecoration: 'none' }}
        >
          Go to Homepage
        </Link>
        <Link
          href="/contact"
          className="btn btn-secondary"
          style={{ textDecoration: 'none' }}
        >
          Contact Us
        </Link>
        <a
          href="tel:+918685048414"
          className="btn btn-secondary"
          style={{ textDecoration: 'none' }}
        >
          📞 Call Clinic
        </a>
      </div>

      {/* Quick Treatment Links */}
      <div style={{ marginTop: '3rem' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Popular Treatments
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { name: 'Dental Braces', href: '/treatments/dental-braces' },
            { name: 'Invisalign', href: '/treatments/invisalign-clear-aligners' },
            { name: 'Dental Implants', href: '/treatments/dental-implants' },
            { name: 'Smile Makeover', href: '/treatments/smile-makeover' },
          ].map(t => (
            <Link
              key={t.href}
              href={t.href}
              style={{
                padding: '0.4rem 1rem',
                background: 'var(--accent-light)',
                color: 'var(--accent-color)',
                borderRadius: '99px',
                fontSize: '0.85rem',
                fontWeight: 600,
                textDecoration: 'none',
                border: '1px solid var(--border-color)',
              }}
            >
              {t.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
