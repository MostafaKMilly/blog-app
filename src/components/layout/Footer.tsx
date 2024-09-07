import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
        px: { xs: 2, md: 3 },
        py: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; 2024 Mostafa Blog. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
