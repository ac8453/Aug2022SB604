import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import logo from '../Cloud Craft.png';

export default function SimpleCenteredFooter() {
  return (
    <Box component="footer">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 10,
          }}
        >
          <Typography component="div" variant="h4">
            Follow us
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mb: 6, mt: 2 }}>
            <IconButton aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
          </Stack>
          {/* Your logo */}
          <img alt="Brand logo" src={logo} height="64" width="64" />
          <Typography color="text.secondary" variant="body2" sx={{ mt: 6 }}>
            © 2021 MUI Hero
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}