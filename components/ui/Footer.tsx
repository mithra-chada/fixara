import Link from 'next/link';

const footerColumns = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    heading: 'Platform',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Categories', href: '/categories' },
      { label: 'Pricing', href: '#' },
      { label: 'FAQ', href: '/how-it-works#faq' },
    ],
  },
  {
    heading: 'For Professionals',
    links: [
      { label: 'Apply Now', href: '/for-professionals' },
      { label: 'Skill Verification', href: '#' },
      { label: 'Earnings Guide', href: '#' },
      { label: 'Support', href: '/contact' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Instagram', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Twitter / X', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#F5F5F7', borderTop: '1px solid #E0E0E0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 4-column link grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h4
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#1D1D1F',
                  fontFamily: 'Inter, SF Pro Display, system-ui, sans-serif',
                  marginBottom: 12,
                }}
              >
                {column.heading}
              </h4>
              <ul className="flex flex-col gap-1">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: 17,
                        fontWeight: 400,
                        lineHeight: 2.41,
                        color: '#333333',
                        fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
                      }}
                      className="hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid #E0E0E0' }}
        >
          <span
            style={{
              fontSize: 12,
              color: '#7A7A7A',
              fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
            }}
          >
            &copy; 2025 Fixara. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a
              href="#"
              style={{
                fontSize: 12,
                color: '#7A7A7A',
                fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
              }}
              className="hover:underline"
            >
              Privacy Policy
            </a>
            <span style={{ color: '#7A7A7A', fontSize: 12 }}>&middot;</span>
            <a
              href="#"
              style={{
                fontSize: 12,
                color: '#7A7A7A',
                fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
              }}
              className="hover:underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
