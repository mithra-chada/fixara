"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Categories", href: "/categories" },
    { name: "For Professionals", href: "/for-professionals" },
    { name: "Contact", href: "/contact" },
  ];

  const handleWaitlistClick = (e: React.MouseEvent) => {
    setIsOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("waitlist");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[44px] bg-surface-black z-50 select-none">
      <div className="max-w-[1440px] mx-auto h-full px-6 flex items-center justify-between">
        {/* Left: Wordmark */}
        <Link 
          href="/" 
          className="text-[14px] font-display font-semibold text-canvas tracking-nav flex items-center h-full hover:opacity-90 transition-opacity"
        >
          Fixara
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[12px] font-body font-normal tracking-nav transition-colors hover:text-canvas ${
                  isActive ? "text-canvas" : "text-ink-48"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA Pill */}
        <div className="hidden md:flex items-center">
          <Link
            href="/#waitlist"
            onClick={handleWaitlistClick}
            className="bg-primary hover:bg-primary-focus active:scale-95 transition-transform duration-100 ease-out text-[14px] text-canvas font-body font-normal px-[22px] py-[6px] rounded-pill"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-canvas hover:opacity-80 transition-opacity p-1"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Drawer (Collapses at 834px and below) */}
      {isOpen && (
        <div className="md:hidden fixed top-[44px] left-0 w-full h-[calc(100vh-44px)] bg-surface-black z-40 animate-fade-in flex flex-col justify-between p-8">
          <nav className="flex flex-col space-y-6">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-[21px] font-body font-normal transition-colors hover:text-canvas ${
                    isActive ? "text-canvas" : "text-ink-48"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pb-16 flex flex-col space-y-4">
            <Link
              href="/#waitlist"
              onClick={handleWaitlistClick}
              className="bg-primary text-canvas text-center py-3 rounded-pill text-[17px] font-body font-normal hover:bg-primary-focus active:scale-95 transition-transform"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
