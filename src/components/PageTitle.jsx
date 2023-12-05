import React from 'react'
import { Typography, createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme();
theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.7rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

function PageTitle({title}) {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="h3"
        color={"GrayText"}
        fontWeight="600"
        textAlign="left"
        mt={8}
        mb={2}
      >
       {title}
      </Typography>
    </ThemeProvider>
  );
}

export default PageTitle