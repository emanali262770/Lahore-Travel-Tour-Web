'use client'
import React from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const statsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const statItem = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#f4f4f4] py-12 px-4 sm:py-20 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <p className="text-lightgrayish mb-3 text-sm sm:text-base">Why Choose Us?</p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Discover <span className="text-primary">Lahore</span> With{" "}
            <span className="text-primary">Comfort</span> &{" "}
            <span className="text-primary">Confidence</span>
          </h2>

          <p className="text-gray-600 mt-4 sm:mt-6 max-w-lg mx-auto lg:mx-0 leading-relaxed text-sm sm:text-base">
            Planning a trip to Lahore or looking for the best hotels and
            restaurants? We make your experience simple by connecting you with
            verified hotels, popular restaurants, and trusted tour services —
            all in one place.
          </p>

          {/* Button */}
          <button className="mt-6 sm:mt-8 bg-primary text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl flex items-center gap-2 shadow-md hover:scale-105 transition duration-300 mx-auto lg:mx-0 text-sm sm:text-base">
            <MapPin size={16} className="sm:w-[18px] sm:h-[18px]" />
            Explore Lahore
          </button>

          {/* ✅ Stats (Framer Motion) */}
          <motion.div
            className="flex justify-center lg:justify-start gap-8 sm:gap-12 mt-8 sm:mt-12 flex-wrap"
            variants={statsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.div className="text-center lg:text-left" variants={statItem}>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary">14</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Years Experience</p>
            </motion.div>

            <motion.div className="text-center lg:text-left" variants={statItem}>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary">320+</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Distention Collaboration</p>
            </motion.div>

            <motion.div className="text-center lg:text-left" variants={statItem}>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary">67+</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Satisfied Customer</p>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative hidden lg:flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative w-[320px] sm:w-[380px] md:w-[430px] h-[450px] sm:h-[500px] md:h-[567px]">
            <div
              className="absolute top-0 left-0 w-[290px] sm:w-[350px] md:w-[400px]
              h-[440px] sm:h-[490px] md:h-[560px] bg-[#d9edf2]
              rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
            ></div>

            <div
              className="absolute top-4 sm:top-5 md:top-6 right-0 w-[290px] sm:w-[350px] md:w-[400px]
              h-[430px] sm:h-[480px] md:h-[540px] rounded-[25px] sm:rounded-[30px] md:rounded-[40px]
              overflow-hidden shadow-xl"
            >
              <Image
                src="/images/mosque.png"
                alt="Lahore Fort"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute bottom-4 sm:bottom-6 left-[-80px] sm:left-[-100px] md:left-[-150px] backdrop-blur-[4px] bg-gray-50/20 px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-lg">
              <p className="text-xs sm:text-sm text-grayish mb-1 sm:mb-2">How Your Experience?</p>
              <div className="flex gap-1.5 sm:gap-2 text-lg sm:text-xl">
                <span>😡</span>
                <span>😕</span>
                <span>😐</span>
                <span>😊</span>
                <span>😍</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;