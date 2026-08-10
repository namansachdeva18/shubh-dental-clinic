'use client';
import { useRef, useState, useEffect, useCallback } from 'react';

export default function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt = 'Before', afterAlt = 'After' }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePos = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e) => { setIsDragging(true); updatePos(e.clientX); };
  const onMouseMove = (e) => { if (isDragging) updatePos(e.clientX); };
  const onMouseUp = () => setIsDragging(false);
  const onTouchStart = (e) => { setIsDragging(true); updatePos(e.touches[0].clientX); };
  const onTouchMove = (e) => { if (isDragging) { e.preventDefault(); updatePos(e.touches[0].clientX); } };
  const onTouchEnd = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isDragging, onMouseMove]);

  return (
    <div
      ref={containerRef}
      className="ba-slider gpu-accelerated"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      role="slider"
      aria-valuenow={Math.round(sliderPos)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Before and after comparison slider"
      tabIndex={0}
      style={{ userSelect: 'none', cursor: 'col-resize', position: 'relative', width: '100%', aspectRatio: '4 / 3', minHeight: '260px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}
    >
      {/* After (base) */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src={afterSrc} alt={afterAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} draggable={false} />
        <span style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(14,122,138,0.85)', color: '#fff', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', padding: '0.25rem 0.6rem', borderRadius: '9999px' }}>AFTER</span>
      </div>

      {/* Before (clipped) */}
      <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
        <img src={beforeSrc} alt={beforeAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} draggable={false} />
        <span style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(10,46,54,0.85)', color: '#fff', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', padding: '0.25rem 0.6rem', borderRadius: '9999px' }}>BEFORE</span>
      </div>

      {/* Handle */}
      <div className="ba-handle" style={{ left: `${sliderPos}%` }}>
        <div className="ba-handle-circle">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M6 9l-4 0M6 9l-3 3M6 9l-3-3M12 9l4 0M12 9l3 3M12 9l3-3" stroke="#634230" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
