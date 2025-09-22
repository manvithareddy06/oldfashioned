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
import { Users, Calendar } from "lucide-react";

function Events() {
  const navigate = useNavigate();

  const handleTechIgnitionClick = () => navigate("/tech");
  const handleOrientationClick = () => navigate("/orientation");
  const handleEngineersDayClick = () => navigate("/engineersday");

  return (
    <div
      id="events"
      className="relative px-4 sm:px-6 py-16 md:py-28 min-h-screen text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/70 backdrop-blur-md"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_60%)]"></div>

      <div className="relative z-10 space-y-28">
        {/* Section Heading */}
        <div className="animate-fadeIn">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-red-400 via-red-500 to-purple-500 text-transparent bg-clip-text drop-shadow-md text-left md:text-left lg:text-center">
            Check us out!
          </h2>
          <p className="text-left md:text-left lg:text-center mt-4">
            Discover upcoming highlights and relive memorable milestones with{" "}
            <span className="text-cyan-300 font-semibold">IEEE at GNI</span>.
          </p>
        </div>

        {/* ----------------- 2025 EVENTS ----------------- */}
           <section className="space-y-16 animate-fadeInUp">
          <div className="flex flex-col items-center space-y-3">
            <h3 className="flex items-center gap-2 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-center uppercase tracking-wide text-red-400 drop-shadow-sm">
              <Calendar className="w-6 h-6 sm:w-7 sm:h-7" /> EVENTS 2025
            </h3>
            <div className="h-1 w-28 sm:w-40 md:w-36 lg:w-40 bg-gradient-to-r from-red-400 via-red-500 to-cyan-400 rounded-full opacity-80"></div>
          </div>

          {/* ENGINEER'S DAY */}
          <div className="relative w-full rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-left sm:text-center md:text-left lg:text-left border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(56,189,248,0.4)] hover:scale-[1.02] transition-all duration-500">
            <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 md:mb-4 lg:mb-6 tracking-tight text-yellow-400">
              ENGINEER'S DAY 
            </h3>
            <p className="text-sm sm:text-base md:text-sm lg:text-base max-w-full sm:max-w-3xl md:max-w-2xl lg:max-w-3xl text-white/85 mb-6 sm:mb-8 md:mb-6 lg:mb-8 leading-relaxed font-medium">
              Celebrate innovation, creativity, and problem-solving on Engineer's Day at IEEE GNI. Engage in exciting workshops, technical challenges, and showcases across multiple domains.
            </p>
            <button
              onClick={handleEngineersDayClick}
              className="px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full text-white font-semibold tracking-wide text-sm sm:text-base md:text-sm lg:text-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300"
            >
              Explore Engineer's Day
            </button>
          </div>

          {/* TECH-IGNITION 2025 */}
          <div className="relative w-full rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-left sm:text-center md:text-left lg:text-left border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(56,189,248,0.4)] hover:scale-[1.02] transition-all duration-500">
            <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 md:mb-4 lg:mb-6 tracking-tight text-cyan-300">
              TECH-IGNITION 2.0
            </h3>
            <p className="text-sm sm:text-base md:text-sm lg:text-base max-w-full sm:max-w-3xl md:max-w-2xl lg:max-w-3xl text-white/85 mb-6 sm:mb-8 md:mb-6 lg:mb-8 leading-relaxed font-medium">
              The IEEE Student Branch – GNI proudly presents{" "}
              <span className="text-cyan-200 font-semibold">TECH-IGNITION 2.0</span>,
              a fest celebrating innovation, excellence, and creativity with unmatched energy.
            </p>
            <button
              onClick={handleTechIgnitionClick}
              className="px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold tracking-wide text-sm sm:text-base md:text-sm lg:text-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300"
            >
              Checkout! Tech Ignition
            </button>
          </div>

          {/* ORIENTATION 2025 */}
          <div className="relative w-full rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-left sm:text-center md:text-left lg:text-left border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(168,85,247,0.4)] hover:scale-[1.02] transition-all duration-500">
            <h3 className="flex items-center gap-2 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 md:mb-4 lg:mb-6 tracking-tight text-purple-300">
              <Users className="w-6 h-6 sm:w-7 sm:h-7" /> Orientation Day
            </h3>
            <p className="text-sm sm:text-base md:text-sm lg:text-base max-w-full sm:max-w-3xl md:max-w-2xl lg:max-w-3xl text-white/85 mb-6 sm:mb-8 md:mb-6 lg:mb-8 leading-relaxed font-medium">
              Begin your IEEE journey with{" "}
              <span className="text-purple-300 font-semibold">Orientation Day</span>.  
              An event to welcome new members, inspire curiosity, and lay the foundation for leadership.
            </p>
            <button
              onClick={handleOrientationClick}
              className="px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-semibold tracking-wide text-sm sm:text-base md:text-sm lg:text-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300"
            >
              Checkout! Orientation
            </button>
          </div>
        </section>

        {/* EVENTS 2024 */}
        <section className="space-y-16 animate-fadeInUp">
          <div className="flex flex-col items-center space-y-3">
            <h3 className="flex items-center gap-2 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-center uppercase tracking-wide text-red-400 drop-shadow-sm">
              <Calendar className="w-6 h-6 sm:w-7 sm:h-7" /> EVENTS 2024
            </h3>
            <div className="h-1 w-28 sm:w-40 md:w-36 lg:w-40 bg-gradient-to-r from-red-400 via-red-500 to-cyan-400 rounded-full opacity-80"></div>
          </div>

          {/* Carousel + Info */}
          <div className="flex flex-col md:flex-row gap-8 sm:gap-10 items-start justify-center">
            {/* Carousel */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full border border-white/10 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-6 bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.15)] transition-all duration-500 hover:scale-[1.03]">
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
                        <div className="rounded-3xl overflow-hidden max-h-[300px] sm:max-h-[400px] w-full md:w-[90%] transition-transform hover:scale-105 shadow-xl">
                          <EventImageItem1 img={data.img} />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>

            {/* Info */}
            <div className="w-full md:w-1/2 bg-white/5 backdrop-blur-xl text-white rounded-3xl p-6 sm:p-8 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(56,189,248,0.25)] transition-transform duration-500 hover:scale-[1.03] text-left max-h-[600px] overflow-y-auto">
              <p className="text-sm sm:text-base md:text-sm lg:text-base leading-relaxed text-justify mb-6 sm:mb-8 font-medium text-white/85">
                On June 5, 2024, the Valedictory Function was held, where cash prizes and certificates were awarded to the winners, marking the grand finale of our year’s achievements.
              </p>
              <h3 className="font-bold text-lg sm:text-xl md:text-base lg:text-xl mb-4 text-cyan-300 drop-shadow">
                Distinguished Guests
              </h3>
              <ul className="text-xs sm:text-sm md:text-xs lg:text-sm list-disc list-inside space-y-1 sm:space-y-2 font-semibold text-white/85">
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
          <div className="w-full border border-white/10 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-6 bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.15)] transition-all duration-500 hover:scale-[1.03]">
            <Carousel
              className="w-full"
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 3000 })]}
            >
              <CarouselContent>
                {moreInfo2.map((data, index) => (
                  <CarouselItem
                    className="basis-full sm:basis-1/2 md:basis-1/3 px-2 sm:px-3"
                    key={index}
                  >
                    <div className="rounded-2xl overflow-hidden max-h-[250px] sm:max-h-[450px] w-full transition-transform hover:scale-105 shadow-xl border border-white/10">
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
                <CarouselPrevious className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full p-5 hover:scale-125 transition-transform shadow-md" />
                <CarouselNext className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full p-5 hover:scale-125 transition-transform shadow-md" />
              </div>
            </Carousel>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Events;
