
import { BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 min-h-screen flex items-center bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-8 text-brown" />
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-brown mb-6 animate-fade-in">
            Exploring Black Literature & History
          </h1>
          <p className="font-inter text-lg md:text-xl text-brown/80 mb-8 animate-fade-in">
            Discover the powerful voices and pivotal moments that have shaped Black history and literature through the ages.
          </p>
          <a
            href="#authors"
            className="inline-block bg-brown text-cream px-8 py-3 rounded-lg hover:bg-brown-light transition-colors duration-200 font-inter"
          >
            Explore Authors
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
