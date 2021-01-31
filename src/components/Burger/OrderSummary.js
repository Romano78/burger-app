import React from "react";
import ButtonStyled from "../UI/Button/Button";
import { Link } from "react-router-dom";

const OrderSummary = (props) => {
  let ingredientSummaryProps = [];
  const ingredientSummary = Object.keys(props.ingredientSummary).map(
    (igKey) => {
      ingredientSummaryProps.push(
        `${encodeURIComponent(igKey)}=${encodeURIComponent(
          props.ingredientSummary[igKey]
        )}`
      );
      return (
        <li key={igKey}>
          <span styles={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {props.ingredientSummary[igKey]}
        </li>
      );
    }
  );

  const queryParams = ingredientSummaryProps.join("&");
  console.log(queryParams);

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger witht the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)} $</strong>
      </p>
      <p>Continue to checkout ? </p>
      <ButtonStyled clicked={props.purchasedCancel}>CANCEL</ButtonStyled>
      <Link
        to={{
          pathname: "/checkout",
          search: `?${queryParams}`,
        }}
      >
        <ButtonStyled success clicked={props.purchasedContinued}>
          CONTINUE
        </ButtonStyled>
      </Link>
    </>
  );
};

export default OrderSummary;
