import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from 'react';
import logo from '../Cloud Craft.png';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from './UserPool';

export default function Login() {



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess: ", data);
      },
      onFailure: (err) => {
        console.error("onFailure :", err);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
      },
    });
  };



  return (
    <Box
          sx={{
              bgcolor: (theme) => theme.palette.mode === "dark" ? "background.default" : "grey.50",
              p: 6,
          }}
      >
          <Container component="main" maxWidth="sm">
              <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                  {/* Your logo */}
                  <Box
                      alt="logo"
                      component="img"
                      src={logo}
                      width={150}
                      height={150} />
              </Box>
              <Card>
                  <CardContent>
                      <Box
                          sx={{
                              mt: 1,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                          }}
                      >
                          <Typography component="h1" variant="h5">
                              Login
                          </Typography>
                          <Box
                              component="form"
                              noValidate
                              
                              sx={{ mt: 3 }}
                          >
                              <Grid container spacing={2}>                                    
                                  <Grid item xs={12}>
                                      <TextField
                                      value={email}
                                      onChange={(event) => setEmail(event.target.value)}
                                          required
                                          fullWidth
                                          id="signup-email"
                                          label="Email Address"
                                          name="email"
                                          autoComplete="email" />
                                  </Grid>
                                  <Grid item xs={12}>
                                      <TextField
                                      value={password}
                                      onChange={(event) => setPassword(event.target.value)}
                                          required
                                          fullWidth
                                          name="password"
                                          label="Password"
                                          type="password"
                                          id="signup-password"
                                          autoComplete="new-password" />
                                  </Grid>
                                   </Grid>
                              <Button 
                              onClick={onSubmit}
                                  type="submit"
                                  fullWidth
                                  variant="contained"
                                  sx={{ mt: 3, mb: 2 }}
                              >
                                  Login
                              </Button>
                          </Box>
                      </Box>
                  </CardContent>
              </Card>
              <Box sx={{ mt: 2 }}>
                  <Link href="Signup" underline="none" variant="body2">
                      Dont have an account? Sign up
                  </Link>
              </Box>
          </Container>
      </Box>
    );
}