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
    <section className=" py-10 ">
      <div className="max-w-[1200px] mx-auto bg-white  p-6 sm:p-10">
        {/* 🔥 Dynamic Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          {tour.title} — <span className="text-primary">{tour.subtitle}</span>{" "}
          of Lahore
        </h1>

        <p className="text-sm text-grayish mt-2">
          A Historic Architectural Wonder
        </p>

        {/* 🔥 Dynamic Banner */}
        <div className="relative w-full h-[220px] sm:h-[320px] lg:h-[400px] mt-6 rounded-xl overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 🔥 Overview */}
        <div className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            Place Overview
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            {tour.overview}
          </p>
        </div>

        {/* 🔥 Key Points */}
        <div className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
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

        {/* 🔥 Gallery Section */}
        <div className="mt-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
            Gallery
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:h-[500px]">
            {/* LEFT SIDE - IMAGE SLIDER */}
            <div className="lg:col-span-2 h-full">
              <GallerySlider images={tour.gallery} />
            </div>

            {/* RIGHT SIDE - VIDEO */}
            <div className="relative rounded-xl overflow-hidden bg-black h-full">
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
