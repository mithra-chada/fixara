'use client';

import { useBlurIn } from '@/hooks/useBlurIn';

interface BlurInTextProps {
  text: string;
  delay?: number;
  stagger?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function BlurInText({ text, delay = 0, stagger = 80, className = '', style }: BlurInTextProps) {
  const { visible } = useBlurIn(delay, stagger);
  const words = text.split(' ');

  return (
    <span className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block mr-[0.25em] transition-all duration-700"
          style={{
            filter: visible ? 'blur(0px)' : 'blur(8px)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transitionDelay: `${i * stagger}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
