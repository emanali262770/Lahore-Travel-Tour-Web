"use client";

import React from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pellentesque pulvinar lorem justo, id faucibus mi.”",
    name: "Joe Blo",
    visited: "France",
    avatar: "/images/user1.png",
  },
  {
    id: 2,
    text: "“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pellentesque pulvinar lorem justo, id faucibus mi.”",
    name: "Jane Blo",
    visited: "France",
    avatar: "/images/user2.png",
  },
  {
    id: 3,
    text: "“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pellentesque pulvinar lorem justo, id faucibus mi.”",
    name: "Joe Blo",
    visited: "France",
    avatar: "/images/user3.png",
  },
];

function TestimonialCard({ t }) {
  return (
    <div
      className="
        relative
        h-[250px]
        w-[300px]
        sm:w-[340px]
        rounded-2xl
        bg-white
        border
        border-primary/60
        px-7
        pt-12
        pb-8
        text-center
      "
    >
      {/* Avatar on top border */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2">
        <div className="h-18 w-18 rounded-full overflow-hidden ring-4 ring-white shadow">
          <Image
            src={t.avatar}
            alt={t.name}
            width={84}
            height={84}
            className="h-full w-full object-cover"
            quality={100}
          />
        </div>
      </div>

      <h3 className="mt-1 font-bold text-zinc-900">{t.name}</h3>
      <p className="text-xs text-zinc-500 mt-1">
        Visited: <span className="text-zinc-700">{t.visited}</span>
      </p>

      {/* Pink divider line */}
      <div className="mx-auto my-5 h-px w-36 bg-primary/60" />

      <p className="text-sm leading-relaxed text-zinc-600">{t.text}</p>
    </div>
  );
}

export default function TestimonialsMarqueeExact() {
  // duplicate for seamless loop
  const items = [...testimonials, ...testimonials];

  return (
    <section className="w-full bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading (exact like screenshot) */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900">
            <span className="text-primary underline underline-offset-8 decoration-2">
              Opinions
            </span>{" "}
            of those who have{" "}
            <span className="text-primary underline underline-offset-8 decoration-2">
              traveled
            </span>{" "}
            with us
          </h2>

          <p className="mt-3 text-sm sm:text-base text-zinc-500 max-w-xl mx-auto">
            We’ve helped over 3,000 people like you have an unforgettable surf vacation.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative mt-12">
          {/* fade edges */}
          <div className="pointer-events-none hidden md:block absolute inset-y-0 left-0 w-14 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
<div className="pointer-events-none hidden md:block absolute inset-y-0 right-0 w-14 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="overflow-hidden">
            <div className="marquee group flex w-max gap-6 sm:gap-8 py-10">
              {items.map((t, idx) => (
                <div key={`${t.id}-${idx}`} className="shrink-0">
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>

        
        </div>
      </div>

      {/* Infinite marquee + pause on hover */}
      <style jsx>{`
        .marquee {
          animation: scroll 22s linear infinite;
        }
        .group:hover .marquee {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}