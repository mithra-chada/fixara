'use client';

import { ShieldCheck, EyeOff, BadgeCheck } from 'lucide-react';

const cards = [
  {
    Icon: ShieldCheck,
    title: 'Verified & Vetted',
    body: 'Every technician is skill-tested, background-checked, and rated by real MSME clients before they reach your floor.',
  },
  {
    Icon: EyeOff,
    title: 'Anonymous Until Booked',
    body: "Browse by skill and machine type. The technician's identity is revealed only after you confirm — your data stays protected.",
  },
  {
    Icon: BadgeCheck,
    title: 'Pay After the Job',
    body: 'No upfront payments. You pay only when the work is done and you\'re satisfied. Transparent pricing, no surprises.',
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#FBFBFD', padding: '80px 0' }}>
      {/* Light section blobs */}
      <div className="absolute pointer-events-none" style={{
        top: '-10%', left: '-5%', width: '45%', height: '55%',
        background: 'radial-gradient(ellipse, rgba(0,102,204,0.10) 0%, transparent 70%)',
        filter: 'blur(40px)', borderRadius: '50%', zIndex: 0,
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: '-5%', right: '-5%', width: '40%', height: '50%',
        background: 'radial-gradient(ellipse, rgba(0,102,204,0.07) 0%, transparent 65%)',
        filter: 'blur(35px)', borderRadius: '50%', zIndex: 0,
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center mb-12"
          style={{
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            fontWeight: 600,
            lineHeight: 1.10,
            color: '#1D1D1F',
            fontFamily: 'Inter, SF Pro Display, system-ui, sans-serif',
          }}
        >
          Built for the shop floor.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="transition-transform duration-200"
              style={{
                background: 'rgba(255,255,255,0.60)',
                backdropFilter: 'blur(24px) saturate(190%) brightness(1.03)',
                WebkitBackdropFilter: 'blur(24px) saturate(190%) brightness(1.03)',
                border: '1px solid rgba(255,255,255,0.75)',
                borderRadius: 18,
                padding: 32,
                boxShadow: `0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.07), 0 12px 32px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.95)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <card.Icon size={32} color="#0066CC" strokeWidth={1.5} />
              <h3
                style={{
                  fontSize: 21,
                  fontWeight: 600,
                  color: '#1D1D1F',
                  fontFamily: 'Inter, SF Pro Display, system-ui, sans-serif',
                  marginTop: 16,
                  marginBottom: 8,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  lineHeight: 1.47,
                  color: '#333333',
                  fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
