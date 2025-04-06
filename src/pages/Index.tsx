
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SearchForm from "@/components/SearchForm";
import TopDestinations from "@/components/TopDestinations";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-travel-darker text-white">
      <Navbar />
      <main>
        <HeroSection />
        <div className="container mx-auto py-8 px-6 text-center">
          <Link to="/planner">
            <Button className="bg-travel-secondary hover:bg-travel-secondary/80 text-white">
              Try Our AI Travel Planner
            </Button>
          </Link>
        </div>
        <FeaturesSection />
        <SearchForm />
        <TopDestinations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
