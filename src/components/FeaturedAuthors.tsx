
import { Card, CardContent } from "@/components/ui/card";

const authors = [
  {
    name: "Maya Angelou",
    description: "Poet, memoirist, and civil rights activist",
    years: "1928-2014",
    notable: "I Know Why the Caged Bird Sings",
  },
  {
    name: "James Baldwin",
    description: "Novelist, playwright, and activist",
    years: "1924-1987",
    notable: "Go Tell It on the Mountain",
  },
  {
    name: "Toni Morrison",
    description: "Nobel Prize-winning novelist",
    years: "1931-2019",
    notable: "Beloved",
  },
];

const FeaturedAuthors = () => {
  return (
    <section id="authors" className="py-20 bg-brown text-cream">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Authors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {authors.map((author) => (
            <Card key={author.name} className="bg-brown-light/10 border-cream/20">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-bold mb-2">{author.name}</h3>
                <p className="text-cream/80 text-sm mb-2">{author.years}</p>
                <p className="mb-4">{author.description}</p>
                <p className="text-sm text-cream/90">
                  Notable work: <span className="italic">{author.notable}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAuthors;
