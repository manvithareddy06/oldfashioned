import React from "react";
import { CalendarDays, MapPin, XCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import techImg from "../assets/tech.jpg";
import orientation from "../assets/orientation.jpg";
import cm from "../assets/coming soon.jpg";
import en from "../assets/Engineer`s day/Engineer`s day.png"

const upcomingEvents = [
  {
    id: 2,
    title: "IEEE DAY",
    date: "7 October 2025",
    location: "Guru Gobind Singh Auditorium - GNI",
    description:
      "Join us for IEEE DAY – a day packed with innovation, skill, and creativity!",
    img: cm,
    registrationLink: null, 
    detailsPage: "",
  },
];

const previousEvents = [
  {
    id: 3,
    title: "ENGINEER'S DAY",
    date: "18 September 2025",
    location: "Guru Gobind Singh Auditorium - GNI",
    description:
      "Join us for ENGINEER'S DAY – a day packed with innovation, skill, and creativity!",
    img: en,
    registrationLink: null,
    detailsPage: "/engineersday",
  },
  {
    id: 3,
    title: "TECH-IGNITION 2.0",
    date: "23 August 2025",
    location: "Guru Gobind Singh Auditorium - GNI",
    description:
      "Join us for Tech-Ignition 2.0 – a day packed with innovation, skill, and creativity! Compete in UI/UX Design, Code Debugging, Tech-Treasure Hunt, Debate, E-Sports (BGMI & Free Fire), and The Content Creator’s Challenge. Free entry for IEEE members!",
    img: techImg,
    registrationLink: null,
    detailsPage: "/tech",
  },
  {
    id: 4,
    title: "IEEE ORIENTATION DAY",
    date: "26 July 2025",
    location: "Ratan Naval Tata Auditorium - GNI",
    description:
      "The IEEE GNI Orientation Day welcomed new students, offering an introduction to the IEEE Student Branch’s vision, mission, and opportunities. Students explored technical domains and met the team.",
    img: orientation,
    registrationLink: null,
    detailsPage: "/orientation",
  },
];

function EventCard({ event, index }) {
  return (
    <div
      className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-gradient transform transition-all duration-500 cursor-pointer hover:scale-[1.03] hover:shadow-2xl animate-fadeUp h-full flex flex-col"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden rounded-t-xl h-60 sm:h-64 md:h-72 lg:h-64 xl:h-72">
        <img
          src={event.img}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between bg-black/70 backdrop-blur-sm flex-grow">
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-gradientPinkPurple transition-all duration-500">
            {event.title}
          </h3>
          <p className="text-gray-300 text-sm mb-3 break-words">{event.description}</p>
          <div className="flex flex-col gap-1 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} className="text-pink-400" />
              {event.date}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-purple-400" />
              {event.location}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          {/* Show different button for upcoming events without registration link */}
          {event.registrationLink ? (
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-4 bg-gradient-to-r from-pink-600 via-purple-700 to-cyan-600 rounded-md text-white font-medium text-sm text-center shadow-lg hover:shadow-xl transition-all duration-500"
            >
              Register Now
            </a>
          ) : upcomingEvents.find(e => e.id === event.id) ? ( 
            <div className="w-full py-2 px-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 rounded-md text-white font-medium text-sm text-center flex items-center justify-center gap-2 animate-pulse">
              <Sparkles size={16} /> Registrations Opening Soon
            </div>
          ) : (
            <div className="w-full py-2 px-4 bg-gray-700 rounded-md text-gray-300 font-medium text-sm text-center flex items-center justify-center gap-2">
              <XCircle size={16} /> Registration Closed
            </div>
          )}

          {event.detailsPage && (
            <Link
              to={event.detailsPage}
              className="w-full py-2 px-4 border border-gray-600 rounded-md text-gray-200 text-sm text-center hover:bg-gray-800 transition-all duration-500 flex justify-center items-center gap-1"
            >
              Explore Event <Sparkles size={16} className="text-yellow-300" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <div className="min-h-screen px-4 md:px-12 pt-28 pb-16 bg-black text-white flex flex-col gap-16">
      {/* Upcoming Events */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Upcoming Events
        </h2>
        <p className="text-gray-300 mb-8 max-w-3xl">
          Stay updated with our upcoming events and mark your calendars for innovative and engaging experiences.
        </p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[1fr]">
          {upcomingEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </section>

      {/* Previous Events */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Previous Events
        </h2>
        <p className="text-gray-300 mb-8 max-w-3xl">
          Here are some of the events we have successfully conducted in the past.
        </p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[1fr]">
          {previousEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.8s ease-out forwards;
        }
        .text-gradientPinkPurple {
          background: linear-gradient(90deg, #ec4899, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .border-gradient {
          border-image: linear-gradient(to right, #ec4899, #8b5cf6) 1;
        }
      `}</style>
    </div>
  );
}
