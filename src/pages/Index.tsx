
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SearchForm from "@/components/SearchForm";
import TopDestinations from "@/components/TopDestinations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-travel-darker text-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SearchForm />
        <TopDestinations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
