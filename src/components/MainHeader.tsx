import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";

import { Icon } from "@mdi/react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { driveThruLink } from "./App/App";
import { mdiFilePdfBox } from "@mdi/js";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

interface Props {
  handleDrawerToggle: () => void;
}

export default function MainHeader(props: Props) {
  const { t } = useTranslation();
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

  return (
    <>
      <AppBar
        position="fixed"
        enableColorOnDark
        sx={{ zIndex: theme.zIndex.drawer + 10 }}
      >
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
              <Link
                component={NavLink}
                to="/"
                sx={{ textDecoration: "none !important" }}
              >
                <Typography sx={titleSx} variant={"h5"} color="white">
                  {t("title")}
                </Typography>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                onClick={props.handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Link
                component={NavLink}
                to="/"
                sx={{ textDecoration: "none !important" }}
              >
                <Typography sx={titleSx} variant={"h5"} color="white">
                  {t("title")}
                </Typography>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Box sx={{ flexGrow: 1 }} />
              <Button
                disableElevation
                component={Link}
                variant="contained"
                color="secondary"
                target="_blank"
                href={driveThruLink}
                endIcon={<Icon path={mdiFilePdfBox} size={1}/>}
              >
                {t("MainHeader.get_the_pdf")}
              </Button>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
}
