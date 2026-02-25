"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Heart, MapPin } from "lucide-react";
import { places } from "./data/popularSectionData";

export default function PopularPlaces() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("https://api.unsplash.com/photos/random", {
          params: {
            query: "Lahore adventure",
            count: places.length, // ✅ correct
            orientation: "landscape",
            client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
          },
        });

        setPhotos(res.data); // ✅ no .results
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="bg-lightblue py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            <span className="text-primary border-b-4 border-primary pb-1">
              Popular
            </span>{" "}
            Places
          </h2>
          <p className="text-gray-500 mt-2">
            Must-visit destinations in Lahore
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-20 justify-items-center">
          {places.map((place, index) => {
            const imageUrl =
              Array.isArray(photos) && photos[index]
                ? photos[index].urls.regular
                : "/images/bad.png";

            return (
              <div
                key={index}
                className="w-[300px] h-full flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-transparent"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden rounded-2xl">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={place.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 animate-pulse rounded-2xl" />
                  )}

                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
                    <Heart size={18} className="text-primary" />
                  </button>
                </div>

                {/* Content */}
                <div className="relative -mt-8 bg-white rounded-t-3xl rounded-b-2xl p-5 flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {place.title}
                  </h3>

                  <div className="flex items-center gap-1 text-gray-400 text-sm mt-1">
                    <MapPin size={14} />
                    {place.location}
                  </div>

                  <p className="text-lightgrayish text-sm mt-3 leading-relaxed flex-grow">
                    {place.description}
                  </p>

                  <div className="h-px bg-gray-200 my-4"></div>

                  {/* Tags stay at bottom */}
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
          })}
        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <button className="bg-primary text-white px-8 py-3 rounded-full hover:scale-105 transition duration-300">
            View All →
          </button>
        </div>
      </div>
    </section>
  );
}
