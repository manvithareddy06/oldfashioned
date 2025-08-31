// src/Home.jsx
import React from "react";
import handImage from "../pictures/x.png";

export default function Home() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-24 md:pt-32">
        {/* ✅ Desktop & Tablet View */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Where{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Creativity
              </span>{" "}
              Meets{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            <p className="text-gray-300 max-w-lg leading-relaxed">
              We fuse creativity with technology to craft future-ready solutions.
              From branding, marketing, and design to web & app development, we
              build experiences that inspire. Our expertise in AI agents and
              chatbots empowers businesses with smart automation. We manage
              social media growth through strategy, content, and innovation.
            </p>
            <div className="flex gap-12 pt-6">
              <div className="text-center">
                <p className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  100+
                </p>
                <p className="text-gray-400 text-sm">Projects Delivered</p>
              </div>
            </div>
          </div>

          {/* Right Section (Image with glow effect) */}
          <div className="flex justify-center relative">
            <div className="relative">
              <img
                src={handImage}
                alt="AI Hand"
                className="w-[350px] md:w-[450px] lg:w-[500px] object-contain relative z-10 drop-shadow-[0_0_20px_rgba(56,189,248,0.7)]"
              />
              {/* Soft glow background (cyan for desktop) */}
              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* ✅ Mobile View */}
        <div className="block md:hidden space-y-8 py-12 text-left">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-snug px-4 sm:px-0">
            Where{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Creativity
            </span>{" "}
            Meets{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Technology
            </span>
          </h1>

          {/* Image */}
          <div className="flex justify-center relative">
            <div className="relative">
              <img
                src={handImage}
                alt="AI Hand"
                className="w-[200px] sm:w-[240px] object-contain relative z-10 drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]"
              />
              {/* Removed red/purple glow */}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base px-4 sm:px-0 leading-relaxed max-w-md">
            We fuse creativity with technology to craft future-ready solutions.
            From branding, marketing, and design to web & app development, we
            build experiences that inspire. Our expertise in AI agents and
            chatbots empowers businesses with smart automation.
          </p>

          {/* Stats */}
          <div className="pt-4 flex px-4 sm:px-0">
            <div className="text-center">
              <p className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                100+
              </p>
              <p className="text-gray-400 text-sm">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
