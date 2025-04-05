
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-travel-darker px-4">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold mb-6 text-white">404</h1>
        <p className="text-xl text-white/80 mb-8">
          This destination doesn't seem to exist on our map.
        </p>
        <div className="w-24 h-24 rounded-full bg-white/5 mx-auto mb-8 flex items-center justify-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6c5ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.09 8.99996C9.32506 8.33163 9.78915 7.76807 10.4 7.40909C11.0108 7.05012 11.7289 6.91891 12.4272 7.03867C13.1255 7.15844 13.7588 7.52148 14.2151 8.06349C14.6713 8.60549 14.9211 9.29148 14.92 9.99996C14.92 12 11.92 13 11.92 13" stroke="#6c5ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 17H12.01" stroke="#6c5ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <Button asChild className="bg-travel-primary hover:bg-travel-primary/90 text-white">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
