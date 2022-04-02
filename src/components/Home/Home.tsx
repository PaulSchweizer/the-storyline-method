import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import Banner from "./Banner";
import GameOverview from "./GameOverview";
import TwitterIcon from "@mui/icons-material/Twitter";
import { twitterLink } from "../App/App";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Stack>
      <Banner />
      <GameOverview />
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        columnSpacing={4}
      >
        <Grid item marginTop={1} marginRight={1} marginLeft={1}>
          <Box marginTop={2} textAlign="center">
            <Typography variant="h4" color="primary">
              <i>
                “If you're going to have a story, have a big story, or none at
                all.”
              </i>
            </Typography>
            <Typography variant="body2" color="primary" textAlign="right">
              Joseph Campbell
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        columnSpacing={4}
      >
        <Grid item marginTop={2} xs={10}>
          <Divider />
          <Box textAlign="center" marginTop={2} marginLeft={2} marginRight={2}>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<TwitterIcon />}
              target="_blank"
              href={twitterLink}
            >
              {t("Home.Bottom.twitter")}
            </Button>
          </Box>
          <Box textAlign="center" marginTop={1} marginLeft={2} marginRight={2}>
            <Typography variant="body2" color="primary" marginTop={1}>
              {t("Home.Bottom.email_contact")}
              <b>storylinemethod(at)gmail.com</b>
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        columnSpacing={4}
      >
        <Grid item marginTop={2} xs={10}>
          <Divider />
          <Box textAlign="center" marginTop={2} marginBottom={2}>
            <Typography variant="body2" color="text.secondary">
              © 2021 Paul Schweizer
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}
