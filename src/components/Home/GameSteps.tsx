import {
  Box,
  Step,
  StepLabel,
  Stepper,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { ICONS } from "../Icons";
import StepSection from "./StepSection";
import { StepType } from "./../App/App";
import { TimelineDot } from "@mui/lab";
import { useTranslation } from "react-i18next";

interface Props {
  steps: StepType[];
}
export default function GameSteps(props: Props) {
  const { t } = useTranslation();
  const { steps } = props;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box marginLeft={2} marginRight={2}>
      <Stepper
        alternativeLabel
        orientation={isSmallScreen ? "vertical" : "horizontal"}
      >
        {steps.map((step) => (
          <StepSection step={step} />
        ))}
        {/* <Step key={"next-episode"} last={true}>
        <StepLabel
          icon={
            <TimelineDot variant="outlined">
              {ICONS[StepType.NextEpisode]}
            </TimelineDot>
          }
        >
          {t("GameSteps.NextEpisode.headline")}
        </StepLabel>
      </Step> */}
      </Stepper>
    </Box>
  );
}
