'use client';
import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ target, suffix = '', prefix = '', isDecimal = false, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const targetNum = parseFloat(target);

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * targetNum;
      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(targetNum);
    };

    requestAnimationFrame(step);
  }, [started, target, duration, isDecimal]);

  return (
    <span ref={ref} aria-label={`${prefix}${target}${suffix}`}>
      {prefix}{isDecimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
    </span>
  );
}
