// components/HeroSection.jsx
import React, { useState } from "react";
import { FaArrowUp, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Home", "Rooms", "Pages", "Blog", "Contact"];

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/4880311/4880311-sd_640_360_25fps.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-20 bg-black/60 px-4 md:px-16 py-4 flex justify-between items-center">
           {/* Center: Nav Links (Desktop) */}
           <ul className="hidden md:flex gap-6 text-white text-sm font-semibold">
          {navLinks.map((link, idx) => (
            <li key={idx} className="cursor-pointer hover:text-yellow-400 transition">
              {link}
            </li>
          ))}
        </ul>
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://moonlit-django.netlify.app/assets/images/logo/logo__two.svg"
            alt="Logo"
            className="w-24 h-8 object-contain"
          />
        </div>

    

        {/* Right: Address */}
        <div className="hidden md:flex items-center justify-center text-white text-xs text-left gap-2 max-w-sm">
          <FaMapMarkerAlt className="text-yellow-500 " />
          <span className="leading-tight font-medium">
            Near RehmanAbad Stop, Satellite Town, Rawalpindi
          </span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-xl cursor-pointer z-30" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-black/80 z-20 flex flex-col items-center gap-4 py-6 text-white font-semibold"
          >
            {navLinks.map((link, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.1, color: "#facc15" }} // yellow-400
                className="cursor-pointer text-lg"
              >
                {link}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl md:text-5xl lg:text-6xl font-light leading-snug font-serif max-w-4xl"
        >
          Luxury Hostel <br />
          Experience Comfort & Elegance
        </motion.h1>
      </div>

      {/* Scroll-to-top Button */}
      <button className="fixed bottom-5 right-5 z-30 bg-yellow-600 text-white p-3 rounded-full hover:bg-yellow-500 shadow-md transition">
        <FaArrowUp className="text-base" />
      </button>
    </div>
  );
};

export default HeroSection;
