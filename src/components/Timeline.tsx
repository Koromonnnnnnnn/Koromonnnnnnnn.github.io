
import { Card, CardContent } from "@/components/ui/card";

const events = [
  {
    year: "1773",
    event: "Phillis Wheatley's 'Poems on Various Subjects' Published",
    description: "First published African-American poet",
  },
  {
    year: "1845",
    event: "Frederick Douglass's Narrative Published",
    description: "Groundbreaking autobiography becomes influential abolitionist text",
  },
  {
    year: "1903",
    event: "W.E.B. Du Bois Publishes 'The Souls of Black Folk'",
    description: "Seminal work discussing the 'double consciousness' experienced by Black Americans",
  },
  {
    year: "1920",
    event: "W.E.B. Du Bois Publishes 'The Comet'",
    description: "Early example of Black speculative fiction, now considered a precursor to Afrofuturism",
  },
  {
    year: "1937",
    event: "Their Eyes Were Watching God",
    description: "Zora Neale Hurston publishes her masterpiece",
  },
  {
    year: "1976",
    event: "Octavia Butler Publishes 'Patternmaster'",
    description: "Butler's first published novel, beginning her influential career in science fiction",
  },
  {
    year: "1993",
    event: "Mark Dery Coins the Term 'Afrofuturism'",
    description: "Cultural critic first uses the term in his essay 'Black to the Future'",
  },
  {
    year: "2015",
    event: "N.K. Jemisin Wins First of Three Consecutive Hugo Awards",
    description: "First author to win the prestigious Hugo Award for Best Novel three years in a row",
  },
  {
    year: "2018",
    event: "Black Panther Film Released",
    description: "Mainstream cultural phenomenon bringing Afrofuturist aesthetics to global audiences",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brown text-center mb-12">
          Historical Timeline
        </h2>
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={event.year} className="relative">
              <Card className="ml-8 md:ml-0 md:w-1/2 md:even:ml-auto">
                <CardContent className="p-6">
                  <span className="text-burgundy font-bold text-xl mb-2 block">
                    {event.year}
                  </span>
                  <h3 className="font-playfair text-lg font-bold text-brown mb-2">
                    {event.event}
                  </h3>
                  <p className="text-brown/80">{event.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
