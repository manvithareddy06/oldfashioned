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
      icon: <Code className="w-6 h-6 text-cyan-400" />,
    },
    {
      id: 1,
      title: "Marketing",
      description:
        "Grow your brand with targeted digital marketing strategies, SEO, and paid campaigns that deliver measurable results.",
      icon: <Megaphone className="w-6 h-6 text-cyan-400" />,
    },
    {
      id: 2,
      title: "Designing",
      description:
        "Creative UI/UX and graphic design solutions that blend aesthetics with functionality for web and mobile platforms.",
      icon: <Palette className="w-6 h-6 text-cyan-400" />,
    },
    {
      id: 4,
      title: "App Development",
      description:
        "Cross-platform mobile applications with seamless user experiences and robust performance for Android & iOS.",
      icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
    },
    {
      id: 5,
      title: "AI Agents",
      description:
        "Intelligent AI agents that automate workflows, decision-making, and customer interactions to boost efficiency.",
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
    },
    {
      id: 6,
      title: "AI Bots",
      description:
        "Conversational AI bots designed for customer support, lead generation, and personalized engagement.",
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
    },
    {
      id: 7,
      title: "Social Media Management",
      description:
        "End-to-end social media management services to grow your online presence and connect with your audience.",
      icon: <Share2 className="w-6 h-6 text-cyan-400" />,
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-black text-white py-20 px-6 sm:px-10 lg:px-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-blue-800/20 rounded-full blur-3xl animate-ping"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-md">
            Our Services
          </h2>
          <p className="mt-4 text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From design to development, AI to marketing — we deliver complete,
            professional, and futuristic digital solutions that help your brand
            thrive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 
                         rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/30 
                         hover:-translate-y-2 transition-all duration-500"
            >
              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/50 transition-all duration-500"></div>

              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-cyan-500/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Book Service Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/booking")}
            className="px-10 py-4 text-base font-bold text-white 
                       bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700
                       rounded-full shadow-lg shadow-cyan-500/30
                       hover:scale-110 hover:shadow-cyan-400/50
                       transition-all duration-500"
          >
            🚀 Book a Service
          </button>
        </div>
      </div>
    </section>
  );
}
