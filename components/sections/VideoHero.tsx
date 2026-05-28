'use client';

import { useState } from 'react';
import Link from 'next/link';
import BlurInText from '@/components/ui/BlurInText';
import WordPullUp from '@/components/ui/WordPullUp';
import NumberTicker from '@/components/ui/NumberTicker';

export default function VideoHero() {
  const [email, setEmail] = useState('');

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* VIDEO LAYER */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-mechanic-working-in-a-car-engine-43571-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 video-overlay" style={{ zIndex: 1 }} />

      {/* CONTENT ROW */}
      <div
        className="relative z-10 flex flex-col lg:flex-row items-center min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 gap-12 lg:gap-16"
        style={{ zIndex: 10 }}
      >
        {/* LEFT COLUMN */}
        <div className="flex-1 lg:max-w-[55%] pt-12 lg:pt-0">
          {/* Eyebrow chip */}
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
              color: '#2997FF',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
            }}
          >
            Launching in Hyderabad
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(28px, 5vw, 56px)',
              fontWeight: 600,
              lineHeight: 1.07,
              letterSpacing: '-0.28px',
              color: '#FFFFFF',
              fontFamily: 'Inter, SF Pro Display, system-ui, sans-serif',
              marginBottom: 20,
            }}
          >
            <BlurInText text="Industrial expertise, dispatched." stagger={80} />
          </h1>

          {/* Lead */}
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              fontWeight: 400,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.85)',
              fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
              marginBottom: 32,
            }}
          >
            <WordPullUp
              text="Fixara connects MSME manufacturers with verified skilled technicians for machine repair and servicing — dispatched to your shop floor within hours."
              delay={400}
            />
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4" style={{ marginBottom: 24 }}>
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
              Join the Waitlist
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center text-white font-medium text-sm active:scale-95 transition-all"
              style={{
                background: 'transparent',
                borderRadius: 9999,
                padding: '14px 28px',
                fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
                border: '1px solid rgba(255,255,255,0.40)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.70)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.40)';
              }}
            >
              See How It Works
            </Link>
          </div>

          {/* Email input */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-white placeholder-white/50"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.20)',
                  borderRadius: 9999,
                  height: 48,
                  padding: '0 20px',
                  fontSize: 15,
                  fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
                  outline: 'none',
                }}
              />
            </div>
            <button
              className="text-white font-medium text-sm active:scale-95 transition-transform whitespace-nowrap"
              style={{
                background: '#0066CC',
                borderRadius: 9999,
                padding: '0 24px',
                height: 48,
                fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
              }}
            >
              Notify Me
            </button>
          </div>

          <p
            style={{
              fontSize: 12,
              color: 'rgba(255,255,255,0.55)',
              fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
              marginTop: 12,
            }}
          >
            Free to join. No spam.
          </p>
        </div>

        {/* RIGHT COLUMN — Glass Stat Panel */}
        <div
          className="hidden lg:block"
          style={{
            flex: '0 0 42%',
            maxWidth: 480,
          }}
        >
          <div
            style={{
              background: 'rgba(255,255,255,0.10)',
              backdropFilter: 'blur(40px) saturate(200%) brightness(1.1)',
              WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.1)',
              border: '1px solid rgba(255,255,255,0.20)',
              borderRadius: 24,
              padding: 40,
              boxShadow: `
                0 2px 4px rgba(0,0,0,0.10),
                0 8px 32px rgba(0,0,0,0.20),
                0 32px 64px rgba(0,0,0,0.15),
                inset 0 1px 0 rgba(255,255,255,0.25),
                inset 0 -1px 0 rgba(0,0,0,0.10),
                inset 1px 0 0 rgba(255,255,255,0.15)
              `,
            }}
          >
            {/* Panel header */}
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.50)',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
              }}
            >
              Why MSMEs trust Fixara
            </p>

            <div style={{ height: 1, background: 'rgba(255,255,255,0.10)', margin: '16px 0' }} />

            {/* Stat rows */}
            <div>
              {[
                { value: 500, suffix: '+', label: 'Verified Technicians' },
                { value: 15, suffix: '+', label: 'Machine Categories' },
                { value: 4, prefix: '< ', suffix: ' hrs', label: 'Average Dispatch Time' },
                { value: 100, suffix: '%', label: 'Background Verified' },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    padding: '16px 0',
                    borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  }}
                >
                  <div
                    style={{
                      fontSize: 32,
                      fontWeight: 600,
                      color: '#FFFFFF',
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
                      fontSize: 13,
                      fontWeight: 400,
                      color: 'rgba(255,255,255,0.55)',
                      fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
                      marginTop: 4,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Dispatch chip */}
            <div
              className="mt-5"
              style={{
                background: 'rgba(0,102,204,0.20)',
                border: '1px solid rgba(41,151,255,0.35)',
                borderRadius: 10,
                padding: '12px 16px',
                color: '#2997FF',
                fontSize: 13,
                fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
                fontWeight: 500,
              }}
            >
              Dispatch target: under 4 hours in Hyderabad
            </div>

            {/* 3-step summary */}
            <div
              className="mt-3"
              style={{
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 14,
                padding: 20,
              }}
            >
              {[
                'Post your requirement',
                'We match the right technician',
                'Pay after job is done',
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3" style={{ marginBottom: i < 2 ? 10 : 0 }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: '#0066CC',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.75)',
                      fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
                    }}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
