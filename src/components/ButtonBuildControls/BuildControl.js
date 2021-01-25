import React from "react";
import {
  BuildControlContainer,
  BuildButton,
  BuildControlLabel,
} from "./Styles";

const BuildControls = (props) => {
  return (
    <>
      <BuildControlContainer>
        <BuildControlLabel>{props.label}</BuildControlLabel>
        <BuildButton
          Less
          onClick={props.removed}
          disabled={props.disabledInfoProps}
        >
          Less
        </BuildButton>
        <BuildButton More onClick={props.added}>
          More
        </BuildButton>
      </BuildControlContainer>
    </>
  );
};

export default BuildControls;
