'use client';

import NumberTicker from '@/components/ui/NumberTicker';

const stats = [
  { value: 500, suffix: '+', label: 'Verified Technicians' },
  { value: 15, suffix: '+', label: 'Machine Categories' },
  { value: 4, prefix: '< ', suffix: ' hrs', label: 'Average Dispatch Time' },
  { value: 100, suffix: '%', label: 'Background Verified' },
];

export default function TrustBar() {
  return (
    <section style={{ background: '#F5F5F7', padding: '40px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center py-4"
              style={{
                borderRight: i < stats.length - 1 ? '1px solid #E0E0E0' : 'none',
              }}
            >
              <div
                style={{
                  fontSize: 40,
                  fontWeight: 600,
                  color: '#1D1D1F',
                  fontFamily: 'Inter, SF Pro Display, system-ui, sans-serif',
                  lineHeight: 1.2,
                }}
              >
                <NumberTicker
                  target={stat.value}
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix}
                  duration={1500}
                />
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: '#7A7A7A',
                  fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
                  marginTop: 4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
