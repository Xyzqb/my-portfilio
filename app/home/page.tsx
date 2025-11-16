// import { Box, Button, Container, Typography } from "@mui/material";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <Container maxWidth="lg" className="container">
//       <Box className="hero">
//         <Typography component="h1" variant="h3">HI, I'M RAHUL KUMAR</Typography>
//         <Typography component="h2" variant="h5">ANDROID APPLICATION DEVELOPER</Typography>
//         <Button
//           variant="contained"
//           sx={{ mt: 3, backgroundColor: "var(--theme-color)" }}
//           component={Link}
//           href="/contact"
//         >
//           CONTACT
//         </Button>
//         <Button
//           variant="outlined"
//           sx={{ mt: 3, ml: 2, borderColor: "var(--theme-color)", color: "var(--theme-color)" }}
//           component={Link}
//           href="/projects"
//         >
//           PROJECTS
//         </Button>
//       </Box>
//     </Container>
//   );
// }


import { Box, Typography, Button } from "@mui/material";

export default function HomePage() {
  return (
    <Box className="p-10 text-center">
      <Typography variant="h2" color="primary" fontWeight="bold">
        HI, I'M SADHANA CHAUDHARY
      </Typography>

      <Typography variant="h4" className="mt-4">
        FULL STACK DEVELOPER
      </Typography>

      <Button
        variant="contained"
        color="primary"
        href="/contact"
        className="mt-6"
      >
        Contact Me
      </Button>
    </Box>
  );
}
