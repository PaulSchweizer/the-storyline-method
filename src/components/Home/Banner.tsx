import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import BookImg from "./../../resources/img/book-eng.png";
import DriveThruLogo from "./../../resources/img/drive-thru-logo.png";
import GroupIcon from "@mui/icons-material/Group";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import PersonIcon from "@mui/icons-material/Person";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { driveThruLink } from "../App/App";
import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      columnSpacing={4}
    >
      <Grid item marginTop={2} xs={5} md={4} lg={2}>
        <img src={BookImg} alt="Storyline Book" width="100%" />
      </Grid>
      <Grid item xs={10} md={6} lg={4}>
        <Box p={1} textAlign="left">
          <Typography variant={isSmallScreen ? "h5" : "h4"} color="primary">
            <HistoryEduIcon color="primary" /> {t("Home.Banner.headline1")}
          </Typography>
          <Typography variant={isSmallScreen ? "h5" : "h4"} color="primary">
            <PlayCircleOutlineIcon color="primary" />{" "}
            {t("Home.Banner.headline2")}
          </Typography>
          <Typography variant={isSmallScreen ? "h5" : "h4"} color="primary">
            <GroupIcon color="primary" /> {t("Home.Banner.headline3")}
          </Typography>
          <Typography variant={isSmallScreen ? "h5" : "h4"} color="primary">
            <PersonIcon color="primary" /> {t("Home.Banner.headline4")}
          </Typography>
        </Box>
      </Grid>
      <Grid item justifyContent="center" xs={10} md={6} lg={4}>
        <Card raised={true} sx={{ backgroundColor: "#009ee3" }}>
          <Box p={2} textAlign="center">
            <CardContent>
              <Typography variant="h6" color="white">
                {t("Home.Banner.get_the_pdf")}
              </Typography>
            </CardContent>
            <Link target="_blank" href={driveThruLink}>
              <CardMedia
                component="img"
                alt="DriveThru RPG Logo"
                image={DriveThruLogo}
              ></CardMedia>
            </Link>
            <CardContent>
              <Button
                variant="contained"
                color="secondary"
                target="_blank"
                href={driveThruLink}
                sx={{ width: "100%" }}
              >
                <Typography variant="h6">{t("title")}</Typography>
              </Button>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
