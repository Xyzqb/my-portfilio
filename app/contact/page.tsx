// "use client";

// import {
//   Container,
//   Typography,
//   Box,
//   Link,
//   TextField,
//   Button,
// } from "@mui/material";
// import { useState } from "react";

// export default function Contact() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault(); // stops page refresh

//     if (!email || !password) {
//       alert("Please fill all fields");
//       return;
//     }

//     console.log("Logged In:", email, password);
//     alert("Login Successful!");
//   };

//   return (
//     <Box sx={{ background: "#FCE4EC", py: 6 }}>
//       <Container maxWidth="lg">
//         {/* Heading */}
//         <Typography
//           variant="h4"
//           sx={{
//             color: "var(--theme-color)",
//             fontWeight: 700,
//             textAlign: "center",
//             mb: 3,
//           }}
//         >
//           Welcome To Contact Page
//         </Typography>

//         {/* Contact Details */}
//         <Box sx={{ textAlign: "center", lineHeight: 1.8, mb: 4 }}>
//           <Typography>
//             <strong>Name:</strong> Sadhana Chaudhary
//           </Typography>
//           <Typography
//             sx={{
//               mr: -6,
//             }}
//           >
//             <strong>Email:</strong>{" "}
//             <Link href="mailto:sadhana.chdry@gmail.com">
//               sadhana.chdry@gmail.com
//             </Link>
//           </Typography>
//           <Typography  sx={{
//               mr: 5,
//             }}>
//             <strong>Phone:</strong> +91 9569786142
//           </Typography>
//         </Box>

//         {/* Login Form */}
//         <Box
//           component="form"
//           onSubmit={handleLogin}
//           sx={{
//             maxWidth: "400px",
//             mx: "auto",
//             background: "white",
//             p: 3,
//             borderRadius: 3,
//             boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
//           }}
//         >
//           <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
//             Login
//           </Typography>

//           <TextField
//             label="Email"
//             size="small"
//             fullWidth
//             sx={{ mb: 2 }}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <TextField
//             label="Password"
//             type="password"
//             fullWidth
//             size="small"
//             sx={{ mb: 3 }}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <Button
//             variant="contained"
//             type="submit"
//             fullWidth
//             sx={{
//               background: "#a83269",
//               fontWeight: 600,
//               py: 1.2,
//               ":hover": { opacity: 0.9 },
//             }}
//           >
//             Login
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// }


"use client";

import React, { useState, FormEvent } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4 max-w-md mx-auto mt-8">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="p-2 bg-[#a83269] text-white rounded font-semibold hover:bg-pink-700"
      >
        Login
      </button>
    </form>
  );
}
