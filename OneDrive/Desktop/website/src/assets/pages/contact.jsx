// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";   // Import Link
import logo from "../pictures/x.png";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const services = [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "AI Agents & Bots",
    "Digital Marketing",
  ];

  const companyLinks = [
    { name: "About Us", to: "/about" },    // <-- link object
    { name: "Case Studies" },
    { name: "Careers" },
    { name: "Blog" },
    { name: "Contact" },
  ];
  const resources = ["Documentation", "Support"];

  return (
    <footer
      id="contact"
      className="bg-black text-gray-300 py-12 px-6 md:px-12 lg:px-20"
    >
      {/* Desktop Layout */}
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-start gap-12">
        {/* Left: Logo & Description */}
        <div className="w-full md:max-w-sm space-y-4">
          <img src={logo} alt="Xytrix Logo" className="w-28 md:w-36" />
          <p className="text-sm text-gray-400 leading-relaxed">
            - Where Creativity Meets Technology 
          </p>
        </div>

        {/* Right: Links Grid */}
        <div className="flex flex-1 justify-between gap-8">
          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {services.map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-cyan-400 cursor-pointer transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {companyLinks.map((item, idx) => (
                <li key={idx} className="hover:text-cyan-400 cursor-pointer transition-colors duration-200">
                  {item.to ? (
                    <Link to={item.to} className="block">
                      {item.name}
                    </Link>
                  ) : (
                    item.name
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {resources.map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-cyan-400 cursor-pointer transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col gap-12">
        {/* Logo & Description */}
        <div className="text-center space-y-4">
          <img src={logo} alt="Xytrix Logo" className="w-24 mx-auto" />
          <p className="text-sm text-gray-400 leading-relaxed max-w-md mx-auto">
            Xytrix - Where Creativity Meets Technology
          </p>
        </div>

        {/* Services + Company */}
        <div className="grid grid-cols-2 gap-8 text-center">
          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {services.map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-cyan-400 cursor-pointer transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {companyLinks.map((item, idx) => (
                <li key={idx} className="hover:text-cyan-400 cursor-pointer transition-colors duration-200">
                  {item.to ? (
                    <Link to={item.to} className="block">
                      {item.name}
                    </Link>
                  ) : (
                    item.name
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resources Centered */}
        <div className="text-center">
          <h4 className="text-white font-semibold text-base mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {resources.map((item, idx) => (
              <li
                key={idx}
                className="hover:text-cyan-400 cursor-pointer transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Media Icons (bottom right on desktop, centered on mobile) */}
      <div className="mt-10 flex justify-center md:justify-end gap-6">
        <a
          href="https://www.instagram.com/code.musee/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-cyan-400 cursor-pointer transition-colors duration-200"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://www.facebook.com/share/17ErLpq7RW/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-cyan-400 cursor-pointer transition-colors duration-200"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/_ft_studios"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="hover:text-cyan-400 cursor-pointer transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M20.1 3H17.4L12.9 9.3L8.9 3H3L10.7 14.6L3.2 21H6.1L11.1 15.3L15.4 21H21L13 9.1L20.1 3Z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/company/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-cyan-400 cursor-pointer transition-colors duration-200"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center">
        <p className="text-sm text-gray-500 font-bold">
          &copy; {new Date().getFullYear()} Xytrix. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
