import React from "react";
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
import User from "./views/user";
import DataTableTaubate from "./views/DataTable";
import GridDemo from "./views/progressionGraph";
import BasicBars from "./views/AreaBar";
import { visionaTheme } from "../theme/visionaTheme";

function Dashboard() {
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
            <img src="src/assets/Logo_Visiona_branco.png" alt="Logo" />
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
                {[
                  "View 1",
                  "View 2",
                  "View 3",
                  "View 4",
                  "View 5",
                  "View 6",
                ].map((text) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
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
                      Tabela Completa de Taubaté
                    </Typography>
                  </Paper>
                </Grid>
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
                      Gráfico de Barra por Analista
                    </Typography>
                  </Paper>
                </Grid>
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
                      Gráfico de Progressão estilo BurndownChart
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Dashboard;
