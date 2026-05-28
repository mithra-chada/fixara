'use client';

import { useEffect, useState } from 'react';

export function useWordPullUp(delay = 0) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return { visible };
}
