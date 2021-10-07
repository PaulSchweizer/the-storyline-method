import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { driveThruLink } from "./App/App";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useStyles } from "./MainHeader.styles";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

export default function MainHeader() {
  const { t } = useTranslation();
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const titleSx = isSmallScreen
    ? undefined
    : {
      fontFamily: "Myriad !important",
      marginTop: "-0.2rem !important",
      fontSize: "2.5rem",
      color: "white",
    };
  const subTitleSx = isSmallScreen
    ? undefined
    : {
      fontFamily:
        "Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif !important",
      fontStyle: "italic !important",
      marginTop: "-0.75rem !important",
      fontSize: "1.04rem !important",
      color: "white",
    };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box component="div">
          <Typography sx={titleSx} variant={"h5"} color="white">
            {t("title")}
          </Typography>
          <Typography sx={subTitleSx} variant="body2" color="white">
            <i>{t("sub_title")}</i>
          </Typography>
        </Box>

        {/* <Box marginRight={2}>
          <Button variant="contained" color="secondary" startIcon={<MenuBookIcon />}>
            Examples
          </Button>
        </Box> */}

        <Box sx={{ flexGrow: 1 }}></Box>

        <Box>
          {isSmallScreen ? (
            <IconButton target="_blank" href={driveThruLink}>
              <DownloadIcon />
            </IconButton>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              endIcon={<DownloadIcon />}
              target="_blank"
              href={driveThruLink}
            >
              {t("Home.Banner.get_the_pdf")}
            </Button>
          )}
        </Box>

        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
}
