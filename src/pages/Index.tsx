
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TextTransformer from "@/components/TextTransformer";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        
        <div className="relative z-10">
          {/* Wave shape divider */}
          <div className="absolute -top-16 left-0 right-0 h-16 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-full h-auto"
              preserveAspectRatio="none"
            >
              <path
                fill="#f9fafb"
                fillOpacity="1"
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,101.3C960,107,1056,117,1152,117.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          
          <section id="transformer-section" className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Humanize Your AI Text
                  </span>
                </h2>
                <p className="text-gray-600">
                Paste your AI-generated content below and use our AI Humanizer Free to instantly make it sound human and natural.
                </p>
              </div>
              
              <div className="flex justify-center">
                <TextTransformer />
              </div>
            </div>
          </section>
        </div>
        
        <FeaturesSection />
        
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  About WarmText
                </span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                WarmText is a 100% Free AI Humanizer tool built to solve a growing challenge: turning AI-generated content into human-sounding writing.
                </p>
                <br />
                <p>
                With the rise of AI content generators, our free AI Humanizer helps bridge the gap between machine output and natural human expression.
                </p>
                <br />
                <p>
                Powered by advanced AI technology, WarmText detects robotic phrasing in AI content and humanizes it instantly—without changing the original intent.
                </p>
                <br />
                <p className="font-medium">
                Whether you're a creator, marketer, blogger, or student, WarmText’s AI Humanizer Free lets you enjoy the speed of AI with the clarity of human tone.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
