import React from "react";
import { OrderContainer } from "./Styles";

const Order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }
  return (
    <OrderContainer>
      <p>Ingredients: </p>
      {ingredients.map((i) => {
        return (
          <span
            style={{
              textTransform: "capitalize",
              display: "inline-block",
              margin: "0 8px",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            {i.name}: {i.amount}
          </span>
        );
      })}

      <p>
        Price: <strong>USD 5.45 (to be fixed)</strong>
      </p>
    </OrderContainer>
  );
};

export default Order;
