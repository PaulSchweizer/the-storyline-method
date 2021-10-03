import type {} from "@mui/lab/themeAugmentation";

import { createTheme } from "@mui/material/styles";

export function useTheme(prefersDarkMode: boolean) {
  const main = "#009ee3";
  prefersDarkMode = false;
  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
      primary: {
        main: main,
      },
      secondary: {
        main: "#0077c0",
      },
    },
    typography: {
      button: {
        textTransform: "none",
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: main,
          },
        },
      },
      MuiStepper: {
        styleOverrides: {
          root: {
            "> .MuiStep-root:nth-of-type(1) > .MuiStepConnector-root span": {
              display: "none",
            },
          },
        },
      },
      MuiTimelineDot: {
        styleOverrides: {
          outlined: {
            borderColor: prefersDarkMode ? "white" : "black",
            margin: "-4px",
            borderWidth: "1px",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          outlined: {
            borderColor: prefersDarkMode
              ? "rgba(255, 255, 255, 0.5)"
              : "rgba(0, 0, 0, 0.5)",
            backgroundColor: "transparent",
          },
        },
      },
    },
  });
  return theme;
}
