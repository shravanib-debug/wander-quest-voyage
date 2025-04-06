
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Coffee, Utensils, Hotel, PlaneTakeoff } from "lucide-react";
import Footer from "@/components/Footer";

type ItineraryDay = {
  day: number;
  mainActivity: string;
  alternativeActivity: string;
  meals: string;
  accommodation: string;
};

type Itinerary = {
  destination: string;
  days: ItineraryDay[];
};

const TravelPlanner = () => {
  const [budget, setBudget] = useState("");
  const [luxuryLevel, setLuxuryLevel] = useState("");
  const [destinationType, setDestinationType] = useState("");
  const [travelPreferences, setTravelPreferences] = useState("");
  const [preferredDestination, setPreferredDestination] = useState("");
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // In a real app, this would be an API call to a backend service
    // For now, we'll generate a mock itinerary based on user inputs
    setTimeout(() => {
      const generatedItinerary = generateMockItinerary(
        budget, 
        luxuryLevel, 
        destinationType, 
        travelPreferences, 
        preferredDestination
      );
      setItinerary(generatedItinerary);
      setIsGenerating(false);
    }, 1500);
  };

  const generateMockItinerary = (
    budget: string,
    luxuryLevel: string,
    destinationType: string,
    preferences: string,
    preferredDestination: string
  ): Itinerary => {
    // This is a simplified mock function
    // In a real application, this would use a more sophisticated algorithm
    // or connect to an API to generate personalized recommendations
    
    let destination = preferredDestination || getDefaultDestination(destinationType);
    
    const accommodationType = getAccommodationType(luxuryLevel);
    
    return {
      destination,
      days: [
        {
          day: 1,
          mainActivity: getMainActivity(destinationType, 1),
          alternativeActivity: getAlternativeActivity(destinationType, 1),
          meals: getMealSuggestions(luxuryLevel, destinationType, 1),
          accommodation: `${accommodationType} in ${destination}`
        },
        {
          day: 2,
          mainActivity: getMainActivity(destinationType, 2),
          alternativeActivity: getAlternativeActivity(destinationType, 2),
          meals: getMealSuggestions(luxuryLevel, destinationType, 2),
          accommodation: `${accommodationType} in ${destination}`
        },
        {
          day: 3,
          mainActivity: getMainActivity(destinationType, 3),
          alternativeActivity: getAlternativeActivity(destinationType, 3),
          meals: getMealSuggestions(luxuryLevel, destinationType, 3),
          accommodation: `${accommodationType} in ${destination}`
        }
      ]
    };
  };
  
  // Helper functions to generate mock content
  const getDefaultDestination = (type: string): string => {
    const destinations = {
      beach: "Bali, Indonesia",
      mountain: "Swiss Alps, Switzerland",
      city: "Paris, France",
      adventure: "Queenstown, New Zealand",
      cultural: "Kyoto, Japan"
    };
    return destinations[type as keyof typeof destinations] || "Bali, Indonesia";
  };
  
  const getAccommodationType = (luxury: string): string => {
    switch(luxury) {
      case "budget": return "Hostel or budget hotel";
      case "mid-range": return "Comfortable mid-range hotel";
      case "luxury": return "Luxury resort or boutique hotel";
      default: return "Comfortable accommodation";
    }
  };
  
  const getMainActivity = (type: string, day: number): string => {
    const activities = {
      beach: [
        "Relax on pristine white sand beaches and swim in crystal clear waters",
        "Take a boat tour to explore hidden coves and snorkeling spots",
        "Try water sports like jet skiing or parasailing"
      ],
      mountain: [
        "Hike scenic trails with panoramic mountain views",
        "Visit an alpine village and sample local cheeses and chocolate",
        "Take a cable car to a mountain summit for breathtaking vistas"
      ],
      city: [
        "Visit iconic landmarks and museums in the morning",
        "Take a guided historical walking tour through charming neighborhoods",
        "Attend a local cultural performance or concert"
      ],
      adventure: [
        "Go white water rafting on rushing rapids",
        "Try bungee jumping or zip-lining through a forest canopy",
        "Join a guided mountain biking expedition"
      ],
      cultural: [
        "Visit ancient temples and historical sites",
        "Attend a traditional tea ceremony and cultural workshop",
        "Explore local markets and artisan workshops"
      ]
    };
    
    const typeActivities = activities[type as keyof typeof activities] || activities.beach;
    return typeActivities[day - 1] || typeActivities[0];
  };
  
  const getAlternativeActivity = (type: string, day: number): string => {
    const activities = {
      beach: [
        "Take a cooking class featuring local seafood dishes",
        "Visit nearby wildlife sanctuary or nature reserve",
        "Explore local markets and shops for souvenirs"
      ],
      mountain: [
        "Relax in natural hot springs with mountain views",
        "Take a photography tour of scenic landscapes",
        "Visit a local farm and sample farm-to-table cuisine"
      ],
      city: [
        "Take a food tour sampling local delicacies",
        "Visit art galleries and boutique shops",
        "Relax in a beautiful city park or garden"
      ],
      adventure: [
        "Take a helicopter tour over dramatic landscapes",
        "Try rock climbing or canyoning with experienced guides",
        "Join a wildlife spotting expedition"
      ],
      cultural: [
        "Take a local cooking class to learn traditional recipes",
        "Join a meditation or wellness session at a historic site",
        "Attend a local festival or celebration if available"
      ]
    };
    
    const typeActivities = activities[type as keyof typeof activities] || activities.beach;
    return typeActivities[day - 1] || typeActivities[0];
  };
  
  const getMealSuggestions = (luxury: string, type: string, day: number): string => {
    let breakfast, lunch, dinner;
    
    if (luxury === "budget") {
      breakfast = "Breakfast at a local café";
      lunch = "Light lunch at a casual eatery";
      dinner = "Dinner at a popular local restaurant";
    } else if (luxury === "luxury") {
      breakfast = "Gourmet breakfast at your accommodation";
      lunch = "Fine dining experience with local specialties";
      dinner = "Exclusive dinner at an award-winning restaurant";
    } else {
      breakfast = "Breakfast at your accommodation or nearby café";
      lunch = "Lunch at a well-rated local restaurant";
      dinner = "Dinner at a recommended specialty restaurant";
    }
    
    return `${breakfast}; ${lunch}; ${dinner}`;
  };

  return (
    <div className="min-h-screen bg-travel-darker text-white">
      <Navbar />
      <main className="container mx-auto py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Your Personalized Travel Planner
        </h1>
        
        <div className="max-w-4xl mx-auto">
          {!itinerary ? (
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-travel-secondary">Plan Your Perfect Trip</CardTitle>
                <CardDescription className="text-white/70">
                  Fill in your preferences below and we'll create a custom 3-day itinerary for you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm text-white/70 block">
                        Budget (USD)
                      </label>
                      <Input 
                        id="budget" 
                        type="text" 
                        placeholder="e.g., $1000, $2000-$3000"
                        className="bg-white/5 border-white/10"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="luxuryLevel" className="text-sm text-white/70 block">
                        Luxury Level
                      </label>
                      <Select value={luxuryLevel} onValueChange={setLuxuryLevel} required>
                        <SelectTrigger className="bg-white/5 border-white/10">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="budget">Budget</SelectItem>
                          <SelectItem value="mid-range">Mid-range</SelectItem>
                          <SelectItem value="luxury">Luxury</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="destinationType" className="text-sm text-white/70 block">
                        Destination Type
                      </label>
                      <Select value={destinationType} onValueChange={setDestinationType} required>
                        <SelectTrigger className="bg-white/5 border-white/10">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beach">Beach</SelectItem>
                          <SelectItem value="mountain">Mountain</SelectItem>
                          <SelectItem value="city">City</SelectItem>
                          <SelectItem value="adventure">Adventure</SelectItem>
                          <SelectItem value="cultural">Cultural</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="preferredDestination" className="text-sm text-white/70 block">
                        Preferred Destination (Optional)
                      </label>
                      <Input 
                        id="preferredDestination" 
                        placeholder="e.g., Japan, Paris, Bali"
                        className="bg-white/5 border-white/10"
                        value={preferredDestination}
                        onChange={(e) => setPreferredDestination(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="travelPreferences" className="text-sm text-white/70 block">
                      Travel Preferences
                    </label>
                    <Textarea 
                      id="travelPreferences" 
                      placeholder="Tell us what you enjoy (e.g., food, nature, relaxation, history, etc.)"
                      className="bg-white/5 border-white/10 min-h-[100px]"
                      value={travelPreferences}
                      onChange={(e) => setTravelPreferences(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-travel-primary hover:bg-travel-primary/90 text-white py-6"
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating Your Itinerary...
                      </>
                    ) : (
                      <>Generate My 3-Day Itinerary</>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Your 3-Day Adventure in {itinerary.destination}</h2>
                <p className="text-white/70">Based on your preferences, we've created a personalized itinerary just for you</p>
              </div>
              
              {itinerary.days.map((day) => (
                <Card key={day.day} className="bg-white/5 border-white/10 text-white overflow-hidden">
                  <CardHeader className="bg-travel-primary/20 border-b border-white/10">
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Day {day.day}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-travel-secondary flex items-center gap-2 mb-2">
                          <PlaneTakeoff className="h-4 w-4" /> Main Activity
                        </h4>
                        <p>{day.mainActivity}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium text-travel-secondary flex items-center gap-2 mb-2">
                          <Coffee className="h-4 w-4" /> Alternative Activity
                        </h4>
                        <p>{day.alternativeActivity}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium text-travel-secondary flex items-center gap-2 mb-2">
                          <Utensils className="h-4 w-4" /> Meal Suggestions
                        </h4>
                        <ul className="list-disc pl-5">
                          {day.meals.split(";").map((meal, index) => (
                            <li key={index} className="mb-1">{meal.trim()}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium text-travel-secondary flex items-center gap-2 mb-2">
                          <Hotel className="h-4 w-4" /> Accommodation
                        </h4>
                        <p>{day.accommodation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <div className="bg-travel-primary/20 p-4 rounded-lg border border-white/10">
                <p className="text-center font-medium">
                  Let me know if you'd like to swap any activity or try a different option, and I'll update your itinerary right away!
                </p>
              </div>
              
              <div className="flex justify-center">
                <Button 
                  onClick={() => setItinerary(null)}
                  className="bg-white/10 hover:bg-white/20 border border-white/10"
                >
                  Create Another Itinerary
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TravelPlanner;
