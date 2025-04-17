import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1b1b1b] text-gray-300 pt-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-14">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 md:mb-0">
          Join Our Newsletter
        </h2>
        <div className="flex items-center w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your mail"
            className="w-full md:w-96 p-3 rounded-md bg-[#2a2a2a] text-sm focus:outline-none focus:ring focus:ring-[#8c6b4f]"
          />
          <button className="ml-3 px-5 py-3 bg-[#8c6b4f] rounded-md text-white hover:bg-[#a37858] transition duration-300">
            Subscribe
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
        <div>
          {/* <h3 className="flex items-center gap-2 text-xl font-serif text-white mb-4">
            🌙 Moonlit
          </h3> */}
              <div className="flex items-center gap-2">
          <img
            src="https://moonlit-django.netlify.app/assets/images/logo/logo__two.svg"
            alt="Logo"
            className="w-24 h-8 object-contain"
          />
        </div>
          <p className="text-sm leading-6">
            Each room features plush bedding, high-quality linens, and a selection of
            ensure a restful night's sleep.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-serif text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Rooms & Suites</li>
            <li>Dining</li>
            <li>Spa & Wellness</li>
            <li>Special Offers</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-serif text-white mb-4">Guest Service</h4>
          <ul className="space-y-2 text-sm">
            <li>24/7 Front Desk</li>
            <li>Parking</li>
            <li>Room Service</li>
            <li>Free Wi-Fi</li>
            <li>Concierge Service</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-serif text-white mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li><span><FaPhone/>03347534934</span></li>
            <li><MdMarkEmailUnread/>faisalkh01122@gmail.com</li>
            <li><FaLocationDot/> Near Rehmanabad Stop ,Rawalpindi</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-500">
        <p>Copyright © 2024 Moonlit. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
