import styled, { css } from "styled-components";

const Test = ({ Less, More }) => {
  if (Less) {
    return css`
      background-color: #d39952;
      color: white;

      &:hover {
        background-color: #daa972;
        color: white;
      }

      &:disabled {
        background-color: #cccc;
      }
    `;
  } else if (More) {
    return css`
      background-color: #8f5e1e;
      color: white;

      &:hover {
        background-color: #99703f;
        color: white;
      }
    `;
  }
};

export const BuildControlContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

export const BuildControlLabel = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`;

export const BuildButton = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;
  ${Test}
`;
