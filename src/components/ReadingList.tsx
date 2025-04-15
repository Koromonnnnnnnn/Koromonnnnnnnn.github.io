
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const books = [
  {
    title: "Beloved",
    author: "Toni Morrison",
    year: "1987",
    description: "A powerful examination of family, memory, and slavery's enduring impact",
  },
  {
    title: "Native Son",
    author: "Richard Wright",
    year: "1940",
    description: "A groundbreaking novel addressing racial tension and social injustice",
  },
  {
    title: "The Color Purple",
    author: "Alice Walker",
    year: "1982",
    description: "An epistolary novel exploring themes of racism, sexism, and resilience",
  },
];

const ReadingList = () => {
  return (
    <section id="reading-list" className="py-20 bg-brown-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <BookOpen className="w-12 h-12 mx-auto mb-4 text-brown" />
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brown">
            Essential Reading List
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book) => (
            <Card key={book.title} className="bg-white">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-bold text-brown mb-2">
                  {book.title}
                </h3>
                <p className="text-brown/60 text-sm mb-2">
                  {book.author} ({book.year})
                </p>
                <p className="text-brown/80">{book.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadingList;
