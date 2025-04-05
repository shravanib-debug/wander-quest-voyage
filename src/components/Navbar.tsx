
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-travel-darker/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#6c5ce7" strokeWidth="2" />
            <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-xl font-bold tracking-tight">WanderQuest</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm text-white/90 hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/destinations" className="text-sm text-white/70 hover:text-white transition-colors">
            Destinations
          </Link>
          <Link to="/packages" className="text-sm text-white/70 hover:text-white transition-colors">
            Packages
          </Link>
          <Link to="/about" className="text-sm text-white/70 hover:text-white transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm text-white/70 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-sm font-medium text-white/80">
            Log in
          </Button>
          <Button className="bg-travel-primary hover:bg-travel-primary/90 text-white rounded-md">
            Sign up
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-travel-darker p-4 z-40">
          <nav className="flex flex-col space-y-6 py-8">
            <Link to="/" className="text-lg font-medium text-white/90 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/destinations" className="text-lg font-medium text-white/70 hover:text-white transition-colors">
              Destinations
            </Link>
            <Link to="/packages" className="text-lg font-medium text-white/70 hover:text-white transition-colors">
              Packages
            </Link>
            <Link to="/about" className="text-lg font-medium text-white/70 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-lg font-medium text-white/70 hover:text-white transition-colors">
              Contact
            </Link>
            <div className="pt-6 flex flex-col space-y-4">
              <Button variant="outline" className="w-full">
                Log in
              </Button>
              <Button className="w-full bg-travel-primary hover:bg-travel-primary/90">
                Sign up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
