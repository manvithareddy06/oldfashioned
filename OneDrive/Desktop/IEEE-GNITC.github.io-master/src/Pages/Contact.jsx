import React from "react";
import {
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoGithub,
  IoLogoWhatsapp,
} from "react-icons/io";
import {
  FaDiscord,
  FaSquareXTwitter,
  FaReddit,
  FaInstagram,
} from "react-icons/fa6";

export default function Contact() {
  const socialLinks = [
    { Icon: IoLogoLinkedin, url: "https://linkedin.com/company/ieee-gnitc" },
    { Icon: IoLogoYoutube, url: "https://www.youtube.com/channel/UCrG5uoqFoiS31ZauRihrQXA" },
    { Icon: FaInstagram, url: "https://www.instagram.com/ieee_gni/" },
    { Icon: FaSquareXTwitter, url: "https://twitter.com/IEEE_GNITC" },
    { Icon: FaReddit, url: "https://www.reddit.com/r/ieee_gnitc/" },
    { Icon: IoLogoWhatsapp, url: "https://wa.me/918008243308" },
    { Icon: IoLogoGithub, url: "https://github.com/IEEE-GNITC" },
    { Icon: FaDiscord, url: "https://discord.gg/4G3jXV7" },
  ];

  return (
    <footer id="contact" className="w-full bg-black text-white py-16 px-6 md:px-20">
      {/* ===== Desktop Layout ===== */}
      <div className="hidden md:grid max-w-screen-xl mx-auto grid-cols-4 gap-16 text-left">
        {/* About */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold tracking-widest uppercase">IEEE GNI</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            IEEE GNI is dedicated to fostering innovation, collaboration, 
            and learning in the fields of technology, research, and development.
          </p>
        </div>

        {/* IEEE GNI Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold tracking-widest uppercase ml-5">IEEE GNI</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="hover:text-white transition">About Us</li>
            <li className="hover:text-white transition">Careers</li>
            <li className="hover:text-white transition">Blog</li>
            <li className="hover:text-white transition">Events</li>
            <li className="hover:text-white transition">Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold tracking-widest uppercase ml-5">Resources</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="hover:text-white transition">Documentation</li>
            <li className="hover:text-white transition">Support</li>
            <li className="hover:text-white transition">Community</li>
            <li className="hover:text-white transition">Research Papers</li>
            <li className="hover:text-white transition">Workshops</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold tracking-widest uppercase">Contact</h4>
          <div className="space-y-3 text-sm text-gray-300">
            <p><span className="font-semibold">Email:</span> ieee_gnitc@gniindia.org</p>
            <div className="space-y-1">
              <p className="font-semibold">Abhinav Erolla</p>
              <p>abhinaverolla7@gmail.com</p>
              <p>📞 +91 96183 86000</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">P R S Santosh Naidu</p>
              <p>prssn.raja@gmail.com</p>
              <p>📞 +91 70753 51027</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Mobile Layout ===== */}
      <div className="md:hidden mx-auto flex flex-col gap-10 items-center max-w-md w-full">
        {/* About */}
        <div className="space-y-4 w-full text-left ml-10">
          <h4 className="text-lg font-bold tracking-widest uppercase">IEEE GNI</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            IEEE GNI is dedicated to fostering innovation, collaboration, 
            and learning in the fields of technology, research, and development.
          </p>
        </div>

        {/* Links stacked */}
        <div className="grid grid-cols-2 gap-6 w-full text-left">
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-widest uppercase ml-5">IEEE GNI</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="hover:text-white transition">About Us</li>
              <li className="hover:text-white transition">Careers</li>
              <li className="hover:text-white transition">Blog</li>
              <li className="hover:text-white transition">Events</li>
              <li className="hover:text-white transition">Contact</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-widest uppercase ml-5">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="hover:text-white transition">Documentation</li>
              <li className="hover:text-white transition">Support</li>
              <li className="hover:text-white transition">Community</li>
              <li className="hover:text-white transition">Research Papers</li>
              <li className="hover:text-white transition">Workshops</li>
            </ul>
          </div>
        </div>

        {/* Contact - Centered on Mobile */}
        <div className="flex justify-center w-full">
          <div className="space-y-5 text-left text-sm text-gray-300 max-w-xs">
            <h4 className="text-sm font-bold tracking-widest uppercase">Contact</h4>
            <p><span className="font-semibold">Email:</span> ieee_gnitc@gniindia.org</p>
            <div>
              <p className="font-semibold">Abhinav Erolla</p>
              <p>abhinaverolla7@gmail.com</p>
              <p>📞 +91 96183 86000</p>
            </div>
            <div>
              <p className="font-semibold">P R S Santosh Naidu</p>
              <p>prssn.raja@gmail.com</p>
              <p>📞 +91 70753 51027</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Shared Social Links ===== */}
      <div className="max-w-screen-xl mx-auto mt-10 flex flex-wrap justify-center gap-4">
        {socialLinks.map(({ Icon, url }, i) => (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-300"
          >
            <Icon className="text-lg text-gray-300 hover:text-white transition-colors" />
          </a>
        ))}
      </div>

      {/* ===== Shared Footer Bar ===== */}
      <div className="max-w-screen-xl mx-auto mt-8 border-t border-white/20 pt-6 text-center">
        <p className="text-xs tracking-wide text-gray-400">
          © {new Date().getFullYear()} <span className="font-bold text-white">IEEE GNI</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
