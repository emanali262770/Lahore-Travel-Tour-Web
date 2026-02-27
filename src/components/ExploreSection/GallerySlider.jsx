"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function GallerySlider({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="h-full flex flex-col">
      {/* Main Image */}
      <div className="relative flex-1 rounded-xl overflow-hidden min-h-[200px]">
        <Image
          src={images[activeIndex]}
          alt="Gallery Image"
          fill
          className="object-cover"
        />

        {/* Left Button */}
        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 
          w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center 
          rounded-full border-2 border-white 
          bg-black/30 backdrop-blur-md 
          hover:bg-black/50 transition"
        >
          <ChevronLeft className="text-white" size={20} />
        </button>

        {/* Right Button */}
        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 
          w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center 
          rounded-full border-2 border-white 
          bg-black/30 backdrop-blur-md 
          hover:bg-black/50 transition"
        >
          <ChevronRight className="text-white" size={20} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4 overflow-x-auto pb-1 scrollbar-thin">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative shrink-0 w-16 h-12 sm:w-20 sm:h-16 rounded-lg overflow-hidden cursor-pointer border-2 transition ${
              activeIndex === index
                ? "border-primary"
                : "border-transparent"
            }`}
          >
            <Image
              src={img}
              alt="Thumbnail"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}