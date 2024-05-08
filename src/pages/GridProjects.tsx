import {
  Badge,
  Box,
  Container,
  CssBaseline,
  Divider,
  IconButton,
  Stack,
  ThemeProvider,
} from "@mui/material";
import Gridproject from "../components/grid-project";
import { visionaTheme } from "../theme/visionaTheme";
import { Notifications } from "@mui/icons-material";
import User from "../components/views/user";

export default function ProjectsGrid() {
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
        <Gridproject />
      </Container>
      <CssBaseline />
    </ThemeProvider>
  );
}