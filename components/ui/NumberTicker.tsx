'use client';

import { useNumberTicker } from '@/hooks/useNumberTicker';

interface NumberTickerProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function NumberTicker({
  target,
  prefix = '',
  suffix = '',
  duration = 1500,
  className = '',
  style,
}: NumberTickerProps) {
  const { ref, count } = useNumberTicker(target, duration);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{count}{suffix}
    </span>
  );
}
