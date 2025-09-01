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

  // Auto scroll carousel 1
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex1((prev) => (prev === images1.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto scroll carousel 2
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.div
        className="pt-28 pb-16 px-6 max-w-5xl mx-auto text-left"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          TECH-IGNITION
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
          A flagship technical fest by{" "}
          <span className="text-cyan-400 font-semibold">IEEE GNI</span> — uniting
          innovation, creativity, and competitive spirit.
        </p>
      </motion.div>

      {/* Tech-Ignition 2.0 Section */}
      <section className="max-w-5xl mx-auto px-6 space-y-8 text-left">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          TECH-IGNITION 2.0
        </motion.h2>

        <motion.p
          className="text-gray-300 leading-relaxed text-lg md:text-xl tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Tech-Ignition 2.0 is here —{" "}
          <span className="text-cyan-400 font-semibold">
            bigger, sharper, and more electrifying!
          </span>{" "}
          From <span className="text-cyan-400">UI/UX Design</span> to{" "}
          <span className="text-cyan-400">E-Sports</span>, brace yourself for a
          symphony of skill, innovation, and passion. This is more than a
          competition — it’s where future leaders of tech are born.
        </motion.p>

        {/* Event Info */}
        <motion.div
          className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">
            Event Details
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              📍 Venue:{" "}
              <span className="text-white">
                Guru Nanak Institutions, Hyderabad
              </span>
            </li>
            <li>
              📅 Date: <span className="text-white">23-AUG-2025</span>
            </li>
            <li>
              🎯 Organized By:{" "}
              <span className="text-white">IEEE GNI Student Branch</span>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Carousel 2 for 2.0 */}
      <section className="mt-20 px-6">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-400 mb-8 max-w-5xl mx-auto text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Sneak Peek into Tech-Ignition 2.0
        </motion.h2>

        <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-xl border border-gray-700">
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
            className="absolute top-1/2 -translate-y-1/2 left-3 p-2 rounded-full bg-black/50 hover:bg-black/70 transition shadow-md"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide2}
            className="absolute top-1/2 -translate-y-1/2 right-3 p-2 rounded-full bg-black/50 hover:bg-black/70 transition shadow-md"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-6 flex gap-2">
            {images2.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex2(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex2 === idx
                    ? "bg-pink-400 scale-125"
                    : "bg-gray-500/50 hover:bg-pink-300/70"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Tech-Ignition 1.0 Section */}
      <section className="mt-32 px-6">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-8 max-w-5xl mx-auto text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Highlights from Tech-Ignition 1.0
        </motion.h2>

        <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-xl border border-gray-700">
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
            className="absolute top-1/2 -translate-y-1/2 left-3 p-2 rounded-full bg-black/50 hover:bg-black/70 transition shadow-md"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide1}
            className="absolute top-1/2 -translate-y-1/2 right-3 p-2 rounded-full bg-black/50 hover:bg-black/70 transition shadow-md"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-6 flex gap-2">
            {images1.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex1(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex1 === idx
                    ? "bg-cyan-400 scale-125"
                    : "bg-gray-500/50 hover:bg-cyan-300/70"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
