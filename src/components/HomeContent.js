import React from 'react'
import CloudIcon from "@mui/icons-material/CloudOutlined";
import CodeIcon from "@mui/icons-material/Code";
import GppGoodIcon from "@mui/icons-material/GppGoodOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import homeimg from '../Home Illustration.jpg';


const features = [
  {
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    icon: <CodeIcon />,
  },
  {
    title: "Hosting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    icon: <CloudIcon />,
  },
  {
    title: "Security",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    icon: <GppGoodIcon />,
  },
];

export default function WithIllustrationFeatures() {
  return (
    <Box component="section">
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={12} md={7}>
            <Typography sx={{ mb: 8 }} variant="h4">
              Key Features
            </Typography>
            {features.map((feature) => (
              <Box
                key={feature.title}
                sx={{ display: "flex", flexDirection: "row", mb: 6 }}
              >
                <Avatar sx={{ bgcolor: "primary.main", mr: 3 }}>
                  {feature.icon}
                </Avatar>
                <Box>
                  <Typography variant="h6">{feature.title}</Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              alt="Illustration"
              component="img"
              src={homeimg}
              sx={{ borderRadius: 4, maxWidth: 1 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}              
    

