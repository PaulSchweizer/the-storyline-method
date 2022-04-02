import { Box, Paper, useMediaQuery, useTheme } from "@mui/material";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

import { ICONS } from "../../Icons";

interface Props {
  type: string;
  text: string | React.ReactElement;
  id?: string | undefined;
  isFirst?: boolean;
  isLast?: boolean;
}
export default function StepItem(props: Props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isSmallScreen ? (
        <Box marginBottom={2}>
          <Paper elevation={6}>
            <Box p={2} id={props.id}>
              {props.text}
            </Box>
          </Paper>
        </Box>
      ) : (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={props.isFirst ? { width: 0 } : {}} />
            <TimelineDot color="primary" variant="outlined">
              {ICONS[props.type]}
            </TimelineDot>
            <TimelineConnector sx={props.isLast ? { width: 0 } : {}} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={6}>
              <Box p={2} id={props.id}>
                {props.text}
              </Box>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      )}
    </>
  );
}
