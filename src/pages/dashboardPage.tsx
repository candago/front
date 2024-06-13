import {
  CssBaseline,
  Grid,
  Paper,
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
import { visionaTheme } from "../theme/visionaTheme";
import { useState } from "react";
import AnalistInfo from "../components/views/AnalistInfo";
import { useSearchParams } from "react-router-dom";
import DataTable from "../components/views/DataTable";
import BasicPie from "../components/views/PieChart";

const views = [
  {
    id: "DataTable",
    name: "Tabela Completa",
    component: DataTable,
  },
  {
    id: "AnalistInfo",
    name: "Progressao de Analistas",
    component: AnalistInfo,
  },
  {
    id: "BasicPie",
    name: "Gráfico de Progressão dos Projetos",
    component: BasicPie,
  },
];

function Dashboard() {
  const [activeView, setActiveView] = useState("all");
  const [queryParameters] = useSearchParams();
  const city = queryParameters.get("city");

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
          width: "100%",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
                  Dashboard
                </Typography>
                {activeView === "all"
                  ? views.map((view) => (
                      <DynamicView key={view.id} view={view} />
                    ))
                  : views
                      .filter((view) => view.id === activeView)
                      .map((view) => <DynamicView key={view.id} view={view} />)}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

function DynamicView({ view }) {
  const Component = view.component;
  return (
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
        <Typography variant="h6" paddingBottom={3}>
          {view.name}
        </Typography>
        <Component />
      </Paper>
    </Grid>
  );
}

export default Dashboard;
