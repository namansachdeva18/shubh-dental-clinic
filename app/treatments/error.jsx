'use client';
import Link from 'next/link';

export default function TreatmentsError({ error, reset }) {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem',
      background: '#FAF8F5',
      textAlign: 'center',
      gap: '1rem'
    }}>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#110805' }}>
        Unable to load treatments
      </h2>
      <p style={{ color: '#6A564D', fontSize: '0.9rem', maxWidth: 360 }}>
        Something went wrong. Please try again.
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={reset}
          style={{
            background: '#D67A41', color: '#fff', border: 'none',
            padding: '0.65rem 1.5rem', borderRadius: 99, fontWeight: 700,
            fontSize: '0.88rem', cursor: 'pointer'
          }}
        >
          Try Again
        </button>
        <Link href="/" style={{
          background: '#fff', color: '#110805',
          border: '1px solid rgba(74,37,24,0.18)',
          padding: '0.65rem 1.5rem', borderRadius: 99, fontWeight: 700,
          fontSize: '0.88rem', textDecoration: 'none'
        }}>
          Go Home
        </Link>
      </div>
    </div>
  );
}
