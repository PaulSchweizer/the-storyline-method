import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";

import { NavLink } from "react-router-dom";
import { driveThruLink } from "./App/App";
import { useStyles } from "./MainHeader.styles";
import { useTranslation } from "react-i18next";
import DownloadIcon from '@mui/icons-material/Download';

export default function MainHeader() {
  const { t } = useTranslation();
  const classes = useStyles();

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
            <Grid item>
              <NavLink to="/" className={classes.titleWrapper}>
                <Typography className={classes.title}>{t("title")}</Typography>
                <Typography className={classes.subTitle}>
                  {t("sub_title")}
                </Typography>
              </NavLink>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Grid item>
              <Button
                color="secondary"
                variant="contained"
                target="_blank"
                href={driveThruLink}
                endIcon={<DownloadIcon/>}
              >
                {t("MainHeader.get_the_pdf")}
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
