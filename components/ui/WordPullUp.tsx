'use client';

import { useWordPullUp } from '@/hooks/useWordPullUp';

interface WordPullUpProps {
  text: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function WordPullUp({ text, delay = 0, className = '', style }: WordPullUpProps) {
  const { visible } = useWordPullUp(delay);
  const words = text.split(' ');

  return (
    <span className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block mr-[0.25em] transition-all duration-500"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: `${delay + i * 60}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
