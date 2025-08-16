// src/pages/Services.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Megaphone,
  Palette,
  Code,
  Smartphone,
  Bot,
  Brain,
  Share2,
} from "lucide-react";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: 3,
      title: "Web Development",
      description:
        "Modern, responsive, high-performance websites tailored to your business needs using cutting-edge technologies.",
      icon: <Code className="w-5 h-5 text-cyan-400" />,
    },
    {
      id: 1,
      title: "Marketing",
      description:
        "Grow your brand with targeted digital marketing strategies, SEO, and paid campaigns that deliver measurable results.",
      icon: <Megaphone className="w-5 h-5 text-cyan-400" />,
    },
    {
      id: 2,
      title: "Designing",
      description:
        "Creative UI/UX and graphic design solutions that blend aesthetics with functionality for web and mobile platforms.",
      icon: <Palette className="w-5 h-5 text-cyan-400" />,
    },
    {
      id: 4,
      title: "App Development",
      description:
        "Cross-platform mobile applications with seamless user experiences and robust performance for Android & iOS.",
      icon: <Smartphone className="w-5 h-5 text-cyan-400" />,
    },
    {
      id: 5,
      title: "AI Agents",
      description:
        "Intelligent AI agents that automate workflows, decision-making, and customer interactions to boost efficiency.",
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
    },
    {
      id: 6,
      title: "AI Bots",
      description:
        "Conversational AI bots designed for customer support, lead generation, and personalized engagement.",
      icon: <Bot className="w-5 h-5 text-cyan-400" />,
    },
    {
      id: 7,
      title: "Social Media Management",
      description:
        "End-to-end social media management services to grow your online presence and connect with your audience.",
      icon: <Share2 className="w-5 h-5 text-cyan-400" />,
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-black text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            From design to development, AI to marketing, we provide complete
            digital solutions to elevate your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cyan-500/10 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Book Service Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={() => navigate("/booking")}
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white text-sm sm:text-base font-semibold rounded-full shadow-md hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105"
          >
            Book a Service
          </button>
        </div>
      </div>
    </section>
  );
}
