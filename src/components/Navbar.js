import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";


  
export default function ButtonAppBar() {
  let navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(route);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Container maxWidth="fixed">
        <Toolbar disableGutters>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Cloud Craft
          </Typography>
        
          <Button onClick={() => handleNavigate("/")} color="inherit">Home</Button>
          <Button onClick={() => handleNavigate("/About")} color="inherit">About</Button>
          <Button onClick={() => handleNavigate("/Create")} color="inherit">Create</Button>
          <Button onClick={() => handleNavigate("/Login")} color="inherit">Login</Button>
          <Button onClick={() => handleNavigate("/Signup")} color="inherit">Signup</Button>
       
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

