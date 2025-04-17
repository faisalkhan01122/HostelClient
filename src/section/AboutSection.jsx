import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="min-h-screen bg-[#1F1F1F] text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 scroll-smooth"
    >
      {/* Left Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2"
      >
        <div className="flex items-center gap-2 mb-4">
          {/* <span className="text-[#B88E51] text-xl"></span> */}
          <img src="https://moonlit-django.netlify.app/assets/images/shape/section__style__two.svg" alt="" />
          <span className="text-[#B88E51] text-xl">
        About Us
          </span>
        </div>
        <h2 className="text-3xl md:text-3xl font-serif leading-tight mb-6">
          Welcome To Our <br /> Moonlit Hostel & Resort
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Welcome to Bokinn, where luxury meets comfort in the heart of Canada.
          Since 1999, we have been dedicated to providing an exceptional stay
          for our guests, blending modern amenities with timeless elegance. Our
          beautifully designed rooms and suites offer stunning views and plush
          accommodations, ensuring a restful retreat whether you're here for
          business or leisure.
        </p>
        <button className="bg-[#B88E51] px-3 py-2 rounded-md">Read More </button>
      </motion.div>

      {/* Right Side - Image and Card */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 mt-10 md:mt-0 relative"
      >
        <img
          src="https://images.unsplash.com/photo-1611444756156-bbe40e0a2e56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Luxury Room"
          className="rounded-xl  md:w-[50vw] w-[90vw] object-cover h-[90vh] shadow-lg"
        />

        {/* Floating Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-5 right-5 bg-black bg-opacity-80 text-white rounded-xl px-4 py-3 flex items-center gap-4 shadow-lg"
        >
          <div className="bg-white p-4 rounded-xl">
            <FaUsers className="text-[#B88E51] text-2xl" />
          </div>
          <div>
            <p className="text-2xl font-semibold">50+</p>
            <p className="text-sm text-gray-300">Experience Staff</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
