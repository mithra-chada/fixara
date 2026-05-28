import { useState, useEffect, useRef } from 'react';
import FadeText from '@/components/ui/FadeText';
import WordPullUp from '@/components/ui/WordPullUp';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StepCard {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
}

function StepDetail({ step, what, why, detail }: { step: string; what: string; why: string; detail: string }) {
  return (
    <div className="bg-[#2A2A2C] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-[#CCCCCC] text-sm uppercase tracking-wider mb-2">{step}</p>
      <p className="text-white text-xl md:text-2xl font-semibold mb-4">{what}</p>
      <p className="text-[#CCCCCC] text-base md:text-lg leading-relaxed mb-4 max-w-3xl mx-auto">{why}</p>
      <p className="text-[#7A7A7A] text-sm leading-relaxed max-w-3xl mx-auto">{detail}</p>
    </div>
  );
}

const cardsData: StepCard[] = [
  {
    category: 'Step 01',
    title: 'Post your requirement.',
    src: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2000',
    content: (
      <StepDetail
        step="Step 01"
        what="Describe the fault in plain language."
        why="No technical jargon needed. Tell us your machine, what's wrong, your location."
        detail="Our intake form is built around how shop-floor workers describe problems — not how engineers write manuals."
      />
    ),
  },
  {
    category: 'Step 02',
    title: 'We find the right person.',
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000',
    content: (
      <StepDetail
        step="Step 02"
        what="Matched by skill. Not just availability."
        why="Fixara finds the technician with the exact skill your machine requires. You see ETA and price range before confirming."
        detail="The technician's identity is revealed only after you confirm — exactly like a delivery being assigned."
      />
    ),
  },
  {
    category: 'Step 03',
    title: 'Track. Fix. Pay.',
    src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2000',
    content: (
      <StepDetail
        step="Step 03"
        what="Live ETA. Verified credentials. Pay after."
        why="See the technician's name, photo, skill badges, and live arrival tracker. No guessing."
        detail="Payment released only after you confirm satisfaction. Every job logged in your service history."
      />
    ),
  },
];

export default function HowItWorks() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const next = () => setExpandedIndex((prev) => (prev === null ? 0 : (prev + 1) % cardsData.length));
  const prev = () => setExpandedIndex((prev) => (prev === null ? cardsData.length - 1 : (prev - 1 + cardsData.length) % cardsData.length));

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Filter out null elements
      const validCards = cardRefs.current.filter((el): el is HTMLDivElement => el !== null);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ background: '#1C1C1E', padding: '80px 0' }}>
      {/* Dark section blobs */}
      <div className="absolute pointer-events-none" style={{
        bottom: '-10%', left: '50%', transform: 'translateX(-50%)',
        width: '60%', height: '50%',
        background: 'radial-gradient(ellipse, rgba(0,102,204,0.18) 0%, transparent 65%)',
        filter: 'blur(50px)', borderRadius: '50%', zIndex: 0,
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 600,
                lineHeight: 1.10,
                color: '#FFFFFF',
                fontFamily: 'Inter, SF Pro Display, system-ui, sans-serif',
                marginBottom: 12,
              }}
            >
              <FadeText text="Three steps. Zero downtime." />
            </h2>
            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 20px)',
                fontWeight: 400,
                lineHeight: 1.6,
                color: '#CCCCCC',
                fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
                maxWidth: 640,
              }}
            >
              <WordPullUp
                text="Post your requirement. We match you to the right technician. Your machines are back running."
                delay={200}
              />
            </p>
          </div>

          {/* Arrows */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={prev}
              className="flex items-center justify-center transition-colors duration-200"
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.18)',
              }}
              aria-label="Previous slide"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.20)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
              }}
            >
              <ChevronLeft size={20} color="#FFFFFF" strokeWidth={1.5} />
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center transition-colors duration-200"
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.18)',
              }}
              aria-label="Next slide"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.20)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
              }}
            >
              <ChevronRight size={20} color="#FFFFFF" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardsData.map((card, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="group cursor-pointer"
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden mb-4"
                style={{
                  borderRadius: 18,
                  aspectRatio: '4/3',
                  boxShadow: 'rgba(0,0,0,0.22) 3px 5px 30px 0px',
                }}
              >
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.70)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.8px',
                      fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
                    }}
                  >
                    {card.category}
                  </span>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      color: '#FFFFFF',
                      fontFamily: 'Inter, SF Pro Display, system-ui, sans-serif',
                      marginTop: 4,
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Expanded content */}
              {expandedIndex === i && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  {card.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
