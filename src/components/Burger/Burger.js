import React from "react";
import { BurgerContainer, Test } from "./Styles";
import BurgerIngredient from "./BurgerIngredient";

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      console.log([...Array(props.ingredients[igKey])]);
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
  );
};

export default Burger;
