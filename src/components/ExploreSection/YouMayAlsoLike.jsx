"use client";

import Image from "next/image";
import { MapPin, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { suggestedPlaces } from "../data/YouMayAlsoLikeData";

export default function YouMayAlsoLike() {
  const router = useRouter();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    setTimeout(checkScroll, 350);
  };

  return (
    <section className="bg-lightblue py-16 md:py-20 mt-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-0">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            You might{" "}
            <span className="text-primary border-b-4 border-primary pb-1">
              also like
            </span>
            ...
          </h2>
        </div>

        {/* Mobile: Carousel */}
        {isMobile ? (
          <div className="relative">
            {/* Left Button */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 bg-white shadow-lg rounded-full p-2 transition-opacity duration-200 ${
                canScrollLeft ? "opacity-100" : "opacity-30 cursor-default"
              }`}
            >
              <ChevronLeft size={22} className="text-primary" />
            </button>

            {/* Scrollable Row */}
            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {suggestedPlaces.map((place) => (
                <div
                  key={place.id}
                  onClick={() => router.push(`/explore-places/${place.id}`)}
                  className="cursor-pointer flex-shrink-0 w-[280px] snap-center group"
                >
                  <PlaceCard place={place} />
                </div>
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 bg-white shadow-lg rounded-full p-2 transition-opacity duration-200 ${
                canScrollRight ? "opacity-100" : "opacity-30 cursor-default"
              }`}
            >
              <ChevronRight size={22} className="text-primary" />
            </button>
          </div>
        ) : (
          /* Desktop: Grid */
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 xl:gap-16">
            {suggestedPlaces.map((place) => (
              <div
                key={place.id}
                onClick={() => router.push(`/explore-places/${place.id}`)}
                className="cursor-pointer w-[300px] mx-auto group"
              >
                <PlaceCard place={place} />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

// Extracted card for reuse
function PlaceCard({ place }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col h-full">

      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={place.image}
          alt={place.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md"
        >
          <Heart size={18} className="text-primary" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg text-gray-900">{place.title}</h3>

        <div className="flex items-center gap-1 text-gray-400 text-sm mt-1">
          <MapPin size={14} />
          {place.location}
        </div>

        <p className="text-lightgrayish text-sm mt-3 leading-relaxed flex-grow">
          {place.description}
        </p>

        <div className="h-px bg-gray-200 my-4"></div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {place.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}