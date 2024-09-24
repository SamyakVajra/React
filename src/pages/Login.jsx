import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={11} sm={10} md={8} lg={10} marginX={"auto"}>
          <Box
            width={"50%"}
            marginX={"auto"}
            marginY={5}
            bgcolor={"#cceeff"}
            className="text-2xl"
            textAlign={"center"}
            padding={5}
          >
            <Typography variant="h3" sx={{ textDecoration: "underline" }}>
              Login
            </Typography>
            <TextField
              label="email"
              fullWidth
              placeholder="Enter your email here."
              variant="outlined"
              required
              helperText="example:something@gmail.com"
            />
            <TextField
              label="password"
              fullWidth
              placeholder="Enter your password here."
              variant="outlined"
              required
              helperText="Password must contain 1 uppercase, 1 number, 1 special character and must be atleast 8 characters"
              type="password"
            />

            <Button variant="contained" size="small" fullWidth>
              Submit
            </Button>
            <Box display="flex" justifyContent={"space-between"} fontSize={16}>
              <span>
                Already Have an account? <Link href="/register">Sign in.</Link>
              </span>
              <Link href="/forgetpassword">Forget Password</Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
