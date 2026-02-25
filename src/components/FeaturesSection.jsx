"use client";

import { motion } from "framer-motion";
import { features } from "./data/FeatureData";


const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Everything <span className="text-primary">You Need</span> to Explore
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Whether you are a tourist or a local, we have got you covered with the
          best places, food spots, and personalized recommendations.
        </p>

        {/* Cards */}
        <div className="mt-14 flex flex-wrap justify-center gap-14">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="w-[360px] bg-secondary border border-primary rounded-xl p-6 text-left hover:shadow-lg transition duration-300"
              >
                <Icon className="text-primary mb-4" size={28} />
                <h3 className="text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-lightgrayish text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
