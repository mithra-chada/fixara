import Link from 'next/link';

interface SubNavProps {
  pageName: string;
  showCta?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export default function SubNav({ 
  pageName, 
  showCta = true, 
  ctaText = 'Join Waitlist', 
  ctaHref = '/for-professionals' 
}: SubNavProps) {
  return (
    <div
      className="sticky z-40 w-full glass-subnav"
      style={{ top: 44, height: 52 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <span
          style={{
            fontSize: 21,
            fontWeight: 600,
            color: '#1D1D1F',
            fontFamily: 'Inter, SF Pro Display, system-ui, sans-serif',
          }}
        >
          {pageName}
        </span>
        {showCta && (
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center text-white font-medium text-xs"
            style={{
              background: '#0066CC',
              borderRadius: 9999,
              padding: '8px 20px',
              fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
            }}
          >
            {ctaText}
          </Link>
        )}
      </div>
    </div>
  );
}
