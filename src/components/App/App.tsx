import {
  AppBar,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "../Home/Home";
import MainHeader from "../MainHeader";
import { useTheme } from "./App.styles";

export const driveThruLink =
  "https://www.drivethrurpg.com/product/342631/Die-Storyline-Methode";

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

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useTheme(prefersDarkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainHeader />
        <AppBar />
        <Switch>
          <Route exact path="">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
