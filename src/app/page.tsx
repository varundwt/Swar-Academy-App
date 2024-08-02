import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonialCards from "@/components/MusicSchoolTestimonialCards";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import UpcomingWebinars from "@/components/UpcomingWebinars";

export default function Home() {
  return (  
     <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedSection/>
      <WhyChooseUs/>
      <MusicSchoolTestimonialCards/>
      <UpcomingWebinars/>
      </main>  
  );
}
