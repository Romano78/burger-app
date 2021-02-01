import React from "react";
import { InputStyled, InputContainer, Label, Select, Option } from "./Styles";

const Input = (props) => {
  let inputEl = null;

  switch (props.elementType) {
    case "input":
      inputEl = (
        <InputStyled
          {...props.elementConfig}
          value={props.value}
          onChange={props.change}
          isValid={props.isValid}
          touched={props.touched}
        />
      );
      break;
    case "textarea":
      inputEl = (
        <InputStyled
          {...props.elementConfig}
          value={props.value}
          onChange={props.change}
          isValid
          touched={props.touched}
        />
      );
      break;
    case "select":
      inputEl = (
        <Select
          {...props.elementConfig}
          value={props.value}
          onChange={props.change}
        >
          {props.elementConfig.options.map((option) => {
            return (
              <Option value={option.value} key={option.value}>
                {option.displayValue}
              </Option>
            );
          })}
        </Select>
      );
      break;
    default:
      inputEl = (
        <InputStyled
          {...props.elementConfig}
          value={props.value}
          onChange={props.change}
          isValid
          touched={props.touched}
        />
      );
  }
  return (
    <InputContainer>
      <Label>{props.label}</Label>
      {inputEl}
    </InputContainer>
  );
};

export default Input;
