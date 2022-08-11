import React, { useState } from 'react';
import UserPool from './UserPool';
import logo from '../Cloud Craft.png';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

   
export default function SignUp() {


        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
    
        const onSubmit = (event) => {
            event.preventDefault();
    
            UserPool.signUp(email, password, [], null, (err, data) => {
                if (err) {
                    console.error(err);
                }
                console.log(data);
            });
        }
        
      
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
                              Sign up
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
                                  Sign Up
                              </Button>
                          </Box>
                      </Box>
                  </CardContent>
              </Card>
              <Box sx={{ mt: 2 }}>
                  <Link href="Login" underline="none" variant="body2">
                      Already have an account? Sign in
                  </Link>
              </Box>
          </Container>
      </Box>
    );
}
        
