import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Person from "@material-ui/icons/Person";
import classes from "./style.module.css";

const DrawerList = props => {
  const { closeDrawer, openLoginForm } = props;
  return (
    <div role="presentation">
      <List>
        <ListItem button onClick={closeDrawer}>
          <ListItemIcon className={classes.MuiListItemIcon}>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Chousin Rahit" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={openLoginForm}>
          <ListItemText primary="Login" />
        </ListItem>
      </List>
    </div>
  );
};

export default DrawerList;
