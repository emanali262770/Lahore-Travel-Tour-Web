"use client";

import React, { useState, useEffect, use } from "react";
import axios from "axios";
import Image from "next/image";
import FilterSidebar from "./FilterSidebar";
import { useRouter } from "next/navigation";

const tours = [
  {
    id: 1,
    title: "Badshahi Mosque",
    location: "Walled City",
    type: "Cultural Tours",
  },
  {
    id: 2,
    title: "Lahore Fort (Shahi Qila)",
    location: "Walled City",
    type: "Cultural Tours",
  },
  {
    id: 3,
    title: "Shalimar Gardens",
    location: "Shalimar",
    type: "Nature Tours",
  },
  {
    id: 4,
    title: "Gawalmandi Food Street",
    location: "Gawalmandi",
    type: "Food Tours",
  },
  {
    id: 5,
    title: "Liberty Market",
    location: "Gulberg",
    type: "City Tours",
  },
];

const ExplorePage = () => {
  const [selectedType, setSelectedType] = useState("");
  const [photos, setPhotos] = useState([]);

  // 🔥 Fetch Unsplash Images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(
          "https://api.unsplash.com/photos/random",
          {
            params: {
              query: "Lahore tourism",
              count: tours.length,
              orientation: "landscape",
              client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
            },
          }
        );

        setPhotos(res.data);
      } catch (error) {
        console.error("Error fetching Unsplash images:", error);
      }
    };

    fetchImages();
  }, []);

  // 🔥 Filter logic
  const filteredTours = selectedType
    ? tours.filter((tour) => tour.type === selectedType)
    : tours;

  const visibleTours = filteredTours.slice(0, 3);
const router=useRouter()
  return (
    <section className="bg-lightblue py-14">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-start lg:flex-row gap-10">

        {/* LEFT FILTER */}
        <FilterSidebar
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />

        {/* RIGHT SIDE */}
        <div className="flex-1 space-y-6">

          {visibleTours.map((tour, index) => {
            const imageUrl =
              Array.isArray(photos) && photos[index]
                ? photos[index].urls.regular
                : "/images/bad.png"; // fallback

            return (
              <div
                key={tour.id}
                className="bg-pink-50 rounded-xl p-5 flex flex-col md:flex-row gap-6"
              >
                <div className="relative w-full md:w-[250px] h-[180px] rounded-lg overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {tour.title}
                  </h3>

                  <p className="text-sm text-grayish mt-1">
                    📍 {tour.location}
                  </p>

                  <p className="text-grayish mt-3 text-sm">
                    One of the most beautiful attractions in Lahore,
                    showcasing Mughal architecture and rich history.
                  </p>

                  <button onClick={()=> router.push(`/explore-places/${tour.id}`)} className="mt-4 border cursor-pointer border-primary-mid text-primary px-6 py-2 rounded-lg hover:bg-secondary transition">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white">
              1
            </button>
            <button className="w-8 h-8 rounded-full hover:bg-secondary">
              2
            </button>
            <button className="w-8 h-8 rounded-full hover:bg-secondary">
              3
            </button>
            <span>...</span>
            <button className="w-8 h-8 rounded-full hover:bg-secondary">
              20
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExplorePage;