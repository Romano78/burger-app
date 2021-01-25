import React from "react";
import { NavigationListUl, NavigationListLi, NavigationLink } from "./Styles";

const NavigationItems = () => {
  return (
    <NavigationListUl>
      <NavigationListLi>
        <NavigationLink href="/" active>
          Burger Builder
        </NavigationLink>
        <NavigationLink href="/">Checkout</NavigationLink>
      </NavigationListLi>
    </NavigationListUl>
  );
};

export default NavigationItems;
