import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { NavLink } from "react-router-dom";
import { STORIES } from "../App/App";

export default function ExamplesOverview() {
  return (
    <>
      <Box marginBottom={1}>
        <Typography variant="h4" sx={{ marginBottom: 1 }}>
          Beispiele
        </Typography>
        <Typography>
          Diese Geschichten sind alle mit der Storyline Methode entstanden und
          zeigen euch wie das Spiel funktioniert.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {STORIES.map((story) => (
          <Grid item xs={12} md={6} lg={4}>
            <Card raised>
              <CardContent>
                <Typography variant="h5" component="div" marginBottom={1}>
                  {story.concept.title}
                </Typography>
                <Stack direction="row" spacing={1} marginBottom={1}>
                  {story.concept.genres.map((genre) => (
                    <Chip label={genre} variant="outlined" size="small" />
                  ))}
                </Stack>
                <Typography variant="body2">
                  {story.concept.world}...
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={NavLink} to={`/examples/${story.id}`}>
                  Lesen
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
