import React from "react";
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

export default function Gridproject() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/dashboard");
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
              <Typography variant="h3"> Grade de Projetos </Typography>
              <Grid mt={3} container justifyContent="left" spacing={4}>
                <Grid item>
                  <Card
                    onClick={handleCardClick}
                    sx={{
                      cursor: "pointer",
                      transition:
                        "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
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
                        src="src/assets/images/mapa.png"
                      />
                      <Typography sx={{ textAlign: "center" }} variant="h6">
                        Dashboard Taubaté
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Paper>
      </Grid>
    </CssBaseline>
  );
}
