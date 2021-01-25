import React from "react";
import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-family: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  ${(props) =>
    props.success
      ? css`
          color: #5c9210;
        `
      : css`
          color: #944317;
        `};

  &:focus {
    outline: none;
  }
`;

const Button = (props) => {
  return (
    <ButtonStyled {...props} onClick={props.clicked}>
      {props.children}
    </ButtonStyled>
  );
};

export default Button;
