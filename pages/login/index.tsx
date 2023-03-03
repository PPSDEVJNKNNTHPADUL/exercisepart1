import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import dynamic from "next/dynamic";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import {useRouter} from 'next/router';
import {setCookie} from 'cookies-next'
import {useState} from 'react';
const DynamicHeader = dynamic(() => import("../../components/navapp"), {});
const DynamicFooter = dynamic(() => import("../../components/footer"), {});

const Login = () => {
  const [attempts, setAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    if (isBlocked) {
      return toast.error("You have reached the maximum number of login attempts. Please try again after 30 minutes.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });
      if (response.data.message === 'Success') {
        setCookie("userCredentials",email)
        setTimeout(() => {
          router.push('/profile');
        }, 2000)
        toast.success("Successful Login", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      setAttempts(attempts + 1);
      setCookie('loginAttempts', attempts + 1, { maxAge: 1800 });
      if (attempts + 1 === 2) {
        setIsBlocked(true);
      }
      toast.error("Invalid Email or Password!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
    <DynamicHeader/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <ToastContainer/>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Card style={{ maxWidth: 450, margin: "auto", padding: "20px 5px" }}>
          <CardContent>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login/registration" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          </CardContent>
          </Card>
        </Box>
      </Container>
      <DynamicFooter/>
      </>
  );
}
export default Login;