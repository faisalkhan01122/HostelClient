import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Sarah Martinez",
    role: "COO of Apex Solutions",
    text: "Choosing Bokinn was one of the best decisions we've ever made. They have proven to be a reliable and innovative partner, always ready to tackle new challenges with and expertise. Their commitment to and delivering tailored.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "James Carter",
    role: "CEO of TechCore",
    text: "Working with Bokinn has been a seamless journey. Their team is proactive, attentive, and detail-oriented. They delivered exactly what we envisioned!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-[#141414] text-white py-20 px-4 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center items-center gap-1 text-yellow-500 ">
        <h3 className="text-[#c4a075] font-medium tracking-wide mb-2 text-lg">
          <img src="https://moonlit-django.netlify.app/assets/images/shape/section__style__three-1.svg" className="inline-block  mx-2 align-middle" />
          Testimonial
          <img src="https://moonlit-django.netlify.app/assets/images/shape/section__style__two.svg" className="inline-block mx-2 align-middle" />
        </h3>
        </div>
        <h2 className="text-3xl md:text-3xl font-serif ">What Our Client Say</h2>
      </motion.div>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="max-w-4xl mx-auto"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center text-center px-4">
              <div className="flex justify-center mb-3">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} className="text-[#C4A075] text-xl mx-1" />
                  ))}
              </div>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                {item.text}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full border-2 border-yellow-500"
                />
                <div>
                  <h4 className="font-semibold text-lg">{item.name}</h4>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSection;
