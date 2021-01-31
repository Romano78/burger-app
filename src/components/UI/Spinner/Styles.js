import styled, { keyframes } from "styled-components";

const SpinnerAnimation = keyframes`
from {
    transform: rotate(0deg)
}

to {
    transform: rotate(360deg)
}
`;

export const SpinnerContainer = styled.div`
  height: 30px;
  width: 30px;
  border: 2px solid #f8049c;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${SpinnerAnimation} 1s linear infinite;
`;
