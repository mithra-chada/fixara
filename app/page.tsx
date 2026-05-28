"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { 
  ShieldCheck, 
  EyeOff, 
  CreditCard 
} from "lucide-react";

import BlurIn from "@/components/ui/BlurIn";
import FadeText from "@/components/ui/FadeText";
import NumberTicker from "@/components/ui/NumberTicker";
import WordPullUp from "@/components/ui/WordPullUp";

import CategoriesCarousel from "@/components/sections/CategoriesCarousel";
import { HowItWorksCarousel } from "@/components/sections/HowItWorksCarousel";

type WaitlistInput = {
  email: string;
};

export default function Home() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<WaitlistInput>();

  const onSubmit = (data: WaitlistInput) => {
    console.log("Waitlist email submitted:", data.email);
    setIsSuccess(true);
    reset();
  };

  return (
    <div className="w-full bg-canvas select-none">
      
      {/* Hero section wrapper */}
      <section className="relative overflow-hidden min-h-screen border-b border-hairline flex items-center justify-center"
        style={{ backgroundColor: '#FBFBFD' }}>

        {/* Actual content row — left column + right glass panel */}
        <div className="relative z-10 w-full max-w-[1440px] px-6 py-20 grid grid-cols-1 min-[1069px]:grid-cols-[1.2fr_1fr] max-[1068px]:min-[834px]:grid-cols-2 gap-12 items-center">
          
          {/* Left Column (55% width) */}
          <div className="flex flex-col text-left min-[1069px]:pr-12">
            
            {/* Eyebrow Pill */}
            <div className="self-start mb-6">
              <span className="glass-blue px-3.5 py-1.5 text-[12px] font-display font-semibold text-primary tracking-[0.5px] uppercase">
                Launching Soon
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-[28px] xs:text-[34px] sm:text-[40px] md:text-[56px] font-display font-semibold text-ink leading-[1.07] tracking-hero mb-6">
              <BlurIn text="Industrial expertise, dispatched." />
            </h1>

            {/* Lead Copy */}
            <div className="text-[17px] md:text-[20px] font-body font-normal leading-relaxed text-ink-80 mb-8">
              <WordPullUp text="Fixara connects MSME manufacturers with verified skilled technicians for machine repair and servicing — dispatched to your shop floor within hours." />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Link
                href="#waitlist"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-primary hover:bg-primary-focus active:scale-95 transition-transform duration-100 ease-out text-[17px] text-canvas font-body font-normal px-[28px] py-[14px] rounded-pill text-center min-w-[180px]"
              >
                Join the Waitlist
              </Link>
              <Link
                href="/how-it-works"
                className="border border-black/15 text-ink hover:border-black/30 active:scale-95 transition-transform duration-100 ease-out text-[17px] font-body font-normal px-[28px] py-[14px] rounded-pill text-center min-w-[180px] bg-transparent"
              >
                See How It Works
              </Link>
            </div>

            {/* Inline Waitlist Form: glass-input custom rules */}
            <div id="waitlist" className="w-full max-w-md mb-4 scroll-mt-24">
              {!isSuccess ? (
                <form 
                  onSubmit={handleSubmit(onSubmit)} 
                  className="relative flex items-center w-full h-[48px] bg-white/[0.07] rounded-input border border-black/12 p-1 backdrop-blur-md"
                >
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    className="w-full h-full bg-transparent px-4 text-[17px] font-body font-normal text-ink placeholder-ink-48 focus:outline-none"
                    {...register("email", { 
                      required: "Email is required", 
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary-focus active:scale-95 transition-transform duration-100 ease-out text-canvas text-[14px] font-body font-normal px-[18px] py-[8px] rounded-pill shrink-0"
                  >
                    Notify Me
                  </button>
                </form>
              ) : (
                <div className="h-[48px] flex items-center justify-center bg-primary/10 border border-primary/20 rounded-input px-4 text-primary text-[14px] font-body font-semibold">
                  Thank you! We&apos;ll notify you at launch.
                </div>
              )}
              
              {errors.email && (
                <span className="block text-[14px] text-primary font-body font-normal mt-2 text-left px-4">
                  {errors.email.message}
                </span>
              )}
            </div>

            <span className="text-[12px] font-body font-normal text-ink-48 ml-2">
              Free to join. No spam.
            </span>

          </div>

          {/* Right Column (45% width) - Glassmorphism Panel (inline styles) */}
          <div className="w-full flex flex-col items-center max-[419px]:hidden" style={{ zIndex: 10 }}>
            
            {/* Main Stats Card */}
            <div
              className="w-full relative"
              style={{
                background: 'rgba(255,255,255,0.45)',
                backdropFilter: 'blur(32px) saturate(200%) brightness(1.06)',
                WebkitBackdropFilter: 'blur(32px) saturate(200%) brightness(1.06)',
                border: '1px solid rgba(255,255,255,0.70)',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: `
                  0 2px 4px rgba(0,0,0,0.04),
                  0 8px 24px rgba(0,0,0,0.09),
                  0 24px 64px rgba(0,0,0,0.07),
                  inset 0 1px 0 rgba(255,255,255,0.95),
                  inset 0 -1px 0 rgba(0,0,0,0.04),
                  inset 1px 0 0 rgba(255,255,255,0.50)
                `,
              }}
            >
              {/* Inner border highlight wrapper */}
              <div className="w-full h-full flex flex-col relative z-20" style={{ borderRadius: "22px", overflow: "hidden" }}>
                
                <span className="text-[14px] font-display font-semibold text-ink-48 uppercase tracking-wider mb-2">
                  Why MSMEs trust Fixara
                </span>
                
                <div className="w-full h-[1px] bg-black/[0.06] my-4" />

                {/* Stats Rows */}
                <div className="flex flex-col max-[833px]:grid max-[833px]:grid-cols-2 max-[833px]:gap-6">
                  
                  {/* Row 1 */}
                  <div className="flex items-center justify-between py-4 border-b border-black/[0.05] max-[833px]:border-0">
                    <span className="text-[32px] font-display font-semibold text-ink leading-none">
                      <NumberTicker target={500} suffix="+" />
                    </span>
                    <span className="text-[14px] font-body font-normal text-ink-48 ml-4 text-right">
                      Verified Technicians
                    </span>
                  </div>

                  {/* Row 2 */}
                  <div className="flex items-center justify-between py-4 border-b border-black/[0.05] max-[833px]:border-0">
                    <span className="text-[32px] font-display font-semibold text-ink leading-none">
                      <NumberTicker target={15} suffix="+" />
                    </span>
                    <span className="text-[14px] font-body font-normal text-ink-48 ml-4 text-right">
                      Machine Categories
                    </span>
                  </div>

                  {/* Row 3 */}
                  <div className="flex items-center justify-between py-4 border-b border-black/[0.05] max-[833px]:border-0">
                    <span className="text-[32px] font-display font-semibold text-ink leading-none">
                      <NumberTicker target={4} prefix="< " suffix=" hrs" />
                    </span>
                    <span className="text-[14px] font-body font-normal text-ink-48 ml-4 text-right">
                      Average Dispatch
                    </span>
                  </div>

                  {/* Row 4 */}
                  <div className="flex items-center justify-between py-4 border-b border-black/[0.05] last:border-0 max-[833px]:border-0">
                    <span className="text-[32px] font-display font-semibold text-ink leading-none">
                      <NumberTicker target={100} suffix="%" />
                    </span>
                    <span className="text-[14px] font-body font-normal text-ink-48 ml-4 text-right">
                      Background Verified
                    </span>
                  </div>

                </div>

                {/* Panel Footer */}
                <div className="mt-8 glass-blue p-3 text-center rounded-[12px] border-primary/25">
                  <span className="text-[13px] font-body font-normal text-primary font-semibold">
                    Dispatch target: under 4 hours
                  </span>
                </div>
                
              </div>
            </div>

            {/* Second Smaller Glass Card */}
            <div
              style={{
                marginTop: '16px',
                width: '100%',
                background: 'rgba(255,255,255,0.35)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.55)',
                borderRadius: '18px',
                padding: '24px',
                boxShadow: `
                  0 2px 8px rgba(0,0,0,0.06),
                  0 8px 24px rgba(0,0,0,0.05),
                  inset 0 1px 0 rgba(255,255,255,0.90)
                `,
              }}
            >
              <div className="flex flex-col space-y-4 relative">
                
                {/* Step 1 */}
                <div className="flex items-center space-x-3 relative z-10">
                  <div className="h-2 w-2 rounded-full bg-primary shrink-0 relative">
                    <div className="absolute top-2 left-[3px] w-[1px] h-6 border-l border-dashed border-black/10" />
                  </div>
                  <span className="text-[13px] font-body font-normal text-ink-80">
                    Post your requirement
                  </span>
                </div>

                {/* Step 2 */}
                <div className="flex items-center space-x-3 relative z-10">
                  <div className="h-2 w-2 rounded-full bg-primary shrink-0 relative">
                    <div className="absolute top-2 left-[3px] w-[1px] h-6 border-l border-dashed border-black/10" />
                  </div>
                  <span className="text-[13px] font-body font-normal text-ink-80">
                    We match the right technician
                  </span>
                </div>

                {/* Step 3 */}
                <div className="flex items-center space-x-3 relative z-10">
                  <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span className="text-[13px] font-body font-normal text-ink-80">
                    Pay after job is done
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: TRUST BAR (Apple Store White) - soft inset shadow */}
      <section 
        className="w-full bg-[#FBFBFD] py-10 flex justify-center border-b border-hairline"
        style={{
          boxShadow: "inset 0 1px 0 rgba(0,0,0,0.04), inset 0 -1px 0 rgba(0,0,0,0.04)"
        }}
      >
        <div className="w-full max-w-[1440px] px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center md:border-r border-hairline last:border-0 px-4">
              <span className="text-[40px] font-display font-semibold text-ink leading-tight">
                <NumberTicker target={500} suffix="+" />
              </span>
              <span className="text-[14px] font-body font-normal text-ink-48 mt-1">
                Verified Technicians
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center md:border-r border-hairline last:border-0 px-4">
              <span className="text-[40px] font-display font-semibold text-ink leading-tight">
                <NumberTicker target={15} suffix="+" />
              </span>
              <span className="text-[14px] font-body font-normal text-ink-48 mt-1">
                Machine Categories
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center md:border-r border-hairline last:border-0 px-4">
              <span className="text-[40px] font-display font-semibold text-ink leading-tight">
                <NumberTicker target={4} prefix="< " suffix=" hrs" />
              </span>
              <span className="text-[14px] font-body font-normal text-ink-48 mt-1">
                Average Dispatch Time
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-[40px] font-display font-semibold text-ink leading-tight">
                <NumberTicker target={100} suffix="%" />
              </span>
              <span className="text-[14px] font-body font-normal text-ink-48 mt-1">
                Background Verified
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* UPGRADE 3: HOW IT WORKS CAROUSEL (Richer dark tiled section) */}
      <HowItWorksCarousel />

      {/* UPGRADE 2: CATEGORIES CAROUSEL */}
      <CategoriesCarousel />

      {/* SECTION 5: WHY US / TRUST SIGNALS (Apple Store White) */}
      <section 
        className="w-full py-20 flex justify-center border-b border-hairline"
        style={{ backgroundColor: '#FBFBFD' }}
      >
        <div className="w-full max-w-[1440px] px-6">
          
          <div className="mb-12">
            <FadeText 
              text="Built for the shop floor."
              className="text-[40px] font-display font-semibold text-ink leading-[1.10] tracking-normal" 
            />
          </div>

          {/* 3-Column Trust Cards - Inline styled card-glass */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Trust item 1 */}
            <div 
              style={{
                background: 'rgba(255,255,255,0.60)',
                backdropFilter: 'blur(24px) saturate(190%) brightness(1.03)',
                WebkitBackdropFilter: 'blur(24px) saturate(190%) brightness(1.03)',
                border: '1px solid rgba(255,255,255,0.75)',
                borderRadius: '18px',
                padding: '32px',
                boxShadow: `
                  0 1px 2px rgba(0,0,0,0.04),
                  0 4px 16px rgba(0,0,0,0.07),
                  0 12px 32px rgba(0,0,0,0.05),
                  inset 0 1px 0 rgba(255,255,255,0.95),
                  inset 0 -1px 0 rgba(0,0,0,0.03)
                `,
              }}
              className="flex flex-col transition-all duration-300 hover:scale-[1.01] hover:border-primary/20"
            >
              <div className="text-primary mb-4 shrink-0">
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] font-body font-semibold text-ink mb-3">
                Verified & Vetted
              </h3>
              <p className="text-[17px] font-body font-normal leading-[1.47] text-ink-80">
                Every technician is skill-tested, background-checked, and rated by real MSME clients before they reach your floor.
              </p>
            </div>

            {/* Trust item 2 */}
            <div 
              style={{
                background: 'rgba(255,255,255,0.60)',
                backdropFilter: 'blur(24px) saturate(190%) brightness(1.03)',
                WebkitBackdropFilter: 'blur(24px) saturate(190%) brightness(1.03)',
                border: '1px solid rgba(255,255,255,0.75)',
                borderRadius: '18px',
                padding: '32px',
                boxShadow: `
                  0 1px 2px rgba(0,0,0,0.04),
                  0 4px 16px rgba(0,0,0,0.07),
                  0 12px 32px rgba(0,0,0,0.05),
                  inset 0 1px 0 rgba(255,255,255,0.95),
                  inset 0 -1px 0 rgba(0,0,0,0.03)
                `,
              }}
              className="flex flex-col transition-all duration-300 hover:scale-[1.01] hover:border-primary/20"
            >
              <div className="text-primary mb-4 shrink-0">
                <EyeOff size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] font-body font-semibold text-ink mb-3">
                Anonymous Until Booked
              </h3>
              <p className="text-[17px] font-body font-normal leading-[1.47] text-ink-80">
                Browse by skill and machine type. The technician&apos;s identity is revealed only after you confirm — your data stays protected.
              </p>
            </div>

            {/* Trust item 3 */}
            <div 
              style={{
                background: 'rgba(255,255,255,0.60)',
                backdropFilter: 'blur(24px) saturate(190%) brightness(1.03)',
                WebkitBackdropFilter: 'blur(24px) saturate(190%) brightness(1.03)',
                border: '1px solid rgba(255,255,255,0.75)',
                borderRadius: '18px',
                padding: '32px',
                boxShadow: `
                  0 1px 2px rgba(0,0,0,0.04),
                  0 4px 16px rgba(0,0,0,0.07),
                  0 12px 32px rgba(0,0,0,0.05),
                  inset 0 1px 0 rgba(255,255,255,0.95),
                  inset 0 -1px 0 rgba(0,0,0,0.03)
                `,
              }}
              className="flex flex-col transition-all duration-300 hover:scale-[1.01] hover:border-primary/20"
            >
              <div className="text-primary mb-4 shrink-0">
                <CreditCard size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] font-body font-semibold text-ink mb-3">
                Pay After the Job
              </h3>
              <p className="text-[17px] font-body font-normal leading-[1.47] text-ink-80">
                No upfront payments. You pay only when the work is done and you&apos;re satisfied. Transparent pricing, no surprises.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: FOR PROFESSIONALS TEASER (Flat Apple Store White) */}
      <section 
        className="w-full py-20 flex justify-center"
        style={{
          backgroundColor: "#FBFBFD"
        }}
      >
        <div className="w-full max-w-[1440px] px-6 text-center flex flex-col items-center">
          
          <span className="text-[12px] font-display font-semibold text-primary tracking-[0.5px] uppercase mb-4">
            For Technicians
          </span>

          <h2 className="text-[40px] font-display font-semibold text-ink leading-[1.10] tracking-normal mb-6">
            <FadeText text="Turn your skills into steady work." />
          </h2>

          <div className="text-[17px] md:text-[28px] font-body font-normal leading-[1.14] text-ink max-w-3xl mb-8">
            <WordPullUp text="Join Fixara's network of verified industrial technicians. Get matched to real jobs near you, build your reputation, grow your income." />
          </div>

          <Link
            href="/for-professionals"
            className="bg-primary hover:bg-primary-focus active:scale-95 transition-transform duration-100 ease-out text-[17px] text-canvas font-body font-normal px-[28px] py-[14px] rounded-pill inline-block"
          >
            Apply as a Technician
          </Link>

        </div>
      </section>

    </div>
  );
}
