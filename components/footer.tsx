import * as React from 'react';
import { CssBaseline, Box, Typography, Container } from '@mui/material';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" align='center' color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Jan Kenneth Padul
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor:'#3f50b5'
        }}
      >
        <Container maxWidth="xs">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}