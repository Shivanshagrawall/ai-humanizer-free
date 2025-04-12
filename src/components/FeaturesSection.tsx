
import React from "react";
import FeatureCard from "./FeatureCard";
import { RefreshCwIcon, ZapIcon, ScanTextIcon, PencilLineIcon, ShieldCheckIcon, GaugeIcon } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: ScanTextIcon,
      title: "Content Preservation",
      description: "Maintains the original meaning and structure of your text while making it sound more human."
    },
    {
      icon: PencilLineIcon,
      title: "Natural Language",
      description: "Transforms robotic AI text into warm, engaging, and natural-sounding content."
    },
    {
      icon: ZapIcon,
      title: "Lightning Fast",
      description: "Powered by Gemini 2.0 Flash API for near-instantaneous text transformations."
    },
    {
      icon: RefreshCwIcon,
      title: "Unlimited Transformations",
      description: "Transform as many texts as you need, with support for up to 1000 words per transformation."
    },
    {
      icon: ShieldCheckIcon,
      title: "Privacy First",
      description: "Your texts are never stored or used to train AI models. Your content remains yours."
    },
    {
      icon: GaugeIcon,
      title: "Easy Integration",
      description: "Simple API available for developers to integrate into their own applications."
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-gray-600">
            Our text transformer offers advanced capabilities to make AI-generated content sound more natural and engaging
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="animate-fadein" style={{ animationDelay: `${index * 100}ms` }}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
