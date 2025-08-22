import React from "react";
import { useNavigate } from "react-router-dom";
import EventInfo, { moreInfo1, moreInfo2 } from "../info/events";
import Autoplay from "embla-carousel-autoplay";
import EventImageItem1 from "@/components/Items/EventImageItem1";
import EventImageItem2 from "@/components/Items/EventImageItem2";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CardItem from "@/components/Items/CardItem";

function Events() {
  const navigate = useNavigate();

  const handleTechIgnitionClick = () => {
    navigate("/tech");
  };

  const handleOrientationClick = () => {
    navigate("/orientation");
  };

  return (
    <div
      id="events"
      className="relative px-4 sm:px-6 py-16 md:py-28 min-h-screen text-white overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-cyan-900 opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,150,0.4),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(0,200,255,0.3),transparent_50%)] animate-pulse"></div>

      <div className="relative z-10">
        {/* Section Heading */}
        {/* Mobile (left-aligned) */}
        <div className="block md:hidden mb-12 animate-fadeIn text-left">
          <h2 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
            Events 🎉
          </h2>
          <p className="text-sm text-white/80 mt-3 max-w-md leading-relaxed text-left">
            Explore our latest happenings and join the excitement!
          </p>
        </div>

        {/* Desktop (center-aligned) */}
        <div className="hidden md:block mb-12 animate-fadeIn text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
            Events 🎉
          </h2>
          <p className="text-lg md:text-xl text-white/80 mt-4 max-w-2xl mx-auto leading-relaxed text-center">
            Explore our latest happenings and join the excitement!
          </p>
        </div>

        {/* Tech Ignition Banner */}
        <div
          className="relative w-full mb-12 sm:mb-16 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-left sm:text-center shadow-[0_8px_40px_rgba(139,92,246,0.6)]
          bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500
          backdrop-blur-2xl transition-transform hover:scale-[1.02] sm:hover:scale-[1.04] duration-500"
        >
          {/* Mobile version */}
          <div className="block md:hidden">
            <h3 className="text-2xl font-extrabold mb-3">Tech Ignition</h3>
            <p className="text-sm text-white/95 mb-4 leading-relaxed font-medium">
              The IEEE Student Branch – GNI proudly presents Tech Ignition, a
              technical and fun fest aimed at inspiring innovation and creativity.
            </p>
          </div>

          {/* Desktop version */}
          <div className="hidden md:block">
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-xl">
              Tech Ignition
            </h3>
            <p className="max-w-3xl text-white/95 text-lg mb-10 leading-relaxed font-medium mx-auto">
              The IEEE Student Branch – GNI proudly presents Tech Ignition, a
              technical and fun fest aimed at inspiring innovation, technical
              excellence, and creativity while fostering enjoyment and
              collaboration.
            </p>
          </div>

          <button
            onClick={handleTechIgnitionClick}
            className="px-8 sm:px-12 py-3 sm:py-4 bg-white/20 border border-white/30 rounded-full text-white font-bold tracking-wider text-base sm:text-lg
            hover:bg-white/40 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg backdrop-blur-md"
          >
            🚀 TECH IGNITION
          </button>
        </div>

        {/* Orientation Banner */}
        <div
          className="relative w-full mb-14 sm:mb-20 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-left sm:text-center shadow-[0_8px_40px_rgba(6,182,212,0.6)]
          bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600
          backdrop-blur-2xl transition-transform hover:scale-[1.02] sm:hover:scale-[1.04] duration-500"
        >
          {/* Mobile version */}
          <div className="block md:hidden">
            <h3 className="text-2xl font-extrabold mb-3">Orientation Day</h3>
            <p className="text-sm text-white/95 mb-4 leading-relaxed font-medium">
              Kickstart your journey with IEEE at GNI! Orientation Day welcomes
              new members and ignites curiosity.
            </p>
          </div>

          {/* Desktop version */}
          <div className="hidden md:block">
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-xl">
              Orientation Day
            </h3>
            <p className="max-w-3xl text-white/95 text-lg mb-10 leading-relaxed font-medium mx-auto">
              Kickstart your journey with IEEE at GNI! Orientation Day welcomes
              new members, ignites curiosity, and introduces you to innovation,
              leadership, and technology.
            </p>
          </div>

          <button
            onClick={handleOrientationClick}
            className="px-8 sm:px-12 py-3 sm:py-4 bg-white/20 border border-white/30 rounded-full text-white font-bold tracking-wider text-base sm:text-lg
            hover:bg-white/40 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg backdrop-blur-md"
          >
            🌟 ORIENTATION DAY
          </button>
        </div>

        {/* First Carousel + Info */}
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-start justify-center animate-slideIn">
          {/* Carousel */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div
              className="w-full border border-white/20 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6
              bg-gradient-to-br from-white/10 to-black/30 shadow-[0_8px_40px_rgba(255,255,255,0.1)]
              transition-all duration-500 hover:scale-[1.02] sm:hover:scale-[1.05]"
            >
              <Carousel
                className="w-full"
                opts={{ align: "center", loop: true }}
                plugins={[Autoplay({ delay: 3000 })]}
              >
                <CarouselContent>
                  {moreInfo1.map((data, index) => (
                    <CarouselItem
                      className="basis-full px-2 sm:px-3 flex justify-center"
                      key={index}
                    >
                      <div
                        className="rounded-2xl sm:rounded-3xl overflow-hidden max-h-[350px] sm:max-h-[480px] w-full md:w-[90%]
                        transform transition-transform duration-700 hover:scale-105 sm:hover:scale-110 shadow-2xl"
                      >
                        <EventImageItem1 img={data.img} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          {/* Text Info */}
          <div
            className="w-full md:w-1/2 bg-gradient-to-br from-white/10 to-black/30 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8
            shadow-[0_8px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl max-h-[500px] sm:max-h-[600px] overflow-y-auto
            transition-transform duration-500 hover:scale-[1.02] sm:hover:scale-[1.05] text-left"
          >
            <p className="text-sm sm:text-lg leading-relaxed text-justify mb-6 sm:mb-8 font-medium">
              On June 5, 2024, the Valedictory Function was held, where cash
              prizes and certificates were awarded to the winners...
            </p>
            <h3 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-cyan-300 drop-shadow-lg">
              Distinguished Guests:
            </h3>
            <ul className="text-sm sm:text-base list-disc list-inside space-y-2 font-semibold text-white/90">
              <li><strong>Chief Guest:</strong> Dr. Krithika Sutrave</li>
              <li><strong>Guest of Honor:</strong> Dr. Mousmi Ajay Chaurasia</li>
              <li>Dr. M.A. Jabbar</li>
              <li>Mr. G. Kapil Kumar</li>
              <li>Mr. U. Arjun</li>
              <li>Dr. K. Venkata Rao</li>
              <li>Dr. Rishi Sayal</li>
              <li>Dr. Harish Kundra</li>
              <li>Dr. Geeta Tripathi</li>
              <li>Dr. Ch Ravindra</li>
            </ul>
          </div>
        </div>

        {/* Second Carousel */}
        <div className="mt-16 sm:mt-24 mb-10 sm:mb-14 animate-fadeInUp">
          <div
            className="w-full border border-white/20 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6
            bg-gradient-to-br from-black/20 to-white/10 shadow-[0_8px_40px_rgba(255,255,255,0.1)]
            transition-all duration-500 hover:scale-[1.02] sm:hover:scale-[1.03]"
          >
            <Carousel
              className="w-full"
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 3000 })]}
            >
              <CarouselContent>
                {moreInfo2.map((data, index) => (
                  <CarouselItem
                    className="basis-full sm:basis-1/2 md:basis-1/3 px-2 sm:px-4"
                    key={index}
                  >
                    <div className="rounded-xl sm:rounded-2xl overflow-hidden max-h-[280px] sm:max-h-[450px] w-full transition-transform duration-500 hover:scale-105 sm:hover:scale-110 shadow-2xl border border-white/10">
                      <EventImageItem2 img={data.img} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Card Section */}
        <div className="mt-12 sm:mt-16 animate-fadeIn">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {EventInfo.map((eve) => (
                <CarouselItem className="m-2 sm:m-4" key={eve.id}>
                  <CardItem
                    cardImg={eve.img}
                    cardContent={eve.content}
                    cardTitlee={eve.title}
                    cardLink={eve.link}
                    registerComponent={eve.register}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-between items-center mt-6 sm:mt-10">
              <CarouselPrevious className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-4 sm:p-5 hover:scale-110 sm:hover:scale-125 transition-transform shadow-lg" />
              <CarouselNext className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-4 sm:p-5 hover:scale-110 sm:hover:scale-125 transition-transform shadow-lg" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Events;
