// src/pages/AboutUs.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../pictures/x.png"; // update path if needed

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-800/20 rounded-full blur-3xl animate-ping"></div>

      {/* Left: Glass Card for Text content */}
      <div className="flex-1 max-w-2xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-10 shadow-lg shadow-blue-500/30 transform hover:scale-[1.02] transition duration-500">
        
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
          Xytrix
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed animate-fadeIn">
          At <strong className="text-blue-500">Xytrix</strong>,{" "}
          <em className="text-blue-400">Where Creativity Meets Technology</em>, 
          we push the boundaries of digital innovation. Our passionate 
          team of experts crafts seamless, engaging, and futuristic experiences 
          tailored to your unique needs. Whether you want a sleek 
          website, an intuitive app, or to harness the power of AI — 
          <span className="text-blue-400 font-semibold"> we bring your vision to life.</span>
        </p>

        <button
          onClick={() => navigate("/booking")}
          className="px-8 py-3 text-lg font-bold text-white 
                     bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-800
                     rounded-full shadow-lg shadow-blue-500/40
                     hover:scale-110 hover:shadow-blue-400/60
                     transition-transform duration-300 animate-bounce"
          aria-label="Book a Service"
        >
          🚀 Book a Service
        </button>
      </div>

      {/* Right: Logo with Futuristic Glow Aura */}
      <div className="flex-shrink-0 mt-10 md:mt-0 relative group">
        {/* Rotating Aura */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-700 opacity-40 blur-3xl animate-spin-slow"></div>
        
        {/* Logo */}
        <img
          src={logo}
          alt="Xytrix Logo"
          className="w-56 h-56 md:w-80 md:h-80 object-contain relative z-10 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
