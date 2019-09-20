import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import DrawerList from "./DrawerList";
import DrawerLoginForm from "./DrawerLoginForm";

const LeftDrawer = props => {
  const { drawer, closeDrawer, openLoginForm, lgformOpen } = props;
  return (
    <Drawer open={drawer} onClose={closeDrawer}>
      <DrawerList closeDrawer={closeDrawer} openLoginForm={openLoginForm} />

      {lgformOpen ? <DrawerLoginForm /> : null}
    </Drawer>
  );
};

export default LeftDrawer;
