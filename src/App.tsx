import {
  Avatar,
  Badge,
  Box,
  Container,
  CssBaseline,
  Divider,
  IconButton,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Notifications } from "@mui/icons-material";
import DataTableTaubate from "./components/data-table";
import { darkTheme } from "./components/theme";

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Box mt={3} sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              width: 64,
              height: 64,
            }}
          >
            <img src="src\assets\Logo_Visiona_branco.png" alt="Logo" />
          </Box>
          <Box sx={{ flexGrow: 1, justifyContent: "right" }} />
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <IconButton aria-label="notification">
              <Badge badgeContent={4} color="primary">
                <Notifications color="action" />
              </Badge>
            </IconButton>
            <Avatar
              alt="Avatar"
              src="src\assets\portrait-smiley-modern-male.jpg"
              sx={{ width: 56, height: 56, justifyContent: "center" }}
            />
          </Stack>
        </Box>
        <Box mt={18}>
          <Typography variant="h3" gutterBottom>
            Grade de Atuação de Taubaté
          </Typography>
          <DataTableTaubate />
        </Box>
      </Container>
      <CssBaseline />
    </ThemeProvider>
  );
}
