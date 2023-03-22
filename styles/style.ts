import { createTheme } from "@mui/material/styles";
// import IBMplexSans from "";

export const CustomTheme = createTheme({
  palette: {
    primary: {
      main: "#008FFF",
    },
    secondary: {
      main: "#90A3AE",
      contrastText: "#FFFFFF",
      dark: "#253237",
      light: "#798F9C",
    },
  },
  typography: {
    // fontSize: 16, // should be added and in all other design use rem
    button: {
      textTransform: "none",
    },
    allVariants: { fontFamily: "'IBM Plex Sans', sans-serif" },
  },
});
