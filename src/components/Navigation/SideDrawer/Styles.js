import styled, { css } from "styled-components";
import { LogoContainer } from "../Toolbar/Styles";

const SideBarAnimation = ({ open }) => {
  if (open) {
    return css`
      transform: translateX(0);
    `;
  } else {
    return css`
      transform: translateX(-100%);
    `;
  }
};

export const MobileLogoContainer = styled(LogoContainer)`
  height: 11%;
  margin-bottom: 32px;
`;

export const SideDrawerContainer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  ${SideBarAnimation}

  @media (min-width: 600px) {
    display: none;
  }
`;
