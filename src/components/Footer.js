import { Box, Paper, Typography } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";

function Footer() {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
        boxShadow: "0px -1px 9px 0px rgba(77,77,77,1)",
      }}
    >
      <Box my={0.5} mx={2}>
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          João Faria
        </Typography>
        <a
          href="https://www.linkedin.com/in/joao-faria-fullstack-web-developer/"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedIn fontSize="medium" />
        </a>
        <a href="https://github.com/jfaria23" rel="noreferrer" target="_blank">
          <GitHub fontSize="medium" />
        </a>
      </Box>

      <Box my={0.5} mx={2}>
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          Carolin Görner
        </Typography>
        <a
          href="https://www.linkedin.com/in/carolingoerner/"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedIn fontSize="medium" />
        </a>
        <a
          href="https://github.com/carolingoerner"
          rel="noreferrer"
          target="_blank"
        >
          <GitHub fontSize="medium" />
        </a>
      </Box>
    </Paper>
  );
}

export default Footer;
