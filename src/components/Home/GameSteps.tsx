import { Box, Stepper, useMediaQuery, useTheme } from "@mui/material";

import StepSection from "./StepSection";
import { StepType } from "./../App/App";

interface Props {
  steps: StepType[];
}
export default function GameSteps(props: Props) {
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
      </Stepper>
    </Box>
  );
}
