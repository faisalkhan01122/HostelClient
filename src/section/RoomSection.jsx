import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaUser, FaHome } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const roomData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1615801381271-4428a1751cd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Waldorf Astoria",
    area: "35 sqm",
    guests: "2 Person",
    price: "150$",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1608403890614-ec62cb35b46e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Waldorf Astoria ",
    area: "35 sqm",
    guests: "2 Person",
    price: "150$",
  },
  {
    id: 3,
    image: "https://moonlit-django.netlify.app/assets/images/room/1.webp",
    title: "The Ritz-Carlton",
    area: "35 sqm",
    guests: "2 Person",
    price: "100$",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  arrows: false,
  pauseOnHover: true,
  centerMode: true,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
  customPaging: () => (
    <div className="w-3 h-3 bg-white/70 rounded-full mx-1 hover:bg-white transition duration-300"></div>
  ),
  dotsClass: "slick-dots flex justify-center mt-8",
};

const RoomSection = () => {
  return (
    <section className="bg-[#1f1f1f] text-white py-16 px-4 md:px-12">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
      <h3 className="text-[#c4a075] font-medium tracking-wide mb-2 text-lg">
          <img src="https://moonlit-django.netlify.app/assets/images/shape/section__style__three-1.svg" className="inline-block  mx-2 align-middle" />
          Rooms
          <img src="https://moonlit-django.netlify.app/assets/images/shape/section__style__two.svg" className="inline-block mx-2 align-middle" />
        </h3>
        {/* <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Rooms</h2> */}
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Our rooms offer a harmonious blend of comfort and elegance, crafted to provide a relaxing experience for every guest.
        </p>
      </div>

      {/* Room Slider */}
      <div className="max-w-7xl mx-auto px-4">
        <Slider {...sliderSettings}>
          {roomData.map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="px-4"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-[80vh] object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl md:text-2xl font-serif mb-2">{room.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-300 mb-3">
                    <span className="flex items-center gap-1">
                      <FaHome /> {room.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUser /> {room.guests}
                    </span>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-yellow-400">
                    {room.price}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RoomSection;
