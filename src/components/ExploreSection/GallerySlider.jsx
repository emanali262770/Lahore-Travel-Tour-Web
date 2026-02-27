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
      <div className="relative flex-1 rounded-xl overflow-hidden">

        <Image
          src={images[activeIndex]}
          alt="Gallery Image"
          fill
          className="object-cover"
        />

        {/* Left Button */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 
          w-12 h-12 flex items-center justify-center 
          rounded-full border-2 border-white 
          bg-black/30 backdrop-blur-md 
          hover:bg-black/50 transition"
        >
          <ChevronLeft className="text-white" size={28} />
        </button>

        {/* Right Button */}
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 
          w-12 h-12 flex items-center justify-center 
          rounded-full border-2 border-white 
          bg-black/30 backdrop-blur-md 
          hover:bg-black/50 transition"
        >
          <ChevronRight className="text-white" size={28} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4 overflow-x-auto">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative w-20 h-16 rounded-lg overflow-hidden cursor-pointer border-2 ${
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