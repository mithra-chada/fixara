import Link from "next/link";
import { TOKENS } from "@/lib/tokens";

export default function Footer() {
  const columns = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/contact" },
        { name: "Careers", href: "/for-professionals" },
        { name: "Press", href: "/contact" },
        { name: "Blog", href: "/" },
      ],
    },
    {
      title: "Platform",
      links: [
        { name: "How It Works", href: "/how-it-works" },
        { name: "Categories", href: "/categories" },
        { name: "Pricing", href: "/how-it-works" },
        { name: "FAQ", href: "/how-it-works" },
      ],
    },
    {
      title: "For Professionals",
      links: [
        { name: "Apply Now", href: "/for-professionals" },
        { name: "Skill Verification", href: "/for-professionals" },
        { name: "Earnings Guide", href: "/for-professionals" },
        { name: "Support", href: "/contact" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Instagram", href: "https://instagram.com" },
        { name: "LinkedIn", href: "https://linkedin.com" },
        { name: "Twitter / X", href: "https://x.com" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#E8E8ED] py-16 border-t border-black/8 select-none">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-16">
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col">
              <h4 className="text-[14px] font-display font-semibold text-ink mb-4 tracking-tight">
                {column.title}
              </h4>
              <ul className="flex flex-col space-y-[2px]">
                {column.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.name}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[17px] font-body font-normal leading-[2.41] text-ink-80 hover:text-primary transition-colors"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-[17px] font-body font-normal leading-[2.41] text-ink-80 hover:text-primary transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 border-t border-black/8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <span className="text-[12px] font-body font-normal text-ink-48">
            © 2025 Fixara. All rights reserved.
          </span>
          <div className="flex space-x-6 text-[12px] font-body font-normal text-ink-48">
            <Link href="/" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
