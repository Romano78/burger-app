import React from "react";
import { CheckoutSummaryContainer, CheckoutSummaryBody } from "./Styles";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

// import IngredientContext from "../../../context/IngredientContext";

const CheckoutSummary = (props) => {
  return (
    <CheckoutSummaryContainer>
      <h1>We hope it tastes good</h1>
      <CheckoutSummaryBody>
        <Burger ingredients={props.ingredient} />
      </CheckoutSummaryBody>
      <Button clicked={props.onCheckoutCancelled}>CANCEL</Button>
      <Button success clicked={props.onCheckoutContinued}>
        Continue
      </Button>
    </CheckoutSummaryContainer>
  );
};

export default CheckoutSummary;
