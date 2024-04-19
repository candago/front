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
import DataTableTaubate from "./components/data-table";
import { darkTheme } from "./components/theme";
import { Notifications } from "@mui/icons-material";
import User from "./components/user";

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
            <IconButton aria-label="icon button">
              <Badge badgeContent={4} color="primary">
                <Notifications color="action" />
              </Badge>
            </IconButton>
            <User />
          </Stack>
        </Box>
        <Box mt={18}>
          <DataTableTaubate />
        </Box>
      </Container>
      <CssBaseline />
    </ThemeProvider>
  );
}
