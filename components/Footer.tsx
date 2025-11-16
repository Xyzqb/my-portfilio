// "use client";
// import { Box } from "@mui/material";
// import { FaLinkedin, FaGithub } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <Box className="text-center p-6 bg-[#a83269] text-white">
      
//       <div className="flex justify-center gap-6 text-2xl mb-3">
//         <a href="https://www.linkedin.com/in/sadhana-chaudhary-21b196261" target="_blank">
//           <FaLinkedin />
//         </a>
//         <a href="https://github.com/Xyzqb" target="_blank">
//           <FaGithub />
//         </a>
//       </div>

//       <p className="text-sm">
//         © 2025 Sadhana Chaudhary. All Rights Reserved.
//       </p>

//     </Box>
//   );
// }

// "use client";
// import { Box } from "@mui/material";
// import { FaLinkedin, FaGithub } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <Box className="p-6 bg-[#a83269] text-white">
      
//       {/* CONTENT WRAPPER */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

//         {/* LEFT SIDE */}
//         <div className="text-left font-bold leading-6">
//           <p>Village:- Saha </p>
//           <p>Grokahpur, Uttar Pradesh</p>
//           <p>📞 9569786142</p>
//         </div>

//         {/* CENTER ICONS */}
//         <div className="flex justify-center gap-8 text-3xl">
//           <a
//             href="https://www.linkedin.com/in/sadhana-chaudhary-21b196261"
//             target="_blank"
//             className="hover:text-gray-300 transition"
//           >
//             <FaLinkedin />
//           </a>

//           <a
//             href="https://github.com/Xyzqb"
//             target="_blank"
//             className="hover:text-gray-300 transition"
//           >
//             <FaGithub />
//           </a>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="text-right font-bold leading-6">
//           <p>
//             📧{" "}
//             <a
//               href="mailto:Rahulkumar753686@gmail.com"
//               className="underline hover:text-gray-300"
//             >
//               sadhana.chdry@gmail.com
//             </a>
//           </p>
//         </div>
//       </div>

//       {/* COPYRIGHT */}
//       <p className="text-center text-sm mt-6 font-semibold">
//         © 2025 Sadhana Chaudhary. All Rights Reserved.
//       </p>
//     </Box>
//   );
// }



"use client";

import { Box } from "@mui/material";
import { FaLinkedin, FaGithub, FaHome, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <Box className="p-6 bg-[#a83269] text-white">

      {/* CONTENT WRAPPER */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

        {/* LEFT SIDE */}
        <div className="text-left font-bold leading-7 space-y-1">
          <p className="flex items-center gap-2">
            <FaHome className="text-xl" /> City: Guar City 1
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-xl" /> Greater Noida, Uttar Pradesh
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-xl" /> 9569786189
          </p>
        </div>

        {/* CENTER ICONS */}
        <div className="flex justify-center gap-8 text-4xl">
          <a
            href="https://www.linkedin.com/in/sadhana-chaudhary-21b196261"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Xyzqb"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-right font-bold leading-7 space-y-1">
          <p className="flex justify-end items-center gap-2">
            <FaEnvelope className="text-xl" />
            <a
              href="mailto:sadhana.chdry@gmail.com"
              className="underline hover:text-gray-300"
            >
              sadhana.chdry@gmail.com
            </a>
          </p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <p className="text-center text-sm mt-6 font-semibold">
        © 2025 Sadhana Chaudhary. All Rights Reserved.
      </p>
    </Box>
  );
}
