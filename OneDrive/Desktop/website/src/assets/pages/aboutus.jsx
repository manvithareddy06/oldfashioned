// src/pages/AboutUs.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../pictures/x.png"; // assuming the logo path

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20">
      
      {/* Left: Text content */}
      <div className="flex-1 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
        Xytrix
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          At <strong className="text-red-500">Xytrix</strong>,{" "}
          <em className="text-red-400">Where Creativity Meets Technology</em>, 
          we believe in pushing the boundaries of digital innovation. Our passionate 
          team of experts crafts seamless, engaging, and futuristic experiences 
          tailored to your unique needs. Whether you're looking to build a sleek 
          website, an intuitive app, or harness the power of AI, we're here to 
          bring your vision to life.
        </p>

        <button
          onClick={() => navigate("/booking")}
          className="px-8 py-3 text-lg font-bold text-white 
                     bg-gradient-to-r from-red-500 to-purple-600 
                     rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          aria-label="Book a Service"
        >
          🚀 Book a Service
        </button>
      </div>

      {/* Right: Logo (static, no glow) */}
      <div className="flex-shrink-0 mt-10 md:mt-0">
        <img
          src={logo}
          alt="Xytrix Logo"
          className="w-56 h-56 md:w-72 md:h-72 object-contain"
        />
      </div>
    </section>
  );
}
