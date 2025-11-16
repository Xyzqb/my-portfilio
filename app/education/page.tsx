"use client";
import { Container, Typography, Box, Card, CardContent, IconButton } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export default function Education() {
  return (
    <Container
      maxWidth="lg"
      className="container"
      sx={{
        backgroundColor: "#ffe6f2", // light pink
        // padding: 4,
        // borderRadius: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "black", fontWeight: 700, mb: 2 }}
      >
        Education Details
      </Typography>

      {/* B.Tech */}
      <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 3 }}>
        <CardContent className="flex items-center justify-between">
          <Box>
            <Typography variant="h6" fontWeight={600}>
              B.Tech in Computer Science
            </Typography>
            <Typography sx={{ color: "gray", fontSize: "14px" }}>
              ABES Engineering College
            </Typography>
            <Typography sx={{ mt: 1 }}>
              <strong>Oct 2021 – Jul 2025</strong> — Score: <strong>7.7 CGPA</strong>
            </Typography>
          </Box>

          {/* Icon button */}
          <IconButton
            href="https://www.abes.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "var(--theme-color)" }}
          >
            <AccountBalanceIcon sx={{ fontSize: 35 }} />
          </IconButton>
        </CardContent>
      </Card>

      {/* Class 12th */}
      <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 3 }}>
        <CardContent className="flex items-center justify-between">
          <Box>
            <Typography variant="h6" fontWeight={600}>
              12th (PCM)
            </Typography>
            <Typography sx={{ color: "gray", fontSize: "14px" }}>
              Noida Public School
            </Typography>
            <Typography sx={{ mt: 1 }}>
              <strong>Mar 2020 – May 2021</strong> — Score: <strong>73%</strong>
            </Typography>
          </Box>

          <IconButton
            href="https://noidapublicschool.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "var(--theme-color)" }}
          >
            <SchoolIcon sx={{ fontSize: 35 }} />
          </IconButton>
        </CardContent>
      </Card>

      {/* Class 10th */}
      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardContent className="flex items-center justify-between">
          <Box>
            <Typography variant="h6" fontWeight={600}>
              10th
            </Typography>
            <Typography sx={{ color: "gray", fontSize: "14px" }}>
              Noida Public School
            </Typography>
            <Typography sx={{ mt: 1 }}>
              <strong>Mar 2018 – May 2019</strong> — Score: <strong>77%</strong>
            </Typography>
          </Box>

          <IconButton
            href="https://noidapublicschool.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "var(--theme-color)" }}
          >
            <SchoolIcon sx={{ fontSize: 35 }} />
          </IconButton>
        </CardContent>
      </Card>
    </Container>
  );
}




