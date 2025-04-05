
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const travelIcons = [
      'plane', 'globe', 'passport', 'suitcase', 
      'umbrella-beach', 'mountain', 'hotel', 'camera',
      'anchor', 'bus', 'train', 'ship'
    ];
    
    const background = document.createElement('div');
    background.className = 'background-animation';
    document.body.appendChild(background);
    
    for (let i = 0; i < 20; i++) {
      const icon = document.createElement('div');
      icon.className = 'travel-icon';
      
      // Random properties
      const randomIcon = travelIcons[Math.floor(Math.random() * travelIcons.length)];
      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-${randomIcon}"></svg>`;
      
      const size = Math.random() * 30 + 20;
      const posX = Math.random() * window.innerWidth;
      const delay = Math.random() * 15;
      const duration = Math.random() * 20 + 10;
      
      icon.style.cssText = `
        font-size: ${size}px; 
        left: ${posX}px; 
        top: ${window.innerHeight + 100}px; 
        animation-delay: ${delay}s; 
        animation-duration: ${duration}s;
      `;
      
      background.appendChild(icon);
    }
    
    return () => {
      document.body.removeChild(background);
    };
  }, []);

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Hero Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
              Wander is your gateway to unforgettable adventures
            </h1>
            <p className="text-lg text-white/70 max-w-xl">
              Plan, explore, and experience destinations like never before. Discover personalized travel recommendations tailored to your preferences.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-travel-primary hover:bg-travel-primary/90 text-white px-6 py-6 rounded-md font-medium text-base">
                Start exploring
              </Button>
              <Button variant="ghost" className="text-white/80 hover:text-white rounded-md">
                Browse destinations
              </Button>
            </div>
          </div>

          {/* Tilted Map Card */}
          <div className="w-full lg:w-1/2 perspective-1000">
            <div 
              ref={mapRef}
              className="relative w-full aspect-video bg-travel-dark glass-card rounded-xl overflow-hidden animate-tilt-card transform"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-travel-primary/30 to-travel-secondary/10" />
              <div className="absolute inset-0 p-6">
                <div className="flex justify-between mb-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-white/60 font-mono">WanderQuest™</div>
                </div>

                <div className="w-full h-full rounded-md bg-[url('/public/lovable-uploads/c8bc2c53-99ce-435e-b59b-1b7a4245a1df.png')] bg-cover bg-center relative">
                  {/* Map Markers */}
                  <div className="absolute top-[20%] left-[30%] w-4 h-4 bg-travel-primary rounded-full pulse-animation" />
                  <div className="absolute top-[40%] left-[60%] w-4 h-4 bg-travel-secondary rounded-full pulse-animation" />
                  <div className="absolute top-[60%] left-[45%] w-4 h-4 bg-travel-warning rounded-full pulse-animation" />
                  
                  {/* UI Elements */}
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-3 flex flex-col">
                    <span className="text-xs font-semibold">Current Route</span>
                    <span className="text-xs text-white/70">Tokyo → Kyoto → Osaka</span>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                      <div className="text-xs text-green-400">Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
