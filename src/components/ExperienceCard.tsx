import { Clock, Star } from 'lucide-react';

interface ExperienceCardProps {
  image: string;
  title: string;
  duration: string;
  rating: number;
  reviews: number;
  price: number;
  badge?: string;
}

export default function ExperienceCard({
  image,
  title,
  duration,
  rating,
  reviews,
  price,
  badge
}: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {badge && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
            {badge}
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Clock className="h-4 w-4 mr-1" />
          <span>{duration}</span>
        </div>
        
        <div className="flex items-center mb-3">
          <Star className="h-4 w-4 text-yellow-400 mr-1" />
          <span className="font-medium">{rating}</span>
          <span className="text-gray-600 text-sm ml-1">({reviews})</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-600">From</span>
            <p className="text-xl font-bold">${price}</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}