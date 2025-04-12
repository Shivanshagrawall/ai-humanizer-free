
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden pt-16">
      {/* Background gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full filter blur-3xl opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadein [animation-delay:100ms]">
            Make AI Text Sound{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Human Again
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fadein [animation-delay:200ms]">
          Use our AI Humanizer Free tool to instantly convert robotic AI content into human-like, engaging text without changing the meaning. Powered by advanced AI.
          </p>
          <div className="flex justify-center gap-4 animate-fadein [animation-delay:300ms]">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all"
              onClick={() => document.getElementById('transformer-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Try it now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn more
            </Button>
          </div>

          {/* Scroll down indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full h-10 w-10 flex items-center justify-center"
            >
              <ArrowDownIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
