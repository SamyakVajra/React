import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Link,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

const Register = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={11} sm={10} md={8} lg={6} marginX={"auto"}>
          <Box
            width={"50%"}
            bgcolor={"#cceeff"}
            className="text-2xl"
            textAlign={"center"}
            padding={5}
            marginY={5}
            marginX={"auto"}
          >
            <Typography variant="h3" sx={{ textDecoration: "underline" }}>
              Register
            </Typography>
            <TextField
              label="Username"
              fullWidth
              placeholder="Enter your username."
              variant="outlined"
              required
              sx={{ marginBottom: 2 }}
            />

            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <Box display={"flex"} justifyContent={"space-evenly"}>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </Box>
              </RadioGroup>
            </FormControl>

            <TextField
              label="password"
              fullWidth
              placeholder="Enter your password here."
              variant="outlined"
              required
              helperText="Password must contain 1 uppercase, 1 number, 1 special character and must be atleast 8 characters"
              type="password"
            />

            <TextField
              label="About yourself"
              fullWidth
              variant="outlined"
              multiline
              rows={5}
            />

            <Button variant="contained" size="small" fullWidth>
              Submit
            </Button>
            <Box display="flex" justifyContent={"space-between"} fontSize={16}>
              <span>
                Already Have an account? <Link href="/register">Sign in.</Link>
              </span>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
