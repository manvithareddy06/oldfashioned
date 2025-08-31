// src/Pages/events/main/TechIgnition.jsx
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/techignition/1.jpg";
import img2 from "../assets/techignition/2.jpg";
import img3 from "../assets/techignition/3.jpg";
import img4 from "../assets/techignition/4.jpg";
import img5 from "../assets/techignition/5.jpg";
import img8 from "../assets/techignition/ieee3.jpg";
import img9 from "../assets/techignition/ieee4.jpg";
import img10 from "../assets/techignition/ieee5.jpg";
import img11 from "../assets/techignition/ti1.jpg";
import img12 from "../assets/techignition/ti2.jpg";
import img13 from "../assets/techignition/ti3.jpg";
import img14 from "../assets/techignition/ti4.jpg";
import img15 from "../assets/techignition/ti5.jpg";
import img16 from "../assets/techignition/ti6.jpg";
import img17 from "../assets/techignition/ti7.jpg";
import img18 from "../assets/techignition/ti8.jpg";
import img19 from "../assets/techignition/ti9.jpg";

const images1 = [img1, img2, img3, img4, img5];
const images2 = [img8, img9, img10, img12, img14, img16, img18];

export default function TechIgnition() {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  // Auto scroll carousel 1
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex1((prev) => (prev === images1.length - 1 ? 0 : prev + 1));
    }, 3000); // 3 sec delay
    return () => clearInterval(interval);
  }, []);

  // Auto scroll carousel 2
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex2((prev) => (prev === images2.length - 1 ? 0 : prev + 1));
    }, 3000);
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
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 bg-black text-white">
      {/* Tech-Ignition 1.0 Heading */}
      <motion.h2
        className="text-left md:text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 
                   bg-clip-text text-transparent 
                   bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
                   drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        TECH-IGNITION 1.0
      </motion.h2>

      {/* Carousel 1 */}
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg group border border-cyan-500/20">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex1}
            src={images1[currentIndex1]}
            alt={`Tech Ignition 1.0 - ${currentIndex1 + 1}`}
            className="w-full h-[260px] sm:h-[400px] md:h-[500px] object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prevSlide1}
          className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition shadow-md hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide1}
          className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition shadow-md hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images1.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex1(idx)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                currentIndex1 === idx
                  ? "bg-cyan-400 scale-125"
                  : "bg-gray-400/50 hover:bg-cyan-300/70"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div
        className="mt-12 sm:mt-16 max-w-4xl ml-0 sm:ml-auto sm:mr-auto px-4 sm:px-6 space-y-6 text-left"
      >
        {/* Title */}
        <motion.h1
          className="text-left md:text-center text-3xl sm:text-4xl md:text-5xl font-extrabold 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-gradient"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          TECH-IGNITION 2.0
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl tracking-wide text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Tech-Ignition 2.0 is back — bigger, better, and more thrilling! 
          Get ready for a day filled with innovation, skill, and creativity.  
          Compete in exciting events like{" "}
          <span className="text-cyan-400 font-medium">UI/UX Design</span>,{" "}
          <span className="text-cyan-400 font-medium">Code Debugging</span>,{" "}
          <span className="text-cyan-400 font-medium">Tech Treasure Hunt</span>,{" "}
          <span className="text-cyan-400 font-medium">Debate</span>,{" "}
          <span className="text-cyan-400 font-medium">E-Sports</span> (BGMI & Free Fire),  
          and <span className="text-cyan-400 font-medium">The Content Creator’s Challenge</span>.  
          Whether you’re here to compete or to witness the next wave of tech brilliance,  
          Tech-Ignition 2.0 promises an unforgettable experience for all.
        </motion.p>
      </div>

      {/* Carousel 2 (Below Tech-Ignition 2.0) */}
      <div className="mt-12 relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg group border border-purple-500/20">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex2}
            src={images2[currentIndex2]}
            alt={`Tech Ignition 2.0 - ${currentIndex2 + 1}`}
            className="w-full h-[260px] sm:h-[400px] md:h-[500px] object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prevSlide2}
          className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition shadow-md hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide2}
          className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition shadow-md hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images2.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex2(idx)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                currentIndex2 === idx
                  ? "bg-pink-400 scale-125"
                  : "bg-gray-400/50 hover:bg-pink-300/70"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
