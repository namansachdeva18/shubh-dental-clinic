export default function TreatmentsLoading() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#FAF8F5',
      padding: '2rem 1rem',
      maxWidth: 1200,
      margin: '0 auto'
    }}>
      {/* Header skeleton */}
      <div style={{
        height: '2rem', width: '60%', background: '#E8DDD6',
        borderRadius: 8, marginBottom: '0.75rem',
        animation: 'pulse 1.5s ease-in-out infinite'
      }} />
      <div style={{
        height: '1rem', width: '85%', background: '#EEE5DF',
        borderRadius: 8, marginBottom: '1.5rem',
        animation: 'pulse 1.5s ease-in-out infinite'
      }} />

      {/* Filter pills skeleton */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {[100, 160, 120, 140, 110, 130].map((w, i) => (
          <div key={i} style={{
            height: '2rem', width: w, background: '#EEE5DF',
            borderRadius: 99, animation: 'pulse 1.5s ease-in-out infinite'
          }} />
        ))}
      </div>

      {/* Cards skeleton */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1rem'
      }}>
        {[1,2,3,4,5,6].map(i => (
          <div key={i} style={{
            background: '#1D0E09', borderRadius: 16,
            padding: '1.15rem', height: 260,
            animation: 'pulse 1.5s ease-in-out infinite'
          }} />
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}} />
    </div>
  );
}
