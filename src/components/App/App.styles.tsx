import type {} from "@mui/lab/themeAugmentation";

import { createTheme } from "@mui/material/styles";

export function useTheme(prefersDarkMode: boolean) {
  prefersDarkMode = true;
  const paletteTheme = createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
      primary: {
        light: "#62cfff",
        main: "#009ee3",
        dark: "#0070b1",
      },
      secondary: {
        light: "#ff746a",
        main: "#e83f3f",
        dark: "#ae0018",
      },
    },
  });

  const theme = createTheme({
    ...paletteTheme,
    components: {
      MuiPaper: {
        styleOverrides: {
          outlined: {
            borderColor: paletteTheme.palette.text.secondary,
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
      MuiStepConnector: {
        styleOverrides: {
          root: {
            left: "calc(-50%)",
            right: "calc(50%)",
          },
          line: {
            borderColor: paletteTheme.palette.text.secondary,
          },
        },
      },
      MuiTimelineDot: {
        styleOverrides: {
          outlined: {
            borderColor: paletteTheme.palette.text.secondary,
            margin: "-4px",
            borderWidth: "1px",
            backgroundColor: paletteTheme.palette.background.default,
            zIndex: 1,
          },
        },
      },
      MuiTimelineItem: {
        styleOverrides: {
          root: {
            "&:: before": {
              content: "none",
            },
          },
        },
      },
      MuiTimelineConnector: {
        styleOverrides: {
          root: {
            backgroundColor: paletteTheme.palette.text.secondary,
            width: 1,
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            "& .MuiTimelineDot-root": {
              backgroundColor: "#00000000",
              // filter: "none !important",
            },
          },
        },
      },
    },
  });
  return theme;
}
