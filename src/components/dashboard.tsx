import React from "react";
import {
  Badge,
  Box,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import DataTableTaubate from "./views/DataTable";
import { visionaTheme } from "../theme/visionaTheme";
import { Notifications } from "@mui/icons-material";
import User from "./views/user";
import GridDemo from "./views/progressionGraph";
import BasicBars from "./views/AreaBar";

function Dashboard() {
  return (
    <ThemeProvider theme={visionaTheme}>
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
      </Container>

      <Container>
        <Grid>
          <Box mt={3}>
            <Paper sx={{ borderRadius: 8 }}>
              <Typography
                variant="h5"
                mt={5}
                ml={2}
                paddingTop={3}
                gutterBottom
              >
                Dashboard - Taubaté
              </Typography>
              <DataTableTaubate />
              <GridDemo />
              <BasicBars />
            </Paper>
          </Box>
        </Grid>
      </Container>

      <CssBaseline />
    </ThemeProvider>
  );
}

export default Dashboard;
