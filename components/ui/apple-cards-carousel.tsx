"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
  title?: React.ReactNode;
  eyebrow?: React.ReactNode;
  subtext?: React.ReactNode;
  darkTheme?: boolean;
}

export interface CardType {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: -1,
});

export function Carousel({ 
  items, 
  initialScroll = 0,
  title,
  eyebrow,
  subtext,
  darkTheme = false
}: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    setCurrentIndex(-1);
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        {/* Section Header Row with Inline Top-Right Navigation Arrows */}
        {(title || eyebrow || subtext) && (
          <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-row justify-between items-end gap-6">
            <div className="flex flex-col text-left">
              {eyebrow && (
                <p className={cn(
                  "text-[12px] font-semibold uppercase tracking-widest mb-3",
                  darkTheme ? "text-primary-dark" : "text-primary"
                )}>
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className={cn(
                  "text-[40px] font-semibold leading-tight tracking-tight",
                  darkTheme ? "text-canvas" : "text-ink"
                )}>
                  {title}
                </h2>
              )}
              {subtext && (
                <p className={cn(
                  "text-[17px] font-normal leading-relaxed mt-2",
                  darkTheme ? "text-muted-body" : "text-ink-48"
                )}>
                  {subtext}
                </p>
              )}
            </div>

            {/* Custom Styled Frosted Glass Navigation Buttons */}
            <div className="flex gap-2 shrink-0 mb-1 self-end">
              <button
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed shrink-0",
                  darkTheme 
                    ? "bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/[0.18] hover:scale-105" 
                    : "bg-white/90 backdrop-blur-md border border-black/8 shadow-[0_2px_12px_rgba(0,0,0,0.10)] hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-105"
                )}
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                aria-label="Scroll Left"
              >
                <ChevronLeft 
                  size={20} 
                  strokeWidth={1.5} 
                  className={darkTheme ? "text-canvas" : "text-ink"} 
                />
              </button>
              <button
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed shrink-0",
                  darkTheme 
                    ? "bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/[0.18] hover:scale-105" 
                    : "bg-white/90 backdrop-blur-md border border-black/8 shadow-[0_2px_12px_rgba(0,0,0,0.10)] hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-105"
                )}
                onClick={scrollRight}
                disabled={!canScrollRight}
                aria-label="Scroll Right"
              >
                <ChevronRight 
                  size={20} 
                  strokeWidth={1.5} 
                  className={darkTheme ? "text-canvas" : "text-ink"} 
                />
              </button>
            </div>
          </div>
        )}

        {/* Scroll Container aligned flush on the left */}
        <div
          className="flex w-full overflow-x-scroll overscroll-x-contain py-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          {/* pl-6 md:pl-10 lg:pl-[calc((100vw-1280px)/2+24px)] or simply match container padding left */}
          <div className="flex flex-row justify-start gap-4 pl-6 md:pl-12 lg:pl-16 xl:pl-[calc((100vw-1280px)/2+24px)] pr-[30%] w-full">
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                key={`card-${index}`}
                className="rounded-3xl shrink-0"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
}

export function Card({
  card,
  index,
  layout = false,
}: {
  card: CardType;
  index: number;
  layout?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  const handleClose = useCallback(() => {
    setOpen(false);
    onCardClose(index);
  }, [index, onCardClose]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, handleClose]);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {/* Modal View */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-[100] overflow-y-auto">
            {/* Dark glass overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-surface-black/60 backdrop-blur-md fixed inset-0 h-full w-full"
              onClick={handleClose}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              ref={containerRef}
              className="max-w-4xl mx-auto bg-canvas h-fit rounded-[32px] my-10 overflow-hidden relative z-[101] shadow-2xl border border-hairline"
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 h-10 w-10 rounded-full bg-surface-black text-canvas hover:opacity-90 flex items-center justify-center active:scale-95 transition-transform z-50 focus:outline-none"
                onClick={handleClose}
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>

              {/* Card Banner in Modal */}
              <div className="relative h-64 md:h-96 w-full">
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-black/30" />
                <div className="absolute bottom-6 left-8 md:left-14 text-ink">
                  <p className="text-sm font-semibold uppercase tracking-wider text-ink-80">
                    {card.category}
                  </p>
                  <h2 className="text-2xl md:text-4xl font-semibold mt-1">
                    {card.title}
                  </h2>
                </div>
              </div>

              {/* Card Content in Modal */}
              <div className="p-8 md:p-14">
                {card.content}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Grid / Carousel Card View: Uniform height, content top-aligned */}
      <button
        onClick={handleOpen}
        className="rounded-3xl h-80 w-64 md:h-[400px] md:w-[320px] overflow-hidden flex flex-col items-start justify-start relative z-10 group/card text-left focus:outline-none focus:ring-2 focus:ring-primary btn-active-scale"
      >
        {/* Soft black top overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/65 z-30 transition-all duration-300 group-hover/card:from-black/55 group-hover/card:to-black/75" />

        <img
          src={card.src}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500 ease-out group-hover/card:scale-105"
        />

        {/* Content top-aligned, uniform paddings */}
        <div className="relative z-40 p-6 flex flex-col h-full justify-between items-start w-full">
          <div className="flex flex-col items-start">
            <span className="text-[12px] font-display font-semibold uppercase tracking-wider text-muted-body bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-pill border border-white/10">
              {card.category}
            </span>
            <h3 className="text-canvas text-[21px] md:text-[28px] font-display font-semibold leading-tight tracking-tight mt-4 drop-shadow-sm">
              {card.title}
            </h3>
          </div>
        </div>
      </button>
    </>
  );
}
