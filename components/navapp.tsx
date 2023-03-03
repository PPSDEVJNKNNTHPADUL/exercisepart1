import * as React from "react";
import {AppBar,Box,Toolbar,Typography,Button,IconButton,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {useEffect, useState} from 'react'
import {useRouter} from "next/router";
import Cookies from "js-cookie";


const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export default function NavApp() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const userCookie = Cookies.get('userCredentials');
    if (userCookie) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove('userCredentials');
    setLoggedIn(false);
    router.push('/login')
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, mb:2 }}>
          <AppBar position="sticky">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <FitnessCenterIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: 30,
                  }}
                >
                  Exercises
                </Link>
              </Typography>
              <Button color="secondary" variant="text">
                <Link
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Home
                </Link>
              </Button>
              <Button color="secondary" variant="text">
                <Link
                  href="/contact"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Contact
                </Link>
              </Button>
              {loggedIn ? (
                <Button color="secondary" variant="contained" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <Button color="secondary" variant="contained">
                  <Link
                    href="/login"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Login
                  </Link>
                </Button>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </>
  );
}