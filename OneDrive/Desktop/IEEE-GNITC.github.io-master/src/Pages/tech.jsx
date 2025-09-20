// src/Pages/events/main/TechIgnition.jsx
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import img1 from "../assets/techignition/1.jpg";
import img2 from "../assets/techignition/2.jpg";
import img3 from "../assets/techignition/3.jpg";
import img4 from "../assets/techignition/4.jpg";
import img5 from "../assets/techignition/5.jpg";
import img8 from "../assets/techignition/ieee3.jpg";
import img9 from "../assets/techignition/ieee4.jpg";
import img10 from "../assets/techignition/ieee5.jpg";
import img12 from "../assets/techignition/ti2.jpg";
import img14 from "../assets/techignition/ti4.jpg";
import img16 from "../assets/techignition/ti6.jpg";
import img18 from "../assets/techignition/ti8.jpg";
import img19 from "../assets/techignition/tv-1.jpg";
import img20 from "../assets/techignition/tv-2.jpg";
import img21 from "../assets/techignition/tv-3.jpg";
import img22 from "../assets/techignition/tv-4.jpg";

const images1 = [img1, img2, img3, img4, img5];
const images2 = [
  img8,
  img9,
  img10,
  img12,
  img14,
  img16,
  img18,
  img19,
  img20,
  img21,
  img22,
];

export default function TechIgnition() {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex1((prev) => (prev === images1.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex2((prev) => (prev === images2.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide1 = () =>
    setCurrentIndex1((prev) => (prev === 0 ? images1.length - 1 : prev - 1));
  const nextSlide1 = () =>
    setCurrentIndex1((prev) => (prev === images1.length - 1 ? 0 : prev + 1));

  const prevSlide2 = () =>
    setCurrentIndex2((prev) => (prev === 0 ? images2.length - 1 : prev - 1));
  const nextSlide2 = () =>
    setCurrentIndex2((prev) => (prev === images2.length - 1 ? 0 : prev + 1));

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.div
        className="pt-28 pb-16 px-6 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent animate-blueRedGlow drop-shadow-2xl">
        ⚡TECH-IGNITION
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A flagship technical fest by{" "}
          <span className="text-cyan-400 font-semibold">IEEE GNI</span> — where{" "}
          <span className="text-pink-400 font-semibold">creativity</span>,{" "}
          <span className="text-purple-400 font-semibold">innovation</span>, and{" "}
          <span className="text-cyan-400 font-semibold">tech brilliance</span>{" "}
          ignite the future.
        </p>
      </motion.div>

      {/* Tech-Ignition 2.0 Section */}
      <section className="max-w-6xl mx-auto px-6 space-y-10">
        <motion.h2
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          TECH-IGNITION 2.0
        </motion.h2>

        <motion.p
          className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Tech-Ignition 2.0 is{" "}
          <span className="text-cyan-400 font-semibold">bigger</span>,{" "}
          <span className="text-pink-400 font-semibold">bolder</span>, and{" "}
          <span className="text-purple-400 font-semibold">brighter</span>! From{" "}
          <span className="text-cyan-400">UI/UX Design</span> to{" "}
          <span className="text-pink-400">E-Sports</span>, brace yourself for an
          electrifying celebration of technology and talent.
        </motion.p>

        {/* Event Info Card */}
                {/* Event Info Card */}
        <motion.div
          className="bg-black/50 backdrop-blur-lg border border-cyan-400/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_25px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-all max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">
            📌 Event Details
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center text-gray-300">
            <div>
              📍 Venue: <span className="text-white">Guru Nanak Institutions</span>
            </div>
            <div>
              📅 Date: <span className="text-white">23-AUG-2025</span>
            </div>
            <div>
              🎯 Organized By:{" "}
              <span className="text-white">IEEE GNI Student Branch</span>
            </div>
          </div>
        </motion.div>

      </section>

      {/* Carousel 2 for 2.0 */}
      <section className="mt-16 px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-10 text-center">
          Check Out ! Tech-Ignition 2.0
        </h2>

        <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-lg border border-pink-400/30 backdrop-blur-lg">
          <img
            src={images2[currentIndex2]}
            alt={`Tech Ignition 2.0 - ${currentIndex2 + 1}`}
            className="w-full h-[220px] sm:h-[350px] md:h-[480px] object-cover transition-all duration-500"
          />

          {/* Arrows */}
          <button
            onClick={prevSlide2}
            className="absolute top-1/2 -translate-y-1/2 left-4 p-2 sm:p-3 rounded-full bg-black/60 border border-pink-400/50 hover:scale-110 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide2}
            className="absolute top-1/2 -translate-y-1/2 right-4 p-2 sm:p-3 rounded-full bg-black/60 border border-pink-400/50 hover:scale-110 transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Progress Dots */}
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images2.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex2 === idx ? "w-6 bg-pink-400" : "w-2 bg-gray-500/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tech-Ignition 1.0 Section */}
      <section className="mt-20 px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-10 text-center">
          Highlights From Tech-Ignition 1.0
        </h2>

        <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-lg border border-cyan-400/30 backdrop-blur-lg">
          <img
            src={images1[currentIndex1]}
            alt={`Tech Ignition 1.0 - ${currentIndex1 + 1}`}
            className="w-full h-[220px] sm:h-[350px] md:h-[480px] object-cover transition-all duration-500"
          />

          {/* Arrows */}
          <button
            onClick={prevSlide1}
            className="absolute top-1/2 -translate-y-1/2 left-4 p-2 sm:p-3 rounded-full bg-black/60 border border-cyan-400/50 hover:scale-110 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide1}
            className="absolute top-1/2 -translate-y-1/2 right-4 p-2 sm:p-3 rounded-full bg-black/60 border border-cyan-400/50 hover:scale-110 transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Progress Dots */}
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images1.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex1 === idx ? "w-6 bg-cyan-400" : "w-2 bg-gray-500/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Glow Animation */}
      <style>{`
        @keyframes blueRedGlow {
          0%, 100% { 
            color: #00aaff;
            text-shadow: 0 0 15px #00aaff, 0 0 35px #00aaff;
          }
          50% { 
            color: #ff0033;
            text-shadow: 0 0 20px #ff0033, 0 0 45px #ff0033;
          }
        }
        .animate-blueRedGlow {
          animation: blueRedGlow 3s infinite alternate;
        }
      `}</style>
    </div>
  );
}
