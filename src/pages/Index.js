import React from "react";
// import PropTypes from "prop-types";
import { WidthLimiterContainer } from "../components/layout/styles";
import BurgerBuilder from "../components/BurgerBuilder/Index";

const Index = () => {
  return (
    <WidthLimiterContainer>
      <BurgerBuilder />
    </WidthLimiterContainer>
  );
};

// Index.propTypes = {};

export default Index;
