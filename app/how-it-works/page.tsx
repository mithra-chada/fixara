"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SubNav from "@/components/ui/SubNav";
import BlurIn from "@/components/ui/BlurIn";
import WordPullUp from "@/components/ui/WordPullUp";
import FadeText from "@/components/ui/FadeText";

gsap.registerPlugin(ScrollTrigger);

type FaqItem = {
  question: string;
  answer: string;
};

const stepsData = [
  {
    category: "Step 01",
    title: "Post your requirement.",
    what: "Describe the fault in plain language.",
    why: "No technical jargon needed. Tell us your machine type, what's wrong, and where you are. A photo or voice note works too.",
    detail: "Our intake form is built around how shop-floor workers actually describe problems — not how engineers write manuals. If your CNC is making a noise or your motor won't start, just tell us that.",
    src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2000&auto=format&fit=crop",
  },
  {
    category: "Step 02",
    title: "We find the right person.",
    what: "Matched by skill. Not by availability alone.",
    why: "Fixara's matching engine finds the technician with the exact skill set your machine requires — not just whoever is nearby. You see the job category, ETA, and price range before confirming.",
    detail: "The technician's identity is not revealed until you confirm the booking. Your requirement is protected. Once you confirm, the technician is notified and dispatched — exactly like a delivery being assigned.",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",
  },
  {
    category: "Step 03",
    title: "Track. Fix. Pay.",
    what: "Live ETA. Verified credentials. Pay after.",
    why: "Once confirmed, you see the technician's name, photo, verified skill badges, and a live arrival tracker. No guessing, no phone tag.",
    detail: "Payment is released only after the job is complete and you confirm satisfaction. Every job is logged in your service history — building a maintenance record for your machines automatically.",
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function HowItWorks() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepsData.forEach((_, index) => {
        const textEl = textRefs.current[index];
        const imageEl = imageRefs.current[index];
        const stepEl = stepRefs.current[index];

        if (textEl && imageEl && stepEl) {
          const isEven = index % 2 === 0;

          // Animate Text Column
          gsap.fromTo(
            textEl,
            { opacity: 0, x: isEven ? -60 : 60 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: stepEl,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );

          // Animate Image Column
          gsap.fromTo(
            imageEl,
            { opacity: 0, x: isEven ? 60 : -60, scale: 0.95 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: stepEl,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-canvas select-none">
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

      {/* SECTION 2: VERTICAL STEPS */}
      <section className="w-full bg-[#1C1C1E] text-white py-24 flex flex-col items-center overflow-hidden">
        <div className="w-full max-w-[1200px] px-6">
          <div className="text-center mb-20">
            <span className="text-[#0066CC] text-xs md:text-sm font-semibold uppercase tracking-widest block mb-4">
              PROCESS FLOW
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
              Three steps. Zero downtime.
            </h2>
            <p className="text-neutral-400 text-base md:text-xl max-w-2xl mx-auto">
              Post your requirement. We match you to the right technician. Your machines are back running.
            </p>
          </div>

          <div className="space-y-32">
            {stepsData.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  ref={(el) => { stepRefs.current[index] = el; }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                  {/* Text Column */}
                  <div
                    ref={(el) => { textRefs.current[index] = el; }}
                    className={`lg:col-span-6 space-y-6 ${!isEven ? "lg:order-2" : ""}`}
                  >
                    <div className="inline-flex items-center justify-center bg-neutral-800 text-[#0066CC] font-semibold text-xs md:text-sm px-4 py-1.5 rounded-full border border-neutral-700">
                      {step.category}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="text-neutral-300 text-lg font-medium">
                      {step.what}
                    </p>
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                      {step.why}
                    </p>
                    <div className="bg-[#2A2A2C] border border-[#3A3A3C] rounded-2xl p-6 text-neutral-300 text-sm leading-relaxed">
                      {step.detail}
                    </div>
                  </div>

                  {/* Image Column */}
                  <div
                    ref={(el) => { imageRefs.current[index] = el; }}
                    className={`lg:col-span-6 ${!isEven ? "lg:order-1" : ""}`}
                  >
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl group border border-neutral-800 bg-neutral-900">
                      <img
                        src={step.src}
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
