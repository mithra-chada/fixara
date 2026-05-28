"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const StepDetail = ({
  step,
  what,
  why,
  detail,
}: {
  step: string;
  what: string;
  why: string;
  detail: string;
}) => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#0066CC] text-sm font-semibold uppercase
                      tracking-widest mb-4">
          {step}
        </p>
        <p className="text-[#1D1D1F] text-xl md:text-2xl font-semibold
                      leading-snug mb-4">
          {what}
        </p>
        <p className="text-neutral-500 text-base md:text-lg leading-relaxed
                      mb-6">
          {why}
        </p>
        <div
          className="bg-white rounded-2xl p-6 border border-[#E0E0E0]
                     text-[#1D1D1F] text-base leading-relaxed"
        >
          {detail}
        </div>
      </div>
    </div>
  );
};

const howItWorksData = [
  {
    category: "Step 01",
    title: "Post your requirement.",
    src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2000&auto=format&fit=crop",
    content: (
      <StepDetail
        step="Step 01 — You"
        what="Describe the fault in plain language."
        why="No technical jargon needed. Tell us your machine type, what's wrong, and where you are. A photo or voice note works too."
        detail="Our intake form is built around how shop-floor workers actually describe problems — not how engineers write manuals. If your CNC is making a noise or your motor won't start, just tell us that."
      />
    ),
  },
  {
    category: "Step 02",
    title: "We find the right person.",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",
    content: (
      <StepDetail
        step="Step 02 — Fixara"
        what="Matched by skill. Not by availability alone."
        why="Fixara's matching engine finds the technician with the exact skill set your machine requires — not just whoever is nearby. You see the job category, ETA, and price range before confirming."
        detail="The technician's identity is not revealed until you confirm the booking. Your requirement is protected. Once you confirm, the technician is notified and dispatched — exactly like a delivery being assigned."
      />
    ),
  },
  {
    category: "Step 03",
    title: "Track. Fix. Pay.",
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2000&auto=format&fit=crop",
    content: (
      <StepDetail
        step="Step 03 — Resolution"
        what="Live ETA. Verified credentials. Pay after."
        why="Once confirmed, you see the technician's name, photo, verified skill badges, and a live arrival tracker. No guessing, no phone tag."
        detail="Payment is released only after the job is complete and you confirm satisfaction. Every job is logged in your service history — building a maintenance record for your machines automatically."
      />
    ),
  },
];

export function HowItWorksCarousel() {
  const cards = howItWorksData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full py-20 bg-[#1C1C1E]">
      <Carousel 
        items={cards}
        title="Three steps. Zero downtime."
        subtext="Post your requirement. We match you to the right technician. Your machines are back running."
        darkTheme={true}
      />
    </div>
  );
}
