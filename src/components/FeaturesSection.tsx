
import React from "react";
import { Compass, Map, Calendar, CreditCard } from "lucide-react";

const features = [
  {
    icon: <Compass className="w-6 h-6 text-travel-secondary" />,
    title: "Discover Places",
    description:
      "Explore unique destinations tailored to your preferences and travel style.",
  },
  {
    icon: <Map className="w-6 h-6 text-travel-secondary" />,
    title: "Curated Routes",
    description:
      "Follow expert-designed travel routes or create your own custom journey.",
  },
  {
    icon: <Calendar className="w-6 h-6 text-travel-secondary" />,
    title: "Smart Itineraries",
    description:
      "Get AI-powered itineraries that optimize your travel time and experiences.",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-travel-secondary" />,
    title: "Budget Control",
    description:
      "Plan trips that respect your budget without sacrificing amazing experiences.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            Travel planning, reimagined
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Our platform combines cutting-edge technology with travel expertise to help you
            create unforgettable journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl glass-card hover:bg-white/5 transition-colors"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
