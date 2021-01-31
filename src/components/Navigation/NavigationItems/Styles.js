import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationListUl = styled.ul`
  list-style: none;

  @media (min-width: 600px) {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

export const NavigationListLi = styled.li`
  @media (min-width: 600px) {
    margin: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

export const NavigationLink = styled(NavLink)`
  margin: 10px 0;
  width: 100%;
  display: block;
  text-decoration: none;
  box-sizing: border-box;

  @media (min-width: 600px) {
    color: white;
    height: 100%;
    padding: 16px 10px;
    width: auto;
  }

  &:hover,
  &.active {
    color: #40a4c8;
    @media (min-width: 600px) {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: white;
    }
  }
`;
