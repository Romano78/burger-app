import React from "react";
import styled from "styled-components";
import BurgerLogo from "../../assets/images/burger-logo.png";

const LogoContainer = styled.div`
  background-color: white;
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;

  img {
    height: 100%;
  }
`;

const Logo = (props) => {
  return (
    <LogoContainer>
      <img src={BurgerLogo} alt="MyBurger" />
    </LogoContainer>
  );
};

export default Logo;
