import React from "react";
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Box,
  ThemeProvider,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { visionaTheme } from "../theme/visionaTheme";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/projetos");
  };

  return (
    <ThemeProvider theme={visionaTheme}>
      <Box
        sx={{
          width: "100%",
          height: "99vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: 'url("src/assets/images/backgroundImage.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            padding: 3,
            backgroundColor: "rgba(9, 26, 45, 0.7)",
            borderRadius: 8,
            border: 3,
            borderColor: "rgba(225, 233, 241, 0.3)",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image="src/assets/images/Logo_Visiona2.png"
            alt="Imagem Descritiva"
          />
          <CardContent>
            <Typography component="div" sx={{ color: "#F18419" }}>
              Login
            </Typography>
            <TextField
              label="Login"
              variant="filled"
              fullWidth
              sx={{ mb: 2 }}
              placeholder="Insira seu email"
            />
            <TextField
              label="Senha"
              type="password"
              variant="filled"
              fullWidth
              sx={{ mb: 2 }}
              placeholder="Insira sua senha"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
              sx={{
                mb: 2,
                borderRadius: 8,
                padding: "10px 20px",
                fontSize: "1rem",
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.dark",
                  transform: "scale(1.09)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  transition: "all 0.5s",
                },
                "&:active": {
                  backgroundColor: "secondary.main",
                  transform: "scale(0.95)",
                },
                "&:focus": {
                  boxShadow: `0 0 0 3px rgba(25, 118, 210, 0.5)`,
                },
              }}
            >
              Entrar
            </Button>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
