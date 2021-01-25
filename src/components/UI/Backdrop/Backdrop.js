import React from "react";
import { BackdropStyle } from "./Styles";

const Backdrop = (props) => {
  console.log(props);
  return props.show ? (
    <BackdropStyle onClick={props.clicked}></BackdropStyle>
  ) : null;
};

export default Backdrop;
