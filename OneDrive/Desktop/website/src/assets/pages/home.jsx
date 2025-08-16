// src/Home.jsx
import React from "react";
import { ArrowUpRight } from "lucide-react";
import handImage from "../pictures/x.png"; // ✅ Import your image

export default function Home() {
  return (
    <section
      id="home" // ✅ Added ID for smooth scrolling
      className="relative bg-black text-white min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-24 md:pt-32">
        {/* ✅ Desktop & Tablet View */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Where <span className="text-red-500">Creativity</span> Meets{" "}
              <span className="text-cyan-400">Technology</span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 max-w-lg leading-relaxed">
              We fuse creativity with technology to craft future-ready solutions.
              From branding, marketing, and design to web & app development, we
              build experiences that inspire. Our expertise in AI agents and
              chatbots empowers businesses with smart automation. We manage
              social media growth through strategy, content, and innovation.
              Driven by passion and vision, we help brands grow, engage, and
              lead in the digital era.
            </p>

            {/* Stats */}
            <div className="flex gap-8 pt-6">
              <div>
                <p className="text-2xl font-bold">100+</p>
                <p className="text-gray-400 text-sm">Projects Delivered</p>
              </div>
            </div>
          </div>

          {/* Right Section (Image/3D Hand Placeholder) */}
          <div className="flex justify-center relative">
            <img
              src={handImage}
              alt="AI Hand"
              className="w-[350px] md:w-[450px] lg:w-[500px] object-contain"
            />

            {/* 🔴 Floating bubbles (red theme) */}
            <div className="absolute top-20 right-12 w-12 h-12 bg-red-500 rounded-full blur-md opacity-70 animate-bounce"></div>
            <div className="absolute top-40 right-32 w-6 h-6 bg-red-400 rounded-full blur-sm opacity-60 animate-pulse"></div>
            <div className="absolute bottom-28 left-12 w-8 h-8 bg-red-600 rounded-full blur-sm opacity-50 animate-ping"></div>
          </div>
        </div>

        {/* ✅ Mobile View */}
        <div className="block md:hidden space-y-6 py-12 text-center">
          {/* Heading */}
          <h1 className="text-2xl sm:text-2xl font-extrabold leading-snug px-2">
            Where <span className="text-red-500">Creativity</span> Meets{" "}
            <span className="text-cyan-400">Technology</span>
          </h1>

          {/* Image */}
          <div className="flex justify-center relative">
            <img
              src={handImage}
              alt="AI Hand"
              className="w-[200px] sm:w-[240px] object-contain"
            />

            {/* 🔴 Floating bubbles (red theme) */}
            <div className="absolute top-4 right-10 w-6 h-6 bg-red-500 rounded-full blur-md opacity-70 animate-bounce"></div>
            <div className="absolute top-20 left-8 w-4 h-4 bg-red-400 rounded-full blur-sm opacity-70 animate-pulse"></div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-sm px-4 leading-relaxed">
            We fuse creativity with technology to craft future-ready solutions.
            From branding, marketing, and design to web & app development, we
            build experiences that inspire. Our expertise in AI agents and
            chatbots empowers businesses with smart automation. Driven by vision
            and passion, we help brands grow, engage, and lead.
          </p>

          {/* Stats */}
          <div className="pt-4">
            <p className="text-lg sm:text-lg font-bold">100+</p>
            <p className="text-gray-400 text-xs">Projects Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
