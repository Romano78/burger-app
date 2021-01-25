import React from "react";
import { DrawerToggleContainer } from "./Styles";
// const MenuIcon = lazy(() => import("@material-ui/icons/Menu"));
import MenuIcon from "@material-ui/icons/Menu";

const DrawerToggle = (props) => {
  return (
    <DrawerToggleContainer onClick={props.openDrawer}>
      <MenuIcon style={{ fontSize: "40px", marginTop: "8px" }} />
    </DrawerToggleContainer>
  );
};

export default DrawerToggle;
