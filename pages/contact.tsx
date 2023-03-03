import React from "react";
import {Typography,Card,CardContent,Grid,TextField,Button,} from "@mui/material";
import dynamic from "next/dynamic";
const DynamicHeader = dynamic(() => import("../components/navapp"), {});
const DynamicFooter = dynamic(() => import("../components/footer"), {});
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function ContactPage() {
  
  const router = useRouter();
  useEffect(() => { 
    const checkCookie = setInterval(() => {  
     const token = getCookie("userCredentials")
     if (!token) {
      router.replace("/login")}}, 1000)
     }
  )

  return (
    <>
      <DynamicHeader />
      <div className="contact">
        <Card style={{ maxWidth: 450, margin: "auto", padding: "20px 5px" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact us
            </Typography>
            <Typography component="p" variant="body2">
              Fill up the form and I will try to get back to you within 24 hours
            </Typography>
            <Grid item container spacing={1} sx={{ mt: 1 }}>
              <Grid xs={12} sx={{ p: 1 }}>
                <TextField
                  label="First Name"
                  placeholder="Enter first name"
                  variant="outlined"
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12}sx={{ p: 1 }}>
                <TextField
                  label="Last Name"
                  placeholder="Enter last name"
                  variant="outlined"
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12} sx={{ p: 1 }}>
                <TextField
                  type="email"
                  label="Email"
                  placeholder="Enter email"
                  variant="outlined"
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12} sx={{ p: 1 }}>
                <TextField
                  type="number"
                  label="Contact"
                  placeholder="Enter phone number"
                  variant="outlined"
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12} sx={{ p: 1 }}>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Enter your message"
                  variant="outlined"
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12} sx={{ p: 1 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
      <DynamicFooter />
    </>
  );
}
