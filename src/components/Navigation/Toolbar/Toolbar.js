import React, { lazy, Suspense } from "react";
import { ToolBarHeader, LogoContainer, NavigationContainer } from "./Styles";
// import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
const Logo = lazy(() => import("../../Logo/Logo"));

const Toolbar = (props) => {
  return (
    <ToolBarHeader>
      <DrawerToggle openDrawer={props.open} />
      <LogoContainer>
        <Suspense fallback={<div>loading...</div>}>
          <Logo />
        </Suspense>
      </LogoContainer>
      <NavigationContainer>
        <NavigationItems isAuthenticated={props.isAuth} />
      </NavigationContainer>
    </ToolBarHeader>
  );
};

export default Toolbar;
