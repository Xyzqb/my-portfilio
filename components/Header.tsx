// "use client";

// import Link from "next/link";
// import { AppBar, Toolbar, Button } from "@mui/material";

// export default function Header() {
//   return (
//     <AppBar
//       position="static"
//       sx={{
//         backgroundColor: "#a83269", // Your pink theme color
//         boxShadow: "none",
//         width:"full",
//         height:"full"
//       }}
//     >
//       <Toolbar className="flex gap-4 justify-between">
//         {/* MENU LINKS */}
//         <Button color="inherit" component={Link} href="/">Home</Button>
//         {/* <Button color="inherit" component={Link} href="/about">About</Button> */}
//         <Button color="inherit" component={Link} href="/skills">Skills</Button>
//         <Button color="inherit" component={Link} href="/education">Education</Button>
//         <Button color="inherit" component={Link} href="/projects">Projects</Button>
//         <Button color="inherit" component={Link} href="/contact">Contact</Button>

//         {/* PUSH ITEMS TO RIGHT */}
//         <div className="flex-1" />

//         {/* CONTACT BUTTONS */}
//         <a
//           href="tel:9569786142"
//           className="px-4 py-2 bg-white text-[#a83269] rounded-md font-semibold hover:bg-gray-100 transition"
//         >
//           Download Resume
//         </a>
//       </Toolbar>
//     </AppBar>
//   );
// }


"use client";

import Link from "next/link";
import { AppBar, Toolbar, Button } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#a83269",
        boxShadow: "none",
        width: "100%",
      }}
    >
      <Toolbar className="flex gap-4 justify-between">
        
        {/* MENU LINKS */}
        <Button color="inherit" component={Link} href="/">Home</Button>
        <Button color="inherit" component={Link} href="/skills">Skills</Button>
        <Button color="inherit" component={Link} href="/education">Education</Button>
        <Button color="inherit" component={Link} href="/projects">Projects</Button>
        <Button color="inherit" component={Link} href="/contact">Contact</Button>

        {/* PUSH ITEMS TO RIGHT */}
        <div className="flex-1" />

        {/* DOWNLOAD RESUME BUTTON */}
        <a
          href="/SadhanaChaudhary.pdf"   // File inside public folder
          download="Sadhana-Chaudhary-Resume.pdf"
          className="px-4 py-2 bg-white text-[#a83269] rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Download Resume
        </a>
      </Toolbar>
    </AppBar>
  );
}
