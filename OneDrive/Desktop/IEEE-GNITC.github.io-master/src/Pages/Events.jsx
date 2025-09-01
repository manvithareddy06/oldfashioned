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

  const handleTechIgnitionClick = () => navigate("/tech");
  const handleOrientationClick = () => navigate("/orientation");

  return (
    <div
      id="events"
      className="relative px-4 sm:px-6 py-16 md:py-28 min-h-screen text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-cyan-900 opacity-95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,150,0.35),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(0,200,255,0.25),transparent_50%)] animate-pulse"></div>

      <div className="relative z-10 space-y-28">
        {/* Section Heading */}
        <div className="text-center animate-fadeIn">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text drop-shadow-lg">
            Events 🎉
          </h2>
          <p className="text-lg md:text-xl text-white/80 mt-4 max-w-2xl mx-auto leading-relaxed">
            Explore our upcoming celebrations and relive the legacy of past
            milestones with IEEE at GNI!
          </p>
        </div>

        {/* ----------------- 2025 EVENTS ----------------- */}
        <section className="space-y-16 animate-slideIn">
          <div className="flex flex-col items-center space-y-3">
            <h3 className="text-3xl md:text-4xl font-extrabold text-center uppercase tracking-wide text-cyan-300 drop-shadow-md">
              ✨ Events 2025
            </h3>
            <div className="h-1 w-40 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>

          {/* Tech Ignition 2025 */}
          <div
            className="relative w-full rounded-3xl p-8 sm:p-12 text-center border border-white/20
            bg-gradient-to-r from-purple-600/80 via-pink-600/80 to-cyan-500/80 backdrop-blur-2xl
            shadow-[0_8px_40px_rgba(139,92,246,0.7)] hover:scale-[1.02] transition-transform duration-500"
          >
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              🚀 Tech Ignition 2025
            </h3>
            <p className="max-w-3xl text-white/90 text-base md:text-lg mb-8 leading-relaxed font-medium mx-auto">
              The IEEE Student Branch – GNI proudly presents{" "}
              <span className="text-cyan-200 font-semibold">
                Tech Ignition 2025
              </span>
              , a technical and fun fest celebrating innovation, excellence, and
              creativity with unmatched energy.
            </p>
            <button
              onClick={handleTechIgnitionClick}
              className="px-8 sm:px-12 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 
              rounded-full text-white font-bold tracking-wider text-lg shadow-lg 
              hover:scale-105 active:scale-95 transition-transform duration-300"
            >
              Join Tech Ignition 2025
            </button>
          </div>

          {/* Orientation 2025 */}
          <div
            className="relative w-full rounded-3xl p-8 sm:p-12 text-center border border-white/20
            bg-gradient-to-r from-cyan-600/80 via-indigo-600/80 to-purple-600/80 backdrop-blur-2xl
            shadow-[0_8px_40px_rgba(6,182,212,0.7)] hover:scale-[1.02] transition-transform duration-500"
          >
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              🌟 Orientation Day 2025
            </h3>
            <p className="max-w-3xl text-white/90 text-base md:text-lg mb-8 leading-relaxed font-medium mx-auto">
              Kickstart your IEEE journey at GNI! Orientation Day 2025 welcomes
              new members, sparks curiosity, and lays the foundation for
              innovation and leadership.
            </p>
            <button
              onClick={handleOrientationClick}
              className="px-8 sm:px-12 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
              rounded-full text-white font-bold tracking-wider text-lg shadow-lg
              hover:scale-105 active:scale-95 transition-transform duration-300"
            >
              Join Orientation Day 2025
            </button>
          </div>
        </section>

        {/* ----------------- 2024 EVENTS ----------------- */}
        <section className="space-y-16 animate-fadeInUp">
          <div className="flex flex-col items-center space-y-3">
            <h3 className="text-3xl md:text-4xl font-extrabold text-center uppercase tracking-wide text-pink-400 drop-shadow-md">
              🎊 Events 2024
            </h3>
            <div className="h-1 w-40 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 rounded-full animate-pulse"></div>
          </div>

          {/* Carousel + Info */}
          <div className="flex flex-col md:flex-row gap-10 items-start justify-center">
            {/* Carousel */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div
                className="w-full border border-white/20 backdrop-blur-2xl rounded-3xl p-6
                bg-gradient-to-br from-white/10 to-black/30 shadow-[0_8px_40px_rgba(255,255,255,0.15)]
                transition-all duration-500 hover:scale-[1.03]"
              >
                <Carousel
                  className="w-full"
                  opts={{ align: "center", loop: true }}
                  plugins={[Autoplay({ delay: 3000 })]}
                >
                  <CarouselContent>
                    {moreInfo1.map((data, index) => (
                      <CarouselItem
                        className="basis-full px-3 flex justify-center"
                        key={index}
                      >
                        <div className="rounded-3xl overflow-hidden max-h-[400px] w-full md:w-[90%] transition-transform hover:scale-105 shadow-2xl">
                          <EventImageItem1 img={data.img} />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>

            {/* Info */}
            <div
              className="w-full md:w-1/2 bg-gradient-to-br from-white/10 to-black/30 text-white rounded-3xl p-8
              shadow-[0_8px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl max-h-[600px] overflow-y-auto
              transition-transform duration-500 hover:scale-[1.03] text-left"
            >
              <p className="text-base md:text-lg leading-relaxed text-justify mb-8 font-medium">
                On June 5, 2024, the Valedictory Function was held, where cash
                prizes and certificates were awarded to the winners, marking the
                grand finale of our year’s achievements.
              </p>
              <h3 className="font-bold text-xl md:text-2xl mb-4 text-cyan-300 drop-shadow-lg">
                Distinguished Guests:
              </h3>
              <ul className="text-sm md:text-base list-disc list-inside space-y-2 font-semibold text-white/90">
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
          <div
            className="w-full border border-white/20 backdrop-blur-2xl rounded-3xl p-6
            bg-gradient-to-br from-black/20 to-white/10 shadow-[0_8px_40px_rgba(255,255,255,0.15)]
            transition-all duration-500 hover:scale-[1.03]"
          >
            <Carousel
              className="w-full"
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 3000 })]}
            >
              <CarouselContent>
                {moreInfo2.map((data, index) => (
                  <CarouselItem
                    className="basis-full sm:basis-1/2 md:basis-1/3 px-3"
                    key={index}
                  >
                    <div className="rounded-2xl overflow-hidden max-h-[320px] sm:max-h-[450px] w-full transition-transform hover:scale-105 shadow-2xl border border-white/10">
                      <EventImageItem2 img={data.img} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Card Section */}
          <div>
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
              <div className="flex justify-between items-center mt-8">
                <CarouselPrevious className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-5 hover:scale-125 transition-transform shadow-lg" />
                <CarouselNext className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-5 hover:scale-125 transition-transform shadow-lg" />
              </div>
            </Carousel>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Events;
