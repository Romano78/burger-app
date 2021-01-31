import styled from "styled-components";

export const ContactContainer = styled.div`
  margin: 20px auto;
  width: 80px;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

export const Input = styled.input`
  display: block;
  margin: auto;
`;

export const Form = styled.form``;