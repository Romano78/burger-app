import styled, { keyframes } from "styled-components";

const checkoutAnimationBtn = keyframes`
  0% {
    transform: scale(1)
  }

  60% {
    transform: scale(1.1)
  }

  %100 {
    transform: scale(1)
  }
`;

export const OrderButton = styled.button`
  background-color: #dad735;
  border: 1px solid #966909;
  color: #966909;
  outline: none;
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;
  cursor: pointer;

  &:hover,
  :active {
    background-color: #a0db41;
    border: 1px solid #966909;
    color: #966909;
  }

  &:disabled {
    background-color: #c7c6c6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
  }

  &:not(:disabled) {
    animation: ${checkoutAnimationBtn} 0.4s linear;
  }

  &:focus {
    outline: none;
  }
`;
export const Test = styled.div`
  overflow: hidden;
  display: flex;
`;

export const BurgerContainer = styled.div`
  width: 100%;
  margin: 80px auto;
  overflow: auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  white-space: nowrap;

  @media (min-width: ${(props) =>
      props.theme.breakpoints.md}) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }

  @media (min-width: ${(props) =>
      props.theme.breakpoints.s}) and (min-height: ${(props) =>
      props.theme.breakpoints.sh1}) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: ${(props) =>
      props.theme.breakpoints.s}) and (min-height: ${(props) =>
      props.theme.breakpoints.sh}) {
    width: 350px;
    min-height: 480px;
  }
`;

export const BreadBottom = styled.div`
  height: 13%;
  width: 80%;
  background: linear-gradient(#f08e4a, #e27b36);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
`;
export const BreadTop = styled.div`
  height: 20%;
  width: 80%;
  background: linear-gradient(#bc581e, #e27b36);
  border-radius: 50% 50% 0 0;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
  position: relative;
`;
export const Seeds1 = styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: white;
  left: 30%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(-20deg);
  box-shadow: inset -2px -3px #c9c9c9;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: -170%;
    top: -260%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px 2px #c9c9c9;
  }

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 180%;
    top: -50%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px -3px #c9c9c9;
  }
`;
export const Seeds2 = styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: white;
  left: 64%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(10deg);
  box-shadow: inset -3px 0 #c9c9c9;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 150%;
    top: -130%;
    border-radius: 40%;
    transform: rotate(90deg);
    box-shadow: inset 1px 3px #c9c9c9;
  }
`;
export const Meat = styled.div`
  width: 80%;
  height: 8%;
  background: linear-gradient(#7f3608, #702e05);
  margin: 2% auto;
  border-radius: 15px;
`;
export const Cheese = styled.div`
  width: 90%;
  height: 4.5%;
  margin: 2% auto;
  background: linear-gradient(#f4d004, #d6bb22);
  border-radius: 20px;
`;
export const Salad = styled.div`
  width: 85%;
  height: 7%;
  margin: 2% auto;
  background: linear-gradient(#228c1d, #91ce50);
  border-radius: 20px;
`;
export const Bacon = styled.div`
  width: 80%;
  height: 3%;
  background: linear-gradient(#bf3813, #c45e38);
  margin: 2% auto;
`;

export const BuildControlContainer2 = styled.div`
  width: 100%;
  background-color: #cf8f3e;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`;
