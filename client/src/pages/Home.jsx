import * as React from "react";

import { Outlet } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import getDashboardTheme from "../components/getDashboardTheme";
import ToggleCustomTheme from "../components/internals/components/ToggleCustomTheme";
import Copyright from "../components/internals/components/Copyright";
import Navbar from "../components/components/Navbar";
import Header from "../components/components/Header";
import MainGrid from "../components/components/MainGrid";

export default function Home() {
  const [mode, setMode] = React.useState("light");
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const dashboardTheme = createTheme(getDashboardTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? dashboardTheme : defaultTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Navbar mode={mode} toggleColorMode={toggleColorMode} />
        <Box
          component="main"
          sx={{
            backgroundColor: "background.default",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          {/* Main content */}
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              flexDirection: "column",
              py: { xs: 14, sm: 16 },
              gap: 2,
            }}
          >
            {/* childs */}
            <Outlet />
            <Copyright sx={{ my: 4 }} />
          </Container>
        </Box>
        <ToggleCustomTheme
          showCustomTheme={showCustomTheme}
          toggleCustomTheme={toggleCustomTheme}
        />
      </Box>
    </ThemeProvider>
  );
}
