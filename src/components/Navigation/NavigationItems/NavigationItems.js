import React from "react";
import { NavigationListUl, NavigationListLi, NavigationLink } from "./Styles";

const NavigationItems = () => {
  return (
    <NavigationListUl>
      <NavigationListLi>
        <NavigationLink to="/" exact>
          Burger Builder
        </NavigationLink>
        <NavigationLink to="/orders">Orders</NavigationLink>
      </NavigationListLi>
    </NavigationListUl>
  );
};

export default NavigationItems;
