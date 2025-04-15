
import { RocketIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const afrofuturismAuthors = [
  {
    name: "Octavia E. Butler",
    description: "Groundbreaking science fiction author known for exploring themes of race, gender, and power",
    notable: "Kindred, Parable of the Sower",
    contribution: "Butler's work often features Black protagonists navigating future worlds that reflect and critique present societal issues."
  },
  {
    name: "N.K. Jemisin",
    description: "First author to win the Hugo Award for Best Novel three years in a row",
    notable: "The Broken Earth trilogy",
    contribution: "Jemisin creates worlds where marginalized groups must navigate complex power structures, often drawing parallels to historical oppression."
  },
  {
    name: "W.E.B. Du Bois",
    description: "Sociologist, historian, and civil rights activist",
    notable: "The Comet (short story)",
    contribution: "Du Bois's early speculative fiction explored racial themes and is now considered a precursor to modern Afrofuturism."
  },
  {
    name: "Samuel R. Delany",
    description: "Science fiction author and literary critic",
    notable: "Babel-17, Dhalgren",
    contribution: "Delany's work explores complex social systems and identity, often featuring diverse characters and challenging social norms."
  },
];

const AfrofuturismSection = () => {
  return (
    <section id="afrofuturism" className="py-20 bg-brown/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-8">
          <RocketIcon className="w-8 h-8 text-burgundy" />
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brown text-center">
            Afrofuturism & Histofuturism
          </h2>
        </div>
        
        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-brown/80 text-lg mb-6">
            Afrofuturism is a cultural aesthetic that combines science fiction, history, and fantasy to explore the African-American experience and connects those to the past, present, and future. Histofuturism challenges traditional historical narratives by reimagining the past and its impact on possible futures.
          </p>
          
          <Card className="border-brown/20 mb-8">
            <CardContent className="p-6">
              <h3 className="font-playfair text-xl font-bold text-brown mb-4">Historical Revisionism in Black Literature</h3>
              <p className="text-brown/80 mb-4">
                Black writers often challenge conventional historical narratives by uncovering overlooked events and figures. This revisionism serves not only to correct the historical record but also to imagine alternative futures based on a more complete understanding of the past.
              </p>
              <p className="text-brown/80">
                Through speculative fiction and historical analysis, authors create narratives that question established power structures and envision worlds where historical injustices have been addressed or transformed.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <h3 className="font-playfair text-2xl font-bold text-brown mb-8 text-center">
          Notable Contributors
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {afrofuturismAuthors.map((author) => (
            <Card key={author.name} className="bg-cream border-brown/20 hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-bold text-brown mb-2">{author.name}</h3>
                <p className="text-brown/80 mb-2">{author.description}</p>
                <p className="text-sm text-brown/90 mb-4">
                  Notable works: <span className="italic">{author.notable}</span>
                </p>
                <p className="text-brown/80 text-sm">{author.contribution}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#timeline"
            className="inline-block bg-burgundy text-cream px-6 py-3 rounded-lg hover:bg-burgundy/80 transition-colors duration-200 font-inter"
          >
            Explore Historical Timeline
          </a>
        </div>
      </div>
    </section>
  );
};

export default AfrofuturismSection;
