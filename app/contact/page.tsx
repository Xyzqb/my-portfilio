// "use client";

// import { Container, Typography, Box, Link } from "@mui/material";

// export default function Contact() {
//   return (
//     <Container
//       maxWidth="md"
//       sx={{
//         // backgroundColor: "#ffe6f2",
//         padding: 4,
//         borderRadius: 4,
//         mt: 4,
//         boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//       }}
//     >
//       {/* Heading */}
//       <Typography
//         variant="h4"
//         sx={{
//           color: "var(--theme-color)",
//           fontWeight: 700,
//           textAlign: "center",
//           mb: 3,
//           wordSpacing: "6px",
//         }}
//       >
//         Welcome To Contact Page
//       </Typography>

//       {/* Contact Details */}
//       <Box sx={{ textAlign: "center", lineHeight: 2 }}>
//         <Typography>
//           <strong>Name:</strong> Sadhana Chaudhary
//         </Typography>

//         <Typography>
//           <strong>Email:</strong>{" "}
//           <Link href="mailto:sadhana.chdry@gmail.com" underline="hover">
//             sadhana.chdry@gmail.com
//           </Link>
//         </Typography>

//         <Typography>
//           <strong>Phone:</strong> +91 9569786142
//         </Typography>
//       </Box>
//     </Container>
//   );
// }


"use client";
import { Container, Typography, Box, Link } from "@mui/material";

export default function Contact() {
  return (
    <Box sx={{ background: "#FCE4EC", py: 6 }}> 
      {/* Light Pink Background */}
      <Container maxWidth="lg" className="container">
        
        <Typography 
          variant="h4" 
          sx={{ 
            color: "var(--theme-color)", 
            fontWeight: 700,
            textAlign: "center",
            mb: 3 
          }}
        >
          Welcome To Contact Page
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, textAlign: "center" }}>
          <Typography><strong>Name:</strong> Sadhana Chaudhary</Typography>
          <Typography>
            <strong>Email:</strong>{" "}
            <Link href="mailto:sadhana.chdry@gmail.com">sadhana.chdry@gmail.com</Link>
          </Typography>
          <Typography><strong>Phone:</strong> +91 9569786142</Typography>
        </Box>

      </Container>
    </Box>
  );
}
