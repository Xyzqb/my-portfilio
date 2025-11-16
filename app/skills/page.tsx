"use client";

import { Container, Typography, Box, Chip, Paper } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";

const FRONTEND = [
  "ReactJS", "JavaScript", "NextJS", "Material-UI", "Tailwind-CSS", "BootStrap", "HTML", "CSS"
];

const BACKEND = [
  "NodeJS", "ExpressJS", "MongoDB", "MySQL", "Java"
];

const OTHER = [
  "Python", "AI/ML"
];

export default function Skills() {
  return (
    <Box sx={{ backgroundColor: "#ffe4ef", py: 6 }}> {/* light pink bg */}
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ color: "#a83269", fontWeight: 700, mb: 3 }}
        >
          Skills
        </Typography>

        {/* FRONTEND */}
        <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
          <Box className="flex items-center gap-2 mb-2">
            <CodeIcon sx={{ color: "#a83269" }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Frontend Skills
            </Typography>
          </Box>

          <Box sx={{ mt: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
            {FRONTEND.map(s => (
              <Chip
                key={s}
                label={s}
                sx={{ backgroundColor: "#a83269", color: "white" }}
              />
            ))}
          </Box>
        </Paper>

        {/* BACKEND */}
        <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
          <Box className="flex items-center gap-2 mb-2">
            <StorageIcon sx={{ color: "#a83269" }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Backend & Database Skills
            </Typography>
          </Box>

          <Box sx={{ mt: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
            {BACKEND.map(s => (
              <Chip
                key={s}
                label={s}
                sx={{ backgroundColor: "#a83269", color: "white" }}
              />
            ))}
          </Box>
        </Paper>

        {/* OTHER */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Box className="flex items-center gap-2 mb-2">
            <DeviceHubIcon sx={{ color: "#a83269" }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Other Skills
            </Typography>
          </Box>

          <Box sx={{ mt: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
            {OTHER.map(s => (
              <Chip
                key={s}
                label={s}
                sx={{ backgroundColor: "#a83269", color: "white" }}
              />
            ))}
          </Box>
        </Paper>

      </Container>
    </Box>
  );
}
