import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    image: "https://images.unsplash.com/photo-1558102822-da570eb113ed?auto=format&fit=crop&q=80",
    title: "Skip-the-Line Sagrada Familia Guided Tour",
    duration: "2.5 hours",
    rating: 4.9,
    reviews: 3421,
    price: 49,
    badge: "Bestseller"
  },
  {
    image: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?auto=format&fit=crop&q=80",
    title: "Park Güell and Sagrada Familia: Guided Tour with Priority Access",
    duration: "4 hours",
    rating: 4.8,
    reviews: 2156,
    price: 89
  },
  {
    image: "https://images.unsplash.com/photo-1512753360435-329c4535a9a7?auto=format&fit=crop&q=80",
    title: "Barcelona: Tapas and Wine Tasting Tour",
    duration: "3 hours",
    rating: 4.9,
    reviews: 1876,
    price: 79,
    badge: "Trending"
  },
  {
    image: "https://images.unsplash.com/photo-1587789202069-f57c846b85db?auto=format&fit=crop&q=80",
    title: "FC Barcelona: Camp Nou Stadium Tour",
    duration: "1.5 hours",
    rating: 4.7,
    reviews: 2890,
    price: 35
  }
];

export default function PopularExperiences() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Popular Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}