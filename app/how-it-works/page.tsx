"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import SubNav from "@/components/ui/SubNav";
import BlurIn from "@/components/ui/BlurIn";
import WordPullUp from "@/components/ui/WordPullUp";
import FadeText from "@/components/ui/FadeText";
import { HowItWorksCarousel } from "@/components/sections/HowItWorksCarousel";

type FaqItem = {
  question: string;
  answer: string;
};

export default function HowItWorks() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "How quickly can a technician arrive?",
      answer: "Our target dispatch time is under 4 hours for standard requirements.",
    },
    {
      question: "What machines do you cover?",
      answer: "15+ categories at launch — CNC, electrical, hydraulics, welding, food processing, textile, and more.",
    },
    {
      question: "Is the technician background-verified?",
      answer: "Yes. Every technician on the platform passes a skill assessment and background check before being listed.",
    },
    {
      question: "What does it cost?",
      answer: "Pricing is transparent and shown before you confirm. You pay only after the job is done.",
    },
    {
      question: "Can I re-book the same technician?",
      answer: "After a completed job, you can request the same technician for future bookings.",
    },
    {
      question: "What if the problem isn't fixed?",
      answer: "We have a service guarantee. If the issue isn't resolved, we send another technician at no extra cost.",
    },
    {
      question: "How do I sign up?",
      answer: "Join the waitlist today. We'll notify you when we launch and help you onboard.",
    },
    {
      question: "I'm a technician. How do I join?",
      answer: "Visit the For Professionals page and apply. Onboarding takes less than 48 hours.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-canvas select-none">
      <SubNav pageName="How It Works" />

      {/* SECTION 1: HERO */}
      <section className="w-full bg-[#FBFBFD] py-20 flex justify-center border-b border-hairline">
        <div className="w-full max-w-[1440px] px-6 text-center flex flex-col items-center">
          <h2 className="text-[28px] xs:text-[34px] sm:text-[40px] md:text-[56px] font-display font-semibold text-ink leading-[1.07] tracking-hero mb-6 max-w-4xl">
            <BlurIn text="From breakdown to back-running — in hours." />
          </h2>
          <div className="text-[17px] md:text-[28px] font-body font-normal leading-[1.14] text-ink max-w-3xl">
            <WordPullUp text="Fixara is the fastest way for MSME manufacturers to find and book the right industrial technician, without calls, contracts, or guesswork." />
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS CAROUSEL */}
      <HowItWorksCarousel />

      {/* SECTION 3: FAQ */}
      <section className="w-full bg-[#FBFBFD] py-20 flex justify-center border-t border-hairline">
        <div className="w-full max-w-[1440px] px-6 flex flex-col items-center">
          
          <div className="w-full max-w-3xl mb-12 text-left sm:text-center sm:self-center">
            <FadeText 
              text="Questions we get asked."
              className="text-[40px] font-display font-semibold text-ink leading-[1.10] tracking-normal" 
            />
          </div>

          {/* Minimal Accordion List */}
          <div className="w-full max-w-3xl flex flex-col">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="border-b border-hairline last:border-0 py-4 flex flex-col"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left focus:outline-none py-2"
                  >
                    <span className="text-[17px] font-body font-semibold text-ink hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                    <span className={`text-ink-48 transition-transform duration-200 shrink-0 ml-4 ${isOpen ? "rotate-180 text-primary" : ""}`}>
                      <ChevronDown size={20} strokeWidth={1.5} />
                    </span>
                  </button>

                  {/* Collapsible Answer */}
                  <div 
                    className={`grid transition-all duration-200 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 overflow-hidden"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[17px] font-body font-normal leading-[1.47] text-ink-80 pb-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
