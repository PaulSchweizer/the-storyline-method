import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Story, { Step } from "../../../types/Story";
import { Timeline, TimelineDot, TimelineSeparator } from "@mui/lab";

import ConceptItem from "./ConceptItem";
import { Fragment } from "react";
import { ICONS } from "../../Icons";
import ProtagonistItem from "./ProtagonistItem";
import StepItem from "./StepItem";
import { StepType } from "../../App/App";
import _ from "lodash";

interface Props {
  step: StepType;
  label: string;
  color: string;
}

function Title(props: Props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isSmallScreen ? (
        <Stack direction="row" alignItems="center" spacing={2}>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              {ICONS[props.step]}
            </TimelineDot>
          </TimelineSeparator>
          <Typography variant="h4" sx={{ color: props.color }}>
            {props.label}
          </Typography>
        </Stack>
      ) : (
        <Typography variant="h4" sx={{ color: props.color }}>
          {props.label}
        </Typography>
      )}
    </>
  );
}

interface StoryProps {
  story: Story;
}
export default function StoryTimeline(props: StoryProps) {
  const stepTypes = [
    "Premise",
    "Prologue",
    "Trailer",
    "Plotpoints",
    "Finale",
    "Epilogue",
  ];

  return (
    <Grid container justifyContent="center">
      <Grid item lg={7} md={8} xs={12}>
        <Timeline position="right">
          <StepItem
            type="Concept"
            text={
              <>
                <Title
                  step={StepType.Concept}
                  label="Concept"
                  color="#00a2bd"
                />
                <ConceptItem concept={props.story.concept} />
              </>
            }
            id="Concept"
            isFirst={true}
          />

          <StepItem
            type="Protagonists"
            text={
              <Title
                step={StepType.Protagonists}
                label="Protagonists"
                color="#13aa74"
              />
            }
            id="Protagonists"
          />
          {props.story.protagonists.map((protagonist, protagonistIndex) => {
            return (
              <StepItem
                key={`Protagonists-${protagonistIndex}`}
                id={
                  protagonistIndex === 0
                    ? `Protagonists-${protagonistIndex}`
                    : undefined
                }
                type={"Protagonists"}
                text={<ProtagonistItem protagonist={protagonist} />}
              />
            );
          })}

          <StepItem
            type="Pilot"
            text={<Title step={StepType.Pilot} label="Pilot" color="#67b437" />}
            id="Pilot"
          />
          {props.story.pilot.scenes.map((scene, sceneIndex) => {
            return (
              <StepItem
                key={`Pilot-${sceneIndex}`}
                id={sceneIndex === 0 ? `Pilot-${sceneIndex}` : undefined}
                type={"Pilot"}
                text={<Typography>{scene.text}</Typography>}
                isLast={sceneIndex + 1 === props.story.pilot.scenes.length}
              />
            );
          })}

          {props.story.rounds.map((round, roundIndex) => {
            return (
              <Fragment key={roundIndex}>
                <StepItem
                  type="Review"
                  text={
                    <Title
                      step={StepType.Review}
                      label={`Round ${roundIndex + 1}`}
                      color="#f7e000"
                    />
                  }
                  id={`${roundIndex}`}
                  isFirst={true}
                  isLast={true}
                />
                {round.episodes.map((episode, episodeIndex) => {
                  return (
                    <Fragment key={`${roundIndex}-${episodeIndex}`}>
                      <StepItem
                        type="Episodes"
                        text={
                          <Title
                            step={StepType.Episodes}
                            label={` Episode ${roundIndex + 1}.${
                              episodeIndex + 1
                            }`}
                            color="#d3d800"
                          />
                        }
                        id={`${roundIndex}-${episodeIndex}`}
                        isFirst={true}
                      />
                      {stepTypes.map((stepName) => {
                        const steps = Object.keys(episode.steps);
                        const lastStep = steps[steps.length - 1];
                        return _(episode.steps)
                          .get(stepName)
                          ?.map((step: Step, stepIndex: number) => {
                            return (
                              <StepItem
                                key={`${roundIndex}-${episodeIndex}-${stepIndex}`}
                                id={
                                  stepIndex === 0
                                    ? `${roundIndex}-${episodeIndex}-${stepName}`
                                    : undefined
                                }
                                type={stepName}
                                text={<Typography>{step.text}</Typography>}
                                isLast={
                                  lastStep === stepName &&
                                  stepIndex ===
                                    _(episode.steps).get(stepName).length - 1
                                }
                              />
                            );
                          });
                      })}
                    </Fragment>
                  );
                })}
              </Fragment>
            );
          })}
        </Timeline>
      </Grid>
    </Grid>
  );
}
