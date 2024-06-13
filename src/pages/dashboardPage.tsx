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
  import PRINT from "../components/views/Print";
  import PDF from "../components/views/PDF";

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

        <AppBar position="fixed">
          <Toolbar>
            <img
              src="src/assets/images/Logo_Visiona_branco.png"
              alt="Logo"
              style={{ height: 50 }}
            />
            <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: '50%',
                  height: 50,
                  ml: -80,
                }}  
              >
              <img src="src/assets/images/Logo_Visiona_branco.png" alt="Logo" />
            </Box>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
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
          </Toolbar>
        </AppBar>

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
          <Box mt={4} mb={4} display="flex" justifyContent="flex-end">
          <PRINT />
          <Button
            variant="contained"
            sx={{
              position: 'static',
              bottom: 0,
              left: 0,
              m: 2,
            }}
            onClick={PDF}
          >
            Exportar PDF
          </Button>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }

  export default Dashboard;