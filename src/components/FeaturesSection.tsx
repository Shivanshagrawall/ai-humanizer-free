
import React from "react";
import FeatureCard from "./FeatureCard";
import { RefreshCwIcon, ZapIcon, ScanTextIcon, PencilLineIcon, ShieldCheckIcon, GaugeIcon } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: ScanTextIcon,
      title: "Content Preservation",
      description: "Preserves the original meaning and intent while making AI content sound human and readable."
    },
    {
      icon: PencilLineIcon,
      title: "Natural Language",
      description: "Humanizes robotic AI text into conversational and natural language."
    },
    {
      icon: ZapIcon,
      title: "Lightning Fast",
      description: "Powered by cutting-edge AI for instant, real-time humanization of your text."
    },
    {
      icon: RefreshCwIcon,
      title: "Unlimited Transformations",
      description: "Use the AI Humanizer Free tool with no limits – up to 1000 words per session and no signup required."
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
          Our AI Humanizer Free tool uses powerful AI to convert robotic content into natural, flowing, human-like text.
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
