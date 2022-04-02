import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import App from "./App";
import Examples from "../Examples/Examples";
import Home from "../Home/Home";
import { useTheme } from "./App.styles";

export default function Routes() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useTheme(prefersDarkMode);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <App>
              <Home />
            </App>
          </Route>
          <Route exact path="/examples">
            <App>
              <Examples />
            </App>
          </Route>
          <Route path="/examples/:storyId">
            <App>
              <Examples />
            </App>
          </Route>
          <Route path="*">
            <App>
              <Home />
            </App>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
