import React from "react";
import ButtonStyled from "../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredientSummary).map(
    (igKey) => {
      return (
        <li key={igKey}>
          <span styles={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {props.ingredientSummary[igKey]}
        </li>
      );
    }
  );

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger witht the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <storng>Total Price: {props.price.toFixed(2)} $</storng>
      </p>
      <p>Continue to checkout ? </p>
      <ButtonStyled clicked={props.purchasedCancel}>CANCEL</ButtonStyled>
      <ButtonStyled success clicked={props.purchasedContinued}>
        CONTINUE
      </ButtonStyled>
    </>
  );
};

export default OrderSummary;
