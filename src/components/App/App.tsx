import { AppBar, Box } from "@mui/material";

import MainHeader from "../MainHeader";
import ResponsiveDrawer from "../ResponsiveDrawer/ResponsiveDrawer";
import shadowhunter from "./../../resources/stories/de/schattenjaeger.json";
import { useState } from "react";

export const driveThruLink =
  "https://www.drivethrurpg.com/product/342631/Die-Storyline-Methode";
export const twitterLink = "https://twitter.com/StorylineMethod";

export const STORIES = [shadowhunter];

export enum StepType {
  Welcome = "Welcome",
  Concept = "Concept",
  Protagonists = "Protagonists",
  Pilot = "Pilot",
  Feedback = "Feedback",
  Episodes = "Episodes",
  Premise = "Premise",
  Prologue = "Prologue",
  Trailer = "Trailer",
  Plotpoints = "Plotpoints",
  Finale = "Finale",
  Epilogue = "Epilogue",
  Review = "Review",
  NextEpisode = "NextEpisode",
}

export default function App(props: React.PropsWithChildren<{}>) {
  const drawerWidth = 280;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <MainHeader handleDrawerToggle={handleDrawerToggle} />
      <AppBar />
      <Box sx={{ display: "flex" }}>
        <ResponsiveDrawer
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          {props.children}
        </Box>
      </Box>
    </>
  );
}
