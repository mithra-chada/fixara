'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Categories', href: '/categories' },
  { label: 'For Professionals', href: '/for-professionals' },
  { label: 'Contact', href: '/contact' },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{ background: '#000000', height: 44 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-white font-semibold text-sm tracking-tight"
          style={{ fontFamily: 'Inter, SF Pro Display, system-ui, sans-serif', letterSpacing: '-0.12px' }}
        >
          Fixara
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white transition-colors duration-200 hover:opacity-80"
              style={{
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: '-0.12px',
                fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
                opacity: pathname === link.href ? 1 : 0.8,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/for-professionals"
            className="inline-flex items-center justify-center text-white font-medium text-xs"
            style={{
              background: '#0066CC',
              borderRadius: 9999,
              padding: '8px 20px',
              fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
            }}
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full"
          style={{ background: '#000000' }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white"
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
                  opacity: pathname === link.href ? 1 : 0.8,
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/for-professionals"
              className="inline-flex items-center justify-center text-white font-medium text-sm mt-2"
              style={{
                background: '#0066CC',
                borderRadius: 9999,
                padding: '10px 24px',
                fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
              }}
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
