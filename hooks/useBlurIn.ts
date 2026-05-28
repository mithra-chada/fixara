'use client';

import { useEffect, useRef, useState } from 'react';

export function useBlurIn(delay = 0, stagger = 80) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return { ref, visible, stagger };
}
