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

      <Container maxWidth="xl">
        <Box mt={3} sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              width: 64,
              height: 64,
            }}
          >
            <img src="src/assets/images/Logo_Visiona_branco.png" alt="Logo" />
          </Box>
          <Box sx={{ flexGrow: 1, justifyContent: "right" }} />
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <IconButton aria-label="icon button">
              <Badge badgeContent={4} color="primary">
                <Notifications color="action" />
              </Badge>
            </IconButton>
            <User />
          </Stack>
        </Box>
        <Grid mt={8} container spacing={2}>
          <Grid item xs={12} md={3}>
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
              <Typography variant="h5" textAlign={"center"}>
                Visualizações
              </Typography>
              <List>
                {views.map((view) => (
                  <ListItem
                    button
                    key={view.id}
                    onClick={() => setActiveView(view.id)}
                  >
                    <ListItemText primary={view.name} />
                  </ListItem>
                ))}
                <ListItem button key="all" onClick={() => setActiveView("all")}>
                  <ListItemText primary="Mostrar Todos" />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={9}>
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
                  Dashboard - Taubaté
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
