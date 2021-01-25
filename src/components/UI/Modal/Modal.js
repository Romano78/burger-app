import React from "react";
import { ModalContainer } from "./Styles";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <ModalContainer {...props}>{props.children}</ModalContainer>
    </>
  );
};

export default Modal;
