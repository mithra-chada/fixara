import { useState, useRef } from 'react';
import { categoriesData } from '@/lib/tokens';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface CategoriesCarouselProps {
  showHeader?: boolean;
}

export default function CategoriesCarousel({ showHeader = true }: CategoriesCarouselProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 400;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative overflow-hidden" style={{ background: '#F5F5F7', padding: '80px 0' }}>
      {/* Light section blobs */}
      <div className="absolute pointer-events-none" style={{
        top: '-10%', left: '-5%', width: '45%', height: '55%',
        background: 'radial-gradient(ellipse, rgba(0,102,204,0.10) 0%, transparent 70%)',
        filter: 'blur(40px)', borderRadius: '50%', zIndex: 0,
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: '-5%', right: '-5%', width: '40%', height: '50%',
        background: 'radial-gradient(ellipse, rgba(0,102,204,0.07) 0%, transparent 65%)',
        filter: 'blur(35px)', borderRadius: '50%', zIndex: 0,
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <div
                className="inline-flex items-center gap-2 mb-4"
                style={{
                  background: 'rgba(0, 102, 204, 0.10)',
                  backdropFilter: 'blur(16px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                  border: '1px solid rgba(0, 102, 204, 0.28)',
                  borderRadius: 9999,
                  padding: '6px 14px',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#0066CC',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
                }}
              >
                Every machine. Every trade.
              </div>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 40px)',
                  fontWeight: 600,
                  lineHeight: 1.10,
                  color: '#1D1D1F',
                  fontFamily: 'Inter, SF Pro Display, system-ui, sans-serif',
                  marginBottom: 8,
                }}
              >
                15+ categories. One platform.
              </h2>
              <p
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  lineHeight: 1.47,
                  color: '#7A7A7A',
                  fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
                }}
              >
                From CNC to compressors, we cover the full floor.
              </p>
            </div>

            {/* Arrows */}
            <div className="flex gap-3 mt-6 md:mt-0">
              <button
                onClick={() => scroll('left')}
                className="flex items-center justify-center transition-colors duration-200"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.55)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0,0,0,0.09)',
                }}
                aria-label="Scroll left"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.80)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.55)';
                }}
              >
                <ChevronLeft size={20} color="#1D1D1F" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="flex items-center justify-center transition-colors duration-200"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.55)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0,0,0,0.09)',
                }}
                aria-label="Scroll right"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.80)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.55)';
                }}
              >
                <ChevronRight size={20} color="#1D1D1F" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        )}

        {/* Horizontal scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4"
          style={{
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {categoriesData.map((cat, i) => (
            <div
              key={i}
              className="flex-shrink-0 group cursor-pointer"
              style={{
                width: 'clamp(280px, 30vw, 340px)',
                scrollSnapAlign: 'start',
              }}
              onClick={() => setExpandedIndex(i)}
            >
              {/* Image card */}
              <div
                className="relative overflow-hidden animate-in fade-in duration-300"
                style={{
                  borderRadius: 18,
                  aspectRatio: '4/3',
                  boxShadow: 'rgba(0,0,0,0.22) 3px 5px 30px 0px',
                }}
              >
                <img
                  src={cat.src}
                  alt={cat.title}
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
                    {cat.category}
                  </span>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: '#FFFFFF',
                      fontFamily: 'Inter, SF Pro Display, system-ui, sans-serif',
                      marginTop: 4,
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail Overlay */}
      {expandedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6" role="dialog" aria-modal="true">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
            onClick={() => setExpandedIndex(null)}
          />

          {/* Modal Container */}
          <div
            className="bg-white w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl relative z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-300"
          >
            {/* Close Button */}
            <button
              onClick={() => setExpandedIndex(null)}
              className="absolute top-4 right-4 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black text-white hover:bg-black/80 transition-colors focus:outline-none cursor-pointer"
              aria-label="Close modal"
            >
              <X size={16} strokeWidth={2.5} />
            </button>

            {/* Header Image Area */}
            <div className="relative h-48 md:h-64 flex-shrink-0">
              <img
                src={categoriesData[expandedIndex].src}
                alt={categoriesData[expandedIndex].title}
                className="w-full h-full object-cover"
              />
              
              {/* Fade to white gradient from bottom of image */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(255,255,255,0) 50%, #FFFFFF 100%)',
                }}
              />

              {/* Text overlaid on the bottom portion of image (against white fade) */}
              <div className="absolute bottom-0 left-8 right-8 pb-3">
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#7A7A7A',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontFamily: 'Inter, SF Pro Text, system-ui, sans-serif',
                  }}
                >
                  {categoriesData[expandedIndex].category}
                </span>
                <h3
                  style={{
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    fontWeight: 700,
                    color: '#1D1D1F',
                    fontFamily: 'Inter, SF Pro Display, system-ui, sans-serif',
                    marginTop: 2,
                  }}
                >
                  {categoriesData[expandedIndex].title}
                </h3>
              </div>
            </div>

            {/* Content Area - Scrollable if content exceeds height */}
            <div className="overflow-y-auto px-6 md:px-8 pb-8 pt-4 flex-1">
              <div className="bg-[#F5F5F7] p-6 md:p-8 rounded-3xl">
                <p
                  className="text-[#333333] text-sm md:text-base leading-relaxed mb-6"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {categoriesData[expandedIndex].description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {categoriesData[expandedIndex].skills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-white rounded-xl px-4 py-2.5 text-xs md:text-sm font-medium text-[#1D1D1F] border border-[#E0E0E0] shadow-2xs hover:shadow-xs transition-all duration-200 flex items-center justify-center text-center min-h-[48px] h-auto whitespace-normal break-words"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
