"use client";
import { Container, Typography, Box, Card, CardContent, IconButton } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";

export default function Projects() {
  return (
    <Container
      maxWidth="lg"
      className="container"
      sx={{
        backgroundColor: "#ffe6f2", // light pink
        padding: 4,
        borderRadius: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "var(--theme-color)", fontWeight: 700, mb: 2 }}
      >
        Projects
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 3,
        }}
      >
        {/* -------------------- PROJECT 1 -------------------- */}
        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Box className="flex justify-between items-start">
              <Typography variant="h6" fontWeight={700}>
                Sentiment Analysis (ML)
              </Typography>

              <CodeIcon sx={{ color: "var(--theme-color)", fontSize: 30 }} />
            </Box>

            <Typography sx={{ mt: 1, color: "gray" }}>
              Built a model using TF-IDF + Logistic Regression / Naive Bayes / Random Forest
              to classify customer reviews into positive/negative.
            </Typography>
          </CardContent>
        </Card>

        {/* -------------------- PROJECT 2 -------------------- */}
        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Box className="flex justify-between items-start">
              <Typography variant="h6" fontWeight={700}>
                Diabetes Prediction (ML)
              </Typography>

              <CodeIcon sx={{ color: "var(--theme-color)", fontSize: 30 }} />
            </Box>

            <Typography sx={{ mt: 1, color: "gray" }}>
              Used PIMA Diabetes dataset and tested SVM, Random Forest, Decision Tree.
              Model deployed with a simple web UI for predictions.
            </Typography>
          </CardContent>
        </Card>

        {/* -------------------- PROJECT 3 -------------------- */}
        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Box className="flex justify-between items-start">
              <Typography variant="h6" fontWeight={700}>
                Company Admin Panel (Full Stack)
              </Typography>

              <IconButton
                href="https://company-admin-mu.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "var(--theme-color)" }}
              >
                <LaunchIcon sx={{ fontSize: 30 }} />
              </IconButton>
            </Box>

            <Typography sx={{ mt: 1, color: "gray" }}>
              A complete admin panel with authentication, role-based access control,
              API integration, dashboard analytics, and CRUD operations.
            </Typography>
          </CardContent>
        </Card>

        {/* -------------------- PROJECT 4 -------------------- */}
        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Box className="flex justify-between items-start">
              <Typography variant="h6" fontWeight={700}>
                Admin Dashboard (React + Node)
              </Typography>

              <IconButton
                href="https://admin-panel-roan-phi.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "var(--theme-color)" }}
              >
                <LaunchIcon sx={{ fontSize: 30 }} />
              </IconButton>
            </Box>

            <Typography sx={{ mt: 1, color: "gray" }}>
              A responsive admin dashboard with login system, data tables,
              charts, secure APIs, and modern frontend UI using React.js.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
