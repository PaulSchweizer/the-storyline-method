import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

import { HashLink } from "react-router-hash-link";
import { ICONS } from "../../Icons";
import RoundTreeItem from "./RoundTreeItem";
import Story from "../../../types/Story";
import { TimelineDot } from "@mui/lab";
import { useTranslation } from "react-i18next";

interface Props {
  story: Story;
  selected: boolean;
}
export default function StoryTree(props: Props) {
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <>
      <ListItem
        button
        sx={{ pl: 4 }}
        selected={props.selected}
        component={Link}
        to={`/examples/${props.story.id}`}
      >
        <ListItemText primary={props.story.concept.title} />
        {props.selected ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={props.selected} timeout="auto">
        <List component="div" disablePadding>
          <ListItem
            button
            sx={{ pl: 4 }}
            component={HashLink}
            to={{
              ...location,
              hash: "Concept",
            }}
            scroll={(el: any) =>
              el.scrollIntoView({ behavior: "auto", block: "center" })
            }
          >
            <ListItemIcon>
              <TimelineDot color="primary" variant="outlined">
                {ICONS.Concept}
              </TimelineDot>
            </ListItemIcon>
            <ListItemText primary={t("StoryTimeline.Sections.Concept")} />
          </ListItem>

          <ListItem
            button
            sx={{ pl: 4 }}
            component={HashLink}
            to={{
              ...location,
              hash: "Protagonists",
            }}
            scroll={(el: any) =>
              el.scrollIntoView({ behavior: "auto", block: "center" })
            }
          >
            <ListItemIcon>
              <TimelineDot color="primary" variant="outlined">
                {ICONS.Protagonists}
              </TimelineDot>
            </ListItemIcon>
            <ListItemText primary={t("StoryTimeline.Sections.Protagonists")} />
          </ListItem>

          <ListItem
            button
            sx={{ pl: 4 }}
            component={HashLink}
            to={{
              ...location,
              hash: "Pilot",
            }}
            scroll={(el: any) =>
              el.scrollIntoView({ behavior: "auto", block: "center" })
            }
          >
            <ListItemIcon>
              <TimelineDot color="primary" variant="outlined">
                {ICONS.Pilot}
              </TimelineDot>
            </ListItemIcon>
            <ListItemText primary={t("StoryTimeline.Sections.Pilot")} />
          </ListItem>

          {props.story.rounds.map((round, roundIndex) => {
            return <RoundTreeItem round={round} index={roundIndex} />;
          })}
        </List>
      </Collapse>
    </>
  );
}
