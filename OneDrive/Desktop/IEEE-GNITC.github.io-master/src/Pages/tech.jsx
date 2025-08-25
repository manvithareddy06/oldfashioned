// src/Pages/events/main/TechIgnition.jsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/techignition/1.jpg";
import img2 from "../assets/techignition/2.jpg";
import img3 from "../assets/techignition/3.jpg";
import img4 from "../assets/techignition/4.jpg";
import img5 from "../assets/techignition/5.jpg";

const images = [img1, img2, img3, img4, img5];

export default function TechIgnition() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 bg-black text-white">
      {/* Tech-Ignition 1.0 Heading (Left on mobile, Center on desktop) */}
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

      {/* Carousel */}
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg group border border-cyan-500/20">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Tech Ignition ${currentIndex + 1}`}
            className="w-full h-[260px] sm:h-[400px] md:h-[500px] object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition shadow-md hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition shadow-md hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                currentIndex === idx
                  ? "bg-cyan-400 scale-125"
                  : "bg-gray-400/50 hover:bg-cyan-300/70"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div
        className="
          mt-12 sm:mt-16 
          max-w-4xl 
          ml-0 sm:ml-auto sm:mr-auto 
          px-4 sm:px-6 
          space-y-6 
          text-left
        "
      >
{/* Title */}
<motion.h1
  className="text-left md:text-center 
             text-3xl sm:text-4xl md:text-5xl font-extrabold 
             bg-clip-text text-transparent 
             bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 
             animate-gradient"
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  TECH-IGNITION 2.0
</motion.h1>



        {/* Announcement (Subheading) */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-semibold bg-clip-text text-transparent 
                     bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-left"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >

        </motion.p>

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
    </div>
  );
}
