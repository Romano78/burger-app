import styled from "styled-components";

export const WidthLimiterContainer = styled.div`
  /* padding-left: 20px; */
  /* padding-right: 20px; */
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 1440px;
    width: 100%;
    /* padding-left: 160px; */
    /* padding-right: 160px; */
  }
`;

export const BodyContainer = styled.main`
  margin-top: 60px;
`;
