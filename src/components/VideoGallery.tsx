
import { Film } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const videos = [
  {
    title: "James Baldwin Debates William F. Buckley (1965)",
    thumbnail: "https://i.ytimg.com/vi/oFeoS41xe7w/maxresdefault.jpg",
    description: "Historic debate at Cambridge University on the question: Is the American Dream at the expense of the American Negro?",
    url: "https://www.youtube.com/embed/oFeoS41xe7w"
  },
  {
    title: "Toni Morrison Nobel Prize Speech",
    thumbnail: "https://i.ytimg.com/vi/ticXzFEpN9o/maxresdefault.jpg",
    description: "Morrison's Nobel Lecture upon receiving the Nobel Prize in Literature in 1993.",
    url: "https://www.youtube.com/embed/ticXzFEpN9o"
  },
  {
    title: "Maya Angelou Reading 'Still I Rise'",
    thumbnail: "https://i.ytimg.com/vi/JqOqo50LSZ0/maxresdefault.jpg",
    description: "Maya Angelou performs her iconic poem 'Still I Rise'.",
    url: "https://www.youtube.com/embed/JqOqo50LSZ0"
  }
];

const VideoGallery = () => {
  return (
    <section id="videos" className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-12">
          <Film className="w-8 h-8 text-brown" />
          <h2 className="font-playfair text-3xl font-bold text-brown text-center">
            Historical Videos
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="bg-white border-brown/20 hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-playfair font-semibold text-brown mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-brown/60">
                    {video.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
