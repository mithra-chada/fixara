"use client";

import VideoHero from "@/components/sections/VideoHero";
import TrustBar from "@/components/sections/TrustBar";
import HowItWorks from "@/components/sections/HowItWorks";
import CategoriesCarousel from "@/components/sections/CategoriesCarousel";
import WhyUs from "@/components/sections/WhyUs";
import ForProfessionalsTeaser from "@/components/sections/ForProfessionalsTeaser";

export default function Home() {
  return (
    <div className="w-full bg-[#1C1C1E] select-none">
      <VideoHero />
      <TrustBar />
      <HowItWorks />
      <CategoriesCarousel />
      <WhyUs />
      <ForProfessionalsTeaser />
    </div>
  );
}
