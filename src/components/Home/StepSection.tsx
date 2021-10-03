import {
  Box,
  Divider,
  IconButton,
  Paper,
  Step,
  StepLabel,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { ICONS } from "../Icons";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { StepType } from "./../App/App";
import { TimelineDot } from "@mui/lab";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  step: StepType;
}
export default function StepSection(props: Props) {
  const { step } = props;
  const { t } = useTranslation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = useState(false);

  function toggleExpand() {
    setExpanded(!expanded);
  }

  function steps() {
    return (
      <Step key={step}>
        <StepLabel
          icon={<TimelineDot variant="outlined">{ICONS[step]}</TimelineDot>}
        />
        <Box marginTop={2}>
          <Paper elevation={0} variant="outlined">
            <Box
              paddingLeft={1}
              paddingRight={1}
              paddingTop={1}
              paddingBottom={0}
            >
              <Typography color="text.primary" variant="h6">
                {t(`GameSteps.${step}.headline`)}
              </Typography>
              <Box textAlign="left">
                <Typography color="text.secondary">
                  {expanded
                    ? t(`GameSteps.${step}.text_long`)
                    : t(`GameSteps.${step}.text_short`)}
                </Typography>
              </Box>
              <Box textAlign="left" paddingBottom={1}>
                <Divider>
                  <IconButton onClick={toggleExpand}>
                    {expanded ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </Divider>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Step>
    );
  }

  return (
    <>
      {isSmallScreen ? (
        <Box marginBottom={2} width={"100%"}>
          {steps()}
        </Box>
      ) : (
        steps()
      )}
    </>
  );
}
