import { Box, Stack, Typography } from "@mui/material";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";

import { Protagonist } from "../../../types/Story";

interface Props {
  protagonist: Protagonist;
}
export default function ProtagonistItem(props: Props) {
  return (
    <>
      <Box marginBottom={1}>
        <Typography variant="h5">
          {props.protagonist.name} - {props.protagonist.description}
        </Typography>
      </Box>
      {props.protagonist.storylines.map((storyline) => {
        return (
          <Stack direction="row">
            {storyline.description}
            {storyline.plotpoints > 0 ? <CheckBox /> : <CheckBoxOutlineBlank />}
            {storyline.plotpoints > 1 ? <CheckBox /> : <CheckBoxOutlineBlank />}
            {storyline.plotpoints > 2 ? <CheckBox /> : <CheckBoxOutlineBlank />}
          </Stack>
        );
      })}
    </>
  );
}
