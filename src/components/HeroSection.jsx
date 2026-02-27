"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const HeroSection = () => {
 const router = useRouter();  
  return (
    <section className="relative h-[786px]  w-full">
      {/* Background Image */}
      <div
        className="absolute bg-black inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/heroBanner.png')", // put your image inside public/images
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 h-full flex items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="max-w-2xl text-white"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Discover the Heart <br />
            of{" "}
            <span className="relative inline-block text-primary">
              Pakistan
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute left-0 lg:-bottom-0 -bottom-1  h-[8px] bg-gradient-to-r from-primary via-pink-400 to-primary rounded-full"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-lg text-gray-200"
          >
            Your AI-powered guide to exploring Lahore's rich heritage, delicious
            food, and vibrant culture. From Mughal wonders to street food
            paradise.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <button  onClick={() => router.push("/explore-places")} className="bg-primary text-white px-6 py-3 rounded-[15px] font-medium hover:scale-105 transition duration-300 flex items-center gap-2">
              <Image
                src="/images/exploreicon.svg"
                alt="Explore Icon"
                width={20}
                height={20}
              />
              Explore Lahore
            </button>

            <button className="bg-white/20 backdrop-blur-none border border-white/30 text-white px-6 py-3 rounded-[15px] font-medium hover:bg-white/30 transition duration-300">
              AI Day Planner
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
