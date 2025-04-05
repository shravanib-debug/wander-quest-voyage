
import React from "react";
import DestinationCard from "./DestinationCard";

const destinations = [
  {
    id: 1,
    title: "Bali Paradise Retreat",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: 1299,
    rating: 4.7,
    duration: "7 Days"
  },
  {
    id: 2,
    title: "European Adventure",
    location: "Paris, Rome, Barcelona",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: 2499,
    rating: 4.5,
    duration: "14 Days"
  },
  {
    id: 3,
    title: "Rocky Mountain Trip",
    location: "Colorado, USA",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: 899,
    rating: 4.2,
    duration: "5 Days"
  }
];

const TopDestinations = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              Top Destinations
            </h2>
            <p className="text-white/70">
              Most popular choices for travelers this month
            </p>
          </div>
          <button className="text-travel-primary hover:underline">
            View all destinations →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              title={destination.title}
              location={destination.location}
              image={destination.image}
              price={destination.price}
              rating={destination.rating}
              duration={destination.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
