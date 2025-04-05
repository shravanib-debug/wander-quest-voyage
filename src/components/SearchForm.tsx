
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Search, Calendar, DollarSign, Globe, Plane, Star } from "lucide-react";

const SearchForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search initiated",
      description: "Finding the best travel options for you...",
      duration: 3000,
    });
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto glass-card rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          <Search className="h-5 w-5 text-travel-secondary" />
          Find Your Dream Vacation
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="space-y-2">
              <label htmlFor="destination" className="text-sm text-white/70 block">
                Destination
              </label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                <Input
                  id="destination"
                  placeholder="Where do you want to go?"
                  className="pl-10 bg-white/5 border-white/10"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="days" className="text-sm text-white/70 block">
                Duration
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                <Input
                  id="days"
                  type="number"
                  placeholder="How many days?"
                  min="1"
                  className="pl-10 bg-white/5 border-white/10"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="budget" className="text-sm text-white/70 block">
                Budget
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                <Input
                  id="budget"
                  type="number"
                  placeholder="Your budget"
                  min="100"
                  className="pl-10 bg-white/5 border-white/10"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="season" className="text-sm text-white/70 block">
                Season
              </label>
              <Select>
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="Any season" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any season</SelectItem>
                  <SelectItem value="spring">Spring</SelectItem>
                  <SelectItem value="summer">Summer</SelectItem>
                  <SelectItem value="autumn">Autumn</SelectItem>
                  <SelectItem value="winter">Winter</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="travelMode" className="text-sm text-white/70 block">
                Travel Mode
              </label>
              <div className="relative">
                <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                <Select>
                  <SelectTrigger className="bg-white/5 border-white/10 pl-10">
                    <SelectValue placeholder="Any mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any mode</SelectItem>
                    <SelectItem value="flight">Flight</SelectItem>
                    <SelectItem value="train">Train</SelectItem>
                    <SelectItem value="road">Road Trip</SelectItem>
                    <SelectItem value="cruise">Cruise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="luxury" className="text-sm text-white/70 block">
                Luxury Level
              </label>
              <div className="relative">
                <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                <Select>
                  <SelectTrigger className="bg-white/5 border-white/10 pl-10">
                    <SelectValue placeholder="Any level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any level</SelectItem>
                    <SelectItem value="budget">Budget</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-travel-primary hover:bg-travel-primary/90 text-white py-6"
          >
            <Search className="mr-2 h-5 w-5" /> Find Travel Options
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
