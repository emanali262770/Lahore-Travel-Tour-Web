import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import HolidayBanner from "@/components/HolidayBanner";
import PopularPlaces from "@/components/PopularPlacesSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
   <div className="">
    <HeroSection/>
    <FeaturesSection/>
    <PopularPlaces/>
    <WhyChooseUs/>
    <HolidayBanner/>
    <Testimonials/>
   </div>
  );
}
