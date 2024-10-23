import { Calendar, MapPin, Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[60vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80"
        alt="Barcelona Sagrada Familia"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 mb-2">
            <MapPin className="h-5 w-5" />
            <span className="text-lg">Barcelona, Spain</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-4">Discover Barcelona</h1>
          
          <div className="flex items-center space-x-6 text-lg">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 mr-1" />
              <span>4.8 (12,384 reviews)</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-1" />
              <span>300+ experiences available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}