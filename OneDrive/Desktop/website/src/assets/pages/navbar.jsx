// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../pictures/x.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "home", type: "scroll" },
    { name: "Services", href: "services", type: "scroll" },
    { name: "Contact", href: "contact", type: "scroll" },
    { name: "About", href: "/about", type: "route" }, // ✅ Added About page
  ];

  const handleNavigation = (href, type) => {
    setIsOpen(false);

    if (type === "route") {
      // Navigate to another page
      navigate(href);
      return;
    }

    // Scroll navigation
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(href);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(href);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Navigate logo click to the home page root URL (reload)
  const handleLogoClick = () => {
    setIsOpen(false);
    window.location.href = "/";
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 text-white shadow-md z-50">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo with bigger zoom and inline alignment */}
        <button
          onClick={handleLogoClick}
          className="flex items-center transition-transform duration-300 hover:scale-125"
          aria-label="Go to Home"
          type="button"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-auto object-contain"
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.href, link.type)}
              className="text-gray-300 hover:text-teal-400 transition-colors"
              type="button"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <X className="w-7 h-7 text-teal-400" />
            ) : (
              <Menu className="w-7 h-7 text-teal-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-700">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href, link.type)}
                className="text-left text-gray-300 hover:text-teal-400 transition-colors"
                type="button"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
