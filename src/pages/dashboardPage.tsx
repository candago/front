import {
  CssBaseline,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Container,
  Typography,
  Badge,
  IconButton,
  ThemeProvider,
  Stack,
  Box,
  Divider,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import { Notifications } from "@mui/icons-material";
import User from "../components/views/user";
import DataTableTaubate from "../components/views/DataTable";
import GridDemo from "../components/views/progressionGraph";
import BasicBars from "../components/views/AreaBar";
import { visionaTheme } from "../theme/visionaTheme";
import { useState } from "react";

const views = [
  { id: "DataTableTaubate", name: "Tabela Completa de Taubaté" },
  { id: "BasicBars", name: "Gráfico de Barra por Analista" },
  { id: "GridDemo", name: "Gráfico de Progressão estilo BurndownChart" },
];

function Dashboard() {
  const [activeView, setActiveView] = useState("all");

  return (
    <ThemeProvider theme={visionaTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              width: 1500,
              height: 50,
            }}
          >
            <img src="src/assets/images/Logo_Visiona_branco.png" alt="Logo" />
          </Box>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={4}
          >
            <IconButton aria-label="icon button">
              <Badge badgeContent={9} color="primary">
                <Notifications color="action" />
              </Badge>
            </IconButton>
            <User />
          </Stack>
        </Toolbar>
      </AppBar>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          backgroundColor: "rgba(255, 233, 241, 0.001)",
          borderRadius: 8,
          border: 3,
          borderColor: "rgba(255, 233, 241, 0.15)",
          width: "100%"
        }}
      >
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center"}}>
          {views.map((view) => (
            <Button
              key={view.id}
              color="inherit"
              onClick={() => setActiveView(view.id)}
            >
              {view.name}
            </Button>
          ))}
          <Button color="inherit" onClick={() => setActiveView("all")}>
            Mostrar Todos
          </Button>
        </Box>
      </Paper>
      <Container maxWidth="xl">
        <Grid mt={8} container spacing={2}>
          <Grid item xs={12}>
            <Paper
              elevation={1}
              sx={{
                padding: 2,
                backgroundColor: "rgba(255, 233, 241, 0.001)",
                borderRadius: 8,
                border: 3,
                borderColor: "rgba(255, 233, 241, 0.15)",
              }}
            >
              <Grid container direction="column" spacing={2}>
                <Typography
                  paddingLeft={8}
                  paddingTop={4}
                  paddingBottom={3}
                  variant="h5"
                >
                  Dashboard - cidade
                </Typography>
                {(activeView === "all" ||
                  activeView === "DataTableTaubate") && (
                    <Grid item xs={12}>
                      <Paper
                        elevation={3}
                        sx={{
                          padding: 2,
                          backgroundColor: "rgba(255, 233, 241, 0.001)",
                          borderRadius: 8,
                          border: 3,
                          borderColor: "rgba(255, 233, 241, 0.15)",
                        }}
                      >
                        <DataTableTaubate />
                        <Typography variant="h6" paddingLeft={3} paddingTop={3}>
                          {views.find((v) => v.id === "DataTableTaubate")?.name}
                        </Typography>
                      </Paper>
                    </Grid>
                  )}
                {(activeView === "all" || activeView === "BasicBars") && (
                  <Grid item xs={6} sm={6}>
                    <Paper
                      elevation={3}
                      sx={{
                        padding: 2,
                        backgroundColor: "rgba(255, 233, 241, 0.001)",
                        borderRadius: 8,
                        border: 3,
                        borderColor: "rgba(255, 233, 241, 0.15)",
                      }}
                    >
                      <BasicBars />
                      <Typography variant="h6" paddingLeft={3} paddingTop={3}>
                        {views.find((v) => v.id === "BasicBars")?.name}
                      </Typography>
                    </Paper>
                  </Grid>
                )}
                {(activeView === "all" || activeView === "GridDemo") && (
                  <Grid item xs={12} sm={6}>
                    <Paper
                      elevation={3}
                      sx={{
                        padding: 2,
                        backgroundColor: "rgba(255, 233, 241, 0.001)",
                        borderRadius: 8,
                        border: 3,
                        borderColor: "rgba(255, 233, 241, 0.15)",
                      }}
                    >
                      <GridDemo />
                      <Typography variant="h6" paddingLeft={3} paddingTop={3}>
                        {views.find((v) => v.id === "GridDemo")?.name}
                      </Typography>
                    </Paper>
                  </Grid>
                )}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Dashboard;
