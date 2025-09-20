import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const timeout = setTimeout(() => setLogoVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (target) => {
    if (isHome) {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${target}`);
    }
    setIsOpen(false);
  };

  const navItem = (label, target, index = 0, isMobile = false) => {
    const baseClass =
      "text-sm font-medium cursor-pointer transition duration-300 relative group";
    const hoverClass = "hover:text-cyan-400 hover:scale-105";

    if (isMobile) {
      return (
        <span
          key={label}
          onClick={() => handleNavClick(target)}
          className={`${baseClass} text-slate-200 w-full text-center py-3 opacity-0 animate-fadeInUp`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {label}
        </span>
      );
    }

    return (
      <span
        key={label}
        onClick={() => handleNavClick(target)}
        className={`${baseClass} text-slate-200 nav-desktop-item ${hoverClass} whitespace-nowrap`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
      </span>
    );
  };

  return (
    <div className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-gray-700 shadow-lg transition-colors duration-500">
      <style>{`
        @keyframes slideUpBounce {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          60% {
            opacity: 1;
            transform: translateY(-10px);
          }
          80% {
            transform: translateY(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .nav-desktop-item {
          opacity: 0;
          animation-name: slideUpBounce;
          animation-duration: 600ms;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
          display: inline-block;
        }
        .nav-desktop-item:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.4s ease forwards;
        }
        /* Hide scrollbar for horizontal scroll */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="flex items-center justify-between px-4 py-2 md:px-8 md:h-14">
        {/* Logo */}
        <div
          className={`flex items-center mr-auto transition-all duration-700 ease-out ${
            logoVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <span onClick={() => handleNavClick("home")}>
            <img
              src={logo}
              alt="Gnitc"
              className="h-7 md:h-10 w-auto rounded-xl cursor-pointer transform transition-all duration-500 hover:scale-110 hover:rotate-1"
            />
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex overflow-x-auto hide-scrollbar gap-x-5 lg:gap-x-6 items-center font-medium whitespace-nowrap ml-auto">
          {navItem("About Us", "aboutus", 0)}
          {navItem("Societies", "societies", 1)}
          {navItem("Explore Events", "events", 2)}

          <RouterLink
            to="/events"
            className="cursor-pointer text-slate-200 hover:text-cyan-400 transition-all duration-300 relative group whitespace-nowrap"
          >
            Happening Now!
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </RouterLink>

          {navItem("Top Leadership", "topleadership", 3)}
          {navItem("Faculty Advisors", "advisors", 4)}
          {navItem("Our Team", "team", 5)}
          {navItem("Contact Us", "contact", 6)}

          <RouterLink
            to="/PreviousTeam"
            className="cursor-pointer text-slate-200 hover:text-cyan-400 transition-all duration-300 relative group whitespace-nowrap"
          >
            Previous Team
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </RouterLink>

          <a
            href="https://hackarena.ieeegnitc.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-slate-200 hover:text-cyan-400 transition-all duration-300 relative group whitespace-nowrap"
          >
            HackArena
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="https://www.ieee.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-slate-200 hover:text-cyan-400 transition-all duration-300 relative group whitespace-nowrap"
          >
            IEEE.org
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center text-white">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-500"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-[56px] left-0 w-full transform transition-all duration-500 z-50 shadow-lg ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
        style={{ background: "black" }}
      >
        <div className="relative flex flex-col items-center text-slate-200 text-sm font-medium py-4 space-y-2">
          {navItem("About Us", "aboutus", 0, true)}
          {navItem("Societies", "societies", 1, true)}
          {navItem("Explore Events", "events", 2, true)}

          <RouterLink
            to="/events"
            onClick={closeMenu}
            className="w-full text-center py-3 text-sm font-medium hover:text-cyan-400 transition duration-300 opacity-0 animate-fadeInUp"
            style={{ animationDelay: `350ms` }}
          >
            Happening Now!
          </RouterLink>

          {navItem("Top Leadership", "topleadership", 3, true)}
          {navItem("Faculty Advisors", "advisors", 4, true)}
          {navItem("Our Team", "team", 5, true)}
          {navItem("Contact Us", "contact", 6, true)}

          <RouterLink
            to="/PreviousTeam"
            onClick={closeMenu}
            className="w-full text-center py-3 text-sm font-medium hover:text-cyan-400 transition duration-300 opacity-0 animate-fadeInUp"
            style={{ animationDelay: `700ms` }}
          >
            Previous Team
          </RouterLink>

          <a
            href="https://hackarena.ieeegnitc.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3 text-sm font-medium hover:text-cyan-400 transition duration-300 opacity-0 animate-fadeInUp"
            style={{ animationDelay: `800ms` }}
          >
            HackArena
          </a>

          <a
            href="https://www.ieee.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3 text-sm font-medium hover:text-cyan-400 transition duration-300 opacity-0 animate-fadeInUp"
            style={{ animationDelay: `900ms` }}
          >
            IEEE.org
          </a>
        </div>
      </div>
    </div>
  );
}
