
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const quotes = [
  {
    text: "For while the tale of how we suffer, and how we are delighted, and how we may triumph is never new, it always must be heard. There isn't any other tale to tell, it's the only light we've got in all this darkness.",
    author: "James Baldwin",
    work: "Sonny's Blues"
  },
  {
    text: "The function of freedom is to free someone else.",
    author: "Toni Morrison",
    work: "Beloved"
  },
  {
    text: "There is no greater agony than bearing an untold story inside you.",
    author: "Maya Angelou",
    work: "I Know Why the Caged Bird Sings"
  },
];

const QuotesGallery = () => {
  return (
    <section id="quotes" className="py-16 bg-brown/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-12">
          <Quote className="w-8 h-8 text-brown" />
          <h2 className="font-playfair text-3xl font-bold text-brown text-center">
            Inspiring Quotes
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((quote, index) => (
            <Card key={index} className="bg-cream border-brown/20 hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <blockquote className="font-inter text-lg text-brown/80 mb-4">
                  "{quote.text}"
                </blockquote>
                <footer className="text-right">
                  <cite className="font-playfair text-brown not-italic">
                    <span className="block font-semibold">{quote.author}</span>
                    <span className="text-sm text-brown/60">{quote.work}</span>
                  </cite>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesGallery;
