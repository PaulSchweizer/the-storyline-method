import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import { Episode } from "../../../types/Story";
import { HashLink } from "react-router-hash-link";
import { ICONS } from "../../Icons";
import StepTreeItem from "./StepTreeItem";
import { StepType } from "../../App/App";
import { TimelineDot } from "@mui/lab";
import { useLocation } from "react-router-dom";
import { useState } from "react";

interface Props {
  episode: Episode;
  roundIndex: number;
  index: number;
}
export default function EpisodeTreeItem(props: Props) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <>
      <ListItem
        button
        sx={{ pl: 8 }}
        onClick={() => setOpen(!open)}
        component={HashLink}
        to={{
          ...location,
          hash: `${props.roundIndex}-${props.index}`,
        }}
        scroll={(el: any) =>
          el.scrollIntoView({ behavior: "auto", block: "center" })
        }
      >
        <ListItemIcon>
          <TimelineDot color="primary" variant="outlined">
            {ICONS.Episodes}
          </TimelineDot>
        </ListItemIcon>
        <ListItemText
          primary={`Episode ${props.roundIndex + 1}.${props.index + 1}`}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto">
        <List component="div" disablePadding>
          {props.episode.steps.Premise && (
            <StepTreeItem
              step={StepType.Premise}
              roundIndex={props.roundIndex}
              episodeIndex={props.index}
            />
          )}
          {props.episode.steps.Prologue && (
            <StepTreeItem
              step={StepType.Prologue}
              roundIndex={props.roundIndex}
              episodeIndex={props.index}
            />
          )}
          {props.episode.steps.Trailer && (
            <StepTreeItem
              step={StepType.Trailer}
              roundIndex={props.roundIndex}
              episodeIndex={props.index}
            />
          )}
          {props.episode.steps.Plotpoints && (
            <StepTreeItem
              step={StepType.Plotpoints}
              roundIndex={props.roundIndex}
              episodeIndex={props.index}
            />
          )}
          {props.episode.steps.Finale && (
            <StepTreeItem
              step={StepType.Finale}
              roundIndex={props.roundIndex}
              episodeIndex={props.index}
            />
          )}
          {props.episode.steps.Epilogue && (
            <StepTreeItem
              step={StepType.Epilogue}
              roundIndex={props.roundIndex}
              episodeIndex={props.index}
            />
          )}
        </List>
      </Collapse>
    </>
  );
}
