import React from "react";
import { BuildControlContainer2, OrderButton } from "./Styles";
import BuildControls from "../ButtonBuildControls/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
];

const BuildControl = (props) => {
  const { burgerPrice } = props;

  return (
    <BuildControlContainer2>
      <p>
        Current Price:{" "}
        <strong style={{ color: "white" }}>{burgerPrice.toFixed(2)}$</strong>
      </p>
      {controls.map((ctrl) => {
        return (
          <BuildControls
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabledInfoProps={props.disabledInfoProps[ctrl.type]}
          />
        );
      })}
      <OrderButton disabled={!props.purchasable} onClick={props.ordered}>
        {props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}
      </OrderButton>
    </BuildControlContainer2>
  );
};

export default BuildControl;
