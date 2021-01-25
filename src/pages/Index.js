import React, { Suspense, lazy } from "react";
// import PropTypes from "prop-types";
import { WidthLimiterContainer } from "../components/layout/styles";
// import BurgerBuilder from "../components/BurgerBuilder/Index";
const BurgerBuilder = lazy(() => import("../components/BurgerBuilder/Index"));

const Index = () => {
  return (
    <WidthLimiterContainer>
      <Suspense fallback={<div>loading..</div>}>
        <BurgerBuilder />
      </Suspense>
    </WidthLimiterContainer>
  );
};

// Index.propTypes = {};

export default Index;
