import React from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/events");
  };

  const handleScrollDown = () => {
    const target = document.querySelector("#about");
    if (target) {
      const yOffset = -70; // adjust for navbar height
      const yPosition =
        target.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden font-bold bg-transparent"
    >
      {/* Main Content */}
      <div className="z-10 flex flex-col items-center justify-center text-center px-6 space-y-6 animate-fadeInUp">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-2xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-600 animate-blueGlow">
            IEEE
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-red-600 animate-redGlow">
            GNI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed font-medium">
          Driving{" "}
          <span className="text-white font-semibold">innovation</span>,{" "}
          <span className="text-white font-semibold">research</span>, and{" "}
          <span className="text-white font-semibold">future tech</span> at{" "}
          <span className="text-white font-semibold">
            Guru Nanak Institutions
          </span>
          .
        </p>

        {/* CTA Button */}
        <button
          onClick={handleExploreClick}
          className="mt-4 px-8 py-3 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 backdrop-blur-lg border border-white/20 text-white font-semibold rounded-full shadow-lg hover:scale-110 transition-all duration-500 hover:border-cyan-400 hover:shadow-cyan-400/50 hover:from-cyan-500/40 hover:to-purple-500/40"
        >
          🚀 Discover What's Happening
        </button>

        {/* Scroll Indicator */}
        <div
          onClick={handleScrollDown}
          className="mt-10 animate-bounce cursor-pointer hover:scale-125 transition-transform"
        >
          <ChevronDown
            size={40}
            className="text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]"
          />
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp { animation: fadeInUp 1.2s ease-out both; }

          @keyframes blueGlow {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          .animate-blueGlow {
            background-size: 200% auto;
            animation: blueGlow 4s linear infinite;
          }

          @keyframes redGlow {
            0% { background-position: 200% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-redGlow {
            background-size: 200% auto;
            animation: redGlow 4s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
