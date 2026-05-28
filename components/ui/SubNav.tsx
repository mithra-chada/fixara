"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubNavProps {
  pageName: string;
  ctaText?: string | null;
  ctaHref?: string;
}

export default function SubNav({ 
  pageName, 
  ctaText = "Join Waitlist", 
  ctaHref = "/#waitlist" 
}: SubNavProps) {
  const pathname = usePathname();

  const handleCtaClick = (e: React.MouseEvent) => {
    if (ctaHref === "/#waitlist" && pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("waitlist");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="sticky top-[44px] left-0 w-full h-[52px] glass-subnav z-40 select-none">
      <div className="max-w-[1440px] mx-auto h-full px-6 flex items-center justify-between">
        {/* Left: Current page name */}
        <span className="text-[21px] font-display font-semibold text-ink tracking-tight flex items-center h-full">
          {pageName}
        </span>

        {/* Right: Dynamic CTA Pill */}
        {ctaText && (
          <Link
            href={ctaHref}
            onClick={handleCtaClick}
            className="bg-primary hover:bg-primary-focus active:scale-95 transition-transform duration-100 ease-out text-[14px] text-canvas font-body font-normal px-[18px] py-[6px] rounded-pill"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </div>
  );
}
