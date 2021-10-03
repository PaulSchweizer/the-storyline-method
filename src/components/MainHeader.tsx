import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";

import DownloadIcon from '@mui/icons-material/Download';
import { NavLink } from "react-router-dom";
import { driveThruLink } from "./App/App";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useStyles } from "./MainHeader.styles";
import { useTheme } from '@mui/material/styles';
import { useTranslation } from "react-i18next";

export default function MainHeader() {
  const { t } = useTranslation();
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="flex-start"
          >
            <Grid item xs={10} md={9} lg={10}>
              <NavLink to="/" className={classes.titleWrapper}>
                <Typography className={classes.title}>{t("title")}</Typography>
                <Typography className={classes.subTitle}>
                  {t("sub_title")}
                </Typography>
              </NavLink>
            </Grid>
            <Grid item xs={1} md={3} lg={2}>
              <Button
                color="secondary"
                variant="contained"
                target="_blank"
                href={driveThruLink}
                endIcon={isSmallScreen ? "" : <DownloadIcon/>}
                sx={{width: "100%"}}
              >
                {isSmallScreen ? <DownloadIcon />: t("MainHeader.get_the_pdf")}
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
