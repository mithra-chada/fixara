'use client';

import Link from 'next/link';
import FadeText from '@/components/ui/FadeText';
import WordPullUp from '@/components/ui/WordPullUp';

export default function ForProfessionalsTeaser() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#F5F5F7', padding: '80px 0' }}>
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 mb-6"
          style={{
            background: 'rgba(0, 102, 204, 0.10)',
            backdropFilter: 'blur(16px) saturate(180%)',
            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
            border: '1px solid rgba(0, 102, 204, 0.28)',
            borderRadius: 9999,
            padding: '6px 14px',
            fontSize: 12,
            fontWeight: 600,
            color: '#0066CC',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
          }}
        >
          FOR TECHNICIANS
        </div>

        <h2
          style={{
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            fontWeight: 600,
            lineHeight: 1.10,
            color: '#1D1D1F',
            fontFamily: 'Inter, SF Pro Display, system-ui, sans-serif',
            marginBottom: 16,
          }}
        >
          <FadeText text="Turn your skills into steady work." />
        </h2>

        <p
          className="max-w-3xl mx-auto"
          style={{
            fontSize: 'clamp(18px, 2.5vw, 28px)',
            fontWeight: 400,
            lineHeight: 1.4,
            color: '#1D1D1F',
            fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
            marginBottom: 32,
          }}
        >
          <WordPullUp
            text="Join Fixara's network of verified industrial technicians. Get matched to real jobs near you, build your reputation, grow your income."
            delay={200}
          />
        </p>

        <Link
          href="/for-professionals"
          className="inline-flex items-center justify-center text-white font-medium text-sm active:scale-95 transition-transform"
          style={{
            background: '#0066CC',
            borderRadius: 9999,
            padding: '14px 28px',
            fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
          }}
        >
          Apply as a Technician
        </Link>
      </div>
    </section>
  );
}
