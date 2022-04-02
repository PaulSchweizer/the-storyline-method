import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

import { HashLink } from "react-router-hash-link";
import { ICONS } from "../../Icons";
import { StepType } from "../../App/App";
import { TimelineDot } from "@mui/lab";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
  step: StepType;
  roundIndex: number;
  episodeIndex: number;
}
export default function StepTreeItem(props: Props) {
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <>
      <ListItem
        button
        sx={{ pl: 12 }}
        component={HashLink}
        to={{
          ...location,
          hash: `${props.roundIndex}-${props.episodeIndex}-${props.step}`,
        }}
        scroll={(el: any) =>
          el.scrollIntoView({ behavior: "auto", block: "center" })
        }
      >
        <ListItemIcon>
          <TimelineDot color="primary" variant="outlined">
            {ICONS[props.step]}
          </TimelineDot>
        </ListItemIcon>
        <ListItemText primary={t(`StoryTimeline.Sections.${props.step}`)} />
      </ListItem>
    </>
  );
}
