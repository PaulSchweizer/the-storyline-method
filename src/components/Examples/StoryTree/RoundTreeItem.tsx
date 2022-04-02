import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import EpisodeTreeItem from "./EpisodeTreeItem";
import { HashLink } from "react-router-hash-link";
import { ICONS } from "../../Icons";
import { Round } from "../../../types/Story";
import { TimelineDot } from "@mui/lab";
import { useLocation } from "react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  round: Round;
  index: number;
}
export default function RoundTreeItem(props: Props) {
  const location = useLocation();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <>
      <ListItem
        button
        sx={{ pl: 4 }}
        onClick={() => setOpen(!open)}
        component={HashLink}
        to={{
          ...location,
          hash: `${props.index}`,
        }}
        scroll={(el: any) =>
          el.scrollIntoView({ behavior: "auto", block: "center" })
        }
      >
        <ListItemIcon>
          <TimelineDot color="primary" variant="outlined">
            {ICONS.Review}
          </TimelineDot>
        </ListItemIcon>
        <ListItemText
          primary={`${t("StoryTimeline.Sections.Round")} ${props.index + 1}`}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto">
        <List component="div" disablePadding>
          {props.round.episodes.map((episode, episodeIndex) => {
            return (
              <EpisodeTreeItem
                episode={episode}
                roundIndex={props.index}
                index={episodeIndex}
              />
            );
          })}
        </List>
      </Collapse>
    </>
  );
}
