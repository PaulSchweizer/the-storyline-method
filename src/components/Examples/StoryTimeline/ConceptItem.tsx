import { Box, Chip, Stack } from "@mui/material";

import { Concept } from "../../../types/Story";

interface Props {
  concept: Concept;
}
export default function ConceptItem(props: Props) {
  return (
    <Box
      marginBottom={1}
      sx={{
        "& td": {
          verticalAlign: "baseline",
        },
      }}
    >
      <table>
        <tr>
          <td>Title:</td>
          <td>{props.concept.title}</td>
        </tr>
        <tr>
          <td>Genres:</td>
          <td>
            <Stack direction="row" spacing={1}>
              {props.concept.genres.map((genre) => (
                <Chip label={genre} variant="outlined" size="small" />
              ))}
            </Stack>
          </td>
        </tr>
        <tr>
          <td>References:</td>
          <td>
            <Stack direction="row" spacing={1}>
              {props.concept.references.map((reference) => (
                <Chip label={reference} variant="outlined" size="small" />
              ))}
            </Stack>
          </td>
        </tr>
        <tr>
          <td>World:</td>
          <td>{props.concept.world}</td>
        </tr>
        <tr>
          <td>Other:</td>
          <td>{props.concept.other}</td>
        </tr>
      </table>
    </Box>
  );
}
