import React, { lazy, Suspense } from "react";
// import Logo from "../../Logo/Logo";

import NavigationItems from "../NavigationItems/NavigationItems";
import { SideDrawerContainer, MobileLogoContainer } from "./Styles";
import Backdrop from "../../UI/Backdrop/Backdrop";
const Logo = lazy(() => import("../../Logo/Logo"));

const SideDrawer = (props) => {
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <SideDrawerContainer open={props.open}>
        <MobileLogoContainer>
          <Suspense fallback={<div>loading..</div>}>
            <Logo />
          </Suspense>
        </MobileLogoContainer>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </SideDrawerContainer>
    </>
  );
};

export default SideDrawer;
