import React from "react";
import { NavigationListUl, NavigationListLi, NavigationLink } from "./Styles";

const NavigationItems = (props) => {
  return (
    <NavigationListUl>
      <NavigationListLi>
        <NavigationLink to="/" exact>
          Burger Builder
        </NavigationLink>
        {props.isAuthenticated ? (
          <NavigationLink to="/orders">Orders</NavigationLink>
        ) : (
          ""
        )}
        {props.isAuthenticated ? (
          <NavigationLink to="/logout">Logout</NavigationLink>
        ) : (
          <NavigationLink to="/auth">Login</NavigationLink>
        )}
      </NavigationListLi>
    </NavigationListUl>
  );
};

export default NavigationItems;
