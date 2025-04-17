// import React from "react";

// const VideoThumbnail = () => {
//   return (
//     <div className="bg-[#222] flex justify-center items-center py-12 px-4">
//       <div className="relative rounded-2xl overflow-hidden max-w-4xl w-full">
//         <img
//           src="https://images.unsplash.com/photo-1618522786784-88c35429eb7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Bedroom Design"
//           className="w-full h-[80vh] rounded-2xl"
//         />

//         <div className="absolute inset-0 flex justify-center items-center">
//           <div className="relative w-32 h-32 flex border border-white rounded-full p-2 items-center justify-center cursor-pointer group">
//             {/* Rotating Text Circle */}
//             <svg
//               className="absolute w-full h-full animate-spin-slow"
//               viewBox="0 0 100 100"
//             >
//               <defs>
//                 <path
//                   id="circlePath"
//                   d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
//                 />
//               </defs>
//               <text
//                 fill="white"
//                 fontSize="6"
//                 fontWeight="bold"
//                 letterSpacing="1px"
//               >
//                 <textPath href="#circlePath" startOffset="0%">
//                   WATCH FULL VIDEO • WATCH FULL VIDEO • WATCH FULL VIDEO •
//                 </textPath>
//               </text>
//             </svg>

//             {/* Static Play Button */}
//             <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-all duration-300">
//               <svg
//                 className="w-8 h-8 text-white"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M6.5 5.5v9l8-4.5-8-4.5z" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoThumbnail;
import React, { useState } from "react";

const VideoThumbnail = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Background Container */}
      <div className="bg-[#1F1F1F] flex justify-center items-center py-12 px-4">
        <div className="relative rounded-2xl overflow-hidden max-w-5xl w-full shadow-xl">
          {/* Thumbnail Image */}
          <img
            src="https://images.unsplash.com/photo-1618522786784-88c35429eb7a?q=80&w=2070&auto=format&fit=crop"
            alt="Thumbnail"
            className="w-full h-[80vh] object-cover rounded-2xl"
          />

          {/* Play Button + Rotating Text */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div
              onClick={() => setIsOpen(true)}
              className="relative w-28 h-28 border border-gray-400  rounded-full cursor-pointer flex items-center justify-center group"
            >
              {/* Spinning Text */}
              <svg
                className="absolute w-full h-full p-1 animate-rotate-slow text-white"
                viewBox="0 0 100 100"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                  />
                </defs>
                <text
                  fill="white"
                  fontSize="7"
                  fontWeight="bold"
                  letterSpacing="1px"
                >
                  <textPath href="#circlePath" startOffset="0%">
                    WATCH FULL VIDEO • WATCH FULL VIDEO • WATCH FULL VIDEO •
                  </textPath>
                </text>
              </svg>

              {/* Glowing Play Button */}
              <div className="w-16 h-16 rounded-full backdrop-blur-md flex items-center justify-center z-10 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.5 5.5v9l8-4.5-8-4.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl">
            {/* Responsive YouTube Embed */}
            <div className="aspect-w-16 aspect-h-20">
              <iframe
                className="w-full h-[70vh] rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="YouTube Video"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>

            {/* Close Button */}
            <button
              className="absolute -top-6 -right-6 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-md"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoThumbnail;
