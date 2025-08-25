// src/Pages/Orientation.jsx
import React, { useState } from "react";
import { CalendarDays, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/orientation/img1.jpg";
import img2 from "../assets/orientation/img2.jpg";
import img3 from "../assets/orientation/img3.jpg";
import img4 from "../assets/orientation/img4.jpg";
import img5 from "../assets/orientation/img5.jpg";
import img6 from "../assets/orientation/img6.jpg";

export default function Orientation() {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-10 bg-black text-white flex flex-col items-center">
      {/* Header */}
      <div className="mb-12 max-w-3xl w-full animate-fadeIn">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-gradient text-left sm:text-center">
          Orientation Day – IEEE GNI
        </h1>

        {/* Text - Always Left */}
        <p className="text-gray-300 mt-6 text-base sm:text-lg leading-relaxed sm:leading-loose text-left">
          The IEEE GNI Orientation Day is a welcoming event for all new students
          interested in technology, innovation, and professional growth. It's
          designed to introduce the vision, mission, and opportunities offered
          by the IEEE Student Branch at GNI. Attendees get to meet the team,
          learn about upcoming events, explore various technical domains, and
          understand how IEEE can help them grow both academically and
          professionally. Whether you're into coding, electronics, AI, design,
          or leadership – Orientation Day is your first step into the world of
          IEEE at GNI!
        </p>

        <p className="mt-4 text-sm text-pink-400 font-semibold uppercase tracking-wider text-left">
          Discover. Connect. Grow.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-5xl h-60 sm:h-72 md:h-[26rem] overflow-hidden rounded-3xl shadow-lg mb-12 animate-fadeInUp">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Orientation ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out transform hover:scale-[1.02] animate-imageFade"
        />

        {/* Arrows */}
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-1.5 sm:p-2 rounded-full"
        >
          <ChevronLeft size={20} className="sm:size-6" />
        </button>
        <button
          onClick={goNext}
          className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-1.5 sm:p-2 rounded-full"
        >
          <ChevronRight size={20} className="sm:size-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 sm:bottom-4 w-full flex justify-center gap-2">
          {images.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${
                idx === currentIndex ? "bg-pink-500 scale-110" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Event Info */}
      <div className="space-y-4 text-gray-300 w-full animate-fadeInUp">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-center items-start sm:items-center gap-2 sm:gap-6 text-left sm:text-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <CalendarDays size={20} className="text-pink-500" />
            <span className="text-sm sm:text-base font-medium">
              26-JULY-2025
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <MapPin size={20} className="text-purple-400" />
            <span className="text-sm sm:text-base font-medium">
              GNI Campus, Hyderabad
            </span>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 5s ease infinite;
        }

        @keyframes imageFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-imageFade {
          animation: imageFade 0.8s ease-in;
        }
      `}</style>
    </div>
  );
}
