// src/Pages/EngineersDay.jsx
import React, { useState } from "react";
import { CalendarDays, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import e1 from "../assets/Engineer`s day/e1.jpg";
import e2 from "../assets/Engineer`s day/e2.jpg";
import e3 from "../assets/Engineer`s day/e3.jpg";
import e4 from "../assets/Engineer`s day/e4.jpg";
import e5 from "../assets/Engineer`s day/e5.jpg";
import e6 from "../assets/Engineer`s day/e6.jpg";
import e7 from "../assets/Engineer`s day/e7.jpg";
import e8 from "../assets/Engineer`s day/e8.jpg";

export default function EngineersDay() {
  const images = [e1, e2, e3, e4, e5, e6, e7, e8];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  const goNext = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-10 bg-black text-white flex flex-col items-center">
      {/* Header */}
      <div className="mb-12 max-w-3xl w-full animate-fadeIn text-left">
        {/* Mobile Header */}
        <div className="md:hidden">
          <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient drop-shadow-lg">
            Engineer’s Day – IEEE GNI
          </h1>
          <p className="text-gray-300 mt-4 text-base leading-relaxed text-left">
            Engineer’s Day at IEEE GNI is a tribute to innovation, creativity, and
            problem-solving. Celebrate the contributions of engineers to society
            and get inspired by exciting workshops, technical challenges, and
            showcases across multiple domains.
          </p>
          <p className="mt-2 text-sm text-yellow-400 font-semibold uppercase tracking-wider text-left">
            Innovate. Create. Inspire.
          </p>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient drop-shadow-lg">
            Engineer’s Day – IEEE GNI
          </h1>
          <p className="text-gray-300 mt-6 text-base leading-relaxed text-left">
            Engineer’s Day at IEEE GNI is a tribute to innovation, creativity, and
            problem-solving. Celebrate the contributions of engineers to society
            and get inspired by exciting workshops, technical challenges, and
            showcases across multiple domains.
          </p>
          <p className="mt-4 text-sm text-yellow-400 font-semibold uppercase tracking-wider text-left">
            Innovate. Create. Inspire.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-6xl h-72 sm:h-96 md:h-[28rem] overflow-hidden rounded-3xl shadow-2xl mb-12 animate-fadeInUp flex justify-center items-center bg-black">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Engineers Day ${currentIndex + 1}`}
          className="max-h-full max-w-full object-contain transition-transform duration-1000 ease-in-out transform hover:scale-105"
        />

        {/* Arrows */}
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-3 sm:left-5 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 sm:p-3 rounded-full shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goNext}
          className="absolute top-1/2 right-3 sm:right-5 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 sm:p-3 rounded-full shadow-lg"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {images.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full cursor-pointer transition-all duration-300 ${
                idx === currentIndex ? "bg-yellow-400 scale-110" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Event Info */}
      <div className="space-y-6 text-gray-300 w-full max-w-3xl text-left animate-fadeInUp">
        <div className="flex flex-col sm:flex-row justify-start items-start gap-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <CalendarDays size={22} className="text-yellow-400" />
            <span className="text-sm sm:text-base md:text-sm font-medium">
              19-September-2025
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <MapPin size={22} className="text-orange-400" />
            <span className="text-sm sm:text-base md:text-sm font-medium">
              Guru Gobind Singh Auditorium, GNI
            </span>
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500">
          <h2 className="text-2xl md:text-2xl font-bold text-yellow-400 mb-4 text-left">
            Event Highlights
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200 font-medium md:text-base max-w-2xl mx-auto">
            <li>Inspiring talks by industry experts and IEEE leaders</li>
            <li>Fun technical competitions and problem-solving challenges</li>
            <li>Opportunities to showcase talent across multiple domains</li>
            <li>Networking with peers and seniors for future projects</li>
          </ul>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }

        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }

        @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .animate-gradient { background-size: 200% 200%; animation: gradientShift 5s ease infinite; }
      `}</style>
    </div>
  );
}
