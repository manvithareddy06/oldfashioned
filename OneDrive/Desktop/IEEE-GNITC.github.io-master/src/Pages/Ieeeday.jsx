// src/Pages/Ieeeday.jsx
import React, { useState } from "react";
import { CalendarDays, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import i1 from "../assets/IEEE DAY/1.jpg";
import i2 from "../assets/IEEE DAY/2.jpg";
import i3 from "../assets/IEEE DAY/3.jpg";
import i4 from "../assets/IEEE DAY/4.jpg";
import i5 from "../assets/IEEE DAY/5.jpg";
import i6 from "../assets/IEEE DAY/6.jpg";
import i7 from "../assets/IEEE DAY/7.jpg";
// ✅ Remove i8 or add import if available
// import i8 from "../assets/IEEE DAY/8.jpg";

export default function IEEEDay() {
  const images = [i6, i7, i5, i1, i2, i3, i4]; // ✅ fixed array
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
          <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-500 animate-gradient drop-shadow-lg">
            IEEE Day Celebrations 2025
          </h1>
          <p className="text-gray-300 mt-4 text-base leading-relaxed text-left">
            The IEEE Student Branch, GNI, successfully organized IEEE Day
            Celebrations 2025 on 11th October 2025, from 10:00 AM to 1:00 PM at
            Shaheed Bhagat Singh Auditorium, with the enthusiastic participation
            of students and faculty members.
          </p>
          <p className="mt-2 text-sm text-cyan-400 font-semibold uppercase tracking-wider text-left">
            Celebrate Technology for Humanity.
          </p>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-500 animate-gradient drop-shadow-lg">
            IEEE Day Celebrations – 2025
          </h1>
          <p className="text-gray-300 mt-6 text-base leading-relaxed text-left">
            The IEEE Student Branch, GNI, successfully organized IEEE Day
            Celebrations 2025 on 11th October 2025, from 10:00 AM to 1:00 PM at
            Shaheed Bhagat Singh Auditorium, with the enthusiastic participation
            of students and faculty members.
          </p>
          <p className="mt-4 text-sm text-cyan-400 font-semibold uppercase tracking-wider text-left">
            Celebrate Technology for Humanity.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-6xl h-72 sm:h-96 md:h-[28rem] overflow-hidden rounded-3xl shadow-2xl mb-12 animate-fadeInUp flex justify-center items-center bg-black">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`IEEE Day ${currentIndex + 1}`}
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
                idx === currentIndex ? "bg-cyan-400 scale-110" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Event Info */}
      <div className="space-y-6 text-gray-300 w-full max-w-3xl text-left animate-fadeInUp">
        <div className="flex flex-col sm:flex-row justify-start items-start gap-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <CalendarDays size={22} className="text-cyan-400" />
            <span className="text-sm sm:text-base md:text-sm font-medium">
              11-October-2025 | 10:00 AM – 1:00 PM
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <MapPin size={22} className="text-indigo-400" />
            <span className="text-sm sm:text-base md:text-sm font-medium">
              Shaheed Bhagat Singh Auditorium, GNI
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500">
          <h2 className="text-2xl md:text-2xl font-bold text-cyan-400 mb-4 text-left">
            Celebration Highlights
          </h2>
          <div className="text-gray-200 font-medium md:text-base space-y-4 leading-relaxed">
            {/* your text unchanged */}
            <p>
              The event commenced with the soulful rendition of <b>Vande Mataram</b>, setting a patriotic and vibrant tone for the celebration.
            </p>
            <p>
              Inspiring addresses were delivered by our dignitaries who emphasized the importance of IEEE in fostering innovation, leadership, and collaboration among students:
              <br />
              <b>Dr. Geeta Tripathi</b> (IEEE Branch Mentor and HoD CSE-1, GNITC),
              <b> Dr. Ravindra Changala</b> (IEEE CIS Advisor and HoD CSE-2, GNITC),
              <b> Dr. Rishi Sayal</b> (IEEE Branch Counsellor and Associate Director, GNITC),
              and <b>Dr. S. Sreenatha Reddy</b> (Director, GNITC).
            </p>
            <p>
              A key highlight of the day was the unveiling of foam boards representing the IEEE Student Branch and its various societies, symbolizing unity and creativity:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>IEEE STUDENT BRANCH GNIT</li>
              <li>IEEE STUDENT BRANCH GNITC</li>
              <li>IEEE COMPUTER SOCIETY, GNITC</li>
              <li>IEEE COMMUNICATION SOCIETY, GNITC</li>
              <li>IEEE CIRCUITS AND SYSTEMS SOCIETY, GNITC</li>
              <li>IEEE SYSTEMS, MAN AND CYBERNETICS SOCIETY, GNITC</li>
              <li>IEEE POWER AND ENERGY SOCIETY, GNITC</li>
              <li>IEEE COMPUTER INTELLIGENCE SOCIETY, GNITC</li>
            </ul>
            <p>
            
            </p>
            <p>
              The celebration included the presentation of ID cards to all office bearers and distribution of badges to all IEEE student members, marking their active association with the branch.
            </p>
            <p>
              The event concluded on an enthusiastic note, celebrating the spirit of IEEE and marking yet another milestone in the journey of the IEEE Student Branch, GNI.
            </p>
            <p className="text-cyan-400 font-semibold mt-4">
              A heartfelt thanks to all dignitaries, office bearers, and IEEE members for making IEEE Day Celebrations 2025 a grand success.
            </p>
            <p className="text-gray-400 italic">— IEEE STUDENT BRANCH, GNI</p>
          </div>
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
