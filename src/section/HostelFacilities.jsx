// HostelFacilities.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaBed, FaUserShield, FaDumbbell, FaSwimmingPool, FaArrowUp } from "react-icons/fa";

const facilities = [
  {
    icon: <img src="https://moonlit-django.netlify.app/assets/images/icon/bed.svg" className="text-4xl text-[#c4a075]" />,
    title: "Rooms and Suites",
    desc: "Varied types of rooms, from standard to luxury suites, equipped with essentials like beds.",
  },
  {
    icon: <img src="https://moonlit-django.netlify.app/assets/images/icon/security.svg" className="text-4xl text-[#c4a075]" />,
    title: "24-Hour Security",
    desc: "On-site security personnel and best surveillance. Secure storage for valuables.",
  },
  {
    icon: <img src="https://moonlit-django.netlify.app/assets/images/icon/gym.svg" className="text-4xl text-[#c4a075]" />,
    title: "Fitness Center",
    desc: "Equipped with exercise machines and weights. Offering massages, facials, and other treatments.",
  },
  {
    icon: <img src="https://moonlit-django.netlify.app/assets/images/icon/swimming-pool.svg" className="text-4xl text-[#c4a075]" />,
    title: "Swimming Pool",
    desc: "Indoor or outdoor pools for leisure or exercise. Offering massages, facials, and other treatments.",
  },
];

const HostelFacilities = () => {
  return (
    <div className="bg-black text-white py-16 relative">
      <div className="text-center mb-12">
        <h3 className="text-[#c4a075] font-medium tracking-wide mb-2 text-lg">
          <img src="https://moonlit-django.netlify.app/assets/images/shape/section__style__three-1.svg" className="inline-block  mx-2 align-middle" />
          Facilities
          <img src="https://moonlit-django.netlify.app/assets/images/shape/section__style__two.svg" className="inline-block mx-2 align-middle" />
        </h3>
        <h2 className="text-4xl md:text-4xl font-serif">Hostel Facilities</h2>
        
      </div>
      {/* <div>
        <img src="https://moonlit-django.netlify.app/assets/images/shape/facility-dark.svg" className="relative right-4 top-4" alt="" />
      </div> */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {facilities.map((facility, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#1e1e1e] p-4 rounded-lg text-center flex flex-col gap-2 items-center shadow-lg hover:shadow-xl"
          >
            <div className="mb-4">{facility.icon}</div>
            <h3 className="text-xl font-semibold ">{facility.title}</h3>
            <p className="text-gray-300 text-sm">{facility.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Scroll To Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 bg-[#c4a075] text-white p-3 rounded-full shadow-lg hover:bg-[#a98863] transition-all duration-300"
      >
        <FaArrowUp />
      </button>

     
    </div>
  );
};

export default HostelFacilities;
