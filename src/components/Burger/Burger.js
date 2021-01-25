import React, { lazy, Suspense } from "react";
import { BurgerContainer, Test } from "./Styles";
// import BurgerIngredient from "./BurgerIngredient";
const BurgerIngredient = lazy(() => import("./BurgerIngredient"));

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].length >= 0
        ? [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
          })
        : ""; // array with two elements
    })
    .reduce((prevValue, currentValue) => {
      return prevValue.concat(currentValue);
    }, []);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Test className="TESTS">
        <BurgerContainer>
          <BurgerIngredient type="bread-top" />
          {transformedIngredients.length === 0 ? (
            <div>Enter Ingredients</div>
          ) : (
            transformedIngredients
          )}
          <BurgerIngredient type="bread-bottom" />
        </BurgerContainer>
      </Test>
    </Suspense>
  );
};

export default Burger;
