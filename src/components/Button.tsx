import styled from "styled-components";
import colors from "../utils/colors";
import { darken } from "polished";

const Button = styled.button`
  background-color: ${colors.blue};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
  padding: 1rem;
  font-family: Rubik, sans-serif;
  cursor: pointer;
  outline: none;
  transition: 0.2s ease;

  &:hover {
    background-color: ${darken(0.05)(colors.blue)};
  }
`;

export default Button;
