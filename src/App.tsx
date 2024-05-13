import {
  Badge,
  Box,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import DataTableTaubate from "./components/data-table";
import { visionaTheme } from "./components/theme";
import { Notifications } from "@mui/icons-material";
import User from "./components/user";
import GridDemo from "./components/progressionGraph";
import BasicBars from "./components/areaBar";

export default function App() {
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
            <img src="src\assets\Logo_Visiona_branco.png" alt="Logo" />
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
          <Typography variant="h5" mt={5} gutterBottom>
            Dashboard - Taubaté
          </Typography>
          <Grid item>
            <DataTableTaubate />
          </Grid>
          <Grid item>
            <GridDemo />
          </Grid>
          <Grid item>
            <BasicBars />
          </Grid>
        </Grid>
      </Container>

      <CssBaseline />
    </ThemeProvider>
  );
}
