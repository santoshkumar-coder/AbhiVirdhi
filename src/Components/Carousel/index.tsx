import React, { useEffect, useState } from "react";
import CarouselItems from "./CrouselItems";
import CarouselButton from "./CarouselButton";

interface CarouselItem {
  headline: string;
  image: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items = [] }) => {
  /* ================= STATE ================= */

  const [currentIndex, setCurrentIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  /* ================= SAFE DATA ================= */

  const safeItems = Array.isArray(items) ? items : [];

  const extendedItems =
    safeItems.length > 0
      ? [safeItems[safeItems.length - 1], ...safeItems, safeItems[0]]
      : [];

  /* ================= NAVIGATION ================= */

  const onNext = () => {
    if (safeItems.length === 0) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const onPrev = () => {
    if (safeItems.length === 0) return;
    setCurrentIndex((prev) => prev - 1);
  };

  /* ================= INFINITE RESET ================= */

  useEffect(() => {
    if (extendedItems.length === 0) return;

    if (currentIndex === extendedItems.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(1);
      }, 700);
    }

    if (currentIndex === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(extendedItems.length - 2);
      }, 700);
    }
  }, [currentIndex, extendedItems.length]);

  /* restore animation */
  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  /* AUTO SLIDE */
  useEffect(() => {
    if (safeItems.length === 0) return;

    const timer = setInterval(onNext, 4000);
    return () => clearInterval(timer);
  }, [safeItems.length]);

  /* DOT INDEX */
  const activeDot =
    safeItems.length > 0
      ? (currentIndex - 1 + safeItems.length) % safeItems.length
      : 0;

  /* ================= UI ================= */

  return (
    <div className="relative w-full md:max-w-[80%] mx-auto overflow-hidden pb-20">
      {safeItems.length === 0 ? (
        <div className="text-center py-10">Loading...</div>
      ) : (
        <>
          {/* SLIDES */}
          <div
            className="mt-10 flex"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: transition
                ? "transform 700ms ease-in-out"
                : "none",
            }}
          >
            {extendedItems.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <CarouselItems
                  description={item.headline}
                  image={item.image}
                />
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <CarouselButton onPrev={onPrev} onNext={onNext} />

          {/* DOTS */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {safeItems.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index + 1)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  activeDot === index
                    ? "bg-gray-400 w-5"
                    : "bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;