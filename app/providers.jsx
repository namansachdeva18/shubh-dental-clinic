'use client';
import { useEffect } from 'react';
import { initAttribution } from './lib/attribution';

export function Providers({ children }) {
  useEffect(() => {
    initAttribution();
  }, []);

  return <>{children}</>;
}
