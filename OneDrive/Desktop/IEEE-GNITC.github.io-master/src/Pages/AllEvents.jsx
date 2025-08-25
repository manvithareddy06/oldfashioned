import React from "react";
import { CalendarDays, MapPin, ArrowRight, Info, XCircle, Sparkles } from "lucide-react";
import techImg from "../assets/tech.jpg";
import { Link } from "react-router-dom";
import orientation from "../assets/orientation.jpg";

const futureEvents = [
  {
    id: 1,
    title: "TECH-IGNITION 2.0",
    date: "23 August 2025",
    location: "Guru Gobind Singh Auditorium - GNI",
    description:
      "Join us for Tech-Ignition 2.0 – a day packed with innovation, skill, and creativity! Compete in UI/UX Design, Code Debugging, Tech-Treasure Hunt, Debate, E-Sports (BGMI & Free Fire), and The Content Creator’s Challenge. Free entry for IEEE members!",
    tag: "Tech & Fun",
    img: techImg,
    registrationLink: null,
    detailsPage: "/tech",
  },
  {
    id: 2,
    title: "IEEE ORIENTATION DAY",
    date: "26 July 2025",
    location: "Ratan Naval Tata AUDITORIUM - GNI",
    description:
      "The IEEE GNI Orientation Day is a welcoming event for new students, offering an introduction to the IEEE Student Branch’s vision, mission, and opportunities. It’s a chance to meet the team, discover upcoming events, and explore various technical domains!",
    tag: "Kickstart Your IEEE Journey",
    img: orientation,
    registrationLink: null, // ❌ Registration Closed
    detailsPage: "/orientation",
  },
];

export default function Events() {
  return (
    <div className="relative min-h-screen px-4 md:px-8 pt-28 pb-20 bg-black text-white flex flex-col">
      {/* Header */}
      <div className="mb-12 animate-fadeIn max-w-4xl mx-auto text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-gradient">
          Upcoming IEEE Events
        </h1>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto md:mx-0 text-sm md:text-lg leading-relaxed">
          Stay tuned for our exciting lineup of tech events. Mark your calendars
          and be part of the innovation!
        </p>
      </div>

      {/* Events List */}
      <div
        className={`grid gap-10 ${
          futureEvents.length === 1
            ? "grid-cols-1"
            : "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {futureEvents.map((event, index) => (
          <div
            key={event.id}
            className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700/40 hover:border-pink-500 shadow-md hover:shadow-[0_0_25px_#a855f7] transition-all duration-500 hover:scale-[1.04] hover:-rotate-1 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Image */}
            <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl">
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              {/* Tag */}
              <span className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-md">
                {event.tag}
              </span>
            </div>

            {/* Content */}
            <div className="px-5 py-6 bg-black/70 backdrop-blur-md flex flex-col justify-between">
              <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-gradientPinkPurple">
                {event.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-5 line-clamp-3 md:line-clamp-none">
                {event.description}
              </p>

              {/* Date & Location */}
              <div className="space-y-2 text-sm mb-5">
                <div className="flex items-center gap-2 text-gray-400">
                  <CalendarDays size={16} className="text-pink-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={16} className="text-purple-500" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Buttons */}
              {event.registrationLink ? (
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-5 bg-gradient-to-r from-pink-600 via-purple-700 to-cyan-600 rounded-full font-bold text-white text-sm shadow-[0_0_10px_rgba(219,39,119,0.6)] hover:shadow-[0_0_18px_rgba(139,92,246,0.9)] transition-shadow duration-500 animate-glowPulse"
                >
                  Register Now <ArrowRight size={18} />
                </a>
              ) : (
                <div className="flex items-center justify-center gap-2 w-full py-2.5 px-5 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full font-semibold text-gray-300 text-sm shadow-inner">
                  <XCircle size={18} className="text-red-400" />
                  Registration Closed
                </div>
              )}

              {/* Explore Button */}
              <Link
                to={event.detailsPage}
                className="relative flex items-center justify-center gap-2 w-full py-2.5 px-5 mt-3 rounded-full font-medium text-sm text-white overflow-hidden group border border-transparent bg-gradient-to-r from-gray-700 to-gray-600 hover:from-transparent hover:to-transparent hover:border-pink-500 transition-all duration-500"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></span>
                <span className="relative z-10 flex items-center gap-2 group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500">
                  Explore Event <Sparkles size={18} className="text-yellow-300" />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 5s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 6px rgba(219,39,119,0.6); }
          50% { box-shadow: 0 0 15px rgba(219,39,119,0.9); }
        }
        .animate-glowPulse {
          animation: glowPulse 3s ease-in-out infinite;
        }
        .text-gradientPinkPurple {
          background: linear-gradient(90deg, #ec4899, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
