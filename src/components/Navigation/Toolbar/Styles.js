import styled from "styled-components";

export const ToolBarHeader = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;

  nav {
    height: 100%;
  }
`;

export const LogoContainer = styled.div`
  height: 80%;
  /* 
  @media (max-width: 599px) {
    display: none;
  } */
`;

export const NavigationContainer = styled.nav`
  @media (max-width: 599px) {
    display: none;
  }
`;
