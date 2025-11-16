// "use client";
// import Link from "next/link";
// import { AppBar, Toolbar, Button, Container } from "@mui/material";

// export default function Header() {
//   return (
//     <AppBar position="static" sx={{ background: "var(--theme-color)" }}>
//       <Container maxWidth="lg">
//         <Toolbar disableGutters sx={{ display: "flex", gap: 1 }}>
//           <Button color="inherit" component={Link} href="/">Home</Button>
//           <Button color="inherit" component={Link} href="/about">About</Button>
//           <Button color="inherit" component={Link} href="/skills">Skills</Button>
//           <Button color="inherit" component={Link} href="/education">Education</Button>
//           <Button color="inherit" component={Link} href="/projects">Projects</Button>
//           <Button color="inherit" component={Link} href="/contact">Contact</Button>
//           <div style={{ flex: 1 }} />
//           {/* optional social links */}
//           <Button color="inherit" component="a" href="https://github.com/your-github" target="_blank">GitHub</Button>
//           <Button color="inherit" component="a" href="https://linkedin.com/in/your-linkedin" target="_blank">LinkedIn</Button>
//         </Toolbar>
//       </Container>
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
        backgroundColor: "#a83269", // Your pink theme color
        boxShadow: "none",
        width:"full",
        height:"full"
      }}
    >
      <Toolbar className="flex gap-4 justify-evenly">
        {/* MENU LINKS */}
        <Button color="inherit" component={Link} href="/">Home</Button>
        {/* <Button color="inherit" component={Link} href="/about">About</Button> */}
        <Button color="inherit" component={Link} href="/skills">Skills</Button>
        <Button color="inherit" component={Link} href="/education">Education</Button>
        <Button color="inherit" component={Link} href="/projects">Projects</Button>
        <Button color="inherit" component={Link} href="/contact">Contact</Button>

        {/* PUSH ITEMS TO RIGHT */}
        <div className="flex-1" />

        {/* CONTACT BUTTONS */}
        <a
          href="tel:9569786142"
          className="px-4 py-2 bg-white text-[#a83269] rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Call Now
        </a>

        <a
          href="mailto:sadhana.chdry@gmail.com"
          className="px-4 py-2 bg-white text-[#a83269] rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Email
        </a>
      </Toolbar>
    </AppBar>
  );
}
