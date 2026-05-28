"use client";

import Link from "next/link";
import SubNav from "@/components/ui/SubNav";
import BlurIn from "@/components/ui/BlurIn";
import FadeText from "@/components/ui/FadeText";
import { CategoriesCarousel } from "@/components/sections/CategoriesCarousel";

export default function Categories() {
  return (
    <div className="w-full bg-canvas select-none">
      <SubNav pageName="Categories" />

      {/* SECTION 1: HERO */}
      <section className="w-full bg-[#FBFBFD] py-20 flex justify-center border-b border-hairline">
        <div className="w-full max-w-[1440px] px-6 text-center flex flex-col items-center">
          <h2 className="text-[28px] xs:text-[34px] sm:text-[40px] md:text-[56px] font-display font-semibold text-ink leading-[1.07] tracking-hero mb-6 max-w-4xl">
            <BlurIn text="Every skill your floor needs." />
          </h2>
          <p className="text-[17px] md:text-[28px] font-body font-normal leading-[1.14] text-ink max-w-3xl">
            15+ machine categories. Hundreds of verified technicians. One platform.
          </p>
        </div>
      </section>

      {/* SECTION 2: ACETERNITY APPLE CARDS CAROUSEL */}
      <CategoriesCarousel />

      {/* SECTION 3: MISSING CATEGORY CTA */}
      <section className="w-full bg-[#1C1C1E] text-canvas py-20 flex justify-center">
        <div className="w-full max-w-[1440px] px-6 text-center flex flex-col items-center">
          
          <FadeText className="text-[40px] font-display font-semibold text-canvas leading-[1.10] tracking-normal mb-4">
            Don&apos;t see your machine type?
          </FadeText>
          
          <p className="text-[17px] md:text-[28px] font-body font-normal leading-[1.14] text-muted-body max-w-2xl mb-8">
            We&apos;re expanding categories based on demand. Tell us what you need and we&apos;ll prioritise it.
          </p>

          <Link
            href="/contact?subject=MSME%20Enquiry"
            className="border border-canvas text-canvas hover:bg-canvas/5 active:scale-95 transition-transform duration-100 ease-out text-[17px] font-body font-normal px-[28px] py-[14px] rounded-pill inline-block min-w-[200px]"
          >
            Submit a Request
          </Link>

        </div>
      </section>

    </div>
  );
}
