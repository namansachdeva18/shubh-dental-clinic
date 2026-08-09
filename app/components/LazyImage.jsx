'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function LazyImage({ src, alt, width, height, fill, className, style, priority = false, sizes }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`shimmer ${className || ''}`}
        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height, ...style, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', ...style }}
        aria-label={alt}
        role="img"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
      </div>
    );
  }

  return (
    <div style={{ position: fill ? 'relative' : 'static', width: fill ? '100%' : width, height: fill ? '100%' : height, ...style }}>
      {!loaded && (
        <div
          className="shimmer"
          style={{ position: 'absolute', inset: 0, zIndex: 1, borderRadius: 'inherit' }}
          aria-hidden="true"
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        className={className}
        sizes={sizes}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease', objectFit: 'cover', ...(!fill ? { width, height } : {}) }}
      />
    </div>
  );
}
