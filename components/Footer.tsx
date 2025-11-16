// "use client";

// import { Box } from "@mui/material";
// import { FaLinkedin, FaGithub } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <Box className="text-center p-6 bg-[#a83269] text-white mt-10">

//       {/* SOCIAL ICONS */}
//       <div className="flex justify-center gap-6 mb-3 text-2xl">

//         <a
//           href="https://www.linkedin.com/in/sadhana-chaudhary-21b196261"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-gray-200 transition"
//         >
//           <FaLinkedin />
//         </a>

//         <a
//           href="https://github.com/Xyzqb"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-gray-200 transition"
//         >
//           <FaGithub />
//         </a>

//       </div>

//       {/* COPYRIGHT */}
//       <p className="text-sm">
//         © 2025 Sadhana Chaudhary. All Rights Reserved.
//       </p>

//     </Box>
//   );
// }



"use client";
import { Box } from "@mui/material";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Box className="text-center p-6 bg-[#a83269] text-white">
      
      <div className="flex justify-center gap-6 text-2xl mb-3">
        <a href="https://www.linkedin.com/in/sadhana-chaudhary-21b196261" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Xyzqb" target="_blank">
          <FaGithub />
        </a>
      </div>

      <p className="text-sm">
        © 2025 Sadhana Chaudhary. All Rights Reserved.
      </p>

    </Box>
  );
}
