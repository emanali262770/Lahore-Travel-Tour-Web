import React from "react";
import Image from "next/image";

const HolidayBanner = () => {
  return (
    <section className="w-full pb-12 sm:pb-20">
      <div className="w-full">
        <div
          className="
          relative
          w-full
          h-[150px] sm:h-[250px] md:h-[350px] lg:h-[400px]
          bg-[url('/images/banner.png')]
          bg-cover
          bg-center
          bg-no-repeat
          flex
          items-center
        "
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/14"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] items-center justify-center text-center h-full px-4 sm:px-6">
            <h2 className="text-white font-volkhov text-left leading-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Let’s Make Your <br />
              Next Holiday Amazing
            </h2>

            {/* Pink Line */}
            <div className="relative mt-1 sm:mt-2 w-[100px] sm:w-[140px] md:w-[180px] lg:w-[234px] h-[30px] sm:h-[35px] md:h-[40px]">
              <Image
                src="/images/line.png"
                alt="Underline"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolidayBanner;