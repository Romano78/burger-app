import React from "react";
import { ToolBarHeader, LogoContainer, NavigationContainer } from "./Styles";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
  return (
    <ToolBarHeader>
      <DrawerToggle openDrawer={props.open} />
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavigationContainer>
        <NavigationItems />
      </NavigationContainer>
    </ToolBarHeader>
  );
};

export default Toolbar;
