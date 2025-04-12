
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const transformerSection = document.getElementById("transformer-section");
    if (transformerSection) {
      transformerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full py-4 border-b border-gray-200 bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-10">
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-xl font-bold">
            WarmText
          </span>
          <span className="text-gray-600">Transformer</span>
        </a>
        <div className="flex items-center gap-4">
          <a href="#about" className="text-sm text-gray-600 hover:text-primary transition-colors">
            About
          </a>
          <a href="#features" className="text-sm text-gray-600 hover:text-primary transition-colors">
            Features
          </a>
          <Button 
            variant="default" 
            size="sm" 
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
