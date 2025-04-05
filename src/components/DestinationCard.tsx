
import React from "react";
import { MapPin, Star } from "lucide-react";

interface DestinationCardProps {
  title: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  duration: string;
}

const DestinationCard = ({
  title,
  location,
  image,
  price,
  rating,
  duration,
}: DestinationCardProps) => {
  const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 fill-travel-warning text-travel-warning" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <Star key={i} className="w-4 h-4 text-travel-warning" style={{ clipPath: "inset(0 50% 0 0)" }} />
        );
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-500" />);
      }
    }

    return stars;
  };

  return (
    <div className="group rounded-xl overflow-hidden glass-card hover:ring-1 hover:ring-white/20 transition-all duration-300">
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-travel-success/90 backdrop-blur-sm text-white text-xs font-semibold py-1 px-2 rounded-full">
          ${price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center mb-2 text-white/70">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center mb-3">
          {renderRatingStars(rating)}
          <span className="ml-2 text-sm text-white/70">{rating.toFixed(1)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/60 text-sm">{duration}</span>
          <button className="bg-travel-primary hover:bg-travel-primary/90 text-white py-1 px-4 text-sm rounded-md transition-colors">
            View Deal
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
