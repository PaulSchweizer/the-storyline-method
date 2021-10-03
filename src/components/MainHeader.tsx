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

  const titleFontSize = isSmallScreen ? "2.1rem" : "2.4rem";
  const subTitleFontSize = isSmallScreen ? "0.9rem" : "1.04rem";

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
              <Typography
                className={classes.title}
                sx={{
                  fontSize: `${titleFontSize} !important`,
                }}
              >
                {t("title")}
              </Typography>
              <Typography
                className={classes.subTitle}
                sx={{
                  fontSize: `${subTitleFontSize} !important`,
                }}
              >
                {t("sub_title")}
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
