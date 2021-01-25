import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import { SideDrawerContainer, MobileLogoContainer } from "./Styles";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <SideDrawerContainer open={props.open}>
        <MobileLogoContainer>
          <Logo />
        </MobileLogoContainer>
        <nav>
          <NavigationItems />
        </nav>
      </SideDrawerContainer>
    </>
  );
};

export default SideDrawer;
