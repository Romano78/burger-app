import styled, { css } from "styled-components";

const formError = ({ isValid, touched }) => {
  if (touched && !isValid) {
    return css`
      border: 1px solid red;
      background-color: #ff8989;

      &::placeholder {
        color: black !important;
      }
    `;
  } else {
    return css`
      border: 1px solid #ccc;
      background-color: white;
    `;
  }
};

export const InputStyled = styled.input`
  outline: none;
  ${formError}
  font: inherit;
  padding: 6px 10px;
  width: 100%;
  display: block;
  box-sizing: border-box;

  &:focus {
    outline: none;
    background: #eee;
    opacity: 0.8;
  }

  &::placeholder {
    color: grey;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

export const TextArea = styled.textarea``;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: white;
  color: grey;
  font-weight: bold;
  font: inherit;

  &:focus {
    outline: none;
    background: #eee;
    opacity: 0.8;
  }
`;

export const Option = styled.option``;
