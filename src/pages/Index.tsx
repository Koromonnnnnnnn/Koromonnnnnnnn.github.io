
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedAuthors from "@/components/FeaturedAuthors";
import Timeline from "@/components/Timeline";
import ReadingList from "@/components/ReadingList";
import QuotesGallery from "@/components/QuotesGallery";
import VideoGallery from "@/components/VideoGallery";
import AfrofuturismSection from "@/components/AfrofuturismSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <FeaturedAuthors />
      <AfrofuturismSection />
      <Timeline />
      <QuotesGallery />
      <VideoGallery />
      <ReadingList />
    </div>
  );
};

export default Index;
