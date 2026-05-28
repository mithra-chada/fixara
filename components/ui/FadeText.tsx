'use client';

import { useFadeText } from '@/hooks/useFadeText';

interface FadeTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function FadeText({ text, className = '', style }: FadeTextProps) {
  const { ref, visible } = useFadeText(0.2);

  return (
    <span
      ref={ref}
      className={`inline-block transition-all duration-700 ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        ...style,
      }}
    >
      {text}
    </span>
  );
}
