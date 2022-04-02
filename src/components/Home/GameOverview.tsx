import { Box, Grid, Typography } from "@mui/material";

import GameSteps from "./GameSteps";
import { StepType } from "../App/App";
import { useTranslation } from "react-i18next";

export default function GameOverview() {
  const { t } = useTranslation();

  const gameSteps = [
    StepType.Concept,
    StepType.Protagonists,
    StepType.Pilot,
    StepType.Feedback,
    StepType.Episodes,
    StepType.Review,
  ];

  const episodeSteps = [
    StepType.Premise,
    StepType.Prologue,
    StepType.Trailer,
    StepType.Plotpoints,
    StepType.Finale,
    StepType.Epilogue,
  ];

  return (
    <Box marginTop={2}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        columnSpacing={4}
      >
        <Grid item marginTop={2} marginBottom={2} xs={12}>
          <Box textAlign="center">
            <Box marginBottom={4}>
              <Typography variant="h4" color="text.primary">
                {t("Home.GameOverview.game_headline")}
              </Typography>
            </Box>
            <GameSteps steps={gameSteps} />
            <Box marginBottom={4} marginTop={4}>
              <Typography variant="h4" color="text.primary">
                {t("Home.GameOverview.episode_headline")}
              </Typography>
            </Box>
            <GameSteps steps={episodeSteps} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
