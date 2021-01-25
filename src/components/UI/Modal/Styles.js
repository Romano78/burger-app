import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 500;
  background-color: #ffff;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  transform: ${(props) =>
    props.show ? "translateY(0)" : "translateY(-100vh)"};
  opacity: ${(props) => (props.show ? "opacity: 1" : "opacity: 0")};
  transition: ${(props) => (props.show ? "all 0.3s ease-out" : "")};
  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;
