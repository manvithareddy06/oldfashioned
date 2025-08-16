// src/components/BookingForm.jsx
import React from "react";

export default function BookingForm() {
  return (
    <section className="relative min-h-screen bg-black px-4 py-12 flex items-center justify-center overflow-hidden">
      {/* 🔴 Red floating bubbles (visible on all screens now) */}
      <div className="absolute top-10 right-6 sm:right-12 w-8 sm:w-12 h-8 sm:h-12 bg-red-500 rounded-full blur-md opacity-70 animate-bounce"></div>
      <div className="absolute top-32 left-10 sm:left-32 w-4 sm:w-6 h-4 sm:h-6 bg-red-400 rounded-full blur-sm opacity-60 animate-pulse"></div>
      <div className="absolute bottom-24 right-10 sm:right-24 w-5 sm:w-8 h-5 sm:h-8 bg-red-600 rounded-full blur-sm opacity-50 animate-ping"></div>

      {/* Card Container */}
      <div className="relative z-10 w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-4 py-6 sm:px-6 sm:py-8 md:py-12 bg-black text-white text-center border-b border-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 leading-tight">
            Book a Service
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Kindly fill in the form below. Our team will review your request and reach out shortly with further steps.
          </p>
        </div>

        {/* Form Container */}
        <div className="h-[80vh] sm:h-[85vh] w-full">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdXjsq-AW0_WnAqLnfzfLOksI--qYylsL-3FWqvuqy99go8Sg/viewform?embedded=true"
            title="Booking Form"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="w-full h-full"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}
