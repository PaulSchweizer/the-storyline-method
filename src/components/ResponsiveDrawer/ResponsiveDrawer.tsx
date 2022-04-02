import { Collapse, Divider, Link } from "@mui/material";
import { ExpandLess, ExpandMore, Home } from "@mui/icons-material";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { STORIES, driveThruLink } from "../App/App";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Icon } from "@mdi/react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { MenuBook } from "@mui/icons-material";
import StoryTree from "../Examples/StoryTree/StoryTree";
import Toolbar from "@mui/material/Toolbar";
import { mdiFilePdfBox } from "@mdi/js";
import { useTranslation } from "react-i18next";

interface Props {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

export default function ResponsiveDrawer(props: Props) {
  const { pathname } = useLocation();
  const { storyId } = useParams<{ storyId: string }>();
  const { t } = useTranslation();
  const { drawerWidth, mobileOpen, handleDrawerToggle } = props;
  const selected = pathname.startsWith("/examples");

  const drawer = (
    <Box>
      <Toolbar />
      <List sx={{ paddingTop: 0 }}>
        <ListItem
          button
          selected={pathname === "/"}
          component={NavLink}
          to={"/"}
        >
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary={"Übersicht"} />
        </ListItem>
        <Divider />
        <ListItem button component={Link} target="_blank" href={driveThruLink}>
          <ListItemIcon>
            <Icon path={mdiFilePdfBox} size={1} />
          </ListItemIcon>
          <ListItemText primary={t("MainHeader.get_the_pdf")} />
        </ListItem>
        <Divider />
        <ListItem
          button
          selected={selected}
          component={NavLink}
          to={"/examples"}
        >
          <ListItemIcon>
            <MenuBook />
          </ListItemIcon>
          <ListItemText primary={"Beispiele"} />
          {selected ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={selected} timeout="auto">
          <List sx={{ paddingBottom: 0, paddingTop: 0 }}>
            {STORIES.map((story) => (
              <StoryTree
                story={story}
                selected={storyId === story.id}
                key={story.id}
              />
            ))}
          </List>
        </Collapse>
        <Divider />
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
