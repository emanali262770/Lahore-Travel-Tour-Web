"use client";
import Image from "next/image";

import { GallerySlider } from "./GallerySlider";
import { tours } from "../data/tourguideData";
import YouMayAlsoLike from "./YouMayAlsoLike";

export default function TourDetailPage({ id }) {
  const tourId = parseInt(id);

  const tour = tours.find((item) => item.id === tourId);
  if (!tour) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Tour Not Found</h2>
      </div>
    );
  }

  return (
    <section className="py-6 sm:py-10">
      <div className="max-w-[1200px] mx-auto bg-white p-4 sm:p-6 lg:p-10">
        {/* Dynamic Heading */}
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-800 leading-snug">
          {tour.title} — <span className="text-primary">{tour.subtitle}</span>{" "}
          of Lahore
        </h1>

        <p className="text-sm text-grayish mt-2">
          A Historic Architectural Wonder
        </p>

        {/* Dynamic Banner */}
        <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px] mt-6 rounded-xl overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overview */}
        <div className="mt-6 sm:mt-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3">
            Place Overview
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            {tour.overview}
          </p>
        </div>

        {/* Key Points */}
        <div className="mt-6 sm:mt-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
            Key Points
          </h2>
          <ul className="space-y-3 text-grayish text-sm sm:text-base">
            {tour.keyPoints.map((point, index) => (
              <li key={index}>
                <span className="mr-2">{point.icon}</span>
                <strong>{point.label}:</strong> {point.value}
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery Section */}
        <div className="mt-10 sm:mt-12">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Gallery
          </h2>

          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 sm:gap-6 lg:h-[500px]">
            {/* LEFT SIDE - IMAGE SLIDER */}
            <div className="lg:col-span-2 h-[300px] sm:h-[380px] lg:h-full">
              <GallerySlider images={tour.gallery} />
            </div>

            {/* RIGHT SIDE - VIDEO */}
            <div className="relative rounded-xl overflow-hidden bg-black h-[220px] sm:h-[300px] lg:h-full">
              <video
                src={tour.video}
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* YouMayAlsoLike */}
      <YouMayAlsoLike />
    </section>
  );
}