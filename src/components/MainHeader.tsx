import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";
import { NavLink } from "react-router-dom";
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
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Grid item xs={11} md={9} lg={10}>
            <NavLink to="/" className={classes.titleWrapper}>
              <Typography sx={titleSx} variant={"h5"} color="white">
                {t("title")}
              </Typography>
              <Typography sx={subTitleSx} variant="body2" color="white">
                <i>{t("sub_title")}</i>
              </Typography>
            </NavLink>
          </Grid>
          <Grid item xs={1} md={3} lg={2}>
            {isSmallScreen ? (
              <IconButton target="_blank" href={driveThruLink}>
                <DownloadIcon />{" "}
              </IconButton>
            ) : (
              <Button
                color="secondary"
                variant="contained"
                target="_blank"
                href={driveThruLink}
                endIcon={<DownloadIcon />}
                sx={{ width: "100%" }}
              >
                {t("MainHeader.get_the_pdf")}
              </Button>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
