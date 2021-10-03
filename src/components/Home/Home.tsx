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
        <Grid item marginTop={1} xs={10}>
          <Box marginTop={2} textAlign="center">
            <Typography variant="h4" color="primary">
              <i>
                “If you're going to have a story, have a big story, or none at
                all.”
              </i>
            </Typography>
            <Typography variant="body2" color="primary" marginTop={1}>
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
          <Box textAlign="center" marginTop={2}>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<TwitterIcon />}
            >
              {t("Home.Bottom.twitter")}
            </Button>
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
              © 2001 Paul Schweizer
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}
