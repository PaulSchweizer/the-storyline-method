import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
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
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      columnSpacing={4}
    >
      <Grid item marginTop={2} marginBottom={2} xs={2}>
        <img src={BookImg} width="200" />
      </Grid>
      <Grid item xs={3} marginTop={2} marginBottom={2}>
        <Box p={2} textAlign="left">
          <Typography variant="h4" color="primary">
            <HistoryEduIcon color="primary" /> {t("Home.Banner.headline1")}
          </Typography>
          <Typography variant="h4" color="primary">
            <PlayCircleOutlineIcon color="primary" />{" "}
            {t("Home.Banner.headline2")}
          </Typography>
          <Typography variant="h4" color="primary">
            <GroupIcon color="primary" /> {t("Home.Banner.headline3")}
          </Typography>
          <Typography variant="h4" color="primary">
            <PersonIcon color="primary" /> {t("Home.Banner.headline4")}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3} justifyContent="center" marginTop={2} marginBottom={2}>
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
                alt="drive thru rpg logo"
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
