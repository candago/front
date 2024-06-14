import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  Typography,
  CardMedia,
  CardContent,
  CssBaseline,
  Box,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface DashboardCardProps {
  title: string;
  imageUrl: string;
  onClick: () => void;
}

const DashboardCard = ({ title, imageUrl, onClick }: DashboardCardProps) => (
  <Card
    onClick={onClick}
    sx={{
      cursor: "pointer",
      transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.03)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
      },
      "&:active": {
        transform: "scale(0.97)",
      },
      borderRadius: 8,
      border: 3,
      borderColor: "rgba(255, 233, 241, 0.15)",
      backgroundColor: "rgba(255, 233, 241, 0.03)",
    }}
  >
    <CardContent>
      <CardMedia
        component="img"
        style={{ width: "220px", height: "180px" }}
        src={imageUrl}
      />
      <Typography sx={{ textAlign: "center" }} variant="h6">
        {title}
      </Typography>
    </CardContent>
  </Card>
);

interface Project {
  name: string;
  title: string;
  imageUrl: string;
}

export default function GridProjects(){
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);

  // Declaração do array de projetos
  const projetos: string[] = ["Taubate", "Cruzeiro", "Atibaia"];

  useEffect(() => {
    // Mapear os nomes dos projetos para objetos Project e atualizar o estado
    const projectData = projetos.map((projectName) => ({
      name: projectName,
      title: `Dashboard ${projectName}`,
      imageUrl: "src/assets/images/mapa.png",
    }));
    setProjects(projectData);
  }, []);

  const handleCardClick = (projectName: string) => {
    navigate(`/dashboard?city=${projectName.toLowerCase()}`);
  };

  return (
    <CssBaseline>
      <Grid mt={10} item xs={12}>
        <Paper
          elevation={3}
          sx={{
            p: 5,
            backgroundColor: "rgba(255, 233, 241, 0.03)",
            borderRadius: 8,
            border: 3,
            borderColor: "rgba(255, 233, 241, 0.15)",
          }}
        >
          <Container>
            <Box mb={3}>
              <Typography variant="h3">Grade de projetos</Typography>
              <Grid mt={3} container justifyContent="left" spacing={4}>
                {projects.map((project, index) => (
                  <Grid item key={index}>
                    <DashboardCard
                      title={project.title}
                      imageUrl={project.imageUrl}
                      onClick={() => handleCardClick(project.name)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Paper>
      </Grid>
    </CssBaseline>
  );
};